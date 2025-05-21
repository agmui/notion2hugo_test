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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H5MNT7W%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDqViE2ZaSlNV9RAQCxbPUstssjaEuqkXx3IujdJaZG2gIgbEb0b8EiHdDtvx9NVUyuVsAkKaIk%2B4uLHfDFIaAFpcYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE48NvbLGK%2FrEbGxaCrcAwBJImXSHif0qXdi8SliQEzd59vtp6NDIVAkxsxplCj3tZo7WLcpkYyN6jNJ6COLn1sDqV9az9jFhOiTh8lDpO%2Fs4xzsmv6wQz%2BOuo9WPuKl3tpJ3RKo1aQvf%2BNKv8vcyZPdZtKwMJ07Qspfkg3Lcmir7pMz1w9hgpqMCxZIorxqhHzrvXE7hzhvAuktwcKwAevzE2HXVpvaz2fNEWIMfUAWlM8iH9obdYBRxdZZrin81iE1wGCeAMeu9KxSuhZFI5simEl35EbrKIgwQRgdYIdtMpK5sj0W4wtm2ydtiOLyS1BCZEY6SpSML%2FV0cttnY5u6Lk1H4cJZNH2Gz%2F0ufscbhCa5UjsdQKZQynvK1zgLUoRxADq4Lfq3%2F9eZhu8u546%2BYtxsf4OYUBz44hIs%2Bj%2BgFV32TRtrLQIhFGff7XIEynmKZYr2Yi3gDNz0i0%2FWUx1r9vORoXCFdae0Y6hzYUeEprd4TAg1yIGIi%2B5Kp4SEC0od5zCwAvggcHAPGfUuEZYkvoPmbHs9SQWgmO74Um8jtR9QdduOx9WIGZaVXefcgpsCezVfgXDmPaVU8wMeM1VO%2Bp55wIBLC06cGDm8SejFmvjmP9OppuvvpLx6CvJBjpqSsnSXrgGjoFjgMKXutsEGOqUB8ccwF9rTqFjFqONV1rZMt2LIyDX%2BQ2o1%2BB1xBYrQG%2B2JJfGppUo%2FN8OBOCHwN%2F0jDFgbv4DBKiRT6P1y9gEzV0Jb360RXOeFROkOxJ0OjGf7ZfgK53UeenfAuu09iIseaJngYFFsVZFK3quJx9aZhw3aabdZZKjHJ%2BCxED4AlW5ZaTSnrrVGry%2BqvdbdPv9gmQJULYEMBGjBJ7YPdS%2ByHZwjpWtK&X-Amz-Signature=4ac3d062b266c88afe6f2400a26d97d495f09c30904e36b244b508f4ee7bb0cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
