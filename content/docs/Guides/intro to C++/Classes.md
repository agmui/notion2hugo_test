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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNQHDF2A%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDaZ%2B6jTBClUs1k1qFUbLoHKVyghDY47Yd6bgwQ4nEDagIhAITcmj%2BTGnpgwDKccjSWCzMHnSvMVcyQU3aIxi1xFl2XKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy80UPC49A24yE8eaIq3APgkyraTjhuw7MOSOVurMpPfsQEfW3tyEBQQccb1wXI2pKeDLUXuP63q1MajqXHxQssWo96PfkhiwMs%2FipkF6ppqLZdgf%2BMsS4%2FR93QbV4QhJTrfOhnA5jHs2lMuFo2Jc0JpIfFBxqjWgSmArYsNmC%2BWfsHHjJsvlIFTjeyyoc07ZMehbLiy%2FbQvCWHeqgFWeH%2BKmbjtg6hddb2Mi1zs9xQr9zioVXLtAfBjtpEyP1%2BjxdhLZWmtKkbHDqu8hIasz6MK43wyvuGv7RnwNjok9BoKqBBr046fRqi65QlNRhHyVcIP84tfmoyWBv5mu1L1dEXbDpNDz5SsdRjRAYbJHEk9D8mDgc4oOExhkB12XFk%2FFmfWBSvFjLmAJPSNELaGMI29OMU%2BGznG3mJ0zeYQ6NkDsnMnRnca8vjA8%2FmPN%2FbkrzDsFn5BCbwHx9Q2W55TP3hTCCyPP9GIvkRjIjRqGylhjgMixR4e0L1JfW9N7Z3s4nzvVXxs4lXfa5kzE2maSjCTKF9bAGP%2FAM45hxoS9yzbaGWumamSLnVwcCMEWV4Xbq2i6vznRa4omw3%2BP7jZesmA5QtL8oojzssm%2BfZsKjh17YlukrbZIkbWiLN7Bj%2FDmn5Zo1SbQfecZqT8jCymaPEBjqkAdS%2FNm2S0TL4TOtZ3sYJA%2FvA7DhTogYFOgBSGPRbn4gfyalNNYPRd6XCrBfsMaRPlfSB6lvNKifT8roZTIw4Oa%2BNbtL9d956JiYCSiZ1hmDH7ekaq%2FWRL9Zchh2RYSUW592dOsYvs%2BLvrNJJxP08%2FdeKH2%2FoK1F1hmDwHbCSNNS8fnkh%2BUiJ0MTTpMn3jRq3eOJo9U98%2FdtSkATLKAn7zRfpAZTs&X-Amz-Signature=3d28fe6203986c7e42a4138a854a77b20603017e666377cc0b06dd4b96b6f7cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
