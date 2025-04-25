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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK64VRH4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0KWlG5G8q9HCf%2FegcxWj53xOzttqj308AAJ4HlX%2BibAiEA9G6ak2%2BiKxGW2zYJV2aw0Usf7dOtcttafb6%2F4IeNEXAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAGGMCsQ57hO6hwCRyrcA3BEkg3iFm94VarAiUqaaW389zb5bkdtdZ6rPODjbaGOnz2H8hLZb50fKxynyUlXix0M8thLA5aahzLRjLRpgJN2a%2FoxjoldKEmpJ6png7uG92DeObR42Ln7BPBgLGsXMwzHgoXmiOLBNBUPzNvTtP4Ah%2FfdZBnmskTTp%2B8SQ6e08kSqhOZq4IVd1RwYLiPu0bD7zqSglN6ceZ7GlbzyVRQBjnbffrGwe3nFDZamUMDouM3iKVUrXX0%2BnQG76Vj2VPeSIFA%2F46F67ZKAMEAAqOChp0rNicrBusPFUwD4wmr6ndWrGLWON62so6ehY3mDIb2LNJGLSBfbo1eOjA2Ci1UXJTwe3%2Br4zpfMyWK9y73UX6AoefPRoPIZG2dYiMsGO7LHT9vkdgK9KcEA4LV32bsEVXDtyhYhOQMhOZUn1BNOgzoNo7j7T2DolHDSy9WL1e8PYLm4wDL4DFa6FckSX%2FG%2FG6yMljC7Y0tP32V%2FL4XEl4xO3ncO8VeuETe%2F4ehvLhn31B2oUdBFkFt9yMUAzr65%2FDwqAjgcqbEfM0zfDWRcueJmdQaxT91aW7ECEbjYYHoW7aUopOQnYkovgd3wf8cuY4Xvj84wBV2fmm6NjM3R84oPaMaISXQb7068MKuHsMAGOqUBBoJZQux%2BQ0WHk7Iik8eXdWkFaXcY2BlKipflnFfhcVZMlCJxlugKThRaelue3PfFSUK7MuB6dXVdIGt6glaT%2B97i8LvMKzJlfL8wbyovjlLdTR25BRAhvNujr3fsGsjXtf2NDRfnDMz50hEAILzPmT4LcvOT3IIayu3K3x6j%2BVWQZkbuZzDrg%2BlgM4sUcIurHkAu2kdn9JhtWo2bFQ0gW5uSlgxt&X-Amz-Signature=315b1cb6f28257999eb95ac37d2d62efabbb27cc0d75499d3b50c95ad385ebc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
