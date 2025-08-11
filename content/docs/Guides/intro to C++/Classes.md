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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWQ4YEF4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGe5Fx8my6FgV%2BZhB%2BJYLkCdcnMN%2BYgBWouhBvPdjJwbAiEApCGikxiWnallazcpeSQ6hXDaxovhkKT1Wv2t9uzF1BYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYAPkpGX6w54qaXtircA4%2Bx%2FygFTKcGPrz3nRkKED41DoHSh85RB0JSnU2s2QV%2F1p9M9tb%2FE8nCNh1PROzlN6kKsiHON5VlqsTSgFVbDG7Mzp%2Fh4nv6Hv%2BbS9QJ65Z%2F8TkPt0td8TIzTdx0LgdZbK3sVvmnLAHzntjoL%2FfsA5K8npWMiWo2%2FKyTukreGQpL%2F%2BXEKDAaP00aVJHSYGXovpHmvQOiKvGFQZTd02siYdk2G8TmcFQKd6deM00wQ6x5dIjX1pujctY9W%2F8ZBs29Kz5GJ6ICYrsDWrgt5a4dSKyhU7xQkVCUvfzTzi9Bt2Wc5gvf0snbiLYc2l1zJLbFILU5ylbNMvotODqS%2BBslFuZ3f23ZH4Edcm43PbdNyKdtUoeS4nI%2FTDOFBDuLxseqKNQaEC9%2FuOZ7b%2FzhXDpZAg7SPMQSflPTWVDiQ%2FrnLQPKesL3eKFFH022e%2B1CPs%2BzJFnr33nSKsmArJc3XI1BeFnTogzHbmFg2JPQIazWPlImQvCOhMGDpDkdow%2FOyZKZnw0unHeBTSrQLTLG0wHZxpOStfkLUVbyxWcmkWbLSYhVK0sQSfB0aiAujTo%2FAW9RrK2IrAZAfYEUVB5islOxN%2Bf8PHp%2BvHfU%2BdipZTm2pMQKt79Lg%2BEf5rKtsgoNMP%2Be5cQGOqUB6LSs%2F0Ogvg5VJisXmxPK9AUNMaGfesCp%2Blai3dOMhB0Av%2FC8qzoydE7vmauMxj7Qid9hO4YgoQPk%2Fy8lTxsppG2cGSmue8Fi2QR%2FM2fBAB4bDruDYTh8rVxGKdJdVGlQJuZIGROmtL4KK1quobGAgoO6mMqqGl6LES5XFKiazqOVAaU60bXkHUTLpxr8lQwEfsY2W3%2BsZhnJbrhOsAFQ72nlRTiA&X-Amz-Signature=f9db534457b7ab7d5264e645338c92bfc80d7053c7c43b887da6fef5f8631256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
