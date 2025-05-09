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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDH3DL6M%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExKNsgJlhiCf68Dx1W9iSOy7Hp9okquX0w5DXJVtJD2AiEAjRnF48FVj8S3pB2eHP3P8L60fXDzPkN%2Fr9TMlWkyPB8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrsxEG3Lsj%2FxQQiMircA6Bm6xXJRUkUEseWRhWsntNURTcXVPCnFDhuH73p3cPIPmqRCCnMn8gkvvXZDpzy2yg3%2BEqT50Tb6wrkFiepOfBf6DHAV6zgpLbQoNoBvJHMXpFfpRjkpcC%2FqaBUS3o%2B88JNvCZmowmi9wujT6mXNRCU0DVvvJDcZ26jHx2x5QQL1aOB2B2t4pee9f9KbAqd2%2FH2cZZbXwQ6UfK9N3VjKmhE77SKKWit%2BWCh%2FE9iRc%2FW%2B2%2BSss2vxOh3qRLg7X69w76Tc2u7TJ%2B6mG4DkQWhgOYZAt7GdS%2FlZth2%2BAdQMtpn5wJNUYMynGnCpblE3ZS4VuvPSOBNxyhST5m2XFelTP3cFF40IiH2ltePoOK4BRdgcawyQsDuO%2F7H203pqQaoq6NiG2tnFUcVKHv%2Bl9JPlG5RQWPpfc6H9a5im2vFBa02TedLHw3lVHxJqlCXiG5SOf5RhYPZ0rMKebVPmQVg14lsmeuNi1YnuRxdpFKXKlyLYrlb0btOt6Kt5pmd4B%2B2tHMM63eWiCzYr%2BfqflrMyL1ENJuC%2FLjC3FYxuFR3UgaiB0%2BpebY363v5pUF8KzZioZlmFb6uDHw0J5QgT6Y%2FObkw%2FcKNqMVXZML6XHDdNjlxGhqoAzU9F6M%2BmB6hMPnv%2BMAGOqUBYjHv4NKKrWdYxsgVcCovnFYENhNrRxw3W4g2ltVTJCnWojZJxR0%2Fp7OJjV4JxP1lPbYMMb4y2A2qI%2FAU83aAPz8g%2B3AV61vjjx72qGAhDYWprQlsFCCavip6mcEb0HqPvouoeBN8DkFcC4AKV6P3BmxycAcsgrQKfvungaacy%2FuIcZQFA7wI4vntgofOeq6oqx%2B6WANTZypdiwjNIZlo8%2FR3QgbP&X-Amz-Signature=05a3067fd687b3bc0b52aa6bd19bdd042b984a9255b83d819435fc2ed256bf71&X-Amz-SignedHeaders=host&x-id=GetObject)

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
