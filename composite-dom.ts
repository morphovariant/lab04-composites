interface IDomElement {
  print();
}

class DomElement implements IDomElement {
  private elementName:string;
  private childElements:DomElement[];
  private elementTextContent:string;

  constructor(elementName:string, elementTextContent?:string) {
    this.elementName = elementName;
    this.elementTextContent = elementTextContent;
    this.childElements = [];
  }

  addChildElement(element:DomElement) {
    this.childElements.push(element);
  }

  print() {
    console.log(`<${this.elementName}>`); //print open tag
    if (this.elementTextContent) {
      console.log(`${this.elementTextContent}`)
    }
    for (let child in this.childElements) {
      child.elementName.print();
    }
    console.log(`</${this.elementName}>`); //print closing tag
  }
}

class TextNode implements IDomElement {

}