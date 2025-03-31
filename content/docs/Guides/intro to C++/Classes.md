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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJFYKKHW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCICzlXfI9rL44hQFXTkA%2BesMI7v0bgZ8WNdKzlNnbHGeZAiEAz9TzgFK7VYk%2FdszLvddnAFTZp84Kde31WZeYFix4kUoqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKJW3LMXDWUtcOdTircA1m6iYElFr8TQqhzIodYEuu262qcDuz5FXbNgUQf4EpbrNn0FjfltHz%2FOk%2FdtOF3iJndS2wgZLIoUBm68SPe8jJ8T2dvRATdKbVDx8JWJF8FXscAeToPKJJJVwAe2jAvlQNu87cSzZK541PyywYErdp%2Bp7c9lD%2BhY7cqoWgJzxMuYNePGfTyTZSEcPCOyttJ7QGo5bs5%2FnsdoObFPVJQw2n7dom0qp%2F2gkwGUmA7Gr7MlGT3z9Kg5BQEkIEMJI3V9v9HEqqHCgsrvG0LWrj%2FTbRZ98EgbotrmHnAZl3VeGimqwhp3PK22Oj6J9fnk6%2Bmuwhncg65nAKUqQb3iPoUmWP0qr2oti3fp3JPc%2FbrgVuumeeH1TdPFpyjFhSDwz2En6mEwOk8GkmTNeVjP7YfJIe9NZJL4toYVbZwcg%2BQpMZeN3fO5A7Cd%2BHmhaF%2BFJ129mZprgLqnGVC30En4z03ndyLjGw3Fjllvwf2ECRGE6Z%2B3urjfWgq5h0kwzjycQRn%2F06RsJYwNLsEzvUVihznFUnMwQ3rkKY6fbfMPAUWkhZVxqBJn1spoPEwe3xwh88Zccln9wLdIHxQpXU%2BB0IS%2Bx6Kz6gLYVvpW0yIa2JBX2kD4n8iKrVTYdnprS4mMLzoqr8GOqUBxcuKPDW4DeY5otFPQWi6O%2FvGhZhCdG%2BHQSFzU8HB7W%2B0iKOGqzExDsrSs6rtpAQuEvP3py6OAraNNp9rgY0%2BU9WWZMJe7R%2FbtXuBf95WXM0zr%2FFM02KxO5mPud8Uzu0rK%2BrL0c2S7KOlFF128HndwARAqopjADtgqV%2F2sVF9QaNz3oaFCloz%2Fj3EKoLlRrfHLM%2FsFn5RwBdUb4dY946tgB9ZwJpq&X-Amz-Signature=b1ba67cc3576daf9743d19f58a15f22ea2f0c7726e878367406256154555b473&X-Amz-SignedHeaders=host&x-id=GetObject)

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
