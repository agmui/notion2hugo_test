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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SAKZEYQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FbTnOvT%2Fa%2B%2By1v4unQMIXOa2rfzVHt2J%2FNRc5dsnkTgIgUBVaY3J2nCYstBv7TExjWKwEIKIHFqTugHuvtW2ii9AqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHB4fLQ0B%2BieWUZ61yrcA9FDLGMuMqqqAQEXhSqlTx6zSK8%2BFnRSwWj8Br4el5pvazrXcfSMv0A8YF7l29%2BgQMed7yC%2B%2BeKk%2Bh%2F%2BnuO8tgp9NKgvG88I9fQZCJtvqnGrynAnjfqu8LGUTJ4MTNJ1Id1Bdc3YPjW6dcG7Jlls4ROkiGf5FN7OpmPeseNbd%2FZyP5fAePHmqREgi7valLohtW%2BpT4aNMjG2o8OnWbGkiX%2FdAp2aH1B5NlbTWl9%2FETONDwTvsXEdZjRKfn2RZFfecx2ipstX6UcFwmBaVv%2Bx8l2hn%2FCu7PZIiBnToX7oLlbRvDtzysi0cvO7KehPRYDOUWXhB9JR9jHzuYPiO66puZJqr5k2p9xXJr02PYvLyhpBjlu5EVupHXVsnuinlZdOz6GFH5%2BGNBcKc%2BjcLhotKb2HikP2sQYyYvQiIcBkjHoTzIEr78cEzc5vFumjk6X9LVloJjI26sPcaFTkZn885RTBkuxM9RVm2Y4M1sehFeCaihmeIk30uKwqcNS%2Fy02Qxf3%2Fk1sYp69fXqYFhPCgREHo3wQe7sWrofsr0pa%2Buvm7tFQobQ4fPXa9ab87yut%2FZyHO10Bq3xlkxVY5WkbvzFEQAWySw14%2FXCCc6reY5NidT00D%2BI4tneXpMshzMKGL38QGOqUBuPEIDVvkmLxJBl9z1uTde8LuYRoJEi0Cqzhi9hBlT%2Bq7I4tKeJL7RYezi3vISkVC58GLg4suGAmPWhAADDU%2Fl6DjqGQYEp1WllTT%2BgzbGxMH08B9indERsi8W4Co4Pnxyvu7woB%2BfNvkEn0l1qf%2FNWnCrNsKmeUiwA%2Bf7cqUD%2F%2BI6BULI2gpysuIVyTwzTnA7vvBzw1A%2B%2Bfx9TE69Os4p7XodSRv&X-Amz-Signature=7ac27d482cf5241bd30139a9c8798381b1c71381ea1034edd13abb2e52709d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
