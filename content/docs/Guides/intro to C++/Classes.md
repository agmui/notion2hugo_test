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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IFXIH6H%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQD2egEa7qMasESfeGI3EP2fJaa1FhpJL%2BkbZOzrk8hgWAIgZ9jw%2B6D1EAPzCDrvobDQbXW3KeU%2BWwHNrD897VaQd%2FcqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqRuZkAQ8FF%2BnNvcircA6kqUOXBJkkC9pFkdv%2FFqiWZf0Ho8w7IqwQTqswBbd1t6H%2ByWFp%2F%2FW8mjEExJJB%2B829k0hc1%2F9TRu0tSgTjHtnOFxP8P%2BVJYBGLyMuhU0q4VfmIIoI%2BnNjZVMtAERav%2BuqYUj12UEQ1RN0D4r46djxag%2FCecxjeSAyc0fOXfu3v0LLy0tJ5EVGczBvPjJyrXyyz3VFVRFgHPwikda3pHQawVBdipjt2%2Fe3fkusm%2BjR3Usqg6Qy%2BGbh3%2FM2SrJKBy4Mo%2FoOiUgzBOnzX7U%2BDFta1l7S98fZqk%2BuJy82Fy3D%2BHGxHnGgbAfquPJPXxtYQ9mvc5pmBPC8vCDl8YSrnlvehEhnCk1QZW0G4%2FGd3KteHsSAx43sDq%2FBVLgLpTlieirZUn5y9E1KOyU%2BBcCxWkcRrfsMfxBqH0CpBg8gnVCv1Pea%2BRI3Bn%2FwkFXBflj%2BpSuuZx03fGEa1%2BzKxCGGM3InX1166NREuG79uEEaGTt4nRCfSyoLLXC0%2FEbstTYUEFA9EQSUFsMYmWwmyq3pcMhh8pFVtnUZMrHfzKi2DHGBvVAsUU576xx6he%2FL8M3HWEEQ4fgpwSVji4I3h%2F%2BoorxotAlyQyax2a3xJMFY3jgaYMi%2FRnLCm04KbV3Y5zMKrxm8AGOqUBRH8DSUtwl82vlHaMdUTJiYflfyjCuPqA9YtgjeAkmg2uhVlg15sJJmXa%2BmAOKR983HgwgnseU04zdgRXT%2BkaXS7ppF0Y%2BYcobmwhVS4gp2EnLYQEn0WJbbDHvI%2F0A44v1ffdB5IUb0wayRdchSYiwlK64hHXq87qq782t0jzvBFTOS9ZFZRYXnGZxr0yXKLc9fgqZwpXfIN2fJX%2BWd3lw5c08xlK&X-Amz-Signature=3145deb9c31d7427535845684db68ec0fd79b0b335c7cdbca212176b76ea5657&X-Amz-SignedHeaders=host&x-id=GetObject)

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
