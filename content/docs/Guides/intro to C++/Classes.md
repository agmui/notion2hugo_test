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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WAHU6D6%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIB39zwqVFaQm4Tp03Jald13ZWeBHbGIguz0klQzkY2zRAiBAimlS%2BcfvHuddoFzNL2o4OzSaN9YVPnXsc6HcBcnjfiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcK0RreU6zC0lJAxcKtwDC9sXeVao2LYvw45h9VbbL82dfxOqnexQ9Lx3DUKS6yyOfRsSBvc6veuFzhMKyCUyFQyxDnxiXTQrbZPxYuTD8FZAhUjWfW2bMt7tsjaXsIXV4DH5cDoHRX4uScgClniiVCz4t4tUzKtgFYfXIeE%2BackIRm7oDh4H2e0fu3uRGU18LsolCgTNbcJcfSBMCQx4MgSo37u1nUsQ7%2BRI1Olcxu5gtNAAK4FLB6ebokEH%2B94wxjFyNRbPjDeu5ENFY4yotYZjjn8o%2FohJntz75u8Mg7%2F1i2gdyxwFomeDnVdMMjeP5Ao7FHFibBfR4i8zNTpyWyzdhL9de27%2B%2B0qU59mnT4i20zH3xLN3M9pLKsajkPKlxVB2Cat%2FpwA4UzyX0KIiC4UQ2DBSETgE7DpDZEypIxU7hu18Ew2lxvY0iLndXfJdvnWb7skKel0HfFv7NTSA%2BnJWhgUSqMY%2FdTFOEFB%2FBQNzN5XoHuHTsj5GZNcKK8491GKn3WoKOSnVLewtHMiQ5Ax02u9NMnfzwtS2SsFY4Ohu3rSA47lWidiobMn2a7Ql6RvjGO3YWQ3WUqevLo5JwRjH%2Bl6T7gxhmW0uwgzp0%2BHTQQjQhg8co4DuVGITAZTnyp3eX2emTAhkv%2Fcw29fzvgY6pgEp1GvDQMFC9%2Fi3MJQIhWfASEXOcplbvFxxRbEkodk1WDI8yzzIyIuASGYNgOdHfhcxl6Z%2BnkoYntNVpWhV%2FSNHE3YeQIQZlfsYXx97O81KdBiaUdWbb1yMg7MkFijxFcJoyUiV3%2B2POoy4JThukVxMzuor0nvTlH3hiXXy%2FEpzQWEKuCGPrMmX%2BQYZVWpXJhI11LbDYJuLSJMS2lKJmZ21Eg175yKf&X-Amz-Signature=0ced84396cd6a8dc0e1f03d5bd1818f7916b402c66025c01b56c1de4de2d0db0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
