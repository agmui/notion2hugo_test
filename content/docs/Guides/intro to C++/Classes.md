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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627CCNQYK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2poWULCrPRFY8nvOPTSSAfUfBGjoOkWURW1BmzFj7SAiAhpM8J5NfQnzd48iLAq6gTxyTgOgO0APcKbxX%2FlitOOSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXY8ScMEtKvu8Q6d5KtwD0lJRbkdD4WDMsXg8elJ%2B3mpwN%2BuP7v6lxkbjIoQJTi2YElOFuAkC1%2FDW7%2BRwkoRaCqJW9iX56hqaY6b9IINLGFwer%2BBX%2FDD74gJ6TRMwK3CIjXmO9N%2F25tEUDYhyLHnCvTMhGHPecrGIhrEx20ebTN5jlzw5o%2FUmlC4jLsHwg7WpP0wEzfq9XLsujwJtJ4Sz6GxrhC1y672HX5wBfjFfi0OrbbKwRuJuO3w5OLiJA6FV0mQTco%2BjSQ3h%2FYp4nH7MYisBU1tg%2FIt2f78M51qlEJSNdvv2pjkGDoLS2rtyvbQCXSg6LQz9skBqliAgPlrqZslG%2BNB0dkVeRArM4%2FhjvZ1A0Cte2ZySqRfofhFpzoOogzvZ73gQ1P8lOfgXMZ2%2FKYMnmdOsq1IOXM8NZgYw46A88taa5w7LWOJ54BWOs0Bakze9Z7bCAVtxx7Y1GHM6yWNRGyeuASiGhXJDlcTBFaYc6OQjE4oxMz%2FMWgzPthEgTO9HrgMypMxZyqpqF42MpZUBDNIMt36kwAkCTwVJ1Qhn01isba83fBpgPdQTN5XzaqVBcADlBxGgOkrynYMrNGzResGrTIHKM3KAILTyuQu%2FObgl305fEO1wXgkDG%2Ffd52Y9cwhW5mqM1uUwrOWlwgY6pgFerPqe0wR4oJHNTT%2F8MauumwAv%2FpkvIzNZlZZRLBUl9qRhuAVSjUthAM9qNEM9u2DjYJxhgWT%2FA3GhsRYRPeyh1Ktv4eSEnp1LPzLLb9Sp%2FdrwqwV9LbD7nMauO8bpPFzJxaZSqqhT%2BTEhSepTf5Vpk1kr3mOx%2B6XVDLTFE5VBJrC1mDCadbDSJGUtZh3ULarM0zYSCJqLpqVx1E%2BnEBr2hpKkB7Du&X-Amz-Signature=cb0e8d32630a1e4c3ed2bedfef443ad5740aba09ab2907c1829a7beda1597137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
