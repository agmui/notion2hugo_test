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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V2SOPXM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCErEwLTiwFDYY2r8cA8L1BFwoVkWyqYnSRH%2BNLGFoB8AIgdNqXEKjJ0kjjyD7dtV1DwebnKLH8TPE5hqI7k9Kd46MqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BIJ4FOH8ezyTeLWSrcA3jRjHLG9X6GXdr2uPFcJiym%2BqeBKV1NRp31ziLtwACej3FjW2hEXNS%2BgwaI7J3xHOezpJVX4UAWUMfcR4ZczWHFOxYhwNsxJzGdUo3wkV4qUV%2FLduXpCmA82tvmKEU0cqwal4z9E5JMStMTSC3yrEZuHmMYLJfGKlQlGWb%2B5%2BPxehOGrzU2kS4fwWQ%2FtyaLshqdME1pwvyVxc5BoUB23CZLLQwxzWex7b38hyOVOq8oEEOqYBkHdmmtStCmL11mUV4mf6k%2B2mEFq15Jw0JxDlCyuA45wcgglPSX3GbB6dnQ8OMvpn%2FDivs4aIjEzWz06gIStyJLcSUkHk6A5ciyy8azPY3f0Dim0Yg5B28dI2dtg7YUa0jjx1iXhQApv9YhLx066oFzh1K0MzN1L2xBlDkYqlMvgvpIthMvuujSSlyI2T3V%2FYMe6ZYeQJWvBqxOzZ9FVfkaD85W9xA4fhXq7IOmZqAH55%2BR%2BrkTzekNCNk2F57Zxd1i4i7Mb%2BKHP0j56a%2FbdXbFnIf81odoBaAEcbneYqgFs6Ncclg5lCjit10%2BSGVKg%2Fo9YFv9ML63%2F1TDZXuzgv5jC6PNK8O%2Fm%2B2C7fCgL1D%2B5YddIHROYEojZrd%2FOXQXzQ9mirwwTHbxMI6E6L0GOqUBLh6mzSawav17Lq2crBLZkUN%2F8KGnzsKlne8mTOgO4JftR0PaL74zD6krLtI3lm61bLDEnA6v9pJmzLjkq8LoW4AUVCwC9wX1Y9HnFf9JUn%2FmNdiR9CvpWh7FzCps9aOu%2FVQV3DzTGnITbtGym7Ga4QRjl3XfuF3IL%2BD4%2F41yeoxlptnMBimfFQ7CpacLr3dfF8C0LIIFfp8SN68LsZUqM2LVcHjG&X-Amz-Signature=fac808364bd7883686cf28046e316ec3710bb72087665da489742d0ca538897c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
