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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCZNBJ5%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFucpoEYrb7P3rs9epyuaOrMZEhahoR3yrv0kouKKBuqAiATE%2B5kOHUd38jA4DubcSZTDWjGP9YMMdMvjNB6BPq6DCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMS%2BLzLAA3q00kEwymKtwDPgkMpgLyFofGbEBejCiKxV2%2Ff1BCmKiiJb0crykNTxFLm2np06N%2BhEsFdqr%2FiIuQHETRWTKQHNqdpoDU9fm003icOvMmY2dbnC94zEGxh5LexEBEjxIFWjr1tHLlwsd5JrbAOBzbe9DVlAqKETJsrXaOMrKa%2FpoNeCk3Gtzu1Y37r8AlzslVeMHtWORsDEsB7TFLjDQfPSDt8NCZEE%2F9ZCbjWTG7frrO6QZ48XKJEvn9TStpewqU%2Bp0N3dkyvwimlCnIpT%2FXIhKzOfX4gBhqEAj9QGpVkSdpTcCELmtni1intD4GCp5RfCE68Q4WrGQNXxy1RQl%2BKk%2BVSpzOcyLYqO5HJiwD2M9rnt96SEgC0UeIUpyXYP0Opx520xblOqCygwybvk8i7EBPtS9o9LZ0eVyicMAqdSNIHXfBucnpQo0mP%2BK1I8hlUghu23bB3KBuhnc%2Fz05fPrVAtdnkWx9Z0cKzHUCVg7uoDFq%2BuwQ3MuuzfRr5KR7CpihaeZ6jF1n1y95aWmBdXmMu3qT4N8qrw4S4kKvMSKUjirw4llQi5DzPrYtJOcNe5yIRdsPWy3YbnGrcMBEkxRzo1aOUUq1yyEE5NBIs47SRSnzFBj054Il7LScaDn4dKuiZiKQw9OXdwQY6pgELyhW0YXjdog4iWVjheFa5JHdhzPkoUesiwzEfcXF54kQcCsW%2BUNp1gGCmLTHUudyRI4oOoZ3R0aghTKRz6gYdDgw3VsQztrFhh0EDCeSRHiyGYGWOniTZDOYt5%2FLb2SZ9w4seOq4dFW%2BX29m76jk5c1qFX6YYyz3%2BS1HHOTqhIpuOw0SIxoRPI77GjdwD7l%2FPGw6%2ByXLo4sqtjJXWcyoXshvEWdzr&X-Amz-Signature=40956ff2652869d16d766fc7bacc33a7559511fa05fcca7c1f6812d588f7d68a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
