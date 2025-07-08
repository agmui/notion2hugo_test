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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YICFC2XR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWHPkB2smizb2N46nVcuTRzoY2z4M2p%2F3mxDHG795%2F6AIgFdD7XeUgHVzA1Wr3ww0TRuaT%2F0FxcKAh2i%2BvIOP0JWsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfAMvihxfYbhEAmESrcA0O10Be1hNzNfHcY78%2FP%2FxNUocvzKiXb%2F%2F5y3gafmR6eBedAgCMz3QZi4xjXK7Nw3B2RjeobPquuKiA5KDmmSvfiVOAMmPlL5m03Ct0r6uLnJJXmsugCHs9nGlB9b%2BCRQF4erpZ2IL5r0Ebj3XRQAHDxwlDyY0qbzlpG138DaRXeyJ5kTvBn5%2Fd7jh%2FaQvzyKOeaa1SbcOxXUyL%2F9tZHdWpWgtV%2Bc6EFFsWkZDHCagJ9kjXOiB2QN6LLBK%2F1ZFoujvWlbzS%2Fna4dgAuFLAeJlufbSdmK8DeYsnSUGQsbxh6BQBD4F700m5%2Fk4JuMxiRi8JJS%2BwuETKw8RQYp4o3plMnBPAbUXQycRhugfSjSIARFUebQNsaVfCyIvNvHCBb3LkTGlZ%2B2Ow9MIP2%2Fr6Yj8%2FNyq7ifZqMC%2BFrVWZQcAATubtjPsajfvLlk4RpauxoMNuY4ZSflxp%2B1W4EWpAHV%2BAFdDBpQrIlGX%2BGHlSx9WhFK7C51U%2Bf6hHciI0FgMq2P%2FLMqTPeMC%2FWDAzqKKqcaieddZZ4%2B23mJoQHTgZTvU%2FhyAaE0yge93T7rWYLtUJJ%2Fj6BjhroKMJudPQKcN3HJCvr8OUJavA6A%2B5BDqo87zD%2FSgYZk1t5F%2Bxb6Mx%2FsMMj9s8MGOqUB1kaM5xByfatzHb4%2BIwJVs0MBOzEl001tvT5CYdlbRf%2FMABJbVDPgqLSeHtnGk%2B7EEDn48zu5CIXFxPXgt8OyrZ8VUYam%2BjL4nPcOkrXaHxFuVZ6lEVlnoGiwDFYPZCpraaq9suPceQGG88SKl8ERzHenZO8xbZi42gM%2B5hl6e4Pp9PaGuif7e6OBTw3MwDxCYWz3JOfiWlUIkRy8HjV3wlY9rapP&X-Amz-Signature=ee6fd8e02c3c8397517901c8f8566fc82c39dd7c5ec2af72165edfbd54277779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
