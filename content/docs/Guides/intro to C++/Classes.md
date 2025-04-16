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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLVIQUQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhSwsmM7yzIxc295vfbdDutnch625v2K58D%2F3K2yJMCQIgQ91%2BJwrB1o1qp89z3PEVI1MMNwT2%2BBJRiTc0bTWL5Ekq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHp%2FoiA2y%2FTWJp0aKyrcAyTBVPyl0nTCC3rZxCdY3wQ884hY%2FoZt0fo%2FweVJcluCTKWcWEvu4mO0p3cFNKkcK%2F3sTDFSMUSWi7d6sZYDR5c3xGDTVX%2BonHPMXvvYJG5T2xUzkGacWJIv3XK2NpBodwGrBHxS9gyxaqljB6GPhDt684%2Fm4teI84qhu%2FRjYPgiWPiKedahebq12V1JJM0uNd07Eb%2FGb3%2BURpxdjE5P8Wqc5DNDIo%2BNC9vz0NbfIk%2F3ojl8Rf2RQzyt%2BzRXVFJuw6mnoZz388ACyCsaI3ZmilfwrY%2FCwzII1UUoMlY3%2Br2QxhhTEFnkbQJKkomU7Rfdw0RIFOOhJCV2O%2BXCjPTSjR7mwpWKc8JLOI3yJxz3YG53%2Bp9frq2KicdXhLfQDCh2RTO0fpAx6vXOapLUGsQrlZ7fR7rOftlZZNe%2F0LPVgPzB84rmxC7Hpy1oHv0UCGzpC4nAWzq40JxaguPR5vDeucF%2F5wIdz%2FzGmsKye3XF9l7d4oVjegy9JVG1L5h5Hh67WKs9rWJT87co%2BlTzErIccdwnlWnpu6Fxc5qyRtERbTnoOaVWNc%2F5oYEaAEzXUENA7Jh0yiROUqewHXwtd7Qk4RxesDHZsfG44WQbrOWNDoO6HaaYive4Uh3CpLsoMLX4%2Fr8GOqUBTVtOEmtDsrcHewBypCO6KfjsqDXrDOqfZJXdxCiy0Y%2FfLUtView1U6e3CvQ7%2Fz2gpwCQF0QsL%2FvIge2LzoMw9mLNWIHXWoGfvIa0xmB63wHJHLZSkJTjgc%2FE1iHA7%2BARzDg6L1nroys26CKlbO1iukJAzQILxyg4%2Bsa5%2F0JT20QZaZ6e1fMriO%2BviwtqlpTarLswDz3vqMdQfjOzSZk6Ez9mzLO%2B&X-Amz-Signature=7dc52523b69f4737c40d27503b8c9180b0b19d5b8ec1bf94c7b39b7a41a7a90b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
