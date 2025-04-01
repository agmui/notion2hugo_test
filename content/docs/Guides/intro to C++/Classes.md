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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W42F4XW4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDFpeEkYvKzHPXPkCNFoXRA7Zm145txvWbXWXCovEgFBgIgV%2FCAzRHIa%2FuZgE1mB5AyjhKabhAabnFTKKJ2HAV%2FnFwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGSwpNRkZhvqLaUJaCrcA25%2BQHVJ%2BQ6EpxB5YbWBCjMSPs0jF0uQSAJ2ZB7mRqj6nwGZ%2FDTh5oyt%2Bzo49QvIPF%2F1wvT4WqgEZYz%2FfrwJ5joWdv6ojHF16hxNenhNIpNUe71YE%2Bt4dFdyDQJSSpH6XuiJ0H7O6BU4KWQEjepPXIKBIONsUS70iOtumnTHRP9sW%2FrBoMWSH3%2FwZaf1nVff5HO292zJnH88r8cHp9pjR%2FjM4EY9te%2FlQMLdgZwRmPYmf7r5hxy%2F0epZnNAmg8FxYTTTJiT33opnFLHpaW6svP0rrYASm%2FMz2oVtIKTELsT8Pagbct0rxFNqPanPZUeY7LcQvsTppihx%2BEpG5xgOtEOqYVpyiOmWa5j9AKAIPKUnqbdpGoyNy9yS3nCkAEIDEoxA1Fi6ExTFwYjBUMBUAfHV2NaQ3VcIPjV%2Fnk89J%2BLBfC3p%2F%2BGzZ4B7513mgXKyodfq%2F7wC35vzCWhuKWgFMd%2FYP%2F6h9uJRmXk0DbdowAYW3oeAAnchxm4PQ0%2FF21%2FeUdmbDZjze8iBkv5aPCrKrIg0OiciXDqbTWL7rU4o1T9QgVd4YkOhHJpjl%2B%2By4YRmrqXbIUz%2BWlR2m13TogHxdLONEUwIf%2BDSvl4nMUDDojKwBH%2BiB%2BPF%2FI4q0AuCMLCdr78GOqUBQbbS9X%2Bh8N4TRcGTOdge4cwfiN544PCqB3ppSPxt%2B8MthDzopyhzjfdO8p%2BNCUIpiJjs5J5rDB0tdkDCPW%2FZX8eQ6hl42b2uaW0B%2BQOC7cd7vTUgYACwJIEJSY6uF7b0ZJNwYA0n1xy3cCQkb%2B1%2Bf7RYSPpiQEDJWPZ52XL3GKnrrX1I%2FHrkjHwuSo0JBmsjlNIe8T2ldkzA8diScA0Mt%2B%2B8AaHB&X-Amz-Signature=24137b28282ab1dd98c370ac6ce1226a7502fab337395998d10a7d2ae5a51f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
