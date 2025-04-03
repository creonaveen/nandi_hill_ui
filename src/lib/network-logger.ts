export function setupNetworkLogger() {
  if (typeof window !== 'undefined') {
    const originalFetch = window.fetch;
    
    window.fetch = async function(...args) {
      const [url, config] = args;
      
      console.group(`Network Request: ${url}`);
      console.log('Request Config:', {
        method: config?.method,
        headers: config?.headers,
        body: config?.body ? JSON.parse(config.body as string) : undefined,
      });

      try {
        const response = await originalFetch.apply(this, args);
        const clone = response.clone();
        const data = await clone.json();
        
        console.log('Response:', {
          status: response.status,
          statusText: response.statusText,
          data,
        });
        
        console.groupEnd();
        return response;
      } catch (error) {
        console.error('Request Error:', error);
        console.groupEnd();
        throw error;
      }
    };
  }
} 