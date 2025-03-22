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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O6IDUC6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCbcd37Ron8%2Bx9XnefYrUilPPUo7q5O2zdyhGlQL%2BA0YAIhALDKEQ4dZqdtNO%2FT3%2FDGAVc6u%2BfapMielgyoLE8ekfa0KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznhZzMSUBrNQe4mDgq3APEWzBrpu%2FjAMKb9rNImNjfdFOMDi0MI3vDiEdHqIvaeNKIpJAm8j2kFhhd%2BBzsjrRD0Ax4E2z7E0rbyZIa2tZlw36b2KhvaYLanzMK%2FL1ix6lmFIzEgKx2lhM3gHxxNC487OYJDW3gL8j9Ze6R87fBOhG079krE%2FuWS421mUuoeYSrLKyRQRsHqV34x61%2F2eGoTgb0qOcwyTC9qZ%2BOfkifVFbI7m6VXDgb6vvYaq5yiFecBZK7EHsneNxbhiwv2dFrlsWqqe91Hzv3%2BWHa%2FTyVgYCu0ra70kAFHAcu%2F8c%2BgURdtVnUOnBfz5adipmZbqHd6Uqx7jn25Jn6bhWLzg79rGhWSHkw0l04Evundia6qA9WFgUdL2%2FCYhluL55uZHHDOzFYkblCGfowzZG%2FXJsXuy7AiWhk1g5IoIm80dLjew%2FgMVQQi%2F9uIPhrpx288qwmlXhAwVp%2FqZblyTuTskf0nBlxJcLy%2FlhgtC6bBT8kAYis1ZqrVkI7qb1woeo8e6kzUZ9tI8KdkEhNYGwZXJKV3Jy4qu1MZ7mBXVgxl2lzlqeAfjOq61BbQIwqwgzTbXtavOV7Jf2zZVNz3B7aeOUqG%2BS06Pi0MQjRjUFPUrICX7YwtWFc2%2FLfATgOwTCp7Pm%2BBjqkARSpLIDLnh5EE34X%2Bg6BXVRKltl%2F2QT2vUPT%2BLZRmbw8sJDp51tE8iFSQT4OBK031%2FQkPUn8C8z2r7%2FKR5aEa0DwciCDkaSTD1ZJ3Rx%2FgbgtBysNuXZSPxNGivgp6INtlojLpruxuo2UqMHNvhP9Qe3jZ9hOwl3u3T1ppR9tWezt0pQ%2FZrHUfEVchPPuaSfSIng2Hx%2FieX1kExKLVC%2BpWTkjAdFK&X-Amz-Signature=3e8a6d6fc5f2f4ae588c848c31df915ab0975dc466978429a1150ac4483efad4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
