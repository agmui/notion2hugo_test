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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5YG5LC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFrXXceTV%2FfFgyRFPLvVi%2FKNj9J%2Bx5tQTlZKYi6GlV2cAiEAtkKN6guZxkKmsAvnhkFp4HfYYnXBe84IsTOrGHa4duYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQUNbkNCLHUBS%2FM4SrcAxf8YyIM0LumQgO2rv4Ukr73Aj9%2BdSAaeFgOXIMQ9F37KNRwB9rsDAqxpJWNh16jCbVsgFP%2BDwVEjbRUAUOJXI9RI0c7rAoIiIdSe3iNKsoZ0FgO6s50dOZiLRmXuzX2%2BiyarLDce6GsmywAM3wCq10zAS1lrHS%2FGLsy8%2FUfXWxUftiMzxWDlce11bFVxuJPZkbNv2N9EfVeDyAhRe5LABs%2FJjXL4RAvhYyfAu0uCUYcWy3VhqNHOSj5LlqzrkWSGUMUutq0CePcORyMygySNoxmpNYmy%2BBbc%2FNc%2FNyNlVDATBb6S38H4JAhbcEC62NU4hU2Y5p87XA4%2FNxNfOteO%2FBmtFoJwm1F0TJxCYulleGtkfFUhROsBA0C76ZQHPMuQ3h7C4E44wfuJIZ5q39EQNkxENvWycoHPQ4L0m6YofmOnV4B6i6B1PSzvmreUH0oVjBVHuWCPDzcNXVFtf48dN4a9G2jukQ8A3Rkh9uL5qDuVUZw0sd9Kn1ALUzzFy78fdCZdoSVrMTu45an95ucNUvT9Qd%2FgP%2B%2FuNqslkJF7ZWFf9mdBEtlZud9dlVG6iBn0q8n9Src4Qxgz1AccYI4eSsL%2BAZz2dO9%2Bg3cSfyP2OTdFiyWTBWLKC6QNxmnMPSNncQGOqUBgRLZianaOHbfAcvWV39xC8E6HL%2FxOTqRUrKwlDSxBGPnrzxBcJ%2B%2BVwWhqd54ajeelQ20H14APcyMyNUpysZbS3Cm6TpC93Vrvl%2FpaawHAImKqidZYmmzhNA6HswVUC4invdE3T9Bmubca%2Fxj7D0CU%2BmEBUiTtFfNub4AW5PNu4XEBFgvp3cIwjTzK%2BQgAk3aBOw0fpTi9hRPiViwD2HAeW7dRfz3&X-Amz-Signature=7ba47427b46daa9906710e802f6d89eaea3682f7d8314860fe635042876bdde7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
