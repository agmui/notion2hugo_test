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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QRDXXLE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKapC9s7hJgODPr8Zmd29t1KjqMeV2SU6GN2048ceEuAiBEccKQ10XminmgUe%2FhpufvrHxROPqIzm23JvSsvwTukSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0zTxlWl0WSZpwga3KtwDFjPg31IttIEyi0fpf5YAfXuaVa7IIDj%2F34SZogIIGZehIno3U0hIAyZtIIO%2BfzDWWb2yF%2FbrtjH%2ByTe3n3W1VTJi6sDvPHULo8iJ7RO05bP4FFRLVqZb7lrv%2Fkxi2MqLcbukr35wKDZaEuzBv8rJxdEPbOKA4XQT1rmksaGHGEOg3xFhai0k%2BqglCCh3Md1qoFtDKV19KXXokQ1MJG%2BD9ogSK3Z3nMBNKylUWQSyKP6IDoCp3Xdr%2F7TII1TT44fPa4kfMYczuDFUOI9tHkmh3iy2vyTbrhwrw22YjOlc7qvcTdCvmdKi6zt%2B%2FL4KoMZP7jJy2Y3SoAg92Qbl79EJWoDaurXGnFoS%2FfxNwWmshjmrKreLnAl19CEggFtFAhZHhNHQG5jxdePOAaeT7GpqitYwRLjtUmZMzt6zUlRZcBChneli9hg66lrbx5xyI0joAbQN%2BF0scME7SIG%2Bkaj6YzLZCqRrgvbPqu81FSHCkD8DBMAkixZ5Tp52jEPDqiv8I9%2BVAdy%2F9UEqr7n8gtWKJKmrthfbPIeXMwa1HVOTcwXaYd0iM1kBKHbUvWCg%2FOqGHZGUTct8HEBotuhamjrofE05%2Fvwl1BXauJc4Kzl65WndWf2%2FN%2B5kND7P6vww1qLFwAY6pgF91wQe6otRVhYCSR%2FEiDhZc4cXKZ90Vj8DBwpJzQVupiOGZ%2Fx8kgtWUNPYwcW%2FLsfr43%2FFhP7a8pdV59W31EtwwZ5E%2FC2LI7pvN6sXQK4PQYdh3PPN%2FYhEjUD5A5n6jjQP0JENWNjZBsXVmWHvprd%2B51gRP94NicEB79kakwohQSgh370ortYH4AgkaGo1lnFW3g7SwKn2POGDGyMdZCrr4j1Fe46J&X-Amz-Signature=748cf9b78ada118aeecfd59115a748c37a9cb038522d9b8d0866267a81b1b98c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
