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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTFNB7B%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDo2xQZl3oKCA8Lt1YbDiGgNTgXPDT05BcSzyDeW9UIrAiEAmyMXKM%2BfzmYJotLgvvFgpoVDb1MtrSR8YHWtlK%2FV0jYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEohrA2Wy4PDi487%2ByrcAxc8zdud7a68dpBN3CpOL291eqe%2FKpyos1GwxvrH%2FlSoNI0w17x0A7WRLthhBvyRGYjOKJ3U9d5qisBSKjnd10SwDET721qg3XyW4rGF47BtfH4%2FRLvZxlsU8u84tOZLbNseXyVNfpq5yO23U8HWzNsSjaNdBUfF%2F4hgl%2Bzqd8sRWYL%2Bo5Xcid2BYLDznX%2F3QhYlYjo%2F3IywiRR7Da7obvEK25iMAlWQGtqOYzgeNBGVD1AxWYvMu%2BtKzRUduEe0Tbu2Pgi3z8DfEm%2FnTqdeIsSowxDGFhS6zziE8qmI7cPdRSbnovsU1%2Folb9PdbCrHEznxkM%2FcqLHMRXfr%2BaM49nv2HyrV3HpusSELbCrwPRgoaRhgD7viHwdALB4iyNckr2jqOLlO1Tx6HJ%2BoOmzvTg5d%2BjGHZwJmxstovdqqh%2BE3f2Z%2BZVm05lQTcldddLeY3yg%2FD6i%2FZr71ssMbr80FPHLUA%2B6sku1aYYtBa%2BJX4Exou6Hz9NKwDi2d0yF82%2FTOw1tv0B6kP24vYkzezQQu0iWogjF3pPlQuI1GikksxZwNOIIrHOqw5JEFm67VMLjkqPU2qDoxRcJQtc%2B93no2099TV1mn1UZrY%2Bg%2BE4UACwdVhUG0DKgP30kPmDaAMMWEusIGOqUBuR%2BuGwNYnuafJj63UHoU1ARVuuQxgj01Z2rxRtYescSI9jf50Fsajre52YymkBrEix8PIsTTFXTibQbOLhJBdAIN9U5jmGXBlj5meCKll%2FHWNt0NanvXQFAts5jqTtJjMwViOM%2FNLvK8gayrpi%2F%2FLMYjo7%2FgHk3rvzbEqXjNkESx2rm%2BOo9tr8dbw2eonleQFSNZQ8f%2BxkjQ3KzsILGjB4tREAVZ&X-Amz-Signature=2796ced28e8caaea3ca7be6de63db53052bad7e2aa72ca11af6c76e0b7b66387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
