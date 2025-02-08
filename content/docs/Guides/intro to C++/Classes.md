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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RS46IJR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDOIcCdfOLnWA%2FhMRsPGelLrs5GXHP7hCqh6L28Pdp0DQIgEjXS1YB5eATGN%2FhR0%2BCaE1oMq7%2BU5bd%2B%2FeBwSo3U4gIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvoMVonQw445wnuECrcA2GW%2BuaIoQzMs00ehXrHJH37ZtymSid9yF6a3mO332F%2FjuIQWq5x8g%2FALpUTZE2pWhaDuZDVUrGN74ZI5yNw78wNHVDpAglgn%2Bz2Ae4ZhugYGSUMfjkzlfp595GWGf0gt4UkpwW%2BTOmcOvllgO9jefGzr7YikCRpYL8IbTh62O2KnVXB9sTVOsRIsHAZ%2B%2FUj682oVbm4bQlpQ1FO57hcpzzVfQBetEy5%2FBmUQW91vvKL96ANm8Lh3cIujWTI7YNsuIR0ounnpta%2BIitIoMiruRIpTu5RLR0ojaPErVwQGpt01asCPikuYFjEa80KqL7UpdGupnry6zoDEFKZ1NdBrAF7ODKl5NY%2BWs7lY1OnVzZQOMGhQu6K9DP%2Fj3amAUQuE5jr5FtpIe6vjG%2FFurQujwM7xkAsiKyucqCfS1uUguVrLZoAgemoIDIw%2B6qnvdS%2BksyGZF%2BIzKJ2Zpp%2Bv5PBaQUvgadgqBCIYW3KsE6MW9DE0m76PJPiA%2BNqvaKIPrsDL9MO4P9iC2%2BafBfO3le0kLWYMJh%2BGYW3W7cLN8HPbJUd7Plqy6bRvqYqnQDj9ECoy7jRbiKR2vY%2BLsr4vmVynBe8NVR06peI6mE0fjiPfQp4qJufAfs%2Bcs%2F0tNBLMPmrnr0GOqUBeTKugJLOMwfPoT46gcyHx241%2FbEEhXtmDmAAnnt6fkpvDZMVkV8Vn3drV2MIVciXyjkBTXLbgQPougjXFe3iqgY8GyllbVdBk3gdI%2BQEkEDxAaafOu6s1%2Fm8Pw4LhW2yPQEanAk4Z6XAjb%2BElcrZmsa9K0pQWkFVG5e62wQ0YcopGxAzllXNSFQUeWQG5TBQVBQ0x%2BhYuhr4nAQLsWqvjTqalSG%2B&X-Amz-Signature=c27fc4f0b3e10c3b8f98172817ff4edc5009b6ecaebebb2977782772bb30ecf3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
