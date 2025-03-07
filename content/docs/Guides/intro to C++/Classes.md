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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FSL3WZZ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD%2BwwHXzvEW%2BVQnUTemIqhXvhXI0LpX1jbTSIji3oWyeQIhAMDqvcRNXNTyB1ZLDKXrzDH%2F6N11r7DJicZvWEHEd90kKv8DCEoQABoMNjM3NDIzMTgzODA1IgzaEoBujBUGNvTE6EAq3AN2llctemI%2Fy9VEZhz661n7005BdrrEL3S9pXQ2JnxhlwlT9k2gL3DWm3jjd2IkZqd7b7C6%2BJOpTGUz6Q5eKlac0tgIQy9vKi%2FvGQbR%2F2T75LLTBb38HXwf%2FlO3fGAiPUbBT7arTRNchJdkjAyATOdZP9W75tPiqZSVyRQ%2FFDDwyggCbg%2F3tVXpCUQMt8Txhfl3Hacf4%2FkYYlmKm%2FGu87QXNvFDNKxEj9zvEtA9fn2Hh4srKwTTXU0HF7rlQ1fZEfW%2Bfy5%2BA23ec%2BDFpL%2B8uL%2BnTgmWDx3OGpt4bdCyEIrh4jC3zicpDXsZr9fScaAdjMaSmffqEWNWbX9MK0zzErWx1FOOIqZJs0G2162%2BL4InXY4476prC%2FHZvGePNj31MoRqlny7IL%2Bb30fAHiwb76kPDaiAtG4QWmhThdAby38Ptbsch8ZoESByPX%2Bjj9krtIyfR0%2BsRTQpkS6UXySlcYYlqBLaONZCmYGcsU1RuQ07F%2B%2FOOkNspzPL%2BS8DMkG0HG2YfvwmLWGdZabTq10xQtQCi7v3OoYEUZBMsR116b1ueyD9urPEZXnEOZyX1oqQml5N3uwovotm4jfb0GCQJjSJDGV2%2BZtXjyt%2FE6jBmIinhkUwioeTZLk5D5I23DDlwKy%2BBjqkAS2YvPKQp9yDAE%2BeQaUQnJk0rLs9OvsmYwkBS%2FSKSPNDiiyUDwRKyZ7X6ek2MFuHPOHR5CwuBWB5QNh7gCLPSaNsXz6VMGwCzae07lb0VCOWsw7QGoKOflgKpfUr0dXjuiuIt4Kyr1VQdp83%2B%2Fy5gTxNsIAzIEgkAj%2FfB5VMQJnNrQMFchPNmnYIN7tLHstDoirDnPcx0ckwqSiV%2Fm9qSBt5leL9&X-Amz-Signature=255e3360cd36dbeb282553e09c5b2a9bdc325ac232e3f2e208ee6d463cdc93ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
