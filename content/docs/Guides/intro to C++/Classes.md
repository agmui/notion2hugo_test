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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QFXX42%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFAwppo6NVoPHChlfby5ng0eKdLHWPJKAoQYsClqVMiiAiAYk1YNigvj0Gro9qrY7XhzVhm5LutqMG%2BLlR0F7QUWLCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMdq80lloqLFkHKOSYKtwDSb1c4L8Opf44vXWnkrznRlziVINaJnKYywPre9udTollkyuZCCdZBMxK9JpE8oAo4UGZhGXbzgQVXeTGVdz0wFDNZxCbw9kWJ2IpwrVwlgN%2FJSPHNT9UdNGU879B%2FfUHLKrU8CR0ABFBV58UqcvkLGQs4D4%2F1zWXCcGopYsqGE94CNie5w18KMJ6Zk7otaJOSv6bG%2FrawIC7kWLxmrxuqqSXtb%2F9AC27ON9pO%2B6oyaG61vBRcQgxBXQQkT4dfHMh8m4fRMpelE%2FNIEq9rsYraxNBq1SXELlefBlxY2bJ4QX3cPszL9M%2FN%2BnF14d1J8hieyutT8q%2BnOaqC9fW8T%2BzRXISSY1LBaNzrldej25eOsR0EimuM%2FAKj4hHG%2FlCqawC%2FwObkdw8DQDEeWj4SjkcyHlv9bPXXan9YdDpWocaZi%2FgR6jwALrPUlbgQF1Jhk401Iouh%2BIh0sfDOXPlNMagVV1zai9TpSmpw%2FAdw6Som2Hy%2F7uLc30xmsHYOwZK3BcRqY2NJDdTZ774KsLewE7vod6z4JGQ5UVIXToBFq0ynPZTVssSiiIiz9QlaMj5Tu6cYrP4vlSzxyPmrUGXZzNGAzxCJkP7SqZNSPZz%2B1HX9arNAr5x5XjmBqUY45ow7JPewwY6pgF%2Fm8YRlgWXjrZLFfrQafZeDxZ9X3QdH4rBsDuLT0pdQ%2B8oaBMga%2Fdgh2B2EAXy56s5GTSn%2B8n1wmg1AUTHbjHmac1puDw%2BNkAp2lvn5ImTbBnZkdffpBCPgXg61UT%2BhYOGYzZ5GMsgVHl90dP6iXa5A3TldC%2BB84J5YQT5lnOQOqp0xG4JVkgpFxg%2F0N3jzLPM3ho1CqCVTV4rnv7IEt3ZX%2Bn5cEFA&X-Amz-Signature=0e988d374c27b22be6c3572674ccb0319b994db14fee809405628b0e9030a20f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
