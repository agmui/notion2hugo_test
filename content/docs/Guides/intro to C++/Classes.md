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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZBMSMO6%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBw3U1XlnItJOpac%2Bd8zq6km%2Fy2BBUP40vI5mwxm2DsRAiAm16w9jjd1JGvMHxdrxROioJ47y1X%2ByOQdyFgJCm11fSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMnNI6t4CA0X4%2BxzJpKtwDcI8BkR%2BoulODXcLAOD8WUCBaPXV5uAu4SYDJfnklXLaaGz0EEP0XFm21UY%2FUKo%2B01s3qG15OPtmpn6Ql2gQEvwRR2mzHGkgp6e2FLmtyO2jSJOcWrG8pYduVF0KKieZem7kEegtVS2Vfueb3%2F4Crxvz0b8MJB5s%2B%2B1UTcWblIAilBgnmbbnqsGci1P%2FS7bgfbyzhHeTZVKFMm2eLy8GXue4b6Fj6o%2Fp1XfOfBDarBGzGfOZ0EEKyg7qI7riJTk%2BI4EmSvDvt9QKI49xkTEWlTZuSwIy0bg3vB%2FZCnFiUXrL9jKCC8jpWuuyHTBI3kMLM44C%2FqZhMCpepSE0DSyEVlGDvVrguwdwlTuqdZRzF8Qw1odPAmvk%2Bpu16AkFrP5E%2Fhxxc6oGK3fmS3ln%2BhP76oXQXDz9rEG6DTovaTxfQytcSuCYgrEzN0LxkhNcVNvnGuYmZIyTezTKqK8CZcVo8MrZSX4s1VuzPNjlEnG%2BYccMRbK1xguu%2FMr5Rl4YEfLNfy8J8hTkYyDP1R0HCfK5q867Suedr3Q%2Fo8A%2B98OKIPP%2FVlEl5%2BukOudNYgtYoNBw2kHQOoJP4cphZ1fUvX9rK8%2FpAOrJqnOlCUJCisaZZKjXVvYPvKSG741b%2Blw8wy73ovgY6pgEKhGjoC05ac2OJnlrPYwXBl5g6bq8dtqbqD28QkH1wJBxczLsj8%2BLYKtfPaHXqCM2Tl%2B5QaiSQcZIfHnzaHBLZQjZRTClVqj%2FaRLT7rWKSt3ZZ%2BQDEinOhwmJ8173hna6Dj1gqeJr%2Bh1Cj%2B5B%2FAfncVmwyELtvayNziqV6q0SX2DV%2FFDWv0C5m6O6kTvUrlZhMTZtoS%2BRSexW6DgrVL2YPw8BCEm1n&X-Amz-Signature=1f1413a7ef1774efb7c8acdb4bc80910d8838971db342603f0278f72508b13a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
