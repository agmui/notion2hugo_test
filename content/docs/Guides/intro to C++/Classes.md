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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNYNC2HV%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpMN7NldG0OUGmw%2BKGckbtYIPLldxsmvBbGkSuE2lCzAiEAhMG1C%2BGRqlut%2FWelvk%2FmmaVOUX4SNdHpgsTnrbLkA88q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAgm7ukFFRHTJELEjyrcA4ayQtEnZlJTqrvytXNdS3yhQQxLMtAQPYKnJaDvLjZfK7WfIzKbPp0xi3MMOwQqpstO11TMzCVNvkivXjQ0c019gd3B4ZuzFr8Y7aFQ%2B9y4bkxT%2BYJikkL8lNiAbHHNlDkKyHPUPPfPZK%2BX2XyFc%2BDfd1huEnxzVfe58AK1Dib4k6nxpCvbhcEGt1AEJY7fOIWu83xZQrgxABilxsjJb7iBXoAo%2Fk4hwW95lD0yRd2LigoGXR0I2baALwa4B6DGOWhoolBdayOCLF28Jynv02dMkZRWfezCbZGwWpejXVu0RmDc2LoEesmwdvaQCIBjHnzdXGGw0jXnOQ%2FVdI7JXki2rd6ny3qaPR0tYV1CssADGdVTDXLTE53qyUPGlZSfJ9bYE2gb65OpJoCCxA%2Bnhi4QejqAKjHM0SXv9UOwrfZVoYYGEswJVtpQtLGyVCPqmSRske%2B6p%2F3wodIwn2rI51N085C%2BeY%2BnivFlfhE0ztxrU5Kea67QM63JbFaEAJySIg7CW5CrjIje1DxWruDseOqEEijomTmskh%2FC1V3Sz4In8L1W1r%2FcZvO2tdbyNxsu4J18yAXdo0yD13aELFzaV%2BchK4gw6QIynXcEXe4o0%2FNO97Ppd7pIxf%2BFPLBzML7Cxr8GOqUBNCmslX3TNcyQ%2FewGt1EXeAZ3IbF5ebClPQN1nYbU5UB3y6ZrJm2%2Fnik9AAWCBpDoj3WEyscl4X7OXNvnS6pDQ6wlETKYM6%2BsupAeEK5LC3gUJNQZK8G%2FhIzUhZ1C8jMF9%2BwI%2FZ3taYQaLM7a9q9Cw2%2BI%2FidePs87J01u4t%2Fzx%2BaEFeD0TN82umjZegAZTiaMGM%2BCwvCl8lbDK5hoN7Dmd1tz%2Fb%2FR&X-Amz-Signature=969a8646b36f0496b822210509a5db7f6b1bd44c550362cdfd36656851f17c26&X-Amz-SignedHeaders=host&x-id=GetObject)

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
