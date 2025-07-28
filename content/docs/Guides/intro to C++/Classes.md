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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLNNEFPB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIESEowNLlrjbSP1EUII99tSGQFTbUpxjg7dV2NHUCn02AiAGt%2FVKXqQkoTdOr%2FLVqA6YFkD480mbnNrh7ZX84mXFOiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDuBQYx6b4bhTqrAxKtwDIi8fZ8hR%2Fzqls1t1Um2QSMUjQqpOZI03plVhl38GsNIV%2F8ynYf%2Bb%2FDoxMrwsOKYuwODBghVNqDdUhwZ7NO5CFqdCUVTfkGUoE39x6J4a%2BFtD%2FSKL%2BcjzkoNK9Oew%2Fg%2BfWxemVX1ApdsVOW2CQ8CmlGRKDhYgxCMXeQo88E0fe7LdXIkZ5iMg8CeiguNDikKxBHYXSx4rJViocKpUpdPrXsh98yap%2BQKgKfHTk1tQ9ZArpcYF3AupROq0B%2BYmlpS5YLY5kvh3hA%2BdEAazMfGcnZpSw3XBbErFNQx%2FMkxBG4rp38ZFjYWo0jterEaBaXMHxqNrE%2Fym9C0F4yPxdViTe%2BzAove6SErmAhmKRCyCF1jKwAfRXrLIzt4i%2FVGMu0dzFtwEwfgvGx%2B%2BMx%2FZp6wwixmZnOPU2rewG7e7dEpOWX9m41pToITamRQ9Yrrr5vV9pQbuOhDVCYmJNGmowkAS4eFEcvpqKMK84U%2FF8uVAy0IxDfD6pnNDoIKFkJw8JnTB880WAN7lcxSaaiHD3QlGaUh4Z0wQKAqWVUOkxyqnj0O4kX3%2Fa0pz7iY0ZSb5HzfYZBo9DXDOj001FDm2gqsLZyTiedKPM6k1O3EqwLZd5DHaUytk1rpWwhni3vEw1JCfxAY6pgEl46AbxRjqgW2K3KMsm2mCdf3R3aXTntD9IYwkuS1FUV%2BubyUYbhu%2BXqnug2SG6IUmqj8t2X3ZKW1z6P3H6XqLwl3KhV39Ef7pM1C36Qm%2Bb3%2BJaSM5zTQ9V16aJH3ssHinU6Kj54FIeRPWZdzc69WQ1HSgDvYdk2rUjmhQDkaTnHkD7XqBnJDRTm40eAXVZrdV9%2Fa3McTvrEi%2FhTXX7Sk0ivUD2%2FVR&X-Amz-Signature=67b082faa4389c219cfa51a4f7ff741476d9e6e2ee1c70d0c48c0f63864a024a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
