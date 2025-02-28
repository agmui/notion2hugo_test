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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DDAYXWR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCICtNa%2B7UfARpfIasxlRTHgfHOYyoik5nmQ6dwtqc8ReOAiEApHlX17EOVIgr70892nBJOxgvGFqgeyxe0WTRpqmURN0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoSfUmOevDxvnUanCrcAyVVrUQMgk%2FWV%2FZijWHyfsHPM6PXbrZ3uZM6%2BfbIvzbI2K5MTqITNLM30k9I%2F455QWcRLULCtkjt06WnGrtLWx%2Fpyx%2Fz8K48Tw3V9fSrbwlNqjy9aYXENnwC9t50WTMzi9%2ByggPp5JwG%2Br2IqoJJIyU2SP8dPy9drMOnCFE%2Bf6NxrLPSWcwWYlBZnM3h8b1ueVi2XsiHZmwcaHmTBd0IvymLuhLYlcQah3Yj4Ke4n%2FttCAKKZ7sBAW0ThCpQd%2FvxoQHsKV4U2e6b6rhAmLYTh64SBDx%2FChY3sKncmtQsRyUW6imMQyLptDmUlffV3A9LP6cDMYIeaPw9VbzCsdKOUbkcs3sky8KMwvPiVNCWAaOGjDOB5N1J1vRL4BaRPywjSXjUe5lVAN6UnfIq8J79yVGWyU7N6NK6HUu%2FeDmfOjAl42NzNfxu8YHQkfr7eQyI%2B%2B1ikY%2BLrqC4oCBmWUt4qFe%2FM9bSKo%2F%2BGTkTYiqyCc%2Bu6F881IYe8ojLjGdbY1YRrub%2FT%2FrePtqc0BW7xxZf45DZ0k5s1gnZ%2BAp4ZGrH%2BDgty6m4wGnDMsprkUFanrkw8p2iCcknIVNVMVWKmrImsMu%2B%2FePtoxL9XJqxsvINBrSDJi3lub8kJJfugvdxMPvuhr4GOqUBT%2BczsH4jzCQGyETU%2FWjkQpMj0KkppVr7piRHknnAZoxgcBF%2FUsErlf2xpxXB1DXsiMbg9Lnl3mw1FcbdyuaC51UZpZBNQHJPLxRh6YK61iblj%2BiRAyv9%2FZyjD7p2QWVwInjNwpRy30u1sK5VtQ9XF3eWc4xPlK7DwmjFi16Ch4Mv%2FczEhgDCoBjomiXVVa%2BJG%2BzbSuQxWN9tLDW0h2DDihVjIeKz&X-Amz-Signature=526ba6f27b60239f1acee341598989ca47c6d59987f75fbeedb99d931175a384&X-Amz-SignedHeaders=host&x-id=GetObject)

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
