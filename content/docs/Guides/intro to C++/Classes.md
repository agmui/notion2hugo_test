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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFTB2AFM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDlwU2PgZGpQheaB7kFqmbIga690LCj7dfLuV7UB%2FoD%2BQIgY5G63arzgSWFINwSUfiRDfsmm4yXQERkUmXfboVWKhwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1xCvMbKJ9hoW4kwyrcAx3fkdrbbSm83D2%2FeoJbH99HoysEFIacEHj18auxrwJBl8bNlc5%2FvvLlBXEoW2xzK8AhpKAJ26ncT9rrlEw8ELoW8mvxeaNk3rGw0RDTDg45mENTET2%2BaVWaDb3aapfmCTwbwilmIZE3XMo0lHwpLLQDOWw0uF5KGh5yzF8tw43Lg8t2SOchNfQKGUDVt5O7mRMT7SMEeqCPPoS60zKTTDzmZXCUa3sWrhMPxhT7qQn3APUYmu7U%2Bss6D%2FqeN%2BdC31FK%2FhgP1bkOx1OhvFjcGS1HzgHFVsPSnun0Q9x9K%2Fp%2F0hGLSyaBLsORrX8Xg2Y2SpjG0LSn79eadBT4hQf%2BTSByPTNxfX8Z5NsofXiFcnWmDRXfoqUi8IT7eSVbU5PQqGItLS2M15Hebs3dN8Rk5J%2BjWwiJzYzftW6Nlbx0i4lGQ%2BD%2BKL6i6A40yob23ELIpzCtsF%2FCzWOjWFD44pTuJBBASukAdxwfYr9ZkrU02YB5U5fmWQYQlRQP4%2FrIOjNoMGnOqVj1A6eodHCvmiaOTrzVY%2Fwq5%2BlgIRqQcGGfDC8VoqKUUTymJu94btcpqwKM8DINvI6K19munAtgbXIeoQTr4iefCE0WEqH3HIcRt6qdQLx13VN58wscelWzMPuBkcAGOqUB7uq90nEvduB78KCY3U7%2F%2ByfIkXTjW5aUjl7mYhleTxwyKDNaFjKyWJTdLc%2BBQZS5D52bMhBhhyJuNXsQeqfobbqjhY3rqgPtvLvCNOvN6icdy5zfQ9bXns22fEDVNMymwIOlU7IQAW%2B6cQnIHwlwlUZ56bFDaujwz7mAl8%2BjcsFdtEe%2Fz9P2plaQAzT3q5dUaGPT6PALAvpFEXXBkZJh4zb7fAfa&X-Amz-Signature=f0e9ffc7fb151d8768738be9726db2999593740ac3ff3aeb55a2ff72c50a79de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
