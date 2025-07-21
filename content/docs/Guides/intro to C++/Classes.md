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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLXGKOQ6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2m2ngGT6lqtu7lJsyZe6oqtDlS%2BxrBiY6hxsX4%2BQ7KAiAEQKkItmqwXQqhIBFi8MGONrWDQrNss73aoDsdsZWODSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpOH4%2BzDVTB%2BTdzodKtwD2rSyoFjTvrkEcyhEhCMo36ubhKHQZDLbpofCH%2BLwEmZL%2F8%2Fi4ayoQyBkX9JIfQmixtBPI%2BX5xAOi1hxiIB1qfGaxlqlwBWsY3y%2FTuShlrxO3H429u7vVPURGJMfki9PICXpVuVgyM%2FSG7qlY9zcjNcfSyt2id%2BsV6AFFNBN2LzxxMMqT29wJcCVCpQA%2BnpzZ7pAE42BU1Nyfl254zWAMvMxg8jmfzr0o%2FGRw1JN3BwYKMUau1sL7GCfFGPFR5csT9jYSsRot8lsJNKbj%2BWQfCgH8PT49l4EjXlcEYFI%2B%2BjYXfjnLbabtygK94DzLlWVDfMTAisnjwiQGgziroZWQYc09DnTvs%2FOTDperCWSwEpEX6XfIW4XqFit%2BCQ3vvcs1Rd4glgRt5RZpPEsZUwfFt2A8ZozbIr6tWNhWr%2FstU2EXOQFYbEKVPRBiA%2BGVrZAJCC1QMc%2FkL5FpTBmOjewvxsiIPDysBFZpg7Ut1aQoGfMzuL61lnEelvs4yLWWtSDNmLH37MdAdKalOPxcsU6Xozzk5IRlJpZF6UsG0Avkg5xX1fqCv5FooJAhrkAlWH6KbpP%2B%2BxOG4B%2FKwNirV7q%2FPAbJy3sKYYYLQuWh5UMRp576cir5X3TaKPrWkUwwkJP3wwY6pgEsVFE53piDyY3WEEZMCFnRg3jr%2FShiQK5ktLa1sSM1zDYzZKtf0j%2Bj71asP6rk78WQtodbRpmN7AlC9q%2F9H2Hu%2FB0Wg4l%2B9Sqy84Pgu68dfAbOdEIdyiEPrSd%2FrERTGz%2BhMzQSHJzBWmsYN1xCaZEhhb29POm1DW1S%2FziSsequYzv0Z2avQEasPEr8YZcvMnRBSeYR2qr6fx1tVyaH14%2F3ls0i6bP1&X-Amz-Signature=71dcb176ff692da8d637c494175f50efdcab394b98f2b5097105a158105e68ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
