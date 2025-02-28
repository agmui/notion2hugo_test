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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RE2DCQQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFT12fGtvaIcboZu4%2B7j8UzI%2FVwc78hG1caA4QHyLldrAiEAgBkfTbUo36lwe2nWuf3oYHM32%2FWwaGsGTyT%2BQM6PDlEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlKX5HQX%2FYbu8KaiyrcA7oJ%2BgFfaUQkPK6EK4BsjDYR7tdiaNJzp%2FMiyL2yY%2BLR7CFId2lA7AvrFLhHG3MckVDMptWBHAEg2rI%2BU6KKlwH7cxSyGr097n3xfszv8ZriMVF2%2F3FDigYq7%2F7qoInc8H2%2B3g0UNrKQD%2BrGMufNkICMBonLSDzegwDNekGJ9A0zuYDxlgzTVvuPcgdVblVPdRu4InKeG70n79VotPn1PPE7P6thLtalXorpNWMEsDtMbOugYzp0HOoAr4gwHWCDNo4wj33GUIK9cYWK4moZKPQB61OmLcGh4FWmBGbajka2szV9Qr4MesXu%2FItMkXNFl1u1GbTUpmpajnBNQIHrPri8pyLxMlPY0lBzmdrwc94hGn%2BanRoyjTL956wslWrmvU5%2BGfyLgjdKavuP9GxW6WNQVBodXSiCayXbCyU65Re32ktFum%2FUHW2e%2BDRZaSz44men61vhL2abRg1P02K4rEKvY4fHtoAk%2BrrNAPjoDCRR%2Biu4fIEJQY0JeelFZ%2Fzmw3iMgW0yqYkTjXXe%2FKBi0MWptCwxM5ijSnL7sgqRm4qW7UKPSJl8TUzcm0OK9hv%2BEI7IOVuWC8%2FYyd%2BBoN9BC%2BY9zqkJWm%2F7YGBoI%2FqpdSUWHOZgeSyiHemz%2F4KXMJWwhb4GOqUBR%2B3knxcws0zTfwSG2421xg0rowruKLKBrIb1wAegi%2FVN62ESdUJ8w2V6ZJAQvJljIpWyfFotibeXEBKQ1p15zPyxZrx3%2BBsdIopAAtfHQboUkCPopiBxsgiJ9TudSMiAtsDJ%2BL5nHsy65ldwkKq1x8YtGyd9wJTEQLbvpw3%2BSVEB2%2B0zxdDZ7O7t76YLNi6Q5vkkjIMsVjM%2B6KrDrlRHZQpeGxVX&X-Amz-Signature=3d91918d6552bfd2a6c820f6a75a81d4257cc442bed7a8bd45563df3f69d29b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
