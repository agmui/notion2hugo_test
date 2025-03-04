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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654S23NE6%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICghr0tzOKGdyd9R81wuqcRqfnK4iu5BNQcPcReGzTkRAiAP4aZ8H6KfcXgE45BFwxSkP7JXZstulrgrAVOOb1NitiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8LwoZ60jE4bU6xyjKtwDAIenwR18K%2BQ8VT2TmtKV7y2YEnTgdpndpby299bQq3C9t7oyQV%2BBXQPsV3KGqgjt3dM8rtnn7zLJsG%2FjEkQdqcJpcwoQgmFRyO1B3d7keimnCrzPIVXMENjR7cFIj5q2WBgYcOHzSVrORmk9KQe3QTNztgBZAjvPrrHlUE1hni0ZnkPmfspe6SXPLAHolpOfeFEkrIfI141vrG%2BPucr%2BN0UZ4vm5QPi9XP%2B5VniSfiKseiD9EpDFiWkoVkATpgSQDwrx8TOwkNl9bBvDbfxSqrAynZSW3JiCVMetNDlgWH0QrdginusxtSyBk2S7ln9i89H1ne%2F9JoPf%2BV5BS0oE7HzQ1n4yc5z9gBOdP2fPUVrEJu3OomjEPqUv0i6Ciwy%2BsTntiOcfLOorTptV0WMJtXE2s9yHoXKrvP3zc7G5WBcLJa%2BUNguGDLPhgjgOHaZhCmke6Jr3qFGweMrYaQZ9eui5R1fi5v27WtFnSqWnkOsyokkRgzX4h78oYV161mSSi%2FYjiZfRf5kvrAUAw1zHNj3YPLyREXBciuD9yDxIVsw6ZwOI9nm%2F5sdB3vVLUAcDCbrIchSoatZGNZ8%2FrCsTh3QQgowcokTqrmOAWU1MgzG6WfVKvqQSQYbJ%2FsYwkcCavgY6pgE%2F2o09qkcacWZYDfN63hSTedSMwBtOz4iPzzpawxED3bDNMAGufDh0N1%2FDRRLw8b0AGPHL3y5BxFk2NUJiLIJH73Bl1Zeye7gjnGd6lHjsynTwGsjj0X%2B7nXVxwuExqRfF%2BEgzBMQpPiEPMUv1chMTGC6ynlcALs2WqrxZBghL8KRVgzpTRm1oy%2B%2FQ%2BDF7krsufQTD0Na51RScIXDa0sv8qyMgWTKV&X-Amz-Signature=5fd8a254fa7ebb7a174dc7009ea04adf13e650b86555f9d45afcb525ff85addb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
