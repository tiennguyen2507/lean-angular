import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseURL = 'https://nest-study.adaptable.app';

export const getUrl = (url: string) => `${baseURL}${url}`;

@Injectable({ providedIn: 'root' })
class HttpRequests {
  constructor(private http: HttpClient) {}

  get<T>(url: string) {
    return this.http.get<T>(getUrl(url), { headers: { token: 'abc' } });
  }

  post<T>(url: string, body: any) {
    return this.http.post<T>(getUrl(url), body, { headers: { token: 'abc' } });
  }

  push<T>(url: string, body: any) {
    return this.http.put<T>(getUrl(url), body, { headers: { token: 'abc' } });
  }

  patch<T>(url: string, body: any) {
    return this.http.patch<T>(getUrl(url), body, { headers: { token: 'abc' } });
  }

  delete<T>(url: string) {
    return this.http.delete<T>(getUrl(url), { headers: { token: 'abc' } });
  }
}

export default HttpRequests;
