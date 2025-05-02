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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVVPOC5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCX%2FZW%2Bvqj%2BlsrKQPt%2BSEKmioyQ9tsJsdiffErYD5LzQgIgd3dFSnUIVaMcV0Qq6NxJtn9z84o5evgZLF9Re%2Fbr8OMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdjqt9FgHFD3JMh5yrcA1Mqeh6SOKF%2BBnF6JIvdldB%2Fjk8kT5rLmG8%2BipuUGi77twHJpjGMNgFeBL2FynhtZos8nDI6SbqVeKipx1gv7Se%2F1lQN1kANzJbY1YvqUwTGxytG33vgj0H6Zq3UTAdfiA4Izk%2FR%2FO6jFOjCE93DFkhd6qT69lRrJ7ycM%2B2EOc%2BHPM1O8lmucrsty2cowR3uB3u6OfyKl3H7ltrgo4EG%2Bzji2uAJYqDS2Fyz4JG8EsuYG31ZPo7pYePcIbfz5uzfsskG5Wbg2m0%2FGsVq1h9mPcO30MtbPcvGovD12mk7u%2BrktNR%2BTQ6Lv4NMIl4%2BBuYrxQGDXscul9du40GC7gmRYIu2Q0ifMDEM4%2FKbPCADnLGA07iuWwtNBpQlzdIkUB6MDhDVz%2BuGeAW6rs6%2F8PD24J%2FxfYhtzKx8Ma3u8DqBT%2FkGTlPp8ipuXP54uMId2STqErM%2Bnbb5ozh99t%2Bc%2Fs0CKuYM07EOF8CYqRxZo5zhWFfD3k2AidbcA3DAgESVkB9jalEDYryX5r053hmRlZbkXz1EdS442K2Dwk%2FMvFpSVmq1qbe7rZvVs2BnCJmCw758Mv716di39FMC8gdT2OonCQ6h4dCWbuKCF2Yvgym2Ebwil%2Fr3yBf8qpEMg62JMJqZ0MAGOqUB88kTqyw2PSuI0lvzDGlqH0pVLGPA5fNGj9s0FA%2F08fhk31jGfZ9EBSADG5MYS0eRYk7bdjOf%2B3pADPoQ%2F5%2Blt1KW62O0K0z813jWRti40RAxyP6JvOiB5aMLu%2BrdSQeDs8l4ncWnMzFlH2b7H1uk83rXXe4L8%2BJBSuZJxhYeLEtwcqMmNIpIU8pjL4iEm6VOiUNPgUp661045z247HRNWKtbProE&X-Amz-Signature=859a71e39035c5cb27dde175d2f4aba65b15e6bc545cc3546eaf5d6abee587f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
