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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKLBX5FL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICgWGtNKBzlogqF5TmTFlCuk2sVwY6zSbzoFxHx1dosUAiEAhPlkRQku189Kt2llxJOQvz8ElquQM91uGA25IwRb2R4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmXBlBhDipNTMHPzyrcA1H4g82B7yQTCFPn8HSHLxtWqs5Fpo5Cj2fZb6hEn8dPPnVVhZaSjdD%2F4zV0Gg7iLHf4ml9a2axEHTe9cVDq7pmNcYs%2BbcusOyNldAk4J3Fc5xx2BkzzTbyd%2FpYU6lDoDrer7Ky2SG6ngF%2BJAOYJssJpEjqhTuLdPX6KwISYy%2BmtAzfI%2BjUkso5qg33JXwflM%2FaD8lyKB3R3B4nwO6kRPT86itw2DkAvDIrv91suJOYWIA6qo%2BD2WbwIN0rWp20JPJrjgddHqKVn7tWJt3SmuQya%2BgFhaGV%2FYdzaDMyIECm6mj7UWgVqlqRcQHE6ZmIHLHY2BNmKYOFYbYGHw1k2QyGg2TTU0SGYvWc2CBw2hjdr%2BaIxbrEqtuWka14ac3nZmkDrNqKcchmXnTp6kOCb1i%2FDzRix4YUqCm%2Bc4%2B8pig%2FKlxRNWBVgMjhg5Y8j%2Bq%2Fm7zLKnuf9%2BNIbT0dWWHI%2FIJvYD%2BQUjktQQ7S4teh9gUjOAi8vIDAFl%2BXh0Y3nZfld5y%2FFuVWvBs3yEvN92GY3%2FC3o6gCOYybCKXzHXPXPyrIlkRi9ZhOZTwp0HoEJoBPZtatGFIrLZR%2B4FRru0s8x%2FK0owjBl3oOjmf5Y%2BWMlivA%2B9XYh6oUVj9q9qzaoMKSxwr4GOqUBvczFjFXWiRSJt5jDuTR6VqXH6VCYbqEAMxK4SWp0hgPAbZnaRQlai6nCcWe8m%2FJR8RcIzxtZBPPW7cIE8Me1ogoLZQG5vJrTbb56XpIs7SfLNpSVKtpg%2BPGFdwFhu3dc%2BQEzzywbvMCerhuJvty2VkrjnFZeKprZoW4eevbPz4tqLoAIdtcf3RI8Wfni%2FkERA8h5LjYKBSIrWLer%2FyIZJzsIk5MQ&X-Amz-Signature=32c5dbb665936c2ebad4de914004195636668d6f573f12338cc1606dcd836b4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
