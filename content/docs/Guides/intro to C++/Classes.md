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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QPWUHXG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFF9cduVyXiuRvV2lLf91vOT5q1f0nsPxKuD3UK57CFGAiEAlPxzAInvZL%2BW3yXitgAy%2Fuv77cWygdOauFHUDI2asO8q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDLEdzrOPgE%2BYMAxquCrcA7s1tH3KrCj9fvn4%2FcP1xtkaOgZZ5BODWO5FDpz%2FH1unnHlcribWLoVeCqhJXh01yzewelh%2BbV9wX4If0FafcPirF%2F9jL6Kte3CIMfoUKfYAFoTKyR2wkufWqzovVfiKyYJEGuhY4cYEJ52x0BLcTEeigHFSlZFhnp07bVO0%2F0J46bpCdVFAbDZ43lJ%2BqgHFtq%2BObOVxkWc39dS3UwRa8p3wKYGsgKNYzMNypon64IGw%2FiBBS0AAZpXPqfevmPCay0Dkq%2FFj9Mdbu44RYJvqS3fU4qPpZwBQKfyfGd2CxZtAUD4XUsswcUonWmW0449Qv%2BKgTuGrP0aWYVKQ%2B0qdROImQpDu9CgK3XTYgIKeAq3q1u3h5ER8RzayMbUheEz2QUFKGUinP0jA%2Fc8m%2F%2F3BSkRzlgc19JKb%2F3QIbhxbyqq7PYs4XHPFsRVV35AawiWeebCuRt0NIDpqCf%2FvPozMhZfizs6k0RnmbNXwbhlPFv9TUB50g1xPl59cquigRQ3t%2F4%2Bzfqiu6pLVfBbHo4B2dd%2FE885GxedScri2Or8powKrXgi7dtoPXFcbkZeccIAKGn67m1oXGzwSis8X9q6p6jDU0JHeb3o3bsbzumSKLmQVRFiOMRD4HnAWWe%2BxMLa8m8MGOqUBUH75M3NWsUY6awQNrRtOKW9BXDXOggXJ5cON49tgRi8jetbhcVq7UvvESEO4ajp5M%2FYgy1%2FHO7OTFxg4We3OVs3jgwxqQyRGo6CuE3gQFeVUpXS5iAs0Dth1Xu3InRfK3EUlLICYkkuGzFzI4amfuxJ4dAdrvsyzTkZlTVAQDGqnQS2uUSR4tgUZwqAIx9AmHBKp%2F2dBaoui22c5cOupcjdGyacu&X-Amz-Signature=7512be385992e6e56baa9e0334adbf5e6fea4ecd29c87918e27849eb7ddbd2a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
