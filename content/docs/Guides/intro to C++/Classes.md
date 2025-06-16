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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGPU3GYP%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHlyKz7Qz9zikowV27VS8iMp%2FO%2BNGMskPAhwUdiRyi4%2FAiBqJq9hti6Q5YTY%2BmQnfG8I6YbO%2F22kHZljMVVVMLAAxCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMkQ%2F2SQyGDfYgXogtKtwDfPuDURMX824Dya8b6QdTUK%2FAgsQl0Hsp7xcoy2xQxqdvLykgc%2FhlKiYFiCFOlg3f9dBbnVsBPO%2Fjeg7x6lSt6fvGe9B15zzqf83xhQo68KIlJdv9Qcm8u6Feoka0LZsWjP4kHeASJQjBNq5FXz5CiPhv1lwie39cpg2gZZ73Hx2NGw0MqFgxsNWORgrtS12hd9RneKahTw1BIpjs45GKr7Wjs%2ByjuB7olnVT5ISD3fRp8qPqPRt9etD7Xs8HrxgoNIqa%2BGjnFYFQLARE449ZfvmILJYVCl02BWN6C93V63OpE7sXsI8pPGvVN04%2By43nitFsApz%2F7W673ORJn6IZlVwFFNMeEw45mqLlV48Sm2oDv7P1olaiVwmxgtp5GwsBfpFtgOc5Ub9gCYTWtQmLiLVC2LmLF9mnKhmNOsR7Npx%2FjYMvrIBrVkMbK0Vw55LK5PxAKHxrNTETUxpOpoPIo%2FLXdicIEWMS37e6tFMvB%2FlfkT2KStyZR%2FbMO%2Fx8yikc%2FV553LV86yN744lxy6YNAR3upW0TctBMR0AHowB9cREPOh%2B%2F2REuozjP1hMsmMqXvwN%2BId0oy9XgU5kyMG3s1YCHMWGQbPsd1xle0Whl0xtm7whu4rIUCqBZfW8wprjCwgY6pgGl4qPdDX%2F6%2BAIJ33JEah5EEFpfAsUPKVTrAoBFAevSIaNW66lcnOK9KdyoIAFVNcMiGB3fpUCQofh20nHxzz7h5tQy5vzq%2FI6J9p6i7KCxzutAQk33EIhdHqBoMykVI9p1Z%2BSNukiHrpezMgf4%2F09uuGjVrRRZqlXhyL7cWxfjK4Rgotg4tCUz8VPGi%2FkDM60odg3csjJ0WHnnJPkhxlwWELgzuo%2Bh&X-Amz-Signature=3f11ea40af48b2a9a35f64bb263a5a9292c2324e8b22c6d52d2da4b762439500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
