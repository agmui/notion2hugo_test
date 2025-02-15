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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PVFVQON%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIBAjq7KepgAqiv8AIzMqDFO1dbKGxDbc6oeiDEHQR3oNAiEAyKOjnEinYPRge9OLOJvpFvMm5nhRildLpA9GvMbe3MAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGxsOtB6oG0BqTyTGSrcA527EQJovUvhmvYcF%2F8ibEK5AOtZ59jK5kocidWf%2FxFapz0SBLYV4Edip9rnft9DSBrZti9chP6QAULVzl7wwViB7%2B8RHniw%2FK%2BvN4CWSxvo%2FeHhAoLZMYg%2Bo8Q4%2B2tadN%2BX0EGLBjUCWVFtBgwMjN8fLCciBbhbc%2Ff4XaZue8AorrKA2%2FxqPGVmlpJ2D296ctxLXa9AiP8h7OMWP5X0jyOYHHp%2BZVCwY1LIT0TMLb7uyeg%2FE46RbvglHWsNOW5kFBBNGbAqn%2BegxDo%2BPi4gS1ICNkI4O0ucUbGlZ1GKrLgu%2FCwMJVb%2F8li78bL7okyzRR1WSg9k5eAPkDQ8l0XURyXqGsoAhAmETeQF1Az2YeFw3jSbPVt7hoAkUJFb9d4%2FtV55M%2BFjtKYNWowWVA7kqJ9BnDIod6vNxUDHUayb9XWRM21Ip3EpqL%2FCcDMrn37V50Hukq6hxzLFOngCcGkQ%2BWfyusjHg4QN0f2XEYz9Mks4%2FzregkpHd89HLZL3f2%2BppjQiWhApx9xcjPGMojOUBL16aJGN3ORBmlK5GGV0lQegOxtf0Whm1LVLlpBbNVcGZwuR41UMUtZio8ZrAJvMG2qW8Y33EdPkZFf%2B8DqJoPGbEgxb702Ax6chNoJIMM27w70GOqUBGp9hOJGn7xqazlz%2BWbIatgtER3AOIZFjllTk%2BiuceemejKucAgIY0lNHqBRYLc%2BmzfmLuRA6Dhbvxg20%2BGZ017VmuGYjoUYw2bSkrwM9qNPlVeJ6nL7aVyOKzky%2BM3WgHop0FJgffSTAoCrchSkbvbjypAyb%2B0LWtb5BZG6urQohUq0QOMVUh%2FKdaPWdyxam0k8MKtaQkiTGPtW9722or4aPDXuS&X-Amz-Signature=1fc74655f0948c17207e047e9f9f3d3f29f48021f59c454e657a8e75b4a896fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
