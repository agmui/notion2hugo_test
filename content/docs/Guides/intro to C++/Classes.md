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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635F4CRSX%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCLhq83FYoIcaLnhLed4lLApOQaEE68flyie0j%2FP1mhZwIhAOAvaZodc4jVYnRRSM8Mk0sdtO3QrTtGvJyXcrAjaVGzKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSfQ4dnUerE5joblAq3ANzpucyxOFzVPzOTiIy3FB%2BrUPrtG06l2jpXiMOPbiQYamiha9nl%2FwKTmNOCLGgcd0by8jKc76NYRbarIZ0vdYCenu5MDfy91WZ7pnipWUhNTYATHZ0wrIhnpOv395c%2FfFb9aO8TwBKBsMHMnI3MAZW%2FVtn9c41JZd2%2BrV7wVpGWMpDTxy%2FMTgT67FJpAX4MffscSHdNgk59E9y7vfhPvdG4OsA9FXN1OL5TI7EuzKQbMf5Bxqyuwv1iap7thO0YCf0M61r%2BhXhMibDV7Wh4bQ7q%2F%2Fi%2F1m6%2FQXTHhbGsavdxepbNxGcw5uPKtOPBH7Yaa7KpmT0LrOqXFnk%2B4iFfJgB2cb02d8fB4vAUOIOHD6Dm0t8hxLffmrSn4HTjsdCtMWDSfQBHoaSxwlPj4SyF2HdRENpsfSBSMZpvNmaS9dYNbTkAzOSc7N01CPphzY6SiLOm7TkrtkWW6LtV5oOkGxQs4ETYftHqgDwHdRb7maFrmXT8fM4PSOXOzyU8yOc2oY3zyozR0fGvijwI8r2ZY0%2BUfEhEsEEGC7Fp9N1knfuYY0bttpdCo49CuQdPhZvznOBp6FOpKwgnpw%2BkxZXKpsNq4DfO14Ge0GZaxUXuX5qbagWEs1kpzF4xjgCRDCOk4a%2BBjqkAUUIMnbjmYvqIgKA0iadiYs%2F%2FixJNp%2BzodqcBOoi6aFjWDmCjVrRLJ3RCD95QtpJYvis52CBSqpE2vC%2BSR5SwRQyOWB4DF1un1iVIismkjqNu8v7sjj7FcSKHXlinSvRyTtknYvnLDwoZJo07AmnGZI6HZsb1EWMvIPGjuqe9lE9xyCNK4p4e96fRYHEYpw5R5g5LOk3XZ8WzlJs7Y6Tj7o%2Fi2DI&X-Amz-Signature=24a0e659f5af4706d250a9a9b3fd94b7e503e6623d121e150e8b0d5a66ff56b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
