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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYH5QFVJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIApnebqgvCMbm3DE1QebvxVBfGf7mTIXQhhDsuRjFUJQAiBWYu0RgGoDsCGDia098GUQY6XPkoqajXx%2Bj6HUfhVRVCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4QnhKG6yBUPDddO8KtwDVA7p7y1NHK%2B1bWX%2BsN%2FQQgA%2BWFNKPm%2FfETpItsoXZSOIXwCkfOzQfczwR3mYCL7ftIY%2BWUSDOzM4ECE0mjFzxNvRa5b42f3BeBxdR7pbQ9p91b4ofOsue0nOb5dj8L7BG%2FSn%2Fi3BgXI%2BjT8I3AKqs4oiNKB7wOzQNFyXDCP1xCtrg1adxqriHD%2Bhzwe8hO%2F4QKPJaUZ9CwTALeR6hMj4xdmPQOzKN91OkeNoCdL2wlG2hLa8LE84VIMJj2HJLQ1HZzb7b6YX6fSGOpLr%2BU46vl7mlRsNdq74RIYaGwfyxu9AOr4brhwGF0NohSZ2quaGBUo0LOqt69EjcmN8DgLr2TNk00u%2BoAYlw%2BO%2B%2Br4ZRWVe%2FHy743Wz9lt5s9vr5CfW6trtLS0HOaksm8cHEK%2Bo2E9qAaBgjq8apMbwBgeHmF444GKn4FsOZPD4TfKzT2lyqFsL0RRmUmTQadQrvcvX1xoJyKcYuKsC%2BmGj%2BZz4utc0srwfo5ViGb8sfll5ZpH2%2BuLR%2FYRXHJxkPY2lItNRTd8cEnob8D6ZPdTktbgmATrzO185q6uLt%2F7jnVZOHNdJP6do1J9pVTaBRQRHlJIdmDepafKAN%2B7Do5VtX0%2FHVAZFA38rCis8snlt7cQwp%2FHawAY6pgER4lQLOSF9Z20nw0BLMfYaRyx6exEc7wdSxG9yNb41wPseyxUF9Gu473oWShoQC52aEt8%2FYCZXhB7luP2BDmGb%2Fyo7AZgkhugecSfEh4UZ2U0ehVI0H%2FocYs6tTyhUcZB4SIuk%2FT5YIH38Qs%2FXESRPcKEceqE7%2BQwpqrET7LqVnb8rsNK7Kim2vZ09C8j6ttGxfysZqKVxn2xZKko9H27wQeuQBFwU&X-Amz-Signature=15418518f57efaef11959bf1f7447f6af657ae86f5b300753dac4eef506b480b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
