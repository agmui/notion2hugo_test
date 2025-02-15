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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHQPMB72%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDb5Y98Kepnjo8V3jHWzWq5As8sESUD%2BKiS%2BxngSr7qgwIhAI0ebGKyFak36sH6ClkIpeQmVKuAzJGml%2BjkbffDRRpVKv8DCD4QABoMNjM3NDIzMTgzODA1IgxJpDfPxvr8disLPc0q3AMO1cVGJHlkA80B2a8ACzhxZQImEWu6n2buYPjH7oU7JHFtq7h1ouoWnpmaVY8k%2B6hk%2BBn2aTImVWk22q8235TBS89DoZNJLsnCEusmaEmnngqfT5caiqMJKRbfh1dF5EMuTLUSwTv24E7BYfYvRZMIom5ZMv2PSkBRdqq2I2kh05H8KgKNNzcqR%2FgL2xL6B3Q%2FrC6FqK5wuGRClgbncXqYt1RhVlMjSehu8cpGkaNx6OPiAiyUWOj56%2BqmYsrrVc10iiPBdyZeKzRW%2BKRBpycWGURbfbRIGZsN9DwEshgVF%2Fi9x9PlQcZsvKQA3rVWHjT6ZyNvXEZPpa06VY5RBdSxj47vPLGkEyF5v77sVR2hpPVTTXW9mn1%2FJBszHQap%2FsYFi0yZ0Ti1vsXtBxeifBNRfjq4zFXyjJzng9KSfrHrlP5qdDeV2WyUeX2W7QF0umVDKtB2wE9eSxMQG40fA2r6YFM7d5SeZ9HsEt7v1y4Fynotw3GHIWY%2BJdlBTurEv8B2ljXzgex6drSSUzaIFCZM3doJ8ZeS4vPAbgwrSsx06qO8j2RJ9AlCSPlr5kMGUB94J89TIAdyDPjnFniV0uLQYvJFbzBpgra8V8MT7KskXUfseK%2FIYfDy1b5hdzDBscC9BjqkAWoNRoHxrvl1dxKlE0Btt%2F%2BbdQEPPQTUFz4qgUnY8poN8HnlHRtEl%2FNx3nQN7ShTsFYut9gIKZ%2FgqCihZGgiJmQp1VdMzObzvHsMWt8TjKOqY8g9NGEANvX85fDd20OL%2BjIEa8Md703CCscEu3e5IHX%2F2MvTVrAzOp%2B6reUnQIQUsdEfBz3lKXFAY8Asbcosyoc04WwkqiQLBdMp7qeEn0wskpL%2F&X-Amz-Signature=060a0d402d657cb071396c9d115ce08b37cecce696e71e52ab403761f9d07d08&X-Amz-SignedHeaders=host&x-id=GetObject)

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
