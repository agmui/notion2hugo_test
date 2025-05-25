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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWCWIZ5M%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCGtQ6gEFCkejsa%2B2edq9hNiMbeHs1LMn5k%2BRLFXAGCYgIhAOYgXqEHjw74V%2Bq9MFE4jYwTr%2BsisPTVnUp90aXo0on%2FKv8DCCYQABoMNjM3NDIzMTgzODA1IgzVhJ82dAfxkFjtLd4q3AM6twaEGNooFckqYVH8YZNkXY%2BpKQPoFSjCa7P4di1nRLF1tAYYcqsn0ix9Wy8z5p6Mlb9k3Kwaf%2F%2BrA2dm91vDLVm2u%2BS5XYN%2B0%2BtGL2OAxyU7pCLV5wBZo4ryvmHcfJKl7dctNkmrtfVBIztqA3BAn3wbGnIMY33tJ5RZc%2BzT854HYemxKPIpNjiNMgo48sJYsqqxzyOE5TauyBxXKT9PTgxt%2BDP%2Byhkn4tLSWGVhaHR0F1553ZzXw3k0AWcDa2GDxeRNr3k323BrcYBZ5PcGRCuR5zb%2Fo%2Brzp7rruzjE1w93u3FE%2B5YimDKzP%2Fvz%2B6m%2B321cj1DxVP5eKhhVvLo9PmXs5rQp3C%2FxEp8iS8PzzLcqqHK%2Flu2ixHVNBVA1pAuYULJAvEJI8F%2BX4FEaaIe3mdNzgrPBGeaUpzLtS9NT34X%2BG7eS3l0F%2BCZTDkyzleXlg1VVEsg0iKD3Or6zR1WCO5BG0PjY2DGqjmAu0MMu2A8kFRFErzBCPTCW2jfpVcS3Go0b37ZOM799hB3WVI6PetCQuOFKNm0FjPChN43SbB4rVvqLFA9sykK8NeEYgxeDnp2YPughiidANkjiscaz6HWDfx4V4bYg%2By5uhr7xeuZzCwzD9t547ABL9TC0ucrBBjqkAcpqOAlOxD2zntHj2b3n%2BAfgLdijvNPUkvRxG6Dt%2B8XoOPnKWsoWxkmtqWPazk2hGsqvjwWTfNg4uss%2FXK1fY4%2FIgHVxp%2FPupYN4kwc1U%2FbOohnUGLAyX49OlU2920TR2Ndg3%2Bdjy1F6GrANcYTXpHAsavbrWGXnhxjA5c1ALSqnLczoSitcJx8fTznni8AuwT3IPrkEt%2F4NVWmobiYjJGOgX1fE&X-Amz-Signature=272957f89fa2744c95c8b7c84aa6a7d58dcc8bf8143836c0c271d5a145ad1cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
