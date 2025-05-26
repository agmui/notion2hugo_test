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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU6OZINZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBesqjVW7GRfyhpCgp4hGgJ%2Bu%2FVr3DvBv%2Bwf6rlSgm%2FSAiAHvXXRSb%2BofUpghbS1%2Fy4YnOT33%2BXDSNZHGWJhqRDUKCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMnNV5RotR%2FaykWmwTKtwD3W5zJ8N3iC5DM7UJqaEFrp%2Fc3PeM0V%2FzxShpXMM%2Feb1PUaEJB0wZ%2FugFOZD6CaUobECbyVaAhhfIzZUePFwZcjgJUX7515WBPhcZ2qK0pHXfqoIoBiSrjwZxA9jCYwIvDLx2aIMUsqlqpqXuo5Qn8YeyuCA%2FD%2BlBXJ4aWtheTo3A5y0Fdi%2FQdT5jCBFoCjrQKbOg8bXu0i2FAd9YNIo53l%2F9%2B50x6IFtTu6snTPkANKTNfKoa4Hx16fJN%2BP7HnviCPifWkT6OFPEKf44N7jVemGp1HZm%2FrDIlf1M4Uvq2X6f7w6YQs5nlypmlhsQg9mNuR%2Bxw4jwA1Adm35bN5Q2iULBvLeZkjIv301q27RbmKPQ8qyVqp5jArq3pgEA64SkHvUAkm%2FD5j4bAUZCoSHhh0z7RjAxqSRWa0ArGqiLAheyIAZ7jtks7WXzI0VXSGpppIxpLYB4LpsgPVSoxuc81aSvTtpLuD3nGnoqmbwB1nscuYf72Af%2BzxlwbMO%2BzDhpQOHRF0Mlk1vIYDt7pXc%2FY5zXccilZ%2F8q%2FB%2FTFNaxUJONLPtEMPnrLh4DaQnqRs%2FwI%2BMyV%2Bdmu1i8oBxLhbSyWoyjYog17psfXncbNUAndY%2FlO55k1zLlSRurOR4wo%2FPQwQY6pgEUsN3GqToIn8Adl%2F9HS7SOp5QeQgKYVDygfrnWabsxdNLO9EGp%2BE1ZJGPJnMQU9C2FqPOlDvKfXB4mPHrz4TtTEaVPCuqHfG3%2BSBQVPHpb%2FThB1XgOSpwenWq66OtLEEDGDbi4dHsU7w2Q1F7HCIEUjXMFDnTarHPAArVn%2Bk8RnS5wCzSHb2mcf%2BnkL2vD6euvgKx476CHiQUQxTUZ2wCLZt4jM01r&X-Amz-Signature=3f8e2a30da38a2c82e833cc4e60a21b190166c2f25b43f6a6c582319568e895e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
