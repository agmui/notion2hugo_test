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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QEZMOVH%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVlhRBazy%2BWrtpDsTkCyTVU13AL1PM%2F1x0M7ZGx36HhAiEAv%2FFlekuz3z0Z55ObWtB7IRCAy6Mo4Dvy%2FQJuJaUs8oAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUFiP5QjToWyVbZfircA1kmri50969zzvHzRIZWZiOqDmq0BjzAaC%2Bq81Qprt0sAbRbmyWYwS6QQVHlgHiTIbbOnkv2cfc7nS6hyy7uH951YR%2F%2BrBe6w02OTQHXq34yWo3tVurnUAI8BqiBRdVgLDcqS1XGi6TAisakrKXjbmYFDSBSWV1m3w5gqZDD%2BFBBTv9duwhpRvMkwngvsZz0f7fc4HgdSIu%2BMgqlV8EJQUpI%2BluVRQm2j2p94bZ57Z4qN2CrUdrbalcL4kF5Rj0pumfloyx4%2Fzy5ILJdqYmoiPJikRb3%2Fo7VBHFZQqFnsavQ9sRPC1uuMLHkck2yAZNk0i%2Bh8C2sT3MhHU0d6SWUZFf5e0DACZGIK2CGS60QQf5k3rq%2BdHlPI0h4%2FFEpA7sEXFkt3UTww6HoC3rXLhy1LfAUNur%2B0rZluVD00k%2FvSdmRiQtjU4hj0%2Fz1e3PzHiBIu2M8EWkP7o77oYiXfsGcCXl7iGPQRimtykrGF3uilGMeZmqH9%2FC4xmQfb7t5ytl6Fw6fbirZUZmSwSnKiLovog0heUkItX4ycqnerccogsicLILglRPUVImSMxSYJfgo3CdYT%2FoKD1i6bgd2UJw7x%2BnyJAmvU1U5xbEl3HvC%2F8Q4CalEJEcmPbilK3uVMNHNi8MGOqUBmEjGdnzpLAPs%2B%2Bpm%2BNKMh8JIrOfkFjqJc4%2BJtzM0ILH%2Bxdzq48HU8vjoJOu6y8nPayc3NvgIpZsOMqa9Y955HHvqc8q6cPDPxPuZT%2ByPjqZVYlmDNj7zfsE62UFavVT49IVauL6uOeVnbPwKIvEtjF%2FCQjs7ao3TtmUF%2FrtfMk6Qp5diA3oldLF5uBbgSzhO%2Bb1q5wdSpgoMh203ssbf27H%2BqQ6Z&X-Amz-Signature=50226fc16b24a2a005ac321143bb4695b58e6b6f6f4e51f099f935e7c8439fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
