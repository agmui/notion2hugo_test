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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2RLHDNT%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCzPgsl8mqaU%2BOuTk9wENoNqTA0ZafUC1ucIXUb%2Fbvt8AIhAPQ1dTbJAshbU4Zq3GqcqebH3MWlyE4wai3sObVgrlHMKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2F4YU7q%2BCyI1HDgKwq3APuX3nihCdJ%2BKBdX5tKh0muiODq%2B2vGhHvR0YupsEcIqX88HP6x3wHM4n8qdYkI3d7wuWXGTf1jxtKfhe0Qm5%2FRqeUPZQWKDl1pHsbH%2BmIEnVYCyMtZLN5mwug0SlaF0M09Fyc1xFccgpbjAKbZy3VWTaCxamDaQiv9jekmq7w8DPbsW2J44sdctvXqzSNG%2FX1cW63ml64qCoX1wiieJ0qrPTjPN68I8JCra%2BlrUUX5Hm2AMhJi8C68VdHA%2Buc03IXREPHz%2B%2BczkMIbQuPMFoIhby36aSQoUgrCFwehFDEmiUohbASraAh%2F6n9G3nwIyjZNwGvCsq1DvxmLf2q06ND0YdNy%2BtBgSP%2BduAoBCzibUyxOIGKIynlD97UVVg8YEtFD4gEBiCqrKrZHh0ngMA%2BxFcxDEvGUhCkTiet4ETXgwEhWeu%2B%2FBj1UrUJoT%2BLmTGOhevO0bqqGHjxHDZPII37f%2FsrAVTVJD8vkp7sWEPWxZjBObxGrWNbfCfhUYxIOY0J1gLsNI3oNp6NqqJJ9ibhHPPzeen1RYzhBy%2FwfqSzhwlwSaJk%2FYftWNhXm3b5ILApZa7LlhBm0jqou1m57VcWuRJqY0mbc7eZoreEvoJ1%2BH2QM5PepHvVvrEuYJDD5odG9BjqkAaw8X9mXs7ZXG5bFVhwUIgteChOv9x8Dmu8Qi%2FNpDPoYuDJydFUsngFWKev%2Br1G5G%2FsQ5JYNCWFURvTkcFJelXrmkCk6sysb7Bwksxg4ZVN%2Bf3jvdXqoiMe3nXPZD6bP%2Fj0uOuOs%2BNQk9xIJavbtpmqmovYYPWAkd%2BbngTaAnTfqe6yxCqCgt5BmlPxB47XdQYTJmTUt7rrJHn%2BhYOhHXu%2BkhDGv&X-Amz-Signature=4e0faa9f41d077e9058125f14763a9ebc6be953142d4bd61fee052ac15715289&X-Amz-SignedHeaders=host&x-id=GetObject)

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
