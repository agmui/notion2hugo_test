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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647RA5GBA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIBReebiLnhWKSinUshMpnoF%2FrxqKWM396xtrWrM9RkCEAiAbol%2Ffhx8MwROo%2FULhCAJSzI%2BaE9izs38iqBx9WyF56iqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1xt4LEleP27jK1%2B%2BKtwDbJi%2FC5il2IhHfX5Ij%2BOmdvJfgGhjmHqbchmI%2B8i%2F9A73X3oF%2FKUvThHl0puTbSIinReJMYoFv%2FA6mF3Dt4LSsVcBhYjVEjSrhK%2BbH%2BGghkYPQJLuCMpuX1vwImPfvldutlY78pp13TUCNFzrm2BnKMLnGyjrZ%2BUT7mVj0232tyx5XIKOA2KbHcCNw%2FCPQ2M%2F7b7XEtf3ewMFu1OXeZ0l1Xtd%2B2jgZsbp48oNzv1apP6gTEPBBKqAD2uucZh1t2wBvk8rkANb5S8BKRExFa65BjQU4yXJdWlV7Kdmko2whSTg1Rt%2FPesURBViN2bBA33%2BjSxOt44K4a0kW3PO61HIezPGirq5DFw2puqXfME%2Fk3nsDnRPl%2BuCTlpGWhduDd%2F%2FekhKuUempbrDIu6fAYe%2BcpYMVNDNvyRBdinz9jm4O7rxYwMPxGoNdBXeos5n9Lv2yuLd4oW%2BXhNL3AX2%2Fj9ciU2DFpUIZCrboa9i92cX9UCFpJa%2BbGI%2BtGjjB8W1Q7Y8bmNO%2FDMA8%2BAsulFAMToqY1GQITfKH88kAF1OQ%2BILB%2FaH6YT2md31tjfu7bdBg5cY4wkE6d0GDluizyoXh%2BUki%2BEUED1pSotQ6hN89ntbllESMpFfIMgNe2sTF6Awo6uewAY6pgFjXZapXhoj63u6g0XD4otzd4SMHiZ5YHmiuTbvHYCzrwAyPnrkmjk9PRCC5lmmVlaDpXudUmKdv1yvbJnpBF6l002zYn779l55l07WkFni5HsojMJ6qx80YCj1VpfRi35Z92%2BfXqrpwQdi6LuW7Mdak1L5btpXJ8brQSfyKGfcilRuEN1eXGqwvStBeuoGuqqff9VNYsOF4UKUoDL0%2BiIrr7Xww90z&X-Amz-Signature=8c7c204780e4fe959a43011db28a7f836eb9d02753ef6e5119638f4e6fe6f2d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
