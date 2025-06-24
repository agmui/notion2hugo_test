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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665QRMIRH%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCet5aBFna%2FM10Mf5o5PfiO6L8xaznfjzKwOxJwoXU7lgIgHusw9qto886uJg0l%2FM%2BOEKDdSoH6b6ooSLoOzbaPBJYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDFKjqGeZlSfgJIakPSrcA0294szyRv7AqRr2M%2FiBUG1YmDFvhOWX8W0v7EMV8kUrrvnadbS5bcyiEacEPiDkDeYW9eMpu1XCM68ybC40s9g4EAiuhW%2FArvv7JNxrmjIVnE7Nn8Z4fdCKVUZji3ngoLXwKyNQqqO1K41FDxeZsM2iuJLOk6oQqFWQFwUDSK3J2nr9n7R7vGcQnL%2FYC6M4DmIoTBjWi2qAcueZqJqyFjVHdISrql%2BJCesndiv%2BSkGZFBfoBw6oU7OgqbuoQlTLptr4avRxE8DwBEop5xGJ9u85E4ESNPwX0%2BSjcLtAKTPfAXu8soGRGdTX2t0guUoYzAgrV87NpQr4rqfJVOdoUl7%2BuoTyxrsTMQFrBiqThz5g396YOap4VAZztWV24DIvb1zYGKi9TFYKIzI%2FTWsoIdsRhpmAcAvieO9m3GXGClm8ZBaXdBtdOqF6v3J6IyJyrElTrZtLnddMaRPA%2FcyIhnyt6vqQdDZVOZXifGTzmM2x8KxmRJybL687PR5ih1angarYQZE9YdEBYd%2BkJkgYvs0VXPpHySO3%2BbETJTtDDcbM8GEibcgcL7ePWsb087Am%2FG1%2FNOlC5WCIXg9HZeYqGtSrjSrkCkogMy3QJfzZdqODApcTdmsdXtT2lYgoMOiQ68IGOqUBa7%2BPBhsBa6j8mTNIdWbr2GlN0j9NYO74qpv2HiNh32dCkp9dT36CrCXQ0Q7f2%2F18xwJsJjMbsdGjTVb%2FJ0RGWrtdJIpBpUVpk8n3Pn7M7sC6bBdpG%2B%2Frgbb1FL9CFNP5T9PTFbNgPemCriaMTv17W1xXpvDD%2Bk9WWGmA5yqeuL1Foyx%2B3NrzKp7MeREs1wtJ6I8ZvR6NGLlblechF2mxUBts7H2I&X-Amz-Signature=a39641cf07040d02fec1400deda02452338b532592f25ac50f9033c17957eb47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
