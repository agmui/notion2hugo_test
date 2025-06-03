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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NPGY24%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDzH2kkdsTDwSn%2BTk1h7vEcfRl2NkV9bjfcKmrUhLJPvgIhAPf0XrA1Y%2FrBpr%2FjwZ0YEMh6OgzD1%2BF7NXwdJX4G8uVfKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5melVC7Hp0tuaOeQq3AMfebz40KyFUB49EnlvDlNdoslDQzsk3ElKKjWkiPis4YHD8m28iT2kr0eqzhIfqgcthFymedHyVtuNWW2z0kCN%2FauJ6IN3T5NANmToYTyOfmEdtWQkucMe%2BBdk%2FuhE0Q%2FNAMLj2KHLXHlu5sspqvpazFb74r0CWfKAGgjrE0hLZfvAEz0Vs9SzGu8srR%2FHfv8ZpjItdBHofwEEvpdaz15ovDAK0%2BGaYn2DVN7%2B4G9rlrNBU8iGK%2FDl7I0zztKgFCaeTiCC14Ls5K4473RoZ%2FPtxGcyuZFIKekOL%2BL96IBbRh63jAvbWl7RbjvMyiofTj2BNRi9wVh1OKTFR4kRK64k8O27NEb4fOln0vaBI2c%2Ff6xZRQNHnuTt4Ia6SGdoNIN2tWB1exSRKZ1uI4rXeiFO5VsLmpbsDDQ%2BX1CGpzarHg%2Fnvujea5a7QZqE2p%2BU6nmhGQBf50M%2BqYeCIYxYSPnixLAOCt6VTLRO3ps%2FNP2Lf%2BNpa%2FLRlNG%2Bg3ms58H81UY9oNatndKXUnyCtlsWhWX5oQmPYkKs1mbQ1hrD2K28Q3dtOIRsHA0wSSIOl5w%2FZSNx0ke6Z79EENIzT0AuSOHwleR3%2FvvQDiLIhL2LS1du5HOeDyE68feNbjfMUTDrgfrBBjqkAZpmqLIt%2FEiaw5%2B0qMKB0%2BQZlB3i2noG1avT892bVIVXuJm2pvNqvRkV%2BDxOMQ7CsbxlHfiHeLctr%2FsxgioFz8ArDdIbpS8CBZjAKohiauAZBXBT0f9ckQmNQbgt2B7NWb1eV2KnOrDoa7rsM2v0BGPh2ZnfpCETswoA66zlM9LioDsElFeCpcn2eirZCcDZM%2FI07d8xgcCPYdx26jzdYTeUMaTn&X-Amz-Signature=e01e696e87c6a7bb01c8175a5c890b07296feb45402936f031f378c3956bc7ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
