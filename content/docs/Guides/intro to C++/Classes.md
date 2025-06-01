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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMDQQETJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD8bEJtfwgP%2BsWqk3l9YVDsm09KR1Ac5B9e5X99ynyUwgIgRfbnchGqsUZ%2FhMbSSZxDWHnQabCTIcxVQpfBSZhbZCQqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH15M9TRBccSogENhyrcA2QMEQF5Y83scV8OIWX7MoAL%2BIf6M%2B8jA%2F1KvbocFB9YmpoRckazm9aPS63yfH8MadWBbNKts9kpHUrwccaz%2FHCH06CVkzc3DUH6Y6evQ9YwBQCyFLww3I6iGL57HmB6xWmni%2Fs2sUIxN7FoUuzChYWhiWkXRUW8p1GgCjAXlckvdg88vmdaWskywnGvI7ODYxLoviNfXSIhxSkVa94DbkgTb8Vv9lVLRYwMcN6xkHUeL0Ybh9KHdcAB1eOtxtdQAzchYz39uRnaQGiiqb%2Bsf2UQkbFHRb20Ap92HuzHJ5n%2B%2BHJzd3tJGs%2FU61jO1a3wg%2F7X%2BGd%2F98u5o%2FvmULVuw7Um9S0SjYS61xkKimbUBUDD3ndCYrIKVMuGprYO08jdIzunIaSPguZKxGKSliJzeVgU%2B2j9ZcyxTgiYVxFeaNrGSdrUlPCBoywbsXi9EYjU73909Apx7Z804kGcObBeTQa88lpcU6Pc5%2FPJXXJVE%2FaNQ02bOv2piusXYG%2BaScS%2BB%2Bd8qXMJIWvLb7WI0ilsnAyXsULmOviqmQpXyg0wUb2PlkfCq83AeLUkrKC4hGWkX5D4LUAJEKNoDDAJU5a3Le8tOOqUNoV6aWA9kwHFOOjS7%2BA9%2FkvsAFqJM%2FqwMPfe8MEGOqUBywJoMH5%2FWko2PLirNd9CbbVCZHbmPxtMZwpn6o91zQcjRYFU66kO5F%2BCa9aT4lbuUJgFYwd4IFrx0W4Bvzq7iGDBBijAklNA%2BF21SvM4xEv8QBRmc4ruLUTtev8gKLvdoW3VVTg2EkFmMjOKS5qGV%2Bs0iqMOQ32Ym0l3PVL1tbHYXPPbLbMm5qLHf6lzwjImtZvwak3zwfdVmAqUKshbDcFCr77V&X-Amz-Signature=e48cf7b350878a5fe0119ed67a92abc499f58b076dcde8c6cda04ad64ca7e812&X-Amz-SignedHeaders=host&x-id=GetObject)

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
