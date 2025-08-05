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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F3X77LD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIA%2Fa890%2BaQlyW92uO4b2jXSxBkqZ%2F%2FlVnxwzLfsXlO50AiEAhdXB0KHMd9blzSAEfO7T32Elso05aAyMfQOiX47BuX0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMNi6YUDfkZXotHf4ircA4Kl5dOm%2FLgjLUb3NCur4IGecJ5Pb8pkoGKcyBhkpEvVubqlSH2a%2FV%2FHGKohYlkJvq1MWMg5wL4O8GPq8LA4bfwk4dTCHMjiR0IzBwoRHKoQDFY0ygT6SGFamXwKN%2Fcx5%2BQLJk9lRORZxpr%2BBW3%2F74mVMcHESYR9GArHTipBQ3obPo16WO6Z7ziZG11YdUK83mfgkMDgZZKeK3BNoNbcRQXwzYDYLxZGEnlToIfCt6HSwSSWHQ394lDcazcU%2BIYsEoMI92xMnEf24mpDuZYCtgTO%2F6wvRX55gnpc1bKSYer97cCve62hEil09Q0KhMqf8xP9F4nk2SwpPLugrye3SyCVTYW%2BJXAaZKVjFvXDMk%2F00G3Wt1Cc5JPUOgv%2BsjGFOeEm4rp6BJSuhylwnXrmSHPTptp0SYdbBckT0Wc%2F1%2FQkwgnx%2Feyj9RYjEHbd%2BIoPs%2FjAy7jhjDleyM6hPUeSVmcdiBRht33%2BkWu0JrPGmh2bQdokRbQBIYkBLDd69y3YQS9pe5sZmqWfnGRCMWfk%2FYwV7CrnTlghwoaXniTjpeoDlEpYUNVt8BVvKPzgCsdJ%2FEY4cD8q1vqFR5ChPrRa5ip3a4QG2cF8hH2mPjev3w37ePRm33Be%2FTCJY4nfMOe7ycQGOqUB9kPREGdVIheTmUFIgtaIv8cGNuxXUhXuFCaXneJyAMWH8uf3fdMVWdbw%2BdP9HVNUWLdlzgJtea5as4XHWGWcLx8TsGkkNP0IT2qcHtSntiPyGndYNoF%2FQyZI79p11uvrAcT1pclqKfnz9T%2Bu3Tur9ok%2B%2FNhZL6vhRkx0iyj9o5z6P%2FRpk4w9Hsbj5y01u0eOCuldcAeHxS2ogBCCfTnUdadL9R3r&X-Amz-Signature=5a3d4e3b4c773453fe07e09219978f28411a9b29c72ca897fcc1a84283714b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
