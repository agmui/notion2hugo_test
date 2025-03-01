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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNT5EDDO%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCID9F1ylC58lG%2BqTMiAG5ChGfXGbGQc%2FwkwuO5P1CcB4hAiEA8yCyze7p3DH3CzGj5%2FHWLmadmHQ7Bw0p1VUoMcuOUDIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXLVLOQ3HZ%2Bspo14CrcA6x5ZRsIvY%2Fcds2C0OOsM4rWFr4xaCwRTx%2BTCM6bmqzM%2FW5mSLaR6Nu6FxwVeSWeuCLnNZot1pbMioDcXxQDQTvJWfrkhZ65B3nuT8wa4VGtwzyWBmnV7Q7USIXrqw2WOawDKVexFuTGhQJFNg0nL25VOQLMCCJuVUFGFqEA2Oj8zWWOfrisH5DdGbLzD3009UtCFoVqwC7CHWvXlFEzJIATsZvPmo4LNS0b7hTLv%2BtqonzgiQ5IGRv1e9vyfWdP5LizhvP2ocvzOmCtwJAXLFxf1cR29e7KGICBPLu7FANaLu8hASyfz6Yd2H4SEVkCPJYJBVw01HCvXmheqlSj5%2FXaWjnbgfh%2Bc3XE7vUHeOAK0oXOjjxxmM0dD0xAdsoLiAH9jOyZfr%2BGNubHexC%2BYSXM5bOyAJ3OfCgT2KcIKKdEGcnvAcwQJSVJyDeKxKI2FxDi9qDdK0j7Zmpsh2GEDGLlXs7WgubLUg7QGjwarlgwX9H5cnh48vIIkhn8e%2BnHYA246ItK94PPaKEwxUcCqAgfZDMmRF4Yr8e6LcewHlk8YhnaDOC6NInPmphoCX8PnibbtecbtCoi2pNQ1fcp1PniIRTdoXzgffQ2%2B0BC9abcIMVu2xXqeRdg7bRqMKqQir4GOqUBWNZS9RVL4WcIx5IohZAQ1PRO0LcFwgUymjDk%2BadwtwDmEA0O3Knl77oEKwmaexqjjsNDfax9w7HuDq3LuXL6jjfxhlMcrT0XKZKlNjxp08CmPf5uF9PU7bfaSD59XD4WYqz59a1kvujWvAtKyiC%2FADVZxkyqy6bS6A7rbO5L2Xl%2Fw487hgTxcsq95x2oTQiwkDvZjpO%2FF93p7Q4RAM2igMb3PfIf&X-Amz-Signature=2cc7537b792709d39163fb6965182f5d8361ecb4d4fcae44375e0836a7bcf865&X-Amz-SignedHeaders=host&x-id=GetObject)

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
