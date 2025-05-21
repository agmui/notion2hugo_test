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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEJ2XPIT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCPlLmKUhj6zYq7GkZgW7MjTjttVj7Pl7WTSjY96gEt%2BwIhAPcFOkBIBn8RSa%2BtIAIAMRauXdv2MwN%2B7CQX5SQ34gixKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBMtIZv8Rt0Z0rvLQq3AP%2Fr6kArJ0EljPZrhA0p6DNBLLLwO3GjGMRm%2B3MvEc59Fyi10ExrXsZSDFU%2BaGc7erKwVyt65OS7Edfpi%2F8n9NR4SfX6s5ialz1ycZv1p%2FpLUREk8j38NnG%2B3BDSGBAMrZTpt4rcAqH1mVYj6MW2BARIaiFc96G%2BFe3bUnOZyc0PFEz2EDXlUj4iB%2FLd5IQtyi%2Fig0Ckaev58m2%2BR9%2BxwI9QtpRwO5u7wkEpN%2BYCPJB8AFP7gkGgZZj%2FpsJ7oGxnxWhDSmYxk%2BEG%2BkFSDY31ZgP74slw997s7U6vdIkLqSCUzedTW%2FTp1U5FJ2eEKVCOhiDealcv1c2BN6S0Fnu%2FUnYC7Xa8g3vFgJwfmDplfC%2BM5XugRq%2BJLnP%2FM4sqY7kAx1kc10gl0VYW1TJ1MM40Oh%2B0lUEAVbA1KUqCg3T62e6uHdIxmszgIDW5C36N%2BEr%2BwP0nL722W96VSb1ndJojEOlNJ8IaCtPoOqB56W027EmwDQ05s%2Fe97Af%2B58osxgICdgb1vL8CVG3Q%2BhkAXNfePaLXRd0AgeMEqo2sXqdFAtUw0ffTKdRPuiyQY8meu3y6Gex2AUDRgILEvIzH0TpBC%2FxqmBx1hvRviRqonh%2FTkcw3k17VSkSyJZctujrATDWo7jBBjqkAQlbjs64MGLdI17BtfgTvJ8ByFknFkM3Ig8C%2Fp6VOnXoz5Df5TMSe260GRIvwPQFT%2FENvr292cyUMez6FWaqTvoeh1LztnRtkA43K4rRK4I0nCKumTSauD9h7v5LaXtZe6lw2GokVcMqWz1tT0f2FAeo%2FcjAT%2FNWugtYBf4tY0BRY2XGRiw%2FiURKbeZuTvhqhubxiiFtcmpsUyOdodurM0vvkFVE&X-Amz-Signature=d93a01c2d47e54b23d16c14820aace82064acaad4f3828db49d73004b1efa748&X-Amz-SignedHeaders=host&x-id=GetObject)

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
