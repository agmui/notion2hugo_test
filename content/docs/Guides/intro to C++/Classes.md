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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3PLT362%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIE1AdlLQ%2F7Wstzvp4wQcVfGgaMMV%2BqUGonvmAELv3kW2AiEA2p9St9ZB1KDyiJz2XBn3Vr0%2Bg0Gh2%2ByG2JWE0lrEprMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDMTUNRXuKz%2BteB4UuyrcAybrQHOMB09NlfhyrwczDpfzzjVwX2TmICTBrez4gNjtGlWGCGGsVC%2Bwz%2BxZll55kAm3R9OiLqF%2B9RLX78kJC89ZDK9YqDFEqWfDSkFMZxw5bd2z72v1V3S3Z%2FRsYI0Yzs%2FFqDCN5I9nA7IRSjBs1TE2065TCqSdIRSVN%2B0wnAv0PYtizGe2suYEhZywjFfYrIMFffRDyPMQ9bLLJUb6U6mgd5mUP4rbeELwwImgnFt2fPEqk8X9miVcrY5fIzWp7G38ktyApbL54IAPGJ5GKnR%2BS%2F9nKvf1KW9dNwDMUUPSpgXVmXWjuYTHn6FY1ogbs7m4QRkH7NakJcpgMqXs2AvfshTXgV3M068fer89IUfP9WprOdwcN%2BozHBQbpcbp13pV6zRu0g7Ri5KooX%2FDR%2BUyDh%2BoDuHG93x51Gj6yb1inIh6dSFAHXDDrLVs6L0j6rP%2FlFUcJmXWBmPqXIvI9bHBLxCS%2Bcljbd%2BwVAar0dI3obMg4RZtz6A%2FXec5hovWBK%2FFhAV0%2FfdC8vaeS2%2BZY41hN%2BM644obN81J1UufN4BGEh6mKj%2FgYeat9cd7AaJdJKpj6lBDDs3CLGEwS4sza2eJHD6wOzRoIrVnasuRqkod%2BKFHrJemVphsX2avMMP1w70GOqUBZlforaRP317JqtakRhUfEkGGna0LHFsnfmgiJ6s8Mpmiqg9yTxJt5Vgie2hUH0p%2FiNDKTPSEHxwdFAekvGIcJ4rKt%2BgidSIK1XgM%2FOKEQee%2B29KWALHQ1nbMV8Wa8lrwuxHRa7v0FredeZIUjkjAJws8IfAOGCZD1ZQWjWLl6BxoaN%2B%2BrF%2BISKjf3nzQ%2FtQSEH7QnFsXF1vWmXmV3Xksfz9anPsP&X-Amz-Signature=0922a9a2b4697bab6268952e35439100fc5976874fa2ac472e9a74b3c5cc3834&X-Amz-SignedHeaders=host&x-id=GetObject)

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
