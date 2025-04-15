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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNGO7OT2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbvnlpgdcUDKzU8bRpSsWM%2FvY0%2Fy%2F%2FaN%2B2K0WzYfyfnAiEAoedFVQiJN8XmjRpCsFM5ZDZcJgtbMc%2Fzx6OQIoitDFEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDCFcAfOq8QrlPWBZGyrcA9yR08ic%2BAsPxNDZUmscj0v%2Fslpn3Y%2FVOzV9ITWAQ2AD5T1RUgWmQzMURs87P5LXltzvT6A5aYcXZNHbPTaSi9xCOrCDBIvTG1fJd8wHrFo%2FBILdsn%2BoI4cvBktdWx0tdfPiSBiWm1NEcdq%2FQFycdHKGGK%2F9L8F%2FpKHCqYhSSILZYNZUmNay%2FR0bcchrjZU4c5LmLArdSjF2DrNhIZ21HxJtCmT1c%2BMrkPzJzCEKzBQXP6xPhVMLkwgVQV00BN%2B1u7SPxUjTSY6D9C%2FOLwTbprVHVApdwxfCdeYB%2Bbcb%2FViJNb9yrPT2R7TbyuRllQ33DldXWcYQeBJEoM5JZqWMHxTH7MS79pbpIQvQKpjmzfgHfTAvGZLRy9B4AK55eMZl1UX5LmrcHlvHpMt1SuXaSGcHlhLs4y8lzo3L3oKOmI6WTj4P65XnvnbwZcSgx745L8ei%2BN7lwKnTa%2F7Wb%2B2dnWGP%2FMeHnfQKMvemiVkAimONJ3pcCbofZFHJRDUWseoL30ib71LjgXXbLlSejmPtAxozZbu5fjWl6zrzMNS%2F5UgYAn1MGIqMBgEJfuLbs1oa54l66LMWfnawjZQADkA%2Bt8qJP0nXu6mi8snobPQknryjRsKtSRn8fBQc3slaMIqC%2BL8GOqUBycxSe%2F%2FdRS6fIkVUtrwAxYYPzWFNNQUrDn6o6b97OIeGg3g9D2icIYetYum06HE3qvllDg9HVxgRhjh83vgnVNiNITegQEGvyVAqn%2Bl7127b8ZSJU5leEwNl51FjsOHnXQRn8%2BvnfzrTBxLzSLVfPM26Rv3xkQlAa1ZxZF1XCUpw46MJk0IxT%2BkDbPJhYy4xOPSSyVrPu%2FRVWEY1LbOyNLUjWsk2&X-Amz-Signature=23938bd657bfa21de73b328d9f7bcadc0e8d5bda886f4e61ff0b5d319dca3513&X-Amz-SignedHeaders=host&x-id=GetObject)

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
