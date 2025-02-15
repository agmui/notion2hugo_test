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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWJFCI6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICywMo1LqLPBELua1vlxAfRuhYRN4itQwJRaJFX8UqF9AiEAn%2FZYKFzVOX75jtM3JXn9XTtWCD5bSI9%2BCMAkNj9of0sq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBZ6BTldtt3Xo2L1qSrcA59Yud9hPyajEJzHOtBJ4ikhfOiPIgWUyzzEbgndGsLeIQ5TD78PiN3vYZZqH6nJFisJ1tsOVgVuzScflwspeLe%2B4Tzny5Do3iNkp98Hn18Toi35TInsKdXzMRgFyUNUouYSbAj8t%2B7NN69N2pDgNzWcA2ZmiAfi7DRUC33su7jY4IeP6JWOIv8z4o%2BtTFMyKj8inQSgEWOEJVnEsMuveFB88n0ouz0dw6i7FzDBmAc95c3VEShnTCaBSx97ZodguM%2BY1cnLSvg2WMHXPSrSDihYUnCwkldmr8sXRt6OhVLqF29ZnnrKJc2zErmwc4jwGZ8W37o0wLANzGE%2BrxVqBMGXbo3SfKSLYtGvl0gyWXoGHhNBazuqzV%2B57obrobwZDWNGtTLTq6yu7Ro3SpFtQUt4vr1IKUIdg5zrHqYzg4ZkoXvZAyEf%2B4JHPXoHHkOSBnxB4ph6LpaE4V6zFQXDhRjbyXBBC3IqOiyAJQLrDuLL1VGThnmB%2FXLmPZja5rzV%2BGFF550n1vZdTAkaSGIi6l92cGMWdVWaNM4Czdy5qOlLXU7PgBDKmXPyU%2BkkIIePqTLaB58hdFOicLFd1nLWoy73u84nXsTxLjh8EtLKcLZ2JAiwLmiWu0XIPG17MJHGwr0GOqUBFXl1EPcEYIu%2Fddjk0Omgfm0DlzhdlaUHR0TtOBbiSoqemxGF4a17XXK3%2BobpI1wXhEwn1J2CGBb7pK5ikNOk2bSTbA9it08%2F6QH9T03vjYEtMZhsf0TxvkS0SmUSGVMkgVqHUDTNi%2BsYHgz3%2FA3gpo2wB7C77Lg79OAHYx0OR8449K%2BIGCv5lEhQqkoyz2xEQxPS%2BFR9QcWXacWDWIDiuc4kpsDx&X-Amz-Signature=89b236cabf6236d7863eb042169ea5532269732be1197e257cd2a925904d8670&X-Amz-SignedHeaders=host&x-id=GetObject)

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
