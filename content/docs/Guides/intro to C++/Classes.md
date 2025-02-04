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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNW6SDFG%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBG9Pf39pEbH6vH3lSKvOpBcUp176ondk4CrbR%2BnXgpOAiEAmZ9GrruFAPnkR8w34RJaQ%2FN5vBBrUa7s3kTVzIdvaQgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPwQZz3KCczB1OBKQCrcA3PTG0uM3HyE%2F4MgCHFoCtV6uLQs1WTzVK9QHKv%2BEaKhQqpmZIZ8vc4sYLE7SsiJ08s8gQ38yBfwI5tAhtMYV5ekzn9Gc3dbOMWNbb13nn58Er8SZwE3eTlSlgsnC6pSeErP%2Fo%2BLqyII%2B7OMpnzcxrbOsW3eZ3X9WSt8bbrByvavrC7h%2BRV2xg0OUx8rV3UPtvRHUxNlS%2BV%2BTZEbVIY6NTutitcSNwfzKc3ettL99nMpQjjyTKRnHblHfZgGWZxQjxpMk4D6J3xFnuzVXNeuTqkL4ZJSDbntAUEhNMQewLfW0zLIr5JBToFQHqa8uGz9jV%2BItrEEBcdMWAXOL2wZwzOxLPHl8bcR5TEKEbQP3fK5cQhjT6I24R4MScGObN6fLaHG4TSVhOiGfQain%2BmHLCKbcObws5a7o7eQu8tSwl3QQ8UxFDEa%2BgQgbfgf4Gd0aGHSL56qEO3m2l%2BZ%2FXsN%2Fnh9LNu9q6uI1qNAWYj4mkA%2FDpa3jw17%2B%2F65EN331kiRtmUVpnm1jziodApdCOcxyVGvxDlHlEKm%2Fny%2FA2NHbdINrJyVSrZkQGF9Sqe0kn5%2FEDlq4%2F%2BDA7zvEn3jIo%2BryLAGQmxzISOcC55%2FqblLCqmWP2AE%2FrRsN3GPydyxML7Lh70GOqUBBXK7OW1XXMB679sO%2FEeQFw3I6AVNP37IsEJQFvYaVe3J8oxCTiT73EYvAMZbWgtZF6AmDM8YSov%2FxpqzxNAc16JOBOfG%2FKludujZgERpo0%2BQ41ZWboJTL2AWdPm6%2BzadVU3OuLN2fa2QJUGbtCQ5pFR6w9JRjY0YF%2FryDG%2BSv4beKA2R0eBTvr8MU5yh2B2vcVXccBCbPeCohkJL8eD6i7QI0cK8&X-Amz-Signature=66753964b6a9baaa3e31c393197f4a311486b140ec2d8b4154f2b48fdef074ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
