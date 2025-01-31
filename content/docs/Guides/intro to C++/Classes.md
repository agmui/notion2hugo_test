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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU2EFWLV%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFQW5y610yBxk3ulfsvsmDgSKADA9RthQZKp2tj3%2BaQIhAOJ6BE%2Ffhej%2B3mzTDz%2B%2FAhzeLflEQHzaHJVWOgZNb4SfKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwzcre5jbGNc5Biwncq3AMHwWil9HkD5ccyi9Aw2q99OalQQJzYfO8LdL1HwPSF4DCd26KMB%2BMWaBCeZpptpKVrCRZuD%2BrAf8qqTb022o0I%2FH%2BKNj7vH3IeTK9bLrr%2FGDn4Pw4DD6nrphDZO7NESHt1O%2FPxn2B76YGJNJZgSNgq5QE158U18VIyrMJpko02a0RrX47a%2Fu5VPN5LZlwKO3xrDnN2yUjtU4IZ8vQtQWUJSiV2CaD2AHpD13h923LNsAr%2BhUYgyYNNE2NEvu97bkZqwRpolNPKfjGCKSe1R72cRli5hlCDUCuRqJE8gWl1nJ4%2Bm6soUwnBr720Oq7qbokVq2EIn3RNFhIWX6OzsJA3aRBVf2x2A%2BMwGsuSxmE50RDEfXpB%2BpDFKUzcj8Q6uBMiW4pNsWfhKEhTAS1mercQXIhGdbx0ubFBEklTOx0rH2P7w1Yye7DIViZo%2FxKXyFqqVt%2BUVii97EAeiinNfhjb0y5IGpTgjN4UmY16B1ktvhPEY57PsyjLNYgy%2FsojSmMlBvRd02QqlIYEirXrOMFx6Yg8%2F9pKtAsyuxoK%2BE5Bzt4dLnma4lvjlL6z6MjDNXQaz7GMkUyzwMr5zkFdid0e7NB0cAD5j%2FTWcf7ZGlosiKBid47PVxKC7qiYjzC4yfO8BjqkAY3IwXrgQCBmbI6YG8wJLBw1NCDZWfRyMWpPxcOfwNfVCFiinHk1D0ZI1wD%2BLK0NtLG3%2FixkOvWd0%2FI2ZBzZSr9BwLDXaV4pF2SONlYyX4hu%2Bz77QlI6XcqmvdUCOOcZg0MaYWQQ4mjX8K0I9o5GSW9sUfFbS4Wt2HmNGT94VM3C2R4Vtr9TdNUdbR%2F3W%2BhMPV2hvFK3SPI9%2BDtlPLGtO1J%2FXexd&X-Amz-Signature=fcbac7aed9daaecc38f8334e1eadc16ee7d8474fd17975cb1f5c99739e6c7536&X-Amz-SignedHeaders=host&x-id=GetObject)

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
