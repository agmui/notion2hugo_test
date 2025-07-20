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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RB456TK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEK73DBJh2kwLFPEPNYfi2AP7pmneCpE1M61pidaca2AiEA69c4QKgKs6aAoBQZNEbWT6F01R%2FFKInsc8zKAoPvfAYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClOVvnxsYzatBsmmSrcA8RWyFEFTWQBSiUrGy0VtkHF5TYpiGTSZY%2BWukHKowWcYlSGOsIEelSBnymRbcHq85j9aOERlZ1%2BDAGF7WXEbvw7KId%2F08lwjPbBB1DifxwmkS4%2FtSIeB9kR6BtSZ8D0KBp8q%2BcX11qlxIGj5xjMfo5lobzHLswwptTX0ocrlfPVZ62ikYxcy%2FxUW9xdVvRniq6e9TrsICBUXEkUx49dzQdEgcyABz8%2BFcyzx%2FJlDVCWBxhlcDTlEYx5AyGdHQckQSUJbqE8T6JJxZ7p1dIEESy8LiTGK28WGWxd4%2B2y1Qbc2%2B3ci54aU1BBTigDxAPTfavwKuxgOEfd3ENgQLSYBiIvCEWLOABL5rXQTmgMuf97ALig%2F0Tl8bG90lTkwtaOTUuCMpU6Y8WPzP4TMh%2BxbeC%2B13GRyVqseKHHDNJfGzpu7iPMGD8rG2kqQddkg9JloOi9aJZ1SEv5lAS5mvF0EL3OF8OASnhCS6cytuE3jDH0JcqIk8XYAqGZEQ2RLfs12PyqlpWpJG0%2Bb9O31%2FYs92zWSrumOYr5h4RXgLSUu3t23W8TSDvCNmmMJ3OUTlaN5hfxdgB4wOvDSPwT2XW9RKDOALP2rVWU%2B32o0Ag5N%2FMlL7NNRT8mL9qdwO%2BxMKv178MGOqUBC4ucaA1H69V6jXUB%2FSlFUcwWaTiQFJ%2F0lATwFrTjo1NIZRUhmxrB9LoT%2BdjYoq4VdZQ8GgSWwRrmKnOc4xMPZjege%2FZVuXyH8xrgwpIAPp8x2Pyf8bZd8H6W4Xd%2BQEeguOM90VmYXV8hU4w1eGowFKK7Jt5rMUvMByHnHlx70kPbDt9S447%2Fw9ORyg9E4p7c%2BM%2BOHbTRcEC6fT4pY7vVFgqT%2BkK0&X-Amz-Signature=e926172d31d24acfa26f59e5ccc1ceacea4221b4c7b3e3acf90040e31cff7a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
