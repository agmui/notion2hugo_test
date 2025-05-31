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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTRAJNZJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc%2FTStqxAfTIMperos6WV9lU%2Fc9hgVUs83EgALn4c5ZAIgKEFRK6bCc%2BkO8f3dDApRJ6w12LJOMDq%2FJTjaLxsxmg8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNMneb%2F2zoTQA3R9yrcA0iQ6jQm9W7yyVcCI2G4YPz4%2B8umaeqldqNGJBfK8EFdZ%2FngZewl0C1OSNybbOWbCHzROqPRo6UlWIZbpebi1jbPHbDzFkUtVOAi2PfpvcEo1gEU7adV0nNcL7WOejRRZIjxgaPedPN2ucx3h5yBT4BtYxlwylcHRXnHrco5Sgiz0gK8hnzGgPUDc8dmLnH0aK6hF87Ooe2oQaIEeeyXqvpXPtBUZt083HwpD69KNbqEI%2FLfUN2dmqLlSQgG4TrNoNeajr4RQWnpgDV2VioIC%2BgXPxlwOJBzIDcY8GhHb%2BDQZBSgvpAMB2qpSb2xZfD6T%2BgIJpsArGvX4Vk9Zrf6FEhxLWlHLpy04UxTePFzabgtZoICRGK9A2ozGGSxjwS%2F7RkF%2BJkptpa5q0%2Fmuu%2FUIK%2BFD6sK06PevuQ%2FvUCdBGNIl2PyHtKcLkO8a4GuXXWfCMsw0%2FNosIdA0WgwYSJUsoTbrdUGb%2F0rUNetJgi7AUOTOzChmu%2FIyycmfHfQGUvNUTnermE2aeBTScZeEF2YqhWueurZ6MIKBTMR8mkQzEaikSmNVOvxUcU0RiMWo2213%2F4tzhlrwl2RSbJmeHnAlgYQrtmMagfVCJTG5aUZ5Spf9L0AjGX2oA1W2XPYMKG96cEGOqUBfdFlMfy2b3reaTfSDF1hkDg8tR6ryjlDH8NQZRflPX3FtBnxK4Iha%2F0yqcoP7ZXcvlgNsDOX5dhLXd3Tq6KfttdGkGPAgtfPAE%2Bpn16T9gB0RVbtKllN4G7Um7tA6WwJcmVWImcMN4f3CS7Q7j9SegKKIMceT20CNyS9Hrv1SEUdgEo0TwP3kFnhRdBBHLXhbySaISrNFuZz6ppt1ve5feqBGRWj&X-Amz-Signature=2a3f1d8247984cdf18cf0a77b2eb1f3750290f155df682ac9c7734825b543d40&X-Amz-SignedHeaders=host&x-id=GetObject)

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
