---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657FLDUSG%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIHb%2B4QBYP7bYFTSesb3Y7qEcW0eFScFdVU9dIgd7X1L4AiBxX2HIXXMoLFaeXzrj6O51x54oqd8GQ%2Bk4UfJFRW9j6CqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM90EpHN3c89SKI54%2BKtwDrHlOecvJI%2Ft2ziG%2FV8rUK8dod%2BiwJQt67XJxWucy4zwu81X1IF6gL3VnF%2B0RxopRX8iwt%2FmItmwJRHpiMY9LoAPpglxzIObVs%2Bf77U9yLe%2FEcMolqRhaeEjEXCN%2FxirM1W%2BZJtiSL5taizJ4J7mCRy0jF3MTQoAYWa8De9Ub2SU7eR8KzgrZ9Kh4EcAkcWDwXzMOFw9v0lksj4bj2t7l9E0K4IlSdQJ97vKEsp6qmJv9%2FKbEYdmCbQFcfxQvmRjB2Mit1gID0tJjB2on1slMwgIlQmUjEWuBw9zf1Y8n9LfGXry3EUl89KXHVXDzTEjuEHoPs2bFV758FBsAE44gQEbGxkKau4QVJLvdApvVsrfkYYvNY6FMLm0pnYJsqKge2VQ4J0y0mBApmKdDl7PvWBVDgrplzO5QvwSismvpld8eO7QrGBriIquTESael89nTTBdfGsbA7iY8l6Bv5Eq0JG9pMCEoUxxwa%2BF6RDopCMAGlhGcVKH9fLPV2YwKulSqR6pFzT92u4xI%2B2LiryWvqiPUO3oT7ASsJPU68zdnWQF3MXjKclbCFqZZut5i%2FygrI%2BpZkVjStLp2wGbNwWaENMgak%2Bui9CraeG%2FzKvEHTuENBgQpBfBW0pyPZMwypnqwwY6pgGRfy2F5xBgGml0bgBolmWSiUZhXE4jTv%2FQe5wcisWoKyZZVn5hIGTpg4e%2BX08OvwHjxUDI4Wss3KfSg9HfPFE2grAIFcYydmABUat23nnblorFlNoUpHS7gY5wtOlS9cgyOCtJ09Z0b%2BdfOncUfC81m5Y9TES3wu99ILwa1lwbHETkjHIcswY7BED3LtoVv0gkefxAjma2Ti8jcCDu%2BlaYLqRPkxTu&X-Amz-Signature=f5d78ffb206d57a58060105502e53423920470d22d39a58dafb56e88033b4329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
