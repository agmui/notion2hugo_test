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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3E7OX6U%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXC1KodGESgRRdXwgS8YKc%2BC7E5np4mjOt%2BtRSKoFxCAiEA0ricMHM9N8gU7b2wmFQy3LreVDOszu6tuS%2FiGwsAAhYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECf34XOWoHwJrG0oCrcA428eEEXIznQefvdOpsmQYolJbhOzmJUGKbLltsN5sG3XPOMu%2FkiDn5%2Bbj5wMaC30vw50vdEs%2B3Uy8ebVftvW9X1sSDm7hT4ludrFM%2BBBnTpEDzB%2B8e8W1ag5XMiBuWzol0QYS7Yf8WUs9v3eNkUR5MCm5XtsBhKXlgGopQbo4Tkv6j1qF0oJNyjqo9kUWoQYX2xRz%2B5bkKoJB29zWsEUEm3g%2FYZHQW58JhLNv77MB23O%2FfdxJvNDk0%2BJOCI6rqEb%2BZPyrJhQQrFG8GxhVQHD7Ixca9X1zKQ%2B4gN3khKZJJldj1oMybhJJ%2BYvV0iiMSxRvyl1WQaY7FdlYDk5TTGVPOqlFqQ%2BTLnZDrgSzzzw%2FhpNoGKVNVSUhAPuOhqNHG2%2Fs4JGjqvfs8YEJ90yKZEG5TUTLnGMqEU680P3RLLou%2FM2uMuGrt%2Fws6kdEAkL6RpcHdrJubIaK3NQ%2BiHmzMuR8ZOBzAti7bN1NRzF2SWfi3DbeMyxGh%2Fl9tqtcPUZjk0i2ru2RWCmPefxTliPFaYz5Bi4tUttiNU%2FrH%2BkH3A78tVSWZFg343u8xorayYJ5gzzU3VAvJCO4tRZNzkS%2Fyd%2Fmj6AkpRq1HZe4MQdvH5i%2Fq9bAxPsG7s4Phd40FVMJa3rL0GOqUBNdq7o%2FdF4iEBw8%2FAV%2BfmS8NE0%2Bn267DDi5TKRb7wnm6BhjIZjHAvePEx6QmBdtg8tcpEkVdGeHmrpU5UlhXlJROiwEu2oMYIvSIxrl8uklhSroa9Olt6lcgN9G6WnYA9Ij1pW4k47SlWFJNX354zC5x509NobbZ1BF9oFsu961KpssUyflBV7XGfSs3PVFGU3Sp5wAS92KPJjhJ9q7grLO1dJpLG&X-Amz-Signature=b6b76d07a449c47c40714a97d02f687311135ab384faf40f5b65bc31f536201c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
