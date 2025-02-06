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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH66G4TY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCzdr6YTMA4XQwJCUTt68A4heaxyYA5XQsgqfxgXce83QIhAJ3V6AT0OURwHU6kzbHllfLYQGzETdRj3NRRMbgwQNDTKv8DCF0QABoMNjM3NDIzMTgzODA1Igw98P70r3DNgS5B%2FSYq3APeUmrt1VdtxfTsF8VYn9YlZ7Bl%2B3oIOqZG2UrnHP%2B%2FtGXzw6kNHLpMUw%2BzU7DgIdTjJjX5fLjogBKAiaVVCcTUi5vdyPYiI9uM%2FuJ9zI9keYF%2BvWNVfvfuAn087L6Dq%2FCQNm7Pir2tKA0HawHpnew7tAToFgSwKKB68Lmta5iAzYpRc468LGVqusvZk4KBEbQ%2F9oEq1kDyiW%2FH9mIpmlXQHsnxRVbgRypoqzEk7pjBXHPprrx3fmNGJpLiZaibDQu4NfTPvnwY2E%2FnZ4yixnfJuMXeXtu%2FQQcQHQ%2FPfUZslNvUJeO9Jb4dxVehjRbH0oJQ5C0gH6H%2FNMV12vp5gXX%2F3vdhbkW75XHLV3SaZUALq1Y18w7vqf5OgVcemLlaaBZnqyNBZ%2FjD9wwsCYKOKlD04Z02NtzvvRWX9FRAKtkxJVRpqMq2Zt36DTuG1bJiiADeaCUxWrt9XGzln7gU8pdcuSmSza2KIGPAiWzRpUv3eAlMlGBgy%2Fc0kRmqNQLS2jtTczsCro%2BF9mtI0CRLCzBb8EO0ZSZIlXQV7AqsbZVxdwyZ2jWxEFny1CypZn0bfxg4JuSS6lWpLjn0Q4LxUzYpuCc9zoFih50n20LX2IJsQhyaT1ineCaWdGlDnTCXxpK9BjqkARcOlhI4jqQVKt%2B8LEC5AIzR969qpLjrDobYeAyUapnfaB5hHMz0i5WY8Ph18ulC%2B8oGtvoV57%2F3hktieb1Rf6soWx6KmuiAAb3Bz8BdDpul%2FGQO2okR6N9GaEj5NbBD7icB6zTK559ol0bYtucpSVvYhJoCRAOK%2FmLKL7Wm6QTjo%2FpxjUmRFVc6vijkXvPcoojDmDliRi4SPfmbEllQPjitOjQ3&X-Amz-Signature=c60fe538336ebee10dfa820d96f34a9ac42a9aadc76ad2fea3031f12adf79545&X-Amz-SignedHeaders=host&x-id=GetObject)

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
