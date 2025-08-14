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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL77KMUP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDewbZ2vx%2F4iwCbGOkLiET73stS4z8KPxEWLGlX3VUGCAiEAjyS395w1VgeLC0iHppupgiwFGSlM4ZA7h4tMqYxZZWgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOQIury05t5ZSfY0ZircA91RjFGwdiTH9uFZVHr%2B6jdQvfrSFtkxWVPlu%2B0Rm%2F6B%2BwknipIunLrwKp5wRL7fjq3T75NjL2DYeJkmWWFg785r3BYpQXIeQDBaNpZ1YWwairajih8ZIpuu1NRPnslGypdHq%2BTR6E2Jx1s7nxo0nrfuf3NYFd7Snvwsr80TnQc780NCr2pe6GDBqbeW6borcm1gLMcUxlRmsmWVPyrkbUhXtv2pXG6lBMh8WoufbmTuiiBhCse6KdWap7DtbJnPGXqqjJUIyFrGRiNMu3KJtE13lHEWn7FvUitrrNHndZ0YCoVj0YoWkVpq9MViHP59cvCYBsTwPWqb8oCxVJPcHlmCvtoW8vVHrHkCfb64n82XqQcsGgdq%2BjGz%2Bth%2Fl%2Fs%2F5TN4pHKysM1b1bApVbQiu0vQHzgG6%2Fy7A9%2BF%2BntvZrvRcwRH4Y8JuLGHcgEieoUlkgxsY%2FlwIDVT99WqhZrVHiF9pPUyzJR4wENLGxzlTrY%2BV8YCk%2Bgn%2BU2g8kM2fUwXMl1qS6ER2wXmpfVe6AQ24I3FRwhVuqZdcz7khQ%2F1Tx0rJ73tzclVv3bGIkNsCNtysMmPJKHdB9q5WdENnQgzkpYNxUOVu1ooiqkoPl35z1lmY480cijw%2FRQH%2BU4cMNj498QGOqUBgIudOB3kJwaLKheYHEX6eqJq6LnRpWqjmFMT15Q%2BKDU3NN%2BhTWAl%2BqEy2nA6GkaydrKvgZub5Ymm7DbKLXa28RAyqxASPBAx1ECQDAjJwn%2BNfTYNZsJe2tmV9WJ2erV4IhtVr5iryLPY1PPPUIpYNjRiIh8djHYBHJYsCkJDticiOUnnoLJSNrI2pbRhQ2ynjvph02ESh9wObmDKZh%2FIXwpKSPMg&X-Amz-Signature=d926359d59c496fd47ef278e4308f963b58b6d852e6be3db8bd48a309236d2e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
