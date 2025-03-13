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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKBPAAZC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bu%2BfSqH8kzmc0QkETRsfSUEpwGwethoJLXIXT1yLmLAIhAMVz%2Fx3FNcfRfpNRuUnzMqPMzlh2CQnePtpEuNiopLkoKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzriGh5bpwifL4mj8q3ANiMeOuKIQbamYfC4mbp9fqeSqLcc2BOZXjPqMWfr6AQZf190cemtS3ymcmQ4Ukgtx5qMYg8kV%2FsC6NSsf2Y7V2C8uKuPlib0IJGV62qso63ctTG3QnwZ6jDUmHCPJj8uGA3N7pn1zZ2xN%2BhS1xuBY%2FRGj%2BufLEwkgNTA2x5hjioJ2d%2BZ6FFB%2F7TVEw0EuHh0%2BNnBLHhIGpag14cLc96Qr3N8WXc4iShhWry7CXeZImG%2F086y3aX4X6wBjXX6b8AbZdpXs3ue0dZ2Gf7IE66sb4jMsXr%2FxSvBXL61eK%2FgF8%2BWWbFS9zzXQQEaXmx6EZdp6s66rcK4doljZF5PfTCmIxZkQHZTfHOhYe8uS%2BWpntges6bbtLL6vWdd93MV9MyCZoE4%2FSFqv%2FNRcxdLA2Q97l0CrAt8LmJ%2FYpC8yXk%2FZE%2F00nViSi%2FDdeXBBlq0Q3hsTmZWwgH2f0KfdTVSIvqKltlXovfnd4XFqxlKsHua42htwcSZhA61WFnRhO7nQKYAcDkbvilKh8QVdMNEDEf48LDo3v2mJEP%2FMGqBjKpxS6rcIr6gMB1pGKYmZPVmoK8j6jPcYY%2BK6dCjhIVE9lgPWUWRpAtrkWD6HLnZgMFIxYl4ycwJcDTQ96QWHg%2BzDao8q%2BBjqkAc7Yd0CpS0x%2Fh9gGG6wpz78Fv8Ti2mEAdH9qnCl06j8YRTLu0mSk%2B%2FEVCvNPX7t0l3SPdJG%2BtWIYzF9LxrXaddg6Ot4khT7fUslUCi3IuHsIff7Q6SphxtrhNqv%2FZkz0UbGMRcj9%2BzBsWhnmgab2OOPM3cNivbwWWeGFa90EXcBsBEkjtJovfFa0OeaguTdpaLSvrrQl%2BTMb4Gv0g62dSr3qxbOd&X-Amz-Signature=acd0e6e6a7c01b2407d4871f8c23360c4499d398cc480941355826a39a5eef74&X-Amz-SignedHeaders=host&x-id=GetObject)

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
