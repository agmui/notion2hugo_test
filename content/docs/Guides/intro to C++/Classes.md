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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635VJPJCQ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDLv0SBPkIis4nEwN8nX9JXw4qk%2Be0Tx9zfMzAir48kYQIhAKCYGlx%2F4GmZi4uKdSi7Gyfk5ht%2FVrjvPbjDXmE0JOf%2FKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyT0Lftx%2BYlsHVi1Qgq3AOzpgIth54NnsjpBSoxCwwAxPhXJ5kcetNFxUHRBDTINe1t0p4nCF0o34BrM0ZDyJb%2Fe6hb3laRm79dg4TG7113fDpWHCho4f7QpZJ%2FPOAcEljpqF0e0wyPSB2BZgkvoi00LAHQ6qhgNYYxuta1xFgNddUI4ht9rNc3pf2eb87EGkyBimfw%2BMlzUX6Bp6Ba9zNl0DDg81Z%2Fy2wc07MB0wFwhlroK83SM8wqR53QSh%2B8WRBA9eagxCdBl2owpbj8ikxd4vfkIdhMns2e1Y66ZLk7LrugONdgIcaEObXGOX0LxtBlCUSZpwcKm36eNv0Q3BEaLIUorsJL6y1wl8oTF8gLpqVUvMbhRsgceg08wji3vPK5wg%2BRWDkwR3cj5oOyUyUSieskOx6AI5QawnnpTpbYzq%2BdIli4KFrPc9Nt60MPPqo%2FBWAOr63g%2FUgqSHDWFye4HGvi17FDIWak%2FBAwgFYvUsI27TDX%2BS7vUV72jRXPYALeKA6SUaYeLtTXnyZtmldYQ1Q9ITQV%2ByNohCKxDcaf053liQVO%2F3k4rkCT8%2FVnMz1MdoLhQ4qKtaJbL%2BFLCqJZc6Xm9DK0sWhSehjeni6F%2B5gH6Juq8LJJaTZjBxA5WLEbFzjBS8hitH9LAzCNqOi%2FBjqkAaXq%2FGet6R4KYmAoWzfDIRi%2BBA7ZG%2F%2BoPcnqlEBmt4RKwlCM%2F1SoVpwDz59yPgCr%2FpJzb%2FgiU0xQ5Em3fJsXq4CJowqfyQklmpxU4VTgC3MQ%2Fuh%2FQeJtwKO4mzhEbMlsqfDXdOBmcsfy5eANl7zBI7%2BByG%2B7UKxQAbDuQYTUs5YZxI2K2uDB%2Fd0Z6C%2FuGD%2FF2ER9jLQFC7GnYh%2Ft4nKIaIN0JAVX&X-Amz-Signature=6a06ed45d16fddfa44756d6cadc29ab359428cdebaf1312f97f625177f78a2f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
