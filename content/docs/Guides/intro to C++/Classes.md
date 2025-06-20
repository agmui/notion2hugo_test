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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMTKVXCD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKVDPhPCuDaCVVRceKwynteZczoPwTuawnwumD%2BIEHVQIhANbU0a7A%2FJDdrE3%2Ba7923r5B8LfbLumhiLdjOr%2Fm3%2F9EKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZr72UxRrUgHIqO10q3AMBhenrpeZimhTqMY8YdWj3ItbifKb0ssJaghDggBY0JAWFur%2BZQfaJKH%2BDu6oyxnAJzu0lPqi9cCAw%2B8awlXohoArOn78t6sX%2BlW3B1tDkUlV%2B4PWKIIawxcBmxfOmAf2tAWq2vsw0gah8e3gmDS2HH2IudRSfI8LeZICfIYczes%2FcYmjLaYLezHxAWvpR%2Fh3sxOVZf%2BrSqo%2Ftcqtt1K%2BWAg7BPJxHRc6PdmPxgM4hnpFjar5trzWT4%2FuDQHhDC2xVPLVSUHavFygWkRpddCB9VDVCSCRKbRrJlVke4jgIGawktvBAKyKCbG%2BrWMCgtuXcTIK%2BnN6h6%2BTV86vDd0TRzW6Uh6lf41OcWnTPrQDIwiCviKJOxJBoPr4uH0yD3Xpl4ymi8w39ygd5qDth29mg5zzB5SzcrsL0VFts8Sz9S2Q55krRUYxci8dIUyh8dK%2FKl5bp198KmVhvLxH%2FSUjCSKClu8g2ymyqcxF6YpzZG8iMrQx8f9lNxF%2BjnEip8svhUSONOV9E3u6A5Ph9hF9PO3UXqfLZaGrdNpsMh%2FYaEBERsoI1zDgsE%2BBn32zkdpKKFjTBdNqrvWNsClm%2FRkHhxHt4J3ZiVMhDxMNcO7sP%2BOhXFTOQUQppokkzaDDg1dLCBjqkAWQlldG8k4KxCalHtGHPicB6Vk2hcjoiWgXw%2Be8gAQdqvQxdVkHj2jzlDYwWMHLOvP20qALuoc%2BVD6R1JwHk45M1SLT6AkegIoxZlnd8GE4B%2FkV1QvdqPxF0QGNRPBwLhkx27S2SqyESJbpuvkjSu0eFcCzk9pp8YGcG9GdfUMs4o6gPLOgV8sZhbM3zuH8eg3NYwlSKm9%2FYdm9rscydAwcLu%2FUH&X-Amz-Signature=0dc503957b47ea9618ec4eb945b2e224022777b582bfc6449d47839bb34b8e0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
