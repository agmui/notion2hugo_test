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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466527I3VWH%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDY1cywKsLshmCGvdtax4qEN%2B4yyL4hMaH53Q4arr1%2FRAiEAmyn%2F%2B24S6dbDeOSLvxuO%2B1kxI16Q%2Fd2yZdWaQS%2BBLIgqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASlA77PYoheSEHevyrcA%2B49Q8ThTEOkT35gFXlZ%2Fd4MLZFcpEVdQtk%2FlfHvhgZXNmcQs52LNHUz9nkhRmg40yEed2U%2Fsq4k%2B7osIG%2F1v%2FtZJGVt9%2BRWmfWNpmBPpBUoZeZna9qfu%2BEUNXl4a1DsY4Saru2hbh4wsjQKb10fCte02PUZ6U2i7nnCT8yF9Tbou1blbq%2Fr2a8N3e9SEDCbruLFqW5t%2FLHcwBRaIsOaZN1K0%2Fk8iEx%2BpWIKjBcsXyeu7AZEEdepcGba%2BJmtVXU65b49Qfh3nTfWKsc1wm%2FEdjlL3KSgMVSahc20%2Bx24cBccBnjZ1D%2BsGTdNtUcnrn8fcPDH9XCGa1k1%2BeutYK%2FG6VyIMzkEnwjUzJyhCPm1h6Lbw%2FpDcDqESSckjEJHTFQ1fK8AlEhBkst8ku%2Bcd2kho0kzaQ%2ByN2i5k2sr6HYaS0kEFoQ868y1%2FQR%2BXLiqrxxsvwxuYlYJjDInn1lgdyMmNAAEV%2FmoZKYIMvuluiQwJ5889Kql9OrKmTrS2m8eChMS8VlUFbTFeMjzgbbtnVYKnEZsNhY%2F8fLUNKF2RscNoEoml0r06y2I09QL7exlm1KzrHItEWdFnIe7fqqhcmkel%2FOdcPZ6P6sN7tv0N2L20%2BFvyZn%2Bn%2FwvmDWZMWPvMOar3sIGOqUBxqAFYJcnma0tf6m7UixUdOzI94CLwEvc2X4IoktJkgwygx%2Fh25iuKcjCNY1oP%2Bf6uYXDJC%2Fk17RSglanT932OX5xRuXmCb9VhLKJTnjyLkpv8%2FkPzw%2FadLO8ZR3RiVPbvRfyLJWD%2Bzdaq%2BgdAa35a41DPD2sgJpEFPW1QAOMlAqPVTAzKR00fBU6lFtKXndVCTPPD47P7Qv64VD9Pn%2BSXVDWZ8Ta&X-Amz-Signature=112544aa756facef6c6bad17eb3f4c5c2fa02cf98fef22101aaa409367f22850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
