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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUKMX362%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID72SXC4qmTH9gVTLWAOnxdtRhBSb1wZBHdk%2BLr2p8khAiAMkvOkr5A4XyKJDdFx0LEbHwenh6ZKqsS%2FLP6XiAJ4DiqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3hQGrenSmtPP%2BkpeKtwDMdi%2Fs3PU596ICnb%2FyE5n0Yy8URLvW9BoBev46lTEJWXuONglpa2yNepCDVv4qhxYq%2FrkDbZcl1VckGRJvKcPMvzPQW2L5yNEeWCXRVra02sjPxcifersnMYaJB7dsijyKTM1sQeSLnvoyxO85TWEjRVnfKIFDT12FVX2z3eJX%2F1hA3uPR5zmujZXlx78fomCBuE0Ln%2F%2FcuoYj3fXLULuC1AZKrOBXbOBKWWEqi7Z%2ByTGNAYZ8RChCKAkWujlo0SpfOMmImjfD2Ow%2FST7krUm4HP%2B21EzqTZRjsEUpgX7kwyqxfih3gdodmasewCeR8SSGzQyR99%2Fp5KiFoaX2e5gJcNQXW7Xm9YWIBilX6CL5Lbs2cishp%2FcMfrG2IBDdmN4v9i7qZ2u4jnzo24Ow%2FvOivCvzACU2ZOMlKX82uqgR%2BKHt81sXS2l%2FoaamVH1vo897c%2BbtfAMIh09ytGBqZwBmpCnVzY4s%2BtWXJYXHltokdMnc5xuPZVjShBfIiUpjrxeTC%2BX3wH5fgpN1lqX9TnjTUC%2F7CyAGwkabvwQu1hkKL78QNK7AMdR6gl9dmeW%2Bd8ckeuye%2FhStUSZdxNzI3g50W15ko7rQ2ZRjzlIhF1B%2BrTj0zQiUxM%2FYgV4Oogwj5SVwwY6pgEw7jyXUMXa2rZfr3v7gNd8WUt2JVi9X%2F7eunmr3dJE5GwvLMHiZic7p52Gc4X4Kz10ZgZ7e%2FHnPq9PewLHWgdFmo%2FLsFB2TGCm0V8o4Jn6mgGehTpfvgwalC24nxN09w87grpAzCRx8ADp8Hk3qHV7%2B8t487st3b6XO58%2BFnO1L7MhAkUiw6wViZothYN1rux4V6mR%2F5hJ6MbP%2B%2BbFKisVKOuJ7PZp&X-Amz-Signature=9a58b625e68377fbae547e71d167ca92df06b0b7c5eee2a6e9a9931a0d88f06a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
