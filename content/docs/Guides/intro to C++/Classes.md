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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVZGMUN6%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBb7CoV%2BuDX1%2F2%2BaZHSdpIqhxVQaP5MhWmrUu95FddZ3AiEA3a%2BUsnQI%2BzZmh8D7VgIG3KZ4EM9JE9X6hYtJy1THrUwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMOD0xyFGFH9OkXLQyrcA5Y8Inkm%2BfvnMii24ytxBJ1%2BCWhBgHulID%2Fq8hxEXFWKGi%2F%2FtrQoxkQRXZkgqvuk8DESJ0Lcs1qxQvJORU5JXaXP2D7rz6y%2FrXqBk3vUf%2B%2FxSURX5pvyhrPrxKv%2BAkFO4CotN0QuPd%2BXKFhATnYHwcoGayjNBjaMg68iEbYcFcMuvisrpEHy3tsPZvuDjsA45La3odAvB8b%2ByIEGPf2Fum0kbpAuav20AwfHVfCMEYv%2BqlL5QnzghFo7oTYyohXlymV5LP0iUiOzI1PUPQJ06VyMsBLxifXviA1R8AAZto%2FGktd5JTMVxqJ3%2BJ5P8C40vlM%2Bx5AMNoFgspFGbMSXfc8Zw%2BqSebx9cs%2F0919yIp%2F0wAVtT3vQxzVDexcEAa0byFoXRrVEDLD%2B1gROpZYBhePCKV3Pf7VKa68vy9N%2BEvnzHQps%2Bd7SJP2gnyGJ72XlZic%2FidZzkoSCMzFsFJ1WOjOyDlLwWW70To6BN8MZ9ukazT5VBMc7e42xdWMhnZvZQRX4EO50naNYLyf0P%2F4IHQmbxT6A6Fe0ScfQJvJRgR28PitbQcVsiCZYsSaYLOIZ0pvYPkHWmGHxM2A%2BQ7yIcCzTf4mEtVkg8SeVr6lstMcKqoZqXK1FPd%2BxL90rMJ29674GOqUBE35NACUkzNiBUZHdPG%2FDyhSo1n7r6f76oDxcHkjv%2Bm2rY%2FucFyWuo2lVKO9vc4cUwSb2nX5tRfmSiXf7SX1MbL3Hy8MOCWszre1GUt0wxIPSyT6tHZR2oe%2FOKjCjiyUPsbHjpXAQDfI8S7GKmHsASRzAYCObdEtJqxHYF5C5qYD5ancLfKIIgpD7LKBhPe86AZ8RYNtIHTY7C5JfGKKEKkHxF52A&X-Amz-Signature=e8682a93a197210b8591dd02a6efe0fabbda3e61ba6ca0222fd2b14e6107bef8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
