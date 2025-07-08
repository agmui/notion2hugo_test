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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H7FJCAK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKi7brwGvHU4aw297njBbsU74GgEW4RTpIB8gkl%2F89CAiA3rvGTYDdQoG6kykqkdIFKSZjpxWw1y5Uz9lcuSw0boyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQdKtIJibfpAna8ejKtwDu3b%2BLaVambGDAHt%2BeeEiRIcruLnXpITCepFKjbd1EuzlLK3BLjEcI7JLiUcKVIwphuvKWqTwgKXJbUK4xSfYoanLCHkQrgWsbyCOL%2BbEtAlwqv94OTouyzfdPo8tm%2FxfdlCQjKbz%2Fp3gzNI15AN72z3s%2F%2FzjYlUPwFPaGpYtNqbDql8DPSGJClB3fgw6%2FWAZDKlavWXfTRKrmuSEVdC48qgoi%2BowZPq4mn1IydtWkcGwD%2BsIxNZeKgrY%2F5OjaWC2anhPnzr4ilB2IxSQCYFlyp7OXzhAsLOufnGFguWrRva78mPkRJw7Vw8nyd3HOpkFTUar1r4gheKgiQFFMY5f8%2BoTFB6bf8UOPkF%2BE%2Fo1Vc2no%2FdYZZQJjZX3k3CnEfDYS3za2h3DsMSyUbqHNGnDWU8r2uqIoefdVugLiyM1G6Ohs2fi0FES0ZXebG6cxcR6MLGgjDgmj%2BZuTBQ%2FYY9LoPdzasojyYf8TGtACwvejf3rZUDRZAsq26jv5Vf29i97Znh300x3iKQYRrSZWsE1%2FNHjN9befSpsQqgYWtoD6Ls88C2zReKIYmp93xsmS%2FA75nS5jwRECa1IWaYFsfLIn44Qlh9WM6KdJPA%2FB6oqTifcC9EUcG3FF9E8g6gwhoS2wwY6pgEKJih0iTX3XydNoQgUfzRQkn%2BbS2hWUTuohkZ0m2CNDy0opHJww9V4jQc1wYzRLPYz6dMHU75lEzMUius%2BRUmibb8uXpID%2Bip0I1ZjXHObMUJoATQ8N6jQobq6VLzI6eiofAZGkSuh3exvNQyV%2B4FazwAdk9T5HGqLGWMN2z5g%2F9WCpWen%2Fqd%2BaBr9DJ8%2FPflxTi2TqgK2NQ1u9QlkotVLChQgyYN5&X-Amz-Signature=067474e43c1fe612eb6416c38e371c9ef3d0e5cb353b3b76546b52658b360068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
