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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672XCV5VB%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDkgyCe%2F6Keg1JqGNpI7CKDyh7bTsUAfW4ObQFZFwzNYAIgMLa5EYwBCXP%2FJu6thdnZLGvYI1n9st3ajH92zLt8QVcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDdT9m8HQsF8xIh%2BCrcA%2F8mq%2BMSCyVtwJSTMpCmyVFAEkHZ5kTGccbaWjk9SJwcAqture1Fs8dj488Z9khGBc36%2BMvMcuVInxC0R73tayHUkR70OJJ%2F%2BUbGxF7aFZN1EGR%2BJAQf3mPkU%2BJUO%2BOcEZoL04ybpYx8Qe%2FGLNsSTELps7bt8bIcBWg0R7bxwlIxF7HR%2FGZ8gyXRHOD69NVQMiUphEG%2BDqmhzQLvSs%2BYncnQLGZk0GQSlbRWslroA2r287RKi8X0RhftuG4iYH6y171kpRz1Dxx08F3tgHDeWPCapVAROgMg1SMD27VXpyYatLHZBeHfnsJTIBB7iC7xKP2Tbrjqkgm%2BO2aDlEVYu97QTnpNIDDGn9j4nTtZkFu48Af6H6BiSqqTtJohC9rT98oVqddFJl9QHU%2BONncaDmMuYTvpi3xUT7lSahUxdKOO6PwHc6lLgfZ551W%2FlZY%2Bja1hnAoAww6qTNTViCIAAe2memrcrVdUQv%2BjHwXghLBdKTmMBIZhpwtFW1uUD4ZeHHKhs9ZtGBsfnZwr9J7ShCRDTLRD%2FptlVv%2FI0YAyB4X2Rgf8Q3QIWuCGJPp2hQC%2BMtm1qAQooRF7FLy8VHQ4i%2FladD5fFjx422gQFyluzyoABJ%2FDOgqkdPUl91jEMO2%2B6sMGOqUB0BCsFquxMlf4%2FWNj5M2dS6TwhZmbtPn35uLsBiXa%2FUXoYZ7Z9aR1g8yreQzkJP3wmFOfagmjwcyTkdBxv95J0IlrWn3zirE22qtg1XXsAKxKhBxJPGmiEfweaTkWqgvxlL1s1NpoYK82IdYke4CKz6t1ObD6lFIDXosDAiai1s%2BtIhZY6h%2Bzf14I27xLPIHvTs%2BDeVVlbQ3zRnH%2FKrS5dGa32J1%2B&X-Amz-Signature=68c90525a9bf8ff7e552861b62782ccfcddef60401e6a32992c5a0150b9d630f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
