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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K3EGZ5O%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrMQ9Z8mXzGkeowI%2BmWLhjpAKCJELLiPHEQf9wNy5AWwIhANVUie7bCCD8HQeWYp28GlNP4dnIjZWw5wCBtYdu5SuOKv8DCDMQABoMNjM3NDIzMTgzODA1IgwP3Jhzv6uVYm41KTMq3AOI2q2le7WftLLMespLmQVGQh7vtymb3rmYRb%2BsKRqOfwCbkwWB2bNoXbEeww6J6SI1%2FM%2FXa6WgR%2Fi8nl%2BJmy21iarXdfc4bkfWCA62zG4wJf67xeuigg0kbce9i1RsOoUKkYLLB0EkXCQAtON0zqdGw%2FwpNNVSqBoskdB1B5VrqUQqOZ5SUfdbQHz%2F3%2BzsyxhPLDObszuRYZ57BuDTttC46ixyprqK9nYhltrX7dzgiJH4%2F5mFOdMWQ4WhKMRvvdAln7quh9bkJszEoOAHIzXosa19hG%2B5xLNbcVSwozV5qCzNo%2BaHhKItNSfKdCaK5C8RLnqa2cUXGgfv5A82MzMcPgh4eodhwI1hrYCJmM5eVtpOd0KlTUzzjCIAuWvXLbwj1UnrSSvZjifTsA62wzu5XZ5PMczxnitOTaMtZKQ8MVP6398UlTpKyQKuVf7Clj0Un0Ra5Mccx3cez%2B4XwhcwxMj%2FBnz30DWAWaw%2FYKfenmYftOs1p5TMtQR7cDXzOSBNDkppfwjyDE3QYv06ql0idDQg9sLA9LfrSfOJWWhpnlqsl8RGCQVSF%2FQfZDnw%2Blc2jUbW7PZ84I2rmdrNbOCevbWytQL02%2FaGcOwc5gTueAwE53P%2FNtD1nWx8IzDRzqe%2BBjqkAcDhbMnRKZjp%2FLJidIHt6FcgCAlFzcNHj30GwUtFvRcGlfgkKVVDXJVoqdpC1Avg9LN8CIjLLOhEs7lP%2F6B2Q4JMOYftL9%2FBhi3Y4nRTE7aUTNDeaHQFkXMCr4kf1gBxgiovjd2o8bQqS4veyohH498aAVwFTMOmBfdn0EsaSRkl%2FnRTwMTSpsp8hnisW0xvYUuNJJExIrspPQ3YazY6zpYuD%2FGJ&X-Amz-Signature=4a00c41c935eae74cb6aee2138778eb0cae13c44c035b4332b7226fc6f4bed97&X-Amz-SignedHeaders=host&x-id=GetObject)

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
