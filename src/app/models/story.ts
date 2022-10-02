export class Story {
  id?: number;
  title: String;
  content: String;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}