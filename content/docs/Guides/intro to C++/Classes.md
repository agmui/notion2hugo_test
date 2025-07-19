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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y77CW62Y%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWnuCmI14urtGjRPOrWvzcAEv%2B%2BArOui8VbA7%2FUq0azQIgBRJjo1tqwepUfcYQK96DkSr3R4BmzoVEbOQPlVJc%2FBgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQpEWbsFgMkuz1ajSrcA5EiBtFGwiUiVeSxiQ71slxBP0EJiOTq7PNGXBLIESjetKlLFKUWFWa4w9lKvqE4T2XotsNQXnBit6JERDnePMeCfV2%2FuEtjMowGUxt0ObwanlEHzMVhfIzfoW3nZfex5eJ1d6raV0HBKkftYfJcpCqBMMa5DSJaoocjyp1GbFNdRiztw1WgLQHhcclY6ZRK3IXBAubWI2JUcOnUFz%2F0mFMpl9PLwpCH%2BZTlXYdaRyqP%2FLwfa40OK0dTb6vPNlV0wV38t2t5k4Fl2Lwa6zn%2BDCjagxJNsyg1uL0EbQE3G84BZImLuXpzXr5kCxKS8HgAa5CEiYH7U7NkBm%2B1M%2Fxbe832BE8x8j%2B1p3Zzg87jadT7dL0qlHWbKfbGyKYzzO38uPfAq2yqKcr7CvIdMxDAoTPisqOVZVeOv28U5nHnLZlJl2YxMwOFllqKxBVbBSc1jsV98yk8hqG5cPfucUCO6aM1qfRP3WU%2Bsi%2Bedp%2B1oBYo4j4Rs0wiG5EAhzERmnM1j%2FUEadN8Yv7yxlxP5s4iXybSIfZi2iMKemZRBWGLUrvpyIYl9tYwxtgWsfLG1XbwdoEHf6ii%2BzhaX2qYPk8frQDAkckB0k7Az0YkkJfydKf9ak%2FRl43H0RRJ82vIMNSg7MMGOqUBXTHQLFoJ0EOY6nv%2F3oO4xtRh5ibJdre7CvfgrS%2BmYUPL%2Bn%2FA0AOkQsK7W60BwBz21B%2FAUe42%2BXM%2F9oSuX67l75Qz7SU1HJg%2BN9jbsGAIB8hh9CMZpjZux%2BCqJi231FuNlNF7PT7g%2FasGV7u5G9%2FvrLd3d7k7yqJ4WPRjtYoYygV0%2BXFXcxUiX19c5EzkEASOorjWZsiBaIPSY8cXxy6hu%2FkZXqyE&X-Amz-Signature=6cf93adccd1a9ae28dc7308c6734b47ed7e53910bbeab56db64be6ca152f6b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
