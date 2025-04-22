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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6M34NW6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBybjkvyrkiK5qbwXEP2O%2BXPZEkmE7d4gYnCBe07I%2B7iAiEApevnfX4pHa%2B6ReFcjEOCnjaqt4szysYqgh70Ugua0B8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWjBZlhjzI5nGTuDCrcA5eMKse1GlqRDKBGhDya8c4a9otndo7d8rnF6uZjWJmZzHn2fVIWqHQEJWZXAC2N0EI1Wfu3ttBUSYFTky5hEV1YX7wP3%2B8LP%2BE07abneaCSfR4sUTsEEGK6csLFFQLfLrECQhNhPsfRM%2Fpil7vBGR%2BPxKjjoGIZC%2B2fQ99Kswn6HZr0JTeRLz2WxBz3sfcvxdRcxnjeBFlC4OK5UdoR3i3lOhNQSVbb%2B0WJkfURoLiYRFaHBfh6wA0hiuQY7WeUJoRc2uSfTdc%2FZRjSL%2FViLPp%2FcbaPDEmydFN6%2FuuSRe3sUEYLKlm4SAvyXq3%2BBSDzkkW7rQuHg%2FiTANUGHIl8cGATOUExE19cZsss9F%2BogcDSotuRsQ9g5oZeHpaCyW3AFm6bi5yYVRXNR6q8%2BePuEqvZYneQtzN0RfgDVF%2B2HDXIzL9YwEjFnfiAVBMSBkaqzsRa6tcucb1kdFqtiJQAzcFSkEzX1QUOv9UrcK1nWo2rSVn5doFVzlQCKrVw7Gbn%2B1FOrcVBk%2Fv4csJpE0I9tqTcnTZ9gEFM8ciD3apy0PVGaF4V4lfaq63Wg5xrhVOPctGpHqxhZCEathTvdGs1wT9%2BVVZZYOB5IvE5x8Iz0GAgVexgldL%2B8%2BlDwqggMIjwnMAGOqUBvNrdxLa1pHQBIOSvQYYMuC1rJHwLaPkjsifB%2FnZfx2qBklvQBalDWHxASboW53GNjebEtYGiIer94RR7M4CJ1kKRtPqVXZYR5RUdluSkuWL7RjS%2BIxU5dVeCDj98A91OgrDhLIZbvDJScNBUoLacpPJhRxAEEZjUqkCkFCc26kpGaTIN7wUsixFYYD%2FsL97AFA6tZaUvACpAFq04vRwtiAoOxj1n&X-Amz-Signature=95ad95e3baa3de88ae1bcb22ef6116753385c8285014c075392a63d9bb9b2586&X-Amz-SignedHeaders=host&x-id=GetObject)

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
