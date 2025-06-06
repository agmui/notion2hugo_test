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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2OHPY6L%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAV1F%2Fo%2F3MDQwm%2BghhnCFKMbfAnEr2V3ygCdc%2FQst7eyAiAQpp2T8S79%2BFHSTLmpHFjwIrFiSxLFwTuK%2F%2B0lsYEicyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMIn0scuV88vwkMM1sKtwDyJMcC7bNMD4udQZs8kzlPdMSKbxev%2BOpDFdDPG2j4J5fdWpAcvWbUyMSbQ1cI1d0eAp7xmSbENp1PEJV6lxjUi%2FHwxQBgADpYQKudI8SoVIPBo7uQIR%2Fdy9Ygo0g9YgK36eWsE2UDxHG2cnm%2B5Tb9Tm0wMpXEXVIb3OsYIF58PWhyEIkGV1pY9ng3EnA1sc%2FxQpxB00Wyv2CQ0gYqeqVhhHTuHuOn2%2FXrshIH1EMWUDagi%2B8Se1ZAHWadAO9znmA13%2FZC%2BwUvTflxcuWP%2B0rMVdhtjZVBlyj9EcKLD7ykqiQl4UWH77T9Q7oeutFIzOsHuVW8GasEef4KttWHcpE5ThT4UuxQfhwHEuqcy95J2bYY%2FLKNcniJ9UyokcM6MMLbGIWzQ8Fq%2FaNYeZSVhR5SiS9KviDS1W1RUDevgYk6fJQH0mKVSSx4j7Ejsyv8hVKAbnPxp5LatHqsnhfdVup%2FImVl8U09A751reIzhvd8RjS3HI7klVeCAWXAVn4aE8%2FWOm0QHW%2FGX%2BPeZEBA5jtSw2ctrzIwPJMTis1ZZB4eYhGAxyrZUbfOzeHpG1fY2y%2FR8ATtUEob9o9tO7nSUJtc9SaYt8S21yD%2Fo5IMshA9bPy92lOJnwRQcRSoU0w1PCLwgY6pgF8ppPCVfo0deZBLH%2FWxvNYA%2FMDSxmSLKVaE%2BG7M4Me27QzHtjIDGiqbsKkWrTt9bUJwhU%2Bohf4UesUkl%2FJi78ouJr6CdOhe3c8PzUYS2Z0aEyVPqvLwrmPr3MjFotCWd%2FQP89DAlEBdaSXIb%2BGwehNJR2xLC672vNkMFSGGfVSReEGyr9nt4NNI80bn6CvacivTHfRvyqxj6e7en9SJ2GFtiYTAGhI&X-Amz-Signature=8d7c96a185aa4d4a4c15b5f7efb7b421fcf31f4c1da3a8f3bda61c8d3b35d8b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
