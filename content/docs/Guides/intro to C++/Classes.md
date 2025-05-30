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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM37QOBI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy7HyTIWAB6n7YxL2M32yf613Yz7gUDobxys6Hb3PLzAIhAJRiLU4FoUWduRQJLJHg70c2tmJt0QuSMwyt50DU3UqyKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTHuNEyHDsjSJpEM4q3APtmSYpdqy2J86w29oSgfpPXM5nZgLy4cbGVHSokj%2F6j2f8cGagw7EVLZxIfmXuImLZyC%2FoCYWbsjcf0KY5b20tsT4YUu15U6hzXJPvaRc3MfhdfkGnS%2F6hgioPrmDICBoqCgH1U60nPSIOsWVcHSMmou1Iag1Cr%2FQhajHWlg1fVCXhGuepeq%2BYPZnmZUT4SuBce03Cj567j3ALgWlLX%2FP0J9vUsE%2F0XBF%2FZw8fl7W%2B2rZxlppVRul9csHdY%2FtBKR5Z77bCwBYYjPkhV11qFb16b%2FRBAd3C%2Brqg%2BY3po9JwuJ0XfmYzCLZgvCFQzwmOqhHf2tSvGv736yCAY4BksuSq194yU7bm8XTFHtaBNcInnLiuvTHhlgEdwXj02ZoITO9AXC3lvAeDKvxEUk23rp9McmpmH2ZX8QChWsGlm8KAuwqZtxyHVFCF%2FYUxEzP%2B%2F%2FsWXmx9fQW%2B4VEyCsRPw3wgQ6%2B0NWPvj94euo8TB7YCvllJxvu2qGZ08qx%2BVUkia8I28MpzUGHGbK9QeMiII2GduJOaOAcIRAc8OP7eKjsNaefh6TY62yvSd4GDmXK1jzcd0eKhj31sNb0WNGC69D1YIczZIjWp7nieIYQS4A5GHyRATB8x9E6PNkr%2FlDC88ebBBjqkAW0qBf0Z1pqtY9ZJ0UV9jhhA1uSU6EX2rbTqBZEmcy3DL93EXVoBGowPo%2Fvzn6gDXvJR4KpnRAeMryibruSCtq2hvSeeM5%2F4GnydzdvLM1f5TE8aoBIFTn7YyeWWkgtrb7bI46TjAOMcFzSRqF636D%2Ff5IKl2r7gnBti16qJIfAOHC6B3q27GIjR6zJ7Kk9HhnVs4%2BnMhbphkvsf7QlUCbQcBOKr&X-Amz-Signature=c3b90bb516813856ac75175fac5c5c75a27b0dcdf317486208b7595a616dd0dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
