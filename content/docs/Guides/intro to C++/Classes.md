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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PPS4O5T%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRN8dKay6kyPwtsoyInhwD3hKehIqLxO1059ttarObTQIgNSLhvUZjqZSgmafZ978jDgNJvKtZ2ukSuL87lgCFI4MqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGf1ulncD8UgKJL76yrcAyk1eyR0l5jHdEvHBOzI7BUVjUBPhKWhw6UlRAeZanlnQrGdijeDmRF00IJTwlXjqiU0LGT77p544hYk0w9ir3Tf87fVRy37KtwK6nQGxbcSTqll2jM%2BUnoEjDvBgP8x%2FCx%2B9osVDRSYu1ISNmty9xVzbcD%2B54AXewFYAEFKkjbIfhsMVqS%2FghFfv1G1aQjAEEpTYRInA7n%2FPyVCq6dYGCzOrnTQsBQj8VQHfWMHyi4yq7Hx%2FJ9O4HDUsq9xOm9WZe8Cd4z6XSdnGLSb7V%2F0bhsZLazSD1ZmG7pOdAGGOkCWtwIDqB2rdm4jlEBPziT8KEKwZ3BVOPLnRJSL3YAg37ieqiSigkQ4bZWRuNqiXtNO72j7LUKANZJpJlGBvf2nTuOjKxV4GCqYoU1qYERtlJf9uzpNVJVAaTvxJS4AJ5h8OuMwGVsD3vQXcIRgYZRf0P0jMF2lmz5KojVU2yOYgxvGSBAxACKH5EeoDv%2FHYO%2FxT3t72v5k3oeFb3H2CYPLPUuhDqX2ik2uhnf8edpOlqunIiMbGEAbV9e2XetDaxLTvD2x%2BVyFNgzg6p8LT60dq9d964vStuqkfzQVG7CxEWhlNmCLuAuIbHtZb7K1%2F1U2ojXr12rYS%2F%2Blfk%2BQMObLgb8GOqUBOLoCxBwynsBkK6luNlyIM9crG7mNjTjSH7xaHp31CiXWVQGMPgR1oLifTGVHrBUKSuoBMdzp2hnrXLRYIqNwWcgNaUd7NNXsdj8iOyZYvHuDkuhjRonpx9%2BZlmn3H%2BTOvoWpaaVksrWjiWLI7Cw5Cj4SD9SMxJEnBC3avBtKhFvp5VBlJwYazUJTkwd7r0g5S6XhGYh9jJdrEYOQkM2cTGzexlSY&X-Amz-Signature=d7eeb0b2233ed83ca1c388ca6de668ec3e695c9e37ec0363eaae2204c03cd2c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
