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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIFII6JB%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBa9wi%2FjzoCmMTpcljPdpU97vSemX0vP7EYx%2BERKo6I3AiEAuw5Fv0CN%2BwlUcVIa6XefKr8gQDha4Pza3MKJpj9N2Ecq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDCxfYBO5F5RME3zWNSrcA3e%2Fa0ad3x5KlTdcS%2FVo8%2FkXxxf260KHfQHMmoC61y89lJeQR6CoBgn3ukhipbgVK04p240o52T8AdARQnxQrD1%2FRuX4wjuNBBZIJ1rGVEe1WRpgtgfEJU5efoxTEoOsJVgqlAoo7S3ySnDqKwfmF05s%2BXSi%2B7o%2FhLNoawm3HTyMz8KmFNDugYRpLbYz0F0WVcBCtoighOYH7DGYjwERmBAsfI4sJnAmtUM9TGNzVUvIwZ9ocMO8QpQKd%2FRHNeZn6e2q455K9Fudo6AiKTr64QgzO8QwCCeJ7%2FiH5QbAN1wUHaMJXBFD%2F%2F%2FubLEdOrDVCJ0K12KAi2PhNz%2B%2BHJqBzLUF7odtbVIOC6%2FSb1lbHFgxC93HE%2BJW5dDSVx33XVOYabUhyY7Nt1x%2BJ1AstjqDMSzzLyOd8%2FUqQXopJRCtnCIhmYv9chqUubfi484wNqSh8KpGBidmrqZuWjR7iVPJZt%2FlONi3S0I%2BW9bMqi008Rx7c%2BG3bYLVfMfB20LzC1Xxsp5U1Is8JcgW761vaOszgpPa9u2CMG%2FTBfj1L2xQEXF28uVt5nGVc5J6P3EyvwW%2BdY07Ugo1Y0ARdTPZCs4bz7AX4qT98KCwS1mTDxcU1Oytafp2DsdFEjumaN7XMKbxucAGOqUBGy8BLAfr7GGXxZD%2BOe%2FBmfbw9Cuvwxu4tROTnSwlWKMkBro4sGpb0LEzkWb8z2wzgl3SA9s6jvLed8uNYl%2FTHSPhfSZsWY%2FZQJd5k%2Be3sNBx92c14RPPjsVsZlpWT8DJv9qrCIgavBJBhmog9ntORFOVegevBKRcHrihfR5pSI4yan1XoPG6agdaHnX2NcdWVTiCPkJuX7U1DV87bnQyHQ0QmDDY&X-Amz-Signature=7bf625801f506425fa3881bf08c0c9ab1d565ea9ce5b261a6e734bc2f4b2fa27&X-Amz-SignedHeaders=host&x-id=GetObject)

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
