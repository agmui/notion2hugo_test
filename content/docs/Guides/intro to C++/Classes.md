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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VRFALXM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIG%2BrmvVtkERCiwcE%2B0RDw2tZSdECbnIAaB9XvJCIH%2BzhAiB6Nwo3VeZAljIESLIog5mfYZp9kUDdliJOwH1sxmZ36yr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMJ3ZPR0TwkV%2BTmx2NKtwDkaxDLdLRHr9LQlgOyRKnxRP%2FCa68LSBJVJwCUbxKpbHk9ld5eVEC%2BcXN6lZc8x0NKFQt2Of0GN0tPBLKeXPHIo%2BOx54%2Bb12mSM3bVaWlTQauh5wW4UL9FuZyihoI%2Bsp2DBQFCglpo2TvCU1XGEbRWqCciwDE3Ph6ofDf0gWMNnsUvz%2FKRxpoe4Ap4yu5ZovDD%2Fmv3JLL9dWuyFMdTMGWdNsOYZVWZAXh6j91lz9jIxA5KmRs1Dpr6E%2B1WwxOLObe5cGct7FVeR%2F7ESSH1qI4b2s0a%2F4a4jcMv7JC%2FVOi84%2Fl1CyubUTFPaVuS5zhdrMCyM10cvBvLwqgkQ354pe5w5Rzx6NCZ%2B3pV7fBphQpZ1Y33jCssyTFlMmbZJnQpmYNc1S6L61M6BHIA%2BiW5%2BQU%2BkbbwcrbwfHFm%2FK2Q1gQG4ZM2QktelELmOGgUKG6F3z2lQq7Tiz8Scdikh0NmD5cPRoSg8joDLccIPIB1my5Q%2FVbG0JzDBscR8NmFmn7BJ%2BoRpwemcL2W4BWw6Ip82xxFDAj74As%2Bz8Y7dEjvmx3vTgGC281xproC8OHnDglj%2FP1QFENTpZ6p3qYTd5xHIl%2FNnKUxDaxMozG2HjOa%2BK4ojSTDjGMODzZi4%2BN83Yw9fmSxAY6pgGyyWrbhCQz9crS77WhAaWS%2FQ7yJRA8UtR%2Bx5Fy4fa%2BDBiCTWRbihQonsQjTtI8LwZdtc93S0UK0Q1aluVkhvHU8VwQ897RGaVsqBAD61W3VcFe5oZLNmeXcKRXILaC%2B1hcGb4GHG%2BK7z7c1DoCTJx6nxPimaXp2EiSWeCOw%2FPM04NkFR4wZjmgM8YQm9uyVqBCE06V%2BzWL42Qe8LwqxU3x07JsYKnD&X-Amz-Signature=dedb0163b947b275e8949dafb1519733ef53e8d7cc3a28e08efb266e152bc96c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
