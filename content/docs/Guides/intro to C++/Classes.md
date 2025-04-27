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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636GNXGXH%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCaTZiCwwS4JOdoeHm8mDG71OWiIq6pB5CikhFjZfwdQIgN0hQ8YyvNyyBgFGKk%2F35DO9%2Fi%2FBWOxbIPzCgV0cSTmwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMPzPLGqFue3bvPRlircA7qsY0ILv8%2BgNo7WmtVrF4KifYmne%2BO0owpPgEvUyK8wiAIBZUbk5hAOh6X5IExdR4l%2BiNHxeVSh4zULg4pEIE3lKNdFcg1XvFogiNdkU%2Bm3T3heuiRIupGKiUdhjNgMxFVr5u1gHAbTVENHmeAEQpGNPGWx7BAF4R%2BI1KIi3d4BpPUfzEekfTsdZaFgCCNZaGavBHU0RZr8ebrd1QekHx4nZ6%2BeKaUDJQV8Yt7CpXG0fkrpiOPUxp8qJlznqIsRW4Hpt8wnuxAqumLec%2Bq4Ji9rqd5KEDhdJEe5hx8ahTcgUoDNMUF0wG8ppQrvWqQCpxlKkAe96i2vATpaYX0x045GJJ0qGZqTlYsg4wXOuKdmgWWAVJncwVH2KpdzGkHdlXhua4kTxDRp3ebi1ha6wxvxrdVAD6leo6mp8DyteVyLGJwDpPU%2FvtaThpaDmqADg8Xoa3BQ%2FNTbG4WAjxJ3hulwm%2BIyf69axroe4gMQZZVS7BCLuWj4zOeKRW0gkV2ko%2Bq110VOBvyXYZU5eFycHUMwWdHA6daPURbPug9LYqAdBQUWtski4b%2FHOZeR38I20JZkwRo5yWsF3UihE%2BWqz8vMXnXfnx3k5Lz%2Bd6S7jtjGgbyWQGOm6KUPpKSbML%2BKusAGOqUBkV5XY2M3i7FYDHabcxHvB4ApHJl26ZBCavdJJd67EmQKouvBJn3FaIZdCM2%2FgXgYfJT0yeEXjea9IgWEQeHMyaL8xx7Ai1b%2FjGB27M1gYDUwLRAk8etwrWHfnHwA0pcr%2BG3NwEOs1J4jWOS2P629X1kW83cSUQMEaTX%2BTXlmF9KDGV5YOI6TPxA6zVCcFkJ%2BcGn5gF1PRtZk28saB%2FpiD4%2FURFxi&X-Amz-Signature=2e433c25c5491a61d7a9123a4ad8296c2f8cedccf62d3dfeb2e7a50a37b5e159&X-Amz-SignedHeaders=host&x-id=GetObject)

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
