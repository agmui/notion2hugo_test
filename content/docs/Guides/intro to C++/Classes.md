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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J34AFXB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCA%2B51gp%2Bi31k4ebbsFmVIW4cFTNDl%2FbupRlKSubi0MvAIgVbiAPHC8rruXiqcylICE50FRmvDPk84ZVup%2BihY1zsQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuWGl27oq3lApg33yrcAyJrQOxz94O%2F1bGVgHaBmMsFeRqf8cBdjrfOvf7TEcvaHwitm5FaDLnCOIGotWNQqBND3QwaZoXuZLT6SpnqbJHLpb%2FIz75HCf3A8r3Yqu1guGv8qJtcIT9IEVYksJ%2BXiJqqVK8lMPA28qSyOlFH%2FfYOkjLsbp31E6JU20QXRz3KRCOqKTLNKMA8Ko0H0%2BSYern6UcEwH639lTBEWO8%2BfEPFlLzRK%2BL9EJt2my3bKlx03KPyS5PBeuIhhNYVh3mTNJ%2Feabiqusj6hCFNLxTfs71ZsiyA9dHHJM8jAVbqHpshSvjmTiGu7%2B3bLaqvqwSoybpIOMBVwIF%2Flt4x9glrJrKWmM011Dcu9LeBzfL6fq3QtBSBOIKyx1GZ9uF%2B7FUj2RfhNyUY1IzArketY63FLkd1LQ8RpDPya8Ll2Q7nl2lBL88dlKtNnAr6r5VcF3iEftBQuWo2lcGg11jYfaSqhd9HjhwWvr7Hn56ripCBwRfbsuvBuVrJh%2B%2BZ1jtF7XqD4zzNk2T5ssQ3ePPXcBF0rfqI1o8MAuhlu5bJ6EP%2Bxf%2BttZ7lSxw4ESqvqJ6gy8VdyLRxE2fuMW%2FZ3ER%2FN0GWM5LpTKYv0yROE%2BCoitMbo7x%2BhuMchWbKtC6PnkAkMMjIzcAGOqUBwEmz%2ButbHgUYAtSRvDQeGwp0TuPEU2GDtKiH0uTVrhJPNoz2Edz7bkMR45F4lezARdWO4Q551mft6AS0hy8w68F1yfbN%2BuQj0p3qfEAtVca3jDqGYxJnYASKgRjwQBuBsz%2BCOldppDAUUfa9Xhv5nr1myzRiKB85ntasF0VaIm8%2FL8X2XbelvMxrZ1jz9SpqGNQWJHqp%2FKxG7ZwyG4ikXP%2F6EWv2&X-Amz-Signature=5211f30a219f12ba311f2f13568aa75db942da66a896aa23279f26a15aa60737&X-Amz-SignedHeaders=host&x-id=GetObject)

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
