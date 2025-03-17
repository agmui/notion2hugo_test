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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TRPSTO6%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClQNECwAtQZCdffESlNQMsOZR3aTmBIBb3QGVfTNvaugIhAJdW7xgtlgIn%2Bg1%2BXFoxZo6%2Bch3%2B8Cyc4VURjGTyeDX9Kv8DCEAQABoMNjM3NDIzMTgzODA1Igwnfqj%2F6dlca6jzlLsq3APa5nWaaPe3%2FJahXEhMme%2FQmPApRbFIBaM3m%2BKarp7MECIJybgNQqI5i5WQma%2BSJvoSDugVNQPQOEoiAHXp87Z7QzMm8XqXiDPx%2BsC65qhP58hrNEWadMp01Q2%2FlvyQSkbg%2F%2FGtnyae91rhkZV6ex5L2y3pYIPAuPBw6yE30VkHtsqUl7cwqz2VdR4kICYM1Z9PKPFlctLk7%2ByCU3As1P9jkpgXNVmP99obi7i%2BRqzi6lUHpoTCm5l5NrUv7gmq5u6AM5oJmyHmsB1ftSOy4LoHi09US3ieTGPkrBooOio54df2yi%2BTWxoDixEXBTjxQWl5uUjSSWZWPJqqUmw1Lfq5cEyYukDpE3bXx3u1PCVnbPM4tsVC5eaYpRv4UrEzOzZi5dYLR%2Ffoa4PaotEAXY52TyThd6XYzmIWTMBXwL%2B7aqqpRaFHYkAcb23igeaLm8T2SeEN74hrQeQALw18HULucAAOgfFc9mX3%2FXeKB4rVEk7%2B4aVsDfvloqFbq7mwq4BOqGb5MuVVHQyP4jjG7sQncBy6h3wGA07h8clKMS4H5VKs8EWZiC85BTdlHwM1Ng1MHwStuqZtQZMdlpA58Qf6kiOHVWvpRKWooNZKDUeKM6Ov1GobfT1kjgsp3TCqkt%2B%2BBjqkAWjvJAtnb9q1y8rbSeUQnsl0Oo6P3drPtYYvoMXGyVt6hwTx8DZkTTbENiwkyk57Hn9dg%2BEFahgYnd54qZ6q094aBGgLJMCXX6njE7aTlIGUoLtjkMMKv19K2x1xigWXSjwlxEM0RFDAmcBx%2FtPSTggFgu8YWoJ%2Bsw91MzvZL4P5Xx%2F59rlhZeDuimPhBYTXp9Yp3AbKUPUV4zqB8bFepZxtCL%2BX&X-Amz-Signature=a5576e459e3ff880cc949e4872e327c28f91154f8427d4f2eb50e449efe3c1b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
