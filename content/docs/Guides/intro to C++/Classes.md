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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OGQ2O3R%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGzNR8ENyW0RH8PvVg1CMCroOmWc7CjJaBFx8yrlRtxBAiAMCUww2R0eDrxPg7ZU%2F1jp6g6MlNgM4tDPF%2FmwP%2FWc%2FSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMdtQWFXpSWTSZwJKtwD2Nd2MnvlWzSc%2F5rpWwmo9EV47vvIBf7V6Dz0EBBGV4OxoABk4Zwi7xhJQITahyJU%2BZGbFK%2BddK1DWKjRPdepPRW%2FQF4ddYdH0NTKLr%2FPRJJsvcoxSjidrZfSju9tXZyK1%2FpZOOyJQuYbWe5J6mT96PJLZzfFJc4A4frdGWeh9zdTiVC0Zn%2B5VMQxgOpDHr870gmORmqtU6u%2F9OvE6Mvx8WuV%2FqUUh68mOm3MPeR%2BQskQoKHJy0inxQAVodzJ154RfW7gkFXuXHv7Y14K9GfCnXia%2Fcv6ZqPeyT5pzite6cP4j0WPR3BkYpYP0Rhm6xWQFohB8WMkyEDFtzelSQP%2FQoYhV%2FadnEvTq61tNrbTCBWEAhnC2hEhTmWvszHgCZMfW7r6qYWjLkC0knaAnkOqX%2FBHB%2BOcn66WpRSXjQk2wYXTZplbGJeQGIq4EFYie4Lc8pGAJC6ekF9giNXLokK%2B0EiSBqlDX9RSblxg8jSpJvFzTRRR7wPTEE0rmWuiVtaU8OCHh%2B5r%2BqV77zqRKuG0SQarEDse%2Fnjjc7%2Flufvp10G1aNbQxxjxAiG8P9foky4ks20W5k8NDp54IKG%2BLCQWPFpmPe3mgtaZBIWItCqXrruW6MZV5OnZ%2BjJO%2B5MwnvOgwAY6pgGlxIhi88tfUnR8VupjUkSk8vbRopiV1zl3qenRbAUxJUTtO0ueQVM5m6NFfuiI0wxA2Gp4haik4Xt4vCfbUErk%2BEqR5Tlky5KLjIA5MKOfwCLgDWYLB6YA6A523ECE0PDBKTReOmceJjrazQvZdv51XsOPi1Wqb47aYuQ3Zsa06rehdDdLE9ReElyWKzSqZiJGu%2F9Wgk%2FVlJgn8Ffoj5RBQ3esaO1Q&X-Amz-Signature=8726baa1cca6eaed7330dadaa47f7828ff72085bff4d4b1de7a5f7d555dbb324&X-Amz-SignedHeaders=host&x-id=GetObject)

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
