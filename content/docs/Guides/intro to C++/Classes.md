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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7RS45HK%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHwW2qCeIs4Q%2FpE2hKTDBBU8C92tRnmLEDTpslISYWBwIgIzYlMNZ4fBM%2FzZHjj%2Fb8FqvHP38BrP4bEHm%2BtNcugIkqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKf9n1q280gmpIkVbCrcAxEXY1svu9AWfQcMXogMTxjXF1WOe1sh3TqZ0Z46ob2bOuAGyZMx3iSEUz7OYNR7ega8iWd%2B50%2FDcN0U1Kmw%2BjZKuN%2BbO3jpj1i6P%2F5z45Bi2sbzoyFcO%2FLZ1p1qtwEOVX3cBaUDgY86vd9RxLsaw9Jx2mnNWKnocpvjHvODP2DlejFoLOTb%2BFPwka%2FALwJh3T1iia2vbdA6LIRp7ManJHvJMI520zYMx3NLMFoC2H5%2B7nbhHf1u43tZZ2k9E7RrcmQCGVs%2BiQaxD03ikDww9jU5Uyu2znzLyGWauGr2Ae48MSii5xg3yVeB5y0bFxCTCa3hsuxBR9Gdp6qx4jUjUNtiT6pljPzxiRXrCTAU21JSYRU6g0uLy73G3PZTplwLz8XbHkKWFfvZAdvfArdML38zLe5qPCczn03qf%2BJhC6R3bq2IC5GrJmQBvZkpuz12G5J3oZZOw%2FYwvTB42YXcWkBAY4kHYUBoTWzfQGFzEjV40X8jPLChwR3kp6KNoTh4iPk6vAK2Xp5HGxj4omByymW6J9SPUgRaWRhl%2FZlgdzdbO4mSmLjw02fG34tJB2rCC4iN%2BlTwDUtqFniktUsbnM9AcJkaM0f%2BUxRX5xep%2B0hg6YOMFFYE93ng4QQLMN3Vs8QGOqUBgyeEO5mfH%2B%2BPMesKjnMCYJPMxH4iLOmakApgIfAWAGqkrFnxbHgcE803TUfMDfgiTAhlzdc8A2wtCHPiDg1wPjdklW0R5xiitfQuIeJjHWimhWiZIlUw1zILwnZPs%2FHS%2BFS4QpErRkGY2Vmrsvlt7bMhjPQsRrkMgKvDQahKYumJYdRGBSQyOJNwZK%2BLaJt%2Bj47Y%2F9GBRoujtIFCIECAlmz8Go9p&X-Amz-Signature=1d4dcdd2d751596ce6078f47e08487bc467f9b9534ac433c7f41b583977b9398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
