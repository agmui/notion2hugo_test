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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJV7XOKF%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLwjdTa%2B9XYeKGOFtzGC1EhOoTWNll%2BwIspZYrjPYDUAiEA5P0%2BnvmBWowHAQ9m9ifyqyhzLmKZircp3QsP6KwLM2AqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHKLESZBf0BvsqGnSrcA%2FIb%2BQaaTa8JzRjR7WStJl268iRQnuJzd7bKGCndNx1uuli0J44mFWzqm5UXI6K07jrNTMbIbzaHLtft2qyQEkmBW5fgi2lpGZpANFF60XBV0NB5l6yqWxE44aRBGR4Rx%2B6x1GKT2TldJYJLrVP4NR9%2FpHO08h6xQZxE5Xy3ygE8rxYWcpNjJFrk3p0LZNC9yk74VHP40cIDorjlCY28s4NlFu%2BWwVhDa2WWOxqbbHAdyejrxwVfWWMRv9%2BrqOGqiRhDHaRqjc2fpEG6ixgQTCcfJeldW5uOvYuwGY4uqaKxu7jjvsas2a6az5z8iAM%2Fg%2Bd8t8yLvvs%2BMNvUF8F7FzrJ%2FQyVCbPoLX8l%2FCjfLRGgb87vi5esWGILBW1QaqldKczhDezxjx9OxsXuk4%2FRyMn2woV9eDrGOonKuhSbrgoM%2BAIafhYcCWvpGc4qmJpN%2BGCKKUfTdf749Ybs6L1PgfktmYSjCz%2FwmocEgb4sUsPPiN9rmpuigAmGJTCTfF0lVb1NQjYyVbKYgX5fFfG%2BgBye5U0yKiwzoQx%2B6NbgW3DXwJb1TYhFQUYBykJfxiPsjxn2WyvzhD7ucoHE7P%2BKSFBIyNA4OGmpOoz%2Fr8zMTXyzJlWscO7rBAYVxFyNMNmxzdEGOqUBZVPMNWeFRN9kXcYVf3EuaQUnUcSMwl4OiHD49eq4JHCMVN%2Bk384JuE5Ou%2FtkxpglzQj9Av3A82irHJPmaPgr%2B4gGMmLykdOmb5vIbDKpYx%2FxbkmT6Ytj18X8WJyLpNQqcCI61WNJiOLtB%2BslPQ8zWmdwcACPxQQb2oDv0laGIpf5ZB1s87tPDlVPHG7biOUOuCtDDaEmpeAQMWT79lYbY83qfBMk&X-Amz-Signature=3f26293b2c8fd6cd74a7baa0c04122c321704c80577f92335426b954b028e342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
