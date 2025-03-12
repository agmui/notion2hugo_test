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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUOZVLWA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCCRCWMqpsREkHw3TAXydcXS%2BqCgI3NmriEOZMpTqsEPgIgMUlXTTgyA72hMBmlZ5x6ow%2F%2B90C0DwpEwZJACJZ3n%2BoqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAddTBPn%2FLjfhEFjnircA2uGNPGZz27%2B1n6PuiV0jw3%2Fg6jn4byQnbdmIJy4%2F71myLgd2bo8ssHqPvdt6MkEf6ntbwz0cN8bDe9PNt1L1%2BOGsJ%2BKY018OsoRK5kIBbaIh9raavtZe%2BTobOdfSE4%2FFSYQbHrwO8ZQvrKBEH1AOguD5UOVH%2FLoKEcaJFCtfqCwMd5NyaNMfvIjEJh268cUX0tqBzH%2FK7BFL3yy2qBu6p9NSXAWk%2F9%2FMGGMo44Sa08QILdbMISjgcCVhSJ%2F6biGHIY2KdBIkvK0DaVZEhGNkOgEt7y%2Br8dd6H4QHH5CtHsrp9JmHsmWG02kCTQIFlJYZkPt4G1D%2BNE43R6iuiNrWrvJ%2B4F6RyeQbfLJv8YmdeM0dtAiBGzAvwYtHoB0ghFKS2CkgKselglx4%2FGt3Gjri%2FIncU%2Feb0RSfd17GpsYeJxd6SJ6y0c3zSZylRds%2F5sylkhcG%2B0dAEGiy0z1ftSecwPpyXfF3oNZLIk8X2wgHs%2FSbUpH%2FxaaQxOvj62J9viVzjAQE0JOsZ%2FpSBmRKsB%2FW0POyfATtw8GzT%2B%2FjBeSCLKP2%2B3dwBMIERlzZxCxdeN9YzLnPThdBHLNv6P8x2tteG0LPj76l36H8gUFAyrWrTvHZQTeTqKddsQF4L3jMLGOw74GOqUBrrtmPpBdkomc7e0MJh5L2lDAnJMapc8x6fS0tcnB9ASvl17CEH19xANsy2cpgRT8YMWZGxqXBzqzHimZ8Rl6k9MAnvpF7wZqXC9mJS8U8JjObgfxNjshU29DPDFczs9M3%2BoMXGoAsbB0%2FIAq%2Bh2EGqoCHkTi1UNo8viovFPZBVtwc8iORwwyHfVOt6nQn4eOEb1QI%2BrGgUBH5a7r%2BAYQdlxI%2FTE4&X-Amz-Signature=e42aa9ba306f3b9e53db70a6d90dce241df5c0663dc89d8c1aa9d248c48e45a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
