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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKMXX4I6%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHUzirdDT3X4Ba%2FcTFMEIButEc%2FzrDVsqCdjh5AlMk1AAiEAz1E5SsMAIxZwfzf2rN7p4uVag4abKZe7r%2FaH%2BXUAlVEqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERTvMElyFvxOvTkeyrcAzU3hiORYWsVMsZ6nGKjDguUOvYcOw5ikCZlTwmjOC6yldeaQ6KCf1sYX%2B%2B6V26OK921MjndTFfKrD9rtWibuKEqTBGXHxbVmIr3ADM7GfxDdoUB%2F%2FIDt6mICg7I33Wvm%2B5K4BvbVyEOpcXUrEn1n0kDMID2RA7LjrEdCfNVp8jC29XEwbYjGP2vxtjMSn5%2Fpa5QotajNo54hySKbUZAOMdGbomPWHqDSxVgr43eppPEyLcCuSeNBrLTEHDfzO%2BkZKoa8wauFS65S4cnYOc1n7ssPG06Xeef98FpRbcGAhxP9K29j1poV32pvYo1Bb3ZP0ZQXVmfsYD%2BgS8lIkGsSM8wpPWaQ2f0tCGaBhC3pc%2FJ13yc6r34nlVwH%2BrlPHKwaWnYZOBS12Se6sAUNyFp896EtK0VxAAnwRz026NgOzodSnosonmVyIgZq8dZr266XjJiTMs%2BUysReo%2BXT%2FF%2FS1gxIuiAvpEB3UYq0WrLlLJeRFkNV5ndJGtbDy64KlU6bWVMGF5IO2QeiihjvkJJrNZIqIEyaUSksjUImQgyRN8J93scY5qkPvT751GvJkFTHuRqY6vuYKbA3CFN7JbQ0CjlTwLEs%2BzU%2FbYAexv4MRvx1PB%2FBg6pt1fNm6H%2FMJjGpcAGOqUBmXWhPczZUORsqMDtlEROZoUD97dbMd3Sii203BGbgM8uhtlkd1I5LTvHRo1%2FlJ7VKqUbUt%2FxrhuQ22ahwtMsvfymqhoRvV17%2BKD0SNTjQdL%2B%2BBMVADsGsu%2FJNNf5Oyh3LrDv%2BgHZiSQ6Ih8I860po3MxwSHIkB75Wm98aOgD8x0jijDTKwaG69lIy62%2FmXzfAG4fNNW%2BriytYZBWIxhFm%2FZ33BWp&X-Amz-Signature=18dc3a9443b17d539a7adc4305cd4724d185e0a33d04fb26bc6bfbf4dd50273a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
