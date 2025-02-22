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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DAF4VMS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4WOtWhYkKa2vV8aejlMIZc8BGJkEIdxuY%2FDVLMTb3bAIgDG4bTL8xuK6mdqCHD4lswb9L%2BOU095ZIVCIJi9uHDNQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtdUz5NmSlkdd5NQircA%2BmovDqy86%2FRUd4S7GCcfyvXRt20O9T7l07FK72R06zraUs6tw29H%2BmtPAiL2MJ%2FPuvHKmq6bhdPzCWGiKgce22vG4a5Yy9TNPxOVT4OwYiGNmgsf5lwof0mI0VFT43Oi%2BBIpISSRpwdK8Md01moiznIfa4V1jIINEGdcikRTSrLIisOC%2FwuhyWCvI98kSUCmp3j0%2B5WhM9gD3qCNwfHU13GkgzFbrncsIkUT%2FE3FkjvDPCJr0r9KLUkhiSG4aI2cgsYMxbzT3rjp0GRE%2FxZwsUHY4iQFvP93ha0Mi2qYznT%2FWTQtjpDKevbOHt4WNpVQ%2BsGCDI7CNdrsqHAWIYyExwwn%2FDezizBc%2BS5ACe3h6uD8DedNxCoNLRbKHsdT9xGXYBIyjhXSMga65egFgQ3PWbRmnXxXW8%2BB%2FSZnwUQ36cF6CuCDCM7WEI4%2BVULQdymUZu975rWe41Tte0CcYZZc1U74UIFmx7bhtefTvv23nW6d5TZEumqXVBli2ULH6DrUmaEmccMoUasPBdayKhEiOi0mlvhYYPE8l7YtqBxpl%2FvDmDzp6KOZ5ldLVAqtMgdng2%2FLaE1QwARRbiyh%2FUD1obgQDvT0P%2F%2FXv8WJEAr40b1Qa1EEPXbE87ohatkMNLk5r0GOqUBEngL1RDCLtPrRYHTdKIV5gcjael1UkLv0YE5wh19JFKg9Uhr6gLopSwX489yRgk5PuAoONjji3Cltt9tfDSsiuXow8L36G3h3wct5bbJ%2BSu9NS5CGNRWqTjK9w2MJB1%2Fpgp2YOs3uuAaD75e01q8C0Q2RcXGkrTHgaDKqRYYbt4JFQu2itdwI1tSffJoE50zGlz7npJbcr%2FNg83Pck4cMt%2FvTx%2FL&X-Amz-Signature=7e1f21cc46030ad73d455a45cef9c64c41e34441e164b8bbf8382066c4a9e69a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
