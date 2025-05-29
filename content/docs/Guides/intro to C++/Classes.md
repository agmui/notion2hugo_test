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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQBJNHA%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExeZHHGyk5fnzwSN9Z6BhmsJ7%2BySIBJDLzGBSL08Nj3AiEA0%2FWLMSFBhMtGJOL%2BgAWgVO%2B2CEJ0bvobwVqKgATGf60qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BSujNZmV%2BNlUwzwCrcAzToud0UBRlinOdchcKHhc5Puf0fSu%2FBI6v0xjAQs2ulCmHDfprGx9rmq%2FiTrzpJkgoSA8xa1PG0xi%2F7VMaR6%2BwaGA7C%2BCVV2drjrrJeC4Q5CownkXwmuzAnk59A31Y1PRN4VreK03qH33ykBFmAscbgfc6ryZcday%2BJ5hQRrCI18ekcZrQuNW47%2FDzY1If1Hvo%2Ffvf9UsfvktpVgipDCUsiBoMDXFgP%2FNMzVE%2BSpC%2FTDR2sey6bFn3YiRMa6dLcMhornV%2FDlB1gxLqp432CaFesEBeX6ou%2FaVVZWGsbNS%2FNEU2xQoYqQ5vz%2FDeA05eoUnBJQAhrRVidjf27febnrTarnObQ7%2BqdDyQhVdnckDoHgz6Y7Wic8U5VWyOnNH3slHTYtE%2B04ILV5YcUpFQi6m4KCVK9Yv5nR%2BEnNz7gVcUk%2BbD%2BPFQNi7qYcqjUNBibiPF%2FHvn2D73i6J%2FqlMdCUa7oZ2g%2ByVjQvj3LT9dVf68gC4VA60%2BE2dRjhvucnYGPeoIT1Ho%2Bp%2Fw3Xe31i820xAe5NWBBYkZOnDKo%2BYCRxnUHgjKxP%2FtGiZCw2GxWQ2bgIErBrhH6rYnLf7FyZre60SNHpVij6lb7MN6BUMjEf2o48kvsW05HFZQp1rusMP2x4cEGOqUBultVvopGjMvrdTeh1fdJC7Eim7292yrYBHtfzOj%2Fwh9RsUj7SIrg9h93AcTi1M4%2F8jE%2FWfAHyy3rAU37xpYirT6bqSwr%2Bz1XAX73ZLTry3CB1lkBxvOQkxhyj2JlOEmu4pd4OVapipR9NYGbmmGOi7YpR%2FKJzLOkMg8eAWXj8kDrE6Nh%2FfqBN7RD0qzKv0vsvejRz69aQLoxrcSWk0A1XtdO3%2B0M&X-Amz-Signature=84295248c1c6573ab856b31ae1f2e32ae3d984077fccbe5c6229e058f2074fec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
