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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5TXSMS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDmuOAY9FDFCzMTnLZq6hzh0dJ8cWJH%2BsLXGF11amkZAAIhAPb6tC96Ykp5SxB%2Bs5hooeMPsmlBtCoySRvzcMdYc422Kv8DCC0QABoMNjM3NDIzMTgzODA1Igzh9c8J4yuFZQodu7Mq3APvxtWp%2FAiH%2FWsSLv6vHhLF3lpJEQsHZHxBrihwg%2B854q5DOq6pVqvi2ual%2FKsMKnpD1OI45Ls25e7ymBpWrC1ePpeaYl68xk9G%2Bz4wqgfkcAgtI9LtCa37r4a4AmiVvdw7MKxUzvQ%2Bm1%2BwqIjVOiZo9JsqSDdLbDW%2Bi98YdLSV968bZyor%2BthoOpIgW99gT6wc5%2FnBkKq%2BFOkd5MancKTYBZeGbG6vy11QiX2gzVPuDtD0Ik7W0acBx2eTFEk5PktPESeLNJorZmfDtGXqQ4U8rP%2BUhwHkrwJTD7yAVgiH4lLHVRAocgBkxhAC05QuKdWziEBJW6tYUBGnwVxG9G6PiX9l8uyWohpWipRs4JiIcvQLDU5iyvj4noPAwE0vp3EvMoS32vLhdEW0Z8TDJVOvsa0PYrVilKzckqfswayhvmGXqv4%2B3fnsiM33SCYUGza4Dk77apfyz4gBdIWcR5doWAY8%2FpmIJi6LNbc7znxEr0NLQO7e%2F7FiuFR4LyH2h7bFCrk3mTrJy0dSqOnsdqipUmG36oCB4eIojBJMEeNvVDsp0F%2BszOcqABuAZR%2BSLLe9CGV3Yl58a1%2B%2F%2BQjLPn4bjKn9kMXjEQpRKi4T9NCpUy3oYYvHmyt2vWXIYzD%2B6ry9BjqkAcpYDpbTWkP25f9AScydC3glCOJFHDy63TML9McWl2tqTWRRj%2BNDtv%2FjdHgsXH0b2bWJu4TOpnhv%2FMVI1ynEY4Z8HFtjQbSjrC%2B1xWWcsNucd%2FM5iP5HX0ftxK%2FSrOcLQWZyt95BI5nzZp9WwiWobLSULVWllUig8gY6X8nFNUeMIjzbwVA%2FpSkBmzwEhAcN5SbT66yjlaWpUlLBEH%2Bxjkn%2FyP9g&X-Amz-Signature=052b64810ea5bd3b3bf58837b972423a4408375836813fe26d89ade8132478ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
