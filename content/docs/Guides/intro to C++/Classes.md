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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RW5TFNC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCw0NkOaIDHWAUL%2F0RcQMz6B9Ym1Sp7VjjzSp2L2GpvIAIhAN9q22T4vrAROwYshH%2F5T5fY22cMH1bZsxwFmMcaJR0vKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7npGBIeAkg0XlGFMq3AOfVS9fFi5gG82EXLI5yfpaANrvs4FInM1MoLDJ7oTWPMVMNGNAnez7nEiNUkz%2FbREzC7UKZi68HRSef5%2BkpT0%2F6mOediMTFc%2F42LyOMmWYElq%2BGFWHX3UHS%2Bd%2B7OIZWA0d1zLtOYiOvNA%2Fj%2FZmVKvpOttbFVw5nKY8wt2UnkuQvur4ytRmyDbZdl%2FM%2Fl0nDLBdLxsCiUnpv%2FVNb8qKthdLU9mnumcpywqdTcv3H9GoB%2FZFe0lKH5CsCBcyx5iLEcYOnhWplOJ8R3XgKLOg1m4huwXWLw5ntQZ3AVd76U8alt%2BeFA%2FaJMwzyGSElwi%2BkBvyo%2FQe%2FKcrUo7%2FWHuQ3EjmGnSt2vTmhHsJHHwREj0wXodbuiczGH8gvUjs7f%2F1qBxp%2BzkKBA8hsXGssA3BZZXe3w91tKrKOx9x3vCLTQ0ItsPIoVB%2Bd77%2FNFSv0iIfAXB9mEBUlymhCBZZNfa1nxJ3Y70xmO0Zw8jKxVgu3ddAzUjATVJuB%2FKtXvFjJbqzduZafxcntMBJLuhItnsqgxEeiyrqBcgQdqNPSiNHaa2ztjFTxP6BK5wXddHgdNABAtlFCq50Ea%2BT%2F6AJDKkiwoiKPxZH8idld4iK1fbhsHoUF3VxYa%2FmYlLbmGus%2FzD2%2BfS%2BBjqkAeZeN08HnKi565La%2FrlPHflvyGj2Ezs1nqYAdU8hZX0rpo8D78%2F0Dy2QVqvsxfIpnQa12a73CO9TeHTZoL8OAb4iPe%2BmDg37OJNxSYjpUbvNtd3pzM6OD8Ip0QmtgguJU1hngzOc0s8zDkSXVUoU1rfXCZGUf4dt35QDTGuqYoi7zNZSY4v0cg15cY%2BttZshMunZIg7iWtGFnf3ei8MmWJ2fo%2FBP&X-Amz-Signature=7a0e7e94ac2028266aed19167cda62a44ae1a506c45af4073bd31f5643a3ef31&X-Amz-SignedHeaders=host&x-id=GetObject)

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
