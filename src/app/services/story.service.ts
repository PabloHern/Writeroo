import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
export class Story {
  _id: number;
  title: string;
  content: string;
}
const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  endpoint = 'http://localhost:8080/writeroo/';

  constructor(private httpClient: HttpClient) { }

  createStory(story: Story): Observable<any> {
    let data = new URLSearchParams();
    data.append("title", story.title);
    data.append("content", story.content);
    return this.httpClient.post(this.endpoint, data, httpOptionsUsingUrlEncoded)
      .pipe(
        tap(_ => console.log(`Story created:`)),
        catchError(this.handleError<Story[]>('Create story'))
      );
  }

  getStories(): Observable<Story[]> {
    return this.httpClient.get<Story[]>(this.endpoint + 'list')
      .pipe(
        tap(users => console.log('Stories retrieved!')),
        catchError(this.handleError<Story[]>('Get story', []))
      );
  }
  getStory(id): Observable<Story[]> {
    return this.httpClient.get<Story[]>(this.endpoint + id)
      .pipe(
        tap(_ => console.log(`Story fetched: ${id}`)),
        catchError(this.handleError<Story[]>(`Get story id=${id}`))
      );
  }
  deleteStory(id): Observable<Story[]> {
    return this.httpClient.delete<Story[]>(this.endpoint + id)
      .pipe(
        tap(_ => console.log(`Story deleted: ${id}`)),
        catchError(this.handleError<Story[]>('Delete story'))
      );
  }
  updateStory(id, story: Story): Observable<any> {
    let data = new URLSearchParams();
    data.append("title", story.title);
    data.append("content", story.content);
    return this.httpClient.put(this.endpoint + id, data, httpOptionsUsingUrlEncoded)
      .pipe(
        tap(_ => console.log(`Story updated: ${id}`)),
        catchError(this.handleError<Story[]>('Update story'))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
