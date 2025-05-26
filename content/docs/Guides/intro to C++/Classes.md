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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XKU2MYX%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF27NAKtHe2fuAXsX3wzY%2FQQTbqt47yNBQTwk0IBrGGPAiBGZveJRNetFfhCdlCh1yGd2y4QAEZKFnf50rg4Bj%2BonCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMXh9OYiZl27fmlIEfKtwDxo8baLh%2B1hUvtPfbaBzJGHZfwDNcdRWqKH5cs1zE5GKC%2FGTfi%2Fq5b4tWKZbjpsfiB8wmVvO1CZDWYtKFjuZtB6QopXLL2piXxtCLkJ7YkJvN%2B2%2FV0qfvmiD5%2BBqv0jlxqHovC5%2FyfWGbGuWMGBcX%2Bzd44NEsVKJU2zlGs20JjfGzzsELQUto9E6Gl69sUDrcVTfHSvwh9YFqGWuhCyAHhZYzleLiQ5caOHlQpRiq%2BBgCtazm7b3iibTm3t5hb9XflEjoEv05k9%2BwlQlcpekvv4d%2FJdP7SPVAZaRgziddX3hymFdDRbhEuEaT8%2FedMHJ6dcy9xwS1%2FL84T1BdJrxaiZWNjqjuG%2FLbDuQDrgQxF%2Fpaq1Wxf22f%2BGV7hMswa0CXSAWU70v3LQCq%2FwKDZOgKDPQAF7v9WLL%2FrYAGuehs%2FFiyJ5d9QZlPRJ%2FtG0V59XVjIoIQfaTOxEDsG12U5MIHGo6GfkjbxNiMjfP%2B1auRB%2ByTDComKRQ%2FPcHfxZ7fezbtDMBAhldLT5Noqehvel4ueGI%2F3iP%2Bm4P9OL3FzRM34w5bxCRaGlFXFz3VNOQiqqSeOI8uLz3y1VVh98TtoSNs6lDV9aqGasqlLXvEYKmIBkU2j8EDmas9%2BoTG66Iwt6vTwQY6pgEboCt3ch6rRYyELk%2BsJ9uSJhoF7R2wXvO%2BhzjvjcMHlcrZf88Eo0N3Gp1tQ2gHDwIQhTANyHQtdyzrO5RLgI0dIZt3MfEexkT8gMETs%2BAMjFvElnD5qhd3h1wZnyPmz91m3UDGGD3OwtmVIR4SLLIG5w3w7O849kQJaIPPhqCmgH40zAzHWEHWU%2BwNTgZSgKoArlteTuToBKj%2FLMoFrfpJIbC7KHVw&X-Amz-Signature=e91c3cc84efc665eb2f71f11b1df305528b6e30ebb15cb14f8b4d5e65cfe0cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
