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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNG25L5O%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCO%2BC9hpIQbgY4An8rttcX4qaMhnuRcelMDhA4QEbwY%2FwIhAI9m8k68pFUBCJOjOtSLdFIj8l9XN%2BJTktyfeRdbgldyKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybiSEwHlpN%2F1O%2Fz2Iq3ANhl4GIyZKk2m5jCPwZ7nKGaVtZWHc%2F6wAMPWOZE1%2BdrqhGAfKV17YWTSFv5y%2FVjP4lRG4W4NpWS5Jngzltqn4gm6JOLXTM%2B%2FpOKEEtA9YphRnHkKKjnZwF%2F9%2FeOz0%2B5WdTpy%2B342yHzap7dQyRtn26NIVO4zuQFyGRDMDF8UQbOySLBNvHPiu%2F15a4Gg7e9sgBb5lVAXajTiCH0CvaxRf2kYY1FoL%2FSvfFLxNb6I8U87S%2BABWXDkcnsrPUlWIDaQ3EaFL2tKP%2Bwtvt53BpAkTL630JQwbikP3nC060gLX7TgeRIpTmV7BB02AXabDOnC%2FqcbOuNeRVchW2F2vzedt%2BrGXdTW9g2FfkTnY%2FCyHXtNRLm9WRArg4XhVcEBwObnRb8Xoqbzyr0UAYAvY8EG2KIcNfeU493oX8pSZpzeTaqBfoxemHTr4GVS6S0SNngf%2FNA6HLmfTGy7W5QqZ%2F2pBNY3IXE9oJWt2l8qWsPvuTn%2BmOfGscjnLv3JNKJ93g9gZQEGBIJc1yGWeawwHiiK4yTM%2FJXtp3KT%2BWNET8R%2BeKm7dHqy%2F1dp2Ei63NvFTeP1Bupt55iPr1SKV6S%2FsWWURfLLERr0Ec5pJQZuV5hya8I8P92KrzMs5gwXA7nTDQ1uHCBjqkAdTLVcW%2FRXM%2B%2B%2FRc7bQg4xZpWVqCqdgCyVwg7UkfemjyciD410MPkd2PogeE3v0IuV8LmBf8YsqOA7XxzUKc8eO7el0qnnUkdi4wGtW2pOT6cmzZTFQgL96S5zyv6g%2F5uo3zQdKfsqiPVZnvptD5IRDBW%2FahEbXL27qlwtii2f6yN0bsVLMwJVUd8R1GE6NzsMdtOGizIFxCwZLCqGQMzvU5ppCH&X-Amz-Signature=1a3301cd81201055191245772e6668b3befb2c3d1576ed5c5aac33d142f1db29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
