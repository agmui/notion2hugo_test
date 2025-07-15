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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NPWIV4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIB4ITFs3r7mEAqP6C5nIChchycwU6FCYjxjjLCz2cB5OAiAHGXRs7HCn0qpzVWvR7gnJ5N%2FZITwje%2BcdQoITPpU9Jyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMyN2EhkpPKJko8b%2FyKtwDFX49w80zPr%2FldzrYa5SjIlRQALID8mam8CRPFxXAq%2Fxd2nUJoWLUVN%2FAwvfeps9KwkwvIM3rGAJjd6KYDN7ITj97oRSwVfZJ2T%2BLYC4dyHW4%2BSBGf127%2FaN5hA%2Fpc1HuQnbOJM1pbi8lljyRspp9gYFdnkQq8k%2FcnAd%2BEWH4Yn26KrL31Lmh1nONd36HwZb0xEZC1nlLho7ZachJ1CuamQbaAFPBkL4f4xJXEKpb4DLCqAcicz4dT1a36QE%2F3KpvScEXf%2FDFVoUGVG%2BtnhtKWr4rYp1izpG5O%2FqdNIfq563H11i7y%2FBa3sDYTRG%2F6x0lGzw%2FJOddlOflRBw37seM6sxYMq%2Fzec%2B%2BhRmaA88nB12AMTWQQV7IRyB0yU5bGlIdNdMqWbPYgZNEq9Fu5G6t5Vifwmf3r7e0x2R%2FkUY07PXg6eKP4RNJTy9J%2B6kmSy9L%2Bx1pxbwfeGVJkAmSZcpisv2SOwvL2Rlh%2FTCoCEVKZJrwLIIffUFKx2j%2BZm%2Bh%2F9a7TmD1y6DNb2Mix5WblhXJWu5k2I%2BIABcFCyUflhMjEsYOzqZJ9umu%2FPySrMZPSWsc3fhb4npr%2BH7%2BRfuavGUwZWATvlD%2FBPhYl9GXh33RhtI%2Bnaqx9kYq%2Biw%2F%2FxQw9qnXwwY6pgFU354nn98duBlp6bkCk6LUaFJNpN7BaWLU6ySchwRVz3WDSwMH2u7wFAACB3bDw2dyjfkn2c0ksJ%2FghfSKmZBF8tR7kDdAgV3924WWsDhVKEbY5j7eahECCRJ650ySd8H%2F1d1QVBsJ%2Fq4faXWn906QPWLe7DknG8cLoB3XyXIppm5yZVXCBcCXEGRCjgupLzeohjdpmjD7P1vqa7AYpMBbFajHLpqf&X-Amz-Signature=6ba2c6b79ed8a248ab47ff2e1661eb6b73fffe0f1840e2f71bc6fd63242fa654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
