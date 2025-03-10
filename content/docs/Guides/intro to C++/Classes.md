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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXPFACN%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDXQEsIp7iMJvCXEB06qeERlCSMn7WUgjvO4FcTTvi3wgIgRH8d2UhGZzmSlXvH3ihY3QdNxSQw3RIMkC%2FpGLpkHYsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPh2E1cZv21UN0hiUircA0ZtwacTm7XgrmIQVyHEFwQjyH9pTTEe3cPEzH8O9Y58e7ZerzDikvYI5nnAECU%2FSv4tLxLCPbSSI88%2BUNJGxCdEq%2BRJb0WqkoqMXVzfsgJR8FDMQktebXh%2B14Y4wPLUBT%2FfCbZWdN1%2F54UecVZHqnd7vW1CL155eUq44%2BiwB6MRP%2B2lBRK1XrS0OXndxVjNJqoMI%2BbTI90NSWJ23mVGWEdpXPlE18M6fmDeX0QEEa%2F4puZjz1m6RkCpzOGqTJHgUJm5225xU9iJnSbMH1T%2FSgRLhIX%2FJZq0qoQHTjQcfVDb85MWPYIkxSKUk6xNRgi3R%2BMHTYfned2qohzyr5AW9NsGLu4WJyByQheGjGybF8qiuz4RV2BGS5yDVRAiZ5V0ap3IXu1i505NkVTqUy7qwcYZIYlNA3BO8XwyHhx0Ar3u4bINvVUCLfFzr7ohlpzyGDt79vt5jSKhULOEJULdpFPSnXVpAaPHkflJHwcQPgFZm7onAYHy4IIY4sTTvDFfoRTp5P36WJeK24azviQU1DL5vbFUu2y3%2Fv%2Fr5KhHKbGhADKwdAzoOZWYEwf85Ibvi5d4TKJcIUNwen87rIgPd0JGQtOXKqtm%2BxrdqgMngpeg0fmLcI9NvqrG9W0MMPfJu74GOqUBZId%2F8DQ7YbReoMzs2QKeHpyIOPb6KcKkIVtnAFFA2yOyRVbb7ISDyIOfFIweGy%2BuiNJRDF7OgNNi1%2FC7mAaQsTZNtVEWU1G0VCMbX9XwGIKZOHqhjAzisupe2stFU5dnZfII6WUYXidSyEOpC7606L3vox5Qc%2BS3uHRFulTWe96SMJJ6%2BImHuv9k52Pvz0QNNI4DP%2F7T79KsqsJdnLs0fXhA3C0S&X-Amz-Signature=d64a04138029f13acdc3f78e731751cf32ae897afa0958a31658e19a75ba2b90&X-Amz-SignedHeaders=host&x-id=GetObject)

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
