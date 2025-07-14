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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CCCT2XR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDeV1x6mRW6iD7kBhufbvPLGttxOMyrYN6Biya%2BLuZKngIhAL5WeodKEHgUPCMALG%2FIZtO2c%2BQzTNfyiXM37gX3unwcKv8DCCoQABoMNjM3NDIzMTgzODA1IgwALUo1cmuqWBxMf9Eq3ANBFjy25rg1eWjhLHyNMLWep5rQi618qcQLBejqBzMdHn1SkCpjEc%2FAFIZouMnMMJBV8p%2BAk%2BhKxwZ2zRJxR5aFFnNEA0o2e1KnIq4U6bldQBm8JnLbvCJl3bRr7LI%2BMiUDPVNimNGgl%2B9Ar6FHELnh5z3ria5c9nJP0O2cK7zZyLklS%2Fz9JxZVhSoKE0tTgD9hd2ki%2Fvat2oEhV4CDS3MJ5pMDPOL%2BwrS8WYOUHPk14rRCyYMH%2B8geDrD02wjyzPX8%2Fy4XdaWTCeZtTcBJPfRaS8%2FqruVF7juFA91845Mgdhd3Md4%2FuInD1spclMk3DVYVndVN%2F6L2%2Bnar1zLOUahDW%2F0ynlRZoYASTZE9bRiQn7o47wcVtPYprb5jCIQLSwqd9R71Z00J%2FznQsoaeGKzt%2BrApRtP4N22ty0u6IlmyjTC3FhI8rQjfAMdrCrzWJcAJyjroTcm9hxA7j3HHAqHSkDFkuBRy%2FRQ0mRZjuyv5S6WAkPzFJdqIvnL9DV2i7JI20WRGy1A07sD5mL7c7q8caE46kOj0ZWyKVRohBSUkP6Ajou1EaGSY4ytakPLd%2Fw032r6UaGWSSkMQa2dbIT%2Fioi29Xgq68p%2B3PLJxvbf6HMitpj0s8CekZnnBazC8iNPDBjqkAdEXPBFefkr6w%2FxV%2B5KKNa9c%2FHtkKiA34oyFRCNMEKZl%2BDk0Fhcob4a6BuDbRSG1COnncAGyGvjaQ7qnFzPLG%2FfWsDw1ncUtA26U7qBEm6DSgzUvHwUYbTxdqpXAf%2BluuZNQ7iKVeHotMd69YbP249cuhk3Qg68hpLFnlAgFMpyxR1WYJ%2B8tedeOIwOTvqsbIb%2BgWEenMHUbt4CtPnRu466f7i5l&X-Amz-Signature=8e6611b31ba1738531cfd88b194521876a49bb6f477922561696418ee644c11e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
