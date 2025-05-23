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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7CAB67V%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGkBkmxV0nPAq1up0fl94IOSSpX%2BKBY7yDxZbdUHvf%2BsAiApzdlEQJSakucGPanacxGgO%2BLpZewKR1olD%2BDiC2Yb1SqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBiopLvG91Tx9Xo4%2BKtwD%2Fr8vrtgZ18o4FIkLUB9LPMNJB2ztCbJot2WH8lsF0eEnXdlCUm2U472bbcyUvu6I8lMdjOLmijzMMioSgfzkHo8GmKwGyCJQDWYC0WIMKMHvUU07RlHueQv3yG5D5NkCVtSIkKhTdl2sOXWAWsKre2gPA0bKkYgnfolPvDA9L7v04qwAvYDCN7ubN1JtpvgCysLHzABorh3HQnDUbIZITFd1R6ppS477nB93qYP3eYPKf3UbxunQI9TxcAnjvXh5yvs2m8t8dco%2FEaHFp6dY%2BApsLjXSLqctQQNbWXSflmwbG9vOJsTEbjG1TrrVdVkfM3%2FZfPS57eSMIUyvyRCUCe0EJ8bTyk8t7npTChrC7uo%2F0JI6BRL8YC%2FaYXMP3R%2BF5lYh%2BVNvbPhOpsD28kJPAbqKAhxTK99r8QncMxZdBydhrUNEeQa1vcdoh%2F%2BoUP0GtVL%2FkzH%2B8txKiQoried6tmga0%2FVWOl9xEyix0V6aRKT9vHJIiv8Pp6Sxms2dH9dJIs%2B1w9WuvNuNDgsVj7XeqSFEm%2BmjuZe4o%2BxyhQC47vPo3XgP1a5nqBCpyCETByK9BNJUyBwMWEf%2BejswoO5LR5zlPQtCPw0JlQ6sAfjiEM30bQvuKuGMcKFve7Ewtu3DwQY6pgFr8ik%2BLy3efqaqI7frSyidXU%2BJdtzduJfUc7XfkzL2Ni1052Yo5R2pq6QyC5ASJX%2BXfnfV%2BrvN7UZ8Q8Fv7dgGEqMDk%2B5zds4YwoGjX3TXiB0Y3Bq7ScVNRgsQzW4r7bBDTItoe1r98hEzHNg0n2pydRGTFf7iIOy7n9e%2BfCizOElqNEeQ4YLTHcGT2KtTj6Jqah6IP4j9F63uaCUr3N4Csf9QGN5v&X-Amz-Signature=60ca48ab64a949cbc7f1aafc4c7a93a35f8813df8d01397faa55b504c6ba13d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
