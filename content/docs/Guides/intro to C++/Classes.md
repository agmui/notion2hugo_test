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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HORZ7KV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCVHM39CQ2%2BD2gEjIJewfiAAl7CLWL6haMMClkxrxt4YgIhAMctAv8jBveBSwMOQcDznFjA6i4zzhZuqhqo4VU5aGmHKv8DCBIQABoMNjM3NDIzMTgzODA1IgwH1oFHznlI7KVH5Ngq3AMULo4yunBkD7u%2BBBmnnICbkpL0S0iGf8Oqj27oGZ2MDVkanSzXltbJnqU9El381MDtbC6rKJkRGEvFmAAFrzTuHf6%2Bv5CjFzRgbuzf2X5kbbF7S6xy3zKhCA%2BR8RwRDSs0qJqPIl2ju8FwmfNlTkeRQInx072pZHyKFs9V9D99i2OGd22JW2%2BIME2%2FIHi2NOYHpn2ku4CfoWkWqF07Cco4sKG9cAbZ7QNRdHpCoHuNl9bTbx%2BAETAtoJOigbtcUSMNNDcmas4oYCoZ6NbGF80jmaNJ246i14fDppmBsMZB6c82iMFtuHqjtMTkEPE8mmApuZgxFcr83qqrsT1woHqTIblR17APgDH2ZX5vzlNhe5I97Vi%2B9CfdzJysDUR3netG2Jbg5wHC%2FlWrk%2FANtRPI77vzULidUTb2pEnpLdAFe1PRCRe1ejaLGIceQCpV2aNC69PAbQAAbUw7%2FetF3z6WQBrrc%2BmC5v347qgMFpcTmHlT9U1Qt80ZrxQrbhl4ChGgwuseeRUjy%2FlLddMG3Igzy6NjeIDLo0YBbhztZtNWcTpLHuJFM6Kb3NiyVYsS%2Bq4BMhwQEeJWoHfW0%2FeCEnMrAmzm%2F2Zv7H0KBR4SdwMhYHs7AzkoM3G03EBXVTC42a%2FCBjqkAcKDoEX80Ini4zrCbUgRxRjJ0iRr7ZW0hnrhqaarTT6HCWgWykegCv8olzENdJadrGCX%2Fewm6NLfCU7ePbCbjy2mcty5wqaO9mRhpp5PysJ5eEYAt4EDl%2FR3h46EkOwADqlGmsoKfXRFqzMbYZzaclEusfSN5Ellkb9B7jSQgg4urPQkcBGG1A5ML6ftaW0yAA%2FbinirK11xuxhfzlMFcb1K3pP0&X-Amz-Signature=f051c16e7d3e85bf3e6d1de5c2c9746a602d6a3424d2fbab790abddea56f10d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
