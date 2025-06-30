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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIUG2QMY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgSMR4EOBO2q7%2FJnbVlugVL3p77NSpej4pchiUGmbifwIhAKXQyd6PEeFsTfNLA1h79rAsyEdxG1GizTO3ParWTA%2BSKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSZrFNzxsA949Bz6Iq3ANxbE46PLldSg7ZzvZuLCgaZVoIcC7PteJYURE8YI38KT33H7EI0Y0K7tCvs1yV5cN9eznncITM1J2zUD9R65qQ9gnmp%2F9MQFKIaMQEHcHLh9QgFO%2Fcr5wLRc9yXoVFxR3fSlBadbhKhNyyDpfPsKPyYOznrPqEAKyLVAu0FuTFW5GnORv6JAWImvQxbiVv9HolgnLzO%2Bd9JaYtlIWnKTDasu%2FUs%2BV6CM52vq7ih%2FJY76%2BakYXpQUJV9Jo6y7QU0YStiL%2BzZDdDDt78RnaZwsSmAaU69C%2F%2BWU1OogjhbBy32WkJNZyrAqRje8xK3cnH6lm8feBIdub3psSk%2Bt41FSxvAD7dR%2B%2Fgyok8IH0zm6tQNcs2%2BExCXiw1fGpkOP32wQK91nAM3EogV2AC6tpgMjG0BZO6Mhb8eyO1dR9lBhttki7fSfcvDSvvdPsoNQZBnZncj5q4Wbgbyyrtq8sjMbd8%2B4xx67neFE%2BgMmFRxXTlAFYY4%2FMzhT499rozn0ffsHTpnf8lgAnSz15LQruVP6Xr6dRQhGLz5NWlai1%2BzU43toVYO4DPMVdqoShHmeii%2FsK%2BZ0F2fZJFfjvC%2B4o8rx3PMyJd7%2FanYNzb1BJXtp578iWdirzPhEroQtZCCDDGhIrDBjqkAcul2mOMpQphHeRyhUai76LLTa7MQXnkgNRvMgjLzDtrYqEGHy0st3MqWbU2PhJJCXyIfk8TlZrWB38eacivDhSEXZSrhVURSf7c9O4MYScZWoDUpKYQXSPWVzlc3Gpenw2AlIuzTqJ3i0pxpzw%2FuYcReAlXkXM1aHASlBab280l%2BZlkjZx2YV8MTeiLXW8wln3K7UhlMkmHrPXYGtu1sxik55En&X-Amz-Signature=2f25332da807b043f0136da0d70c45d0e1d8164895c16daeb918aa11d3188174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
