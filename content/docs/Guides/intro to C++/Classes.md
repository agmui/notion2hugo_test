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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XOIASCU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJyD09NtrjtMoyBzsrhFq19z%2B7yt7sMnXshd3IPP18MAiAIBkmha%2BHVvEr3HP5O0817BfOGvOCmNy2v8UR42VTHzCr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMhnNej1Ffjn%2FKLMilKtwDGzlmRDsKc7u3vPbD%2FC3uRhqetrHfogHvR6usXGYLv%2B0a8gEHKPXi%2FZtOo8eRBm4W0%2BV02wrPCGcYDR447AvZ8StjdW8nfI6Be4IFqnEbM51ceyIO2ooejkE%2BdxxhJKhH2C86y%2BZRNcfWefgi4VheOdUV4Q0RXZR2Qtac6unxtsQC3tPj0CNr6X%2FEwj%2Bs%2BVVffv8LvtzQ4f4ro3WFMUKh4xLMaPwppgYAVqqQBCO7LesuYcuL9iLIYw9S2Yk%2BxoHCLUDzA3k9mNhCBrU1S3PzUes4%2B8BSkYPpaFFLuJbYKCUICxKlxmNIINhLVMH5vFYFGqJ%2BixRxyczm%2F5i7pg7ScuTh51neR4C4mvhUXaOc5Yx3s7lNUAEplmNy%2FGTJdNHmJ1ysjFApIA7z0YI%2BHKm2S59slA2cXWkXvyVftat1fsQpSsVPjM6fMnXSxvVDxiHnvCbc9xTmhCVqo1LnFPr1bQkXtjQXuaPpIb7f1Vl1FHFrvRXe0nI3Q2nhS8vLuUNhFe66HC9nqjU%2B%2BtDhf35z4FlQQFJ3ZQZ6kSjKSlEEKdjaomArZ6Q1G46bjPAB%2BiJ%2BT1GMdOFhKvlgJ%2F0KloA8aqI1MJOxNUB6%2Bq7xJSOUs93nqPtQCtGr0OEqbJkw%2BuCivgY6pgFi5tJQpANhFMuUVloWin6%2BOpzTuQTJTmLdB680%2BOXh847Mq%2F3vnSSnhc9Xx3Eh43ZlMUaYSejsTSdEIq9OopNphG9ioKqb1zq3%2BaykNd1BIxe%2FbcJMxX82CIztFr496dQEHVOWjWyNE7SRpa84%2Bbq0a7qzsxNIbedLmUlhosZOkHi46ZQnLaJM1zdZwWCBp7pl8BGI0pmH7PCzh9j%2Br%2B%2FpM%2BzBzK%2Fd&X-Amz-Signature=194bfb2874c41d8c60d90ce1fe80eb3c0f5fd2433bfcb102264ad94e340b6ee5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
