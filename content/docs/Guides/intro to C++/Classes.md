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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDYRVRDB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5sUHohFjfzWLATQ6IZ2W206cdxz7b38QIdI2Hv8THYQIgAMn6MsKB%2B4X4kOsJndXbkUgfmBAAs%2FLTBQwKwQaa9fsqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPC1Ppkip784h3FZJircA2QJ%2BBEpT%2Fmw1AHpD9EoOF80bAqLK9ADepIJAx93LMMz%2Bo1yM%2BtHELMJWRFSWnHayeECbatdcxvBTfmUqA1HYgyjjUs0c4t7VssT%2F9FOdHaz0%2FMFZLEVQtmDxdF0XLx%2BbCknTIE8IGErAUUviY8u6%2FW8Hv4tpR0rQ4ErK8HR6Y%2Fu56IH2I9pLvA%2Bz1KPkdR7PaW3ykYHybiTbVKRHC%2BnPfJC%2B9RRRu%2BtyW74BND4z72Wr%2BUBB6b2lRnCLfp%2Bb%2BxOiK9Ipf%2BF0uUy7u2IS05FY1G06Ych0QYa1OzgJiu4Figm7Xpk6tpOCTYIA%2F5LEa8zZZWpNXQMs4zeONZikQ57%2FiE5lMMDrEir92RQNnUI3cYpQ1ZZAgOlWUOppqDjTfaY0b53U6UfOEfdpbz9%2BrIKoq4NsgKwXeLtzLiOAQ23uYY5nCMug8bPw1kNRmn9kbBCFvL4OqbWjzkx2vExRTw5muqEC%2BiYdohgkWDhmjpp0kB%2BYJshezHQuvfSHSDz%2FlRu4fyPJan0WbZcktQS2Hpgy7ZhbqRQcTAKxPxq5QOS3NpyHyaBllqrF76VQTi7tQIqX5x7mKPRUT9QMn0YdFxr%2Fcgim7ZglNPz5RqN2tq70XFgqkGOdKM184Qh0skUMOXi5r0GOqUB3omXRCbrU9d%2Bte15qBvXkhLaQPZl1QEu8df6v2X7Kpp6mydav%2FyAuyQgyzHY2rWvjNaixk0Ji7XrmN9BbwndybNqcISbLysOasApveA1kKFpa5TgvxXzn%2Fy6wIOlHZvQpPE3QlfFDZJ3yOLksizx4PMhw%2FZyQ2KqkIgASQLZnjGuNSTJ1E8uIqfAuQZSE5G77MATOnSXt19WjzdevUdC5wh2Xizf&X-Amz-Signature=1cf7f6293aaa1802b382601fc67ef834570f0295a6b1ea6b39bd0603abec7b05&X-Amz-SignedHeaders=host&x-id=GetObject)

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
