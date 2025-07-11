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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWUMU634%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW8tB84jiqYVho4ZoQbAv4JLbQJtiXjRD3THRJX9XrvwIge0J5I%2B%2FqJa8ix6uCW3XtoB8BOVLi1qE1whg2JEsI82gqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmcIA3Tu4jHC4D%2FmircA%2B%2F8eUbBZ4pglC1yPTvhnFvWvx%2B%2FKybB8egxTPYUK%2Fz23MkaZbsOVack9vZxkp3GWc%2F7dF%2BIqUNrAnONu4VUs9XYXz4MBJjMJSsASpOhCRomEJ6jn74aBOuFYvua0Ez4Z84nyDpzErsHJgcdygpnRzIuamSOhU5dC2aYyCJEAEAQ5yZQSVDUVmaeZdU2escgCTwTN%2BF8pBD%2FSF94T9KxnFLDp5tPlmfJuKtekPceS0t1wiQxKE48fyTx0C5lXU8iQb7L%2B30IvAjixkJFQ%2FoZe8vgju4LbYd4uXb7CoxQ6tDKDzj0XbCyDLrxiWhUmPx7efsuCM7QN9WtraqKPgVOavwx3txmgEez3bt%2BG%2BSeN8qJJgFJxvlcM0QPGbtdIY3OROPboR%2FuXX8xhrLcRwst32Ct5iGarfEsiEpaRXy1GI9pQvmbfwzbLpsyWJGOVsSQb7%2FdhdcJ80ohCbvAnTir62jgCdZh0eSQMaLJ6UX72JgMFi2496QWJb8HQd%2BAGc4khy5Otn%2BkJI3nilfYlFnTKU1RY0zddCPNTRmkQLzq0LseELDiizwIfsRPXlz75RX4tOgyboq2yBcVWVGTfMZBcjCyucijRdIWrA%2BY0GcMOw8zJrzOqXdc3c5wG%2FYTMLf%2BxMMGOqUBEYs9aaCu3qzsSN5fZFW3kigHuklH1Cx%2F1xN%2BvnQJ37Z63j62o72%2FxUyKXY7aTKkjbZlJVPpa%2FEFXdnzGvHJudzQUpjxaz9Xu97jdTKgkopFITHa9AMLAMy4ZDXrz1dn9rMUVv8r4ssss%2FAhA7Rnxf0USJgY64zz%2FNQFu1Breqhd1VXz5IbFVRE%2FghpWT38l6UZy80QYJ6nJfJT3q8%2BWX2uzpXlTi&X-Amz-Signature=c1977904eeba328edc9babc6aebbdb5afd61c3b5bdf3a0c20d74f2c1fb90ff69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
