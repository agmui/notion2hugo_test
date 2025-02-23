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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR5KVQL2%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs6ttRJaNsh1gLngNux%2FT%2BXBn9iMDpkwER%2BWr%2Fy0wi3wIhAMyP1n3yHVzY8gQq9E7NgeVqZzeKHIxqjFBeF5btpW%2BeKv8DCBkQABoMNjM3NDIzMTgzODA1Igy4xUCrob04T9Ttbdcq3AMEB1EOV9d3Nll%2FBOWHFcKPavNS5hm2ituA4c8Ab7g18GM121kABF3m01PDRk9OV24cdaKs9VH0nfrm77Epm1Kv0RpNw9qI%2BLhv%2BK%2FAQWpt292SJBC1dMvb5whhh90dy3MHpokBkCMHFMaDUsaXrAqpn1dJuKs%2Bjw2SsJ52kIGUuwwSfDACDVHNKnMJxy38gCTwmheBN1WWm%2Bf4BSOq%2BHnL12ZfWy61eiNC%2FopVoHsyVv7%2FTaTvQD42ayJIyU96teEqsc58E3uUOkNumfpIIU%2Bc7dxOpSRoc3m1v0mjGCA6owkdzmIeNrNSWjAvSkgrm%2F2MoczkczH6NCSAy65QXHbCMPWVUFhu34SsSrX2S5vCFL%2FQKpd7zudTSkOaOSEjV%2F%2FCzQ3fxbvJTAKatrMoeNoANX7U5O73FfpVd%2B2OUp9yaqRWZwkQLag3%2Fx97DLE4GGq8cJ9QO8VCQmlR1dNvA5F2fa7YsxKd%2FvT3lHcxZsZM5cPz1UI2wCsdTBKIwiGYnjVQAGaAo5mrcF3DRnb8V8V73v1rGWvkJPDstEZ2WJo73ENIW%2BZMKZxes2hcyeP2UWFO3qm5zszYr%2Fm%2FxWned9o%2BRNz%2FkLh%2FUQ4Byr%2FB1jNYGGxHrHEpbGqVliZlhzCmh%2B29BjqkAQT5cV%2F7SSKCLtgc9pbA6xj8UtV7%2FX8rTddyMwBjEwd8ioFzVqIyOnvh7M5RY4i%2BSfthwgxwWwnMPTFHYFoNVGHxJG%2BG7NpVWHNkg9652DO4LqgYVPvFbwe%2FV6RyXciSrH7VxSF3lQH8jP4EacsWEHSu0LR0RKvNx4kfCO7rpAeMs2Fgg8YS9UyFm3g684MFxU%2FZWPbO%2FT%2BM0vYIsRaNG5WkbVSu&X-Amz-Signature=c57d47d5bca30e387eecb1cb64ba629ad8d2c7416d329ac957391fd6a3264cab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
