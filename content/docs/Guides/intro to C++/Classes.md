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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMFVLX4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC%2BZBiR8FWj%2FRPl3MrP8A4KPzkexvV82L3T3fl7oe4whgIhAILVF%2FbPQQzsxfFGtu1vHSZ4TwW5p8YLzGg7oKqFIKrHKv8DCEIQABoMNjM3NDIzMTgzODA1IgyxCh1CJFZHtvC7aOgq3APC2MsFDSUsO6tAs3NoYVo0KKoY282IQR6cwJWuAU1GNLYNOF%2F63iX0T5d9mVIqcPVS%2BcO03eCwkZLrLs6fgUJWm59lzuLMRVZdadJpdns%2BVwi1R1K6OOnn0FmFf3YjDQmNxkM2CCk09AZaY2VIo0uevXYMDHNx7hDRoaVOMrmj2F%2BU3ExOr91T1wunaqznp%2Bt6b8Zv%2BLsf8VvZiWM17GjxjXkm3fwsLY%2F7eRMSjS6VjWCO1GtBJ69JPsh2dbXxZxN7WEz1Y0UAIprzrNZlNOMMaGFq2QW7epEGffLqrOKQPNmJtJsHIGQFA3wonz5VmxY67s2qsPkkWYFBXMsxULPduDrLZDeOIA6VJUztORtbDDxjHgzrew2aKhXPtS1wfQzF2JLJA6xhg7FQs9nYrm4Kw3OveK6TKGhjys4Oykb%2BuTu5TgVpQ%2FfqXwuVtXfsqxpfOn57r6TkKEZt%2FXCEA1et4af3ENE67oGA96HAlvtV5dIS7FXxPWMnmcGyzyn4Bfe0JxRGb1nYnFSjfmK51sSmeIsn6WrCZCSaVfwB5koHHtqWEx7v%2F66Wun9Z8HEfQMqjvxo1stmGvL7F4vTUadQT6VmmUigfNH4XNxXtPvHY3iLITDXaq2QIyyVgNzCTjI3EBjqkAZnx3eZ4VsMLWQIWX3TSYdQB5911rJukPa9xsHmT1gwb6y7pICBUslvmuGWFN43A2XXa8dVTH8FZUsH6E1J8lWz%2B7RFP5eN%2FjA8wDB9a9Fsk0GC8svXqXFMrz1ebLPNoWCtnZvecO0rxny7yJ4IAwpeoMjfsKWAJEPCgLZarh%2Fo5eP9p1opZuBnHaJv8e9wTX6UZSK2l11xHQB%2BLhyH4LRIqPZkj&X-Amz-Signature=ee8a224f0bc22916f6a5116bad4c3ac9bf883d5471fbc85824e842e7d723ba2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
