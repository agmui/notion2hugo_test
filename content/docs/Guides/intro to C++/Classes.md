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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KIIJMDH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDw51RKrSbX8PXvfEn5nWOWI%2FYNKx8DOxauf%2BfLR25WjgIhAN4PjdcBugy7%2Brgkt1jXj6%2BMMsLzGdNeGRyFZoSg1hsAKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8mu2jWPIlSNxosfYq3APPLrbtzTcGaoasoV8P9rc3%2FQC%2BBAr%2B5oLSiiIwK51li8tE%2FieiisIs0LS6LRCl5pzwuZwRKXrSRqAetIeXc0bT44%2BzyKXibgbPLjr3HjXkDtHSrl1yc8SLbKKihemwVPTrH%2Bmifd4j%2FUdni2plYuiiYodALgXWsX%2Fd2HrfpZhUXQePajDM7FzgEW7JTxZt%2Bi1Blk%2FwMU9reIe6skgaszfVly18nk5dwlT1YLkNOWTtnsvnAlA1m17ZgJoMNLG%2Fxh20LeVOuVBeAjuUGJDc3rfWG1ewwPeyGG02DHDhZEUBYOMhmpqB%2BOP%2B83VxAipnhpxk7J3Yd7Cdle9G9EwFQU%2BQSxQghiHeJdS5L%2BXK7yvs4qmrVLwouMsVUOyFeGB6q0S%2BqcF%2BgEsnLIKk3Zz1l6XxmO8LsE%2FKdSaXVYughhUyvJwr54gJHob5%2FHi5A4zzqecoaSfU1lSWbky9XfcVxHBYeO3v7JJa8sw1FCJkdzrFMGBfeosgFwW16rBPoIgcLFTTwmiRHhHCAmuXBKjVyGBXFBVPlxdqnydczX2X6ppO%2Fq3anhPUNqtvYlgnRbgdEZJBrdETQ9ct6IXR4PheBfw0Bt5JJAqHXOMn3%2F1GCxXiJZaqaj%2FbkIIdb99eozDGlNTEBjqkAezqsNmFP%2F8o7HnvqRUZwBTDZoFgey5io7j%2BkhduI87Fxg34XzO8UQYPIrZ0iYZZz6Hk6AAqKFt6%2F%2FTdc5M6aeDNdO5OnXPo1RrCspG0xQp0K7bE6Q65lQ1tke137ARlAlx0MJETJ%2BVUZc1z1c0Ef8f0oIRdOODByE8isC8QkDR2bAonswXzSz5iFUJZi6ObRs4KdLIinUTEkg49n8U58Kv%2BJ6q8&X-Amz-Signature=3719ffe0d04c9ba45bb578b8207b3372b956731bf691d8c39beda1f2f75fe795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
