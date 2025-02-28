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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6G7HJJB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDbfK%2B1jBl8xR2H91%2Fk0aq4GYIySKFcsMCvgCCiH7zXFwIgWK6Ft1K7fnSp8LC41XmFwhUB2nUpAbhSGkk9ogciSB0qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhlQmsYlNlQAQMtxyrcAxBZyyig0VEiyVuXjVmPTC2NjNZO1dtQ%2BZYFLkzrp%2FlDY37vjdxG7pnJBlhmoTbbZ%2F0gTzuw9X%2BRPKs%2F6M0T5ekPrYO4wDowI92DPiRtx5J3Uy5%2FLtul8GlXs2iXUvno%2B7FcrzYWbVXSdy2d8YyFcdyPUfjqFqQvV4i4%2FMsqAHYDcSBugWz1vuU%2FIS%2FEi1bvwL50Q4oK73jhhUj9LbdCQxAq8bh6w33PD8SOh1P6wIcGFyHALMyicT4LcDmArtdAd%2BXwQ5LXjgJmrGGuOhnD8d31R9e7CJBn3vUl6tXWveeBe3en54BazXI0c2QEgtAZlCEnJAnlfKWMxqgVTOo2%2BdIT3%2B8w5818WMNpnJPfbvjJp9pjnM3GExGnyvGjFictJpESfMeZK3I1txY17OKefPL6%2FFhXRTU2Ts966Wupd4LZKfxKRvKW2cjS%2F8QpJVk5aVDtDZRbPFgQM7KE64S4QWr10j%2FPY%2FZKIEoWP3tILIBbopskmgz4jYgi9aB8msBmbaIc0KMbWuk41hf7FpkArfe4s9dCwxpbxQcuSWW3Kzk7rbhHb4Y8xqIBfuA689AmstfMB8sDDoecGGmbE9fcI7V37iTxZf4dOIOhgoUaZvfM%2BISaL7%2Fj7AyTs21iMPKLiL4GOqUBb1mpluvfJtGw8GGmbpu0Fn49xk%2BG3kyfrW6R6bQ2t%2BbX951fNg%2FGhGMUNcl5QtxwYyiU%2F4geLvrdLJKf5Axi6zetFZGYIfcrwGuPCuKMSicTe0aWInT%2Fw%2BcH2S%2BSktvFEG8SXY71Aw7IrB90%2BpQJxdzScgbBlZC5IjbS9OOoxfRXAyuFAGpEsRFvTBVvD4%2BvoEmpxaCCpIvdl9o9dxNgXpj7TrcP&X-Amz-Signature=eca65b28745832805ceb31b44d457846963a15c6e50909e253c441d324779d64&X-Amz-SignedHeaders=host&x-id=GetObject)

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
