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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OFNRLUB%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWu2%2B8Ps1%2FnP6uok57%2BI3qtBExNfBt00ULrKvMIwkiEAiEA6lhXWFTLX3WWe7wK9Yae4ewg9vUwg1FjW8%2B1o7yw3LsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSJbGN1Bqa3EsIPYSrcA8YZTGcN01OpRAnarsCagr4qCZWgX%2BMjaVPHR0RxWW5PcX9EK%2B%2Flz4MOd3A1nNvxRvAk2nEp60bMpYJszTpfwQWKCvxH%2FzIoA2pkPN%2FHTu2zgS4ufuUFkWr2RoA0ceUwgkhYTxAj1Llxcm9qijn93AqNXTudH%2BPVGnjPeiydMoEXnrW2d1ZDYgFr8hWZ47gttLm0ZvwUasiynW4q5cSshoJVfIQ0BhnFDS7L9TUqy532oZ0lF%2FscuOf9krWFZQL%2BN1JTpGcxvY4A5V7gkM7nJyb%2F86xI7RP%2BPH5Nq9ZsS%2BTEWsXEM0aNxj%2Fn7hlak80pNKh3EMDxkUbKfqaxFEg0Gp%2BzUtSvKy0w4uyTpn9XPyzGoCUgOWB8UznLAitT9ZFOKraQ%2BQ65cSGtULTLexbSraM%2F%2BEG55tTRolXRiKxwj%2BYFRAZPK2Rb%2FhEzLcalh9df5xp1QEloNU7WYVY5FuT1CmclBzKxv%2FwDtMrtaqvKzq04a3cSz%2BhYF3zHnwaPB04ics0pKidcbf%2B3JvkqNtRdWOpxj9cobulJdz%2FtSRhUSu41ca0%2BxD9PCycoHNcbbQZ1QihPY82kDdxDxGZYazM0fV7rBwLXD0wMqxsAdZZO9PGrNy14RplVxB36oAogMLbrqcEGOqUBXPTwI%2FrLXEpYYuKUu6YjLSIP%2FOADWotIx5zE7SlWTRDuOUXaRj93v%2BcS6S6g4vJTYkd2ak%2BIdOrz3YlklxdemMKq1pPHFXhSnnA93GPM3eZWiUo2RdBe4CyPyOXJGr3r4db08Q616ZM253Cx1YfXv0V3BXOMc8EyaBdxvUbIVDjySS4JWOnwU1SqO6wvb8%2FmGHavTWFGEqIco1Im3GjdRTRcyl%2BU&X-Amz-Signature=3a9e79c03b54b894e43153bc421289627b4bf29981100099948e494c0835035d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
