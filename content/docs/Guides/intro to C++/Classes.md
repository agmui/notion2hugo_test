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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EG363BX%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZMDHODr9ubBWymxnvva4J66fwWXcychDEN%2BSe28QUTAIgXPCxdwW%2BWArjrQiCfkcpbe4Ryp0%2FUXaKd5UxS2GIN%2Boq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDI2pVnbm6e8BxbWO0ircA8MQ9NdmCufckiC3teDVJKLac4PtHOnC7Ww6C9w%2Fnaw%2BhcElb%2BBWMQ0BbliBMpOji662WSIpKlFEq2Pxhe3n8%2F33EX1IeqvZCHHA6xaKhHflniJOGFz2%2FV1pmXccoRsYREnZx%2FyTaTa3X2cpB7A%2FlCEot%2B1%2Fe6QFpRvbXNqM68EDDXwj2zrSI4iMKSdVpy1D8J9jNoWgMnTP6P1AcDKcxYn4V4KPVrLTNzidVo6lRNHvXdcF0AJJ7%2Bwu2pLLtqMW1yJf5F690HC%2FhQeGU3EikXY%2FjpUHX9VSRxXNURLfIhnKxzePtikFprMAWrnmnaIL%2FzlD6CVVTjt1%2FWDv43%2F%2FvcLvM0KBjl6Fp1kadfY9hmlvE8e%2BZip2EKl7TxxuDSvp8p4s1vZbtqPewsQcPvZFKD6VtAPPW7PEUlZMSYtPMph2lIXb1ywEy0WWDUqkCrGZDSD5vJ3OLfx52uPU8sm1fj7daRSkIqnMA5%2FIkw7rfCzILkYpQ1bwHMK18BGsvwc0WUuBAWUt6n48i83kDUqUWb55kat63TRF9esPTYvOcn6yLIzr8rIMDwKbB6lnRaRhtQu%2BYER63pPXXJrJ1SYpTZwhB5P7xJebtLxc9okwp4qzNQ84%2Fr6hnSMmQTZvMP%2BE%2Br8GOqUBTuYR25rdhuH2gGWd5ql5QXmMKzYW6goq2wgG6YzTuZtvxszzUK3fKog0DpWG4esuz%2BJys3ih%2FB0z2bwzsbTTzn51n7gZRg4e3HHJb38%2FEmqiPuXaUBK8tffezh8I07ly%2FmeRuxGDEPgTt0TahuWTx3KyqyLXVPB6mSNjBkYr50HG5XEOSOl%2FTFNk7K2cCBrr1InCnOsawW7U2uJULp3AExh4BzXz&X-Amz-Signature=15caee21a82c0110c4f27833d5da633edd4d1cecb6f9465279584fcf648c6c2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
