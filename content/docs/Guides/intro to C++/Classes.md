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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4M2DJQJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDOUoHEIstq7q6GsNalYWfpuV4NxC%2BuKaByeYsn1hu%2FJwIgaY8v8R8qJchJxx7GMLoSDMwBcw3LSz9lOPanWXeBeesqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FCThgoDsZqNQPE5ircA%2BS6%2BwCY%2BIDD0QVx%2BKwUvMn%2FAtXEE45KuK0bWTFLnI5wfWUgsbkC%2FWQN%2BMgHO4rLGlEfxwCImY0hd6jy9ziPgXtMeFz3e%2F6DYHyWYH1w5w2SqY%2BVaGSRxny5R9J8TxT4BS0N8hxdgderEkle452AnLlPt9M15g1SmX68ODScooxHpcXeea3Hc13heug6GMhoSPeK597rLjE5aCdBnqwnwaDNZ3qKf5%2FP8ia13ie2DCUgz5mNguYvPfQL9mTNFAAo8RDOwQfHibOHzEPppBiElm19G5Wpl63DPfmQLrrH%2FOgZ7cRcsLlQW%2B9zaq34GVa%2BG02DgLNvy2hwEvhpezlcMgo%2BtK6NCaiNfQtAlCaUwX6nHxTh0%2BG9pbQkwwX4qhMZQPFqpMPsxRkdE9M92HI9M33WSOUsrB8Trh2tHU1%2FDpXE1pC4yzBrp53aCGbmptF5tDTC3yoKWVSgOxmcsl3ctOeK%2BcJIehiVxKJdP1OI97WF8umS0FdGoWuOa%2FiuC%2B3MQszGtueKScXy5U1yvyL1ZP17jclzRJPUg5c8v15ieoQwZTIuTivvgvGgjsDEe2BiTl%2BVuQNbs2V4KuQoq2flv4aFGluEbOAaAnvL3dl0iADAKi98lHQxGG0F4bTKMK%2BKrb8GOqUBEtwM2Qw2VhQxLhthca0NJaCVYLxx3t4gS4PKmpx6Kvz4GlmXO5ZrklqyXsNvSXYMLTVO0d9OsYE%2BA27JNg%2BEXaynGIvU2kcOPj6HKT1jHg7nETzMxXOzk9CVRhfzf%2FetsZDDs5How3eVm%2FEN9bbRui5rPIF0nQMlZjTLPjaS9effwiKuEUs9iIf9y7LgxSBzdzJHFb1j4Ah5a%2FjYiD%2BpZPYvaEyk&X-Amz-Signature=5854a0ca1132eec1c845d47c7f24b8369d0522101cdbe73afca6c5215df2fd3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
