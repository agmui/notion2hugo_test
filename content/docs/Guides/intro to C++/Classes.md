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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4D5KFQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk07yrasaUhqeq%2Bs57oBcj60U5Pn5uk9AKxCZEnfdJTwIgZDRtRt7ck0HzcG%2BrwdfNL29je3IBKOaZ29Drkwp7Q6oq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDE00ARSJ3K%2FmEjJQ8ircAyIE4%2BJLDHz9y3dztKqQQHMeCzmK4Kvz9h18Dw5Jt1ASIhcMe%2FIhMb%2B3GncX8Fgv6YsdGFfCQHUz6uTsIidiZ8iapRewzAD6u5Oh0q4wbiVYrFL847C2rqtrPN1paIqJCmnZKqIohqSJA7hKfLKMdGEF7KciTepwRK%2FIVUSKTIb5UZRYHL3CQRPBS1ikpqZXb7ZBlaDpLuStRKFpiLg0Ti40AuT5N1msa6zdqTgY%2F1dN5xVeCSZYHcWKE%2FJRb2Sq1x%2B%2BABcyYVYEJ6RyPYZ95%2FV5%2B7X6Kbh4dxHq%2Bc7MQ8%2BUN0F5rmVscZOEQsoPCPIkmwtl6ekgC73jmsfs1r%2FWO60rovBDy9jHf3dhb42jeQJOV6RqE2yNqqPqouqEZI18ODnSem7oYwzAFWJgrt%2FzeN0bIxMvv9nD9ImeBQidykTH1OGAgSJw9ISfmbXIMY2JdokGPv%2F%2FkjkbnLLpGVkEaYN38s%2FhrCJoJxv1N4Zddh2%2Bf6CRXSKRHDwbF5aPfcwgTtqBhq0aRzcEsGBULrZdLFt3F4LB06IqyRR41evwNxNkAQZy2rJh%2FkrXsGeUAr4ZDY54vtUnQhJJG0CqDF5Sfr2oBfSuUbZKoNbNx%2FRrgFlZ0Opak1Z791s5IvPmMJij4r4GOqUBZZjg%2Fq12JbLWoT0UsMspaPUaqDJnKafDKVVYFJMffDfstp76jeBx1N%2FL7FJqUXj%2FqKRD3FmZYRo%2Br3FzxQ5yvFgN5OxvHijDFJDavV1e8SaOa5QGtD7fF6JRuFB9on0hdXLMNkxOYrmizDxJ%2FX5Gr7ntvE64bwQDMAuWqkFaOE4LlTdtP1BEAsfdDMMLZJnSGl%2B%2FAZkx5XcBCDhavo3XY2eCJi4d&X-Amz-Signature=b45b02f32d161eb5322226d1626f09caed13ee0c9e64b4ae10c48cdd1b65757d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
