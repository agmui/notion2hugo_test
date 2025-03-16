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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623BZFMS2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDFt73sJjb4mjZ%2FTEpoCtenKoz0ED8vqU3U5EA%2FpgE1AiEA4M31KHNYNw%2B8kvAQrDt4%2B3jlRo%2BspZJ9XwCUIsoFEcUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHu%2BoE0r3mCNzWQ91SrcA7gHksl7JTg0AjngDHXeOUWLnNC7W%2FQX%2FBe5E9LAjQvIL%2BkC2wEG%2B0QtcWkVqpmPSQPejMo25KstYYkWYmM17GveMXqY2V%2BiTpkeFxrcL4M51qhK83Cet3mKmgeSRBiT8PNZ4qCXAp3OjlBRqNqAk33LUPG%2BhAQGbi88q4B6zgPDFfc%2FJPvZGrV3Mn50cU8KIIbjhmFiyl2OMReQUgMbofEVskM%2B6ZHenLWx%2BYCB6w2GnJ9Wc0uvq2Bse0BSnsOixBAuuz1lmY0Kxh0bDdfz6y7GKnLTBXKofWe4HdqNyM%2FdS6NfAHSiLvFnIzHqka7O0%2BUAqePMFtX97wzYjkPHCNYfeoglSJQ8%2FzYiJfX8tDp3f%2Fmfc4TEIHC6ZuANbzn3rZhL0e5vvcf5pIv5KVh84p4yBlE2uXrZmsmEIZzu5RI43ntpKRkAFp8GCjUBq7%2Fa%2FFwULGyaXP3%2BFKmfpVK8qr7SpGz%2F%2FvLp1wTV8ANXCMkrESH%2BP94oyu%2FXqef2SiHM5ntEfRKsX2GwtKV%2FeZJMPC8PFmAE3mhiWnNmaGayvJtjFVLNuugsdK06tyjPjQW1CRc5Sz0NF0%2FC1Mb6fb01Utw7FQgdajfW8XzYAhC4CLlLOkKCm1DKdmHytjunMLDq2b4GOqUB9%2Fhtk3FZUSfk0Ac7t0bOtu26RbEtMTm9dATSIRaaEC01zatsSejD5JRvAgzp7b7yfe7BUI20SDBlw%2BeXPjjYMnxGHusTDH2F%2BnyGo8kkTG55RxjgEyTlkYZ6a1CxJQxknVUmGgCkSsD5Pe6U1Oar1uGvxvV%2BH5IwGZRo%2FInC3CZ%2BYmjBYbhm375NcvB485FcmkhIp7bOeusNHwtBTM91lmC7czOR&X-Amz-Signature=04cffda973d83566857a675c3b4af2093802b96189854129340414878221d852&X-Amz-SignedHeaders=host&x-id=GetObject)

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
