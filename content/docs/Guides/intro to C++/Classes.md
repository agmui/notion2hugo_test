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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KHNOL3Q%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAJDXw3dY8Ep9%2Fwh%2FwGnnHdZOkKQ2Y5oas2hBGdft%2FgpAiEAwvqtOifkMYmkTZIsZk5dSfIlfi5k4OXvh5kV4sxGmLQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCY%2BNf%2FA5C4h8gCqBCrcA7Xkn7gA6%2FuBP6WKtWxnagOrSR0tG1j8u62Z3g3rhzUr7OUW%2FMp6%2BYo8Z%2Fh6Tc0vh1yzSL2R6MBIs7DRqJQ0tHiwlZ2MQ2BDIGzcloB%2BF21UsI0GQ%2FcmBUGeT4G0kHgjWy9NRMO%2BhQl%2F%2FFk0z6t7xE46npzi3BqUoaL%2Ff9Kd4nZdQb5MitsuaZhVq3WmFBpSC5MeJPGE6BqtUgVaYuH87qAHxTD8s%2FdFhvNRe95%2FD6H%2FFd1m7EmF3RGMzeyToSIPtNx0UpO7uCrmBgrHLKIp9Ytum8iLKDRywoXid3aEg8IcxorDHTbdEh2o0hbbimy2Myppph5I%2FEeei%2FbwkCkaz02Ana5fgk6b%2BTR2N2M7aS07JutWWo%2F5vR4pOaIBP%2FjYDNsm3aMbr5pfgwoIQQV4viZ48K9DTtaLI7GLLWLxpe6UZ3%2BhLobUbETFcbdNst3QAWwEUIrLEmADqbhg1rueGio8%2B6HA37oCXVDUUIDuLxnmHpNyYa5ze%2Ftpj68lTKeEaNWIE8WdbowecLGKqczcpT2mnQJZ3Q9pYE62jDWP9VG0tYnufqFRVmss6c%2FZjo0v7DXekTkpUyDsbQ%2BWZvfXtvgs3LRczVxyAjj3DqLlBTAQEs1%2BtTu335PXnfGCMJ3r28AGOqUBo2nGRVJaFc6xnm6brdPBhNH3%2BzxyWJAIcabAOOTQ%2FTnDRZpYYG7KClNbAZLU%2BGZWZsrkx5EUlsTjtTGAy7nn217ftHtrJKErc9i%2BN%2FPSQCJriOs6k5cCXp2qWSEw5NuneU97NYqfNR1WOjJhTNSl8fdCV6HU7C9JCdZzX%2BQmiVGSPUOSVdDMU4CuYZ%2BrSYEYKpaBZbVPfon5dwJRFtAlZs9uhHip&X-Amz-Signature=1dba3b43ad151d6f50f04d95f44612dce8ebb9d8cedef8d03cd8ec9d58e9882e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
