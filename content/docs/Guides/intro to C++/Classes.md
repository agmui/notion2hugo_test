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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODPAEWD%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA14ddoDFh8ywQbrFX7dWXaIeEVE5thAwMyx4j%2B66D6YAiEA4SPZpGwhxtSeWTt3HnCx5owr%2FqLe7Dset5xCTh4wyVsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDC9CPZ9RRtAh7RVGKircA1RYKu08D%2FWCZsNMdLJQkhmBhRTRxU60v0FJlEzZD0qMvs%2BPlJc3KnS95wqtT%2FzRBSGK52S0XXDizE8utysy7PWxkSTClOetk6jFUDXKC5CB8wbmZN18D3j2xNsd31jPVFzOiStV8w3F0I4Hbvr0OQFIXgJKcuiiGt0yOpfOrDNlXifeh936409F6MWGE%2FxPcWEmK7BouUHflPHej%2BltcYW2f4CldlD1pqJWRflu7GndSIKBcIWAUkSXYlQRqCReFQ5uXyxA2hgKSiZFPAWz%2FxP1%2B%2FXzc9oyq8Oh1IlfidjsBpXc3M2x5ow%2B6UKI6ch3Y4u9Ce8lXgEMxOt3jVe7UiLGcsC70Hf5ZLGcaqGhPeyQOiZzZmgIxdMdd962YdnB248uD2Qhl4xXSxKcCe63vxQjix6TRD0pzOHDniLfQqBs7H1s%2BX4zxL%2BkzSKmc9y%2FpHPMGItfltVNGXaeAe%2FbesVQ5kFO0pHj4KUQSq%2Bdh8ABr0CFB%2BBY62cR8Hyo2ywazt3wPsxlQbUz2T4gu83%2BUmSQGAcS4wFfld6zF7OL8DkGETVOhvySzcwmdJBgSiYTXnHj2q7wqZjQ90x8kySf6xWyQ6ILTyj69CaRDLLeRlJ3P11NSEcX3IW%2B8v61MLbG%2F78GOqUBz%2FVmYcNM0w0fvil6%2FFN6Cn2yFlCfNcDHeKM1s%2BVUCkegn4RcdsfFsY7EY8tqwCo0sdVtXaU5d8DUIYC1FRF073lSuA2IW43wBweh0zzbS3ZHrF7Gfetlq14So32rD5bNEUt1kZznkiIAsaP87VOV8264YGIgPw46%2BmF6oidHdEnOvarUSepR5pRj1P5XRTgBFV562JzOv1AcF8VwTV4Wwn1YcEIX&X-Amz-Signature=809990e3431be4f081f94c835524213f9e5c4dc536619ca9dbc14efbb806b0ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
