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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIPY4LZP%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKcRlJ0p%2FgUVoxNfE0A9xmP2E3MS%2BB0yrLhZxfexAGWAiArwUJg7l360h%2FTk7BJtboHYRdvPsC7%2Fr7%2FDbH2yCV84yqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5sf7OJdY2NYwkI1LKtwDUCtWn%2BFOBJ%2BS%2FG42G2iqeeLK4eU%2FK27nxAKhiSPUmounGFUXmKDnV%2BXnfNLt6qH%2BJ1K46eI3n9BCGzckJgMVifkQ22qVNLk9kZSEIVHXVsl4g%2F7MAjHShytPnkB8lGN4UZohN49K1gklXddz63G1S0348MS%2B3ordtD1udczvwjMDybcVsCRilrOYH3VQq3agnJoIZ0sGxEb%2F7zb7sA%2FY6N%2BlWbnVkhyDs%2BGjgLlLGKd1QzezyRopOYjnBduJEXdiFrfuGOZgS21uG9CYZ9X7ZKKpbeC1C3t7GWqQYWnx0D0nSMGuB%2FkIFD1V6OJpcQhxMOGGlKBtcZG9ySPoaK3Z9Xy5wNDH8tmgnWOp7DdeGq3R5W7e038u3Eq00hTIIvsfvKHee1TwLSG3p0rgOvl8Sv76fGrfc7y2%2F0FOrpIYBQU%2FjWVjD5gqc%2BfP0owFFs7jUDLzd5JrHnxqdRbube8JF7Yc8qb7NR%2FYh%2BvWEuTkKtChruAkQB68Mxy3NqApdUirAxwQEJiM1dElwYLSCLDJ7etJw9SMOmAy4%2FPTCGtsQLRrCX4i0ua%2FrFtICu3uS4ErEdigSEhSqsf82mlJP5kqJocjkpik6Xwp29EDCNqBxt63ud%2Bokz0vKmftcH0w9KTVwgY6pgGdw4QQtcany1VjBpVh90IHbKbk1CyHZLoFHFRNKdS%2FqpBe3dgZelx8Rth88qYlQQL4JgkE5%2FgFUVeAZpzHkaNPa3CoHxcsEZNuSTe8iAl%2Fm2UuTnTPYOrDwz8Ww2WYyfDew2p%2F4dmSu80Y%2BOqiVRQz8s7a0qq%2F6KnT4j5mBi%2BBJ9y3MxiQahZSFPqs5A9zFJOE13yJ84Xghn7mWLBDfjwwg88k0OtY&X-Amz-Signature=77130fa50b469b8c5b29160c6dab831b45fc80299f4b275e5f34e6337a866b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
