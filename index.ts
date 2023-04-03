// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
import { lastValueFrom, map } from 'rxjs';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export function getPlayers(): Promise<unknown> {
  return lastValueFrom(
    inject(HttpClient)
      .get('https://www.balldontlie.io/api/v1/players')
      .pipe(
        map((response: any) => {
          return response.data;
        })
      )
  );
}
