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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4DM5APW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCBWRieNWjen8soJYExPhlcAjuqrkMevJDuhSW7WhyhsQIhAKtW1AJ42PjYcY9adqSOiz2y3M2w7xB7Ew1yVR3iQ2C6Kv8DCDEQABoMNjM3NDIzMTgzODA1IgyB0RtZCwDnfs%2BMhSgq3APKKM0g2BktnpHc%2BXqgQRLUDwvm9TZ8Pt%2BVSRSloF6L%2Bs%2BZ2IttVeyQxIO1x2YxgIDmQgPDH2E74c4Msw2wUFjnqquluU49byaJqp7WwtoRj5Jtt1BiN7KpxJHH%2BBPGbXK%2FZVwmniIoNhw5mG2ArZcUA6sgwmthk43GMxYJbI1homk0eIdTn36qbMkgS6ryxdC%2BbxGWi4BnmQCGGSaRx3cL0fXnHFJosvlewqBJNu%2F6ahWsj4bxiR7KYLZktV0SyCsqG0Fkz0FRJooe5fupBISDVT95%2FrQN3TAIlG2pmhG9aaR4yeoJYnTw3tJ6416BTAWHlGDdcRbnFfzqPMKhVj0aedu7D1hbmRE8T4Jzhm65HU8BL%2FMsdGFQ77%2FGdQo2GCsbZGDPzHosZK6CBlblDElqmx%2BZf1jb0A1zMoRfZ6D0%2BAKWIiKPdcalVGZik35GzxamN7Vt7psD9q2SyDWmxJHMEKKjl7%2FORL76DIDNgcIKh0QgkKvu9Jqj%2BvSYQ3ev0zQOiv2PUEz%2BBdfWNgmWXRtkLg%2FtZvDjoIm3iSzvczMjHID5%2FdrDU4debjNJPatPLWFSoj7vXmmNJUsFf%2FPmMCSZWxMd%2ByJfa9ffr8BjP5DmCuiffokZ1LKAgYKIoTC47J%2FDBjqkAay4GGakp9y%2B4BqLPeNhCaarBSDU2ASdoZgjEF80h2C43HvnVlw72F3cMX9vTPXiwv0gICVJtV%2FFDdSQUsrNdSh%2BVDC02WMv8pb1qE0ZG2xpYQhvd0Idmzp4oWplNo%2Fh0ewxMdi3587aQvOQCxlghEjNzJRvNkLYkDWDGZneR0oJu9fkAnvnx%2FIXg6caN4wUBZGGl%2B2DCw5hkqLGBDT%2BPByzqaFV&X-Amz-Signature=25f5edf86d15c85a6db3b6e4eb7df108691c4970d2a200800884186083c8ee2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
