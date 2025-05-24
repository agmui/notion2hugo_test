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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627A4Z57S%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDG1gKy3gQIYQjuISydFsHOzjbllzg%2Fm6llyVDEdz%2BEegIgL%2F9pF21RV%2FCMLqddtnV2Fxo%2BoWc06NpKDrKy3WnnIF8q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDAx4BL9pCrpptfYZYSrcA6xU2RcGvPB8mdSpKtkqvRqXqGr4aOXlT3TQWLRfAMglEM9Sehw2xvL21adZfzGQFiWVKbE9WXkQxnew3wXPk1cp8Y6Lw6DYfNNq%2FDn3bBxJfSZVxtU%2FwLmTCnp3448qRvZeM8I5ddrYUDyT2mpj2rlRdq2mZzgYzMq34iIMKKZr9UVjZhA%2FekVtWWeRz94h3JaCn7bRxZ6tMamzd6QDjON4B4Zp56s6TijzqdIenzfg9UeX1Fgp6Md0m34e%2F3XRhJG%2BzLN5FLm%2BWG17IKxjJIw04%2BTkIITxyg7ofxvhSKInE9Aw%2BDktJ%2Fz6sVXdDKxUFedDZ6aILUoRU86Ms8dS0SJT8EMUS%2Fi%2FvkI0De%2B4Xl8jS52UA0Sy0fPotWbYXD4tP%2BI2qShAGPnHYbX%2FXjUi%2FWvewMVH%2Bwn4ZJRUuH%2F6jgdv5MYPCQi%2FonjS9uHloLi%2FoIfw7rIlvCd%2B%2FMKe8kY1LIBNuTa1Att%2F9UvIj3xHzkOvx2QAFpt1tG2W6U8dwiNLuzdYca2zA%2F%2FPIgbJUgXtAkmNmhZmzOgbOZo9ojlVVbFzhjQwNHP3k0Q2gNUcPrE8g3lbmjm7VI8pRmTaDG2ov0pc%2BEel99O0V4Zr8W%2Bsu%2F5hXBDKICHzIj2ff5ukMKOAxsEGOqUBqyR5020Z1KjfTTMYaI1CWe553cUcU2akuhBi1wlPnZ9c%2B%2BururVofUMX%2FQpIWrQIN29EOofVGtQaktVt%2BlhxI45VaSzKZXAJoHt%2BjMrGQu%2Bdpll%2BWayl6G8a%2BxwKQKPFpIRH1jFmy0GzxSzlQfo2JxxqhC7qA3y1qVpdhsaaLlQuVmjceLD2j5qZqzyq8h3%2FTxpP87hFlql%2B0kqK1M9NyP1JM7uz&X-Amz-Signature=1f61c93e7412dd421fb09e079262c961d29c4a79140c538aa65ef4276a084ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
