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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SPZRQH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T180957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCx4YmAY%2Fa%2BncCmiFjjNyIL1JQnz%2FRnFTkmntMWvtoHXAIhAOorAH7Cd3KhVmleq4M5UrRF4FiGqFEr9OtbP4x6n35iKv8DCBoQABoMNjM3NDIzMTgzODA1IgxyPV7y4Rf1Hzn7fFgq3AMRRK8CBYRxmZS%2B1bqoc%2Foa6T6dOEtO6dkCcNiwsyv9%2BKV1RuBRabeYJcu3x8bVuNfzupx7x2b64wpaoKgozDhon9zJGF3QmRGyrkaBJGJGkZjsrY7plCZViPsu1KJUV9CtITIIdBf5T4q9jZW3dijhHlFxUDne%2B7aVZJonFjOZyyomTG1dbcuwIChEaX3IquyV%2BaZzbDrUCFxsPqBe4htna56euKVJKuFhsABbkKVLHvWgKabxEIs0cRAnx5gjMyUgOjU132GdZCejBU1TiYOlgWIg0cC6%2F5wBpnGHbVveU3SppG%2BLaWbFjvBImC%2FkmXnFIkBrXqxMvXyAW140HZo2%2FZOv0OdzvmC11mNDhuaUA3Fk5pxbYzGvqeiQM9gKYySCgs3n1%2BwKy8d92i0TFMaDJ%2FguuQePqlP7BTobgz45McHwI4Nv%2FZ0DapIf4q9uvnQE5QVrkLjBwVLfQ97Cfa6yXxDWXd4k4w8E%2B6z5XTLtnD31tNRwAc7OeCa1bEv0zsu5Idk8iXiqBvfJpmlg3Zm4xsofa%2Bv06QekKH5m%2FsYpJ13bWXjJXMeqHy%2BoqWAVZYnjO0uBKfOx10vV5sMluh2kGaweicEs90ogcSp1btUYuqhzZJUL3DU2DKkDWTDsut7ABjqkAd%2BSIcmCE8c4mt45RJUl%2FQzd8yYckkuAxO54fwN8YgbvhX7KDnFKPFy5jecOSPAYnYlHrbPqSJNEFSYXq3xLeF427cwIzr7%2FTE9H3ndyOMpnTkdPnmAp%2BRvKC4rmZx7uTNFibnmJgcfBJabSEGrT%2B0Y0NxUKPRs5c0zQkD8Dm6Q7FJNd2jNFfaA3678tgnE2ODCcRozmsK2hh8LwAHnHsNHPfbq8&X-Amz-Signature=9b15567bf715c1c5afb81cbcc85ad8f8e15114833bf4bb1faa1e26c16a7e563b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
