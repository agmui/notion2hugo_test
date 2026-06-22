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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUB5AYA4%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFV%2B4P%2FT32XSGhn1jQ8MkyozmMCrCxcIYuEaZk7ydhmAAiEAxt8Q1XxArXvCPkPhBcmxd2ZHidWAcLci2A8K8XDdDNkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BPUa8ru6PeTFjFeircAxe4oN1MXaUiggolk3RNpqr7BNczJuUenDVeaBiDnsFXiSS8P3vaPSU16PcqZE2y%2BcWKkBT670%2BkcSOXwqjKQA5ELY4K9yO1MQ%2BqMfSte07sOY2sg1B1btfE1Tf6UiyrirQQTrw5UO%2F8%2BW7zif6%2BhfxP4J5iwu0v%2FrXfZzWU7wUE4Sxsb%2BZGMnlpDbvYW9a2Lkq1wQeMFc6AhHkMpj8pvxFeClyQRckskQD5XmC7BS9ChaKa4eJgV57Kjz9mU8bGRSlBkLEaZtNC%2FWQl65XE9DlZ3L25%2BZ0hQoJcb%2FL7Qi1aE9UZA%2FFX3AMShMWCWZLPUPf%2FR%2FGYXtF7NTzsW1cB4gC%2Bw%2FdlSExkDTiCnlVG55VfcCxujzW0DWOiUH%2FT8VSeyk1AD5d9IKf%2FNtygWX7Wssd5PaIARhjn1dQ%2FsJK6iASNsslGUSIi9ELXXobrJv09jysM3xK1NU02UDuFkP355l7zHgGLwOANbypL3Hc7MURASWdFSK1bBdEXNzhgGp45PNQooyeMT4GHLTCDHq7u5UJrO2s7OUMN%2FN8GkwZGsUdBFNqM%2FH8w227nhGg6gCyXAQnBj8ARaOFhYB1jGTpql75AMZIM3r2WG7ad1RZEEQgVMGsmKtnY5IoCy%2BtSMJvZ4tEGOqUBfF92GoSkvxVup70PzVlWhlEuSNmDtq3ZD%2BObls3jwdS2jFWnaJIL7x9Nj%2F0tC9m7bNLnGKGvtOpItEgOmNpoGeDtaDeVGBNYLL7wByQObvjevD%2BOJ7K3d4CnXRAVU3batOYOXiLr08%2FoRzjMI8oHb%2BcdxfIiUnAbmmsJLT2QyTpYWQEemzGho%2BVHedVAyEskIv88%2FSH5xrxeNgbr8JXclxvtM3zG&X-Amz-Signature=0919c35cc79e97fbc0539181dd6d441d46ea3419e0bd406db4932548ae0492bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
