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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPSRJZCG%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIC50b8VbM9D8wbNLm80UpfOTLKqd85E92yuhtKyNRanpAiApdYOiaemHWKvHYhk%2FZyHTq8Fv3usYf2QwwN7OZNsIgCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMWZ2wKBhQI8uhD7vxKtwDHAkPTndJ9K20IR8fy65yJbl7awjB3AgwkizHy5gZT8C1OpLCbvom8w3PDJGT2xO0W4l%2BDHDLg3m%2B5wrGf%2Fyq%2FCBuBUiG86HqjOzSqUrsdUHMzu%2FsCoA6PvLY9XN0nJ%2BlAdG1xmdFyeMrnqLgG9T6%2FOTaoWfYYhH%2BXuSpscs%2FopxOafjY8xqZaYvNtI2wZ4UUoVvk6OxxzzlRcfuIAHqyopYwA81pJk3xL%2BCm7y8WsHilbLsY4FQAPV16evS67QAUSeIQqKup12o8ft0CbAbA6f0%2BR10j9UC88o1CBcZ2mOx4yXcHJQmwnUNXDGtXKD4Q%2F4wQF1ORGKLgxaZyZCthE9eJbn1KI%2FoNsWEWnlCbl%2F316QdaTSEnAxp4rEdCzxZS8hPQbCRTmsKCruDTHsR1jZq90CVopb8Ok1YWppuN8%2BTjO6zVwZKYdZfm8YRXvqGjnxvm2TO4ZCxLhaO9CVepfJWsXTkMMBJAMZYfJ6kUCISNyLo%2FYbLBIvvI4UmR6EbVyd1DXCOVpTVkj5U6nl5AtDjIvaJa7vrWRDV7a3uo%2FZtY4VdhTON%2BfWbFb8AP%2BSvkk%2FFp6gPBsy%2FvoFIFSdDO%2BnAinqsTNnfVs%2FD7m8Df4%2FXO2QLj64QwybYzRtEwpODwwgY6pgGfoirlQRUMko920CWjfaZ%2BHTIsMbxvypJVb06PTffBIuQ4lG2Dp%2BgZ0j7GSLUryvHmNlPK%2F0fFucrHJ9%2BZfD%2FVw40lLye0PZf7vnONU62nIK9x2qKFfb%2Fkdp6747HAOqNpv5ewcovaltUwj6fCN3thJeTeq5Jh5KvaEodTg92rnkkfdYCEbr7fXFeF%2BwBp2%2FXn2zu2FetgDaiZlzhRU9A0fHm7bpBR&X-Amz-Signature=75e1146f183ef2d891ed8718fb83f092856a897cce8f1947f0bbfe92530179e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
