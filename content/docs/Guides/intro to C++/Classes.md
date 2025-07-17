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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3OBXBI2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCBhJBb4DiAJ6IvB46aE8PZaCaT4odPwYDzmHece5rbrgIgUwQ%2BrddAW58vT9lFI7v%2Fg5SVIGcRGXvNt6s%2FB060qK4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOWO8vC2P%2BuKuGiDjircA%2FRjVDwaui%2BpzFtl3OwSlUIMte3vPYbj1EUHVB99F8kiJ6jce%2FX2MZGm3b1y%2FFvOCskIrT0niNpy%2BYodKcMTM8ymQ51gFLxlt6lvPxzd3l3UiNNeRzPpgK4SOtjvp8eJHnmUM1fFkdIkt7KQSjRs8oGPOCEwaC6Sn60tTz0HTgRRYzYdgY%2F1xIeOgGjNCwNZBzR56m6dn5UdHSv8IjbS%2FPrTw%2B64Dqtk%2BjqaxLe4B1%2FyVKk3Tvolv0a9QYHT5I2ox01MSIMSqP6%2F1J5uh5dggf225ZD2AmmfLPhDWwHf%2BENrSehOCju5%2FAdquJ%2F9Jopv3FDaX7yIWS%2BGIJ1mdG8OEeSWbst2l7SHilGpQd01xZBBIS6Woh2J9vhcpQnEPJUKuM1ezsMHaQpdiMPnKzwz0%2FWs%2FI2gNuPLtMWpFGpzpgiJEE%2F7uXSqZzijq7frT2tQdQf%2FK5aWNNXRzST%2BUDevVMTTvgsJ4iAGOMGffoXIv8jC5PW60y33DLLegfErk3xqQmiHDZ1XtwmmZvebYTy48yMCK7VJ8iJceHK6wMcqzUt669j47qXgJQ7YVacUn9FWNhyS3MOrAmtjfd%2BlGWV%2Fl1GUkyNAYUmSc34Jo7fYAntiCFYu02RREqtiuedlMPbH4cMGOqUBGfnWGhpDX1jJnaBUqO4u3IFY2OTxuO2iy3j4Sltn%2B0J2cJ4RqISqj502MZc6xNH%2FmTTqv7bb8JBENm1YEXtKQpbEf5LUxlsx5aVZ%2FJdXmDZBFIChQuJFiBBtT4X%2BdAFAKeI8vbmvH83PEOpLWq8QqdlLorzAV%2FtsVGtNqWa7mwuyQHXDa1kO%2Furi3TkTRo090%2BboK8dz3YTLW76C73DQ3qNY4uke&X-Amz-Signature=90983860f84c7a7331c3e82f25d8cfa88afd16b3178daf46e02722794e0cd073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
