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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USG4YUDL%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCICY0QwfEHDCVCdY4pvLOYapl0%2BEIe91K9jiAX2zb3VwNAiEA%2BdZ5eP%2FvI%2Bv1ny8zqbKP6xg0BPBUH%2BEd%2FEhKddq16twqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPDnAtx1SKsY%2BuDCSrcA5RRXe4B7uexp0CyXY%2BAG64iga21OWpQr7FWUK9VNdiKZ8qsI0TSKpURoLPBhaN4Qhwdr3Wbxj10rb3i8UcaVP%2BwMisf%2FxmskAX6mARE94C%2BX35QkJGaeAxsTxou7%2FKlJZSDWbQHU0rYrBg5ttp9%2F%2BS0E28ljZezok%2FZJ50FfvP1gcaeywcSEP%2Ftalv2b4tos9G8eVg0%2Bm33Vj13%2BdbE2qeDyMW%2BO0c32MYeUKEGa5pxn28GJQzx%2FfX9uNd4I1bgFr50rm2pB5jaNKyPi5oVZOUbXPBJzfWS%2BX2zFs8yqKQlbmXmZtuCgeTtrsC2I16JQHhP7c8qOSSqqZWNcpIq6beDD5CZQIxmt4bgdR6EWBeL9DI%2FXbOA6Hua0LTwft6ssbtkFZFXmT4TaULydrj3xRAFx2VU0BkEYZdAYyKxL%2F6T9CLyqNDhMm20ns01jYnvMRTp%2FtZ6v7RfOMNTzyvK24eCqEki5qHpMLbAnDFR7qEr4v2XEOG23Spqjn4orFLS3%2BawXnaV095sDmaS1yA3OkCW9GBwNE88in2SbX7vbVJ78Tzwi69H1vsxOwh4GBa3IkuMjJG%2B%2BY2TIZWWMhDYcot6UQwEKIxTkFztqP8g3JFX4vjJA4YPKAUMToRcMMvk08AGOqUBw2h8s93%2BWNvpidBhIvzW6Uh8lO%2B2%2FAuvO%2FuEHCbDwF6fyZLm%2BWVskt0iG9lmRlPXUbuZcx0RORk9dbAJnYRjLCjodYom6d%2Fu8FwhOEZZOiwbabiVP5WXLsQeq29blXDWCjRSGkBL0Rfe0VgH%2FcfyjCIJKUrWaQBm%2FRVFUxGZ8H%2FhRdScsL3V4tLb4f3SZmxwsEUeJbDRM91ERDba8Kv2U2UEc62D&X-Amz-Signature=7d98a63529929b811355c58bee78e1d826af8325c2f619571203d163d876dc80&X-Amz-SignedHeaders=host&x-id=GetObject)

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
