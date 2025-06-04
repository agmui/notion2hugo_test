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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNVLHGP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIErc0VR4SyZwHsGtNf3uHa%2BKTz0Qdu4SvfVIkUA0ySDiAiAnNZErX7vmBozEZyHEmU4oR9xJtl9krWLyLJDcqpggDCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMiknjit42N5MTybwaKtwDwTnJQvRZ0yPbhIT%2FOZpfx53hfSViDhw%2F%2Bv76mkAdVCTf3f3OOjjEgE5t05wAL%2Fkjhsiyyp%2FUy6XKLxQBit63IsUMF8ujezi8bGukjHZeYU5Ill6aIp8f9lpl4FIMPMOHpW%2F0B1EJ40ZedWN6gqHjpJhrl4sLPq073PsaNzBzyoCCNrgQfCQ1CCP7CLli7LbClnJRnpyZd25Vr2T4AZvP8ryKKuwttET8zNgOkeeN1mcrh0NQCZhotoIhc27dS5RJ%2FENs3pA%2FSzttPffSpDwk6FnICqlb5S%2BTClszxUmWkF1kY8xpIYbqT65Mz%2FvGGJbydwqNNgFtNljOGoDG9dSuvorak1VFqigmqO%2BJmcpMGH0o6jRG1IrHL7fvBtAlPnjyKL3DszCIj1kfMej0wQnq59DztzzXnFUGs%2FnLYHMhcuiNcX4chcxTdUg8WuAdGm5KRqnFHIY6qdvw1SmJGImxOevOtxL1Z1oALIpanmGzr253MyX7E1vB2t1RRoavxONiVZmDE%2FAtyvXDVogDG5x3xDKxTs6xIRSUQfTEtamgF2MfGVjA4JdOCot1GI0npQqOckh9l3%2BunJz9F7%2B5tM5Y%2Fx5kOY9HegDRsArcntCri%2B1u9vPWoplCJkdsij4wp4CBwgY6pgE82RQaRuPyw%2BHTEG4Q4OlQxuqau4NP%2BjveeYCiiRqj2meY3rwHJhmdfoCdzUm6grvSNQITbAGe2m%2FCOMIX1Lpb0iFqdFJFHT1RjxwbDjL92E5T7Jra5zWW2Myoh9XldUIepqgQQg%2B4Q4chOTUTsGmRO0oPrX60GLnTuyMysNPsLHjlDkRRGJV8DDCXOUOCwMgTEwwzdRIddmF8V2aAwWG%2BX7o9in6V&X-Amz-Signature=07329d87dbe124206641d79371c29bc20992480d4ce43ffc177588b49b75cbb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
