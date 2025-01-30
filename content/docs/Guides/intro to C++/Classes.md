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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NWSVHCX%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB1uPl%2BmYaUr3%2B4zUNFicm8TLT%2Fzw4fqeE57jP3FBLSwIgDOpBqk5g9bOzHf5yS2zoUbwSZ%2BLDHAsi3l9WPJpa1pUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdxBu1lMv%2FMJ8Pa4SrcA%2BuY0M6p023154SNMJNeak2ddnOLuWh7FgZtHSI86dpAMftA5VGL5yLYjkOm6vKbzwXqcE99rYUHrx7mcvrRD8dvXLYZHZzCQj7lSvorD9Fp3AZacYmZjYEv5%2BEMOaUned%2B2TMAItKCYs1j3Ww4HQNGYeHbAQgEpPyunzjdvu5fHvOZeQsTeF3GgokVu59oCN%2FeNYeCiBdpcTREN%2FX78S71MbzERLC4eNrLL0m497gomPIy0s5KmdW1WbtSZrYOoNccCZWW2S2w6ikLorlnT8OGCNq%2B7iUmpegXX96tPjc9ttRQMH0UizcKwRV3k2GLMt1RJB%2FROQHBySi87IW%2FYkv%2FMjSTec%2FEeRz0Lkq19gAQJ4sg8wqM1I0GcDN%2FckVRTX%2FjLnZoCHriYu5jcherTyq8Memp%2FVyAnl4pySf%2FZnpAhzgE2tgxnFYvrgf%2BPZZS3e1rtT7XpsU1xK7nNjPaII%2F92UrzA08JK8RhQiKTSUFsVkINBRa3OR5DHjqHNJaZEtU%2B5KmFUPwurPqJVo9mCChOn753aUof%2ByMVmz4z4VpYG%2FQ%2BAwebnK1azoADF9%2FQOedQSXwaIssCiVfjhdiSxwu17dGq6Ri9aoo3KX%2FkM7L8AloxVqgqYjlb7%2BCEjMP7h77wGOqUBJXbR0XPJgjUAGOCrfEnRQdXXh911QshK1SinFkB3aiKy%2B5IrnM8N04NiMNomgDieinxJcuw5euoDi2XLDuwq89ozb0K026c8r8RdGp1ANys%2BZW2U4b3zS2FPz5ccQo1n%2FGVpXVu2vHEwOstDLRKpM5zHrNQ7kRtrWWEnS9ueebwynA6%2FPoGnMHao4ERWfe8ZJMVkebpby9qOD0hI%2BYE0ru%2B0O%2BA0&X-Amz-Signature=3b14f6d5a05bf46f1871d124b30ff4da57cceb53c2d9c329d83d366420017bf5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
