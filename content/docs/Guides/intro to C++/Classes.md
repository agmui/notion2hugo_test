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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THYQHMMT%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYi4ziaEHaX9sOYabc2XNVjAIyu2FM0t6ytkSJYRPnuAiEAggyGP8w%2FLzT%2B0F3IxrHa3glUlgxjewBJ%2F%2BAQKB0tzDgqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2%2FycZ7TckYpSVUZSrcA4L%2BLgpLB41c6rMsT%2Bz6Clzg4fedFLZKYFF6Uzah7pGPynmQmrl8PRHF7dN6%2Fp6TxlS4J%2FcxpkqMV9UklIXXIq2p4zlrQNuFqGzOvVAG4WkWZfDkacmAa2K0Mnzzuq8ImPH83z3YjHfnJF83NFhB61KDcHLib5AWx4VZyKeaQm1DIVo2wKDkhohMOohnLp6PNpy8r0YnT4t48sXyKDpLRC78XE2R59q%2BVtM5H9Liv%2FpUiCHhDG6ON6%2FFm7YtY%2FJhxygoZ0Bsp3CQjhE7p5tEkbaPGkirerQCVKTlgXe%2BpOfXmJqv3BedqDUVsLd6RMn2wZi23Pw33zNWgTZDUjtyscd%2Bmpk4RZg%2FLtPV0yEZf8%2FvinRm8HuYog8l8bEun4RW6gtLbXX8Xzii0ZajJTJs79kr3IGJd%2BLOl7S5j2fd0NV5qPEounBPWE4suBxhLPSn0F2pKmGaCVT3AxVSqkyKIiWNgmm8kAi3PzubXR7krm6MTszDG4KGeJ%2BJHMxG0XyW%2FmaIBamBuGV5pv%2BOTvI3pMzEVzreCemPk6VExX74g9GwEpmnc0p1wgbV6J%2B%2BH0cU%2FAOXtinmiwWaE6jSTpKwx7njgVItXF%2FY9bO0A75LDyTxqgHjxcRUqXp%2B7lxOMPKEntEGOqUBeqQQPjpvhvBlsoSOh00gHc9oAXbgfJ2Bt0euEr8XFW%2Fj0wKaAYVNFDh%2Fqv0BW5SbgIexXQHQXgPJg15SLiXImcNsJBKSujmSUlMipcQAk0UWtIi08sjvIHXhrEwDQXcCvRrzrxvbxH6FgQ%2BVHu4c5slmvxwbSUrZV7Kyi9WhJb%2BRwxmqrKlC%2BbXGkbEA13rDYRsAB2hhw%2FKVRKH2ia%2B8tVAv1Fe2&X-Amz-Signature=4b59383a6ca44d87a2920168486f448ba1355396ac9e74f8f5f89297673d1c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
