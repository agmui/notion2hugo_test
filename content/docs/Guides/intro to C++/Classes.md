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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTCYY3AQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIAMoYFjhiD2PRcokU7ZfwpLesLsHubS1qhxZ8%2Blh3N6uAiEA4gFTzL4ErRJyB5xy5%2FW%2BmytgdQjR4H0S2OR5eaNguGcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIHU%2FA1Yj6vA5R0AlyrcA3uN%2F9hgUfrrOVc9iyrF8L7PWUWuOkNEPlp2xI36kPLeRSOM%2BMI54SXbmfeqPsX3YWLNeEdaTyEBF5MY4UyuDaPm5%2F5%2F48rC%2BnzTSHHfXFhJqLJbV%2BED65pgqDOHHsS3m8ZqmRSAoPbFOhqWNQ%2FV9l5A328C3EoB3RqiS6%2BkvU6E1X%2BgqZNHuQpg27uBVdat1reGshN8WXNS%2BN8Nap6Aq8ew47s8YoV%2BkLsiioBSU3l2iH3H%2F0vgu5vIb8Vni3%2FPm5hw3c3MPLGx19rPguHgleEivNygI5WlBg1IdTyevR6wUe4EUJZAN7X5OZzt8jjFKSZGSLdZ9gz%2FV%2FmmjgEPjMCeP4YhxvaHEy5VbPL1%2BoWuVW3gH%2F3JFFB7NnkkH9nR4I2ro4bDU39xM3P7kq9HhdNyeuTJd9dT%2B4u5xIDjdUzAfpcpdfbRP%2FS%2FuxUi4cbaFSP2FDGwod7kcPeLeylxiROIQB6BBM7qRNuz3RsSqCcXvJBM1wmkuYckcmymIiLW0VvBM%2B7UXQzR2WBwWRCE4rOfNZVb8kQW2CZ8nieATynbk6dV%2FrbmpAPvqlhNQ0qRPMqPfYQ59xKyA4%2BiNsuX9w1gzcDIwqvc43etTHGcYVEP%2BjchPmhTpjV9JSLXMJHqqsMGOqUBBFpUdsZQU0fuxMnLGcdVW%2BDWOd8zKogZV%2BO%2FZKSH%2F5iu31pZ%2BizOfW6PFA0L8vaex2lZhYtTXAozjCjfGz9t1bjlH4t%2BZ34TmthQhZ6bMkFikk%2Fib8luXUxItJN7ZztAJ%2B3PYvkFy7ErGHNbyf18c5SOtP5JdnZUB5F7Vx1yMutLCgl39OROVZ5XHW6k3FLxuqCN4MHB7Rrzfs2WfJoGRVgWcDm2&X-Amz-Signature=837b81b04e17b1396685493b1594d840af1f34dc85ab47093161f8792f8743d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
