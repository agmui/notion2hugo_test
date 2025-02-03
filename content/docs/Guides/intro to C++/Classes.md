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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z24WPVX5%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyTHCD%2FCXGOF26i%2Bgelh7npsW9bxnIO25wMJMBlZhI7AiAygKdgX3L0CEi1LijeZqN0CGyWxS217nFx%2BamiZKPb9Sr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMbcEbtnwWL8Ul7IbmKtwDkAJsaXjxhN%2BT05N%2BDgfk8cwW32cW0xkHN2PpUO8DjS7odQy3Ce7VFZKbcCNDSa8kMIwTldb6KnQJKGBFOwXG2JUoMaB%2BWVqhrHRSh2lhpYYc%2FFWVoMFjUm07URZ9AsKAA3ccvqR9hcNLtZSaBHnbd6XTE8OOCdRHiNj%2Bxk6ioMGZy7S%2FYHdwUixvW%2F3iYCVJ49PNQYuXqvtcfBgaqT5JaAaJSZXgrU6Hg92lAN3XKWm99%2FANm1EilFBfe9mcb52PDXBYoDBn%2FOvxxX8uSnni7hisiBnsYefmeHC%2BfftD9%2BZ08X2u4vrSg1pIUjmsffNxorFJnTqH6cYyJZ0unX%2FY42K5FDHENjE6yrSE6dSXbwrYgOd5t6XkE2Rsxw1hx1dflVZRfTNMG4dmxmf3Qu8CKWe198JgXuA4NWJ1TbVeA4pwni%2BucmTTEZWeGij1R6zLUlvewU7d6QTYidcSyYNx9iGep66x4TjUrWAw7MiVL1KyYd9hyALDtC2jko4y8S5QcDF32nQyqmBh6pKs%2FxzwjFLoHNawRkFhRjeSZc7tEKfywVegQgyMEEOVxfYJWQPCgde4nVxQgQrTo7K4lRKn9ZSfHR5wjbbhnritUg5h8VdbBW%2BkbNXNVF3yno8w97WCvQY6pgFeO8wpNdxG4DkHJHNTYVdXMObIPMLIo5iHIBHgU9ZjJzM9xWqX253b2vD2ckyY4MZfIQ0aMXGiSpEPOrHSJD0xMo4XhAzb7CnTrd%2BukLf78dmt26L0Gi5KnjoxqL72nExjHFJcZR2nPv1ZWcMya2aW0j01CgibVDdDY8OopyY7Zt0LUE%2FlFF38np30vvfAWHeW4wq7sSQOiLovWsExaVI6Sz10fYp0&X-Amz-Signature=fa303155d09218395dd48209c64a262753e274a4faa97887992b6ebf1ac69b44&X-Amz-SignedHeaders=host&x-id=GetObject)

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
