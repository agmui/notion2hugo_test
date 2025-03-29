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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKRNIMZV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIH9xD2NsAf546nSpAgR7Hrx5gbL%2FCv6yjcI8obSgEKptAiEAqohX4xgF42YbP3hXhSCEcB4W5%2BVYkie6NPFm5z7HJZoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBZgjDwCgmmIEhO3TyrcA9IdkqHIBQ6zDaP0EkkNNZgrdRsDczKtFYYV1LlyBR0TxHA%2FRkSnf%2BY6eKaf4AcazU4dADdXjas8oYaNTDRI4eQwLpqZG6cldmPSMyBlnF4%2Fyfy%2BPIb64%2FP7dITo2rk5GGN5oIRmc3SRTnxJPWWt7eEFbOzW13LNJsZ7rKsvqhT6LBgNK1sOzFUGFI8AN%2F%2B1AIZNT%2F2HVpj5qtvy%2B%2F1djCFmU%2F9PxsbO%2BNisWKp5ZNYbkup6PAj6DMn%2BWiLq4SIBMHyXTbuWOdsZ4ZAlq%2BOMjif0NruCsRJ%2F3QSHFDKCmnPZbdcLh%2Fd5zaYdTguVmWZthjLg250SQuRNHpdnZtfXC1P9653DOqsf3rwCKcnBBvtobKspYM9gUuxcHnlDTlHrF6HEVqUzLXyKK6Nyn8hxpELEoFHeSdex%2FpR%2Fw8oNma%2Fk4ZnnmC7UvicQ7b0Q6wQpxiYrDHsg5x6YVrHIdITtrxGAoPeMY9LykMHZhOt%2F5YUlDiGQdM3vFwGSQE9wOQgMvEyqWGWQrJGxgj5WchuTRIQUM4Rj6T2fVqcneVFHrECFflo4q8WQMDLNsFttyJEwYyqUaTbejq5%2Bm41boWh6WKi6FjOiPeRk412Dy%2BV3n8zS3zagOiLNgx0CC7uSMP3enL8GOqUBGIqrOHTALl8Hmd%2FuBJ2DCXK59ApoGCsfAi%2FJhHGsSOxla6abweRhKNABjxeGG04sc5vT2iMcui49GsIe8HrKMSdxd5pYkDvQal1ZADaM8tP5xd18GEvRxxGr8ikeoIks1jgKhMqHznJB8fHas16X0VQfTm82IE%2F2YMTtDPiryksvilLlYuTTnMDCq6WgO2Y1oHGxtNaZScOVpnJ84n4cgLab4CFz&X-Amz-Signature=310f2eabd9a89969f6b73705971d7c11a36ac74f51b65eb4f13b0b31439617ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
