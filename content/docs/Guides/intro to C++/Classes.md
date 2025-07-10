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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X25H6BAI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7NMPUu%2Fr5jR5lEkMzwChmEtFZjriCLptjc3cFO0BQvAiEA7ogTWl9t0uU1G6BxDDclI4Rmb%2F%2BRjg9haLWE85Ry6NEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwqmTWzl1XsPB%2F3lircA4TK0coXz2eCyGOfq4xkhzCF19oXDqADBwofO8n89B2IJ6gMKOt0LK3hq6FL4CbFB5fD5VsTHPkmXfXLpAs78T9yd61HrhLmezzW%2FsLsOQesBRZlH6cQVBhE3PysxrrqVK7T6K1JN5qKVrqyDW2BXCMiTX91dg35qS4O%2BXLH7RIebIMD5xE2OVT5lc1P7yov08g7yWATGeIf1dDL%2Fgt5kYFAJBaRjT%2B0JYGyCPgNx1834POdINBxVVHlf94gdCfp09SBr8cJANuYB2bxHeNgBU5RvqZZuum%2F%2BRu9GDjjA7OgQsJcef4rJfZ1WrNHiU8flm%2B9H4%2B%2BQPoxGdLWCGqQ4Guu7aoTE1dlcULyUbgmDDCr5BGdUgpTckisjkvfegHwlNGcKzA3ayKhhph%2F%2Bm9QSDd9%2BkPFzMLaUFpg7Gk9vcAgewIoROZawT9Orid%2BsAwR%2FS47zgAKTC1Km8yo0qxKl%2BA7LDamUYhIvBXYiWSS5vYjxHGztyc9IIjPppgmmmdFH24xu%2BT5cN8A6GgMkqKKgFyq0JGZrJjwvuLrBeOcLph4LBZdwjc%2B1OLlIz3Rs%2Fk3fcoXChliVLqGKp5YdF4CdK%2FySPRQYXxIz%2F5HgBq0o7O5MzrAYOgVzJeUWGLNMLfNwMMGOqUBsZegDYWiQ9JTGa68zGvmuHLBcqhrPID7cSH1mlO8YlIyOrZwg%2FML%2Fd0S5gSmd3bVebFXJWqnJhNnjv%2FZzJz%2FgAZY4ifTt6nYiS2xHG6ds1JFxvY3nP8D0uPXqkDzUJ6e3vtLwtHvrKcsVE6eqQ0AjfWhQfKilbMu2kBVtwG6Wfe3zlm1c6xdkK0Lsnu2XAJ5q0VrLGZ3hUQbTMCZESKKBuY834Ql&X-Amz-Signature=8493370b0efa999a9b6dfad27dc2728c91b0353a1962a31c99b9d7f422712612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
