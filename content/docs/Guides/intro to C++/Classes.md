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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBSNSIS4%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDqieQsum22081Br1GUJBvnUwEhgdewgViEdxnNfs5asAIhAL3gsoK9neHYn2I3ufXW3KZAkkqTdKqfzJN2pinD0WXwKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFZQ0a1tNezLFMkfwq3AOgvpR9NGsV0YAIjc3LG9%2Bmkb%2FRywI68uDsNIrWmsafeqHJMqPbVXxYAg5R4xQxurC3k7eMDRSHi1DSvFZL3mJr2g2ATutbhTcoJ7x%2BJK60lLE1iQdlxmyp%2BR8%2FC2qN0ZPRyjs0lmEBc%2FpOk8vkbd0K1qrb6FT92QB8ahJKSVNrtJq13t8fs0KKnqYnnYYls2ymIAnIzvjoQukDtNMZ7dmDw%2BYTg2VtPJ5QaLoHLIQyV%2BwHR0Vkm9cvj89i84u1mk%2Bsdf%2FtNjhHBiNHqbJaC9Fc%2Be6INiU%2BNUYbzhvLpTM7nvPajEGZt45s8gOEaVarVUJze8Fpy4IJRH%2FEcnaJZlLDbJUdScDkr0vdwMUePqGQ7Pb%2Fgaqye5SwkegVPPODjQ8M6B4Dkz65iJarm65gK%2BJ0bTjzFtgpWzPuzKivG2LHkVdUqdmDARF2Mp6ewrZNVprTNVYqIA21zJugSTub6agznmBAXWojcCTMrq3H4AJCiXmo7WozFrtTN1U4ulcMGfmQtg5w%2BxM6C1j5%2BbkHP%2Fn66GyG%2BeitXXjOeqtjtAz%2Bg1aS7lOK%2Bj7zkxyt1yFZEYdWxrq5p%2BW66kBSfWH3dNMDoTskI8buT6DXcOX8P6jd%2Frl%2Bah0k8hhiIcsOwzD%2B4tW9BjqkAQSnReCrKYs5DIjiEIC0F%2BV2rVakmXyfzb%2BcyHCi67qa4tvg0yuU85oDivvqlEgWjR0Hpgk9siSFps1TAuOOODHw6BCSHh7aWhHXbmk%2Br%2FmrLkN8lEhZQ9qFAXJdJTsoZdCQ%2FpKAepJfB9zHAaENXCVIg33nz0XSB%2BshMKwei8C3q3G4LEssdUDR4HIJKiA2d5RBDISFWOoql1LarCY3BIiKQHTa&X-Amz-Signature=99fdc751cdf839de16c6a15fc20898d05de12af9973b44af51d6aa86d5fdbee4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
