---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "null/Guides/intro to C++/Classes.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PSAXUZZ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIF7%2BtJUAu%2FBazMI5Wo2Bb3cA%2BYpTfvX9uVNXbpJ18zLFAiAL1GKoH%2FNc6zzGvmsd3rZRw71EDXioq0OOg5PtB6o40Sr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMszSwlEidmImaZnweKtwDZHvd90NSx1814sOuCS0BsLKhtlUqToIt9X58bDyVj%2BvRHh1totiEgZQ2C4otHqLio2y4%2F9cbUN1iB7IGunulwa7wIFH2gerLOLWLuRgsZBO72Gp%2FPZBy%2FIYPTqnpx9wdOiWap09zx74r6%2FZzP%2B6lqWLlnddUs57sqNR978PYlcxkvaST1wDMf2TXwkcTEMu%2BwdyCrNAQ9oDaVboT5Qp4eXDosqlcPkkaIyfnmWBBOs4%2BYcpgbc2vNzoTpHvYHy7%2FszHGztJSmx4%2Fr6SS5PrQoOXMQUOvWxZU2EsmiRyGalfe308fP5O5JKEfvT8V4xeF3pZdgpUy2FV10cocZvQlHYDaxHrAZINez32vg2kEXYl01BazaBbx6NAn7bBcKKEEDDtBkWzsw0AcsqDtW7Ht07NgETzv1f5ex4YWVD%2BgKGpj8n7M3gzeVpUf1R0wzxWOQa9%2BP0Dux2PLvCQ%2B3jrBUAnyEs1jU6rvbw6O2Iulf%2BR2HjcT9%2FHcDHbJUZbjg2svQQJ%2FWB6%2FKAEIf%2FxZ%2Bq4V3qu2didIHNpX8tf9DNzWArqM4vjPbWi2yGm3ZJo718q9z%2FOaHPMF7Vzl4r62p9Q2QFtItxS0WBCU52K%2BwnoeRAE9eLkLdx6aPXTs8agw5s%2BKvQY6pgGUDpaQohW03MT4nVc5wTTU39L1l%2B4MRIdadEyI%2Fz4AiUjLz89sFbycvO2sSRCjG4aOctuaNi3XJ1piAYetyGMtUEeG1fskxevy634O6%2Bb9UesprFjofY1au4%2BuDxRt9vIZO9XAUjxJWmAtm%2BR%2B1VxyNul4Excmt2wkJUlKdQ3mlt6Zc7QP%2FBF0itFeZbZm5JBbkJyrESJKZ10LsR4lFjcQsLimFfvw&X-Amz-Signature=9a3488d9a1b283dd97a1b134aa354ba8e75909710f885d551ca50f35d29ceb7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
