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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L6WVWBX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbOGjxc7VA1C%2BiuiqExfH4gwHGAVn5m1GZ%2Bj3Lr1ngfAiAau634JEhZ5dKalq6HpdjRNbEsI0UiYDvVzeac9RwXsSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMT66TLHcukzrZoRfnKtwD11mE4Zl6C%2BfzAOrKrTZVZmb2qwkeCoQXKFGa3JcYXbEJV3zHtazt9pkJ7IiTIq2i6i%2FaXKMafACTsGPCmKIdBGudkalokh4dfTil086TZRZnhdHCRK%2FsQC7BbSh6moBhKF%2FSm1hb%2BimFyzh8jBS9Mi8%2F5YlraWm2Cx1aRq2KwtZW6Ckv4Gox1zfE4Fhd9QqaX9iXYo3iSVfAV2BhtqiHXIiItUdig2EeT%2Bp3f2BfZsVQ2HM9rB4PFYCVXJrB9IdxTRT%2FctfvHlWiSxbC9pWWo1JWuEQE8yHreCxHIw%2BFo3Xr5i02nHE90w22bWzdESYp0EtGD0P%2BgeipUscZgFs%2FSinouTn2aUUVG46W%2FSqk9ruS2BvSbbKzxBaZkvxGPKsMIVsiUlH88XGLFY6Ihb3a8CKOChL7SSmrD9IqRbd4KtE0hDCtbTtcAGDxDY1TgxTjrVxvdFFPuRClvTNeY85UB0uE0aXJVw%2BcohaCjCgqjNl2KGlKeRku%2F%2BifGYjuSRXgls31y6Mqd3eFfSo6UEG3YrpFG9teWXNfS8nYSySaOxWIhbY5ynZUzQwqLzi9FHeMaNo42LiX0ua36szDrpzZ2%2FlXeHBN4KgQW8Dp5aIV94VxMF%2BirRrF%2FOz94uow19O2wAY6pgEtOkCG9gp2e%2BxayCEnYM6LdxrZdSrn8p%2BdkP2ttdIh%2FKQ70qb3sAiiBOh1mlxy3BjD0hsxhdPPO6%2F1nlFnH9pkkKz3pQjr8%2FGlrcqIRgdfPey0bq4UcmTeyfkNjf337tLxxqKuBMDZtHl0wSVzb3us00xFEExjCLOZPX2ZnmsQmwG0gia4tzdG5MtjT%2F9Eg6IQEYqFkoQtfdzuKPBa8R4uDe1kI8Ny&X-Amz-Signature=c7345739d2a73322895ae8b6f8a24903d142ec10dd06adfee93250ecb5424a84&X-Amz-SignedHeaders=host&x-id=GetObject)

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
