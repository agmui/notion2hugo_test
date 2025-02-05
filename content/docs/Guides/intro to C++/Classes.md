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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHUA547E%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCrD2dr8A0a6AWjcpeqgnS6aCOlnrBdKVBU0sd%2F0BgoEgIhAMnlGCKxb3Fq39Klae%2B0WffBoPL7EjIP%2Bb%2Fofajx4Q3NKv8DCEQQABoMNjM3NDIzMTgzODA1IgyMIT%2FpfzDsQjs%2B2SQq3AODXY5KCLcZqpVWmz9gx983EFVOx9HfdsWQRp3MUtyLrNXVwqn6nirEHuZyQloz8l0aRxx10C0xSZlqBdQ%2F1GiOGYTA9LdKtUl3BUK4RJYNQqBLJcbEMVPRhG%2FtbIlApYq%2FriWU0r4CuwqlUKRxNAmmQkbRFOfk8qP5AsiIaErT9sVt0yht%2Bz9nu%2F381mkBN7ZG7tMs7muFPl2C5TR8GTeW0EeBbpc7Hk4l4hAcC6YL9ztkPm6mL79ZNPQ013idJ%2FlJfGlAzEbDzBBoBd7Q1Pa7wf3GAl%2BgSxfbWpX6cEkN7lTR%2FrFP3OgDBjSraQyM1bSYjTq3fvqcrVkB60qxewLeTiyAfUbO3qooMlCZb9vdhId68nNymlLG1DlRs80CgITV76QkN%2FDIi46ERRBk9CM9fCDSjipvQ2L9U%2BzwDsSmuC3mad%2FuNyFD9JSYTMjD5PvELKu6G8qMxkxpJ%2BMq9a0heqTL600uEDlBoG0X9bsVyXJ4l378Iuz2JgoF8sffo4%2BonFas%2FjewTN2MLb1fXT6IhFczdNkwkdiGjY8tOgIZ%2BPucpmgZN44o5whxAdhVhFfUZpdCjW07W7H%2FKoJUwAcRkgcpmwgfVKz542n5pFQInzRi9qnEFO61gJQ1ADD6jI29BjqkAarSoelIVfB4qJ6nPNo47cCDJroopu0p5asK0%2F9Cb%2BSkmzcdN5hYPcOSmszBgHqfrc7tFrgmOIfjwIW8z4da7QgQZkVqWlXj5IhXDNqtfJUSAFb5ORuW%2B1pmFwThNrjormUHchIgvzHDrX%2BUpVXH%2BOxyljCchA2GnuqKI6bVRpTE3xCVIEAHS28tHUCRkc%2FWiXelmB23iXRQyXTfyPl5Y%2B0nC0zu&X-Amz-Signature=a14b86a29a5677832788c3e4c2362e9ad0c008c85f6149d6a2e7ea523af2caf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
