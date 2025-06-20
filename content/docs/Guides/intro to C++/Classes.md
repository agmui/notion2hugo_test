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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQHWP742%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyENi3GEK8toh79RPUTQjYHHupHCW6woDHiVkVKeUASgIgSrTY%2ByF%2BUGPfnacFE7FpYH6RmolCtywqJpkTM5fXKs8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVM1TobIrKO0b2NMSrcA2c%2BlG%2FpytgIlbBqbTdtxk6LErpbs1eHJa5t0aBBJuMeSX4FJxf1OisfgLu%2BzwKV689sb%2Fd7SgWXgKOY5Yv2zp%2BR4AyVuHZ1lsLUgsBOGSXSTpN%2F%2FHTmOdYQ2jslNYcGHA8%2BL1yJ%2FaGf0WHjD2hz9XH8bJ7mfSE47iJXJZ5tcYUTTn0vDdDuKQQYquahoJCrLHfe%2FZUbKL0UlWYc7ZwSkPwhhBRVG5CUUTlVeRupBYvreugDHq8Uq5CrMjddADpfc5rLTdrujVCkSqDnSRFCTQho4Op3YCz5yfPvEQnewkxk2k3S3v0A2e%2BhcRmzseRFWomkqcMTdBXI%2FpuUaT%2FUiHDD%2BTYdGQr3bsbGFfyb7XDRZe5rRcc26p8s2giGLMONmkUvTqsHfgsVeeZ6SFYni3qDXz59wCXEgXX%2FVR543Qny9E%2F6Zzzl1vxy5TrzcjedEf8kXIT%2BGRLuuUspWeVsgG47vloUH8JzCwb6UeHvK5Kc1sTf0MRxE1x%2Bg%2BfWcPLqh89sIkSIe1Z9pk2PdFajW6EE4iPsa3pOyCsT4kNaASt8W%2F7ezNUeAIwe2QfeW6WCiMbxRYcvhmrj8f30tgGHm%2FPGyhIXC1CRwM1gUJCNdGLCN%2Bum4cWtqR%2FnGkTeMKCO08IGOqUBubc24H%2F1a0taj2NmehHomdigdeelXBQ2241u09ToQA47loOrMB4zupnA7bXVBR0e9QItGvwBK820tVs0N0YiajJjx9LzxwPkYe2mPjrTXq0YiyPjOuMAxn%2BQdYcNSY%2BG2sZMvh2hWvjSfTHisIGUeFyzfU%2Fgo6bWrN14X0r3FkvH%2FeL%2BFCdUSzPfICPCuBndqMCI%2B3XJqU33EM5OOTSOlIvmHCsp&X-Amz-Signature=cbeeebd0d19f2303e4c4b3c3df470ccde7b967e8d3e74bc7c76fc6ba9f23783e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
