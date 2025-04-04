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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYV44ZGW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpgXB0JevH7a3M8DgjYo8l8IOssDjKRYPlLgSwknZ14AiEAm18DQ%2FvcSEaPMs0fO8GiNnFpEEnYYWflXDgoZ%2F984RAq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDFXivRfPbRBa9h66UircA0SivOZ88xzeL3K1WUy3KSQxicUNj0AlP5b4YhSAK2ii6rRQrB1xn%2Blvz%2BUJ9kdKpMUI2%2FTPuhb1DetNsg2h4kPGptK3qtBshNnlXw3KENczSOS9b0qfCZ1sRPGI0ZM7sPpGqv9sijps8B5Lc9TDeJvfmqjK2rcLisG9LYGpWTBR9ssYEBBoN0Wg8puY7ZzELWddUvF1BA5ZVR1AXdtnzajNNOps30sGHIIS%2FWt8bv%2FiPSCI8ib8pUVS1kkqFNgRZS5kFG6m4L4L5lhm71DTNRRioNgP5AMOt2LXpLNuAbrRHJb9An3p8edxRz%2B1fIMx7Ol3Pt5pbcvHChS13WyRTHAgI9ArS3Q1utrlGh4sOvpsiix6%2F%2B0RehSII%2FqSranAKTlD9bWJL8le8AoN9XEJiVoRiqP3C%2BZAPcfAbDk6JKCCrxM16SxmMNoWm8JTI8nCiqZc5tIyxXzmlGEfcw9oEi%2F2to1q%2BuFYyHvQbOtN%2BJOkyU8g2sguZ%2BJi2YIuau1MeIei%2BL1S14tJ6kLZTFd6V6VGLN9rKDcbTwgOpSOaSD9jn6com%2BMpj3%2FDYfPiuiE6ebGmw3NV59BzWaIAhnkZrPzQRD%2BmcySb5paltwSeyZmszs6LWCp4NHUv19mgMKzIvr8GOqUBhaF%2FPzIPOC1d6qqrvGd9WMo9cHbV%2BD610uXSOv9kMZuPGieWUzB1dog9VZSt3F2ehrXLlrzqukgw6rNijt1u55eUH%2BT%2F07TDhJc9IcVFGG7Ml3SF8RJxUXRzw8eDm5Q%2BPyjwmVpbTzUSZJnDpSFWWVDG1y19k03CIwymhEytlCAVAYOhYN6hR6bYwVYJ66OyjIPpefxcruY4xcP23duWVMSfTbRO&X-Amz-Signature=7605e6bf2c6992870cf76c1702cc9b566f3f4056702d8d6d163e8a3d19da261e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
