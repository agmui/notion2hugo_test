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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q3O7EOF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHQ2LfGFoViDBjKdtSecOB1hUfLCOgUKYG7Xn%2BIlNn9AIgAOHTRPI4Z6GfWh64BtTLraeepahGFH%2BoPXEnRRGBbs8q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDPeGmQkgQj3R30aAUircAz%2FFxedqlF61JvbuinpHdF2F%2Ff2DEeNGUwrLIWizG1H6CBG7PwNOHtL0A8xmwZAZwm3Q0Y75Pg%2BD6ZIcRezdFxGyjnpvkHjsTi1d5t4cpC6jMwHIiSNqhQZqQbupFApqq%2F249hGKykQPtg%2F2GGKSGhgI%2F0UdBhuNslDvqxJ1Rs%2FsuwW63Ru5gYxLR1K2CaxgOsEC1rrDlZIjv%2BKNZq%2BcT4TfMNwuCr4I8k8rRpYJFfAyL%2BL5aNzOk4TFrOwOaZkSISO3MBM1Bov7L86qAnahBgr4fmg%2FNx39dIzF7znVC33bkxuUkcOIdzq1gZm2BiLB6cbSUJzlq%2BKZBsUv9%2BnFKC91KUdKAKmwGKlcibXvcZJF%2F8pQ%2BVmIgJ2Axmzlbr00C%2B%2FR413ezjRteKBoc8576wmileUySGhG%2FW8NjHm2ZKWTJ3HlMKYH5BpKUKcnUHas4YGArGE0ZGbmE8LkUdP5Xg0on07NcXlZSC5x9%2FfqZRHwCaiVsFbaGu%2FZvtr2cPP%2F67mQlQ1Lhj7JVJIRIulLkIY392%2B3kvl2pH%2BcESO05X%2FtGfRV3IoI3NCvq1%2FvkusX3FaFKIEBKAg13M2x5r92q5NP157Ic%2Fpy1EoPNvdTpMNJ0agkBrZAC8LP5wSZMNTBt70GOqUBPI0hCoYH4QNw6JqLTSEW37O06xrwUKm7rG0NIKaEvTIlscEfmotO1uwsxcA6demSZIZzXR%2F%2FdUHMAn3JrPj7Bb1V7qguHPyqNS7WLHno%2BlmJ%2B1k09sKol5XLl%2BsZbUbK3wPnr1nJ7kH3H%2BTCzjJD%2FIckMnDqH21TTp9NPxjDl%2F51j5Sc%2FxOLRRvWT%2B586ifesEDjPMguc%2F5u0HjgyyWe89kTofHV&X-Amz-Signature=c2929a57601410f3eecae4750cbcb858569aaa49a4b0d010d6ea9cc1b0601a2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
