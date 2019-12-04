//--- implementational
interface Node {
  description?: EmbeddableString;
  name: string;
}

interface Link {
  explaination: string;
}

interface EmbeddedLink {
  label: string;
  link: Link;
  from: Node;
}

type EmbeddableString = (string | EmbeddedLink)[];

type url = string;

//--- conceptual
type Signal = Education | Employment | Proof;
type Proof = Credential | Reference | Output;

type Reference = Person;
interface Credential extends Node {
  awardedBy: Reference;
  date: Date;
  inputs: Node[]; //hmm
  record?: url;
}
type Output = Node;

type SocialEntity = Person | Organization;
interface Person extends Node {
  info?: url;
}
interface Organization extends Node {}

// Experiences are things that occurred in my life
interface Experience extends Node {
  date: Date;
  dateEnd?: Date;
}

interface Project extends Experience {
  abilities: Ability[];
  outputs: Output[];
  collaborators: Person[];
  subProjects: Project[];
}

interface Employment extends Project {
  employer: SocialEntity;
  reference: Reference;
}

interface Education extends Project {
  educators: SocialEntity[];
  award?: Credential;
  children?: Education[];
}

export interface Ability extends Node {
  subAbilities: Ability[];
  proof: Proof[];
}
