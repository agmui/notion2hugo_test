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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S25AFMY6%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5uX8kpOcoQghWvDwg0lS5XRzfMVvti7%2FGtOCfqZqBIAIhANa55oBZyJAC7SfZ94i5TuoMhGQvMQeGKOLMQHPtRPrVKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9VkKD5Q2uxY6Z9WIq3AM6ry6kCd%2F2E5ISudzjh6lSrlkLpJMJ9zx87Q7Y%2BRoAhA4BxCMc2CQrQ8HLtHlSpi6ktQtywRhvA73qgFr4N2yH2qketwj2Xx5TkJ670h9pLQYQJbUMLc1UqVkgG5mkTJPGmFPjmwzHqyqevhnux8kUJMitABS7Fs1Pd1kDarEHfIHUUPmcB259cbJFi%2BenqeuHZJKf2D%2FG%2B6In1u5xAFZUTrAx2npCndGpasFOtbSBs%2FmxJUjwMIxmJrSXW2lEG7VjocpDUAJvGnMf%2FC4BL2fST%2BKOlFUn44a3dibvcquR2dyeJBUNvyWZgExdi1bq72ddmk6ndZZUy5WZ%2FOKcfsoNIJTb4acderzWfMkxn54trxxE2wJt5mQ%2FfBd5BGswCcjcEdkBQzz8NcoZQOmoqKDusoVxZRLA4S4yqTdL%2F%2ByDHdJ0UatPHEnrJzpElwS4zBtQGZaFRQfULuHsFI76bzJGMC8G2TTt9HyovfGh8apR4tOcG%2FSVkPmwQ3mY3MdwspHuFv1BRpOfItcIQp7J2opzEviPvHOOLRQkuHrWtqk0m4uAoJnlnSSfUZfkk83BsWv3%2B1vMKgJh80Md991K0GiUNV8jdq39qoX4TpZ0UjSNyNf0wY2XArL2ck6UNjCUiKLCBjqkAbLgogqP3MTpm%2FLywe9%2FJiwXIy81YjkP%2Bajc2RmyxuH7KlWQrp600XJJ8683vNteYNU15DBNwuIDFjGPEqnyc4R6JH9wcQxZvtzjh4ItJWji2XlQCNPOSazcHjBKalpHl2y3qpus%2B2MomRiO0mlke%2ByvIjtyXxIB8Z8LS1PFPlHImzy5qF16uIWzz4dn7oN4OKVHKnoUDGpZDcmtdztF00206%2BHL&X-Amz-Signature=b8ed68b1f8852783da28434d4f8c3e1f507cd202bead525a2f2afe1a9b542352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
