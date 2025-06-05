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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A4OLRF5%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICcBKtU7l3%2B7SPpP8bBXMIAIwpoZSSR00gVklo4VAlFYAiB9qKkZtCClGHAKfp2RLnou9rT36tpxfLE02cD%2Bd5a%2Fhir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMN0Ja8aBaPWNq7L9aKtwDQAY0GlRiHRACDGse5QgaYXmBPRZCIzq9bbjjxfvtV%2FETu%2FgFbWGoxf1oe9tCvE1WdL5GDzl5ca22JnocWWYOd8gqrfPsYzouM%2BiwFPGvJ0mkFhfT7toRQlt0s%2BLk4ytD3B4RPvFBGB7Lq3PtXnYoVNaDn%2FbKphiusLECTDbyob2HwiNPCABIh3GRQmsrU2qBja4OX54tvZhuv54ggclISoX2I2JKGNKitA6RKDGBfrvFMP3j55Q4inVVTu2GqBH8DUkhNukJ0T2pcJRN7GPBFrFKonFxzD0BmpYW6mvN9edeAuBknqZK6d%2BJ7tB0zIr1Ih056EsymjE%2Ffg%2Bq9RhR0cUpeQHRj1zb9BawENU7bgBIF7TRDUjD6QfzZEp%2BK%2F6unCrpRB3MnVZCpuPi%2FDG5ev9vnchy5OTvN0W7S1Iqc9wqWqfPgULaLmsUDToS7ia%2BMQj%2FlcnwtghhB9%2F5l%2FCwUDAh7fFu%2BLK7sArcsI1LFpGXF5jaTYdS1uExEjaCEyTo26OzkCZuz3fgSGqVOOzZp9AttPTxjYNfOBFc076iHhH4feLQiHyM0QoGVGE%2FIApAOxisqzdJlolgcPC8srqUmT3894lXWpgqCrcwFPbf1Dcj5LCMl1lthC%2FzBEQw48SGwgY6pgGu%2Bm6CHCSatyKrmAgXURyU883NGLSqOgKUI8rFPIGV8xQtCCEEnm4lAHxn9FJbPGC3hIUJrDv%2FtHtIBFZC5wGdKZuwvq1RaTFo4fUTMPMAinV8EzA3u0J7Evw41xeSNyeYV47nXn6kpg12yxK1VsXiOWqNw3CFalkNgexVAWN3HbgHysYg7zQbedLyFnlsfNXkO8t3yeRb%2BNvkEjz%2FDsqcaxjpDXZu&X-Amz-Signature=8efdc9b9b823b7b7322d8fc7ac7a71e32812b34c0953a2fb63a0b268440931a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
