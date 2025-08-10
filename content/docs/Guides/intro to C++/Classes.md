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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNQLWNVJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgc2kaIWFPRIwzPdd018hC%2F9TkXEV3pZZYYUQ1SBdxNAIgLU9Y5sp04PQGv4q%2BQtSnYQWJbKLZc1DsafvSLIe7GTYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQQNvdDx%2Fup29a9ECrcA337uK2HaUdDS%2BhU7gpoydr8Cs3gIbI8mqDGlVnP%2Bum1FHeYrSu06bA15JaP4tGV%2BINb66cAMW0Lh298rYcWYCTOlyh16i11loxTn5jkW%2FBWdHFgX32O88KF2KZZn9wA8723zX4AuDt%2Bp3he%2BVNFVpPcayNvlJx1z71JGb%2F0SNHydGQTo%2BdgZhwLCP%2FL5XR%2FbuWe%2BZIJRe8xGkaxvk8vYsyB8KOyXwISLRkdXr0D2S0XUdee3TKHjNSsfhpj%2BwIXJ0h7T2IzqlnpVRdtYVDJPqXCvziPpP3yxupbMAvc5lPrZ668NzrKeasd28VBdiQycT2l2EVUFmN%2FXVbo4q%2FE2r7eH0PgP9HIB4TmySFrfTohEJCJRwY85NfNWH5zXPhKvKlE%2Fvk7x4VNvwSDlTL0YdglEL0FRs1szgCGYT%2BPZt3320THGYLbCwq99K28r3ajTfd8Kg4Fb7xySdB7%2FRlOgLSl5kyoPc9papHCtjtUD%2FgXtfxncwnK453kYV886LmHTbK0i86EJaTcQFbUZs6EaQ6f6kmTH%2BCzj3ryNh16nc5KEZ%2FiLuq%2BKGsfoW7D0UhCPRsZutDncWKmYGWM2SxQaSAGNBV5ZMCMSvYJx9GoyLoHk9oFCpohCdxCLMwOMJWV48QGOqUBkqbsWevpa2O8dHqv2e4%2B2srgHPYzlDxwCp0tno%2B8NvTULLmDgO54Oth%2BHNGYg9TViolsb3HOsSt88WrrIpfrDoAU%2BhKm31RZJryS6FrdRinnhwqu8wZbXd%2FGnSJs8%2FOjH7F1sjroua16VzqgeUjpz%2BGST3EgW4M9KjI85ZgM8vmNIIvgN85iGIO9aTFQjFDejsTVx6MsxlCYKgZ5j0BlAfhsx%2F0J&X-Amz-Signature=26f65512ecdb08bd52945761d6540f532f998f4446f32d23fad3e87c615aa2bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
