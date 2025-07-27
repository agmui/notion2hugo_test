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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPGXC4E4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCa0T4G9mkhDkBBA1bYqeWGkKTlB6vr%2FpjtyrpumRz6oQIgFGHF%2B9kct7W75Uw87GQeI8Iv43yVq%2B0a3hA8qB2kpSUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDHL8cAZ0l9Ah9b%2FNrCrcA2fYU7OOhQ8nqDn7nJWkQ1adCTv211CCERxkjICmcTXGLuqmgHVn3daJOxzkNU%2FSVdRzo7Hgt9bIqyij3Ngcd9kHDlGmJRy6dxsQ45MHwcEfPrl%2F004cq2ZIyOFAZB61nVW51shBDzweG9TM6YPcN2ZKz9BOR6FR0Et28JQdN7k8rGXrUVZ8K2uDgA8KGafXol0eoZln8ewGDvZpba3H6Mybz3eD8jiQVY6S8K5mU6KiUAv8E9kza2weNY4bG%2FkVgQisnQpQbVDwlRHCg1r9WzoVtc5CHezD0oTAsyQ1VqxK6jLJQ3AYe1ei%2F4w0CBavvqOVMa0xxFi%2F0fYrKcPVM1d3Pp38o3l1noIe7bY6WPSIUTDjC8HdIbzey2WL1vYT8QHc0gTOG%2B2Js79Hk8TJ00GK53Ts6dKxRfTrZZtVaDQSZJuUo18XGEKQhQDSNJfq3%2F56OM1ksnaIKmaq8bNoBV8U7szP8LWmETAXYqEgtLP07MzNZSq8m%2BMuqIjckKFNSaAC21%2Fgs6nrp0DvlAJJWnkMTCWCfr3ACQRhK1Vv6pEEEUh0P03eiF8s466RyUlDLEiIth0pv9Q4O3ZOPH3GfdJeASHEsTYw2LoRJ1b0QRq76jDzA0%2FCPEfPnCVIMILDlcQGOqUBI4U94npio%2B6O1bR3WbCz%2BuWmUg1cUEyG3uGvrjrKog4VwRwbdfZ1DL6BOTmh0vny5OESv7hZlCn7woZcwLVtnVPl24Xbb4BqJVmHo6yEz5ItYmNgUtAVpyfP7RJNRyr1YD7ryEkfo21EfEa%2FWl31HFTuFd4NoQFzcP1lJ53ZdutyktrxgO45TsGTgxJkFG%2BHs%2FoYPgVkUGpOK6Z7VptDUwZ2FBuR&X-Amz-Signature=f89d21a796daf8efd6b8efac92a1633471e1ce9491df8d339e9988b08f23a80f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
