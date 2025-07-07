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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J42RYQG%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDDlhg4jwWhvW8S%2FnJW0r6iH2t31svUEfeuAqtXPDMuDwIhAJkswKT5R402dqaJfFDwiDg6fbuF8gKEWHGytXtUgRHVKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPpBBGqSdwOG6L16Uq3AN%2FdCseR6Ezv8nabFDOaUZcMNBbvd60Yxrq6g2qQNMer7rbZWDwCCDSNE1JKpGe5aTirAjG3CNHmxOVDgwyGXjlM3ShEGcOoTb6g4K0lA0%2FU4t0HAUNChtHMtKmSJiuLokFT9fqCGXw1rtNQwVPuWvSqY0p4WREhqEyz00QmII5SYlFGKJqKhL6U1%2Bd6elHXrUNxf%2F%2FEljxLMVZCXnGBppye5E0anlWvk%2BM1Nl39Qok4C2N1i1i07tpNpAGUMAALKcuQWYb81D0c1dPrHkQSN%2Bz7qxyX4ECqVbfP8O4cBAJ5zc1A95Dtaf1VtQm1LD2BbYUXzNmXKwpdl34%2BIOhVhu4Vh7ydSXtgMhL0iIbq%2FSEp7qP1iT6PWpRYcQh4fVYakG75mY%2BmyoeumPbRQ2TfrZUOfkGvKiIl8E%2BoJojMPPXlIC7FKg%2FuoElzW6%2FBxyTSw%2BSbuSb69uUGaEnEZnausds%2BgJrk%2BcobieL1ybXeU5H8H10qu6NxwfQ746nPnCLBI8vxbCw7YGR2t7BMMua6h%2BWJm1GlNOug%2BunMIdSzQL6tYnBhKUT9ptEqzedAcp8ejvF0BsD4366bgavW6ag0czQgETbVW2gt%2FQgrOqz%2FJfeEQb5t73ExXRbg7H6dTDrkrHDBjqkAYEMUuwW1NTIyMV9HYQzPPxgnd8erPpunkSZJKi91Zp3zcGxAF3We7FduMmKDuHHGkPwsZ03Q0UG73HTtZUG2HYzzCM1Y7I3xJOajmEp3ClkK9Uj%2FZVl5lBtcrL1PRPGISZkxQ6AuL6K9pmBAbLtfDwcdJD6mRgRp893PUvv52FZSVwSVdzOIAvn8D7RYVjmljaNpNAi2qc%2F%2FTXifv5yLdnbP%2Fex&X-Amz-Signature=6a254626225609993f9acb7c9dc1baaecdee347cd182320897dafaedc96b7988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
