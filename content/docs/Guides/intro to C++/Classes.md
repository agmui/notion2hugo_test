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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HI2666I%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElJG0dATytechFRMt23g8Xkysetgm7%2Fsb6TLPo5k6qWAiEAtTS3jiH5%2B7yGO4%2BMfTRCvERm7maaruWbLS9%2FsY4Nt3kqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGd4ds3kZxVBDr0RjircA9lh0nYMZ5vEBtzS29FwuKw3vLeIadnFxHwePaky6ht%2BTNOLcClLJ7TFaIFTI6pbyXvODhZJET6ygFqMXWEgHTuAqUA5y0ARKOMtboVcH44M6drxZIiV3luCiC676F6lRUu4QGgGxNtIFM%2BXPODd0SzFg8CcECnLsl%2FdYopTHBqdTL1cfeFANUzg14xUpya9dpEADRRB%2Fr%2FGJPft%2FrNlq4UyuPZv8Jt593XN6kjp38C4FY9BWYTEROqcEPYLMF9Gr2urQkOSxFBub4JQ0vhObzeGW255yxbg1vgqmJww7xrzvVGi5mRfZ4KbeGORsnbjfUeJKiZ9huMtRoTftF63KB210r6aeV%2Fz85OzLPdw2B7%2Fc0ub2QfskVGgWLDp%2FMB91hUVZoHO0TxGI2xhrtqj4MhK%2B281Ijelq%2BYfYAaL2%2F%2Bd0GxodnFVAX6kO%2BXfv2tf4%2FvHxRE9Mebzp8DYPOS91aZuAZ7RrKz15623DAUro6cLuzhKRNPGvGdB%2BpfMJbclxBeEi8daGYCIK6LIEyRAtDkdr1he%2BBnJWkC7Q1hNFUvjzyylyhwLU81hNh6hGmUamnNVCOi3xgqd31JO1DlXKipPrEPtP7mBE%2BC7fCBjvZJZ8XugqISUYd9bhbIKMLLFusMGOqUBELEqpNMJocMzDyAQFteymVRf6VQx98xIPiaKS6Xn6e53vBoAMXPxmngPql0zfExrOPn1TJryKnK0X08hHxwNFECvpJNC%2BnQjYx3xLEd46GjmBMpZE4by2GJJS6ESVNSeB%2FlY6bhXx5f%2F%2B6GZatPJzk%2FpLrkgE%2Btiz6xem9NSNNXDdjuyIesUTYeLYxCoBb4KsMDbVFQTCGHCc%2B2BEDARbT1Gzvpa&X-Amz-Signature=d53f44a96884dd96c62f8cef935c9224ee3d0755b57c51dd7ea6eebb581ffb46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
