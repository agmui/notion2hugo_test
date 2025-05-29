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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ACIM7K6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRr4ULaMgR1t%2FIX986afx5dP1QxxzwNj4KUtJPaROPzAiEA6eiiM4hWLTL9%2Bqoanh1usWkV%2F9js%2BMz2W0TDa%2FdbPMYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9APGsb%2BKoebslHjircAytTmkwt3LrP3q5XD68PU3aepznjnlu1O40SLOdwgkG3CJkV0GJjvLISphIoXPmWrzZAm5ru%2FF6P%2BGPdzbL%2FFnPbyCX8ZHtwCtkFjt0QGeus12TrrZECHOyBL%2Bb5oE6mymRJ3U7YOM1L5WL0Ka0AzcGrmgiz2Ui41Tj4OQYJBhqll8pPMMqO5lfa7gmH9kOUj6FRggKbzvzC8%2Bt%2F%2Ba4j1udOpg8d4rjpgAN6lngs%2BF43%2FGiRVeUWXRdVIiaN8zbZeXszJywkqjIRZUj84kJ10ixgw5GIEixhjbtGJCYh8o2%2B0RVox81aj3brv0P%2Bnqw%2FU7D5H1czrtYuECD5H%2FaToUmxKEk4Dbit67Gbf812Y%2BH2McZMrRupQCgT2rVGnnU%2FqtphCN4HbBBVEyWubT7G25u%2BdCBDZGn6guS%2B8CsA8cmeDcmJ2U9ottN2zeUEu6Eg8EFWV1Oni6jHHQDI8PXsBW88fZEJbHh7R8bGTUSRdYgX7Wo6expV2FZREhVPAJ8JK2iqzvgTHYPGqxCoMyOy%2FC1tTwIMTeS14n2DB49rR5ze3055aXIjP%2BS86b7uHQZMpXSqeDg4AVHOy3bwhLOCsoKI0gDs17r1zEHVnd5ZF%2FYnnarlpEWU0cs5ujIAMI6y4cEGOqUBCHTxLPAxG5%2FH%2FLDmr34lvfyL9whWJsJxIfiRFg9sORkUaE%2F%2B65TuxmNeIPHq2EVAdOLoRdW5IjyzRmlG2d74e4nw9hoR6PtlOsKmQKCTkhmi4tFvaeRnePLihRTq5Yu1oZjSHkgoxJPDWUxn0F0mNHuSBlq%2Bk9XkQ3amFw07p8neGTzRenfGkf3trGYF6hynzMxVWwOLAd01PSwPwtVNDuBvzwau&X-Amz-Signature=fec6889591d3ac0c3207cabe9cd25d0a57aa71aa9a2f0ca221726a6a82f288ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
