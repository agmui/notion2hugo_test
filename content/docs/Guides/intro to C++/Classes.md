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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJWEUSR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFeIZIZqk%2BsjOY3rx8VmAagT0t2zaJWSp9F0XztD27fMAiBa5%2BGQZAoGXI2XZsibflYWQAf2OU%2BarWnaN7x4civt6Sr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMjXOP8dlUWXiQr5t1KtwDuo0CSta%2F3ToGGFbBSEwLdWeLMLiMXXbDJuijQ5UamEV1bgPbwgki%2FYLqiwKq%2B0P4VAo%2BSE3MFaGAXDzlJ64mnQf6TCiukuwIOpYrYCeGqrGZLiicUKg72DZYY2G0uEc2nImV085PslUWVQHF01e838EDHfx2GfExEz1z%2FB%2F3IMuKDVamBZNLlpmZcUZ%2FhB9NJqJ1xcixofd9oh7i0RvrLsLGaztjDQsBRmwEV0FSMRnaUqq1aptJKoAme%2FUkD4SgPoOUavy9Dtu4FAgoF2zduZJl%2FU8pt8qd%2Fo3CATpw6336F0ecEFC2nHrmu5mUs7NiKX9Zoef3kMz1P7OisOSzEkAvNybXgnRjGqU0OQib0q0U0pwi0ZQFIcnz4xxJP503fjjeJyjy6ImXltiS3u4f1hqPNOca0Pc5S06FEDfiq%2FAQuFAPlTKddP%2Bqh52YlekV22aV%2BUx%2BW5ORDOwUXX%2FP1AaBgvmT7pu2AICGmETwxB9UWl%2FenQHoxXYghnQgeOSPdoFNFRntfnOpMa4QEcj3ZtOFlJjY1gXAkubL7szMHoNm%2B3hpT5LTUeFHobKPX040hZ9lyAbL7ajEaJu30FTIjrlP1SReRDMCwMlIq9il8bQe19GFyKojhsYZatsw08jQwwY6pgE%2F6MXTHZsGSwdMAdprJAgejtpPrTKzEGqoM42vqAQ4MbGrIeFYtRmqawxgZHDeTm%2FoNdNfOwWxav7lDmcHXLODt7%2FxdP9jpiUVAXYQnET2PnmoiJsRPPE5UFA%2F%2Bb6sKdGe2WV9diXzGrGauLU2FaV2kiUHsILm82iw5sb%2BflqMYOsKQVOX8rkjzyXkBj0bkE%2FpkDqdODflE6vR2BQzWXx1A6gWTkTm&X-Amz-Signature=cc61cfa0cd72f66d67ee29ff1ca717c3dd28f87e0ae1f8225b6a924e191d80fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
