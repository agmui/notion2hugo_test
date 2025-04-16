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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MWGQOFZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7V6ZRRLmQ%2FD%2FcagvuBQLjkOrovmpTO4%2BjRJjvbp46pAiEAic7Y2wqot2Nu61SRtkYSmlmW%2Bs4LfqTHgB%2BJv0LNP90q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHp5M0OGsDypVRWBkyrcAzj%2FeRuo%2BJw9KuvJ8We6AT7tKq9OT7vHnvIj8SMWUSYBX3Fu2sCnElu9pfSqNp2TZl2T9rUM235sTFHsZUiqgOQ5u9cv6Ez0ASs2UMzmvp9ECdkasofPRbcyocqTltMZIqXt0lw2QBpgXvsfGppY66Aukr7JueILHkFFo9OF%2F%2BIsWP5XJhh0yS4DTsZ0tVGirTcpX3nHESEdS1ZXj76cziyPeBpHc4Kf3sEjbtoalvD11BU3KzDACs%2FF0NU6%2BStN7ZTNffrlLwmZePuPFkOw9Vp1bPM5Xu5LNZb3RCS6KRpRfvDgUv72wUqyXyzJkgv6UVS%2F8dtfa9JjKy6yBd6ycbWtLpRD0jAlKInfATiWezzIQYfsvKi1CRLF%2FMUdMEoGodUfFvx9PvmamERNSEo3F1x2cuSfJ85SC0NO08%2F%2BYWKNqMYVT0zG1yg7qFK3wpnwOpWJhH7RoeoCoGtxuUYGkQft30EYDil3XlclrSj5KvyQ7mFNJrZGiMCnDX9DhKzXVcb7%2B%2FTOuwE%2BhTq5jSyiJkjfZqYjzG5tjOIndjpfrcSxGP%2BJr7x3%2Ba2kzrkzSTXmURl%2By7S9VMp%2BO9WrjOmTKKZIOOK6ML6pemvsJcUsFWPCkAcjv%2BatJBNqhj1NMP7e%2Fr8GOqUBb7owVVSt5sj4lNsXAXmSXCFJOtpPTIvOOoAFNCKMTfaaDy95UmbOl3mbXg5EfN%2FvmejvNXMhuxkqGe%2FZFig%2B874tYZvF4CRDsHHagIauLcc0vM0V7AZEDHoLZV8ZgFQ1lkdRBHJXtYCjeNKyQkpdrxYh2iJFP9g4SccbcHV6oumXTh4JiT53v1q8R1ewQ6Sfx8a019SBCNdb6JQh1fxXTqbwMnTO&X-Amz-Signature=b0f5173951eb724592c4b1e52a8b1c869fb946581da0204ed48244cbc07945c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
