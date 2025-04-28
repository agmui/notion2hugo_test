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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDCHDDWH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWC29aBtsfkP8Y%2FOHfnltUOq3%2BH2UMJkiLXg1PE%2BXm9AIgYPL3tk93tvzf09pGWndPZJP3PI0T5bE0qt%2FoUmvVlYMq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDClTFlrJTAcpcIzVKCrcA742U2cg9fxd6iLO2OGtzHC2MxNWTWNR%2BnKe5XTK%2BK%2BQNWZZ2cicGZxjqBeIAdNnhQBlwnhLSpUCSaSWFjW16LSlbxYwYGvgaYFW%2FH9t6qOcSawfmWkvNVUb9fz6ImdgZyjGjSxb0qv3i6urOrpLXz308GAnzYSk7VxDdj%2BBr7%2Biu%2FSRSHIRvMZRRKdIo1tMcQmObHEEwxKewA1A0N5jp3ITZf8xBqzLfO1uiHd%2Bz6SV%2FoiM4QEcke9KLVpSj9UVsPQXUT9ahcLKKlmkZtb02JHvl2M09aiAwfcsWJ4t8KJnuHCGnXrV0BZuhbDX78NvwGujx%2BS%2F0ZxeRNcxH%2Bob3dVtnzJ%2FPeXTIrn%2FQZilfIcRdO8ZrM5yMRF3g7xg0mkl7La2aR2HJcuJy4gRIze72bSqQG7Tf0DgAIZ9DRaZnCEQ4hujAJq%2BLM0WEaZgI1W8PvTO44a5GQ0GzhdTFyW3fJxLnGt%2B4Hyf%2FkyB8z5aAs0h818llUyU26ArHRVw%2BIYvzmIOVZxmrN6ffxYGh4%2BEnG%2B8Vvivi2LzCUr7C5s5jpiSqUNug3SnOCLootWI8DVswPi3FQFdu7UbtfLbjS%2BgPdso3zq6aafTrne9APac0h0jLckVCEg%2F5JmE7INYMPPIvcAGOqUBKu%2F7ddZZe6QD8cmZPZSqFoXNv%2BhuC9cxDbrMGGB7L4rfiqnhNYsAWaJQQFVkHefXqEpTdWT1atdhD53F%2FUnNwjKclJLv3JUCgI15NMHYmWU%2FTZjbq7bPcXu3%2BjqlQ%2BAeX7t%2Bd6R4utCu%2BqIi2Ve6fEeV%2Fm9C73uMWBANksl4KDXKB0LhBAHA2i8b0VDuY9xrTJZ%2FeEvll8s5NuNqw%2BDLu4B%2Fg90R&X-Amz-Signature=db75c7b7d9f5576f95f05072d76a18e223b76cdd99d4ae0f6820ec2870e95156&X-Amz-SignedHeaders=host&x-id=GetObject)

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
