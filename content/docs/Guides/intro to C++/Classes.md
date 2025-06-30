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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XILWPQV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK%2B3gtdZJVqAa%2Bn%2BNVc0%2BUeILUDHKsK3hzy9%2Bs7tCiPQIhAN7sA9YKCp4uUrxUq6SZjkq1Pq%2BUY71XGciBDEhQkcArKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybwI3ellvs8a9ajZcq3ANPTunCfBBi9kpZWHaCS3X2NwWQ7j6H%2BDnGurb4hFwkSb1LVvgCp3Trq1keiRcuN5vTIWMBvjFMcnX7fkyZD9443dH65vsAlLGrT9tVC2sWRlSe%2FcPx3jt9TqzkiaGasPYqNsCT4dug4r7TpZ2GYBu0fN7GdW8fNj5xk4kjzHkbpFuiHqj4ooJT7eUeC8dN5h1U1raM5%2FEDKlQ7SdsB9KkkqPmD%2FVqMbQeRRdpIeL92UOIsSaZK9SopOS8VgxEK%2B8%2BfTLotvTnxxngkcKwVr5uA46zRLQyvIpki0JUDn8H6mCOHiCAXHN%2FPjpBo1SPITfLbYKJyiC0vhUMHWvVljhGjf0IKFsZC2QUSacI4yS2DxDddQRaxmP4MZhUQBEPgYwVtAdAuohXtTu%2BGqMBgiIdYomcd6YbkDxftM3hjypzB4oeTlJxH9%2BvlbMiXUwW80xpS3qQiX9Co3wN2qpFzkZD0iJg%2BFF1qDLWWdePxa05fpqfJQOWktAj4cR8DwAS2ICpTi4SBuB%2BS8fBZmi6pgjEk6o5gbNZcPrQqsazDH6%2F010%2BZIdh8CMBWfJKZOLvUF5ma5ab8wX2WA0sYwe0O%2FZ0wUK3P2ObAe78DtCGWcvGMOnutKTx1nw%2B3B5hr1zDYm4fDBjqkAQfZ6JAOW%2BsH0%2FRumlOaPdjV0104JPvvKDR2XbbO8waeA7It4gzAF%2Fs5z6lDyb86tVNBEXHCrONhflI1M3xnG%2B2v%2Bt5dclF6WN67qmlcuL7ZDjy7F9aZT8YBiYs4hwHisYs6IiTIIBB92aQSw4LDQQhWeVYvCJHpFzrw1MPZ6NIs5EYHecNIc%2BGgZ%2FPEBtu5s%2Fpuk%2BdKusnui8ody3QVAMp2lpCh&X-Amz-Signature=24f5808e66876dc64de5ca355cd687c94a7a8a67bc8adac926f4fc20c9fa8356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
