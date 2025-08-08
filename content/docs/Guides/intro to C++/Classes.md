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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEKP5CYQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCICVXuye7vYTMsSZHd4XcwvVt7GT0oMCxILq99KBF1CqPAiBf6Kgy05ThXJfYAcCxQcw1S7a1fSYgbS5Uh4dUWJ4%2FTSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtx0m6pfdL2BnyKBKtwDvkBzJMRo8%2B13QSS47O3B%2FCWwm70Jwa6zXGbnwdN1jbljyfaU0iyEvRPc1VJTs3wOnWafxvL%2F9%2BuNnbBzISzfGtRO1AugbmqbXwfDYrKjS6pZow9BVjHDaoHZtcm%2FPLWktIv7YdUphER0SJZfHw1V8a%2FqCa4MFRHRnLnkIFyExjImK7muyg%2BAreYjjvXbHDisA6Mk1RmTjSjN3ZDdxwDlsojSb4ydA%2FNHmXj8%2Fd6ySIMMpFa%2FlLOJFvJEGTNohKS2IE%2B1IlSWYc1L7uIrNR710t2tHmjDIZqBJk2%2FwlC1YY9jK17THUAFOCsXu3rWgbYO838pXrNPdiiA%2Bhd7PArTjZuKyJsOMTFMEltvnapjI%2FwKwxHmV4aTCDG9EU0L4446ig79u0KDnVafGpCJ0cXRLX0eACmhJjSgoVuki4d2tmFle0N3TnVIRq3Ga6mVj%2F8Dv6V%2BrEsQm1d29KwCTxQO2jalPwAG0fIXohpuLvLDORCDEcXGl3AH9l7Vx6Qh6a99szdxYkrDlIJa3nGC4BbklQwESl672cyXnCFds1wLWVtVrpQqn4yfAZjhQEUfUAGl9YXp3TKuVrke3sEsBBvKFDiCwvMyUzcqPxwHNHqD%2BkprEzSsq1CPo%2BB2a3UwnJPXxAY6pgFLKP7UDPvGyNmyIoDQLgtg%2B5yoUV0Z4%2F3b7XfQbHBn6c6GPV%2Fkpr2sIgUggy6Mx2Jf5hrI%2Bx1DE2VzflyU6Hq1AYjVvkfi0xpM0DKJpYzPzDwDWpEpgs5xIMLmT2q5T2ShgLwS6vHnu8CCHhQhf833Y7Dlun4OUaR8Zddaf2jV8F1iOtMhATaE%2B0fEoy%2B5ORRLKqCt3NfdDsGPMRSFtYghFJn4ezYg&X-Amz-Signature=824b6f0289ca146c16b90c83b91f434421571e92c4f3ebc2fb934e82601eaa3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
