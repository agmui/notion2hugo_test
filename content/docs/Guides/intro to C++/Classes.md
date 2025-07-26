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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCASJQDI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDbkvUuMP2z1FIqfzA4uKK2i6EfpIY8wD3n1tZAxksHNAiBwdyG6p%2Bn6Cj7ekir0im3nJqvLF3vI0QVRP8Az1kElEir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM8WH8rLq4jRr%2FGr7LKtwDpso5TkkGsO5ZbgRzUD0tzexMxDhkmD318R5l3S0oGyJLP%2B7SmdmDIZpzQqqHAWh0suQcpYN%2BxQmmzP37NB9v8KewaQia4U2KP05ZFdHIZ9it5VzYg1xi5PV%2BbAlaPUkFieBxm2EBz12aJ1YzWqMVhPbyt%2B%2BCiOVnpiTHqus5pOosSbU%2FwzBz8JvXUY8c3XrQqCVQXyaE70eUiNGjg6LigrMlpvx2cDkM5ZUwv2kfZsMP3KXP01gRHJLvQ1tqXbq9Ft8ubbwOvIj0BiO4nkSFz2Rg7kl5cw%2BEGccTuK71GIHW7%2BILoCwqI%2BpfxHjyeSO1SjQMd0z%2BHeJMNDpvP7uVxNBlv%2B0VRuvGFH970tZjKdp6njn5DvUAVq2%2BAIijIqkzXdJtN%2Bw8QShmTXKZ%2BA8AY1Upcc1objJJE5xUrHBEKF%2FQSPL%2B2DyhNsj3Gyc2MjQZCV%2Fz9pixiboiVa7kJTizBglHsr5MGWKgc%2FW79prddMX6aeaoqeC4ENkEAxQezyrCzSo3kEugT4MSYTvYSl3LSG%2BIvx%2FgWH%2BjgPy2FjEGrezcu%2BKGd81DOr4bXmzti1NNjAMvq8gTpmRI817SvuMUL%2FjUmZwBgdFgR4Wz6obEAQK%2BH%2F0ld%2FVfXKBgjjEwr%2BKRxAY6pgGt9fcke04xV5b2tvXCB9SD9%2FLQ9OcnL%2FtOQyE7Y9KA1mPP1jN4fXnO3YoP5tgPN%2B1uve64aZLtwDKLtFTlIZLKJjqx0iaGXhRzSZgTD2AdbMmy0PHp081SAZI0KjwjX%2BfniR%2Bp8OkKaIudgI7Rd3pd7sGZb9K%2FoOopRb%2FCFQkRmsGKzQ6U0m%2B1nQiUJo2y%2F1rRmLh4CnWHhH02y8kaME8Z6DJaXSxh&X-Amz-Signature=cae4c582041dc419c24bfb90c4673c2a1004fcdfef85fc01dd8aba53bd3d05ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
