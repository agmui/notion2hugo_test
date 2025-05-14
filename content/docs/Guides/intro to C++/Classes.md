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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W32DESN%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCriKbvxk6XtPM2wniiA38NkYdIPHeGDc%2FXILYlONbokQIhALZYAGTxdUsltZEFtUm9gK0xvLjWcNu6NK3gzkINdrpHKv8DCBcQABoMNjM3NDIzMTgzODA1IgyneyKHTGLJ6Vff0P8q3AOaAI4dCAaUgArEb2eHxnr8ICbQVremeqKueKBwusWIK8dx%2BZ3TB7D%2BpfNrhNo1UdH%2BRBJihelXhf7eNNAAIiiiJsYYUPwS1JUZFl9gG9kHHdp2mx902ySjO%2FlxPMrCk3IZD69rk4kfcy57CGsAPM72R9ZQyWrxTd35gDy2lEHLrA%2Bzw8ClPsHoapcl3fjEgptrI03MU7hSJr%2BQWnR52PJeHfiYPk5Cr7wJupC0WpEzdSn5HZ%2FmFv8%2FB8uGYIKG96ZLN24f%2F2fhg5p4t3Bxl86dIDi4eEmDGl0V1fr%2BcgJ3KSLjoeV8hhPedXPPRdGNfgGd%2BhE%2BCtbWvqPYC%2FfkUIcFT8YurSYgRDwrUs4qD6Zw9Ub6vX6wEyZtIX1WBPGolDdTdHkoSY99%2B6myWznWM2GLER4arh3EFCAh4QRdzRQuVhZwMZWB7Sfjugtr%2BXaeNNH48iYpvgXmJxUCxAYANmBNcuCXC%2FQpMWBn7wxzlK%2FBLRJ2AOa2XqnUs7GF6DIVS4vP0hV%2FjVxnCJ1nJMeRfQc3xSdBHoGPLiJ%2FjEUKN%2Fn3pQmZP1HRtPuw6hH91F5iq8QrxbdbePQggaMBX%2BlrMx8AOTJitG6QWVIsRN8Y5u2NQBKg7AsABfL2Yl72sjCWupLBBjqkAZVzUxIEHxU%2FN0%2BGlrymgCtsqwhYfC%2FL2SoW%2F%2BLXqNEpXzfiR%2F6UDfs0FQgeenKSLCFPJ%2BKZG%2BtDTjyLOrcwfzojlJznvTEryi4ydobN8cSEWOBmx3xqpaETjx7oUF%2Btaj4gWdgcC83Ux5260vheNd62fdXE4WWIxXZwtEPGDR0ovAEPsKjDiQ3kCEYohExdZMsiNsHCiRxiF6PhubviFzT5Ug%2FX&X-Amz-Signature=5753d18f49119b0b2a415ead08920d3d256befbdbc9872739757cc5650050d43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
