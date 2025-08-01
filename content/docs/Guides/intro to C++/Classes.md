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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWO7EOLX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhLQLpOxjdnIx8O6KI79fZ3pPkG1aBbNqFc9U7b0YrUAiAowyYaz9fPwkZCSLRDqlVPoB2cOk0eALUD91yQeQuwtSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML7r4NjLO8xjvDQIfKtwDRvyI2BRfB%2BCFEGWe%2B93cpC0xns%2BS%2BbZwLwW6QguVk%2FruYnzbWpQHCCAebLPIwoSradENKFy2s6oc6fXo%2B6RS3%2BwDlLn1mO%2F22c5DIHJdGBKYvNTfSekb9NRr2%2BceMmX5W3B31uk5V2dfkqBRuxHTxHrdzETmyeKtdcFi9KLTn4DrQANnkUXqQoHc14DCZZR3ntyRkETunHbaRvON1%2Be1wEeu0AW24pL%2BM2VvmEB9qfnFlA7V%2BLg7PWvZ2wzKNJAUHuHORVcEKsJMrlG3mFRGGaoKKXV7glayvM4rObmVsb6uGi8%2FGy9PebiPfHS2TW4Pxv%2FlWB5AigsegEJnBJa%2BsUFPR0i4Je8ItYVgwUraVo5179OKP1l0UtJKL3Cb7eFG%2F7eC8mCY29VtZzE%2FzJbE2JqrYGYViVPiDN%2B2MNLEXF1XUAmNcCR%2BGBx7AvG%2BnJ740X5f7nl99%2B5AwjlBELw93ZFVKVf%2FaFPA%2BoKYMR8XP10Sr0XTtEQbCnhHWNObLeczazGrtLrE0dZAza%2BpN0ZwxEMnMGWM6Jww3mvQYSh047W5b9%2BzG8TC41o%2B13cJ2rqOraCQ%2FJIHjNe6aklr2%2BZW%2BCI%2B789jZJG9R%2BzgTW4Upuvf9k2D7V5SAgYBz4Iw5rWyxAY6pgGaEU%2BqYlexuThImhJpcTJ858gcTxsJpeW5B0DiKlFFCd2url2HTMnX31ymy9tLYwx9wSb4GtZr0TllgFKQMcPeQ59ZZTllQuOICGAn3CL7t3tutK6C7XerNztSCfSR25JrrfyJBaBuRKaHo2SaO10N9bSuSbdVme1WZ89jSD5Ei4nHhC0gOStPymRDZkXePSRKsRj4lOJ%2FOMG5b9wg%2F8gdzoz%2FDSAb&X-Amz-Signature=7d3cf0b11612e5ebe00a06223867565519d41dfb861f5f1fe68a62af4eae5db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
