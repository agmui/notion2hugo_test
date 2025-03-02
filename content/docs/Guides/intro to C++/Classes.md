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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OQDAQHP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T003956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDrn%2BIttStqttFtoSN%2F4lYQYrmai1qrhLvV5KQNdtkVXwIgOdyB%2B7ik1fE8U%2B1Z5OK7Q1r2r3Auh%2Bp7s8wsvr9xMxYqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2c7lXlGOnIsP0EnircA9blsBbQ0M7YXhraVo47k4gJOzc7HkPU2vG%2BTyrE71S2P1Pc8RRaapj1D68ZvDIQUU46xC3ZhYM0xQpNBnm8T%2Bt%2BL1tuDTfh5ACh%2BXWe%2BT7dCyAl1GhSH1RBZaKVvOAf46FBtKfJdhmvD1%2FxbGxHNje0af9il1WhitzCkxWAVnO4KelGfZ7HjiUzle6J755vl%2BKAZIm%2Bd%2FWKOVMlU4KzGLZnzhmK0bbCJOcOt8ovrIqvjmKDJlv5o8%2FOIQicFIVxZKg%2BOebZfn1J%2FAwWUHaiWjFYHJE5Yv7XnApJ6RntbMm7t0Fqt%2BSx1Subt%2Bi0hfMBtPc%2F7VrOdjLIHMsU5mad6HXlE%2BBLnh%2BVzSNMF%2BENqfSlYvBkv5to3aipS1JhrsjCDl%2B1n46QgM2%2F4U7J%2BobF4xwbauibjbccrrJiR3J00dG92eObwDpEzX7Kd7w%2BER3kiiTon83D1abEWL6kWMB62YRSeAw9%2F7GzL4Mrc72%2BVhVLwie%2BwRG%2B3VVT%2F8GG%2BmGgtGraHomjLSj7Eb7NnGhbaIeZgVm6rnKQD34S0fhRaH1A7wGhKVUTjkafJDvCyVR2OYlOjbn%2BFfAlX3PwjPjHJx7T032pIDlhiBeX8QURrWI4XEWWYzSxLk%2BHX4WuMNa4jr4GOqUBTJWNtSYmhZFnfu8vL838dRoS3%2BMNfHdzoytW9FT9ShQRmA25hQQaMnVEB5tHfuxewm2rEiSMTYI9tbmZ0eztfQBxsn%2BDHCh0cgnNR6gaWUV2khKt4svudJyjE4HEx5jkS4A51YMYmmLQvga%2BiQJdZCErZDv2yU7dRkzmRG9tKNP12xdvOTXBruHS2munExT0kmmyVQD8Ht%2B7AGeL5BiixFoirt%2Fl&X-Amz-Signature=8da4376f6caf3f2026b2774c074b5d0b0e5e17980a2d2578cdf95037c546cbc5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
