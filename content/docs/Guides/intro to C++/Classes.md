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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664FKCZVX%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHD0KsjdPc4XyFT6tVr2WbRM2Pejc11YBXcHRvuz0WVoAiEAiTZXRShDSyh3lLnuEh4Hm0N5cOWdxYM9KTG6rsvsqSoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAC5X7P5uFJuEwd2%2BSrcAzqJivpwdm1n81czvDjB9OwHM7fhrloxVP5g3Tx8UuducSXNkvZnrkX%2Fct5nDijuzfSnWedd3j7Ittms2txRkYG4SDc3POBhxbbQgKxZMUsFwK27RAqY5heo514qsoH0KeItenii8YWW0Kbd3k2Mb9cbPAdFG2RcWOOSc3n%2FtzxbQ324vVW5gewNK%2BqOdsT0wDzRxGN%2Fj85IAHjFAIcCrWbptr770yKbHf3BNYuW4lEGwvGZ4Z7W%2B9oLFCu4RX5QNG%2Ftizq%2B%2BXsOL2hwyhKUOSmIjsKjG%2FLIV8AooaThQGMpvWLlkVJTBTimaTobcI4dohMrFuXtQ1Dvn8sgQjeupR8sN9QWBzgH9z0e%2Bh0jbbAko8v%2B4kaI5DUgxhYuOY%2F%2FHlqMi7AJHtCChAPfotJE4jnyK6e%2BGY8hFBzEfp5sZw0WJGAu0o7J3miUaW6IgCSgd8kDr5EdVW0NEAIUabsE%2BpdyXwjlw2hqwGAsCTOXtxvzicelZSWJMlzYZoCNBUdhDUZtBsJl7Nw%2BCfWKb62OwGbLYD1rsiT5mByFU4JLwhmYqSYWjGApv%2B%2BvrAxA7dcQJyxzlSwDwFKsxG1a0zmtJUtUOP9goDw4Y8jLAiEBY5hhXblNq4Djikq3iBLqMI%2BkoMAGOqUBNe2IgUXV3NStSHJpCVJY8SJd1pdoMNpgueovfpM%2B544zIinwbMw7MkadiGDcS1r7Tf0%2FV5%2B3%2BwbwdVVVPzqrHlIbvlkJb4nEZvifm2nsNZrJ9nBrZUI%2Br2PObdWTE0ldpXGDuOiq3OBMzAkDKRsszNv%2BrbZyu6959Xm86J5c%2BwaRHg0A0okwfHTjkQl53Ipo7%2BsSGj%2F2VSHW%2F3GplChInAfVDm0C&X-Amz-Signature=400940287a0cc970c0201c4e841b1fb53a1d90f1d2ca8463ad465939d4cfc704&X-Amz-SignedHeaders=host&x-id=GetObject)

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
