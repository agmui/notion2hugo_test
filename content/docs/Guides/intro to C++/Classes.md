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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X4WOYJN%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIF5A9k5Kb0xteElV%2BDVUvddG8W3esUbfYsSaTSHouSM4AiEA%2BVRh3VXwQEtaxlw9ixXl7eMyLgHk0U97A7b40GAlPK0qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG01kt3TLwQqevf0dCrcA2qUibM0uDB885pLmtRPLbJ%2BHPzySfA1PnyhpS9CqgOiA1p8xc0O0DlFrqxaxUZK1UEbkkOOQdr05F7YO5SqR8IZNgPm2SLf2Jn3JQnKX2Kr5Uhfn4nptxzW278zlgquIznrz5SlGapO5ylulFa2ZhZrHIf6RshePw%2FkrzqcZqL%2B5kZkzCt67X3d7KBJAbS8HfSndkQmNa5HCsNdoK0dfbOiwFJMRE9HEBzDwkaHk3qVGPD%2FLEYwSxlXt3QObUdQBipHnlIBbL4TszvDkIxiLZfkGZogerdHkqls7bnrbZrgrWOZ%2FpeSOSBtm0If0OUBy0wyGJxk%2Bhd6AJiHaJGm09J59Cvxt8zlodkNkDU1KS677TukwguGLLWobzloR6MEQK%2Bh6uS3V8%2BW8Efmuev6G4hVNchiqz5jrh90jn9WSRhx%2FUhDUhTipk7wDD3%2F%2BA7Kagoo8NRn2iq4tYgokyb%2FpkSbQNzJV7nMMxpERll326bYGy1g1IcvCz1e%2Fs29%2BCFk9RM0vJqgJh5kKD0qnMfsloZ4az09txYSexBWNImT4STAaUACb9qsC8KhG2INZxB%2FKsL4%2Fice1pynXZeMfhPspgZTSlP0JO%2FWklrepdpB2yC%2BWMN4KHsdRS6b2ZkXMOmJjMEGOqUB6EsihVsIoMVt7FlOevUi2%2BGMmp%2F5XzEPx7FeI2n2Ih1rh8X24LZe%2F7xV4cNsevMLhuNRuTWRmmJAh8Y1q0ulND%2FVByBvbdHK%2FlfczNOtrKrgL6PNCouoAxJIP0BqPl5pKJtkjyCP4x07s7JpNYB80VBhFAR06Ji0C%2BauazaZVoaHdNJfg6%2FVG3%2Fy2U3HqOCWDVq6%2BW93x5QvgTwkeNVomLXqPxF4&X-Amz-Signature=ba8c8265c0fc42cad1b8b52a52cf4f949b65af021bdf141bd5c5b7567ef57b8d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
