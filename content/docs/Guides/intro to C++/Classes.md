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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653TXO6TZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbgq%2FiAGlrnzhRU0wqPwqv1N%2FvyNE91pQ1kb4dlalDUgIgOb3PIVZyCpMPjDs5gghiW0HXIjQZIN7pDxFTHUNrFcoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdmiQ9bKvd22oq%2BfSrcA34wxL9XJMtYQdXWxNVgoG%2BwQRcvILNrUM0eKPAF9aXfoNGChbS4F1mIv8poJJayCXSiseF%2Bz4BrUbiGbAqBff0BO7dj8%2B854M800VBHMwYBv3B%2FYcMM%2Bs2uqr%2Bewg9%2FEO%2BkEYudlQFMqFUke7Icxhf1KxkMkkAxVOcpwyEsZrcY8frRkXKPBjN9YQ%2B1KtHiBUOYtoBWWX0O2JbQzHaOxPtNKmA2ggRGox3W3hskVfxBLtDCUUTxDeMK4gztHLYXvNoIzk7snIAypiUBB6Xehs%2BCKOIAhXaijTbSqyUdCAzjPGo4DeYSKQdb2eOnFMaxF8EXA6eYTYv%2FBlWWj%2BJASqkXxos%2FjFZFGHnK4%2BnGqPvX9vTgTCtWI9S2jd8w4uKTMeWEJxn8wV0OPDx58eSBXTmVg9rd8TRRX1H8Yp5xv03j95x8OZ1vYLp3k41hK3nMoYtcpAizGyTC%2FtxwWiZBmeFYIy7evvKv0Rl7O%2FB2GE%2FKHT%2FaDeJPquQ90SaoQmM49Fh61vLSa%2FpJD54LINPNCFzj1VMj96hLkuOpVeCy%2Fl4%2Fs1dcATTIaJgdHzBa8HdhpnCxzKD86IgTSaRt4Bt9peDG6fKfBSM2hvKDUHoLOP0BJvFgMwj22%2BGbGLV1MLDxgL8GOqUBEXpc6i2WIpF4XBN2dqvLAWwhqiJsQ4OhqrPMHc0AQc8DlK%2FKyJ6OEqDcaaKBcwKQbYDpYpL7k%2FFQIdpWGE8Xglkwc1pGLC3wgoEERkTgPTDrxPM9zJvl2Xe9TXK1DbiGjsAIUbk%2BPGgnVBPgwIXVTfF5g%2FemZdjGO2ryM4ThpvUjhgwj8Mn4jZrXlFeqUQrNX1bMuPulyIkqkJ2BK4om2gLLO0R1&X-Amz-Signature=50bd111bf7e8b50896ef8435382d24755c5f30cb9a3cbd3fc485d7ecbe2de3ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
