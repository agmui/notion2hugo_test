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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCGMIQQG%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPxAuLUbvseuRWaftoMwbrJu8mozJrMPwpscXS%2FNVsbQIgclTvHkZ13OgAlnIdY3LPdbRhbDnG34m%2BCZY2hVPKlTQqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdzlkVI1JYhc%2Bds%2FSrcA4wbTDkMcALU%2BODTvCJcfEtqm238vsyJE9EwavDjVTmK5Uqaxfrd81uL5PUTzE35zYuUYIRqrys2osLw5jlAWbRIyB%2FoJqHvlMmtb4Tj0Y8AfRedUJNcqW3a5Z%2BnwB4rbcxT6Eg8HRoje%2FVx%2F45Rr0UsIM%2FSMrgT3mVkkblEUjOiIeP9poxvQO67ll39lMicghvXgododl8RoHx1N402WSnSHAMr4RBPpKlirBBBy%2BASZD7kEbflCXzwTRG121NxOYl9nnkZhVogF9XXN3a80L2TQpmQnzYXXk29l%2FZ3gzA6GaUE0UNDZZdHXrgefHlgJNHyYApilFUWuyWw0UDF0t2QJh%2BUZ0UdnI3zUPjZCu%2BDWih%2F%2FqICEqyrapZz%2Br9%2B6BOJN2RQqOKIvd3Ik8S0J3gbr5N0aoirrWuIzFvK0xXYetl5DF%2BsQoBlACtAKJWp8Ar3m25qQ0dfrFcyUFqDUI7wkVeuV0V4WNY5Ip7B0YxeceMN6NoDIJJmUX%2B76gNj2w44Seuef7GG1EmUVC0kXH7Ips7VhwOj6xyAfDJS0%2FoFTupNsO4SyumNFlJTFHtuzR4yftsafFfe59euSzpEXBBkZC4A3ilwMI1P9fT4kASZ%2BR3S6XYC%2FonCtGFqMKWa8LwGOqUBOn%2F%2Ft17aSWqiMarXCGs2sar4s3SaZhJ1u4Z%2FTWCss0hVa09zLWDjv4fUJxYM5rSPZPCO1CpNk9JUb0YDXzn2gl681fHIMOycs9WJe0tcZMdc9397SSsBbd55TyVyqLkn4uJiTqdB2OTvr5uhneqKuknc1cZIaJMBsBHs7DUzIxcQz%2Bfbx6K3JD3JLbOB%2BiMKlNPF1D5CLUa0Z9%2BvM%2BrkFzg75qsb&X-Amz-Signature=35a35344d8b60d0de29dbe3306ee36bf64406cf0521f16725d333f29d5308cca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
