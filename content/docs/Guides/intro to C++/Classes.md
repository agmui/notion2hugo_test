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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YNAOEXY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCIxNzG8cQl9%2FaE5%2B1ThTN60uxCX2szvw%2BIqZ2N6ZFrtwIgdbbm9zf%2FO7%2BqSCHUCQnOLlC%2BPsEwqXA1ggoGhU0Okr4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6X3ye2wEOwZSCXByrcA%2Bdrd9pZ7Pi3qdk5M1HwwiJXzAWJNncNAZcHxYCwTsXtp1bZ0XZv43mP1PfFubrU9OL5g627iQcO822z7u2%2Byp0EW85aY0mn7NQptEgRTxG0cG67INpxrh%2F2e6vmuv73ydR%2BRrmziUoszeVldqrDA9NklpVUKjezvLzj8eCZg5Hm%2B%2FrZjlL1Ehao2W%2FCoX%2ByRENSvlLQTli%2FI9UAfPLrDQhmt%2FFgxK4mFl0SxV%2FnKElG0c%2FrF03s3U6icWTEwMCsbF5nOxsMxCEBr%2BDhRcZPcXS3pjlRkeLV2bK%2B25CSx8UarBQiko6T%2FRJqgWXdO2oWo77JGFTiXB80yxqtf8p8N5f4Q4auH8PcFTgNUdSGrgPojU5FcAwqXtWmfocVnw14de2p68krMpJ6ccVTrhSUz4ZCre6Dl%2BMOPpwAM71JbDRzk2zJDWmopsudnTxlfGDgEd6bS%2BcxWDqCab8x6L6qAW%2BU2wDheKWEZGxmWBsXmiflMOKzyu%2FLFGGOloptVlhE%2FoXIxRONdIC2WGHg6VzoVizXkOSjV4NdGB3GF%2B0c7Pe%2FdU2abGAAGecyGA89rubVL3ngKby6yNoON%2BUc2%2BU6YLnd3mi2FRix9U7NF8yzB%2B1RQKGhOVW4SKqsOBHdMP7dxb4GOqUB6AkRyzsf%2FDdNMXMPE5K6IbXYLsiRFObbHKNT9RCtaMSLB9p4kGmyDKRNdv8VyIozKCJ9FfjKlLMqAGYdPfGWCmEqshyGc4kGLhWw%2FQEPJhnR7OgwzrhUKexgbmpFOgfB1T0qXK0icIx4HzNzBdqKs3OL9KBfLuDbKdKeVgoUzQCOxNLcfe98%2F8FyaWE2%2FqyYXxtP1%2BfmVmu9CGLHbUj6x5YM7XPI&X-Amz-Signature=629d47a8d05fd80f6506425a0b3d3c75e261246e4a2d80277adf4b6f1c893548&X-Amz-SignedHeaders=host&x-id=GetObject)

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
