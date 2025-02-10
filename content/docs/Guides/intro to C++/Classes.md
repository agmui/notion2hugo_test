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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVGXOJUA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyJlQgnpR%2BtHmkhbn0y7Yz9gtHOnPxMm8rqBKzQvF2UAiEA1hB3zUOv9nAqlhJ0SdKd%2BfJ48edmJgaLS21W2p62hd0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqEOHnS5YvS3cPBMSrcA6mX1NdVX%2F6nvd4qH9TCU7pYr%2BD2ZQFtERwCrVUsVgoX60VCZ5V0INUjZ0rZkvzfO6QU6e1x6%2B0rsaQ1Bl63HgFbquPaNIYlpQI3jIwfa4HUGjY%2BLNklQAljnVwfG3DLvGYBQyOO%2F2LDOyDWVHx4xa6gBeOlUwlpLSqNLhhBnL15vFA2qC4xrSM7zOVgnqG6iXd5fdDhwTQbCEOu0vwpkZzfLPKmCKkpJwza6Nw%2BOd11BumIX7v9lYHrNcfiqqxyseh0pBRII%2BvbBsiDqgv90tpmwWpbBrWYr%2BS%2Bn0vUytzgjz6DQR38XrZ9%2FLpLoKJ73wl6CGPpTAc6FsQhEJmKZKDGWhWKrjwY0qCGrR2yYRkI8bnKyr6%2BAGwdNxSHP6COOEN%2FAM71kXXY7U%2FyC%2BWewTw%2FqII%2FTyUjTEad024xLKtfYMJ2KfbUfPIZzBqpGni6l%2FlVvkXErUumx79Oz6OgBwaA5QepbW%2BHOxSIu4A%2F0LG0aEjTGgqhJhLzoUP7mt%2FxjU0TBNpafhpsoTSvkovVcl7ezmY%2BqM1GyH54xO2ySW68sLxAYwTK7QTFvYTySaYGmoZiLtoVooPRnyEPzUvFXkS2Wt9hqgV7NL9l7XnkoQ8LOtn32mz69Fa%2BSmAQMM%2FNqb0GOqUBTYNOdMiKGOKk2c5%2F%2FO1RbUiCbJmx6Iuf5FkUN7ghPBeCrPk9PNZv5NYmGlazOiJp%2Fzuxa5x07pT24H15uQoCTtzZGOvtLSh9nxp1jBbnvvYaFH4%2FTjxCUHcGEYvy89tox4qMcYRNjMXgtA8cJO%2Ftk6p6Y8uezvxXY3FUnBg1gAWyDudYuzfj%2FY89mUV6I0M%2Fr5iYZgpXBFxub%2B6WtM8diGoQvIsr&X-Amz-Signature=00d4bbdac256f9a25c957d1c56f8436644c9183dc5f63979096a8ec4ca74c9f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
