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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZE2RH6D%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BixaFOjYhHRZ92OWGsrA%2BW%2F%2B3YODn7bP6EQ64i8J6PwIhAJXrioHvvAeJxoQDtSqW1LKQ89XijtuBOKXWLGoKPBlNKv8DCFsQABoMNjM3NDIzMTgzODA1IgzvhtGrkNH8JxkPtxwq3APjWdobBgy276lqg%2FX82bM5sHeeqtxjyy0K1tu81kxqNBWZw3TXcnOHV8JAku2xz6Ic8LomiMGJH9MsF0tMJNXKNura44Qhq9UtxLAlNBAikWJa8cxxypUIqrD4%2FtTpM18BLKZEG6CYOI7NL%2BuXeRdv6qwW5c2PVn4jKL5F72nEbkZhCBPDhSwJx8nwzLv%2Fc274%2FTIT947SqSHIcr3SeJ7LLiRwROhBKAkZNhUs7JeAJGbjFBe6tFfeT3EfIvcMhzRGt7KtN%2FAobeWn5zeAUekMKutg5IrsGuqKn%2BPuHa2X60rzBHFtxkiI4kkH5BIk2Kw7t6tQ%2FsguFOBtmnxyXgxOeSkN4JS5rBVwlMmlQ88%2FFZwSUK8ng8b%2B%2ByeafkzJOnmyGnUe5YFdP8CJR9YRRL3u6MuqM8%2FqbXWUZd8rqx6ZndsXnBIxsSviLkakWNANOf%2BvYW%2FKlpcNpkfSmsbtm1GqH4i%2BghfPK8PsGutK8o9ZYODM4ezWj%2FV7YugpNdMYvaC0gPGEHZnFGe6mMRxD3gBu0RNecV2H2KCt8ElQLpPtpdZEuKI1uWl2aXq6PaRRvHvCXFlOp4ggWk1W1ydtcqIS8N2SOnZDrU8JcTGWsW%2BQC6kJdCXTojOc%2F4UHTzD7i7jABjqkAbbQTRhQc1q6yvV4ZYMLKVCxPRNno8V3ZLRKo8KviCUl4876LKBNtotgpW2s6uV6yWrLZX529hvQRtwIGk147IWCXDTKhqeNlZqEayJ%2BTUVljO6aoObwUEd8L4F%2BocTb%2BVhlxyS9ksAx6zUE0aF9t1jVsp7PebFhlu3WiRAbudgqyVrMLgFLWd82v2D7Hq4lYfP7fn5%2Fd4hC60gkSziE2kc0wzD%2B&X-Amz-Signature=0ca1df9f02550ddb1dd3945bd87d9fdda60073785916b3047e0ac0b0a25d07b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
