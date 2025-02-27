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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4BXPFKY%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDrxfhKhiz2fVysFQJ8pNGuaHbl%2F7FWYRjGl%2FEP7ea7wQIhAMMVKv%2FSI1tPOPiKVkkSXnPKu8cuquyfiyaduS9KPfvaKv8DCHsQABoMNjM3NDIzMTgzODA1Igxz2C14KCjeLygbYuwq3AO0IaGP%2FWhvxHLjTLPATmQ1NIgGFIItR3CZhFm64%2B7Kd6btHNPozlXOqG%2BK7EGXSlMSvpU9GfTP0Ly63r2afjmsf9b5ZO2ZQK2xy2mpd1U2Y7lgghbALJJABzbeCZIgy12hKthGHbDQ4HPX5WyUppbP0%2BTofxPPuO9U3mb5W3w8SLTEG5Yu1c3OUgcEwIxsyfPf8MQl8cM3V0LBCiY8rFhR2mKd9Ljr%2FZ3vc57IObaukTaNSRLrJ9rg3GZv4wnJzHuP8pb%2FEsQhQGvvVVTaK0iMDV3f9uy77S7VXtpbrBNKPFHozUfdyn9c2EWuvKoelgDdsBEKL%2FEvOGbXJVQfBBC1416RybuBM42VoL%2B%2BFxYr%2F%2FoF2LfZpnVlqjlSYsQuHZXdYjcqHKdY1iBslkq%2FFeZmekScu8o%2BdmyLQxR6fJIrUi354YHOVhXJM1I1cEbshwNs8vngQrLLqKvmzk4f2FXNYuxZExxvnhqyqrLDFcjjw5OURHgYMbYIiKT8ysDWQO9cJ9rPnYBQ1eTBhiR7ahPvxeXaIRslbN1sD5lmKukdxlNDi2DOSiV82EH97dIrtbvrkvnIKy%2Bd%2BV%2BzqfCSWQxg0h6pqvX4SdLZbcTvzettBe6X6D5rvB5AqkzfAjC20oK%2BBjqkAZrtauBdMjlnnKDsRoed4kAmTgwj5KY4o4C%2FHs5KQOuXWEI2JqTd1aEofdAEiU2obXxU%2B3d27aircUVmjW%2Fu5DuUCJKPDA6cav47XON2YKY3DODnCgd1%2FWvyjlqWPVzZXMW2ow87dFt7vaed9xSThwr3gJqeqIaklK0%2BtmnqHgzraEOcdrbRWujJUs7I1cX5aX4BMuJPGv0d7Px6BZRpe2M8tztq&X-Amz-Signature=1a2e1129c84578024e700a4c6b3c45ea7f7ff99e6074f1c31d32de146103dea4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
