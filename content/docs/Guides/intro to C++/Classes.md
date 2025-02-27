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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MTP2EYD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIFYBvnPCrV%2BiYY8Ow3OqiU7MtQFziGsEfFOF%2FdOcGfLfAiB0mPa82ZXk192KlltLtSR8g%2FNXrL1nfi6cXeqkRM2NSSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM8lm3OsYayracCz4VKtwDyDZNo%2BNwIFRGxpaTBZ0jCY4EXDpWKznOoEHk32nEPWRfHJne%2FoZVeOmg9WR%2FZl8Cob1KLS3UB7h1VWvCON24jdw5DArNQ2SrFFtEPOu3Ajx7QVhFwht5aQGE37WXtCP3tc7rD%2FnGWrDw6WbLMhkzE2g%2BcD3SGgT9cLKEdigcq40wiSXkZijpo7RssJAD7eIPQRPpOdcvwj7%2BjxMU%2BEm9oxBFyYC%2Bzuym8rhIKtqhMATAXH16j8lx8kvtzp2D4wxzCefVsVEimlWBUaTH8ODXjUjSkSUa%2FxZPpoJ%2FuzE8hLhW61ND0ZWWaX4Sxv1%2FwTxZbYWPQLoFBxLNFyTScTVbXEEpPf54gWLQWd9mOwj0OxZr4dfwtZEkNlMvSNQ3TVfPdF94bVrAA6cA2a86OCS616OOfImvWZFGC3b40XMtP%2FHu3piQkwT7zEoKb%2BXNsxJHS7hjJiJQKZxfJE4NIhbM9ZOUljKMnZ9%2BlSQepZvfoee2pEOxDwjNbN7zHjHvu9%2B82rVZ%2BXqDCdHD%2B0TmmZNPN43uCYxTire%2F9rDeVjlOb9uZ%2F8Vde5AfD7ZzpedrqQ2RbPpfSbpaLA32MQ4eyKxyO5LnMnV3UUTjBP%2F8waQFClq66TdoE5P%2BDy6BW%2BMw24uAvgY6pgEmlQK0Ov6DcJ%2FhYOCUXV8%2FZRjg4hGpMeS18NtcoBuTbq7kllsyVxAtBPNby99qmdx2CA1qsTcAB6SpGuduVsdfrh7eTFIE2W0lRSkSXss5SFRE5xHIA7%2BLQbKPFM0340dn0MlgtjyyT8mCCbsR973m7aO6le9wi5N0Jy2BNA63rcxUYbtAR4SGjBOp%2BunOnXYBE5thnSwu4ibxwANzfuA%2FttuNK36o&X-Amz-Signature=b8d7f72e8b60dc44d4fe817df97ca1a7750c41b979b2ad226751c40e755a6985&X-Amz-SignedHeaders=host&x-id=GetObject)

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
