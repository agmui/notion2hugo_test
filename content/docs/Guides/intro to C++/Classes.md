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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZWPAZXQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSBuH99RyIEMPHPz02PsqLDwZgIYqra5ii4bjKKwmR7wIhANgVwUgxP2mv%2BLSrKwsmTxIrTKkZSHmpeD1VwZcw%2Bq00KogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoafSTJybTxIADKdYq3AMW4lm%2FXy7YFAQsUBNPUMi9wGyLvHIojJfHjJZROZxiCM45m3WBDrvcSBJNZ6%2BY2B91WylnpobxAH5zFgJI8YzyskAtlWA8fywqPQrO76n7%2B3gnxxh%2FgimvWsMIDY42w1aF2Z%2FX9vIuxgVbR18NxJC2Zxh34sUSTwHVigcacLawZ6glgWY86qr3GEfojL1%2BMrBlx1ovrXMVy%2FiqsewuRy9cvBSjS69RT0vbjpGwdqdZm2eJaXe4IroBWIkaMctEDTP9pNO9L7UighwwmpKqgZ4w%2FdRXABfzJi9niwSiAiYP1rKKI1ZtXykKh0Vn9GPr64jJEwBL5cVPeXGZKKBR0y3CF2KwzemqdZ2SiPZVb%2BnJTP7soSkXtNe46RAtQKzAUMm0xGSaULkO1TXrxym4lfuSrDSjEoAmwI1EyD%2FEtqqz2apZksZWiw59Pq3U8BKyQzfE9oRwYoCudLktugeuB25HuE0MUl9cvoANLcPtPoIW3gHTZdwLvWjZyrjgzBCv9Qhq6MoJEO0cvZhcbda2sPlWLeGxCYuxWkaYPOoQ2oBU5L83QsbO%2BBySFRVnWpAYybD5fTAjowX8UeK%2FgM8GyOK9jYu%2BvSbcREo%2FQD%2F3Ve%2FfDZkSUE9RX%2F7yLpZ%2FOjDd5v%2B8BjqkAd4vvBSL4uW8fEKH73GDA1IkxksiUhpIa9MLWrcEK8f9mgyN5TgtvLRo62WeCA5Q26Pz5GD%2BPSCYcnIJeGffFuESrnuFiSbvOI17HlXGl2pWf6yknRicg1ezDxMk6cIVRUxumzX%2BpHkPnb2PD5DbCfKruWT%2Bq%2BYvbRSwt6F%2BAIVh%2FP1iSBvW3SwqXqhNdrOEedDSRHAgdz3xwv7kwqi9s3Z3kr%2F0&X-Amz-Signature=5f91edd16012a7a79d45aa8db66df897cf418905868ba7379947403bcb736794&X-Amz-SignedHeaders=host&x-id=GetObject)

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
