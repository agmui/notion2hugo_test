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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2MH2AL4%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUDU07sU80OUdsvBgxvM77fTMr1BANSRgdFug5qPAyvAiEA1%2F6ZECcdCO6ELTb6WGlkAdHnsZeXzoqjbANKdt0Aao8q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKbeHSjo2hxUCxe42SrcA6D33s2in%2Bw0wPtItp%2B%2F6Y%2F0p40sIyhWtcbnVhBIUxFyNe20aQYHr2kcGzc0iRJoHVXNV0B%2Betbl%2BXIP0alEkN0mMxUDYYfmwtEZb1f%2FpK5M6tZHQ7tEL8JniRuPLb6G4j4aNhme2RW%2FllvYHSxzhhDC4PHG45%2BGL6XUZNYqYBCqfNei26m7RjNzEMn4gs5Us4mympKo8PwieZDfFxFUB%2FkOaakL9bA3Hl0BRl8vuM3xdOM3G3%2Fplc2UGtSDVAbuaCODS5xkM0tPPZyJ74ouGM7n5olSx40S7WeHEo9h1XbYTikpjzOeKAA6v3sA%2B1ubng9Ivpm3D2YGR%2FfcikaXFHEIZ%2BU%2BS%2F0apO8WbSzVZBoS2RkrlPjxyFtPBWIIHtA1zUY%2FSfgawLHtaT1361oJphmd7ZRvogfZwKHuTU%2BMyBRfEXgABXEbb3UwWKaNHILWJMZIcgyib6D6W4dRPHC9UTW3USZaMzPeQ6zZe6AMWYaGmnXTax8SUVkoT94zI9pILOHCQaBuVv2VHwg5LQHGIde%2FmMmPP%2B%2BxX8%2BJui9%2BGu%2FXrCWpXMyXLnTbQ%2Ba3O18x88LjPuKRqiZSPwC5mGsuO8vuoo9BUFaCyUjWkVa0%2BJNWiepNGucG1GFSBP5wMMLIgsAGOqUBfHFyrGrdi4Ene1gwp37EYBHHphaK%2BTTfTuqHzsmp%2FWFkIDuQhXwbe9BYm9dk8NfUMUssga7HOCNoV78xmqzTvD6wJq41m8knGN5K9uqBYPBrivjDxThG4hqcAwIk6eApAoLmVhM4tDxfGXQ3%2FecTBzxQqLo2Gw4ZZrq46cErXk%2BiqK4B0TF3hj1%2F4CKfH%2B5BSXwm%2F2BiuvCf9p%2Br61JRS0ktqLHJ&X-Amz-Signature=c161454d3241a1854c9cba6384a11b2634d8c634ea822d72c5e99f816b859e40&X-Amz-SignedHeaders=host&x-id=GetObject)

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
