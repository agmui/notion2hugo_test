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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY5PGS3U%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDRNHRSPfmUAR8c0BK%2BX3vM501ILYXGHRVJ3gmXrsTMDAiBRM6v2fzxxMvK4kjgxkStzINo2n7CpylaUvTtA%2BWGpSCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmmE7pwBODrNgVsfZKtwDtVmK0FyzOIi9BjLNHHo8RtQpN503onQ%2FsxqlKt7V1V3MLJW20HSYfGz%2BQcIF34CcU4fLCu3rDi7v9wZHRick2qTtsQgB9PMhp2LKSPPyp3Qo5EzafVUtHHtEQFW2HDPYR3gthaRYRpjlaM1j67ETiDZBUM%2BlL%2BTpF%2BxLwHFPnCGDH%2FdjpFAeTvuyAurCkyMOxr5L1mMxBrs0wKcPrP9uv2hN0EvERAvaFOnIYGWUYWVqBmFxob0NiXPp%2F0T2NIMKCuqtlYTM%2BK25H2iGEcloULW0WyrHdo%2FceCPxYPPtQIL4ex1y%2Fz0KVlaFAMMe4NXJNxNe1RM%2BraENhFTXdD7tqAz5o571hCH%2B2ZkP86ZN4UmaGG1R5hclk%2FIFqVe78UUh2TRkne0cvzuvgv3NV0ClwTzSfhQQbf6Y2f2CgwdOCnW%2BiN3y1dcNZquAEoTDxRvI7Q%2BNv1753V3t9n2%2BuTrc2JR1nbuCwqqvKMLk0B%2Btd2ESXuE9MZx2RV3gF%2BU%2B6UdX6iT8aE4zJVvSJwj8gO%2F888yE6VBdaIXDDrsnMLowsC4ffZ5Z7S0ZeFSYV%2BkMJlM0OUAgf7rvl0cn1ZPnYKYQHxhOtHdxIJBLFvufjxHzNgJdlWvx1627NGI4GScw0%2Fu0vwY6pgEdAylMONsuUap5NyPaGu6xa2DlAWS6SHOJzO%2FUB4iQfJmyS8WFrKgAYde9uBGs%2Fs6WKUU7dFzJTNgR7DsMhA%2Bt4GpQeTpFtt0%2BCxE2059og9CNMuTZFf7Zi4NXh8ugUi0CdzVrb1wlyR8N2LTu83t8t9kValeTcjPabc%2B0MWak3bN1EvS5B44geG9HwGIGNCDRQ2op%2F17MxI2rmwi54tSN1pItz9k1&X-Amz-Signature=d4302678552cdbac2e34a012b1049a5b8164534ba95e7fb595ba5f8f53c3af14&X-Amz-SignedHeaders=host&x-id=GetObject)

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
