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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAAFJ36%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe6aBMvcPKS4ZJ7RhuNy3XUefEo0RxE4OfZ1qY9aleKgIgbuI7YEMiUKlFB59NszIFvkd55kLyh5t4ObojnOSScEkqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnoVEolN2gvYGuQ5SrcA3wcx3zO8DFJgtFXA6U4Da%2FliUGznaN%2BM0tuTV14Vf2pf48FI76xwAa1Y8a6ZEamLq443qasgyeT%2BDSeyNhMuwugI6iVq047HfOF3EAtks4q2cDxRY83xkqfykEkd2mQY0LRcx0PSX03EwFiKYZRAquzq%2FxpRYSdDcWhPdgPXYNFbcz%2BjNYWesjgdXywQkBllgg62ek2rHP1DDYMuX5MMLAKSBp6kWvcfx25SuqpBVe118n61CZqqP%2BpSmUO2usxm2cJ1npdtfydWPeuBjPnqTo4zxfZqL%2FcfhnR4mH%2BZGKwmPvblDpW03SA%2FmArFWIiH2z0s%2BvW0BK%2FZ7nbdHKSoXawlKexawsCg%2Fm%2BxQ8wRv5Ig9s3w6iSxRYvaeCtQHpM2ti8EB921vyEGblitA8o9m5D94ITOVFSyKJcy%2BaerR5%2Bc%2B66q4%2BdD6IBmP4ddhvOglsaw1GdO2xB%2FiWyXsqRJzEO1Nbn3O06JVzkId9DEBSE0zdURrZ3U%2B9fZBmtgYmccXTkXGD5vVhRHd5ZP%2Fj%2BCxW9NhXQwMIqTUg0%2BdJSONsYSlF%2FYMcJN9cwrBxU9LMb1cwJqnzQtmDsnjIPoEDCnShnn4DgF7T449xYO4z5hd01kE9MEQSd8ZX%2Fq27jMPGiyMMGOqUBymkC1fBVtmK5ya6YGMrowwSXo1r7UkfJD7K8UAEIoS%2BhP7gJV3yhPmNJhyZV0b9pfs9eKrETUHSyCdlEkRUzLqZYFHtaAhIAXhxhOyUikA8lNn3fILILc7b8G5UGjvxPA0cRbrqNNnsZ15xBRyDD9liM1vU%2Fv1DQjJUSOydzMydXBo5f9ytvvfeAHmC9HUFZCCPs0h%2Ban4mqp6WZ2HjZ8I%2Fv9Fo4&X-Amz-Signature=5d00c33274c5658bfd5f207417aacb972ed3fe99da0516982cef5b641e9c0309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
