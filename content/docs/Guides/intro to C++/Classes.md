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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NZXLGY%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIGFzLHvNDxDJx99MicOG6AT6o1mu0y6JMKrg7qvsDSGzAiEA8gEzPRwcyLiT9Mmkb9V5m93jTS16uS4WOSPPggwCQGAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKT2F12fh4UZc86NFyrcA5JZilkDzvUp6hlEzqorxDYLVDF%2FaMlBMC6Us8vUcTROkYqCXtUym%2BPBSR8bMy8USxgoIL6n07GxaW%2BZxcRXYK%2BljxeAmd6WjJNh4eO4vnkng%2BKwSV3R9WifsrCKB7XJA8zpzgfHAbbMJm5oUIuf56Ey%2BWeO2YkcH3thsHXAyRIutzH4lSW1JZQ55XaPo1wPzt%2BOoV9vl71U0Y4S3L6Ca6cP4FAENxqOsC3hNa4o%2BZlopyXUZW2oA8PDaS2QkSfrTqxkjAHwT2QjzVl0qvZbgXZk8Rg5K1fQPitl63ZH%2BhDj7pKAOYWtk6sOjb3YxZqQW8adsPs5B4OS6lrHdb8kDUmojcNoVq9IYeaxOHApxmXRay%2BWFz2uXVqmDZQCyY1sqiw4CbxnK3WpaamLHx6JzVJ8d6yZXlC%2FHa9sehfDvF3iCmJcz81CGa5kyGixME0cBVUENZ3RZ6ZOE2IvEAXBvGYli4BVqbAFf8I62CJlRPjVimmsHG%2Fj%2FOP7c4ojSZYfED4D298niPgDwDCPEDgLqpBhez131D7GEKGsi0SUdeoa6D%2BbtXOk%2FAoUJOrQmp4Mi3wm%2BocXf8RdDIgn0KULPMY32q89GYlecubtT1234pNdtQxYJGIIHPm9h%2Fd7MLix4L8GOqUBdSdUBJpmSXAgAUZWw62jltQT2rtm51HGuGU4plNaJ4gwcvyEsHAccdYfQnAsM9f4NZpE1XLHROW9PGiDKpy761b1crNJ1u0WtCYz1OKqXWqk7tO%2F3A4J2nod6nBidZZFFDxmqtD3Nd8%2BqzpiPhqrjEtoTSAUuQkQxWSBdoR5dumheQB2U9YFLXsl0tqzkG8IW%2B0jNbSeV6t0BB7ol%2BG8pnaz%2BiIa&X-Amz-Signature=5112e5ccb3944b4624333c2a4827a25b66f5edaa445f2fce6d8285ed716b1f22&X-Amz-SignedHeaders=host&x-id=GetObject)

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
