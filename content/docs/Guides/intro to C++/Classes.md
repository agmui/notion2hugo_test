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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DYBMFTS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIHYC3su%2FU3SpFAQVJLfK2UynNR4jBLPlg%2BmQ1IidR11IAiBd7EIN%2BTMlOeh8rZ8ZALZCqvG6XYcMzDEejXCiNtE59yr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMxF%2FX4AtIRJXp5ch8KtwDrNOYxBY1l0XeSFk982RlvQ0S6eXtD2EhUTMCdxY7TGGNmxw7mhNArf0iVSW0cu7HunKz67Et2K%2BFvNRaNw5WcDDC00G0G6BzTuj%2BANT83xI58Fl8DYFJCpTHpOaVc74nTozJwAsGgA5bV%2FtMRlMMWopm2r3oeMpL2MpnQrEd8B906OZ2NEYd%2BM8DsdjkaCj0BoaSledNmBQyC38NbaWiiGAebkpfsENqamFh15ufd2iZX6CE9gVhLAXxXpPRQPx1mU4CIsNUlx5TS%2F0%2BDitYrd4HQz4hybgnZ0L7A0JE4eyTydbBWGQHGJGsz01MdZGaXnm0sovzzTdidSLHPVRhmBvzpRjs51mfVNs7%2BSp64PP2moE6E8Caj4NWAnEXe3ievUiqtil6dZ9yveBzYaO7CSjFp7o0a5Ev9XPQXW5pgZ%2FuD3lffyYQkDjsdMZaYUuNoMqGcw6%2B25vgSl2A7UBrf%2FcYk6OxOB6LI6gHJal5BrVRF1Bm8wEbBR82dtu9AMsHR6C91DHm8H95nHhGJPG05b8UmLR2amCbIvgxQgg1cXAnpHRA%2FI1m6WdjfLyjQNrOxT5IZIFBVGQOq2Hi0lGOMEWmf061G1YV1S%2BnNcYMQecMTEHmCoPlCNRiX60w9ISowAY6pgGTBN2M9A6XNbdeh%2B0a7elukPZZ8IfOD5oRLJBuNTp8vuIwbugK%2FNT4i66NkUbAZpV12H3vLiJXJwOH5CHCPZ7dHYFd%2BnGYI4pL%2BXljf%2B4aesM%2FIUq3WMC6RjqNEWzZgSlm2M%2BYOtaj5roABqdam9bGGe3k2qmEnpeLpzX1Lv9fsMNBdYPk9JXGu6uCsmkrt02VuEBdgGuznyytpZtStN5WjEfQ5I0m&X-Amz-Signature=ff3728b475ecb982aebe8721b08e1a722321142145a3ff55aa632fa10d0cc7fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
