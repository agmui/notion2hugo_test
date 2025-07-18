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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPO5ABPK%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDQHTurn8TIp3Gdp6%2BiWHIjDihGZTGoebS9KsXHx2TKOAiEA0mRwwShKNHpPFFilUXjJXLZ%2FJ0MM2obiHLEk210neG0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLaBRpLHUZvmcOaGircA6O5fqNqPSoqbsC27XU3N35EzQqMIC75Enh9DCCb8C3854E5D9H6Sdw65qSYFKSLBOTAYUmg8SCLF9OG6uOFV9OTTJlhodC9QbmO%2FkbBVBY2uc8FZCLr84jEyExffuKQBcDjEtfelq%2BWjNyo6tNV9elLgT%2BU23La3rPf%2BSKwcK1G53%2B%2FpQ8AQ%2BbGo6bRIUOe8yRhnhYcylz9HXdi%2BWuHl4LD5j9kWDEiQuH5DOq3Ks19Ydd1cV7aLyfFeT8bFUoaCKzmHgNfcf4rWWXmmmTJgmdr%2FLsIpecKUIfsm3K6dFYr1JoUznqNFY3pHQFFqk4Yrxdx7rclu%2F9Oqfvwhlywy6%2FyOCuUQ7XSRCJkJd%2FPUYo0iZ4JZXazXeTaDIyKDTD8UfaGZ%2B0eptz2s4Y9ZMhcsISzSajg9ybVrpaCLU66E3OPkBVCY2FwPGstjciOdmymBOAYnskv8%2F3DN39Wn%2B4XjbQV6PhXJJ97VQ6Fkmluvr8exvVGMPrab6OZDOfqT6hwRxctze1u4i4ULGvzFE%2Bdqm61tRu9O9EcUfYKGqM9GcpJTF7iDGF8gnNpJW%2FrcPedzciJJ2kVCoKuybY9f8kU3cL8wiMJRq8ZQmvC1jhFcEASBc5aQAE7WEW8%2B%2FE3MJSK68MGOqUBCndhIQkDtlPyw0iu%2FmRlpLm0iSsp%2BHArXEfeELmObQEDc6D4VzdS6AtiyIvlCJHOUO%2BGCmv4kmR0SI3QJOtlqGcNqaKTOG61EoC0j7SwEKqHMS1uQzLI%2FJoXDOWJ1yspfH7vBVlcjw3sv4KwOK6uEMUObbsldNtAL%2Bt1TEtfCmbMzJtSxdMDk%2F7lULhxcKTFnvm91laJcRfIkveQXoNDc4LosvVq&X-Amz-Signature=ea6a8c273d6828260b0d61985bbb510f6ce792e52c30b2872f3461c8c9f52eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
