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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D7UJDXG%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDyyxRyHlnfYdSci7UuXB%2BcvGNmrIJIu8oqvy8CoBA7bQIhAJbEio8imcgX5UAXi5f%2F9mRJug0qWvd0as3Rf3g%2BDgoZKv8DCH4QABoMNjM3NDIzMTgzODA1IgxulzzOIeFIUEe%2FPW8q3AORbcAqNCWk8vSYzC7yNsQfeEupO6R3JR9ESfSgHn0VKtB%2FIfYscgU%2FVm2RuoonyUvs%2BNt1ZHBHEWuJxf1o%2B8fCWgDw%2F%2BSNKLeiKrt045EBalWtUDgJQjCsTdOO9ZPVl1cQn5xOk6kwEW9E4sgUjmJzj3hUhJ4P97JgnaJ54VUP1pcCije2aNyhBWjsNWNcpmrJuiS0xzozmGZFXMCLuqNQqCnjA9QUjIhtd1LdIbnaa1E%2Ba%2BkLTq%2F8BxFG4v7wAg%2Fw2S7l9aWQIMX6dE71ekzbuILIoVgjJV4wJ86iNbH3v3HvrW6xpPkEpzorCeJEnAfd05WAwgRvqJQubqL1ORlwm934izl2e0txH4ur%2FeGhVZZFOB8kQkE2BS%2FzmwM9%2BqLwzQ%2BPBHb7pBzIJ0Uozyi04SpnTBwf8Yfhqles%2BJp0FqueqphF%2Bls3ni9XpYL4YTh4jBx7stmOneDpWEHSshkq%2BCGuUkGtpwYdtVNSco0ChhQZfD79UjBiuhogQ7cFaOko4auUTvzvi045UxTv%2ByOxgXrpikaQzvjTGi5oZtfNTnLiv8%2F5kdU1%2BXNr8KlM42kwperA40N%2BLeSLa8YtJTOedKD4ZbDF3puzjEM1TKdbJlOSF6m6Xfru1mIo%2BDDJ2Oy%2BBjqkAWWIm5J9UCsCK3AsHjLhmWQpJMl4G3kJJ7T1BdSjRoIbUcQpbiyouQcIyfm1FLFjULFnFHAW4oRFijsAfVxa%2BXEgbi78OS4V%2F%2Ba%2BKi65QvF0pVbQxXsib7M6OGsFEjiQB%2F%2BpuG%2BU3LR6%2BAZAlKarXRAa3q%2BYFojuvSYTM1mvJsLPKBmZHgyuBf6PDxyXs%2BWWm8N1YUUY%2FTEhHGSXa%2BrXKox0S1Lc&X-Amz-Signature=177ee908227100b5b2325ded83da2000296c7dd0a2d064674df11b2deebbe747&X-Amz-SignedHeaders=host&x-id=GetObject)

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
