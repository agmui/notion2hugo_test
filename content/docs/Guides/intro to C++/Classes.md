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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNMGOQ5V%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpg62htZppON6okl2ZDNY8y1XvcMTEg8goORNSbfclZAiEAipSUS1Hd8q2vKWucid0cSVgpVo2gK047EVueS7UtQi8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDL4haB1y6z79DR0riSrcA5b31xk5hMiirdCrHowZszRPg23eW6saKcsPcDE6wUIgE%2F2wsdLdZ3PHNxH1TOSOZSHbuTT3iAEUHa%2BZ5wEfpMss1oHSN1McUYYXyzLAOZqMkG1GT5J%2FKh%2F8GPOqrwtH0F2wwDqrPwjyZnEc3ePFrKpyZSonm1G%2FQAf1ZN6SYGtf%2BKdZyLLvyuQTTf8z0Q%2BvYSqnjXxM%2F5LGCUADtfvmOkTsM5Crby%2F%2FCt%2FryWfb9jDDUnzaUOol1GiaBDSEucisRncq2bqpff2W74Rtd3GBOzqzJtM1B3i2BgEOTKVvcN%2F2mfdbtaE61TWu%2FrMPIJrSYbwneYGYEyiMKaSL8eOJj2KxFzQUIcUYuC0edZtnli%2FuprPioKJ2i9%2FKY4qMb%2BvPowtgWZ3xEA%2BJo2J9YExky%2Bhm9FV8itpuhpA04zk%2BR4LLC%2F%2FH4vlm5I3%2F2K0T2E%2BEpt3sPWxjn%2Fx0BAyjhHrmn%2FgroYcjKZeC2fXn1ED7BNhEHWwj3hbJkws2uu6uILfqvyKyolc6704ul2L713jsP8LW5JFiGxynCacF2VBonnYi14s%2Fpd2%2BOK7NAX5rQSsW7VjVSbzX8CyLHVzV7grr4LWHZYVqCi4oaArlqupyuE8TS8JjN3ROuQpl0YpwMM%2F43MEGOqUBOWYMJMuP%2BzhkmQa7wwCwv1AI7Zi5Wi%2FPyc4ieA5N3ff0eoisnu7dGgD47LvuKgm9QR8VG7H97MP7cZpoI0lKOnyEWPBzU4akbnRSomADk9QNf964R4iP2usxSLPEVq9W2WKAB4dG9VYw7dHRWQ6T8Gt17rYAM2oWpEfvsGFEQg%2Fxua8L869aHoVyVlsKR0D8z0No2HJiSM%2BUSOteYVIV471E3pdX&X-Amz-Signature=6b8e3f2f0a641f06b1da6d7ca5082398aa5dad8094d201bd5c5fd397ed581d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
