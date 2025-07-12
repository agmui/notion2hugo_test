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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROPFUVL3%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXC%2FMlCDZwkoNLzODlh06IVp8ulXxAKyn%2FTcqId%2B1TmAiBKpCReoxqDE4H3x8NZxtCojP8pnB9f9D%2BSSdHcJ2dwNyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTu6y0JdvWm3MAotvKtwDp7ehfmD0p%2BbG1MC13ROZ4MYJg6GhLLixx5dG9oaSAqxrRD%2Ffj3vh0Yb5MNQ%2FdFiwcNSn7yUvyp6ZSlc1OyaOpLAYlWyGEANbHZxHq7e%2FPdawd26HsxjBtpGr1nJbc%2BTEpvy1SK8AsINA8bBV3EuArUJM93OqEWj1cudu6%2FWAz%2BIwnFUl22qdvb4Hlt0rXf8g1DY%2BSmFUqbiJS9RDWuanKWX%2FSKUUAo7tuMyLQSTrc5pkf2U1JXCazStz8b224mAxWIE8kNjcNAG7qlUiK0Tm7J%2FpWxbO2pto8RUNRbsZc3DzNPwjDZlvOGIE50V%2FFf6VwDyf%2B%2Flpw6217x89YNlvL5ixpGd2L5UNjriphQrVd2cGSzeqdqfpiBP1luCF7Z60CNJowM7cEJr18Xr04rwVMoK3tKAkgKLlpmPqKh%2F0fvjdAOnkPbUFgeslWZu4Uc82vFefWUucEtd7Njg9XfKZAJP%2FXRLYF2%2F4xdshLja7Ka7Ge1cNakL7eoD95r8xSS2AEBJ0ZrAF96FI%2BFl35EPR%2Fr8%2BAX4qC9IRes3tw89FJEyK%2F8J2eUXKs4i%2BqFrVwiPjZvIVS5eVie6c%2FohElAy7vR5YOQS8fCGoYE7z840TP0bCBPqOUh3l24aIgNIw0drKwwY6pgGatanlv0US2jdKeAJkOxE6wf%2F%2BhdKPBQO5PvQIVGJtE3aS85YFEGk8MEnAFHMOaVpiby89%2Fn6qUi8SevIvotM2t%2BtK%2BtaeIMBKArhG%2BZUtpz5ji6kXESQYKBNhfTtyuf1yyGgKh7cHmmKFKYI5oMgkbm8w1HqaoueAsfvBPq2t6lP3ns7rGqFY2fH2pvVL4SdFJK03hYPfFWdCx1c9zpgjK0rS0hb3&X-Amz-Signature=44a7afacb8a0533649b6622cdbd713c0ec810f990434880860ad27f9c2592efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
