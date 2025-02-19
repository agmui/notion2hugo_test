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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFIMIA6F%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGT2n3xbJV4o0Qayahlx4Jk5upg2o9nv7BcJJqWHdiQMAiEAh%2BAsavZ9dqJnyZh7NauVikBNjGPTJJVK7kFdNUK2oFUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUJlT%2BvcfvQ9F6%2FsCrcA9jscM7YQCxgPTHk6f1%2FVnQ2Ap63ucg0pmHt0p9%2BjD1MeZE1v7DNTu6BWqKz6EHKbFKwYjx8H%2BbIF6xCmA39CM1nbW1pGK3voz8WFiYNN4h4V%2FIhnZyUb3ovi7unRGeVE%2BT6PBafd0sALCikXIRNsNKqyG7BSZE0qg8JyQ0AFepQa7bn2jOld%2FOneoNQZtnTNGsVc%2F6fKcp%2B0n%2B5A7aKFPxJnRv7psT7dB9rspGFsyIt7DuHhRoh9lzcKgUijHZK9Gu9vpohF4NMdVivEwReKm7lLGHLBEkcL5Ku%2B8bUW63yitObmzCS7bZTal29pWi0c9ERbEw1LfO5w%2F%2B%2FbMpNxUtT4g6q%2BIrlS8lSNwMNw23%2BcvRw8mG1YAC6A31xOpseU%2BzRSBWjNLyIFX0WE7Fcw1LhCGCWmVuGBRnd7AxI3Xg%2BqP0RR4HagzniKhaBswpaW46OO88QFFOGJ%2F5lWWK%2FBWl5yGtY2vG9CZhMc%2F3qXD2MHqKdpzsFCI6PExIkwQGuSoV%2B5yo2mfHOAt9Ke%2FeSGB%2BSiY6XB79KrH%2BFt0w6Fe6GY4%2BcFLzKejC8q53S1jIm9IbzlqFt7zBuBRqEYPy0oaN511l9g2izPT69pau0ILVsAg%2Bgf%2Bj1cs%2FjOjFTMPeG1b0GOqUBlJggQ0EI93h1XUgLurwavw%2FeUxUZ8YdyqxCUcQ2lXTZudAjHPS0yhD0CpishczCP3SD8qqNSzN8K2ka%2FA20RLLNgu6E2NmjcvS5rYejqVTMnAWOF%2FoYQUfwG6U5TaSYT15sWmZhskxqKm2MWl2bMZxmeVCsjAdgH28y0fdDml0EsVJhSpuqotowIjLEySrN1lmLAeGeBnf6bioyL1yNpOko2MmUP&X-Amz-Signature=679c4f38c5894d032edf74531c194a37e03fa390fe16fd70e96d07c7e8e4bf76&X-Amz-SignedHeaders=host&x-id=GetObject)

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
