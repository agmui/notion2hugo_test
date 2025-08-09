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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVVHSCLB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCbxsWo3DipWmBaVFMK7adHm%2Fdkr%2FxSNjWDaEMIoiSXywIhAJH8v18XZYYKs%2F36G%2BE%2Fk1JxaVqxqemNuVPRxBEDaap%2BKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybVLl0hu6%2BFzDhS30q3ANhZ%2BDVFe012cqpuhTSCfIm%2F6eKd2y%2B6DYUR51ghiM0%2BJZt8U5BTlb0AtcjRd6AeL5ITijm8S1v%2Bl7j4LEbZ7U18ko1GgmNo2H6mUSrH3aAU%2FfgJ4DYAa1Wfbn1idJ3abMCLX5KkJ2Syl0jA%2F4yWY6dpaNbVwhq6B4lFG20R%2ByEfGojMYiJPyO6oYT%2F4SSVaBavKsXZm4h0Qp11DFilHaxTm6fnva%2FjTrWDvhsa4Qz3r2aJSUoa6rcMzRGAdUQs2vYV7qeaO9Ltws1S9WsL5jMi83TwNvqWte%2BPw11P8UKVu0E8ssjP%2FtIezEplswRu19u1IiRYT58vCIrMN8vAbK0kIwQQtvsY5YS3LjTfxXtEEsLTjScEnEC%2By3fnV8pixX5mZr1WJelcnEm2WBqEKrvn3EnnKdN5ciYCFvrhA42bDCmikvUb1htwlCOxk5yKV%2FTgDASSMTyY0SczKI8gApLo4HPM%2B3h%2FYmMp%2FvzeHWIYWbZU2QKMPlqM2IO7HjWqPWK7ziUGo6vKkmMeondc2EisXYGfHH2GtKK3RSk666QSSi9difwRMo9QTJwlGbt4hpT8exPHF6qxkYBEZR7vmvrT8BQeHeahSKkha0VF8YbxSXLU2CfVgQQIOQJd7TCuq9rEBjqkATP%2BOnWPoFzI%2BR%2FJYJkdxnAQv%2Bl4zwBMrn21c21JxOukqnPXf1aiVtO%2BFKYL1EK%2FFr2NxEi%2FHhTKClGORzolFxozA32d17x4xYIcvOfOujZj3H4WpDqzoNz3RnLj%2Fki59M4xPHWPiQIzhVoOVyUaiMNp3GQggQ%2FOQj3Ptff8n9r0jHkIveXOd9miR57EtfgyIe2tsnxkDLO02ExPd0SCcpHtbKsS&X-Amz-Signature=5d974702047a4bd0c95ac013ba8f149c5395ab31cf9fa013d11f0952e2224d6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
