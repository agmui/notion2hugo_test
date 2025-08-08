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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WJINORY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T051959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD77GIU07f9BG1DzQ1RYUbn4Pghx5lZyc%2FM3wPEo9tlqAIgcCUKp8oVE5n7fo%2Bdk5%2Bd2QZN%2B%2BdbfqkI26HUwSB5vMcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVttzE3jrsaRIGwwircAzmG0GPivfEZOC0p6L5R%2BcUSp612c4BfLkOYwDI6RpO1k2A%2FmuTlyvW2MVjD%2FC4RkjFr%2Bsh%2BU2pz2KJxvbRgBIOBf915FTcCFl%2FssCyg%2Fw4KtqmmrbhBlWNYgvqrEjF5YlgQUSH5esCeHD9QsPjAmIYNfQN3j70kTLT94fH9P23CBwNYUN8984VPj2j2hQgEsj3%2B9lLIZlK7Xp8XYQgI8XWlwO8Vu5cHifisUoON%2F93IrRzNLUVZTNTaiWC2CLDyksb4XtZpesnQJu%2BHy9Y4aF02gZGEgyrbxfhRuovm8BGMpl%2BFEXWUbVe%2B%2BF0hi2XtFPJXuY7abhifFxFduxpvsOc8ZYKHo7ifZcp%2Fzy0Yvt1q82SoFD3T82uIwUjOEzsEYzENpNuXJFIO%2BcurACgVcuQnKh102iVr97WPUfCmHxIYhknd0CBwCWa8tWfwst0GZQYQ98giq1sQ7Od8q%2B6s3xGvxJ0lQR%2BIccnRzJmBd3BpJDJEpjvqxhELlLA83zH0UDd%2BlWnMncnpozW1iwZ1dd%2F2u9Yp6S5l8WARY7X0N6wFRXTlkvYpjOcxXnHOXjMR7qViUlJ1ZtAGwdmxI7%2FIMHRxBTJB%2FNOFUFFX%2FrYr8Oy%2BX0M0wM6KTkzcOvi7MJ761cQGOqUB%2BEXwnagtFIcd8r4HhR14jRI8wjPLif272KLEIdKy%2Fg8DgMU43KOkC4Mi93BCdMbACP6idJg8bAJObK7zHe3pikPDjwxkiJ37%2Bh0dluusz0mPJKWCKX29IPWCT3OSMzH4yAF2yE2VcnyuUP02bK4HwGs3nnafeJKqFx775KcyJi88FAAeSKE2fcFJauoFwl99%2F1KpGevje76NNZ%2BxqabQblVmxtkW&X-Amz-Signature=cdb7948b0bdbf455e6147cb4e42193ccd7b6fb897a65268b7a672f3cf7dc6064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
