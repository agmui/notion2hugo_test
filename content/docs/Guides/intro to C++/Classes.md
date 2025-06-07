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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDHMXN7%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3%2FDJ%2BEj3j8c%2Fxq%2BFX9JybhvvR%2B4UztVYBxwC0Z1siLgIgBXCRzBcAiIauCy40vgMUMOSIoZJdWWS61I%2BTsNvlAywq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOhOO2uaCDsKp1yPdircA5tdEdIopcnDJOrhd7VHQIKxDeV%2BevvvhxPmYTwO5nTOsz%2FAYphHId%2FGl%2BaUVCjJSpJBKp7TwSmVJ3OUeCLPONka8sow7gKrtAxXDxpWD7Kpgzefu4zTUU3x6Q31GoUc9DPi7Rt3RvZdIiuFGRcERLDgBRCs6PzOss0nUvagl01jI098LHCTZqQiHw33x3UqEFAKMHr1YqrMdMWlpvPytufC0KzupLjBpDdDzVTpxPo%2F5kXCQjz5R0H0FuBN85fo5ufn783dQPSEkPA7p2LdQdq1rWUTcbtZBj8Rl%2FkAp%2FbsRWKLjUHalNTSbIV5lWGvUIzHXfrkmuVhSnO5I1%2Bwox1GIBnPRwVj50z4jKtilJTUSc4p%2FrlT%2BLRYqp1jkl4WarOrjOljVjXTO7RKEvtixDA7DU72RaJ%2Bbi2C3yuMLdFsSoBhlVOq3OikChe9mzxU3ZuNU%2BgkD26YWsEqIdIpUprd7y%2FnstHpAbJuknKoU1qrmpyxwr5txVebiwyoUt6O8i8PkgvWNfbttzNylKIEygZ%2BREWU%2BgV%2BSHYlYCSdepwC76C4IIf%2B4LEzd%2FisUzFl1ydPE3Dat8RkLYBTHFyXSZ6006XdLZ7OR9MBCSQ0HwsvfEpPAgvbLy3z%2B0ZrMNLEkMIGOqUBczPVQbaZz9gwhUYDOuUQPXJbA2b1OBZl2TcsEJbBKbHLgaxxcBngOUf%2BORFTHZtVRf1FpnkfJAQnr1dDPEfxmFkgY5JItbDidWbnh0k9SuMIP3GFkeIBE%2FV84U%2F1AK7JrJtnBWUZhKvPD%2F0YqHo7OrLQReXKrBP%2FCeOJXkLdilj3VkbLaxI%2BOWzi9kSshDBk8SW09EEN3zIbR%2FO%2F5hZiiUmnVxKP&X-Amz-Signature=239c0327a468922eed85beabb3cc77a31af48aa1b218732d99df68facfb137c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
