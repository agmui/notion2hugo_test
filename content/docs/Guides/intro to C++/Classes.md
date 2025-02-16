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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG3YYNKD%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIEUJUkULMbbKedUgZyKSFOpxAU2VWSBRNA9LnXxZXHQNAiEA2IPlELrCaPYFnLiuSZJChX6lK5HkDviXZIGE%2FtPVQPYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFiTavs1zaiNTPuSXCrcA2k3V%2FaMK6OtDbwa1L2ZY9fZaCD6v2VjIAqf9QTB1kovqzu%2BrSh%2FOdGO7U%2BnnUWkMrYIF53kyH1dkeDbIdalPJ4ElMWYD6HeC6rzL8GOXfG%2F%2BkwqdP%2BJ3aByD0NsREMgafEGgQ7C1kuLf%2F7YIGbA1msr0HI61dMcSkDe8%2FblJWtbxZFX6qZrp2iwi48Xr%2Fptd4jBqXHGt5UMN07w6m1SH%2FDkeVqSLGobDWzojhLV%2BtQcFpG5KfkKIiYjSY2yf93uNwZ85zzadgLV%2Fe%2FHjJK5wNipR2XeyKTKq11NLypfgY4Z5b9nuUda%2FZi2HOXmW9QJLBSfFv5fC2PbZm2MuYEilOv76xeltL7sU%2FLZ%2FTjgh%2F%2FTNxwUURNHYi3ELm0SXVwM6Ns8gtm1S7y2GNNqBY%2BYZEs208Ml%2B55TpfabdWl3mK1S6y2ovqy28dq%2BIeQ5Y8%2FBLLFGyPO%2BRiFE0KWDRDP57AtFFclmaBAAG%2FXdt0Z%2BS9WvVct3WPhJVaXMWsoNf1r38drqTekavtYGls36yCpvpD19dnE%2Bb8t32pMc2PYwWHI8or%2Fk15uW9vnEbx%2BsDigaIxJteJgOnidbff9BMyhkgd7EzEH%2F10aPa4%2Fmfu85TH2ZZ%2Fw0dwlmRSX%2Fiw8yMJGYx70GOqUBfzQJUl2e1DpllpnV%2FmEBRLbSstJrrejQ6PohAn6RmIY0Xi3guo2et2l0JGRccL80Ta5yPYqlQieoI7TxpCRxEHM4ZtGKs44LqEMgCMiy1k0VhAc2r%2F7pkM4cV9UhEwnVxvfVqVclk5CG6KazJwk%2FOtiEfeNVmVDx808IoK9WSKxHIGDq14Tq6SwJjbJKWGUF2LfCQRLGFSk0EKVGwyS8%2BA1JfF70&X-Amz-Signature=d3ca40cbf7d039438364451ebeacc9094eeeed923da2c3b177611ee843a8e4da&X-Amz-SignedHeaders=host&x-id=GetObject)

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
