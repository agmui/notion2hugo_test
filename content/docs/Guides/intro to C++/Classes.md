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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNT3V4PX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDtkwUzy1FJ8Tzz2HqoTJmbw5xKcfADOzNvqHYcY3WfuAIhALtwS85bTk0GnnatQgug5W9yn%2BRwt%2ByxMHHfyoL2bT28KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK%2FfmrreEHQqlXD%2Fsq3AMlVbshLsNMY91QkIlDqloxl5blUQmYJFyNAq9dJVLu8XDyjOuz%2F6z6HOAGQVNXPVobFn8akyp4X%2FpCY9iymonISt1yshXzytFW2WGPFlu68z6Ydcmf7WjUCnlo9R8OSj3rzJDH9fauWfHPlxzX34Gn4bdLwJm4bULkaCfs%2FqIqYeL4FSWIdaaffX4HtmH8128GYKWqrnSnHPMFvO2BqoBVaq7GMso2oGcbWl7GoM%2BKWAie%2FlUCUSILDgGOSUHmktc112pHGCAxm0nhBo1NgyOnvVJ9U8cBGHja3Ph8yOU0zVBsdjsgrbu%2BQrUaS8C1Vt3pabfzbr5TgG09Ov7tqJCRbNywQx8FuFigrnFGT%2FWELVOXwiQyTBMZ6Bvv%2FbzUsVor5WTrHjmi69oihxWT1wvdVk3BXbP5HxrFEgJd92ySKGwffwOZ217YgAK5DWL0lY%2Fx9PZwpmmHkQs5vaKJ6UOh%2FkiXSEF9RFpN%2FvoJXTnG0%2B7yhZoQTxknxFEijYNy0aY8I31XbgLCds02RCr3MVlA5iUZPtA0T3%2B7jzYQYBnrbCwI1QutdOgtAWBosHorzMmJ%2FTlRSOLuaENUuRmDXqdjOMGkSCv6cWS7oSZ0rbtOBrJ4ZJnCJFx4IuLBBzCe5fC%2BBjqkAa5ZAmfaC7wA%2BD1uOk6J3K84Rfv19Q7FFWcJnLNdGU1DN70Z%2F8P62ITPLh8%2BgGt4194iPAaqrLxjwAscL%2BRDrOolkQKPV5Glx0%2FCNKNiIMddTuaqvyqsR0XVlpeRKQdcGFwM%2BPsqqAMOVBtuIdda2zBcwZxk1Fh2GLOn4lloB%2FN9G%2FfWsNzrFl6XlacD%2FYi0tHhrtYLXVqWuWhToip3G6S5cNogo&X-Amz-Signature=2688d76625adb601d69ccc09c8219a530803f720667dad20511f7da2dad69a84&X-Amz-SignedHeaders=host&x-id=GetObject)

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
