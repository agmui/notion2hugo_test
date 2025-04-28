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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVX55QL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfhSJbCBlXrxv7FuxAC5IJXFwGU7LM2b%2FYddtEjPp1cAIgWv1eVBXNuDEPCUE%2FT%2Fq2RL08%2Fs%2FSqJSJXxG4Paaf5Vkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHnL5e%2BrnxgfrUIvgSrcAzdP0zTQbYwcbM7cui5NAIgZ1Wa1Vq7KDAKrtBowHNRV3G0pp%2F%2FVyhkSOzxQGt9Cb34mvlrOXa%2BlMrmif0KD%2BXpijk%2FQ4T9lIOoXkkR6OnkjRt7dcjSNeVvrbA6cKcRwB3d7R8wfuZ2vaDbF4AYHfCi0CzGUGb13kSrywpIQYIthcyVa8X%2FnJqyw8GJUaZTicjFZNcPyhLoCMkzuQIb9l4NWmjsJZyl0Qr8N30AztGP9NYKy13th0ArQAtE8p91mMWD1o0uIcgdBkplI%2FQ1Bw4G5Ayx5C%2BmKzvl1mIGim83cuvBljw0HEE88qohmPNhV8%2F8jJec6Vlqvl%2BzgqUmpLVRhlMj9ru92hkWVveDi%2FOL6XJYoe0%2FKjeL3YurcCsuSACC6IHI0YiIRzcqwp%2F%2BYyFml1MG96Yz5teSxjwrw%2F9IO3zzoz3CYYEPsWH2bEhkZBw20gGLfkxpzdT99gtUwUaiKwvdMKtOZknS0T5%2FEF6%2FrtbAMtoNkMJV72nnGAAAPZ44sNhz4oDSo%2FA0ItMQ6Fk0oJUZJVkb3uM0oltra25MHDrnS0mw574e9oHxmDOdLP9%2Bx1nBVJFb%2BL5E%2F%2FAWlzBaMyuGpyQ5Byae65DJh%2B9p9NBSCuCkTqPGaflL4MKTWvsAGOqUBDn1P%2FrMNFws5dS27OPTNyuyMWcM%2FaDAoB62vmQUu9UZHEnuGR94XAcYJliJ9HHHM2szw8iAIobKuCqNRrXu7QlcbCc00FvfS%2BogkUN9T7AXPqK7PktieMYNNRno8dQn9WPHr6rnmZInWb1OePF5bzZlaO6XhJ%2BnM%2BB8cWTHIOnt2wo8kAgUAxHgdWt2FN0c%2BSNKw8wfPiOoTallTR8Tp72Ahtyfx&X-Amz-Signature=9d3a44371bcae45700d493f9027c23b3d6bf0cf36f44751bee136d9f69ef2f2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
