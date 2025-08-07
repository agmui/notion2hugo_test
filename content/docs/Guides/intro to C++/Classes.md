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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2RFE2ZY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIHVfxqnvdYBZjt9Vj87dA54AeTQQpEWYkZjuwPjogoWjAiEAgmHYGSKi10Z6Ij7uvxwyZxZJrKURB8DPax8gMGmmFVcqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2hBu7AB0%2Bv7ZlX7ircA3pMLxi9s7zwD7Svncg%2BLQFDd%2FDCVEG2GW93mnAVlXvMDDqkVmPpQ9nex7kXwOzIhOqKoZw4vHSEqh%2F3C%2Fan%2FlbSYQAGDs1TvXvZCF1yJP%2BC2Rv5g51dcJ%2FOEldlDgRc%2Fw0kj4zIwkTgxlgAkp%2Flr2WPEkUmvZ1z%2FYmzTYhCELvPPJRaoQPd6T7bqZhAsoDzoVuXnbhasJVQ0NuhWozbMHh6nSjWA46IulVkPTxDChXvIUbHaqjHxWUYcsDE0pIxgTHMp2ompgiAh0LWB4fSTiS9Wcg%2F%2BMGvo8wu4lx1XPbQH1hK1aCjiYX%2F%2FrKEem%2B1HsVfzuMee81HqAkhydQEO4mc7dWaHac0nxvBqueejK%2BfkiisX5wYQBPMjRtvg2ZFAst7alvFZ01l0vuBoWPZG3hvQReQBL8yWUi36tToSBwznKU6elxwx612E9AYJg%2BUxQkSgIMyBzjmfdbFSlz7idcdAMGvB7ovTHL%2BImS3lpU8%2FDzjblPbX%2Bld0X41qn1tAjN122BNFE9OQRnXEl74GQS1Z5dpll1Eijuoga0%2B7sGERH%2BmEZFHsq4FeHjWQUY5zNcc%2B3NP2Hq9r8U%2FSkLZrnegdB2l10czNeflTkF3aFpuGsgsclr11SaoYKhSMMi10cQGOqUBJTmCpsv58fJtaJCaBEHB0AQVPKeW%2BVggQT9pkfiuGRWugN%2FJokLK836DyddknTAiW5jL2FAN%2FcoWROgUFflaFgyXJug3kcLpO0wfQpsvm3eYnFqCA9LpYDNF5IGm2an81GuYvRHfxmFTJITt%2BgFSIE8uYughjyTqWZMa3NI8vwc4ZuESBK4OzjqWOUx%2BS2RRwuYBkjABtFqAT%2FN3xmIk1dCHCJGU&X-Amz-Signature=024bace82b2f23f34f2d5dac44a61928461012ec57b83980fb022aa7d13dbd15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
