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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXMMF5IR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIC%2FGKpvnPSKzMbhVZLloYU2rNiZeeRVa8EUrVJ5I7v7SAiEA7DAhUg0zm1%2Bo8AIeZMpdGJIWubXK%2BjMVpBO1NTNlU80q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFjhhnokxlEufEWafyrcA7tRN9Id%2F30p7lU%2BnkWUw3u4JMqm1zzT0sHEdutcPHugl4euNahyLfInYW5vXaIH%2F%2BBJ78teWGEwLM9fMGPPju2FG6Fmq7immWsoS%2FQSRjhT%2FmJ64a2gB5YBLpph6TPRAPWIVxJ%2BXBJQ2iYyE3o3uzshVLwf0B6lvboz5kllJ3pb1J9Q233rTQx6ZQVUAroc65mLEwXosGVKFgoOFiK76frgan36ap6GTGHdO%2FsmqVzT3nh2OiE8SLgkHflAcUAqAazoDjseqyXYYm9YD8sTMOvpZsXkdWDhdBa4N467jGES1wn88IRiqdpWRR5rBBBUNQtcSa2jUPOWc94PqTg8PrzAqt9g2lheCCJW4NrjFFcek4H%2FCNJ4gD75Qpsf56jVGvdEaaVDdTVZ3O7TJFwxpZmR%2Fah1fglfkEQhIsqdBG0Ed9peSKc8KjuqBDgQoYodWOTcmsCRyOsC34waqCv2HCiNDK4S%2BeBwmVekaKv0s7TNuQSgaRHcwxRT7NYJ7qzNay5J4XeeU2NRPuIJjpnvrw835ycgeyJY31W39FGSCVRCsqnQWqn2dn1IJnnWhGbMxG%2B%2Fy%2Btjo2TdOJ8tU5UysMAua5DJbcpucbzPRlkwxm93%2BCvcg8dPaqjS%2BKCGMNScjMQGOqUBuqZcBimRQ2VqA0FWr3FvL2HWNMq0SNKZQWQoJuxhxawTuFVJd25IF4LvDgzmkiv3t8PgItks7nLOVuM4OJVtswRj3WTpSkxAmG%2B4zfuVUeb5yEAwZDtYkjgSny%2BTKmloFLB8FbPZHxMSvJGoWliHI0MXEj1hNjKjz3FXdmxkh1lYXTB8iyUoORPDYZX60OO24GrRqlTxX2Z8FA3vTj2xxiz%2BmBNV&X-Amz-Signature=aab4b9c7a83544efb86e3722ead5ba30dcb8fa65ab23f8c7f918cbcb80f11c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
