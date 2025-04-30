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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW65QMMO%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDnx8Q8kFExxn7l1Gy848cTJWzJaEc6%2BBs8Dg4ZzjEsMQIgDm2rgAdeCkSqMV%2Fx18k%2FE6NNlWgqiz4cqdFQUu9UoxAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBj4%2FkUmAIaS54RuSrcAy7Qih5EwOqTyf%2F7aqB9BlA7KExFQvASQ2aR0EjFisRBSyhG%2FA1PoSe2iY8NF%2FmrlfEUZboGw7JWr%2FfIaKkTfAyXsoJ6fvyQyiGKpglCKgs2VPnIkF9VWhamGnMLIkHeeME5DP3hruk9GrkVdEb53hHjN17KdtPY1r2tEFpw9bxR2d%2BOvNdfw5jyE0iBE75L6bl7yqLqdLIHkkS6STM%2F8nLoQCHS9JapqVHc%2BmImvXU1LEnliD62BLz59DV8dOhzgPRF88SmtRkMWa8lM3KKyZYbfpWlXwzDyEE%2FZ4G%2FvvjiBtV2RMk2oNFKjFbjP230li4NgauvuZwafvy6NQUnqRDTSgHzsDlau4AHKkWWkeV09l7YdXBMoWMRHG5N3PEEqylkFFuu3xjQCwtVfStbPzgnuyp0FR5NcJSUWyutdovioYAHWE8BXLqlO3ghRqY%2FY%2FK8bkGQHoLVEgTvx8b%2BxPgjxjEodDch5rqld6Uh%2Fp9lnlBkxbB1ajeZKeqYn5JABG%2FPVc5UawZVOfESPB1KTowo0gHzEF%2F0i3UlUo84x13Dym06Knr4xaTvXH3SRT3dYVXwJl5ZMKYQdEVsf981O9E%2FW0ShBHDg7aRVOrgkQnrKe3FgscA45kd5wyzHMI6eycAGOqUB9uFWnlkn3zm06iXd8O0iG%2BB5FoQ3Ce39xM5LAfE%2FfCTqMge9R0M1vQUFyqoZb1LlAZXluqiGwIZkTl9IvDu9OSEkLkBqZnJK1y8L8F6PUyDb6LDPIt393AqzKhJoru%2FzIv42yf1rPYryCt%2Fz6qMvHQ4r3h5c9Q9tq751FUDEFuH3fbrfLvs1jd0bpvFvubNuhoupplLWPDMMcxHrVjHiX%2Fd7XVzx&X-Amz-Signature=baa9ebb99cee5cba58452eacfcaf4973a4c05280eadbdb0648c5a84ee2c0fe17&X-Amz-SignedHeaders=host&x-id=GetObject)

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
