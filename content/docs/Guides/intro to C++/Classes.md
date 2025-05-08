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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2YWTQM7%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCklpFmX%2B%2FKlQe4%2BlUNaddjQ5c3kwBifbod%2BkSNlnKwFwIhAO1EjOoYJByzC47Csmq1djbKWDrg0DJBImpsAaIpDfOPKv8DCHgQABoMNjM3NDIzMTgzODA1Igw7iEUqJcJPwKu4V58q3AOVw7O%2BtRw0aidD5gupgsJtVvVzm8eb3LhhDUShs67vtp20E9JYdaSXTfuQUBi6MS10hlI3SgerqILcs0UqR9PY2iPrrtgK0AWabsu2BQHkg3mOaL1udapGNbvpj%2FNQquIB6djvGjpSX%2BGNJGVC0bdtx8Xbj62BCNa1E8qnlyAQ5SvNvLZutfXP2LBUsp803Nr8BsCOpAo4HkAG%2B5G3Q5V08IZ9wSensRsvdd%2BEZFoZJaauN%2FbQhFWUYWopnmce6uZEq3d7p%2B4W7ckaaGYtiChrTyHrENKQPiZEgx8LHYO3d%2FmqlSCYRQs1a0osMQDat7CK%2BmEHpiQPilfTIRwRUNnqNh4L1lAS2i95CE8o4Bi1jtNNfYZNwQG0%2Fokfygq6wXUYKcxGWWuVtfJAX3uev4mnDkxUqzRMWhAbssbyyyj2%2BZI04j73BoR00k%2BxiDbgPXCspBG2JFGOAoNR4zIW%2BPQvlXBOKroYG%2FY3%2FqlJ3vVS8hv4xlhZgMvdYTgQGLIlDiutUrmyCGjv9HWazwrzIdufkR57I0WV7SdF0GEh1Dmu7pj6SwnvTRwwdL1Ujdn24jQLDo2dS4Wyk8005D%2FjjGKkSG%2BhEo40XQ4dfukQ%2BF1GczwSLsF8thYkYj%2BIFTDxgPPABjqkAfv9R3CAni5uZ5RQLrmLZGzDNecafnu8mP9vM6kPbKGG2n%2Fj7UPjrydFQVzxwcv%2B6rgSicOkwvhQobd8YOlH%2B5uU9F0HoHMOsbBlRogYozdilEbQolf%2Fuunf464DAKcyP2txUzmp1aSJi%2BnhTXJIiT1urpQluuag6faKOC0ThIHYK6tOs7DruKL42WalVZ0m0wigZM%2BF1LDh4Xp6%2Fv7c93wYtYhD&X-Amz-Signature=7b5c742ebcb995b6e6e4dc40bd964a283c36175a053580eee444df6f34c11f9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
