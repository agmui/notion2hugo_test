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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPGBE6ML%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvFNSvmev119sw3yRnfzzhCS1lCTQz79t%2Bya5ThfQ0GAiAdVqPnfSkwW%2Fe7g1YuMRbI7Bk88vkiSlx2NEZ8qEhT%2FSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0QNlBj118YWCjwcEKtwDeYSSqjWASpXdx85NiIvQilF%2Bkf1kWvpbW8edCECoxrxbhWMld8IaYMSZrULdc7MVxuCgXc6tA4SGZ2YQx2uOHGSw%2Bp1v4luUrp9O6SAGlTqwOg0wanwjeqXepb2ioWs%2BKeMYq4vV9CS3gxRIOt1pTHAwEMNjrdCiu17a%2FjdxlV9bpsalnMqkaDmpLiOpy4u5priHORSRnOdxFH4AvKr7FhR%2F8OnlasbbS8nJh4BPBwSUVAXi%2F9Xwv%2FBjpGVKlzrmn40KL%2F6ecjML8WlCyClX%2B0ewQOuEKT%2Fp2bps5P5gxQszSAFQPpleCpZmKApiU%2BvBk0MnA6GOW%2FVbCDNISyziKquiqn0f7ncFUE4%2F8uqAq6Uc5QLgtMgKTrnDMDqKfxuVsKGimdx9hnKpWiq3OYKcDAoPVkxzHMrBpij4P7849wRVV2WkoUKKWXPbDtOyk6fRr3nHF6tRRK%2BqmwI8Q0MOxMTjP5dXX6OafTa0UvMJd93IeLkyMnYgcUb%2FpKdpSRw0DrQtBBdIQzU5t8Nr1OGyJ0Kk0Y%2BqIvUjJkcE85uFdTtY3GZEUFiYX9Dz3qDxlN1pihLPKBSeRkbhKXesq8aw3ComN6f0XN2ZGnLzFuxkvxW7UIW29lEfHBXU5ZgwyKX3vAY6pgE7HbCWdEPclrwgoZQvbp5jDC2M6jJp0iBeAOH84EiowfdqqH4OjZ50QoyCL0uNKuqr8rKPOzyHT7y9oB%2B8nrT7ygsEDAfz5HtSLLwmKjIi8QizKk26PutIlRRTrmKf9SL1CNxEXrLn7xcuHM%2BnTC5lapbMljewZhoZJu7d%2FK6QeSz5DnJgkMqonOWpAKDG%2Baunn7cMI3lfj4eTJob9TvHWdi2hkOLh&X-Amz-Signature=e677f9de8b705ff71e32233e2c31175c83ea6f52470e9bc7a74e66259b9a351b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
