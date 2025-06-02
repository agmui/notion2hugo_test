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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QTOSHZ6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFg8NJ4fSGIeuUBvhSCOQJhu5HRWEConZAiLP1PcVkLPAiBVbJphh5np1kwHEwI%2FymUWVx9I6r2YkJMVaFhvl8rsgCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzX9wjJ5H3zqYhkfeKtwDEakkS4yvw89jNzmIVV0Er%2FpIo0ogllED7lVSnGJaS4t4SOi%2Bjh8430lZYM7OjTe4CsCwq7xjs1BBPLAUI9kk7kCXf3rjbRxiRiuSqIJ3aMLhYBZHFpaIrygkuhXAysz7VsWGtNL6GZ249G6V2wlNRupmgsSchEfrUBOQ%2BG%2FndhKrUKVxFOWefMepTVONI4NAS1oltkNPJxJG36qsf6HK2%2B4KZ6vR07yqAh6b%2Bd8YNnFkEllj84m0Npr%2BBNCKXQGaw6KYVW5Ro0HpfEaUiSB7AAFZB7GZez%2FlzACDcOFee8wP68Pep1YRbbWA%2FNMyBzZxs7CnvciYUtp7RIArjHIbV5P%2FheBFY2M2onwgMr%2FUKFqXBzVkLkdQBUMfw2LL1aZJQHwLFy8%2FKvPHhY2pNPkT%2Fc0j3DISZ%2B6n%2BoiNKMyLAJSRWhJjggHF8D50BHs5pi10hbY9AwE6Y17L1tNNu54F%2FPcYFz0InIUpfnRCJwQ3V6x6OjyS0X3Y%2F9f%2Fx2ZnQUsOcg4OfwXcojNBQaYD4XJoeOACxvAhis93ywwBG%2FGDgp2Bep0DS2CabOvLkMBqW5t5djzHDvpiYXtFOccQYojv2h5QMl%2BpgvENPuaGMyH0vqUcH8pXNmFiUbTx57owiuL3wQY6pgHdsNLo7qTIasvtQjnx85yR5%2FXcizf2ZHVYIW9qsliI5zEKoJjVsr7LTItY659lg08He1gKuvf%2F7WRR8mpV9PoCm39t7w0Mn41zNTT%2F5iuI8v3oPaW04EqdmIk8W%2F6RtG97GPHtZvFXJcHDAEhzXB2hr2HbA%2B7cKxp8VnsRkJNNDCXJwCssu%2Frs%2BdtYjuV%2Fksfc5f0CxBUJ6GrS00T28JHo5HGAf6Ej&X-Amz-Signature=beccb5226ed828879a26ba2fbe62aa269409cc746385d3e8689fe7a8c36f4c5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
