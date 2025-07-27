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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIWEIALV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCllbGA9qeEMKKdqO0qp9%2BZBk1ualXH7Cjj4qlEqBOtNAIhAJbwlWVPnX1kkNOlQxRvS1FfGwceNK3jvw59xpr%2FsU3wKv8DCHgQABoMNjM3NDIzMTgzODA1IgzJmtvJOMEwZEn7CSEq3AN4sb8ubdJKF6M7EJDEpC4REsdQrnK17USm1pjxA719wLtB0tC5PpTnvwEgWDztv2pWUCU50ra%2F2gMyzgTS7x4VnGV%2FjozFWmROZErC1JJWPK9khKqtnDaumEcfp9WM4QL96lpYnFMEI%2B3oHIB%2FpUNhaKuHlpJMpfeOSAhhXSQMENsR57HWUCX%2F9mfZHAGIjTLqC5nV0poX0xf4jfiRfxOD7zSsZBwbQ2e3REFgumBKBkTKywh2MryawcmUw2pbPc3iFeHB96m5tsqnrPFLuiaVM6Fm3ZD2gcgnEcJJT%2FOWu0QCiIDHUta3clCrAToQRebsy2c738xujxUdGaWa%2FUmZnGVyxcZefnqrl4Kc8H8jZ7aYGqa8oyKPVEsRWUi82S4l3FiIqx4%2FkNy%2FeymYa5zouYMXRqIe7medOVusBDgOmw%2B%2F2k6hwF%2BvLGw%2Bc%2FG4KMOp2PffJsiEr4vjhdoe%2F5WnqoXZKdc%2BkntBeYzqRZDUqX90KSSumO06f%2FJOuMW0zOy%2FgfAp3cDAzcmrnWLgEADf6K64pNKwuKmrUI0g%2FSxiGfVEWtMj0hA903Ld1%2BF5TL4ziaQ2Z9NdE%2B86X3qvvd8nCqs3OTnavsxA7%2BoYsrosQLg1kdF1JqsjB1ddQTCJg5nEBjqkASD6rNp4vp%2B%2BFwz3LLcO70ZO4EeKc6XSSCC2Bhfr0g%2Fv07c3GVdSUkM%2FIOMkY6yzH6cJBYyzByBCyCR43JefnSpZ7mETQvNwKlWY2Up9bHtqKv2B2JzfzfYR%2F6NOgSB5WRYMeXVP%2BLAq33pBjrqzxxAIEiGC%2FpqpYPcskvHOkjcFQFJxHYD3TD1vpwRLvG32LQhasHo4h4GCf%2FpKLxDpIteIRIFE&X-Amz-Signature=7109cdf58d269ac7a03385c6a609ec65fec5fd734f499a402c1b139b18331e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
