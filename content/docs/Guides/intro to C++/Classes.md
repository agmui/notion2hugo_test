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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J3ESQ6U%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHX75qxgfIV0IzWi1RNpOPpB%2FaALLRLnZIsPIZepHNzgAiAQO2R5lr3HR5EjiVM5ApPT5ix4BWH%2FKjyuu9GvWlIFDCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMORAV%2FbC%2BM0yd%2FcPhKtwDu3WoftfNEB0PuQHVKQ3NuvMiHM5qJswp0quQ75wi0fDNKmS8Uzw035ovK736eFNIijS3Lcxa0iAxAKD3dXEubEIZSaVEy5jZlX4qJwcjj8UMaxgiT8L0mO4UxYNJkXMZUk8EATa41Pu90VvJ%2BgpnNIWdqQey%2FS5PHMbACul4R72bbxxEoou9%2BjpzZUwy9lMCPo1PtM6m27%2B6AG3SaZB7OLCxAaqpinlIcTBzOa%2FC2c3PeV%2BedNd6fbJOBM3rN%2Fd67ISWZck1x2D8cbBExuFoWf0Q2lPZJLeBXfVavwyLatEoy6vf%2FgVHSMC%2BEQwIOa47kLOYY%2Bho%2FKT%2Fr04bNALylbIjkrFIsLcyw5f16QFl%2BGVpapSsp%2B3ck3EXPlwjLLkLYoXdxArNvjhoJ%2FFawCXeGOTUF7EjxLjymDMjJ%2B3%2F1cUWCxzwKTFunhDhefo1RVSmbeW1DvTIMAVT0693a3NzBeCzm5UzmX4VNOJJN2ZvaCtR4F8%2Fkb3luTBkT8A2QYJ8sM1Fnj3sQu%2Bld%2BgsvsoDp%2BbawM%2BjDPnzm9HUdrSKdDfxIwEUzLdPxjONC1TuCUWYl0ohBOXA4ZuJDfT4JNTVX1TWcnlZE1qCQ8ylR5nB2%2BogA0NCnrlswpkoIP4w35ytwAY6pgGVcqJ9by8VY2p6Idce0zBd3HKOhOBF1VxGcTkdpgv%2Bk6e36acRvS6Qks2h%2FXwL%2FRrj516NnzondckgUhfRZ74cIbEKWHPoHyGHi1fW4HTC1Zpv%2BVpausJFjNazRG4SMz%2FwZ%2FwnBnDw3jw%2BrMzYPdTjkJ8tlcdN%2B7ua7cfVuumAdsXf8Wj5JcTRT3nTEpBOJZoJ%2Fk9Mwduhc3LbV5mlURIEHOyn746Z&X-Amz-Signature=26fd7323980f86273e7071cd090cd1dcfb961e52dff7b701322d0a280172400b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
