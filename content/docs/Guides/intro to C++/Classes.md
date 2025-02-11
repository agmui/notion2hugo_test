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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEEME44%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV29I%2FkGSxrbzQmjYbQTLfR1czEMB%2FoaEjCNwk6OfxNwIgUl6PlDlev5VV0k5skP%2FWKfzQPSysT6Ag1DzyYEuPYKEqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvQ%2B%2BNLJRFKXCHzVCrcA%2BwR51irfYo0MLJFM6KrWnyvbYR%2FTvVj4nGvi%2F25%2BXh6NO1UsyXdl7yal829WnaxTxcQHEJTMODEh2w6wGDfCENJsXrBzFKaGJ3RJIq%2FiD9SXo333W9QfZjCCnMyoxEDeeS4NCseeZw9TmINFLiggFEiAIU5ZmfzVqP9vJzlUjP526y6lUC8Zw96vtPjoYRomKULwzmVxZa8kNiUIpiHSSE7JowfrQQCSsHOO1dmSnVXo5q2hl26iPU0gnJBO7kGnW0ZLiwyg1yvjndpPC1CiSDZ48%2F9o7KMImpMWISvhm0Cw4RecND7c%2BD1dXukBSNuDS6VkRR5yo8d5R67MUG8nk3GncDjt%2FYQj2lB%2FaOxu31tHxoxO2e5M9Ay52%2BDciCSgWelGFRSW2%2Bg0IzoVTtK9jw2ALxuitq9WcohC0pJtm88xsIpM62h0koQbzXN%2FbbtdHB%2F%2BCJz7Cvc6cJzPri4bWD8HJTxAdj7bPm3UmTCsfkhOwWPzbLfkPIdKTRfu%2Bnv4EZJeMaGA%2F7fsSGky2JlX8Kr6K7%2FOiP8NVBkTBHYa588A63XDvqDVa%2BWM%2BSxkUt5KYFMyeNUTSDVECrcfOAZjbdK0i5eK9wP25yRGX4Fw6YttHGskXp%2FJESsxfREMPSurr0GOqUB2pR3epp2otNtgx1j2OJclZ6V5Z1vkWADNE0rVwF2j9fN3UzkgmoLrM02%2BQQfFepR0TCMhidX5ET0JCQyXrle2waJOTOYMjwepwOXfo3aA0OEVhqLttSyfx1CzE3p34eOzPQ%2FXVC2lPv3BFrXRRx1xbom%2FscJxQsS4yPEwIj3QWMz97bKp0UJ%2FHW0Xl4mSPV%2Fi7wZRdjvdTI6vOhHiw5%2FCWcNGS%2Fu&X-Amz-Signature=ecceaaeb6cd140eeb8dcb4adcd4653668d1ebe75b837c4205022ec0837e41c14&X-Amz-SignedHeaders=host&x-id=GetObject)

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
