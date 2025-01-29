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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOH5U33G%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqNvUOdMPov9yRPOn57c2O5QWmMVcieULiilE15X%2BXRAiEA4MIVBMpD0SF%2Fo9PVDIW8St0twn%2BbEIdWS4KEPvjJ1UoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMB9wzC7ijnxbpZ3CircA34Knvw6W1bQJe5J2pcivEcqi7pUwWqgZuzCscw1tzA3cQ9ShQ92vnntia5owmmtrLubXNCA36b1GkfZAd0Ka2Oafmyw43tCbOcajd1wzyMf6lfrOCSAGAx11kCtgmm0Ryy7TB2oo5rTNJoM0DmOnUNq5zpoH007XxhoUZaAvXuRa4mLQZIPqeZ9TRM5QM7ufr9NZmG5gu3d6kb1CAi%2FQVsOsooVh%2B1xQOfae%2FsE5YTg8e4QXvPmyRwLfXjEdhlD%2FkhUtJBHDTAAW8hSUhdZ9Dfu%2B0ah%2FbgZoFjgc6vGAA4%2BsKoyD%2BSdY6Re5tfAVQyUrzOFJmxY%2BeBFUbIBO0WS779eCU1w1lBmzGC19VKUWQPWBdr5vs3Y9C9aBR8hqV8PJgFpNoRbS1RxZ4PJXNTpjROXFGExvkdVWEhtGOi9ZqRQw6DK%2FQXMCyIF7xf6rK1F9yumWPhHoZfkeeW3Rq4u9gtx9FNDFwmGQrpfoUVn2QGXh2Ai9DLSCU2wv4Bqm%2FvWa7jKyn9PgUUduXBmyK2EY1YsVUw0eq1wYoHhwO%2F5H07YIpt9nCrP%2BXD1eeq8CLiXEGwvDWSvFuyyHNGToaaaU%2FH%2FiZN5hlWDXJtOJn7RVtRCWTLeGk0wFxgwflRBMPuE6bwGOqUBjbCBH64xNgXBukiXvkl0W2RQZQWAjDwJ%2BHhOZECb3%2F8JCLI6guGnw8%2FtMgknwW%2BnL3V50Q7zIOn7F3cdH2AhP0m6CFTUFLe4q%2B3HbD2r4q9Y1ZDAFbJFouqLpNgcNs4JFMn9IzNlOQUPE6tLEQIgcm6AUaMEYZwhztCgvd%2F7zXyOtbGfZ2mmLAWRVZn4hxf9qQJTZx1MZG3fty3DlTuMeQxE18qP&X-Amz-Signature=0950acd9703475dd59fa4487fba9dd0e3b2c8f02b10f3e5420c4c7fa4398f0b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
