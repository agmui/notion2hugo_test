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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEP6WVZO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHexBm5hW5QxaOVOKUwszPWALTEbMbRxzDK8GTIUyZ5aAiEA9%2BxFEifzHXLQ16X0zOcY0Ftp7QMjifINJ3UN8qoD2m4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDOnxOadRK2RT0eNWjyrcAwBb1Q5bGQ3IpfdW0iOSL1uSoLtcTfWgwKouALsu0p3S5Udmlz93LUuJDAbMd8uQivtnHlTTeuJRFWio8%2BpJYh9ZkpQG5IAbJoYo%2BEZZege%2FNri%2BwOmAvVrC0t8MEkrZ6oOnbnWDtLhZhDuaP1d8%2BmLu3zE5yYuF6LC0LgoUoowWn%2B39QzSUD4ju66lZBWXdThVjtj%2Bj8V%2Fywl7Yvj1Tw4noxJqlst83xFSGAZcVqqFNZB9BVr5yoQzt9x9K70yewxmTXEoBNi%2BSTEkefeC4V3nzejqEIykxgjT%2FQw1x4SnVI7KkgiiJX1GauRyBWBVqUxJvtrmHKRbKrBmsfM%2FmmvYcHQkKVoFWC03Jq9o%2FbvQnhw818heBCmzdc7cRbnACBR3Sk17zLXq4tCpE5o7U%2Ft5m6GqwlbP%2Bil2RdzEqU9KGcGtPO6APLK69RYDLHnl0jr2VH2qO6RCWpLTsKdXLIOvjNYHru8%2ByZDklvwvS2GBZkrVgobeSXakir8Bakl%2FsF0SFPvycx16%2FrfjYbqTIbW7THVW%2FCURkKMU5AA%2FrhKS5RAUFBgyArOWodafEhIhKXB3gh%2FeEp4qD3LACmc5KjGYMuzwSQK4pfgSmZM6WRDwpqdsGngqy7z5KBp%2ByMJfi770GOqUBnu23aW6RK20wAj8QNb%2F3cEmIJTuT3uRr4OhPAs824plz7yXiaq5p84Sy3ohvbrnzRjac8Sbul15e3IT8GRdtm3eDd4fNUUZXqLCqwpxXUjSbOXqzoRNo1FVogp1dyJcI8SuIIlPJEZK1Sl6J7bOHTtfakFixI6X0lE7JYeHvrXfVifSq6vzGj%2B5FhDLBE8J0XlWNJoswPqHfAr9IJi3GN%2B1XIIvZ&X-Amz-Signature=0cf46962eab0db45c2de8d5c79758ace21c4cad22533fceedf26958e3c191e24&X-Amz-SignedHeaders=host&x-id=GetObject)

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
