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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSARXRLY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDK5ukZ0pKGvktuPdMBMsPsorY1lmZB9gEFbRV%2B7dJ4WAiEAmX%2FfdtTbgrtEqs%2BL%2FoaViJVa0kAYe1ZSZjQM5XxLiVwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLSPeDhPMPqSW354AircA4x09JqVbrEx5lDmICF5HDmsuPuU6PEqBci4rmGa3ViVL28bXjeGMXwoSCEerIC%2FDa6Ml6eGLPyd2WjpsMRdzvMDSmixCCnW%2FD%2BIlhEwrUbo0LeHezpXvgMCvHI1%2FFMGYl62B7iod1H7W4j8QgupkShGScpT4rnDQS3UDyOzBlLGx%2BaKK%2FeAgJnY3UTCKNlb9JS9k01mr9W4QiQjVTVZG1wpht%2B0Y52ze8WQFMCOgeKb7weSdXLQEtifQ1qyLukjXqalZpr07RyvDE6LQ0SRFBkqZ8Qs9plIUij%2FNaVBGnnwkqv%2F6vUXSH5pjnljthq6B604yCNBKAnUIW%2Bj8Bv7T4GiJzEWQso1YH2HmhNlbPAPTA%2BK7qsjzfbjKqkd%2F1TgIHa12r2XkwwIlnUeg%2BvWikPdMfLAVgiDllDpjbcYMOgFwuQjkmMw%2BAoOvT6qkdd0iKTHdwPsKk%2FUBxsiOMzKtDS5WLR%2FIgzhK6F744qLxJKJpPg%2FYDybJNBSI%2BZ0frg1a9LQ0bs%2BYPxCfktDBdQf9XMBft7cKz%2BHUjg33EZEbDN6TykTNUVo9xq%2BNjplkmMZ3gOFO%2FFu5waswB7QdKii%2FMtvrN2fFJoHwuAhUdDHgdQ1d8j20H4q6kXwoBmlMKKq5sIGOqUB2Jzg0SAc5C5OLXcYrd5Kbfy4sRQ0D2FHf00263WKz05XevJGIaP2iSBpHD3mi3Ud8o7ZsGvetqjf0hOXtY%2Bnla0GYYWyy%2FiqncDbhJagTXAfW9XTyUxufRlM%2BxcLVSwNyxw6vECQTtXFLigdqqaWcvr5xYeAo6uVHG0Ps3Evb21StQbBOWRuR%2Fnxm%2Fl1G%2Fixam36pdBXLJ9bnpIdzoEIW12jKprK&X-Amz-Signature=232b1688036b9f9c0c8312df38f6fd9c0826493856511cd39dc5550bc7c298e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
