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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCPTNEPU%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCID6xbTW40Q%2BWO%2BPlk7Q3xi%2FX1vV1gQZPu1M9cgJMl%2Bk4AiEA6pIseD4wEyX8wKvV%2FinwGg120qmkKm%2B9eUIHcEW%2FSXkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLlsVptp%2FruXlKFr5SrcA%2F%2B11TQDiqDvnX1NiOQjk66OUD9lAMM8CzR8knFk7AEb3RFzawGZRlsoquobiE5Apd9TFEB0li4p7D%2FMYf4gtx1jtqVDmO9EGjyRSsKPbRxErUa3gBchRj71iPGgeresTkcva0MY5imZbAL%2FadBePMtKhjgT2TK%2FytIS%2FdrhmE5xrguivAPOBcaFMYSQr56SKfRe46MBh4LYNGugJZSltP2IsU58kGpwaeIQnTP0B9o9hjgEVaRwI94gUIfN0mjjUIe%2FBH4pasUbvfYq2EVZoNfBAJQ7zdeg7GEerBX7kVMi409hNcd%2Bb4DDTKOLlH%2BEh8IU64Jy%2FniY4wQgRvJZ6l%2FD297SBO5QDiP4hpHiJoyv8HJWlUurjF%2FlV2ew3QLAVOH0GNqwPzS7qldHg89%2B1bhkM5Bctq4WB3%2Fya1v0A%2BQaoZRYP21Ag1NhSLNNJTwFxSv6ESLX1FflPl70MerEPCnlMp%2FUN3jWl0uqAMSwjQOZdW%2FNgg6yXKPWYzqD%2FkkyJvLW%2BAyLgb4Pu0SfmKRwvNk0f2FtwZvlgRJbYjfwNSNcInVN%2FonQmDi5vtWv39Y50pFNmZk3ktMzScBaNgVvx3Dshc43Pupa9BmplhHMau7iVuoJGaFfDzoFj8QpMLH%2Brb4GOqUBdOAztjty0C%2B8KGJ%2Br1%2FB1mDws6EtlmJTE4vAvYQz0%2FLsE93LzCq%2ByEl8ttRLto9ydVznWpB21QSslsu9OCuo87mq2IO2ocuoySWG7MCL0VG%2Fyv3VuvNLzz0gJJOW3%2Bmj%2Fw882i1wquyJe%2BB5zXnljNkiX08oBxtQQgPC8xZ6mySd9JDvv6hsbD9s8%2F23fYX1JrcS5kfHKQVLHBPeJL9o6aToxfLh&X-Amz-Signature=a88a95a8723d181f18bfa5477ed209747d97ad857239b672795904f56d960052&X-Amz-SignedHeaders=host&x-id=GetObject)

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
