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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIC2DBGU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCID62%2F60O2GODPPtG6B3Fg3ybW8T9oTeTZBG5aaOO6Qt%2BAiEA5ZQelKo5Fby32Mgwxdmq0LmWrDpiModUs8WmEYSxhjwqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQr9TXUy%2BskqX13LCrcA%2Fy6aXPrBtBKvlOsL6Ha1TmPyh7niDda0%2BS0rrz7unZzzjUgBgyh9seqDKyyucJ7DyBXpQxEPrRUCx6u0UamZMUsFMGWHCOp75%2FIeJwd1I0mfQfaoB9ltjj0fEXRMayG3SKpkuOZDynr1Pr32eME7e4%2BOLLmKyh0lJRV4JBDHVo5ALHoAXk3SAbNKR4TQx%2B5FFTT5SbbHgXElpZROdOQn6OPEtPKtqzMQgd9YWoVZcbUXfRB5%2BdPXhyEYtN8GpUiS8n8PCwtVkhocxdmli%2F2rFHdekGJfOqAbAKiRXs3I1OavRuwpc%2FM%2BYHRFiZZmeCOp5ZaDkZviUk6i%2Fh0VIiTzudJxdehUNRVJtiIiXoHBuNte7P4WGez5fRtljDPlHuqlhKWWzoFzCRQuIwD6oZVrnyR1rHDqet4iUY%2Ba01TflF07Cvk4rRg0M4hDtKfv3OQnBFr%2BOu101uJExtjrFkWW%2BUlRYfJlHVvWaSTqCG7P0SRFyXV%2FMWXxDeigV7n4QYW0pvRwv53M8AF%2FJEbTtQPdygmcWWupK63L4gSCiSRDZT0jn2GsuGNeWapsE9MmR%2F7bIAXi9pzO3J%2F4iomsRN1RKL0E0OCtvkfGuaTvtcvmUwCod4sHj22Q3IjaQH0MJrvj8EGOqUBFkrA17twM80vsPtiGGl3OgYN0kQBv1e9kXuYhbAS%2BmjBaYiLrgocwfdRg80qwss%2BwCn1yXGNAVgZWVPML8sP%2F9otzBUsjdqBuTolSICQcI%2Fmge6IvZDlM6aibbPQiE6TN5wJnEKWKudVbpCZEqSH%2Bx9gUoEG0g4jqGWj2QGvQfWKAfzqUyhuiliIbnlnI0Q1xWJR5bVRJ2TFql68wnQmfcYE0Vik&X-Amz-Signature=6e81eb688b264b0190a70e2683ceb21635e79561a1dec69e2faa67d30e4192a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
