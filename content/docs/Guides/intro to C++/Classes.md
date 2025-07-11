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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRKTK7S%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqD%2BumKhw9CeHseJ92dmqR4stV%2Fk9O9XEwbPmg3%2F%2F9pAiEA7pCiAEloMEuFI%2B7NYEz%2BPlTjzdL65JBKmVYr2DM971YqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgW%2BiidH0hZk20nRircA0VvWGice10Wg656yoVYZihE7v%2B0ASQotGhDhNcU%2FArONW3snfa%2FRmvkFojhDRkHwZwycQJm6c9viAJb%2BorqzxRmErgzIBMyD%2Fad7%2Fwgr%2F4ZzfmilEqC5kcC3rLX5QcEc7WRA5USCrwEamchHjD8oGjaNJ9MzLlAT0Lzdh8%2BDb0kRl55cPczyFphT5i%2Fbl9va7sEdoU16WET2RFYHZ%2Fyo3HggZ3aD0TKbIA%2Bkp8bDYF0JCcZ6XD5QNUX%2BuFqrIYtf20Awou5TSZFUfC%2FjOBCQY3LojkmPsB9aGhsVOvq46eGff6yyHmTeKtbi6PkagwzZqjHuK%2FU5ii%2FffymydC87hYxInWGLHDOKoriBBfMI%2BYkm4VCJkxjIALB0dBxY0Ws1Fc5CwjZEJ%2FqhjQvRnvZNvgivy5IhleXBkL9wgULJaDxY%2FHl0NJbL%2FM9eaC3%2FOzrJo48CM3IJxqGxqDVOAXXjyggimwvZvOTcbZSVXfm0Tnmcp4D%2FfRk0MNHAYceGNEfRJ8bhTOIre49p%2B7PpEj8x9%2BXZIgKqkYLCgyVJJ8GoJhPTmudX8nJFWwVTj%2F70KsX4fyiqbrJlODjG%2BlRwGwLD%2F4KhaW5Xpz68YFEPs%2FBagpTPp9swT4pV%2Fq5UTq5MLH7wcMGOqUBFDNkCiASYIsFnoZwg1mXemZTcwbizwnB5HJriBCdVUGId0Hy3zT6Ju4Vec%2Bqc3Edlo7byoo4rEvm4VrxDCIQooTwPhc%2BQ8nNiSfEtDxzW8SCqtQwZx76MY5HKS9pz%2BI%2BU0Q3QpWkxKstw%2B5jDuE2%2BPlMLwC2oTGR84gLWlPspTN5mdLUd1dxsI1vbWKZfF4QcsbCSfIMSlUC4FksgTv3gX1D%2Ft28&X-Amz-Signature=fc9fa168059c1e518ccde2a18b72d7cdfec620ca3d04308eec8bd8ffd4a60ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
