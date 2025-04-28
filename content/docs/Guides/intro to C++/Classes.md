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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKHBA7HO%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKaK6KdnM3aGBp5ufDGq78Gch4tauC%2FRq7IQklMIf3fQIgQ48svBvLj9ZALFmH7%2BUpB29lzLvH6DYMDnHtG%2FMMqawq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDCfG7D8CcktpeP6zACrcA76Tm2yutdBtfBmGFs5ybJIWe%2B5ilrcOH2S2GFSHFtROVO%2BKzKOM%2BJpx7HHQQNEWfObgsoP8whx5KAlKeQjumCWE%2BVbvTZ%2BG503Rdz7nC2qjzujxMfqsTrvrFWWpzhY6V1ng%2BGnKNItr%2Ba2PwU4S4aSTyvlGOehVQtgbHHZrReXQZKBBAsl6Yp4KZdE7iF7dSq37c9wo2BJxt3lrcsCYOF1AhFdSALAixA6Bx37PbNVYQxUN5Qrxc%2Bf5d2PTYXsEKKMIDQO75nMZJGd26EQT9MG%2FvgDZev9o7%2FhOuxrdjUo16AfwO00L5abqEVQc7cRBvn9KDXdUXh4GHdNwHXAOCmp%2FM2cuX45jNCNYfu25yT0r9YGrYeVnjuCwZ8nnCHsa%2BjB37fSy8oL0wCnY5kzBZdhdLCVn5ecNPO2jEACcgc1bN5Z728REFf3RQMLNaJLAyJaXuLd6B5A4VwMdxgzqd7NvrDd8LY5BTUb6FxrqLjFPsuKSeXYBkBzHUE%2FbW17nYXoniLwmwkMdQ9N0yc8cTgEwdtWQNTDx3PWCuB%2FDVGnB17glQPVTknk1d%2FVgkuu1%2BF8bczfKc%2FygWbQrwNYn%2FgdILaqJ3UmljG7mjyvPiSvP%2FgZSIbN%2FGpYkiCa%2BML3IvcAGOqUBWVof0UeBzdU9%2FgHkqlm4EujHnNnsrkBg7Xay4Dj9Bj1M%2FViuBHTH%2B3HR3%2F1NuCpu9vyTRTCUZVkUjMd2VTHNx2g5CCiOo4uhsLNXmPsT%2BzBTEvoTrUWuhPE9HaZlsbQI39vMaNXJ9Ig0oey185oceiStmbfNQ55BefRYHY4IgvBO8PSXo3O1i7nt628XPB0wJrRwW237nCnJEtcl0KA0JTuhmXWM&X-Amz-Signature=0de6bb9cbd44c1f602efcdc3ac0376f19c90c584d8222953891e6fd5d48c9c68&X-Amz-SignedHeaders=host&x-id=GetObject)

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
