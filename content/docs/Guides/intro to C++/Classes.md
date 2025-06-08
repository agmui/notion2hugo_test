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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PWUB6V%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOZmCATtM1q3q%2Fuav%2BfkW5PEgiLdGnYXCBTQXYFwIuWAiAZ9dcFyn5gZ%2Bdh9GVFIT3IzU%2BkTsyPJCqObRUy1ocK6CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPkhh3Kgf8czHmVytKtwD2KB6RjwB9LYKv8G5KHngtELFx60JdafCa9TfV2MsvIrR%2BroSTScEmu0Yw0Tan0%2BIZdKwFOAtuBBQDPUSPfLWrg7ewGNIXSXB9ol8Ofnf%2B51Lw31vhZtVbjh0d%2Bb6iPoc%2BMyQ6N9%2Fcq%2FEK8vk3InU3cg9F5Ci9gb%2FqvVKBjVmonOoccC4l2X9xfI%2BZiaRuH%2F4ejVEPvVAp8Zrd3qvVG2RpzlhkVwm2%2F092o51HljRlXYw4ki3KsAjUGDvhowFQpwKHcBS1XOwiF7bpk6L4IM7qWFxZO4Oyv3XOOVwSRTQMhMW2BVo0iq0ZRkcqyqm4Opv%2FXx%2BdGsjv91YAJRV%2FXPkhg5KuEk5m1xSsKxEm%2BcFhxUw6Cjyg05Ihw%2BezR7y%2FfnDyZIbYhJQa%2B1n0yDdDjFuJ9tFwnPXPVwT5o1T5h4NrEuaUFaCPMCXK6x6TKoPqnY5sM3Vk3tNiThprNKqp7UPBoJREu%2BIINEx0ZOuf2905GmMxtImuhDSPV9x4GAa8cFHnQE1fBZVF3T8W5o%2FkFybmIKZoBzY4qVvL4fHiIlLyYal2ycOV2EBrCARbrrTdPH2ELxi1nECYUwkX%2FCbSab%2FUrV3wTT9HU7f79KVpKdNqhligcY2lwODSRwBQ0Qw0KeVwgY6pgE0WYMdeRgTL8cgRMOnFpNMRYkPH8dTH0U8yIveO2lKGnVDb4k4sP5EJJ%2BrzK%2BJM3sY9at2ps0CAr1m%2FvC8kNC%2FvHV8FUHzcSs5GS8AWP%2FWFIvpdWHzTSLrqIqal2mIjIKmY8s11jZEhACGL6iwmGT57dOuW%2FAlklHTgmYbrL3e15bhTzM700gnVrHE3ZynW%2BMkTgwjCSnQJWfrLFReTzrmd2xVOULL&X-Amz-Signature=9f226b61d5f1e1e41c027509cce8a0c0c783aecc2aaeb3633ed13f735e0ef321&X-Amz-SignedHeaders=host&x-id=GetObject)

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
