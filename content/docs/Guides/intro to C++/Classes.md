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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVJSTEYH%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDrTEHalFa0FYEj%2FU7CDbW2wY0%2FlmQ%2BoUXUTuem5d93AiBxUGmhut%2BcQ6u%2FSENsPoV4YezTdAmSdBKkmEGd4r5JNyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEY7XSBoRGJDawPHaKtwDXHtDtOn2mPORUToZV8ME13pn8DbtNAbl2dleqFRPDTf0bavRy2s3bJMaEM7HZ4sj47UC4zwTJJRPuN4wFbciFgAeNf%2BAz204Qk%2BvwJ5tu4%2BS%2F%2B7lBlsVyn%2B%2B4xeg%2BPCjGPGJhwY8NniO7RZFDkM%2BX30cryZOz7dzcHy%2BUK%2BSjq%2BvNpRcl208V6aCsy4WL61HZajADB9JcM0J1cNcUotX%2BzNA8PHZd2ftVK%2FQ9xT%2BSyHOhki7tKPADiEFpnWi2a7yF5ry%2Fs03JrEX7ZYnnf51S%2Bk6voMNiGhGPaVVufJA%2Fpwb0%2BLz%2FO8jmRfMRIjg%2FxUhl6sRxACdWHR7CdpNZrfV9xc%2Bibkg3TM%2Bwk5vAzUkgbqsqdQBVbtn5iVLUlyqHmHSGbqayS%2FT756ph%2BIEhpjnxVpukVthYIEjs8p77CuCv3aEuuRTfRnJ9%2BWqhJ9BKueJnVe8G82NzzJNBm9XZnk4JAiqHKitrQj92gqye7gvc2qscTmo4pg8jNGTFyA9BqA5Dcr1NXf4CI%2BKsbw49wac3JZxZ8r3TJLC5BVdb7wTLsMhK7LqO11rK2KT8UYgEtyqbXUSpd9Gt47FnRHO9DmT7FvG5wvNsdVbrkpZpcv1GVNxin%2FUR1vJjiawyv0w2byZwgY6pgH4nTfxlz%2FfeeCiE9jsbJT7ySbwJqrl3yAMVXG2NjMngu4KqydKav7Js8gt4B1OiZKxcSVey9nV2UVcAplkvOntRN26HsKh6f%2BS4RtBQ74ufJU4joLQjtkx9ZeyuvnKcxTwsvGdttj9bjeMArACvSN%2BHVjjaxMTLKJ8O2uWpdi2WPVZQ0xf06od%2FTlmgJyFPdbamw%2B0Ejwm7sLhp%2ByvW%2FqTnjqSWuRj&X-Amz-Signature=043f6326b172517fdf29b65002d255e6ccd0576d8e9258ba247e06cc5393b077&X-Amz-SignedHeaders=host&x-id=GetObject)

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
