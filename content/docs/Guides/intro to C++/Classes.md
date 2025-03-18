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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPEE3NX3%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDVS%2BbwLOotykQDHb9KcXOgUHRysyaOdiBSd1rd%2Be6IAiB2bLsvjNxRKeo7ttapgnUc1obiz3s8VoR30EWL3%2B3CMir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMJdNp7XXe7RMx92D6KtwDDWzjajGvC%2BiPcVaNCrg9VRd1%2BCbunk0jGjXF0CwnRmTPiel3cYDdIjz37BWMGjDU6nlYXSZopKjkylhQJch1OzkK720by47vaVCBVfVYCOCAwyEd9pktXGOq4Yg4EF4GMXBdsPAiKwhI3pWOw%2BuBddZaJmJWmZcHXb0HQoCGkrkepv7ZTaTVdb%2B3EXDZhHPb%2FwgKQJM7MiqB8hkZZh%2BrCPaLzwnXfIe8N2B9ry43NNWoKZltQPY4G55a7wxJS4t8qa8kduq%2F6gDUd3fmRap2aWW4Q0bHhxIWkW%2FrjnvAfkToq921NsxMBFyig037NRD%2FgeDnb5u7SCQarc7aKKSDAGjWUiYtJ4rPyUMgA5A0dV2%2Fume%2Fsc4omhh0a5Rr7DSf6vxRkc%2FzDTKW94RZ2euZ%2Fx9H1P7oCNj9uB78M96HmWqEO2dABc5A%2FVTWZWBYZvYa75ynBjIenwrPM9D57LqHa%2B4Bfb9M1z%2Fs8iC89xBasFjl7XWnTt8R79Wcl7viggF451bdCkFCXeohs3QbaGsHXN7w%2Fcc8VzQTrZ%2FcwEAfItPZ2H59h0B0WM5WcSP1QepADOb%2BKQhOMp3w%2BUSztRlDWeGBBw6IFiFP8xkLQ%2FA487CFf6pFK%2FqsSHJNg4IwhcrjvgY6pgGpo82XhdDIQ1YF8NdTrGP5AlaOYxDU9qQxZWAAW7HGBGbJb5ripfUK5X9HKQrbzWPL1OxRAZ2WNoN52sfvWsS3juC2WeNyTR1DRnqiBVlRl%2FmA6hUQ6m9x0hOqWLJXRQ6kczeDTUlD0PCKtrw9cuAojGKF8wl5t6qzgaV2KVgVpQowpBlI6gPoYVPreg3fKj12p%2F%2FPDiHmXEJrEfmuWdrVvZEBC6G5&X-Amz-Signature=bb3d053f39c126f08c16ad269114f9ba3b3f08392a755f01d68c058a14bc7bd8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
