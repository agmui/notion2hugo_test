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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQGHJ2FX%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGsKWKJ1232VLcBEBWTpu1mFP9b093sGn34DpBML8VkwIgEsfn45ftv8bJ85SbJxFKSRKNuhuvKPko7Agab%2FRHVZIqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0BVt7jeyAKkMhUnyrcAzAawWwwFjLV2wo9WQwYd3ebrlt2iYo9wchUIcLUZzkU9h59waTLNh3bCJOkW8hHlZ6l0IjAk%2Fy8IfYE6f8yQquHLmyr9j0uPrtoX94WIOGr5ICPtaBFVPNqi4ej%2BwG6AqdvOunRgS8%2Bf5Z20M%2BKqJ%2BAMK2u4y5A18dAj9%2FFHbVCgru71bIUjA8EE9d3wgiRKfAr2pEjr4d9iq5f24%2FzSREeUyRa5%2BcvV34Haj29sNyg3Fdor%2FeeC7%2BJMSH35iwXBs6eKP0UQ7h1fxD%2F6rCEphzlGPC2wqu1fK2oLgHCgbigHM77EZgJSX%2BVVlS30%2FLHJNqKMbW3VvmUF7JHnZsBS0vKL3azjYSsSwdqfvbZdd4%2FSRCoazmd9mqUCl%2FGVwBMyVRsLzZvZigxGViaCkB7IcaHEme7tCaTweyoVnfICYJ6mHPyJY878QrtDAj04WvxqQggIjw3aNNOmblAODVkpqt0Qod8J%2BFENzING8WHJ5PstxHmlf2Q4gVMu76cu5FLFM%2BMsUe1ngMM65sASzqI1QDX%2BPTvetTxSn07qGeNO29f4B4vatJNU57qX%2BVVc9XAOAUU%2BSS2bXs4p1FsVlbo9WPhXOeCbVDZAFNnXVsT2wsFgDTgsuhxoZaXM13hMP%2BPpL0GOqUBirktff6qBWLCxnPS5djj0QglXlPlhoYIIS1sIMnPC9e03xowq%2FBaaY30yAUoDs%2FRdoetvVO%2FvRx7rLOvRjYBpNNrS4G7hSMuXiiMJF2eKfNsai29Scur6%2FsXnZoPxp5XJcf3Lo38pUIuCoLMfigkA27SFmOON7QVOw3qu3Cw1vGqGjlN13pqGD%2BwoLjGXTtxIukyQi9evbNjK2Wk7xreKWpKkB6w&X-Amz-Signature=46a4136b71ea42bf5050793c8dcec5c8e8708ab7355a74006bd27ab631d2fec6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
