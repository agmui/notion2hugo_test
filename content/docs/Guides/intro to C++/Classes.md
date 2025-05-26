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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYJGJWNX%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt9zwRSUisrGgdAdadkv2rcO6QFpJvKS4lcyyPyxEUxQIgDzRgwFwZBJPx255vdGxCyl1m%2BvEt4RdWNIC7%2BfSIiCcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPwkhflOhtvwUlyRpircA90NBYDScanpYh0NRBpqod4eTikl7aRHR8CqXL8vwZ4e42MC2Q%2FqQtjG%2FKpIaDjBmcenfqXmEDKwxncKVj5ty78%2BW1gYVa1BTpC85urid9iWtw%2FpIi1tYjqo3pZ7LVBRQy4p3g4wMXWNdGaOmV%2BqvF791BntY%2BoVnehrwJq8Nk7ztwCwt%2FfO88zmhUjywUneB9wgdIa1f5IXEHSc%2FH6dD9bFNvaCE8%2FYG2gAg3fYYfylS%2BY74kdRWRtHgGQpoeFuRMXXVJZ3PvqMcwsjp091w49pl7U4M54%2BgNMklSMPVt5K77acZ1AbS2LhPCJeSTLarNbLfVm956xPjOYrsvzA7vQP7kR6TJvEpsQTYohQKgRK1IjSNrSfVLIa%2FnoNUBiSEOsFmOF9Kjhdldc1wKiZ5PtDeYzHcJh1E2k4T7X59AMpx1tRTFLPpIY5umB1VH01TVSlO3hv9NaZsC1AqbfGBWYfhKmDd46dLJmwaWLLGh3XUWvfnTZP%2FuNU%2BQeOpZYj2sN%2B6BQ%2B%2FnTE%2F1m6HBzYoynj0704Jd25GHk4WQ9bIhEmMavc%2BY4uW11hvHG7sOaw1jqQDFaML5f9zM%2BktjpvZ7MHWI7HJQ%2Bp9S5MwfpK%2B1oDFgZ14WC%2FcuckSmDRMNSr08EGOqUBxF4QyhK3wpHe%2FFt9iKFKNz22fOWlLuLrwDJFPyBRpAWtVw2zeVCid8y8i%2B0sLMF4%2F%2FQUt%2FOz9mkaUXW3ivXD9lPOFKlxdOT4sBPjN%2F0bFmbbi1233tMYK%2B%2BeMG3hM7J%2BlCjUypsZ2PsR%2Fw0cgv0s7ZiU2YHSYsV%2BsgBD3xi95GaM2WU7JLFzEW%2FBSB2tyBEioIs03YmbMjV15GU%2FXQZ1vuVhwO9o&X-Amz-Signature=1013fe233221fab50df1342be0c54ee92ea81890fc957f77c53bd5c0f98d82dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
