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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFN2I7MP%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD%2BsB0%2Bjc4MTvFZG7vHpKMsGjA7GB6vf1CyKjQsljDOuwIhAL6A92FvDgd0uV69m1LYu0W8DrripxDoK5MOi%2BVHwwhHKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdMFlubr%2FENGe4LUwq3ANdVBYRfy%2B8P4HtJ2qFjkFE0NYWyHs%2Fm9bk9thx%2BKqfmko0SxxBDTLsOjkRhsDSPpw6HJfwHSYQfFnHGdBYOhUfOSwJ4CA7wDu%2Fl74Z09d%2FG0jBL7CgiOtvKIDWwQtEalq1nri66qssmGPfiG4oPcbv7MdoAW%2FGZHxMfEZNKcqdmUpBHX6hwiVXY7QMjq%2Fw6OvEgVJD0we%2FQuYzc%2Fu0ISaxj9GUkvCZ%2FJwFZZ%2F9r2jrxa6Iln5CPM7BN6EC6iTIW0jQbdA7K0Pp5Rq3mpQvGCOLrl5O%2F2eTupSxmyFcdQ0LVa1NsX71o68V4sfSuDdpBL1RCnbNnuWmjlN16SNSh2gHx544vlazYQaxtMXIm%2FxUtFEQQl05sBiyK90qaGQJdE%2F21GZeK7j4nt5%2BxjzEIlyN1rWiUydrtszGNVBDNQ2l7xjvn%2B4qdJ2WGHUlc3eCHAPjovtQYY2XBqstmCvXFmOjvbpLbO%2Fg27faltWnAyElg5axeUJAygfRi4dzh7Jzd5TnqgiH42WYlNjMchlh3n%2B5M7Iqrs4YgrKd1i0%2BVQRmcpZMU69E3E9r8kJE%2F54JYu1sDHHjoKG16gwkpsO9dJhMpL5Y20yzRA%2BiVQ7DurxOHSk%2BJBhBXHE8togBuTCylYy%2BBjqkAbnloDO8GoxmgPHIFCZbMM68lZ58EbIOUa%2FlN%2BKUgnugCBmbTSoOZjRV%2BIklc3QVz7%2BqRm3DHZVwBUD%2B5bxdnrPCQyaeg5fBdGDaF1zWTFoOsw%2FUcqpz22klsDn8un6gXtNYu3F3mZlLUqo3xIWwQma%2Be3nnyEyJZcBz15keGj8HVmQBm8L3oyA2wOPjFrkMdWo9IAyKCq2nHuoPAFTsORVTh9Um&X-Amz-Signature=679c2fca40abc44ed0bbe3bfe926b79cd98bee6d4754ee4393c7d7707ff937c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
