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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRRX7Z5H%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCnLLxGw7lTtvxzSO7TI8PIu8vRVxZ5qw1WnmwoVkJ0rAIhAJGQbP7pxSFaCHBxXLuIwI0Xg5YIKdYSR4XIpaRBWL40KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6SbbDu%2BT7RAc52HYq3APdR66Ol4b54qZ%2B33kA47%2F1KGGP0%2FnFCpE4%2B2n8%2F%2FRqY51oelWCCzkMYw4gJbfZnytQ4MSDBbSuG3seYYQ7jm0MGxnHMu3OroOJlX2JpMvm2xOSQbh7f5A8w7%2BkaHhyslXya0%2FhEt9Sj1XMXQpI8nQUavAX9lxoAijE0U37lhMg7xrYS1IB%2BfzGiHPdLpIBlxnru9ajkNAN0WYMufTM84t1JpWON%2FWQCEfQFE%2BTJXisfjhBDePHRy0Qj2HyWEzjjXzM5gqZ%2FDQXE5wgvK%2FGYnboLY4I7tNMY75leEN1ZXUIx62JNv%2BfIlhVVAqPp5jSAbjrVisbVPJorobFzccoQ1TxSKnwIXaP56I1YEzJo%2BOPRyip0GSmTLZvHr%2F4aZT8lgMPfGaB4ck7Vdd2acAZ6t6lQ85WXiYDRX7BMANw1lSHPpWOAFICthfSdyZjLA4z86ZmidlYmuakrKymzAeK%2BBOSi48tYWQ%2FnWiJWSjrnyw7unkM97Mc0rXdu88N3Tz9%2BYa793WcLo9jzfqA5JGIEn0WZvWqfniZ6Ij4LM7k3tgzKLv1OGyCz%2FswEGvLvt1X5OD8cmIsQb61v789AQCiedAmRUZwRDZ%2FdE3vs3ONmnRjHjMWzBYUK7uqprxzUzDe3pTABjqkAa7XGlggyzxCpgKLfg5EG%2FFAODSSZ5pFgcmAhynSzlKkvV5ZG4hklfJt9cKOwigOLwm5paKPhFkkRA0ljjr6485eqL5IrVaIFOCmYKHgaloxPueJYkb%2Fwk1binzdZYDt0YA%2FjLHLc3EXbb0mExsYJ6kPKZLIOPDEHgeX9ZBWg6x5x059p3cIZaDIxLm8LYbiDPePJIYtzIme10pmzNECqPSCZG74&X-Amz-Signature=7373b2dc2c850d6cd1b68d34f01e68797422866747f2a3bbb71235142a61704d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
