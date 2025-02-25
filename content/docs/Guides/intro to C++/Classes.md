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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SJJ2QZX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIBQZEeAtvMFUVNddsdb68nrrB2l4pBhhgVlUb3oy9ZQnAiEAw8PLWKRSWCvVyn7u7zlIFJA3zY%2FkFYHXQzwRnBdUUtwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNZcKwYNsfYExOQrGCrcA1JRJqfmaBVmymIouiVQT9xwfL0lfD3jxNWIsxJX13PtKW3YDwNTrzMbJ2%2FSIQH9yL%2Fgp%2Fv%2BW1%2BnBsudDr9TA6L482OI7WNfuSjE8IP4mrXcow4rR6AZIeu6D0MqHGnL2Tl2MfrR744YNn9QTJBV9cgwEvU0MWVfP3zp%2BBIcsw%2By7OHdfNTU8kM5R3Lc96qxj9Hry2xe2z%2FjY2fcGRJyg2Tfk%2F%2ByqgMBWqRn0qFTkblx0I2O1e%2B3%2BXf%2BMpPBAMtUPthVlfyr7UkgHqB0dxd9bUFSMm448fECnCY6z2aMl87TGfEKUQFj0dys6RMy7ZUCwcnfGCPLWBWiSp9%2Fqu0ckgAIqSKPr5MNHrw5I6xZQHyogoeTk%2FuzobaGikBwfAdQq9V4TTz4LvfjCIRxzBNF5f4Upem79ZalgRUHvnPk15iYDs19hNLrz8XDik1RhPnqN14cC6foHz%2FSjYgem4X0WWxA9mqcvCbSuKO5WuwZySlFdgTguU3sWW%2FaLOesjPe4tFe1d7QXXpcyzHG97H2ugqCD17y7s6g%2B60Fa%2B0teqNwxjfqzkGWgmBfHWn%2BLKUEHvGpCxsfoi9RePt7hf2CwlnFmScy4CV267gM09XZ9xSLyaBYhRd%2Bhxe5zJuDzMMOC%2Bb0GOqUBtgrYEBOovDAhDC7fLwuasv%2BdVRGD3%2BP6nTaCt%2Fy6moezLVef31fjoKRKGsefGy%2BvcgQG%2F7KB3e6HtEvgij3XhUHs%2BV5LVCUxiXs2qwEReofiw6nGgGSAn7Nyq5YMusVlu2pGw75ktdWbLcQbiAtuKtuqWDpk9nk5kbchFcCfij1QPT%2B4EAf%2Fq6xABx9x4qhQneEVc%2BC2u3DyXkSJjTofst4MKP6F&X-Amz-Signature=8efd7612d0ac604a810957e8e99ba97faa4624eb9a7b0d126ed48b0590d2829f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
