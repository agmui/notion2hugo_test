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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6PNSWWZ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIF6PVxAaflpheBRwJQP2Kp5Y7EAUFjJMiwzLfodxuyXTAiAQQ3TLp8kMxeqC8yMZ35sd8l9op68ipqxl0MzhaHyFXSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy8ugWqAIZURaojz1KtwDKxtzH2z3IBxhzPX%2BZsrvuFMsA8Bn26FZv2Yo%2Fn2MJtiPfTrfsPs5hDeTvCZfHgRQJk5R87QIuq7%2B2u3GXXEYsYpyURrcKeDYkEdv5slNbfBzeb32IonbbrzKtfx0igVtBw6l2JHpMjbHz4v5BW2yZBgD29cSYecMItNYRXqyCIhOqFX5FjPTePpO%2BT66WwHMhgl3nQIP%2BZtQThe7ZiTAtgPu9P4ZX7ad59oVjsP1v91EGNDbisYJ2ashP6kcnebuP%2B%2F5lKQVVDvKdg5oc7%2BX%2BasD4LBg8vaUtgiFtW3ARO%2F3n74P7iP96xw2a8BiIMOarVV3IRzfxXys3vF%2BzEJPN0pNzaxkTTUHB6KH91XBeaQRjMdI6j5TzDQPHYPaT3CEIImm167EUmTqceSBCykEkvt9bduGLmZh62lRNdxY5GLDeRgFx6HmNV6%2BckXRkH6sNvafxd%2BebeKDN0isD7fwql00EvU9LzvrBnWNx3nGBbfMvrT2N4Xa4eLW6Fq8qQ4McPNNQ2vA21qNW%2B%2FuYBdU5HDMCn2Dx92LmsrE4E7sQkNUd%2Bio8H3kgx1s5ygyLzs6AU9X35QLoByxmRHg%2B%2BHhq1fMNY4fZR6GTxbi0xNN9Qb%2FFaSMsmg6YfDCvCAw6sfQvQY6pgGMnUeHfBu8X5sVoK5yW1jBhT2TC%2FzQ6atq9fTodL5571WoIT%2FwtJNQ0SC%2BVwX4UZluBIwvojgLWbs4AFOZ8%2FO3LQtyDwRf%2B%2FDZ1zui2rLbe4Jy1b9yjdm64P9vWPW6Lj76onJ8CuUId63I7%2B1Dk1p0KcVLKFcKWKjG6u92kOg3o%2BizFTdhCiuwSwElMhdViwnRhSOML3kMMAQNu2f3zLTgreq3%2Fpdf&X-Amz-Signature=4c55d09fdf5de4a1ff8c81a34c98fcd9474039e3f5fd4dcb98ec7612439d9e15&X-Amz-SignedHeaders=host&x-id=GetObject)

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
