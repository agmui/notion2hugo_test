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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXP4TIFH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAedyu9XzGmdO4Pk5L4iGGCrPyUh5HW1ODnN%2BdO6NVkbAiEAmQ%2BBRjxd%2FJyV%2BvPL8E7EiBxFCoi1J3BkTskU9vnyRioq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMSUWW4jezWKD6VAcCrcAwpHVQ7DUcByfbYaAC5n8Q%2BGt8LpkqmwjEQcscfXwkE%2B3%2BFMiWQYa%2BWN1A5dH5GlUBuasJHjGutoQF%2FgxsGFGfm9wCsqdjEhHlh1Q5aUloalHV%2Fko6hOwHivTwdDLC%2BvFFBdil4p7QSFmXdyPuD%2FsOBZAGh3tnPG3TeemqafwrYnto9U%2B3HGJoHiskiMdl11TZVyuM8GzJ0wjZ9g0qQGtYx%2BQTa0uFBaKrZiVZX%2BL3tccDn5wcWpsEZZBZf7DUBF60dqdgJWhtjpvn1W8hR3ja%2Fcwl0uRScsAnNWE7dsW35Rnqgl%2F7hF2E6sVF4X5Mlaas4FH2IyMvfnvcjLpxLH%2BqPYGkq9E%2BuhNPBaDPN4%2FO2e2wSrkZsZ3Bsbz%2FE3US7n3QdosIU0xb9i6CYnMkex3n%2BdCbVxw81b8iZVOXgrp03dP%2F3sAShoN9Rmk6QjtbbKzXAq1ELwDAEHajBW5SQpA6ekK9QHf37DAZMVqY5ba2BPznkmoFDoiaUef00VOArl9WEeHCS8UqWRVT%2FgnIPDErBcITSnrmd1fajY7KgOCIs1OmwUMZETmL1FjJPj0uv%2F2itOTRCnJrF9VcF7kCjmKE66xOt3K21QPJFG6Kds7JLQ9DE1Yv5VQABeWFWfMJGko74GOqUBWRq04GWbtsSw9MM97eifuj5eQTohg7yIur0C0yTw2EnE9TZsVbeIRkPvGD4bIF%2BcHkqGO7LDmIy%2Bj2jHTSLtOgtKKNgCUAfc6xpbj4iudwB%2BjnlJr9F2dMbRC34qk%2Fa4NOUinmaNwV9wGV2D%2BJP9Gd%2BCBVVl1VQ82H2cqSdE2JdjlZhOsHFv3lkDk1Xz0Z03bgHesnjLW%2Bq564%2FTmwEh4dQF%2B7p9&X-Amz-Signature=1a60e3a408aca905626bbe1474c3886514ab70d2e5e07a9faac586aab5e3b94c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
