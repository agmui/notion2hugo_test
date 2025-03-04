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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636ZZKQVK%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIHD1zVOcAAaxcZYQxbVX%2BQ%2BAKePCizFtPTdF6KCPGMAiEAhHp%2FZYgESHv%2B9uw2S9mOTVmQ%2BSCeuh9UJRhipAeqqbIqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjphomKs4W927DIkSrcAz3gBbATpKzTvqqkc1THTxVeMqi%2BOljoiJrHG2F7E5SU%2Fp4YJ2%2Bhzp4rTyhzjpCkrLjW5TlBopkINv7g7ZgRE0Qqw84zud7uQz4BzRdzb8GcKbxpQYH7MxWws5p%2BfLHV1A487M33ne9XA0JlZort6clSAVv9c2xMod9Y9wzw3Jwe3d1J2QfvN5UCJVTbxUUtbZUFoX44mzNq1xgD8RQCHymSDGozJGlPTMHImoLX51cd3zcvs1ZWwiAPbG3lRXBLfLsGFuHczp4erWdCXknTv2U6ovnyrO8AyPddhTEnOXMyONhXYFN1Yj5N4GnHlg1%2FFAAU39dWWD7mKc8X%2BESGOMunvV0dYDnkUgPJ3%2BNbEU2fasSk9mwEV2IP0VbyraJV0H%2FZ3MM8QQVEzmN%2FYMpDNk%2FSJDvFY3CLwzo6fGfrSYV6yx3Gh2%2FfFL9W1%2FhXKTACI1o4dLZ8xBKKgI9%2FKP9IuZ5NANdETVZrvrohMBVJKFuoLZca5eioDMlMCJok%2F0G6ODI3UNjchAgnPbwWs1BWuS5%2BvWNAjIkqBYPV4PfanFi8R%2BHyF%2BzVPT0x3wweWVRqaqgZi1sGSMsHJkcv9yo5Fi4zcHeHmV2x4DpRRO%2FMw8XwkyIdcllwWNvdCQjwMN72nL4GOqUBRZSnxnz4PnJtdvjwNECe0S9HvDNYbuaJTaezl54K4rOQsZ69mOY2xOmDc2Z%2Fv0LrigkMvbspS4kvgngQ98Lq3OtG1wXTjE%2FJQDcq1fn7TlCvdVAmUyXczsrqNCaR%2Bfkqg%2FRztU2MJ7sjhbvA7Na9sRVmTx0ZdBDd7B%2F8oPUUkMCWBVcZQ1dyWO2Y0gjVdmsdIkW1ybATzcg991Uqp4nKiTBoGFZR&X-Amz-Signature=7f68184e847aa84a8003dbd9c6ae10556b966f45ae7d966d31b95cd28778fc4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
