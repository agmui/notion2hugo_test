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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UHJR53I%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1QxJnXbHAIciacuvZQHtn8pFDMQbaroyym%2BcMIc9I7wIhALRSZOkiUyA629KuIch1tWW17WYXNe%2Btlhh5Wz1YfLL3Kv8DCCsQABoMNjM3NDIzMTgzODA1IgxRKzzzkS9Ba2miA%2BQq3AOpgTycYiCefur1ClxQbXGcFqsnRowIYVWkogQLOZeTsNs4FFDFPvvAroRriSsrzewP39fQQahkjS5Dq%2FevhWEk7zdwEz8WQNlBf9F45xEGMKa6yLirPE9Up27k1JJk45z4rPDxrkB%2Fnd3bqkU2QYvZP7uz%2F9rf5eyFhEmBTikZ8m2T8EBiWII4BXneTTyuXjNhkOW2MZIh%2Bh5tTzO35QzxZUAGL0%2Bxd%2FIzPGcr4nhpQsnOTDd4IuTubWacetcx2k8IifoNQWrSUoV8b1lBZgcHaKQrrYD2tDYwCOwjJB2jLa2Sfm31N79IwjFq0XekUxTQnGdBfzwx%2FwqHtHWHcrYBbsyjTRAXVyecsPeioqQBoEoNWC%2FkndijSm6R317pDF2Ji3jpxafYzzK2EjZyjBPqfh6rE9gP5fN5h1QscQ2CpRfSvkkZSTASv39dMEoRQk63qW%2BdLKTCOEL798j2DpnO9UViQxFcOiTfc9Oj5boEWkPu20lkWENV6RTfwzKIzfdlwR6j9cvwcbCdwzhlfa%2BjyKSSeWfCjeqcWgS%2FyZhbDBEloclnOFhxtBzmW14Dtm81rL2kzrA6E%2FyTcg6zBGjKzUx0yYYHFro8IX9nxC6YPmmwvRQqe2Fs5RlbPTDeluLABjqkAWy6EZwFeCNp5SS5MnfRjAtRXRPRniPj0SsgARcXOkm3koEQEp5So%2F13h8mpRF2WJ%2FY%2BxNHtXS9DwNKo0Cv1hOrugbusD6U7lmEGF6wkoPm3ZSfIg3jSIDSO1vcs0yFT6HwbhxDY3c9eBlYw9Sama6Eei8TAC%2BVRl3IkhpdUwV5YPXXZztevgV7HYeynPBWDjP3hL4vcz0QPtH6D%2FGle%2BWgyQDZ0&X-Amz-Signature=e6daa0cb6d618b9f4e45ff9e2c18aac8a63cd22de3aae2c14cb5cfceff21a25e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
