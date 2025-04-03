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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623GRJEJO%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIErdXc4nEAmYYLpAvbymp%2BRMvsCIcO%2FNOTUvfGeFdIvoAiEAoLkl1%2FCUY5EMDqhFipEVYr2RCBnA0FGPu1w9Pq2N180qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLzhVrbubgEzLwCPyrcA%2FhfZvhAONzCdXdQU958xQvp6pTwCS3hZhruHevLnEoetuZtjuYP5JTVn0KPvFE0p2P6mJMzeYPnSgxuLlZfZRVYBSAlH%2FaQswgMxcDbRhzt3lYsUhSQ0Gh7Ux%2B7my4uj0LT57gD0valBZeCrjRnqqeEN%2Bx4uL2Vm6gM7JAoHAxtwsZppsXUpa3oP3CTD6urYXVtdd8RrIYA0dTshkA5m%2FA5a2Oje4mGAOnLEDts3dmenTTPLHXCyN1QwDriNvA8Iwnl21KdAr5BYEAASqo5qsfG2oj%2Bc7XGLY%2BS90ZwiAkSyFGh%2Bk0Npss5auQUuH8Kqx0z95ZSnUMOa4NSowNa9NgvS1MPhE86%2Finlyei2DKIHcgg7cpWlcvuGe0ylwq5Y%2BP8UxqkMdv6n%2BtmDVy2RiZCAQhHKgKhNv9lXhdNGBqctlHmAIgBvL2KnTCGIn1kabnKA%2F4WRXc0y%2F7hKkMqux1m9%2Bxvcpw38c34CiDwYeS6xfUagE7%2BrOYE8dZ4v%2Bv5XAVh6bvNisEwCTn2fm8R17i78%2FE4Z1gKs6aMINlAwyXzCbjKCDeAfCJHBzDgK5r5gQUyMUKBySo4oUFVZYntMWG09JDPS5iUYLApYgIkKmlDndWSPtggXH3gIUzcyMObIt78GOqUBUcDbqvURlGDB6YdXJ03hCp%2F9zvAm7vSAqSJIp%2BcTFC3cikR5OPAb%2BIHzXZVBTi%2Bwtqb8bv0dfClTylMJzjz1t2lLa6%2FBQL7CuJxkCXs8VYj4SPfhr3%2BeZdS8DBFOdqTKXUEB8kPT4%2BTyIjvARwRYHrLwpSsIRF5AVjncRbeSKxGCJwVN%2F60sc9pBTTrhq%2BoFUFZZPLEyAnClr5DzX8koToySxEi4&X-Amz-Signature=4bb1b7b485a7f38f4b74c3bfe3275a2bde433b52b21310a3fdb603e054c22342&X-Amz-SignedHeaders=host&x-id=GetObject)

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
