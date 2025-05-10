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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7P6UZ3Z%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBx4ESJ6d%2BRtQBc46pjPYCSCLiBMOy4uj%2F9TFvQgZPIRAiEA81FDahnt5%2BZ%2BGIYCCEQlwimiVIYCYJ2HjW9lTCBBq00qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4XXYZOr%2FkTCM9k%2BCrcA4YFlyTSnUebqMypNp78ap%2FJlKuGOVSbIBjm4zcCy%2Btshty5ZR9tFeL6TUAYB7x6o3eCDgCxSufVwH8AQujnoltu5nX4v5PMyjMfTf%2FEpLnxibEyE4%2BaXtdf6iyGoo0Krwco%2Faplj4FJBUCaY1SuCQ7ajS7LiQkNdknjt2WDxlEq%2BkDdutBgTPZnxYh9kVw1WWBacEPqHLp3bTb8RAGdvDs9vyB3iHrKistdi0q9a3mpteAXlOHPWbuE5LvC%2B42AKdnyN%2FTRTOmvDw%2FUI46nMlmRBQpmpCTIVY0fbQzT03VUc%2BH%2FP%2F5BdOuv92D363ZTM4p7jEpgyaRb9gDy2yGY1LDX%2F%2BgPh6flfnkXiP6fSn02u9N5Lx8cjo0MnUh7zcJwuHX2%2BgIkzQcA1Z8Y8FaYP75V47wJD4SrsKQahVYHQR7VvkjJkWiegenXlamiWLDXCExPWjn%2FNm%2F%2FZtGF44gaNmb28YMwUKZbTzCmswttfcdsaP9FDWRI%2FKSRYhOtwO2EHYD3MYAdhX14ZbLibAT3fG4mva%2F3sPeH1pSTYknWmYRZ4Z77ENVTXfKcfawK%2FTq10LqhVTh5KPyn822fQHsd9VeXxiAUw9TmQhUl8BqtdSaM7HE28Byz8nqKRdmSMPbr%2BsAGOqUBs0JEMXJJpyXLUc9g8CZQkmMCJbCGNNnnNd8B3QkuFqBxE05DgSB6twY4sn8zuqsk3kINlSBWNebmMhn2hJdt%2BcZhCUUD6MZmxEi%2FPMFrcvpbsLFMgFZG%2F7cK1ujhezv0tsth3NYXvKhI4YbZtn552ltkMWTaiV3Y2zCzED4xJUzSplYHug0xmE0d1bw1kp5pBJvc1bBvTrnGF61uvC61cX5Fz8%2FE&X-Amz-Signature=548e2ae39a6ab7fd44d409752f62a6435187fb0a8a014be8585fcab0bc1b19d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
