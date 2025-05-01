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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5IJ7WP3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHK4637zEReyGzStBJHTFzuRaEIxrEpSvPX3HteSVLmMAiB%2BK3GrrCu%2B1COR67Q7sntRQYeY9rxptw0NiVdTCl0RVyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMomIcYotUZev2WEguKtwDx7WbceCwYpFtDkEw78N%2FknEipbi3IGRPfqRFyBy02J3AD24k%2Bor9DHtWk0cGgpbqtPTyytVuOljP7nrtSHG%2Ff2ib8p%2BucGB80mYIsrxAxklySPQrR1ILof2Jubj09lfiGWtva9RU4oyqy%2B2skICF%2BFjSUQt27q0f0JJutbEwuY8lHfJMNdoIU%2BSovt%2F3ZsNrgEkHrRV%2FkFCRZQ627VztZOwGePkdN8F4MT1VP5Ft83eBrpgxki47Wcdd%2BCs3isEc6VryinWIA0r0FHiRA%2BTGWTap9sYFRftEgtvpHJsUGE2%2F62VkPL%2BxPr%2B7Do%2FCDRpFD6fijE18JoQdCz%2BLvu8Qb%2BloKfGz%2BKD66gyP1fBVNOJbU5Hwd%2FFLXMPiuteF0jCXPQiG5P21U%2BONw%2B1DzAKoAtbEMPn%2FUPmrRTwY%2Bp%2B%2Fkhff7BR0UfzXlNlVBG3TXufHyy5GiPWpSMJ1U1Ziz%2BckLFR6az%2Bf88CwH2MElOQypSSde4noWKd0ZNHly%2BTRpaoFBK5dcops2KI9dj2CISN%2FCXf1BPkk32sM5B8IyG%2BvkSGKABr1BB0ecfziAnIWLacWCqwoJ9eUdeRMHPFO3WcPvDZ%2F3PrOI7a4TxVpUbsGDtuWX3VCRYq8qllbxtkwmMnNwAY6pgFqDVLvTs%2FvoV4jvosaRL5ooPZMWGDGJJcMJeiVhLYx84KshoedmcBsHIu8sx7IQQmKo%2FO%2FzkMzOVHv72r%2FpiZtrjOcBFmtiJCN7JJkVQgGj2EN28vFI4pLY8Nl2vWOpwq9ccfx3JoWyFOyXzrrbiFwMviTBAjmjrWSfcL0Bx8vEn6JvM8wEIIzd%2FhRvpM3L62vMFP%2FhIIXC80Ek%2BYMTzbOiiudVSBs&X-Amz-Signature=cad024154f15b786b66dad9085b1311b7323e942efffb83ee4a9261c1b22c8da&X-Amz-SignedHeaders=host&x-id=GetObject)

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
