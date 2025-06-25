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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIRXZKNX%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCwJka%2B51KIX8AvWQQIZ3w6BC5oqveRh7jxjp%2FWrgj%2BXgIgSvtiIF0v345TMj5bbJn4IFF2PKDQhvDieGMbFLjThtsq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDEAfLt4PEmXKPdxygyrcA7L%2BMx4rsVJgCD17EyPaDdNOMvBJ8L8Q8p%2F3vzeCVN7ncSreUPw%2FptWp284DmQQileVZGn6N3OerBiRCzV3GE2VKM4O7A98Yxxtv%2BCL3PJo3tQ5Io2mR42X3L%2FHFfjXzhMyrDtB%2B8EeRvmUBTr7bWNubuaxBCzJlfEh26Gm9OSaw8NU7olrAWdqU3xuYLAZEHOfRrYO4tuFPUgLM7MIvvE%2FhvvMu9jpnpn%2BBTGFRpwwG4geo8kmGyPBH3PnUlaGZlZ0BK%2FPiVKreWxRKgSht86%2BgCftCITQVIZGF6vU1jQDHc5w85qwhQapIl%2FlIgzgzYzdSpMKxVT8s%2BoiQERJEiT%2Ftpb9yiBYwtGFj%2FaKPdW8xSuSIJmGQUghzV97yGwOOsYQKKOtYMxNylz5pfBQP9GqQcc5qBz0oey9m3Djy%2BghrCisaWLAznsbtbUqd%2BWvoLX93%2B2bTGr8FUlbtARI%2BpTB%2FroNK6994oO0HDRQvcRthzsryBtK%2BSQPqSaGepJ9sT6s%2FNdyXW5tLdxUCMGf41DGL3jy6V1Be1OTdLexuzaKF%2FHOUmgOJgDVu3h5wxxhz5YVkjUGB9f9gnLwg4en5WJAmdQlZ3rK2cswcyuKfFlTPC5prpTujFbbFT%2BjtMJ%2Fv7MIGOqUBtLcuV3bbt4h82sKsDZOf%2BYcoPs6oCGpTrbpzUfC5rBNY8x1UZWDG1QedGDBQFkB6tcCAXey5WF4fO%2BlYSDpNjNC3LbpHUoGyCP17ayRN5SipqozeWBn5FLtj9u8h5nt0H6Qm5%2FKXqO%2BQ0dGsobJHABuVaOx0pq%2FvDHi30bhtUdfPJ0SHwn%2FkNcn6kLF%2BIt32XNrPR9oqybi8CkXeisPNvuIV%2B7RZ&X-Amz-Signature=c936948b576da0665da59577cd898509e5e04e981aaf04d1464e1284618dc23a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
