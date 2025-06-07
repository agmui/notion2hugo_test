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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3RVT7TO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwPRtGdPqz8wol5gzSIJGXuNXkOeZqSrZfILU2d%2Bg0hgIhAIG%2BJUJtX4hVS50qYhUFb%2ByOCWXjNdh%2FfuuAhpeFCBmeKv8DCHcQABoMNjM3NDIzMTgzODA1IgzK%2BUBkENEo6GNRVjoq3AMKclIuB76%2Bn59ZtgD2Y5FT7FBsKIvMCRps0Jhhh5HJ0q%2FUYhWJ50Y2WZMQxrfb4zjWj9%2B%2FJRMERpL3hleCE6b8yZ3mlEggBBZgexK3ABKqTRmLpePuToJRLCEov3inh7p5jbP8obuXM6hsnUR8uxsrsK0rC4lDjN6yC2WwBoDT657WFgwWVV1YVTqGo5owUQV4tGMbKChni5oJ0PDy1DAT7X5XYvi5Qvx3WfnE1PzPXUBhQ7WSb8kUFLivSYHugFauCrr9GhII%2B76sa%2FM7D3X1sIQAwIXth%2B0QVQnYanKLDcXmb7Yo9S9zRnl%2Bts3iCQutxTEyqIvjF1vPtZSh3bmNMeWeYcI6SUvzIrFqagqP0dPwcuLPgbq6PbQBC8x6IZpZdJOinFlEHwKzFhHpqLc9z80KLwDEGsp0oO9wA7Akg1nc5VLeddwZQkm8gZfnZ6FzdbxtwGI6Jgk65g%2Fiehcr2cFYTLevaeLcfKJ4Cf1VxhFArqjsFJIbwQK0PlFo%2BaebhPSME6vYUCABaUazrdtvySy%2B%2BhAB8t6X2dXr3VDstWzRCM%2B4wkl23dRgJhxFOYiDk2WGI6VgkZO%2FUw7fofe%2FUasYkv8IR56BG9BJZtG%2FzkbqaIj7FerjaY90cDChgZHCBjqkAV7SV0vs5mLzDPsWgXhEGER7ZCuXn2ZWUXc%2BZXkS51l6Tgg1Qmgn8O2lTb7sSum6ce%2Fn7Vg%2FsqW7ZUVQ4p5v8%2FCo3z%2FZweMOhj3Q%2BM9kPfZBnuwkdEFnQxncLDZArN0LIVr2j%2FV%2BP2eMP56%2B1qHp4La5XHGZJxU%2BrpSkCk4zTz0huWWjZ5NWNMyTNc2MlOAHF0BS1BFpE1HFpdvRdWtDIqkUOn%2BO&X-Amz-Signature=7b475f379201254bea1091e84bea622f203856a0b923a3704f0d2e2c388c79c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
