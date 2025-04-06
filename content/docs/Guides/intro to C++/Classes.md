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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3DCTZSM%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHW%2BHeLyIdVbTJ%2FpDDxOugOX1dy%2BtzSo9bjbRQ3qjqANAiARXZd40goFisIIedH3KZQG0uJcmCiBLYCsOQjcUCfEcir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM47habd0yZI9JELC%2FKtwDxuziYSikfhBboOw1Xn7mEEXREGmtlgDnhLKDIL4AlDdfBlsweFEnZzJhbgtb5jFz0bqarB5LhZSn4UAreL6Qus7CTJd7LpJ76tu49HjCHEVwral02ZFm1jZBrKJSssmTwjbgh6gOj82c8Cfo%2FDeGK2N156Wgq%2Bj5IEW1vn9sCBIVHn%2B5YYXb8CA%2BYpxse6F%2B7QRS%2BrnrhCpZE38h%2F3aMJ5OEL1z2a0YUnavpdqihe2FluJKZn9Bmsn%2B52lD%2FicnDMMrFKSfhDSxIevw3OmwPhts2%2FiuMiZ3FGY62vwBsmTPEwM%2F2S7LT3evciV5ex8tT3LpVjHNMyHYYbyVVkDUvUMEoZmzXZsM4z55G5Tbm0DSMcwOO32G4DGyD3I%2B59BOWnaaij55uYQwxQ8Od%2F%2B2ECMUdMhgFTFHA7%2BkigZHWCLDEUlmG%2BEg%2BADNLt1RAh4b8HxTF%2FhtZGzV6dSiHjEd3kPBhDKqF0vCvyRHwEGWHnh1IyG1CvyTiOwrnb1pYQVc9%2FQdiKQyFLF3amVkjnKmj9Vk5y4p3EnO4eKkEs42eX9fKt45AW2dSVX6SxeLrlMPZsQsFTxGwilw5XpyHB2EaOwJlLVHigqvrxWs3%2BRPLfRUgYAB8vR4qxQeEiNow2vTLvwY6pgEfk7oOSj0sUPFXWu9u%2B8UeoZd9AnJq2C41TXOpUTkahMVj0EyXjqdISYhjTIKOfWBVbAfVG88SYnBs32Q2vnfPA3TQM0olXA81xg5iH7ZLJv9kSRM7Hyo0XvB%2F2B0NBxQq4JDvf%2BqHsfa9%2BBAsvQ9hPJkaHc9Sb6q4oOKV2nFzzjwM18Lhdn0ZAerdhw6xjbCa7l4yhz7QRlEy6g9M%2FBcbleOg5NIu&X-Amz-Signature=86ff5d9baf47615ccf118466feffeb261877f4ea9a10a8df95854b3d79f63110&X-Amz-SignedHeaders=host&x-id=GetObject)

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
