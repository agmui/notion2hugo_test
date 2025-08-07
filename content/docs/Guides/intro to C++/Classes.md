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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C3AZKSL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIGaaCE6rVHvuq7Hm0o0wre18o9Bw%2BqGO%2B9XIPuGTIrvaAiBPZOsM41ySepPDrhXDcl4BZ1zDlLTyxmpTKMOmAYSPhSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmgPMUoLD9icWyLqoKtwDv8BbgRYrUa95ST2t3BO6k5b%2F%2BuoeqCApyBRhJOeGKN%2BFzPk3dPslrNYJsMD3t6G2ljNuYn7nzvw2lA8YUqYF%2FpkAiA1bJAaADj2OlLysf%2BbIENPxumoQv%2BykVObIbqxjlJob13ImDJZ3pi4lIamEOElkMx%2FenzLLdW0zs5MOPyaNQKolVcpK013UIYU1V%2BlF6xx8GAv55Lpz76XfyLgLy4g%2BSwCY5n79PEqkA3aJCZf%2FHYDa6%2BmIyg0uBO5TE43scfruXPXLtFeLADD%2BTQWOPtVajxRqUHf9odWz5fx5UfxEmlMmd%2BKqL0ediRSTm6AR%2B0ZIucnw1CwEGM%2BFyvVdnltT%2F1pjszOADKZortBwkcDJ%2BIre4wnxFO6LI3btvU0kXqCdogB0Pm2Z%2F5YM6vDtOl9n3EJJjzv8VDKKvj0qqQd6is90X%2FQHsY2GVaQ9dkiX8KlQqoJQ2dUq89YxKxngzrtVFbVwaQ9uXFW0zfQ9y%2FGCBZIxNpz1Jw6l85mAbn1KIpFgw%2F4ULjP6Z%2BhTHdkLb%2FS7yIy7I%2FWcshBGwL1WJTneBGhxXqa5%2FHvH11kGLjeG%2Fy8yRhI3kghrVGSks3ZEO4bBTsjZiYl4I9Bvb3W73ElaqLY4q1B2OEh7e%2BMw4uzQxAY6pgGnGKh%2BuowASTV%2FK5ZN97Y2lURDiFLKYCN812wDoW%2Bg3MPyS2bCJzCiwYrY6qL7kjLuB%2F%2B3t5mjwF0%2FflW79yQubbtDER0YSKziE7yoyc72pYcPOrKtLqueSicAabk2gswDuD0q0ujM5HOSnCvVSbV1yoQbNTJxJ9I4iyhxCmuaTfWOOqhrQfC86CuLWkCT8xLhlmTG55%2BTsRS8lY67zdI%2FsQUsI6Ug&X-Amz-Signature=24bcf00cf521638e74ce4e85d3fc97e047d57b086cb96374ee3f98c67070c5ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
