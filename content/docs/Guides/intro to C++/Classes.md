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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYLZG3R%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2e6yovFeSdHk4XLrIbskrlUUPDDlOERtGFZRtbqoIrAiBtUST56VrbiCBdILT5SZ3IYXbgMUv1EB1jPdFYwbyz9Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM2jXSGF30iXDOAUdoKtwDy8JvmphOkUU7SyBhjyGBpyZmHF39enNfjFm7gtGj2tN24buboOd3fuLtCv8M4LYD9ehK9ctiJunqsG2PfGXF81LSMGGRAbUFHS6VOZie7ynvB4wEWa%2BpJ2OzRHL6MndYVflhs44gg9NXoEZinfKBWhFgIwp4htAeV4sNWZrBGWkK%2BcYgYfENxb5emerinruKzXSBBYqHufFWPieKuhkJvhflXHvLcmZ0XeZ%2Fim2nNGkJb%2BXO3%2BP7N7TL4mASlB%2F0nYHoeOhB8HPdrV4flld8cIbnYyL87evH4Efz%2BLgSDiNk5IPsgpmV9rG1aOtQM8sRD4lYCUo8wINW%2BmLCpvhBBxQF%2FOCi5h5P0f9sKz9Uq2pNNvMwUiKETLeaUZqLlK1OybHxI2C9D1Aru5qGGLwwTGfWTO1lD773XbvrjmdVrf%2FbsjMFdP3BlOR6tCXrZgOdR12LvjStJ%2Bq0jhuRfbvojALIhbZmfuZ2bYfL2HX%2B%2FeAdOvuExON7FKmF1%2FMa1ErEFt%2F5P91IGJzoIUOlMRYmiDMwtuAyiFIwkJ%2FU0cjbHoB1gSfYabs2wvJgj19hmGxdwtobADpfmRVV7%2FPnpnkISIw%2BhR6XoflCPNsJI3hEbR7JPq%2Bol9gmz7ZhFiowwqvWwQY6pgEzmXFpGVS4kKBJpHINCyaPuV2wnICMCCyYnKbPWLdn9CjWukSsav%2ByL60GWtANnq%2B8kicFFguXDLs4D87RIZDECPaDlhPYP1MGpcBNQGzcmUxZOG%2BgdEzI%2Bi0gJZWd2UjTrA2Zv3UlI4uLhBRTzzYTZmdvsg5q5pnK62%2FumAKt4VtlpyaKh7oVrBsvGQuNthCvoX6vpkzXYYNYn5rK4bUbr3j63Xse&X-Amz-Signature=c1316f4a93aa6f1db5535d1c51410bd997fa4a33bc8dd5a29ba05c9f1a7f0470&X-Amz-SignedHeaders=host&x-id=GetObject)

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
