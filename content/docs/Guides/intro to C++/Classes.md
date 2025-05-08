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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MOQPBXF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtDgdd7Ce%2BhHJyTP2QYLQqU%2BK8P%2F53VRfJ%2FrCA6vUCqAIgS0JnpBgMZpgjejn%2Bd4MkqBy48Ohzns7RSoIkTkZhOCgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHMuS2DC7JDYZ1V%2BpyrcA5jaLBQWwb%2FMV%2BTnBmZwwYQ0o86mkZRdbUP6TICUYkRbaEvsdmuDts0tOVQAeISqWZ872coVVgkS9fDKmD8%2F9WWvQSS%2F5Smk1IgSzG%2BCg0rVFKmaG9cPP0PtMb12I493CInKAwTi193qECGJkeq89VmsUa%2BzVsMn1KzTrcxOBJvbLC4BB8nBv6bZ7Mrv7zoFZDVYf88WLjA6S33IzkSPStw3qASw7Ozu09TdG4RBIZsYjeVIMPtSKv0wlGjvxvbPYFDQ0fw7jcMDDesqVZaxxp6eUysvQPw3PGnAWGUBe0uOfdb5mz64oUyHG5DGuqQxQ2vM7jdmkOk59f70ZJQH4Z4VIzl3B8%2Br%2FD0W%2FU2JhwisbE82v6gz5WLqXpPLYFQHOkmT%2Bvn0aTmIVNv6Vi8CTZxBC%2BWA8AM9TbE32%2B7Ste%2BU8p8EXrYatPqo04R0YSuxnTXSQRHMKak4sFamm3bX7kTFbGDzL%2B5NP4Nv%2FzbX6ZmikcNMa5Y1mXe%2BAqrw158cmYEysVN9TKJ3nlJoylPKAdVLgYfd1lk9oEcET1LlJdgtmyjl0XbWk46bAqvui9j4zD7T%2F1DEHK7EBw3o%2F7RZCQrYnj%2F2mG4NYIJpr0%2FYLtEwjFhlZ3ft0O4YpxL9MP3l88AGOqUB%2BwlM5aD0qp%2BRXHVeYmoH%2BS%2Bd098rH32%2FxaBjGjgTHTWqesSzUqggI8SSjipMCB3qDaDtt9OV0q%2FcBLUArrxIvibVtqr2yngQm%2Bc0fbnPf4UPjT3RRrS%2B6JowX3rrFfSgTijIWjwNUNgerGVXa0qpLZrQsv2v4sbpmCa2ItNtn0S2RdvZklIXscYeb0ugTmOHBnZkjzTjTBeCzSKkWWLvYRvNQubi&X-Amz-Signature=61cf3fb4c4881b4bf3e807f93898878968e8778a7b54a9a677eef7277e1ccabc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
