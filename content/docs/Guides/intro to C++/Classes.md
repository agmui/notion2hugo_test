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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W3OJ4ZP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIFRQhAmoqxLXF%2F%2Fw3G7NikpNJOvIqsCPkYk4UGRRVDpbAiA%2Bz%2BIihUolEBkys5ZBW1RYs0G4Eh1IRNaXOeBumAEEEiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcVAC5t36EtFGbkt7KtwDWqGoq3NBxiNXPMua0H8RgWltcUhxVkO8rXhUXS0U7BJyR1K%2B%2Fb4nD%2Fow%2FubW9lH1fJCknYvGA73tzU6hUAXfSnWdq12K6VwsKgxTOdjxoZ3rZDDOSt1QShtDjajGJlOI0s2p9OB45cxsok1J06P2lVRMhnB%2Br9d0f0yY423OByGjJP%2BlqtqNtaB5LwzJMlV1Jo%2BzesAP6LG1aM38FD5dnrqD96a9OayEuImycEWtMrtBZYuS3msOLz1HALxfBiwRblzdnJopXSxTUbALFq%2FP43DL6F8svUyQinCyRdTLTFkNX4gyzsFW53NfGAF6lQ7%2Bjki8C5e3em%2Bu8dATG%2BqFIbnhFhcIt4AxaAUW4C5N7kmXHvyIyMw8mtYE9PKf55l1xHDQ3hH1xF%2B%2Fr9snZ6AR2koXflkY6IfBlaBHBbRFr3rSW2TV629gM9ZfJ3wvSf%2Fp67BPoXqEoRUovrQOZzU5juS8vsCabD9of0j7CtTSox%2B4x2df5UWj6kdsqAVQ2Umg46H1iBew8gbMxbU4HMWv9fnnNEE1BSIxbTX2YUgZ0UtV5TTlPY2YoX4u2fV5D8yoQ3Q2dGWmg%2FMWQIX8sHBHWBI4VsS0KVz79Z3tzwoXRJE6%2FPD6SOgFtmKZqEQwltrLwAY6pgEpsouxbr52i3oyGqqa3MO96mOz4n7l0O%2FBqK5ITHJ2nJlGs2K8cafBypq%2BGoDR3%2FlIZHZnp7qhb1upCrxiV%2Fkh%2BZSdMVgm6bHhfG5c%2FoRi%2B2MXgghJu0P4B8I4e7VPDAgmEl8QTasmEi9vAfdi8xWndsCB0n3WxqypCG92pw3SQOIQj4hX8RCAx%2F6eQveahCsNmL8b%2F0RsVYUfoSOJPYpogXLC%2BLIO&X-Amz-Signature=42fc9fc49a9f7962350a7eff58b63873275274c6ad43b5ddfd2eafff43d320fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
