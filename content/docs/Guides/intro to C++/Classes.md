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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDH75EKF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGsHDEew%2F7XX%2B7osyhiHxf%2B9OTkIRA4ERlCJRUHsYjrJAiEAjk3MDzDhKK3Su3bNqGso1rEUQFnLL87ZXMTchmQPrDkqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJm1FMx9Kr9cxVLbircA78S1cjg8i%2BluTMKd9D0d9XJTo%2BfPWr0qTghUtTSfSEs4qA4MApiZe7hECabQFzglYe%2B76wpuo0xrAPVYOmbUQyl3e1o8iPDiLeofd1QnHEm%2BRNwx%2Bq%2BfYdeCx%2B%2F7Vnej%2Fa0Lz%2Bpn2x0RuiwNupRLzSNP4I%2FbylE4TlCdnGKJMj0k6o6bcN5gUkyXvlFzLLfpYpPER5oFxkTc%2Fg7YxvdwdLAbABeAx2TsFSa4LFRl5zgj0kuY2oM2l6focFtN%2BxjYb2V6vSjOy45W9AalnVx9XuLELfk9Bs5vAyCme1GNrrtyfzsCKNUY3QUKXZEuZuAnbtaSSqi2j6yPURuszIWI2kXu9a%2FtK727aD0DFI92%2FDVwY4x9qjSkXgKduLS6Kjwwzlm3hObGPc2mTadGecPi3A%2FZgSND2uCxK4Zc3KoHLa4KQiRQkR%2BB1dZvEZQSVRl42D%2FQ6PfOv1Km5obNjNyxMxroRCo%2FZqTXEy8d3m1ts3aSiJ0z4PcQq%2Fv8onMFmO4n1UpzNjq0zb%2FXJiHff1dRmqsVi69%2FZ5h6JhFo7zh5hr8KhgGzwQe79vZzzku4G8%2FPUepRHHR7Rd1G1wMy%2F%2BQjZvszrntIgKTe0HuViZkKoHqYm5FxAGj72NiqSvLMIPp7r4GOqUBMRma6RPEJxJyBP20ptMunvemxWq02zIu19dU74IDWW%2Fz6iYghDOODZBHdH3Ow5RtAx83l47LhdKRceFMJkZYG9PNzPJLu4PLV6F8ehNTy1Lhg5JM3yl1Big6kk%2BYSAxHb%2BSwfW9G75yJqFAfZ4VHV49JpFQBlfqQhChz5xFhWuqFk%2FVo%2FaTBH0wEac9oNnSpO1GRgVkuzRxSpuYRoSzY2bEfrQg4&X-Amz-Signature=28f8eae7819d2a417f7c6cd0bd8c764816a471ea078bf6d0a7923a16435b71e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
