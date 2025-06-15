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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM5K2BZZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIB5ecdO8KwG7KojAGpczm%2FrGw5fm58d09mQyjqLTnaa3AiEA0%2FmV9THqkt16ulWb%2BqK%2Fl2jPa5XKztI2MPnTHNxkL9oq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHZIVUs4D9nAhfDRMSrcA2u5RYqcTd6Leu%2Bay847WWv1X7Ks876%2FbZV8QVWGTIAQfEuYPsYdI9SsIaJNv%2FZCRURGHR4%2FcvWZXl6guBwVEAh3NlcwxdlcM%2Fa89MIuUfnjQI1iRTeGZwdKUU65Q8QjmdrU7xt4LoWRT7%2BXMuyptqEOWtG5r8mpdWICby5iVdesV%2F1PjIEWt0NZvUAoScWYx0d8M2i1z5yUoj6LbMxTY%2FzNZEPznOAPUui%2Fmf6ng0yzT7tBmJ%2BxcprJaS%2BIc2b1IW6uvTOwPlrD8IpFicOw7lMSKHKCeUM74x3kXcL1cqlj6sx92FoYA6a%2Fjvkd1DjRapm4Va9vn5%2BG4N6nqDziDJAMnf4ypklh2WXsQCUg69OTRMAoMAYmRUDKOMa3YSXNg2QvcquE1m6hIra0jP%2FXxLTwrs2b2upiDSu8Gbip48RkeORQfNY5%2BZqrGrBye4nnLWta0Dou0hhpnIaI4o1HlrOBz0jb4cOi22eS0mwOlDk3e8RpsF4FyUxv77cXduq0vvTmu28EGevG06clyk0M1f5OfD%2BcnWRQ1z23dlE7aOr2JFtP41kU%2B%2Bdg%2F%2FAKfcbbwrZZPMLwNe7UqAd6qmQ%2BW8O6cwh6GJUHCkS3ecLK2StZJwl4ptVVkg2MDUPOMMWiuMIGOqUBy9bFK6YwEPLXMbG3V6MbPthpAcYtf4UZzk%2BXdSsoDoxNzxfYHOCf8UezJEC%2BuOU%2FOzGRAjqhIy68oEz3nuwxmx2NURl%2Fcf1vkStNQkXylq6QqAKpBAFZMKj%2FPVk2DX2YQbkYtIMVif1sYJYFFA1CMKd6MC5hIp0P3WWzhsBL1SI2DRbsBYLNoT4tdPz76sIhz38WlMjorJkOIekGSndqN4BVbrHx&X-Amz-Signature=d390d68113ad7d808b7d26b7e4dbd1f9b6b0420e6ef0e28b3ccd4e47a71d334a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
