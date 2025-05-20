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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USXM63XZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUnRs1A%2BuC3Et7R%2BrnxKJVnWQUWI8357LPizQJTnRxAAiEA6zVVXTkA8q0zQtGmCoy%2BFMmT4w77joHMPsZQ432qriUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPFsPIS1NvU7Dek3SrcA%2BU9eCOC9GcoZjyfxpSLEbS1nu7AT6g2ynBp23hvPg9Cn1PYi0Hye0XToHg1WLvpLaBIdCNm%2FA%2BiEgRLLvvlngEJ9Itb5CCFTAxmH%2FyJyQS%2BG4qQjYx%2Fr1aheayjOo51yzv60U2wl%2B%2F66o8siINl3t8XBKM2jKbge%2BuiN2nHegkC0iyFOZru9PSQ9qA0RhUEeB5j1heIPxayO343vdzmY%2BKKLL1hJzWZd70QjaY97pfbQHTdOc4Wof%2FfaUP7v6dKgvJztxuRrd6916hJ4kBFSQwZnxGFlWiTgOy%2FLGEtn%2BLLZZxwnE6crfkDEoOBAB9%2FLWPGr8f6poGggBDc3mbnDwsIhc3EGrLkFhAwDZKiMimpf%2BySGxIMv5AasczNFeqmvJdyzVHB4WX6n9828eqpa5O2ED2tjVIeyysdMMmkED4XowLwDl6kAiKV1Tjw3xdM4PDABry0C9bJ0MmDtoBwH7XP8flw5PPYz9ozT1%2BwpQr92mIThZSZy64kKCT6PuMdTPlh7MMmWiXGG7%2FV9eauvJKpS5XK85FdAyqjrJ0GrF88ugsqewVCJYp7fnEWEHRV2m%2Fj%2BKasQDhVo3%2BPB%2F693fUnVMYD46rSFfiKLCZ1fRGAwMSRD2L6bH0%2Fw%2FjOMI%2FLs8EGOqUBZCum4yXUYzZZ8ZiJQipTrqyjiF54JswtKwZhfskh045njBrsDYq60f22VESz2jrMWrFWCZ5XcjLgzX9o7upR3bb4VcO6MpQv941h0VOk%2BS8uNmb4Jb2x7jb3RVZCxRDyIj8kdfhFMiLOIgVGJ%2FrbncCF%2Bb7jxCTX12OaT7C49Rc%2Fhm9StntVn25SM7TG%2B9G71YTR0wsAaKVR7Cw2c5uNUvALV52x&X-Amz-Signature=a3b01c33b98025df863f993630c56897d44acfe35bca2ddd4335642731723950&X-Amz-SignedHeaders=host&x-id=GetObject)

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
