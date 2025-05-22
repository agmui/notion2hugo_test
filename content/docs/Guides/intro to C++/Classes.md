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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMIWXPVN%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCcNK9ch1PJZQRH6qfMBNmVRmz8fKrP2qXFTdQk5lmGfwIhAJAlJ7aEYTdBDUH04%2F%2BAVAJg7XPjvrK%2BUyVGUZpEQoVxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyuwp03yJR6Fi31u4sq3ANW6IEBDQ%2B8%2BeEDx7LosraJ7iXzRi0Og8ASU%2FV27KAAOXcUbQnfEH8uwCMb2BCXvmqFKdrmjp8RjbtT2J9r0OI4SKxLgtnqUydiXMensMgesY%2FmcKXbjbHyrotncsBOYF2oXrc%2BxQLJXAUS8A%2BqTTPB%2B8%2BWULflJliKvFeS78YLiRPqOb1uuByfB%2BEoZGFu5XvvT7CbvYGKkJR70LmPBEBjjp48VrpS5kpI5mftEsqt5BTDETsnFpLwSwJ0cPV1umTJCPsWzYofhkjzxhY8%2FRV%2BxUopd4psS86z4zloGwZaiDN0KcjB8QTAPpzNgF%2FNYvKKLN93gdjlG7XmSztfCm7u1B5qP2TH2ZKU2xowRAsQu5gELiRFpDihF6d0mXT%2FLGhs9yzohcEEKng5hW7Vy0DWkI7Q2J0qsNrgIlEeiaCh7l9xY3U98ew0XUpA0zJRlfqRR%2BbrvPmDeiX1G2MqAnpwBcCMiqbg%2F6u8rphr8oAsB7VWNXGmhqUg71xkwgtUHzQY2qW%2FgjhXXy%2Fr5DLd%2B6lNhYONlcJB42fD7MB0kkVfWNa445PZXwHXS%2FXLImxKyTQyswazLZo%2FZtyLVCLyO%2Fj%2F4xW0ptW59NjhfifsuXJgEbXvazzdDbvWv8tOYDC5krzBBjqkAWLwPKzz%2BKAwzPK%2BRFltx%2BtrENAt9x8PfVjEMhjfn5I%2FHHU3jGCp5gwMLckf94l0jrf8Oy1lcs%2FHGZN8ftAehPwSqCnRJ05yhssQZYQ84V3OC3jpmcdgleRCz57DK3VWpBwTben70BE%2BfpY%2BzUuB%2FeLL1dcfT3MiKoVa146yP8OF%2BTL9A7%2BmXTVLvZyb4Fu1qUmzg6bJ0jsQP3orJtXAKurH2CgX&X-Amz-Signature=67264cf8840048d4bf8e5a8c4716b29dae121d7fdd081bc18a0e0bc07514d1dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
