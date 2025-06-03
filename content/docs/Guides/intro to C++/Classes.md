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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUNWNXPA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQC2G73uexGqNgSOc1pqjXm9DWeFbOhVKi5xJMjOwRfK7wIgYlg9hW4Xxrvv3h6FoOEVLM6LEqjGyfE8mYdo0aawogkq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDG2cUQyezwRIh7Z4TCrcA2FOUPlZSICSN%2FUppshSaqRVn%2FP4HExB62DEItUuEqtkdwbbc847mHqMgwZMQmhFvmW9tr6%2FkEoiK349UlFqEg2MFLbmVsxJhrtVzogNcUkPEk7HEZwVn%2B8q6u3PFLkkkVCsz1FxBmhEXDCXJyBUdGWJXBDSi56is9humpVhKjeL41tS56pKJVv4NBEKtZI7LrSUVMp%2F9yZloB4%2BoDDzIa0aumoJYvVYf1jiXF2EOucMh7drTdMvNan5HNP4as5vcSLcBoJoZpYRI%2Brhu5oSVRcMkhddcs93%2FePTD1UXrpetRTOXrAE0ik25%2BzxLa0CLDqp698K6Lf%2FoYBUlSFBe5qukdh%2FTKhKbzJ8iQ888QdRLIfS%2FDt4f%2FCIb7lEC4bw52hhzOFBQImjDhOtrZi73Rk2DKKqIeq4%2BdQ4KW3l3dvCnskcyOf2QYrLCkdIJjJaut068hF7P%2FwYRZ%2FwH0OZSE%2FbsCQ%2FVvUUhjY5sUnDZwEXpEjxUgehkMtlQq4YHiChTYG9A5IFNl96XhiNk8KFPAsKAPfk6EbzdPbVfDnFHkZFyQ6vPbOspjul7qhFs7NWh0o0EnPNjyDsubYgdqrWMFCBtDAlPpohFWmlNOb5siafg8ufYDk6A7MfvCwYMMKjF%2BsEGOqUB78ErEaooUHSh0wdUFb8Rhp6DDBligwV8YH4qC%2BRtzbFbK8wmU8dfi4I80%2FvHjFy0db0825VKEE4QOZOdKnXHs1y6FVWlL34R0jY4vxw7Z5JaBvXati1isK%2B%2F2FncNz5TF4hw%2BC2URUeJcA%2BDWeyoHgLcjuxiACrpXuuTUd6u6Z3Ym75MTFVsv%2BiWrGBsc6f1Jrh%2FyhbivwD6aM4g7gPzXeJdLXgn&X-Amz-Signature=bb83568783d1243cfe9b6b5e1374bcb4fb0649ca3c76e6ff57267a4308ef4910&X-Amz-SignedHeaders=host&x-id=GetObject)

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
