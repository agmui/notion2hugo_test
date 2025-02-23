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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ4L3ZYK%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcLgPeR7ZR23GKkI8kdnNi2Cp8CaXB1NN905XPTQvwxAiEAxIj922%2FgN3%2F0fzrGkoVF1jrIJtGElue%2BQ0JoGak8XiUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDUAF8rBSxPgpKEUrCrcA3vIqQLyvuG17Q8MqTfhwyjk2xl9nQ5wlJb1%2BVyuY8GP8AWvDl2tuubYcZn8FG9DTf3efF%2BrnI9NRta3Qs%2BPXvFDdf0wntnqavs8XU%2FRFOequIAgf%2B2gNYU0XExCO6IdEPlpeAWYddQqq4UjQ9NVygdnMuRBzVk2IvZ9QGTuKIbz0AFStABSXa3ndBGd7T3WCTsnqLzJOcD3FmFaTUssEupRQ54TfRew1nePkd44R%2Bt9JUOQ6Ppftn%2Fkdw9b6%2FW8Bj3KugyW5b8xtOh7rdzz1C74jDM14wMzjy3kJAqAaJfH2NV60LKKKVy4CMtBE3OIOc28QRosxF0cmpqdPEV7Vd5rtJrZGOOvfzt6K%2F2qUXOFw6%2BX9wo%2B%2FauC70KfNMmHpu%2FY6PEVM4F3N7OEYYOvupqMPwgCJAy86xLt4r1XOyKVmPf1kUSW0qf9OGajuPyjprYJpqRLjmfZTMiRikCGkkh4CcEmLBt0EZHhWXuMsRBdIPC3GEEXX0jwJzhTgnAuAfIkLgb0ZM%2F6O5UYuXdXuUWCGRGqX2ewgM4Kpc7MxdlCIK1RQaRPSrwxMiD1yr8SoiDxH9IDyJHhnB0esk9VsPCf71oQCiCN1Tf1iVl6JExFsxeC6piqEyy8vuvvMKyC7r0GOqUBgzIkOW7yea8mCEL8nHXJzH6ESHo8V94HbXhsOxGsH4nAqhICSRc5phZEpBC5RrI5xZwrkSTk47Fpd65nWcPaBNbCSR0XYrzCCbVrecovFn9SWntQ%2Bt1AgBLng2E4rkPf1ULHdOwLlZH0B%2F1BvE8cFuiaDHMythICK9JkWsszgWTjbLW%2BqB2KRt1B1iD%2FnnDrIxvA9OUXT6sajqimw%2BHMqWl6Bcd6&X-Amz-Signature=6c88151ed524a21f3d3f950fc396c1f7649bea34dcadf773ae41c0ab98813921&X-Amz-SignedHeaders=host&x-id=GetObject)

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
