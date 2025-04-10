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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQRGAUBF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCixkJYjG8qEczb3wZqKkMUplPmLW8AGYaMp2GihdiqNQIgIEnzgVa2aPMmf8lsRx1tpMxfliymjQ%2B%2Bxw2vQc%2FyuAUqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyok2lJ956EltqNICrcAyXmdDlzFvjJYNtvP4JGexhYE%2FeQHF2HR4VI1GucZMFHp%2FkmGIzHsTl7qOGivI90jjXK%2FwXxVKwkHKUc%2BFUIvNYgu43x5tbhGxunNT3R2p3QYzq5xkg5YAouFUykPLGtmIht8W8Tmy%2BEI0XCc70w%2F4AD%2F3lQcuyuTogaheuPG2ZHEWc%2B5AvqhgqBUMj1bvpBvEkpoo2WTPMqrJuuPQRl%2FBjkd5C5e8b6Sq0KbMGR3499IigaBGeDYToFpxgKyNpq%2FEnsY%2FFD3X1n9r%2BMWTuhidNVrFvknSctB2rYDmVExD9szUpf18OZ%2F7FCx7zVzLB6pVacsLhuQAY23UVoLv7hR4deRQE1v%2BOZK1RQI4GgB3%2BtQCdj8HscNlj00fYQpEuHHM%2B%2FYGws%2Bo5NRlNwEpq999pslMgOuFMlZhObqRRCd3opYWl%2FA%2FFpJgqBFd7wUXzlkXOEwQfCTSoKnw9uKHUcbJkHsWuyCjkQSG3pM4IAd0qHUjdA2J9VOdHXu795HOod1GrhF0%2F7M57jFtVlx1dD%2FgOZBhUPHsisq6FadKVtHhfCW9i%2BCZloBkr1%2FxlMhKH7yc1IA9uiBrgV1wcReDzX4nQYGBFFWgjIQTNvNqIkNpvgk0qFVEcgdsji9BaOMMvz3b8GOqUBo6y5d4JeKDw%2F6p5Bg7XxdLcyRAjhqbNd6KW7vFQxo0ATTy7LI6Yc9VaIQuNQKBVzkpwVxs27k5UKmiFtnbZBTlZ0V0nr%2BxmN9FLueDnBkPT2iN5%2FpO%2FTha9zVgknsU7JXH%2FrN1bX%2BqOmzwrd5EPYidSKonDnc%2FqjHsM8ifxF5fsRM0mrsHAssT2D%2F6MbRXO72KOAEo5pJtkPXchVNaKSBPEiDChd&X-Amz-Signature=7aa9023689e8e1c2bc085f14393348e38cdc8ae8017d22999cc94668250adc18&X-Amz-SignedHeaders=host&x-id=GetObject)

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
