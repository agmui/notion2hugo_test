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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU3FO6B4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDgIJ6myAj6lK39QqxPcs7%2BNkHc4gKeVqkGqZS30SH9awIhAIjwAqBKGE4Y0rennQUCcsZGvtW0KJ7rnU9swJkljd%2BmKv8DCGkQABoMNjM3NDIzMTgzODA1IgzdwYbSos0HRRix4xcq3AMUrLUbMtgzFERY0Yb8cXO8ntKzps5rIBGCBD6ZDOzNSkK2Z9h0SXeeeGk54ikrCG2mM1UQ6X%2BsLdR03WJv%2BmZh8zfChSPEznA8Axjquub1FKn9w3nBjuWs4%2BtNdxREArHxdG8ZEwozMvh2Th0Qwn7nWoLkysNuu8%2FfDCP0wa%2BxcmfpFD7CgjSjck9oxE%2Bd8Rjjc7BpJdu7w8PMYKFYysGtsIptAWQ6crspHvSa4HASFQ8d27MqK%2FfzJkYyxhFSpn4qUSTxUN6Q7dHYecV3gpXlzigJyka3jtuKcB1Fu6%2BbiKRtNPzShkqTecOKjeAy%2FkY%2BSrscnN5zg7NXOC%2FqlAvrwCQTyO4hLBRhRmJNWoQBg5iKknyAN7IqQrd%2F89Eb3MLD4lcW92p9XfT3SSFDnyQP5J%2FCN7Xsq1Nb1YeJLfbt586SCFFeeOTXm1owG7H5dECkkg1Q28vTgN5N%2Bl3Er3Be2wp%2F9ZA7SO9diimQQiDd9NLo2luv8ItzA6fDapJWIg8KITc1eWklkhf4CXNQoj7p4WsTmHfTSSNfnEncguK8PpDIdSN4BWK0PdkxbIXKzPLuV3nE%2BS5UIhDPxtGLTkdbv%2Bu9dYIN9WodewXe776TstS5o%2B0SSvYByn6%2FtTCyjazDBjqkAeAii5J11wdX1iLeafxIiIad%2FJyeNpnh6WHcxUsYQD1KUzo0jmaN%2Bxh1MXuS%2FVkdChe%2BUrG%2FbSD7n6wAY68C8wrn0ZxQrnh%2FWCRMddK1KMjXeJc1IA2cVkkQAHkbdDqmDKNOEigfvPO0oxUPgApowYm8EEhXnsNUncZlAoHQRH2oaKXzLrR4K9AS2ArZqX%2FSJHyGzsVJlo8erW%2B8yYx6F%2F3AMw5o&X-Amz-Signature=f302ac8240fbb1687a8be01099fd55449c67b365381707335825158146fd549e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
