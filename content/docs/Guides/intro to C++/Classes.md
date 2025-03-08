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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ32GL3V%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCEIpWWZ9iS6fmecQi4quYIApgbDbpUa1GbVeSeT3SPbwIhAMVSc5SEi%2F2uk940B1gTnfrM7XwY1y9KLtv0f43TUDwPKv8DCFYQABoMNjM3NDIzMTgzODA1IgyHrWYiBwbXyKhcIZYq3AOE5Yf%2FgNf5nyIC2a25yaf%2BLh0zgPtUBHPYxBWnLP9Epty5b5NTRBdrEbEvn1usIt8ivtRtzIBLH5ZqG%2Bb0YTlBNaBmpDLNPkY8A6%2BNSSqQtKkVDDqYh3SztF%2Fd6sAoSyRIv7uEsrs7eXWDjKGNnlVkDaIG4iafjcCXPfGuOjdM%2BopMn5uaWTKbsjXPSDcts7Fi9XB1IPym5S3SWl%2BGcsBx4lzEyN%2BeQLwTE7foyWtIYAg4AicvFZqx6CAgrx1347BdtumDd%2BS1%2FpyNW3YSZAX8nO2yPpM1B%2F19yyASWvIp9qfw0NlUTtWvs1jmyPC%2BPRJlIFKk%2BdI9ecpQdHUVc3QsPo7qwCFGkDn1hnocLYRqDaJa0SDKbLu%2FXCS%2F%2Fea81duGSS6SJRq4d8Uj5bCuv%2BTLnFH7JWP25HN1S6WJf8uTq6smiBk%2F3VHg4Q91ePjkUXhdttOJtOB3kAaFyz3rhjezyUok%2BE2LrfRcUFYaetrtER8Fhl5K6N9KSwFCChHQ%2Bq44tT%2FK%2FIDEx7Kt5pgHr%2BH5suTQE8ev6lgNOkSbL9CnCQ7Nbhou8BycTz%2B%2BaZCELeVggLV3oJxJMeVTzmuB3gjze%2Bp%2FKzpy1usriuKiC7vKvayavgoVrMjgvNY25zCmnq%2B%2BBjqkAY7IYc3yJoMlYk5Cd%2FbOGJiTgoAl%2FRPSF%2FS1Xc4C3Gflvpsk%2Fwm0HLB423VKvc58aQ6TRVXtyaintPvGUpkZXJXY5SK9am5ErysTkQzeW1GhxaxxgCc2a7hV%2ByplZUU%2BM3TRvCMGQh0VLaPYVNPSbd67f5lRvX32W5N65L3VhHwzTJjwhk%2B1RuCAUK8eBDm4qF9G13tenwJelXPfV%2BKK1wLRarGl&X-Amz-Signature=ff66b511003d3cb43c834abd77e281ae6ce6c3bee5d5db49fbb9a3c36a540ef0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
