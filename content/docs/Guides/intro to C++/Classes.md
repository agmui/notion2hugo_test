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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJNVHVWY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErony%2BORvVa8DO6C4%2F05uHbeCLZ6mpq%2B0rtc5GJNkgWAiEAgBqJ%2FHgwn1fp1ceJ8U62XqIq7ldbuokc6i8Ttxgdtd8qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOFRxIblw8yhv8HEyrcA2bCPEgt1jBcwBSxyCE7c91rHMl6ZTE3DfWkYlPLwBp0HwMH1VM47nOUh4LRaCu0MbC5kuNmToYOigiz3QA36cCZ5Q7FjUlhB8ZsAQf%2BK8Mpi54WsKzEme8crNnaauDi8IU4bgohTNkRgqOU1%2FW%2B1EVMo7t8T5DyYicO6hRBa4BLAf%2FIefL6mWDbEQFZIEMX9VMIk1ujMHRqq6kJ4XCgM7OMhmAcF7mve0Zda1txneP3DmurzuO20aoMYG6SfpPymsZtU%2FteV4lfTDJ8drwPK9NT3rE%2Baw4sPwsti%2Bf1udUJeBk8oPW8hxS%2BMGExrH%2F4qZ9%2FVqL31ynRgyF8T%2BDZE%2B3h3kOBqTZjyphkTzJ9TBrKJkpQsJ%2FJXymebZeidctjIERwNC423AyKi7YhgECftRaECVEHMZCbYtOz19z3w5kUQIylRNx3sWsQqccSzsOXwEfLvEbT5u1YC2AQ1AVTwsXFFNMGY3Hq2W0xL30eLSOrIYLU98r6F82%2Fsj5eGqKHr6RRPZg2YA%2FG4NaBoaaj7FHozlI9rIDVTQDtLeEXm%2FuxQ47U8hBovkmIW2jR83E3D41Vl%2BLORKvm2U5hW0JzOTHbDiqgHTBxracYKZvIxVvoayKvYi81qDvmEdEmMI7VzL4GOqUBt5qLCZPgon%2BI19Xv3zcwFu365t8GOS3fphyZSH18uL5%2Fv0rjVFFJ5rHOyElE0E7IBEyOjwq6Fe7VMg72PZTB%2FINc5EJTWHx0cSxWh3pOmE5DU%2FMOj0%2BQKk3V1qQ1wmCWQ1o71Y58BQku9R6scz774orbW1TjBnVUBWwZK9y7jFax1KDugD9l2TCuCP7h6umL5LLBOyUspYoDTdXsHJDsSWSv3AcH&X-Amz-Signature=e3791a00300ed677c550269319e548f1bcfd7896576c2e9f8e27982b429698c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
