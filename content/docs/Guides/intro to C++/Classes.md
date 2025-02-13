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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCFY3OO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9hG%2B%2FloqhHdyn6HZ7uTv1JOn%2FxjLwj8oDmob3znI7tAiEAxf7VfuctJP3e0cOCgBvncFC4OwD3ao7QuzzsmdswFuwq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDB6MAXWlSHDC5KSn6CrcA1jtqUploA3h7BX108o1crEYbX6%2BeTys9i8L976WYMZiddk6JCHeQSJ5l%2B4ibPdfCMa7BBOzeBg%2BCxWtWT9LewthrIY2NEm0StBZ%2FStCeI6h7FwATt45htirP2AIWxZY36rAbKwAT0Qw4W%2FG7UxBA6QXpuQsTj1nhZNyAfhTJ5oCccRj2xYN5TxxUqfPZ1WSLEH7TqQrtRHzGl%2FJXpfMx4%2F%2BJx9MR8h6qHC%2BcT4hNc5FlonRIvA7%2FH9sbsTc3yDvMIxTE1nXWcqIBItatppMoYsTS1eNVArgGZWDv2mOMExHhf%2Few1wg3eNP5oJU42u9%2FZhg3derLSjg1kDTiIGH5dGjFW8nDE3rS4yTK8ib19zriPvRam%2F%2BBzKFOQgssQ5nAjM2zQtepKbnC68HGgzDt70%2F2b5WylAysEamhchbJqXnQDNo9y252Z9fgDFUeRRpDqOUpWqKnyDG4L0uDFQNi1DazSq5IrqK%2FeUpI4hG7R2GfEesAF%2Bv%2FWtWM0lWOkLt9gR%2Bt1Z2yJ8y4TtERBJ4xONgzULmUZaSAbpL4laHB1pYA9d%2FJ9LIrSLe0Mjmkqox5KnlE8wLERRuA8XOtRYP43X9vWIfjOsfW1rY2hW6nPnqpBdF8IR9%2FcfX5S2pMILaub0GOqUBoyxQCaKdNzbfbahKENwUCSfzM1mjEj8fPKprG1x3ewzHYXz89Ep6n7NL6ITFvwd8FBOqzd03fGo163ssLl3yu0FipSDqUxoXrEbmt%2B8RTr8FtQsUrZEbeNDv3J1KKLnF%2B3rmdNvQ4IzGhGJ4ZJiQK8kNvE3ithIlUzPQBpfRL45vjXAyATPF606qkY6iuCMPIPgR46czkyTzIWcHTNTOHIVZqA3T&X-Amz-Signature=366fe4ce86ee954f31b9d0d7bae4d51c3af1c72a39510395c40baa6ba6f2638f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
