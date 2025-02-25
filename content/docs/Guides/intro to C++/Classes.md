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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D6HOOEN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDQXUhKGnlNo7%2BuWzyMFTGie9rH5Uyb3vS0Ter62IQx8wIgaXfEzjYSsiZTNpvsiPS8T0PBps4566o9%2B4H4gN0U%2BBIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOsAYo517XUMussa6yrcA6NBk1GsvFo3d%2FQGiKGTaGpCrfjXi09ddVl2MuTMd4YBaYsczlQgKJaMFAH2%2FRzVsSdZ9msixrFOgsaNr4O8Xk5ajZBIiZLeoucOat7OHN%2FUjGp9Qd%2FIfHd%2FZKehx52POGBnTiSoYpwm1gJcmOXKdKBcwv3yhrrs%2FnzAVeGxvtBP2%2FiL2%2Br1QZQvGiOAx91DrV4XarXvAvi5uQYCOjY5Hgw0hDrku3SmznxpxxR5BTXYB%2FJeVfmR45%2F9V6kMIPacxL6q5FQIiEeAQ6ZbtM6Tdj38PDYJjoOfdIsWlE%2Ffid356udSPTn4raguGfZSfrpprNmIPA1X4Qwu6LeXWi0Rdh7zGRLpXMQ6vdAinWbWIilFqwZ5ITbA%2FQd891tyYQrVBn4Y5VM0juAMXdBn3iyqwC82WfdF7HTlIxuJHyIBzCAzfOfuJ0Vf0t%2B%2BfYepAJU6765CQNfDAc%2B2aSnxsX%2Bfb95Sk8fu0rK%2BS349N9HByzVHJHK%2F7OcQ7sNN4jpg%2FOh17f3zsApRZUAMVSQZlEvTba7EVzez7jEwsMMsPkKjCXERkAJ4rK1dv1ty%2FBjYmZ4P%2Bhy1ReO1q7bAQxv68VeRptJcYZ49qTfQ8wKivyWgOEo%2B%2FjEgKFkB4kMDVsEnMMrK9b0GOqUBp8m20FgMH9dvX6XPp8NJ5WBsvVZ%2FTaOQ3hAvICzfml6rkNPmSS1y8tSXw59NDhDaOVjy%2FOe1NYka8cSvf6LZexdbWT9paCTR%2BvFhMYPCNk53uLUyvL9vndfkHIRc%2Bs7QIYM0CYs7MLSgjxQXvZfh8vbvXLtpZj5v1Pcc3JZx2IBKMlXWw0wItwDNMSChDc%2BjRoQC9%2BjgfsibCPDpRLJclqmu6LPq&X-Amz-Signature=bcab4bf4557a27b4b70aabde53af086a3e8373c93b0c0f938703557a72f06331&X-Amz-SignedHeaders=host&x-id=GetObject)

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
