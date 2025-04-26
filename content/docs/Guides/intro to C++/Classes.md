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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH4YTSGH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHsByJpskfbmY54EffbYTgBmU4GBrthxrr%2FDoQSDhZwgIhAOvLC%2FMwUIzUkIvU24pETY2vzy738SUf8uKDsy5pR2SGKv8DCEgQABoMNjM3NDIzMTgzODA1Igx3MXR%2BLDFSQQzYcdwq3AMUsFa4seWIrBYIeGqs%2Fn7tvUcDxfiYv4zYnAo%2FtWvatsmf8Zg7pBLPFyXFY7TZ3McfL4mGU5rCykPUhW%2FkJNylUzKOCakitNl6snaDbTzcqXCGnPzLur0LfCxB9nqmooF00DtiJEZ25FNVeL%2B5C5%2FDqh9SmSgmBjADwZ0F0p1kZXICNxTmjeAGrHDxrTEPTV390Lov%2BEsG4c3UI4jTPxGfvOxbdSKberxoHuVowCl1OETDP%2FqLGuP9b8mEVN79fCjN%2FZBi0fIhhZ0tz3ERHcsMfdGXHi9mQDWvlg3DG0kRZ8cmyk%2FvoQZaG1ed%2BGjsCLzyzHCPwR7irPPZwtc7QwI1p%2FhzDAiy5veT%2FEcOSYwqb9ghGmFkQUFqngMtCpEMvrL3dFDgaZOwBHjX%2B4ACInLOMo%2Fj5BKyLlW2qmltfnIunR%2BpnpKCtePNdnasJBE7zDDaw%2FZ7%2FeYQcwF1XgdNAICyBVGk8FosN6EwwEdvbIAgUJb%2FTpEMXd2yuJ9SQHqfDZy9j3X%2FUN%2FBNWuwrTB9pcV96att94nOYqlZscHReXcm1I1PMoIkIZidmSkV8BlpqSpGdQFL8YOAQVzCAVFNKFkVnyN6SgVcD5Ide5en68gcRnE6lM5jcRkQlkILtjD35rPABjqkAYA7FLsLieFH9%2FQvKZ6SM5d1w012hhIukcDWf66UbNBTDxpdGBNjCZJHDcO0yV0P3xfTnS0klVDOLsHiX2PX%2BprNG3%2FAhz8aK8V3OS8uoxLRlhp8JSPLE632wMoVfwZFd16uDQPqU7qmyjeT8zwxuQ%2FtHcwE%2B%2BxEXccuEp4j%2BwZOm6IzVwO9AZSx2Q8KCfjlQVyj2MhT7%2BC6V97Cb0frs17wQEo4&X-Amz-Signature=139681d6e219d2da787b74fc8c5adb5d8e9540aadd09a52499a4bd33479046fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
