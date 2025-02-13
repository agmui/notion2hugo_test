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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWH7SDKV%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHsvL6nx4q7iofaagKgGAKbdB8SAs69s4tpkik%2BIIAeAiAVCMgEfQp6KASDIATtW1UzdlaVRfHefB6tOQbMwhI7CSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMLKcVWtUc8pgkYogYKtwDcyASCUIW7pAeq42eZ8qTwsT%2FX9KK4e2Rz8TFIoaTD0qksNRdvP462OKw%2Fg1lO8h5jiETsSCCxg%2BRgTC1htX3SjLbmhDiaAtRSxJtorm%2BaVxq3tIvK3vdiR2F05g7Y2kXA5pUG%2BghnGu1riPmZs%2FYpMP5aLiEHjhMQy8JGXTFXbEkoGfwDiE6GtnJZpKRl7kGHYXUrB8twJszbjbXJQEI3U%2FyKdxMDI67rySxcwS94nXe%2BnhehwpnTgcZlFmdltK9uDC07MIrmUN7Hseq99DHrCNmldQYqbpntxJCUaZD1yweKfpZaFihFMeGVuaYtRBgvh%2B1BjJlbs1bZ5r2CaoLWLRDzFrxLKJ7waM5gjnzZ%2BvQ6q%2FTL33sNEYajwIimpoOJnCparKitNRUO0WF9GS1vFblHkq9%2BXr6hnNJku8oFBACG87uCPPBmbrlUdc4CGvwqgQiVsyxaVn1Lx4EjQcoPHthxApkHa28DGUqwfijhBCCtXlCl0n0%2Fw67UmPdwRF6DnrliL7gGgdWzwif9epMckWUE9lqMyBzsznQoVU%2FzShT3cW4zM3O6fxOyPR83ETWQrO7J0can2PSRFWU1eEW976M%2B%2BQAr%2F9gW99vNVvSmoyYuqF%2BD%2FOZTXTk3iAwlr%2B4vQY6pgGQybX0WWmRjnS2dk6LsCEpA0bLPAndp0OJ7M6DmNS1hcKWHOuElcRH1ZekUWp%2BPjZmgqvqcUna8vYcrAhGEd5QoN7rq2bX2xBLG4SByCtbJfkQCCXRCPy8jrktYpPh0mkyyAb4rNyeQJEvX%2FTx4ZTDgYa86aon6tCGc8W1I0P7Dy6Yics51ypRtVyUBHgrylMUW4wfqnds0d1wGUSOPxVtVze5UYS5&X-Amz-Signature=b5c24f03c65642b3c5cd9d68ea22b33db801557434a58f7ced9a736f203f0555&X-Amz-SignedHeaders=host&x-id=GetObject)

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
