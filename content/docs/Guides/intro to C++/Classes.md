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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YDOVJGA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDH26VOAxOdW9DrDr9MbHDqFS9HjEvsM1acowqcPy3rlgIge%2Fz70dlYKlAPujJNl%2Bk6ftTazofSS9FsyhbJWgtpfO0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDAHW1uLO0zpeUHHTJyrcA1WAC2YsQ%2BrINl4%2FLtmoOktPL%2BUgolGXhoQxGJ4dYcmXy1xm7O4WUGHaARI9dvI0xPJ8g33cCQX3XhAFHtlOFi2AgTlyOnphGdnWuDr21bRBBlJGZCLiQZkYl4UJhQcSRWxOSyz0oYiu1XlwvlISZqZw09SbIIW5Yob9NzpdzGQye0Lpq2U%2BNbKQ%2BqNuRYb9LXEKoYoxkd3tcFh%2BfNgovopDnSa83CCZ4EvBYB3KwwC3jOorqDKqJfXkmI987xUqOkl1ey9tl7l%2FrilpAJ5bXE6mdMi1R7x3QxDPR0cOTxDS51ZCNetzMx9Xx2muD3kvK9yHNEtVVYUYTC4qBrb3YHPWj8KjHAjptfP%2FPXPX%2B2RUVBeEBKjx1uUVGnm12z3mLsqLQXgpKa0cY%2Bnwk2oGugMsRusLEktRbhfw32ijdD%2FydfDaHe7Ch19SDV%2FHcaakCt6Wo8Q3ZeiIJC44uz9oCCWFLTRw4Aj2deKlnBXfTJKZyAnPy%2F86hd3BhmGF4Ao9pfR6FzUmQAT5O5nWnpMbEHdBG8heXwb8R8PQH5HGMu301aC4L3sUy1keYHOgnIOFKpsVi14%2B64yl%2F%2FjwM4gukCz%2Bu2MWGobSHFUavvK6SaS7ek8qquUzYaxgssjyMOSawMIGOqUBtVkkYSL22BiN2sGBUlSUZrxq21%2BUTHB3udUyBuIIrxDCnDIDKKpymasC6LbkBQjAs4XwN0bxal4Q4WIKEkysEDdDo4svEny7Jk1Bb4I2kMu9KSJOmjlYJslvMqESLW1aZRmPalyN78KWPlxLLsHFdsfQqC0oywQ%2FAsLvenCpS4s%2Bq8LI59tljN0P8WkT%2B2zS9CZqluSR6VrHzoapURTY0ZJgX%2FTb&X-Amz-Signature=d2bac890c889e1d8137de40781b895e27dbf57a4424d23dfb4370f18def2e8c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
