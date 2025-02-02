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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUHWYNGP%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeeGmmUE%2BubQb%2FPITLpbap676zspA12%2FG250SK2gP9FAIgbwD6vYzRUdwW%2F%2FAb6JQe66hUxzx%2Fi8UE7GYRxJb84nkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjbBTtWSC0Ce0jVcCrcAzxsyz79QcyWDITRRrx1ilq%2BO7uUarJ%2BcAj%2FJgTH%2F601nUyepjPjEo6UOD4JeePdF1MLv96ni%2B%2FaLHcGmkUMo5WIzUjvMBHrGCrxwWi93ttaCNGNxrdnjVp5ZLncGw6YOYsLd0DB3TsOqjfP9fbh0EZOGia4Iof1Eelg7si%2Bk9NglUUkIwpfjibWuZAVgN%2FArQA8F%2FJqlymhBF4usmEvFWB4G4h4CkTsNnRsfDkITB1FjzLGB61tnrdGU54iZbJKP4Vh5KIfPsVbkJCWoSmJUwcOv80NDOqqPJstVDMoEL21MpZ6C26QNnBPpUxvUiuCD5kvpUMaQWaLdjzYPUiNC1whTZQusMlFOVl%2F7YyyUOQLPCViecEQNdm6l4xx0IJBUNYeJ2Qp70ejOAN6eBpfN6KpS2%2FBvQkgPWM7p%2BGVHiMvGZenlOO0UU2esjbTEGcj25xUJlblvke2Tx%2BVQ3I1OkTHbbc1Nx1FaczUwNrJoQDwVFONyxa6mCmlpVbk0BZMA2U3hEvloIpuWzdOQ%2FYNw1Rdw48zEhfeK5HrHQuwkLqoHawViOMGk0TtI3fzny8pxa5KLYF1a5IB%2BJZqD9FOBfkLEmUKIY4gMA5%2FNKE60FDLSpxue2dIRtAiaskoMOvb%2FrwGOqUBBKidLdNLCE6TGRJZRx%2BOm%2BQttFz37MtQMHyrOXLLQ6wH9j2THzRIEslPGUcp%2FqyJ5TJzRMiS74nh1kIGXt%2FFL%2BHF36ENmM3qbILkurGIo9bj0BT5gK98zKlKWsQ0ph2Lkj5Iz8TyUZkcvUpkSDzJT3vBmMMUecio7DiMpNQUrUkCIbOOebctjTDHs7FR2HGeRjTYihUPt%2Fu57ex6k4ZisoGxRMph&X-Amz-Signature=7a8753ef5791d178d812fbb1b15b3a4dc84f032c6fe2fc0f525587c5dd94213f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
