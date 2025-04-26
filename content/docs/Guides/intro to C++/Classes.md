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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPBOY6SE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFUJwMbaWq7cnmPBSmhU8%2BTuvWooOx3n3Koz4NwBa2jgIhAJfjz5d35YeZoQdHYBH6SbZLc2LNVUufig5wFTEbgOJbKv8DCD4QABoMNjM3NDIzMTgzODA1IgzjHwZULE13A7Gpo1sq3AOmBOj0zbt8ewYBs8c8%2FqYFWow9lGqGLCWFTvS%2BQeHhgJoBPA0jjz4yCikP1V%2BHQn04I6KQoKfpdt0SnwVSFIEWx%2F5XimGDEuDLsIKB4XcQZpq6NPLdK0yIWgicSaUI%2FTyfIhJED5MDsD38Z3hPz4bO2SCFmsw%2B6YqhmB4u7Yt%2FJEc5ss8%2BW5w%2FehkALAxWpy5iLZ4tZcYFsfc8l%2B8F%2BleJ2TE3%2FZ5EoJKbcHDADP5aOR6eeo33Ymh4%2FIS1MSwItKtjzakleLE8Qo3ur3GyqBoVLryBIjwuIuv6va1y7yo4CXmY4OAVI4Thl2IHK6gmHc2zYDQI7H1tdxO8%2BrBOIXLvp7Sts2lVwiPvIJtDWswE%2BEDhqdlUceIrMxcg2WCDc%2FSd%2B7ltAK0BbfElmh759hePQcqQWNW1qPOvF2WzU3a5bOp8zWUQpvmKFuBorqGfrbeU2ugvgYAY8pWiYoP2uFvmZnSDiZDISubmsKgxPqnxY%2B3Hj5GkjH72H6ZbXxwsxM%2F%2BojReKL1PoyqQIlZTAMt1x5Ng8jiJfbrG6nNwjmAbgvBlPEohltV9ctV%2Fx%2FnQpfB6EffVpRij%2FAfMo%2BvMAowMqhywmpMEnbzXX%2FFdarv87X5VoPhsodB6OjQ8vzC9yLHABjqkAYn0cCvnypSNcJ1PsmpN47WDYDtEwbFnjStRbvlXkMAQ3BK1qJG0EFykhBoSseNneefRRXkKfe8JTevKSGtmi%2FcsZY5Euep8%2FdEcv%2FnTf9llmoVm2LlwZ7qBjU%2FZXeNxY%2FcEea2Qbd2G8%2BCfl1BcT2TiZl2zLvqijKSaXIw1hZ43ubn9t7jQ3hUwCzIJ6bTaVIkL9IUWZ%2Bp12DD6yMcl1ngel5pz&X-Amz-Signature=938a74aac5b742b6cc2c9bd8665ad05ab399f91308c87cbfdef53726dbd6c612&X-Amz-SignedHeaders=host&x-id=GetObject)

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
