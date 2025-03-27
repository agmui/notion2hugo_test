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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CWH6EVB%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0k99bWdcRNwA80fnA0DrrNBX87yaDrJmUorUfLzzYyAiEAo203WL21evvVyiP55SPFpb%2BXRsflxUM1dNNnZ2IYtQMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOVF%2BDnHzvbsLXmnryrcA4ZW9lSNrbleHlrpICa4IGXpWjebIl%2Bluwyicygw8SHcyCZ%2F9biHlmn%2Fet5HnAdPfCUN4sNTHJVTsgzEsFc5yLgO9rHPIWUxZceMyqH8yx1WyoRvEG4Bf0VIcpJ%2F7%2FdoTlPTAarQ1FeKJvrQ110%2FX6lrqaPV9nxO0qmkJ3%2Fwp1TJH9zdU9DjoC9xBREXsUdCvife2nHyhiu7eTtCPlKg6GcMUbHdEOYCxsax%2FYnDqMlizTOhH7zGaHVy1n7MbdgyHtrcxR2XcS8p7CEcD%2Fu8eNf2lTW1Bf8i25u81DceZs%2BcJXBImQ4S%2FfTOp3AXOKlgEya3QaK0XcD%2BpKKG8Eu%2BcVetV8vjz%2BgOp9MdoUaMJIkFif9ds2VHLK240Z0HI7%2FCTVLGJUTkbIUq1gi%2Fy288Hl89VgrvYb4As8Izy4bLa8yyQJf6yleJXtASqzo7nFxgFuwsVKgpou1NR723hdnGl%2BeEKSsTp0qRFXZJB0WtNBB7Z1KHqLyiFqDV%2BUdws8tp3uqKL3338Acwb%2FYRMZUvQePhBKiZlKqlBJt9UcqzzxYJCmCM0zbLLL1BFdlvacDQZyW6P1Fza0exF0I8dinfOpQx2rKbDpDA5w%2BW4xyqalKVazVCk5WKVBXzFvBqMJaNkr8GOqUBcA1KS4D9vRboC5u9Gs5DM%2FxocjmhDDCdqy2rC%2FTkGYKSCYDM1F35Bs6PdMFG1h7JH88Cc7B5eK6O3nrw7Ms4rNfQnzJepS3XEF9TUtL4NOtZUxRHHbhoUF%2B0Yv%2Bow4%2Bc9GOmsHhAhN2Lg8dvJv5pRM7CjQoX3xYKD6JNAizk8Q%2BNvFhatufGeCsca8p8AiZTPxyaXGTgA6hH14P40pD6ga4uSR5s&X-Amz-Signature=bafbeaae607aba6b565ebc4a98d5c6e7dbdb215ec655b9c56764291a322433be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
