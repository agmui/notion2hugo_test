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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V42FYT6N%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDEpRwO1kcAV5uTOILjWf6Zn6JnbVAcD9VK3UhPtDgS8QIgYPbgD6oE882QjkOwuhK2YDE5fpC76u1QM9BE3xwJn10q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJH0WLcH6gN6XFAwPircAxs1Huv9xhxbepcCHLoSlWrsehrXi9nJBbRhJcddwapiCENXWa%2BykuAHwi6uc%2FF%2B8XZL3fjlViX2fUCDIq5Rt3LT%2BQx%2FVLgAFZKyBDRgc5MiMEivLlgl9vG0e%2BeIaRw6EG2WE%2F2t5n%2FKwP2R1xyGPx6WFuKRV7%2FiTNcbKsTUvG0wIrVi2aFfdgUkqYQQNiDBxB9zDaJ4X6FjKp0jJK23pK0YtZI32zSTkXCuU1UwZYsh00AHc4MhZGzDSsJSZWOiIZcZDSTv9Icgqe4hwHyiakPctbVwQWIFz4WgXwdcOhV3OaBIQb3VDVSejpBixI4RtOQ6gSb1mJIx090MBh7qAKK1V6ZChgvSmyNafcHVu50NMINAj2MWhUE8o%2Fh2tIgbb1F1aDgdr7OSs26z816Y8UdJRMewEmDcT33701eVbpTIle88TUH0t880bM76e9gw71uc3c9bVvbdG2LFIu15qZLK%2F%2BdeD6zm%2FFb2QdhpcoAqZrK3O%2F3rT4RvEgfj1JyjB4EBn4n6VF7wt2UDN6OrkHLZQmP9jFZsjZppmHbGh6R%2BAVxM5%2FH3b27yvZUMoA1%2F4OhQqtW24E9Qg5vED4oRqTmr2vMc48MWEeZ5PhUi3w0jeViDY2%2FJAR%2Fn2wsnMLXExb0GOqUBnQwDrwaLORm2CUr2%2Btn48Zm3CIsRLSW8ROa1lkimGl61k2ZHPgu6JykjjycAh2jjrqXwKX5GJSkD9DNrQfRUQgDtJvMBD0Ou7H1lfEcMkd%2FUwfKSqqdKXzWBWyvfK22kBkIRnme%2Frv945hgaKGdI7W8lXdTAHZO1U5emGBEwb7HAy1M8wjC92uzw7vjl6UTIzN0kLpRhQbkbw6%2B%2FG1fvpBc%2BgueO&X-Amz-Signature=99d533e410221416bf92bfaa69d7901c67d22cdb0679ddb5eb40ffd9f49a27a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
