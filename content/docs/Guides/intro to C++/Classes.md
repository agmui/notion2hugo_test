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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VND7JQQF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHY6bbkeKIflZ5rc1ZJNru%2BypKe0l4v%2F9D%2BdZ4mbf2RWAiEAj%2FYyLGBQhFFuqNdFxBaAMW4AP2QeLr4Yd%2BzAnPAkF%2FYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4PtqqkZ0pUUN131ircA2ZLtCpoiCIOhttaKWpoewq3P0FC855Wzxxj1p17pjqQoTsS8YYkcd4vOxlXjiAnwFzPDJJ73pydFW27RKWd%2F3EMfnjOzKQRPfL2HIU87%2BhqZVymSPnAGDWANTr0K8OT3B%2BFaQGnL4hOMki5pNrFJ82QSOrd7wpR9n5awrRMYxYYcx4YiQzMnUTw%2BkUQdvS9JZYpK%2ByRVTqzfpAaBghD3qtpVl74oss0EEgTgHPPG0jw1bUvAyZWir9TaFrIqY%2BjZjVyw47eoSOiaSqd1u%2Fyr%2Fw3Nn75cI8c9a%2BB8i%2FJmhUJkrOWiuZkbaWc2sB4zXh4IpS8AVFbR7s58UuDMdM1a8wVfQ%2F54F496wbYkKG%2FEk7sgBNaQ9ZYUl%2BLm3taWcfFyROrvzwA7Cx5HaBI9U%2Fr1YeadNYOTANYNKn%2Fuz%2B%2F1TzmDIuluzHTUWr1efQEb7zCISJAMQ1pUHw5EeX1w4F7tY70ocGnJ1kuUM9BomBgbXWrDAEW%2BnR%2BBQ1yb8cjG0gew62eOiawGcpRmfGOTZ0vvRduJO%2F%2FAqIFX0s7gmIRZNutClhW3SwS15MNTpK2PpcQ4cpggb4qq4WtK31Kih7FPZ6nUJ9HSeR6law%2FktuLrM5xFW4YaTvgufrU5oPiMOWy38QGOqUBF3F749l7m8HSS9iOnFucUXyVAeODQcba0AjoAi%2BRnJDkiviWU3ueWoqwh2Zm0iB0PFartDATcrmjMAwdrvHwdzAODZ4185maTtSoAbuMyrCpmy4KTbyGSKD%2FYWuSBaCc%2Fj4FrcHp8GV3E%2FzbfIxuShLzhBSN05gTkIR9meu9nlYJ4Q3jweJGZMg%2Fjb0CEaIqA8hlIQw3901zyNO7bSkw%2B4TK9REr&X-Amz-Signature=4739a34d95c15aa84d8b0b813ae70671eb1cfd43d42c8f2c6e8b7e44e6b6b5d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
