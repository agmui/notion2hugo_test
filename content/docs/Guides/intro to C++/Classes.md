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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT7WAO7O%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPzNQ%2F5llrkEF5frw52ST8XmN3CwplkMp1Zw3kDHAv3AiEAhq%2Fc0%2FqJpw2w69wsCSWGxX9karSEAorCUBgMk8XQBZwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOAVRgp8xGdjkw3PircA3LjLPzxSF6%2BIdRZ3p%2Bg6cGol1mQJsrNuay8qzQWp9WaF%2FNd4mbPqAefLOLphOzPSxuB2C2RPaIVU0TTS3ubx4j9vrhZiCvfdkEdqWZO%2FRi3nauibo9NIsl6KaqT4jlmadXPuWk%2FJwe%2FQowA4w83gNDVzNPZ1XHUWUrViJQ12AxSIGtvMTDEkr5dJ2UbUsI6x7Fb5JhDveaswPEoWnusjSKNwm6g4QwWACKQvJM056IG%2FEg%2FVIIAT%2Bqh4GobfSo%2F0ON1YTH0Xl6mo5tfUyPQ5XAu1KsLVnE%2FdtaOsUlJtBOsXjdKkkpQ5EuJ0lGAqxVAIS%2FKUaSN6%2Fgr1N6nfUNDPUv0cFMtB47eZfOnIQWB6UZKJJbEKGN7C3e1FXoVHKa2iLiF2EymF%2BEehUMcLMy2f5TyjS%2FH%2Fi3imvcxgwXZZHgge6n6dF0LCGuFd1dz7mO7S1NGvISmMYpzG2Phnm%2BGpsZiwGMvu0%2FCv5EqHHucB2B6nJDIeffb5DjecWmGchpb4TDceBq5qv%2F5MmecchH1P1zkAdBc9ewFgTekQj4O0%2FfhsDkv8q6kYpzPy%2FBSh9Y2THxJ%2FjVZbgPb5ifbcKxJkcCS8oWDKDNnT7L8vjbvhb3uo11p77bf9cvCBCBNMMud%2FLwGOqUBcVGEEuGqVR0ZVRtQFw8D27h%2F1TRXOZpVSdsRAGKpa1%2Fcss90eNE5FhrifklNxhk9HwL5VSK7S2Rh4HlTghMPdd073%2BaRlaONgeCyyoMPnEkAI1PrGvfykNcvdXkmv%2F%2BRM3slavLwpGyA38SfuOLqUEO6Jg%2F5r9rkV2ND4Frk97sp%2BDrvnwlJZw19A4FFtrIDeNmsQqfjwMOPsDOVlD344LW9Oj0Z&X-Amz-Signature=c9f36aaac74f1a599818b12908277a0e65e567648adbd79ab35f6d5bda1bce0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
