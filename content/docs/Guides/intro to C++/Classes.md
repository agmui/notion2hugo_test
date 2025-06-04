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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VL3C63P%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIBXUkY7D7ofNQWliC0ckQV97606ea2GZIN5jqZFhfoWZAiEAuWPCfXK0OVxOU80pJRBguNkFl3VyuqkZBKyRW2CUSBwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDCU6Q%2FVhFV0W6SujbSrcA%2FicmNMbpiIipvSf%2B1T4iRZR%2FbTnM4BLT%2BCjsqgJVrKTHlg2aBRepZ1lHQlWTDmC%2F3SKME%2BW1b7cQiZCRwl9wzq04ZX4ygkBsUzKsqeYorA9www6KhOJVE159SVWNlDnKqoYybfcgkmud1B1IfJzlyR%2FPxaqwci9fPowvfmzFSEG57BzVe%2FfOZt9DCe05i7gm%2FSHrv%2FQ%2Ffgz0Q0ea0SSSe3L5Vhht%2B955OWBWnTH%2F%2F3StOjoV65NyHIinxExO2q4mTvo2q2EhPYsHIwWswsZR3ZeCdAKYYJCFxTkx8XJNYb56PS3nwamfJZW8lUrRCIYmqCiGxx6N4Q17NuWCx7IXAj6EY0wk9JZL5YACg5pUN1I3qbqZJ61Tw0vaOMhTcL1%2BSVmVhs%2FgKycC4hqln%2FvprPVUAceQDh4J9KvN5cMsiPL15H7KEmqXIduWbmPcw3FuZqVT8P0QgEhR3FSi%2BYTAYV5W89zyLTZ0yj9bKc%2FH76YKTZ2u%2FOmh9Mu742wr4EukJ00nHfs1IwaiG2uMwkzE4nY3IhdbmjBhwAhAOBe9z%2FpH2uPm3QPpxg177sbQn5eHprVVTPLMma0vKeMPYv9j90%2Fe7enP%2Fv8pq6BbQJ8%2B8%2Bj0vTZXGjOm6uVS68rMKfQgMIGOqUBwJ7Yb3wgUoDlouaoxIepXpMbfMIsNXsclL%2BkdJzSzy88jOBAFtVXpgObWWYQcZjoin7KaGalUVeP7NWizuUfbR95%2BLZECN%2FsqzDAWGmHSJkAm6vVtlk1t7%2FrRmsIhvLyaTC9y2hMKsB28E5Ctj2oM21mV%2BykZP3f97yhJahCUiuwz0VsGkUJtbSmZoGUmqvOTYvu7HQU8%2Fh3F%2Fxue7ko60fJRe1q&X-Amz-Signature=3c9f30ba033e8dcf1e26406c2c6bc201978af771b1e05658a5d3bbed28b33f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
