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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHRVE6R%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoZk5TjEcAKMMD3NTl8HBHD5J0cy4tjQPYhYC8t70OBAiA2ndnvOkLOAxlnBXWlMWUr1LMG2S9w4%2B%2B8i2vGLkt8XyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2F%2BEDfA8k2Id9GlXKtwDcUEKt1aLdxbKIlwXMINnHGWPGSxlCOsvUN1m0kW9rWdIWANGY6s%2Fp0JPCdo%2BS8s7G3YB%2FfBykjnHW1r1Vl2zfHK1TkV1mu6j8hOkzqCD8zPgO8gnTzkTBmzXZe2eFRPN2aEG6FGx7XmtUbP2qQgbEuDlLHkp6G9h9XeM6VG6ZBEmqChtVkNHkkDVuBfb522fZT6XwzbrCcYxRh19Xbe3aing3HXKdlVtEnZOu%2FoguP5hbCz0RjrtoEGmdja0eUQx4LIeU1EsoL%2B0G0tDGCh5bCcAMnMZgI%2Fq%2FJ%2B%2BM24rxyHOHMSyPeIrVz%2FL1ZSnwlWQEVGF0lM%2FESM9yDhMY2oE8zoO2sWWYaMZpQMJX5LyF1sVZPRh%2BddxBFUmF3KMp2pYkoGWCiy%2BUpi4VIzV77okGhmwLPy0r2LPlevTQpy8c5tUmX1nOyI8hGMpipm7JvUaJu56VloPQaPTV1SNrlucrLiYaq9lGkGvHvEpv4BfO89dBcBcUcGAwsAv9hSiruYdydmccIR042vDegvF97YcMS2Fh2fVzimnqmtjhYUl1BFKKQxSrfxWuxhZutfF6z5oqd5GqDGqlVJL2sVSD746iITtxwzN3pMowP6%2F6rjEIXvZNc%2F0OQ9EZ21XggQworS2wwY6pgFLK9lgiBxqv9wtZ2w5Rv3r9Qnzfz5pyijpgvAOK2xYNpwnG7mZfS7XjUCHZY8xXm4%2FV5u2UEiPjfK64vq0kG32sjYA9nyUSjf3DWqSQmfKfNtZx2DYS0NY6DZtkQbWOD3Z%2FTG3O49i7zwIL6of82sbTgVCR3bVnFIerWNDPX93bxlzpZjm8bhr15q7SIPVR8urIQa1PpFh%2FyGFE3ebNM5rRMF8t19X&X-Amz-Signature=93269522b33ebd38faeb47b7ae0254573f3629262edbec34733428903f553a1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
