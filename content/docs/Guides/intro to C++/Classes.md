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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AHVGQQE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuLBEtpr1nAKIHjnyGz6eJQgQ%2FBxkkcSHa7MdzyOdxjAiAYFtdf2g%2FMLCFUFYQoeNzMtz5P4El0APFzc5t1O4NxZir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMTXJIncK3K6dSib7OKtwDTukv8yd6%2BlCig%2FHqf54GsnqJFtOkGJ3d4J2Yx1LubugUkrglH246sD7kOphzaFerR9cPwvamwoLRaIN%2BvaVy%2FSthSy%2BoR6qMHMy10hRiYmPGt7SWWhl3rUJJA%2BmsvVNKCj5XjRzUkTe1o9F1C1r4oo38CR5%2B0VKyRYDK3ScAST9yhtlYcPCh2Qtn%2FtSm7MtVGy9yPvhy11PnpFYWZVbmf96cF7lXJeEbdSb8O%2FZzbQJSGEeAf9Bc765GFMFfxSagW383JASZvkiju0%2FC9kyA51GHXQ9uaqlCaGywcKb11HjfAjIxdQPPAFpE9CoGZ8EpLFtsGY5MdK9BN7zBQT72myY45J%2BkYBa1hDVHwXIQl6HhP9%2Fxb01jqti3qG0zMIBkJMAs6l51eDiCL0lzPWM%2Fn3Pwk91PbWJv4poaWAurHp0tYVO44SmH3Z9wHuga7KP1rzPb4HuHBaRlLxFr6wJL8TxT1l2AHEMqCvvo%2FEuiowAx4E2y%2FNzodefSQx1ZWuRi0gfSBOWchAHFTrBdiBAernQbHSWd0X9jMxrhxSTG0AIgX2Hrj%2B94NF95QWaCWAdXz3whOVi%2F2RqkK%2FhuKLy89Ti7dk5%2FujuKLpXfR2w%2FrRnmiMH2laPZcDdN878wqL%2B1wAY6pgEVuXC8FgrdqFV6GcuM67%2BY79prZsiALYa5OKSBiLbrCfNkIIiV1kbP%2Fqi2qB2e10BpTpGaQQrrwmdIB0K2ynlnEK4EJxb6COo0gJc6RoP66BvNfpe6x7pu1qnw46GslS2%2FhASYocmAE3hfLx%2FeJHtkYoqUCEle7shct5RH23nTKgvF2DDfDweYkm9A1t9yN5WF02pNL4wJ0N8Ga5rRCebnKSzeHujt&X-Amz-Signature=16b78cc5a05f43871800677ef5bbf0da5a0b24f57091a84b4a9eaec0ffbbdf49&X-Amz-SignedHeaders=host&x-id=GetObject)

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
