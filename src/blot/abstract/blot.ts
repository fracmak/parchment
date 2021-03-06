import LinkedList from '../../collection/linked-list';
import LinkedNode from '../../collection/linked-node';


interface Blot extends LinkedNode {
  parent: Parent;
  prev: Blot;
  next: Blot;
  domNode: Node;

  clone(): Blot;
  insertInto(parentBlot: Parent, refBlot?: Blot): void;
  isolate(index: number, length: number): Blot;
  offset(root?: Blot): number;
  remove(): void;
  replace(target: Blot): void;
  replaceWith(name: string, value: any): Blot;
  replaceWith(replacement: Blot): Blot;
  split(index: number, force?: boolean): Blot;
  wrap(name: string, value: any): Parent;
  wrap(wrapper: Parent): Parent;

  deleteAt(index: number, length: number): void;
  formatAt(index: number, length: number, name: string, value: any): void;
  insertAt(index: number, value: string, def?: any): void;
  optimize(): void;
  update(mutations?: MutationRecord[]): void;
}


interface Parent extends Blot {
  children: LinkedList<Blot>;
  domNode: HTMLElement;

  appendChild(child: Blot): void;
  build(): void;
  descendant<T>(type: { new (): T; }, index: number, inclusive: boolean): [T, number];
  descendants<T>(type: { new (): T; }, index: number, length: number): T[];
  insertBefore(child: Blot, refNode?: Blot): void;
  moveChildren(parent: Parent, refNode?: Blot): void;
  path(index: number, inclusive?: boolean): [Blot, number][];
  unwrap(): void;
}


interface Formattable extends Blot {
  format(name: string, value: any): void;
  formats(): { [index: string]: any };
}


interface Leaf extends Blot {
  index(node: Node, offset: number): number;
  position(index: number, inclusive: boolean): [Node, number];
  value(): any;
}


export { Blot, Parent, Formattable, Leaf };
