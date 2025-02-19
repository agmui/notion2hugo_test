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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6M64DOU%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHkHGlf28Uqv4o3FSEW4K8L8pT2jqnyAWn0uKGdBBm54AiBXLz3AL7Np9%2BQtdCBNJSSr5hNzpnRjU5hNC3QQBU9NbiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5OACHwEz7OWzTpRfKtwDjjKq4OL03m%2FRYnaDNqBEDRon%2Bhj5HK%2FCiruLDMJYjnAhPeg8D%2FPxnG7CN9fEERM68liEPEEAMmI0c77mk7czCi2pk9hxZznCzrBkPcTkqH9CoQVDOC7buiB4SkzHqoehe%2Fo6yLKY2SiAgdYZEn4dtlwMSNAKAVXs8S3mxNuKjYHYcPqc0YSAFSRb1f9rM5uMr1TZS6784UncrLI4Bh5IP4gjyZjOs4F5a7WzwxixOGdzQWLEb6JnW3SzaxndXEBoi%2BpBeRbX4hiMHwz6WHeAUNzglA2bpxH8FkQmSqMMB4z1nPV3Q50K2FPgB5lJCDNG84Si68b1JTEVOfIQ6p%2F061ePaJchZjFaLkMqhkYl8AXQNoWqLI5%2BsCBaF%2BtwxQEZRfb0NIVYa%2BPCBloqsDGpFWD5FH%2B%2BWmSzxNwXkcAaFgbFKN8SDvy2XweQBwOPpkXqpZUumWsy7t%2Bu6PosJq33jVbY%2BVFSMy7Qd1fi8Re%2Ff5sTUXSdgJbPuRApnfq1tQERJBCRudIGjPyW4N0Bcn%2Bt0Ykgs7bJLUtKnlH8h1YGljyCsCIYpzk%2BcschA3M00J0AXdbec5UkdSnbgr5TG0HikfHGuGEbI2mUqI8vIapLClOGvEenum29YZ8p%2F%2BEw2bzWvQY6pgGswbm2o%2FL0BQwNqGywQx9eAeMeph3dBRlN4%2FWqtiJnSo8o8MUVeGv0N2GFBKcwE9mRpIt4yIosmBF0q07DxEUtMRC02ZHPocYSR0hA%2FB2haIg9udKyePZ77uoQESwqq3C%2FZDcbijBTtHAS0dAEB42NljvQQbeLflxQQfuMI1lOG8ZbRlF0zHmLDSOcCSx09x%2BXVYmqVAVfMzASbJlflxiiNRvbCt31&X-Amz-Signature=b11ebfe8ff26246418f0b65d7295f6e1546d2d3311e90eb02d4c781c577dbffe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
