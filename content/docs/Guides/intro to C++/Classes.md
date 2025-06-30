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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHSUV2D6%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B8Q1wqlwY42tTeAaWpT4HIU4niloIZ1eLtUYHfzXLkgIgDWIqUfphREic%2BsKMAGDVnEYKeq1vBtNiOY7OIxdYU0gqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtjDxCT6G57bjqrLSrcA5Qc0mwq9z%2BKdRnOP4FQ7o4ikwqR322h%2FUPKa1RvGM2YDyWVykZ6c4ioF0DuY1hMsc9iZfsvFdUhrcou7IZp3FTa3fK%2Fp%2BkPmUbo4u2lrRR9QpM2iHGHIZdiiquaOjOjG6%2BnACNygS7LtJIreROfiwnkgix9Ce2Kdbpu3avaY6T5FfQfsw%2B%2FvT3fEhTtBD0gLxxk8AWsz2FtRPEecNO1awc9%2B0vztLLkJjcighFJlOdLxT4d1x8BhXeSrBAwcrMhbtGqGAlKV3xRtWll75iVmiijQ1HLal8JAcs3qMQVM87Rkln6bbMwICO%2FKXOUGYQCYAhqljaM4wbWI4l94lxXXOafcSmzF1PkP84jdcnPD74NRYEWcnRHAkuI%2FL8Y2z05K9mgt5EN3KcXWX0YYo5wRmMGkl%2BzamY2nk3%2F%2BxVoxMUUBYdPKYPWV5IuGEOEzs8BUnZxyYY%2Ba1mck9nJFLpg2IhjktPqQrMuk81o6ZiauOO%2FVOU5pzCwLEu1ZlM8t6I9AHLuQ81TC469TiFlK54fAlhClOBMJgA%2FO5fb4YK1k9JLDWrz2i3HHUwNT8026HaCX%2BXJbyGCR8eUWgnqvDfxlF6tiQeJfGLmzjhcp5NbZ%2BVmnrTDtUIHlXJJSY1pML%2F0iMMGOqUBSwsbLcgprdcWSkBBt5iakMsU5KtsqzENuXyo6AXQ0dH3KegUzjiG9DadXnNOKnjKnXwm9PgcG7NbktCpBtOYGEKo65J%2Bi5DNdyOcFtS9of68XTbpkaVPW7%2FO84bdf%2FiURSGYIlhW6CGc8KfcJo%2BB6TSnoRSrFUtPLFH3TmX11kgo5f5Oc5dP%2FnKVwEj3JHO%2FolFB1fb0M33ygvBC16cIMBF%2FQhaw&X-Amz-Signature=a84a6cfc4df89e7c8e836830095d96fcdf6f9fe85de56c569e75ab6884a5fb65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
