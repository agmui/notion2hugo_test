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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFJRCMRE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBmi8EVlmh4tgXQJHD3rXdeHfuKLRyBK7HKHUy6FxNkJAiEA0UqAsOLsmq3TiPZLbJlPRPBOW%2Bl%2BLr5RJ77KaHaMdvwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDILaGCnhmZw67csRgCrcAzH%2BAqp1k%2Bi2p4uVIKq1CZGvA3N4vvAtyJr%2B2%2FG0ETobsIvuaUWtg8vSHqCbTAdN96GbjwJBrYAGX6Dq60p3cS2WNSoQvZ1Maj9ex%2BeWcf9Y7U76LNLqIrRdOo2T9p%2BvJ964lcoXLLPD7oz22gpvgvNTa3687xC%2F6UddEJdT76S2AfpsguOeSQrDUkKZc5hc5HbApkQohz82e2SOG1s3mhjeTdHMFqISBt%2FmHn9dYblFiWscaFzsfQu8Xs7s0UHvVC%2FE%2BOfgvI9ceZ8o5CbMGz9V68OoAgj67MX0h7y4nAkJZgUEF5E%2BdnvjqtAj1AJouWrAelQFVUFbySd8TAcfvaSnOZk928tgEr2SOEH44nLDB7eaH%2FJI95o1VtS1vxxERawGuqwFAr1TRSRC03rlRW%2FP5AnysIODLDlMHKNFEP4z4HKCWYwUTLfY82uN5PT2U6%2FtBckTO40YaMMPlxO021PvmxYGSxrPATAcx6ca80B2uPP%2FNGg2YpDTA721CzBMqyizgMDPRnt3ecNpMsToiiR%2FJEwtcKh98zxOc9fFkv65GPiRX%2FD5vwpcJHa2VRQK4eNWcIwIQkNH30ygn05uej3steW5zOuGzxZQlpw9x81ubTUpSbSw0dSwqhMhMJiyrcMGOqUBhSjiYvvC3PW3FuUIFRx%2BLPQ6CAjZluhYwDV3Ylei6GKjaJ3tP5AgFQNxxvKY8hwSXTCknWwgaAn5aNEPNNllLwai%2BUye6rCAiGbLYKrDs%2FtHGTxBa7WLllD2flujlugmBMPIgGjUvtKkxB6Pa0a25l%2B1CnD1UrTQN7E3nReyKEvvfGaHqxu1bvnywaS5ap1f3nf%2BIw%2FnKueW35yFqKMaJA2arSJg&X-Amz-Signature=b28f002630018f1907f7ed9fb529d502cef97723427292e711e8b982c3713e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
