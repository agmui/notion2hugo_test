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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4JO3WFA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWJVeAgT6QtmabirBodT7ka9QiCpM5NsEDjfH6sWfnmwIhAMIooMEKkJd2VfYChETc3mYYJQrotdpo7PJA28tRDMotKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRLrPG5ZGSrEocvb8q3ANt0XKRoD3OjyaTBythi4O%2Fxz1qLCHFqBKLngvhmE8a%2FW59987dv8YFhL8g0zUNDrLqeq65tCmPbGsoWCG0zdbAA81unhDxnQyAZZX5neSrggNTU5boQTPZRb%2Bz393N3qCxA4KYNh1lIcYdN1pBGDLH2qBwPX4pKXRyLOK7dIIc9354%2FCE7d%2BrjDaZrmGQ1rc9nFLgpJecIjC847Ujhh2IePDBIZjjuV2JbbHO9P8aszq7nlMRy30rNHQAVZzIRCcnzGMXTvbHwgbXbPn6RDZPg6gX9jtvxc6SH96aUX5eGaHWZaL4BNYtsfDlX%2BKQy5U%2FKGi%2BFYUxuowzrUinBLGJirCLr5jDA6ueBzWEVS7h225tpdI9edAg3rKAdI69Z%2BzQqVE0J6pggsnFlw7nDbEsnG8iTZhJe0x98mZSO6mJuwHbip%2FGSSYLGE5VXWhpHtBpdNbsW15JPHF2PD3MQD0U7bYIEnaPybeSGk5hQhRP71uZk52jWRreZRQ%2B4LyqpzaZiXw5UJ8ql0oUEYxwRzLEFpqCzBxGTAjvz8jm2oGScXaB3EP%2FpLdP5MtqvKBl5Fsju7bCYED4T2CAykHqNkJ65bY9nK1tB8DkGc90diDx8GB55eb%2B%2FX8JmGOdNDDCa2PK8BjqkAaq0DltMEwKEMtnSsv4h8OEneJruhkoIELntXuhGhHTVZzo4YjoxJeEO1i8IzgGpHmgag8wZuPiZSa9Zjh7xgc4nkJUnAunvUFGOxTlkTFFEfoDVvwJqeO87xuhBap99e%2BASLSG1zStUtniADhvDyBZBY%2B6vyp0fY4fvbxig9Vfv%2BMxuOHiN9%2FIfVLqHQ3T5dIpJTZP9ffAP4sdDDDOOtKqs8E33&X-Amz-Signature=241c67203a3d839c5e4d032b9d923d6c4b289a3c103fe53e84919160f1c839c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
