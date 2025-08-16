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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NCQICF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICP4A6rN1XSr36UFEZqUJXpE9CywzD0%2Bjy%2ForXvnWM5yAiEAgko0s3FFkFiwUZ%2BFkzXweci61HmvJpRKlC5hBy96MTcq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDHFsSrJAQ91yXtYXSrcAx%2FA2WITT9bN%2BznMA3SUpmtLvovfn6veLTSu4qGFDV2spnVk0Ycml1PT0qYXRxIPdWLnjqW%2FiS9QDE7NSpEqe%2BrSkWuR%2Bpd1lK%2BvSG22Oj2WJIvPvpqPEtEcW6AQJainBRmyYTDdebbq04JcKthtqN%2F67arZ2qJ0Z9Q4Rd1LEwNd8awdwryGpBAlAJsshFMhkDQ8bcVMPGRG42WVKVlOSRcQg1dERwDAjyzhBlCzwQnYCzmh1VX5eHJhzUy2k8TbVgOIbenZijE%2BWBSypuza9%2BFYOM%2B52%2ByjcoW4ZOMfrV%2FLuU00yyuMCG%2BDwskM8H7vdUbgnKb2TxAfP%2Bxnx9vmVVbAHePiCzlncet9H1SvXpX0%2Bfn52%2FGo5wW9YNeCCReK%2BE%2Bsn4xhRc%2FRZwsPubbT8h%2BqPOCXqvHzfcdS0Vp9smM1ak%2Bw%2FFV9Dv0L79nTz3hKeC1%2FbyDzv5N5QXJS1HpG3eBxyYiixY5i8%2Fw6Fs6iVWGNF7a0arNeHWmTxhkiCkWLJ%2FVXvj%2Bb7HvNprRTBI79kATyp3rJ%2BVlkl1GCEjW8gcvwuCbqU2xhp5AkrjggaHGar6rJ6k%2BMtH27qywuAgo1eg9yiN148sOacSNzEc7BWvtkM9OrdVC2GunMOV1RMO3j%2F8QGOqUB6IY9oxKk3ygLW9rcOtL2ag3ftPXaCf3SKrSx0QNeLTHdxYFJOjLoYedssTkq6ntczEn%2FgskejSegeOxrS4ql8TzIo7YLhATNojjmVlAGU1nGDHNVfCoi75x961zbgINEpiD0%2B92P1RZ1abVSezh%2FW7vrcGhV67SoPq3hc7vyFqf8dAa%2FA5eVq7%2BbTYpxGN4A1JsBTUdD9tr5cufhSaAhFb%2FtoyWO&X-Amz-Signature=173abe817099a509caf232794be4832965e8a94a7537b82f1b31af17028035ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
