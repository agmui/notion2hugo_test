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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSEZIFL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDWXgXfWcUC8QcPBEjfztEyhlXajaf0kjHW8%2FuppqQItQIhAOsRsW6hjuUBgGOM2a0lSE3YAfJ0GUh%2BhxPTm1FssOh%2BKv8DCEQQABoMNjM3NDIzMTgzODA1IgzXSQlpKx%2BRE9Yd0fgq3APno3LS8QCnRjdDwwqZA1CinCSR2PjR0ThvBiRBynVHny6m17td51BFZWKpDO4hlc5KVmzh8g9zkrS5FlcWNHFMsE9NL%2FIv%2Bf1l5yUuwfLYKVN6aqXvS9E7QBtyTDAcj8xrCf2g5sYQbKtXk6zn1i73e5k%2BK4cxTJGpxNyDMYwHQoSFf9CFf3HLPujQtcozYHXd723kH2GHfutYDnp7fvd3k1vkK6r1e1N8hHF0C60RkPjyEMtqVHeJ7dQ0wjbgS4YaFF4iP5PaqfhjLqGlME5MPV2aaOCR9Ki30WY0qRSFPW0pCwEkJBb9ceLBY2HQHt3oJ0qRCE0XxH%2BPbKVTPNDZ%2F9i1ztjbW1KNRHCOUSs1cWnPh%2Fatyk61V78ydPkb34vkYPtBUW5%2F5iqgELZpO8qC%2FErulGQWtB09ECDM1ZzBEN32QKh%2Bmq%2FSeAUmVLYdU1jCv9UbFxhU%2FDkdHqCLyknWSzE%2BHzPrJT0QPgWVJLXRytNGH5hv6yFFSL4jQl46yGAkNlxiE43mY9oXdDHUBBTaTNtPv1XNIC15pcbvnJSc%2B3%2Ftd6wPVR6dGGw8oOOs2iUkr4VP8RLPFaUIyF2rDYUVSr34MU%2Fcc9lUqYOa5v%2FA3l6SXtwvYpmsvypVJDDi7MG9BjqkAcK0njAhew6%2FHcKyAslQ%2Fee%2BcnxB8AaSp%2FIW0cUTXPFpVPi5rtDc4FjKalqCl38z2FuVDx71WCDYZ88UTaILFICGjYw3jeYE7cmOpuF5gi0aNMUmywX2XLPehLW%2BdHK8OOSsxt3%2B2FTdOseBUdODT%2BK%2BzCjiGcPWBPB2Y1EMdayLX1ypAlCFTGjIufLj7FiBPLOUfUXFGqjDwbYP6srQBX71Vr1%2B&X-Amz-Signature=569e739f54831e3f8b7306c202d162fb7b334aa8d7b73cc76d53d82d1df1ebe1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
