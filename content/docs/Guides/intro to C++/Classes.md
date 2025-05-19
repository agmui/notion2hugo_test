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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWERPTP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXv1f8rCpcAwxdZ4Kofo%2BvZUgmyNdGtvNuOaAs0BjCzwIhAKIlCg2s9ZUUL7R%2FINuYXTaC54AZLzwJriSBBVG0MSzMKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlb%2Bj3752QXDnTEdYq3AP7vCT4i9HmWGOeOdTvUMIo05yG4%2FeIscxqT0axahWBGWihcE77eAL%2FkI9pxGLDXA0XOwfTzy3HRsemOuUApOnSdXMzJ6XyUEEItITqgVg29UseV02jN6Cb3wb87DnChdoAvfAE1pdqiKV7NMOofOufzw3um2%2BwMGGh3qe1d40s5GZQdE4eZiRndBl%2FmiBeDzVkVJ6d00UCa7FzBiKG6D7k9nf6PYPiT4LAOCm0Q0yeAke9ivifNP5MEtdlvz0N3Ezhn2JnUE6ymEHZFbn2oFltlJsH2A3ZtvdcIxZYDDaz%2Bsk7RdUWKIscv9T%2Bns3MddFfRqZMGD%2BewHa887Z4QQZRASnEbYbeW76YhDnoLpRaI9oHYBZagkb9jMbPqLvYasIxWfg%2FD3ZS9dVoCF5zkQ9zNeMLTO2%2Fg%2BdxS7o5imxUETXvWodufJpe1skp4DLm%2B0WkQGeuUVtZic%2F9QjW52HbMHL4wsLmOZlKycHS%2BqM57K7cTVXzFAfQ%2Fcqe85ShuAWv4ugc9QOOFd3b7o86j4D9ZqsZtSMecUVO4gC86On6RgTDLt6%2F4rGi2aNEqj2JLAm3qe5A7gw%2B327zSpU6PbeC%2Fck32IPD8oyVj7Rh%2Bz4d4Uy9LAUwUBFjy3CpmeDDwlq3BBjqkAa5j%2FcFEeueAVzPONlguT8rHyaqCAWdOWWf8KShnyq9qmvHLoMchkEtyWiV6%2Frs356usTVDeYZK8KmFB7E9t9iRrTStcGvugVv5%2BNATcNpJB2MMcCqmT%2BwqUEBqLPXN%2F3UE5Xop4xnIUg7z1xqaUVqdu%2B%2B%2FD6uxE9w%2BTHylQAyQ1nTjSqtDNwqMCkDaSUq1%2FNVTbX%2Fj3B1sLF4uNqjxcm2IeR24k&X-Amz-Signature=42f70e3a95366996c9c623b998fd9bd0d8f4037036dce752738e48993f4d09b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
