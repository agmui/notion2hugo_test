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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KEL36P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7ejL6E2vwjuD7zEKVuWw9Ocz8dETSGU3JxiDEQg7zFQIgPgTzecHSFYLX6XIorG9kZ1Mh5rVKh%2Bx%2FWbSGgBmWmyQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDG8XvHZjz6m%2F3dlsCyrcA9aT0phqBj592ZsLPejrhYxwa1U79qJqK1e1GZn1eZ0XbI2U%2Frx1go6Dpdww6RZ4AXHqknKhv42B38XjbXyeuYB91l5PIYHiufRBzd%2FfwiiToKF5ziOjGjlhqIIdhPqQSFAL8Xrp4djdriP7P%2B%2BLvXopXWksc3%2F8dBSIAsuAd5Ipo8SFddBZLIyTL3gl3Pkw%2B6IEpDyHQAAfykdviHShgxJQOMLKN4k5X6ATiPGqcq3NHoEc6O5btUUzLb2stkUEIgtiFhBHI2K3ztSW3V95tnWIRMB9Fe441Dg7Fm5eQlAUn%2Fp6OhUzGWIPqgusaINUXNGXqSwnrPAaDcR2OKDG9OX8AskA7upH1ZSg2B5hA8SJnYnY%2FwVzEc0Asz803FH6lV44M2CHwo%2BIC0B%2FYIeA9%2BngwDWG66XRtrLLR6KBQH%2BntguiExyskK4irNKwTT5VdB8T9K3If3c4%2F0VU59F%2FP%2BmpYLAVUUUdASKgklF90QcFNQ7NBW7W8ZdAKUaQdyIsEMyaItnC7NSS6EVWjRuLwUiROBJt8%2Bxmw4BTK%2Ffqylj%2Ff2jzjvQbRjEjEYBfMQrn9qULgBfF5upY834s8pgt4IJTg4LaMssNAB1sSRxgZK%2BoD3Bvv2eadbdQ6kuZMMKAusQGOqUBnmrkWP0189%2FmgLcNfbCGqp7l8HJmWV%2B%2FpMf3Y%2F3mtLs4xg5kYq%2BwankykZMXAHicqc8zAXrYcVSG1p3zGa6S7hbSI%2BnerhcgPe4E82IO02wKC0idxQ7v02c8TDoKHoDxD2Cdl%2F8u441KyaLT0CendNjyzzAjp4NvDFj5I9t4l7fXgQ3xP6kk5c75IaZ7hwHbsGmawHJnV0GbvBEly2lnmuJXuONk&X-Amz-Signature=d1f2af224a3a4e1267ffdc2693b88d3f4d99e47d2e6c7d6aaa6890dba047625e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
