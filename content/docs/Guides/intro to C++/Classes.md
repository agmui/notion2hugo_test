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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N6ICMXA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEwwRVwSFGld4iKss2CNxG0dJTNDsiEArlT7NynDK85zAiAB6ZvqZwgRRYEdwFpxms7hDVd%2F2J7xKc%2BIjc2LF5rwWCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0RQrS1zMHXCJTfsLKtwDE5ckbUE9Z50rlgNiJG56kEBYEbnhD0bPYYhQVVBPah8MDpLwiqYCqbGYMDbBMiHwUXhvLh1JBnmpNIZ8TzdAr5%2BY3uRMw4deNDYsefrPajzb60SAwjnvLRvkWUgas2CGGNqKiclyexzmOnc4hQDxZl7u8txEC9u95qllotU4RNkrWn6AXP%2Fi5cVzJpldOModVBbZw3s%2FgUNan0PUCylEqBlOiBXV%2Bay3C0RskBtSnSLqngo27Uul%2F12nImBoum3d9IPtBtKNFhFLiUk9ACdVJqiN%2FtsZjxG32k%2BoL7HfRWAlxC1VHYe%2FD6fErmkn91Om0VqvCYb8XsKYvp8sj2LA3Nin3FNvLa%2Fh2oLJOHCCpY8A%2BVkkAy6Guqh60pgJdFbP7c6Dp8ZUMZpDQ5IHdIDObAk%2FCkgDknlvkhM45wTQHa3OUTCUnIKCcC5SLgHzGGAdzkTk2CH4wNyVhSRwnyz7wThuHtVMjlQ%2BTxGXwEMb7xpH78i1EplY3mGNBRdkBM0%2FkKVW0KiLIHvI2L8PAto44fSeroNylPu2j9S4W1nXDB9Y5zNy%2B4PsAsm7n%2BUJbSfzlydoqY4i4xSeOd4R%2Fq7zLkTupsf7DEBySiwN18h9qB988Fe%2FsOhVGD2g%2FjMwip%2BQwAY6pgE49lNKelR2edmUFidSiPFNMzClkAGUUrfGQbvHuhO5R45Qntcrap5apCIOH5lp2EC1v9yvaGxZ338pHGYO7w7MgDY8YRpF0p78ntFePRt8i2tqWLCiLaCzQBBrD167YWSR2%2FDEhqEbq4CrBAMqz4IxJjIaEvI3azlSDMFsVcaNt%2BgIUXHXMkOqV833HT19WmXUp%2F20e3VqH8l9Tvd2xvic6Fr0FVIB&X-Amz-Signature=252908378a3fe6b76d3d0924f53249ea0ef839199c6ac3c871fff4dc8f9a64ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
