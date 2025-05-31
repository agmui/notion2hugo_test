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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDSYYHXL%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDzu5Xdr5sX1ocMeCIcHRFispLSxfBg4B7VQp6Umsm%2FAiEAnNiG%2Bj2gO1U4pKivDTlkZzANcR1%2FXngvHBvqf6QtIQUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLtn0ZP4wbmnqaMBircAz31WCsiDxISQ%2B8IvXR8jahChruFezEa1UGuOgAO54pYKWqdTJgneb%2BDrRHZ4JmmPiEjTEGMDbuZWtfSvMMTOaLYuU7EvpOiB79WH3SMJ6GuoiK%2BO5RLzSszQcWrsxbHtujFz9XzM54lG9gRKlACd0Q2Bnc%2BFOHR3uXxj1AwkPfYulc1yceOsicmYkkrZ6EzfNihImz9ldMX4KH5c5dwwblw9OoxOmjjJxAmMduHjsPYjlUulnWzt%2Bp83Y25806kbacVV%2FyArgPxUggAf32sCQSuVe%2F6n3eufJ1fiF1JqZ%2FhwH7xz3uh7d0q8WpxnOX6pyOFFrZtIVsAbZAv6X9mZKTtI8B8tl2v0sB5z0RvFjCkOtVtaabB0Xhhqc0qMhOctpV42%2BMT276Up88qiKeDPnJq2KMm8a9dkTtH0YXRhmOX2zWpjfxDFz7Q021616oAuQaIjs9yPzDJBi2YRvoR8iJmefaIoeJLBUmg8S21gDWIXo9O8UVngiQJCzR5QMX4U%2BKgX%2BSRI2xMUcr%2F3XH4RETiBt2eOd3%2BOPfajJdJsn6gUbnca0b4zNlWUXxArQ2jzBQQrgO6%2FBRMbgpT1ExcEE4mE1wB7OeGC8j4UbivQNnIwVM9h8pOUB%2BhNMyvMJL%2F68EGOqUBrJVmL6ur%2Bqls0v%2FXdHclt1rTEjGLU81cPa6zSn8onVZaIVK4l9SRRkB%2BeHE6%2FYdh7x7m%2FcKJq1PCr3sKbNGouWWgKcLLFT1rravFAx2IiaDpBzHOB7LXS%2BoXlTai01KJKLcD3PfWWGYhGsK5W3v1t63e67RikmITyaEWEgX2cxQNQB4F%2B82xV%2F9VN97c4qfLQn6YTQok%2Fu1YCNp2Tth2xzApaIy9&X-Amz-Signature=e950214734c2cd3b52be2a8a022e04e63c95c789a9d388a8ff3ad0c36e38f2f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
