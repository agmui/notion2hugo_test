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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLQZPZY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0avaYl0fGlwOtnefa3G7%2BxOgJ1%2BnOrWdjOB1GZmC%2B8AiAmQB7f38iQrrLV1xhaOdR4c6j7xPMfOZP0s2%2BXnHRFaCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU99Hg%2FfrINb2uELKKtwDvpfwRFyLichS9YCIqfU74w1Wz3z2V3W1Z5LTincXDPECeA7qDGVAQOsa0xMWLrHzUDlm377cfCvBGxhUIoaF3iUaDARUK9JtECwGmeUcdTgqgJiXnjFeNDsNbMwqGiGINke6BuG4D7E6TPGdub3KM9CgOpdR9zFgt82s5dC8s68PqMQ5qNoIKLGrmdS9kByV%2BR0HJ6nN2yPGnmZwsR%2Bc7IJrhTxFjh%2FDM84MAW%2BT9pzpWl5ChjpDdjBHPA2XQ8AoxaiJvUxJ1ltNFok8OKa7gy0%2FzriJIkW%2BAzWZ3HBG93RXnptsZLI%2FmmAY9DzdZ1VimHG1MWAjXFhGKIUaa5SPtnarcC%2BXcM5JAY0vLLKTnpzYaYbQ8BT71ltuzVanHC8kOiPcKBWe3P7BRpp4ClJGdN9uE6iR%2FxAkkzYPO9RTwStVO%2Bkkg1X3%2B49%2FTuorJN9G17UjDg68BgqJiDjUewj1qsOUYNUzklcMDeMJYa8Ixg1RuEHq3VYPZqedPAmbnlb1cGpCzWPNmb6ClHDhuOnyIVGTDxWD83oxmG2GqpeqYHpv62HlgQpBunHSryiGueR%2BV%2FJJflZ54ndlD5eFKWZgsqiV9cC%2Fk%2B1uVYn%2BOvWvSa1QMpTf3JIKf%2BTFMB8wx9nMwwY6pgFICJS00ptVLx77mWmFAtgjmXNL2RtgJwRiGj1xUyFOyQxVOb31ukSyRl8rHI8k4ng0PNtaUrUJBGevFdckv8WejJuiJEKmxb3bGcq9CuJStqZHjkBEbMmeqvKiTVhBQDX9rETG1b5Hhk%2FbsfLmB%2FehOdoUDiMECN6fIIuGvFXp8feZLbRe8QuUBsxNQUubGaraiRBjzfOSseaG4Ylg7LlcaJztsSN4&X-Amz-Signature=ef0e03066f2a533d82854bb1cea9b03b02506fa88a6892ea3d60161f80395495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
