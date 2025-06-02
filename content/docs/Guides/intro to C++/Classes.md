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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCYGDNW7%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHRJtpcSSZt%2BUtLs3CsvB%2BOp8357NOeFGhWkPjuinNrsAiAPRgn5XcBWHlS8NMVaIZEYBSF%2BGuDK%2FL4uPwO8iHp1NSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrW1HGgd39BDKxqrgKtwDE%2FY1yIrAnbAF%2FYZq%2FYos%2BkbLimS%2FdlbydYqcQM5HYlxtixY4dDLOM%2B8BLT8oh6x99ZIV08Xr7WI30enfaQLovD%2B3545xjFDoscMDANaTMlNuzatnedvNP4lHNtkynkcxSTBq83w67nnc6mC0kWPo%2B0n1CAHUgMjSrxAkxCZud%2FaUn%2BgBCjEom5TshJbQOJcPEy2bko0T3RZoaaBsX1Dtqo7IfEc%2BTtVLL6ND%2F9Lj1IfYPRwG8dN6FydmonzpVceXtEDfVD7BlXuzy%2FSqX7OsCubTXhuQzBaTLmtKRutTLDsTTa9KVn7WLBjuG%2BupdLD%2Ba7EPkqwivdso6e4O9wVSY0hvzueovR6AJfol%2BTkrVwfGI8PIPHixF2kpH7QMFy997gPpKsFINmOhsG2c7dYG8RfG1hYdsonvst1%2B4EY0nmsVgO3WdvqWnsgPo%2BkPfs8q3OBY%2BkA9JuqBY1c6mW1SSRvhTohTL%2B2xnKKwv5ealGV9ypU76cZXSAXHH0%2BFRR5%2BFiX3eQvyzJ2i7eu50DQKSQ8KATolMPWpfDN6Y04IeV31XcaF%2FKTobprwwtM1bHoyV%2FX2nOmehxrIEGNpMxC5vSnm%2B3d3rQpl3sbgtsfoAKU5tT0EbeqPO8hfcMYwq7T2wQY6pgEVKWysKGk4VAxpgZnB6qHv89UuiCg3KoBnh2bw%2FFVqelTNcvLyAJB%2BPZ068AFDV%2FGPK9KtrEAdOiWblzw3zNq9MeduNGHdQvoyFLUl2ll6jt1z5%2BNBDLX3oER8RY%2FXb8q0QSkyD8dpKGCKLc0QpUdFvoQCpouF73j1vAULvIiObV6O4F7IdptkZ2PhdCmE4zMNH5kkwysWCJmBC02o7jI6xcYRSl6M&X-Amz-Signature=220aaf8d5bd52d7256aa1ddddd842e37d8919f90779efeb4f26b6bcc74d29896&X-Amz-SignedHeaders=host&x-id=GetObject)

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
