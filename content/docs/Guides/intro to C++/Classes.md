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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUJAS2FK%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7S1EvcdDgfOsKhmo3XjbDb6Yj0AqeURAx0oIhAHSdiAiEA3BqF11yElfb6B1aVcqiSbBBSxHZAzdIXs2LCjegMxfQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKLXvTqP8QP1hkouSrcAwogORC4crZHgcFtUJwB3byLUipc4WnRtSm%2B0e0TpYdXgMUuuzlsMSZgP1SJoqMETkiZC8L8pAWxjvPYX1g1B1nUVpTGaViqOXKn57XKDzqit886TzW4HK1rhG5HDt3K9tG5S9PuQpqhXij114bvYH%2Br24A%2BaC%2BbiMjQpb1ulzMJIkse36WJfbkkidoNBBBM7FrMGNig%2BTvjnhJmK95tR7IWZWF2Jf718VmN%2BPI4k7XvYxcj%2BVrIyjIEN4EHWay2ckpOFgQ8Kv4P%2FVRfHWoVSxVRa4Jv6v6mFPXd7WMJpxuUeiZ471EKb8dPRObY8Dr2l25jYEXClzvxLrMv8vEt7UcKBgMZvaKlmOYUhghKnZhE8QtXHn86Y%2F36ucDxhcjgXZFtaBaBkzddjs3jHqOJPOlXUa1S%2FhhHXqeLbnJxnTBjQwtqrZn07D8ARx%2FRbzCqKue%2Fy7OLA9G7R0ZOLtCIitJ7vDZei%2BbZpBZgLM0hetpaO1SMHP58eTsrs%2BYIonmjQX5%2FZX3oFlxUPCEUAJiqHVbDY2xJau25sXDcvEh9D4qlrIYGmom5%2BznNxB90LM%2FbOLMTonSiWyLBIb30rxnLhlzbwdNsPe83iEzTu%2FEc9RaHxllA7Nm%2B0x8UOQNqMIih%2FsIGOqUBFpfDC87n%2F8%2B%2BrczHQjwVEQFx6WULnlZqk5vYHV5wKAkaIyBAiHmpUUMulLoaKQ5w6wfjsZYYLinEFw8rzOrsQfvRxTd35YVCyB%2FKZt%2Bgl%2BJcOfcgevNuxvQJgSpIHceDFrzwluCc%2BV6%2F7%2FGcAAiK6QhkauCdEYBXiWMQlkQxqvRJvVpGL1PZIuzJqkHqZT1iBDCHhCwEjFd%2FyTAThALv9D4%2BdegT&X-Amz-Signature=fbf52d5b1686fe6e22ef34ebafb3f20d4386dcf62fa99fdf5b9df5db9787454b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
