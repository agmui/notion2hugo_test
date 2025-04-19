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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BISCD5B%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOJPZL3rDv%2BsBnOH5dNoLB20BaHiBKa6hj2IA19GqciwIhAOK0%2B0Ok5VEBlVdAU6wauJHrIDzmzMv1R5xUcimhMhnjKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOaZEiqTALn4MGK2sq3AOn0cErkIgPe1Qaz1%2BaNwEC%2F8Qhye4JF6VtupYqNlTIp9%2BODxDm9yvw%2BYi%2F4%2FGjWTfVuIRLwSvEPAglBPFctN8QG02YaX%2FwfsYn%2Fk2zvw4cNhjTssv3tOOrHPrddc1vj8fpEwvnaJzBfn5COmsxeJbOf%2BsJxBH78b5b3XVqxBmJsCcjcLitGvMkiZ1wvGJ5uA4Wkfm776VzERTvZ%2FCLKKHSxEx1c1xvYO5fWjSy5%2Baj1yOhNib0OSkYu7pA%2Bl%2FY4UtprDbm3J4XXmtCivmsUdVEpe%2BgZSbYF68vyRefz2ZeHkdnVsp5loxSwpdwQOdi4uasLPT8IKccEfvBK6wJAW%2F7N2lVTBfFmXDOdWpe4d%2FrTzG9OsVARPzsP%2Bom%2BKiHqxmSA08Gf9MX%2BYT6zC4kCoRPzNMH4wcW%2FHU1Cg87hv5JNJibr6ybnZSGTD5yQOjTrw8Cotk1fn4YlieEnDiNNvvjsf5py45DU30x%2FPe0cIijBcmfxRK6r10%2FvED9zYKvPcszJ3%2FAN%2B3yMCCnS%2FHyE5AKaaBS26rL%2BIlXtd9BGCaDWgBuhaextnu2svq09o0tiwzODtAkF5AvKyM5lErQCF%2FrGyTEAq4E0642oAICqFp6Zl9MxJ5kMkjG4fX9UzC6%2FIzABjqkAXbdvbXmEY%2B9cxLwRx25dIE1hTt5iUvcigdtQNfjOdk31050nAQedMraF647NQCVfGvP%2BVHohTviz%2F9sgf2jEM3Nfmp7iQFM72Gv08%2FpLC2SRYU8iiQvqey%2FKc8apscfrsI4LFVVWRyPMZZDsuO5YxVWOUoiNcpsdh9t%2BZCRzspLFG7bV1Q92c8iZfC%2FnYi4Cv4xxUPFDA2hIDhvymJ%2BCQaxn5On&X-Amz-Signature=36cd2a7bd689a4364256f1d22813d6d6d3f12897aaef4b75865be2660a9a81de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
