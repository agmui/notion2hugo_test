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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEE7WGG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC00uMAiG3am4tIwnnAqPKQwIocmITyrL1E%2BzN3qAd2VgIgeW%2FXhp0YOyeyBGNxcSaCnO2bObp4KjYctT4xBp%2FcRhcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD28i5YmJ1HUqWUngCrcA0J5jvBAGjMRjZDgA7NoG8zdXICr7aHVhkbSEMTJnBVkFpWwdJjANKvhRnbF5BKXNUqXqckVkN5noDsUxLkk5%2FtQWTPLpAk6DScVhhhMO4LSNHDBaupjHC8zU9K1iV8R1KuXTyj1YEkE4al5klaT1foLV0%2BGej0uEpPPfu0NfoEm5NRYgDPLjfRMBU%2Bs5PuVLDFhgLtGFOlzwUwE7oOxV295NkSzh%2FhVLvDEl79ngCKgupDYf3zJLwb12vbpW9KYGc2wO6Y2pK3mK4UKoaHQCAE624yH3lXirC9TXbBPFtYvm9Gih57hBCfg2DMfmrqIPjejwWO%2FzwsaiJ7ZIxZKIYD4n%2FGwa6nWzgF3%2BtwAfL0QYQE8d7wfIvhfjtHWXMfzeAbRq2AJRKtHb%2F2JEd%2BHKodwm%2BekkpCG%2BeNopK7oCLcoiWNcCiCJZiWsCVWPwhQDl7yYwdFXe040uLIJfppgI5GM3zFcgaEloqkwGoi%2FkdL4yi%2BYGgVVuo4%2Fi5aI4Lf%2FYybx533QU5HOZhTpxVbhgyNcINpgXrS4vzOpFphSbAfUWKdp%2B06S8LhOe4EEmyP8RMK4GjDWrb8y2J%2FuIKLp88PMy06SgOozdgLu1m807w1qAwFOkry2xECAsm3SMOq10cIGOqUB0DMp44jrSxRixrvNJOrF7Fubl%2BkwMLMFj5TrwpSJOHv2BGDhkG1TBRXlJvv9%2Brki8nvVRw03hngIg52MMcx5%2BqLqojnEwyutH6wBanC47TiJK9nVdIjw%2FjfjuxdQlSJUfVTEaaOqganU2FMMVUq%2BNoD0UceBlJe5gkn0uMUzUWMPvlLTQXJi6OoYcv91JUXBQHWf1HErma%2BB5E%2B1i9mndEZ6vITx&X-Amz-Signature=d2e3ad7bdb297863d8f6b77fef9c5475a33d1f5cc0e8af1f10c8fd2c877a97c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
