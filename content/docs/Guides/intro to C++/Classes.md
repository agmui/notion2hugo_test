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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626IFZJMH%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiCqlYf%2BUoTi06QIgTdXjpYuKsGVIewXGP7Vfx1BqIFAiEAzHgECOmtyjzLvERZu5pr8UONEkQw4fudZBJGv1t6Lrwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJxaGphj5YjX0qkP4CrcAyKteQTVPI5ur2skNd7TM7RQC0pJGuUdNptKET2NyPicZrSJRudF4nAIy9XrEh7wsV0RuoiihkI889KV5mzO6P%2FM%2BmKuDkYcBPNZ1o7tONzKL45C5KniGqbkYCPcfcctN5hMS9CBEqUCre33RQV5wYTMmhyA5fJ0jNff4IURtxGT4G3W0aJAI%2B4YW7OxVTYalfzyNNmLX2Z%2FVLpZbS4cTo7ZoI33WcB0YNDaUnC4msg0zHUFyYjALvdWu4GFo2bmLLwFh1nWLXK%2FM7KDeE%2FUk1V8tNDdTj32tw6n8HepBNIEN6PABbmsvFnO6P4%2BJVpRgBua5EGu098iMUpT0t41pKkx9wyk1hogHIRxlcTVaSmT%2FONoxWamw0L0a%2BLLjd9V4hd3rC%2BEUUp6tR9PNiZhOLeEX7F01BagiZL%2BO3OJU4cSbopLtKxj3JXKNxdUF2wwjjH8Hdcd9FxHDOgj4Fn6AJYVq138TW3lUabgh%2F8mgNQXTA416xW1YSrORXkoWRpdQMcRgOkSC1LPvmqGcy5F6nMnH3PItDGhGHhb7I64CxKK5ze2thqtHDN5lYwWZ5y6HKFKNU8kdenlXdI48gUz2ZuZ7NsauPV%2BfuL6ZS0Hm%2B7fbg3IicqV30j3bMQAMP2z6cAGOqUBP5%2BKkAg4%2FkUXxln3DzPClI7f%2BBjrKGsgNW4J8eo7C%2BC7e5huc9MEeehMjy9oLdMwJa6nQ8oYWQd4kDLtUkFDaDqNtdEu%2BLBjZqcX5b0rsSJEbE7QpfghRL9WpXJ6dvEQfFKT56Oyas0E6AwBE7RHZD1oZQ4H0MZF9Kq492dn99BS6Kx%2FXsDzNiILLdNlrsEYSZY%2BkB6s%2Bd1edLS0zc0NHlv8xBhl&X-Amz-Signature=4b735151ae4d980669a6b869ab9b1aed7343f13e558a10015fff314a8b3a17f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
