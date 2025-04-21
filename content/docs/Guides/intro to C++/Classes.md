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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHNJ2DTW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIGl0BbrSu8DWYxRPZKuxs88L0W1QGM4PwkU6r5HugwkRAiA56oBo3h%2FhCT2f3aJriAmz8B9PMMWRN0hm%2Bg6xYTJiyyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8eDnjbsdcDWJKsQ4KtwDrrxt9n%2FE%2F5E%2FJjM3s47AaXIjGDZeJmEZMaaDRfSVdpo2FIytuzt5aTjXH3xkGQiR9ihsVZAr4Zs%2FhjMw9sPuhMshuZAmKhJLcdnsQ4aQcfvylIldz%2BSOtMJfU49pjKw5t7XbVpHl5Q0N6gyIq9ookmcUg%2B8WRgAjshmjMh4Izca%2BXtYXiMAfbXjgpgAWFKlwxUdalGO8y%2FNIvWd246SgeT1HRbfb65i36vxV7M9cZH4Qqed9V5RwCvHv%2F99O%2BqT%2FISi7ZdHKn8zcyyeTn1OKVGN0cyGBBiYkuZw1XNmUzfCyPVxtUHLu0zbQE2H%2BGN%2BLgFh9%2B04c%2BURHycayxErsGkNSawXMdX1kR07fDUn%2BheuzaFVWo54HbAN6H%2F7TxnmcPIFL%2FwD1%2FU0vxA8NqwAfq1ab94x5l4aTChP2MjSU4oiHK471XLAsdqZC9kORaSOvCJrWT6mNVxv5uidKpUwNiR0lDR1QeY9MWyQxMuzAivAnJEAiHhrwbYCtRI4THbgYPJZiCeS5p1F222YgWglvP5KXADw1l5%2FuPrNt3RxgMWWlfuY1Rpp2QwCQNHQE%2FG4uLZZYEx79HtvfBy8AzVsvnXNryOecpFXMkQphv62yhb9XKNjpjmmJ2tK98d4wvLuYwAY6pgFYZE1dkN2edOipk%2Brk8CDJZGth2ckUkDul4ezi15IhSOP13vCxcSdjTDkwUqGIGNLvds6LS4by2LRknWsM6TN8EUrOONITNPtBYDdyHI3j7Aj1C12KaSpnyXvOWbHcX3Qwh4xc9uY%2FVFbF5dv9Ij48L%2BPtpA%2BLlXXDS3RPy7fQQ%2FP7EqJVpLtwKJ7KKI1idmfwXvA4cy%2FbkYJ8r0wkvqn3MXnZYYUB&X-Amz-Signature=e99bf2a90ed25886780612d02d2477e48210b1b84d03e6eb90ce4d80306d8650&X-Amz-SignedHeaders=host&x-id=GetObject)

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
