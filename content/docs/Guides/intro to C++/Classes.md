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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDDSFBOE%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtlm6JSdL%2FKtEZFyQuwkiEzV6mOfVRGNT9S%2FjadaRbXwIhAKf1vWxuL0H4AmUtDY9ND5Q3Rj5Cp7McCQ2xYdD7vhISKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQVWykhCBmmJMLUpoq3APGPaYzQRUa34iI8b1xfaMmbklULsIFG%2B50fEspXj1jUiNIObs%2F%2FvkV%2BRIIqgImnIurrfTcmPVJvora03j1kf0q1kPhwIMrzTDYhv4a2PQ1kQZYvT5TxxWfS7IhjV7uoQT03ldi222IMSiNMM5OioNyzl8piJbqTMziryFnXUc4tSX22v3K%2Fwm5Zn8PpwmXXI83Uz9yF%2Fyf3TgN1HavsX0hZIJ2ocg9L5Fz7Fe0BIH1ya9SVmLM%2F8UmIvG%2BAzW2Mgr49UC6F0IwtdTIarlddxfQrozBkIUUwT2hpUZbdHeQhWHvP1HhxdWsqWuSzXNdDn8JNZrLXptKqL5e2Biz5%2Btkn4c5RxvHHp0lQorbNyOtsNOLLObmJPFv4leCkfyYhpYfdcmBkqq66ARJXJxsdKjKydd2xKTZUpb1FBwFexooUeYEqtuSjWpXsjZSEsOWrBTIcjdH5AKhyr3wvyD8OgDko%2FAzR1quq%2BtUis1clZyC8xyGBjT4ZKZly8lKgFE2eVqtRGItywiy8L5agn%2F89oGTL3dobWo3hrO7hYyYQvzn%2FKaYykxHVXKmWMWrt9MpSlwKHrtdwhsKR0vAGUTHBY3YK9rTj%2BtZAaE4nfvg2HJ3N0coU8rgPFYVTyY9NDDno%2BC9BjqkAQEhokXqbPsUeQdTtp0rh0GNCzy60yv%2B0RwG9WS0fIfeCoQKMFKSaanVceFKAIqrgi104wvfAaJrsQFwi88dQ5zXeEHjcVm2z31kik1XlxHthqz%2Bu8y%2FWhbuTtu1q98eLieUINSDc4HTuIH%2FO3Q3TqSKeniPdflOlvgmAbIj4J6EGTlmyULYp45McynVbiQTG%2Fu%2FL0katoagKGQbklbE2Kgtdowp&X-Amz-Signature=47caeda53b186a9065f32df1025f2b0c3cc62d6a24471fb7c8d6ced6e0152947&X-Amz-SignedHeaders=host&x-id=GetObject)

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
