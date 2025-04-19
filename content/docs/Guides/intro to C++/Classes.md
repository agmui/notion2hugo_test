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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ZHM77N%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDSsNdxM0vpwZYBFkQNZok%2F73ZEQ8L6KJTMadf8QmPa%2FwIgIsoU1hanXv45DKjlbb1tGNnKlHFs0OQrxN67Bi5yFIwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFjkcLsDD%2F%2F3pVdOircA%2F9pdF%2B3AVceZiF7tUPl%2FBNEqVbfDNRDNUcnQ1hxMn7q%2BAsDg5yHCYWCQpXJvyV0ihsg4lDGRj6JVG%2BI%2BctYE557OCvQvL5M8IbI16xN4N%2B77Z9IPzznT3qZnnG0776vTkkSvkU%2FiG6T0MDBjhEYZaz2WDTtKe3S%2Bg2C9ltZb3LYK2LFbA%2BjHMbR%2FcxQHkKvkGxST%2BoWlJGviVXOS%2Bgzzgx1VZT%2FkWnk%2FNroIt9NKj7Rbblr7MMvO7m1YpofbD%2F2sHuYtaWCJvFsY4CGu%2FAWGBs%2F2PdM0SHheMUAeHQ1XGT8TUfqsKif9EPwuzIMagrh7RGhCk%2FpxywxrhSwJmzlwp9XzG6x%2BZp%2F6CNLCDm%2Br7boA7RtuEDjPmVN9ekQ%2BSMs2Tq%2Fwxf6H5ml9GIQDPOWljg45vsDsy7ezFnbhh0foBDiq3h4cp6fGlsMWer%2BfH%2Bi1hIVCdHwtS3EqWxntmAcflO7Juxm1epeKQMrSm8%2BdrO5hzcIuK47FZLLUKNREEjluEM%2FR9YcPbuvzU96oZyfwsnR1nw5n001RJDk%2FGwaWYuw5hOsvfY3Oubvzq4hdwaWmpxGxiJhEs4gCgSqb5%2FfSJ7UHGYhY2EoZCEbqBHbvpzVPN4kMgAOgCNqOJgpMLmgj8AGOqUBLoaNEBhMWkK8%2FgwRxMj%2B5h5KNJbF8NJkUPKGtTeYrlS1Tv%2BEmYxlpRwSo0wVQxevAo1%2FPicZotSCK5P0LW9xBZ5bHRI9%2Fl9y9OYqlNlaHJzKhvGdgeKPSLEvaO%2BjuOB0lMHc3zSv4FNoo%2BwJepOv2kLjAi75veA2awQMSWrzi0dU6BfC2Cbky3gYNZebDthfPHf2RVK4QRkWLpSkaDa%2FG2UPOWL9&X-Amz-Signature=a82b4e1570d1393e80cdee8421aee472a8ea63d2ff1cd24c8a8836216308a6cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
