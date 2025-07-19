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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCIVVE4O%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BB6OrWzFF1JjdmSViruzP33odYO4EKMNS6NRFGNrykAiEApD%2FviJp6cgjOZL7AgoRJJH6okUGLNwJOoGVXxQ8G10wqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjSEZYqg22qXeM%2BqSrcA4u5jfSaTS4dIsmChNRTcqsbzCjj5rGg2Jb%2B9B68L3MRyayQhl628LIsx2AdwmsPryLPOgkUEV6mzcn29RxpGBupkopSLl61q7FKCwpVZHi40EXGb%2FaaawpeHWv79ZVztnuGDTq39O9kQkk2aljknv2z%2BnnrWObvejMqtljlBUXsK76T5XEHWhgOnASSno80nxZl3Gn41ZdYSo%2FLor268U9fKSmF%2BaO4U2l3RmwoP0dOUDl8a66i5K0uL61Bp%2FvJyh%2BSllOVcHpZzqYl6FCg8zMYeaorDjpCTnz7Cwu1d3ii7qMTCHX6gNZPU7eaviDZqu59lt9aZ30NKB5MoJ7d6dpq6w4QlcDzijS99jldF%2BwuCg9e3pmDF2siadOMykPyjKrsVkHZX57XoXjvZ9%2FdjmTLN4H0Pkg7UAZ5pz1zLg703NFz4kwmnSBexssdhR5JggxQEPYt%2Fun%2BQoJPLaGE6HGXkCMTUejOR47VzCiIbkZAL7F389GThCCDIXrBescALXt7cF7Q0sPQTjEbNePlAjPoDID%2FcO%2F49XGGBEk3fEOtweMuzRL1pBRsEQBsg1brnFHU%2BHf3rHWPLmgyhoU4lVAUKzevddxpP3%2Bd2ppGGeAdp31lK5%2Fv%2BjKV4uc2MIb278MGOqUBXovNLhGxbhGpoTh2TNXuvHKmOw9Eq6kWkh2%2FXY%2BJAomiCj7clPyVZchRopIAbQWPI2anvBLGHYg0XbaTpRqgDfUdAuVqli%2Bk8DbhBU44oCaWcEADR1NHXOKWMr5rWF1GO5yfw2zb5ZU1O1njEDhKKwpOanYODrDRJ8qSFunaS%2FpOpw%2B7eRHAKZy%2F8l1ttu8J7PzhyWKN7OWVl4YzQguwU2yt7zJA&X-Amz-Signature=9bfdd1444ffac8dde6a97c732db94f3bbeb69958449a77f1f9cd8647add4bbf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
