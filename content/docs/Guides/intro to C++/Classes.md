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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEB4F6OK%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDmaj%2BGAssLD8bqen2TWLbirVLtM3BykbYTALOHtb6mlAiEA29jvEsMklgiMqxHhHFfhEIoyuO9ePYQ7E%2FJAq4KaoScq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIgAzwgS7g9bwTTq7SrcA%2FYOXenH54i%2FhdDdaEia2mBn%2BXEP5QfpuCh%2FgFe0eaeRQtdSUA3jJSpLB6qL3r2beSgxE9%2BsRCsXY2HkmO6J%2Buf9BIEMIXriwqZnESQRJUcfgSLeFMR29kqiNfYEfPnUMyWSRdWq1WfrOXhI8J%2BYOIWuJTIii6LirqzPGxr%2BxzEmYYO%2BiZshhmtfqfRxSC%2Fp3PepBzix%2BTTZT%2FBmYCHc8ACU6zuTV%2FX9BC%2F2qjjSKJ3hnR9XO6CMB6%2FhVGxpq77mSepTQfwUQGFwE1jywck1IfkwfOSP0Sxh0GcQrOVaszbs7wz%2F0%2BN6Z3ZHLaRpAo40jFlcRGY9A4GSZT1VJJlQnNCBVzD1V0AXsoV1H3MUhoCsmWSGGKZ5%2FCArIXj0SBicgIE4U6k4IYsU%2Fowe3EbJfr%2BK%2BZadnfbl78yKQ5vgckxHyQ%2FRwdec5%2FQ3PgxYBhJQt2MVC85OfhQJYeKyfVtO9xclNutwmhiWRXqE12cUCApnWNT62VZJWVpjrG3cL0CZmPbxhZnVeQ2956gzgbcqMly6i7oGFiCbxAC3F49%2FArH2bUJuzJZUsiOhGB%2BaR%2F35aLln56rJaPhRp2I76YxiZjO8sW1Y0f8mf%2BlZe7F0n%2BO8Ls0Yo%2FBlDWNLLlZAMMS7%2Fr0GOqUBcymFTrF8Cf7yyIilLsV98lIcELkRh%2Btx4WKGu65wzRxmPJzKPmE1Ctk8dRd83idAUQJrOMduSKMMkmsCO18vtVzIlXFYlFgOGZ3IL8%2B7fj74eOFV0gs%2Bs7acUf2Zh%2B16cK0fBEWrq5W2tylphrXOO%2FDx%2FGk75wcbyyEmeqUD2Qs9HpeCx7NjkBxCUGkKH62kyTxKiP75wEdSKHT8XYjCviXgUhna&X-Amz-Signature=b56a04c07c40d28b5cfdb769eb9968e90fb02dac462ee3ad59ee1c42537daa97&X-Amz-SignedHeaders=host&x-id=GetObject)

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
