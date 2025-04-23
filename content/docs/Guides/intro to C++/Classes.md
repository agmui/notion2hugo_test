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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6DSRLNA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDOJgvR0581WtxwdPZjHxw0IFFtlWqJXNBcshvK135UOwIhAK6Q7NZ4n2AB6UkGr7J88vpLrutJWem4KvPPk5ixDpyfKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9nI0QA%2FzzbrSdIs0q3AMK3QxQFnOIO%2FYS3xta%2FtmGa6f82UYj1WYexFtThqEKw6SL1JdmlqkFpOXJXCI5lSoCJUiHxS3lGRQfQmDydK4EpBXjA0QJsfqzeoi0KVbB6zdDuoz1FdCyFhJ9gUvnCFhm2JsJokWRhtnPeV7rIisVLTACK6fChSvfNGq5j9DTDYDY1VJR664ZtQ4r%2B%2FWFsSF8wA7L9AQILObZvvtsoi%2B0v8yU8sS4LjFstvp5BpLORs9durPqX%2B1FT8dfC6FcZrZvBHzOJalnTONxn3vGZVnCsmIN3YZlEPG5up3sBChuWEA74U%2BbREZNVK43wZjqMXURBH33SilTGAzvrT09Auu4369g1wpgnTkLphl3BEiEy68aN4RK6DekkAggMUww%2BFFvu%2FG5dtRBo%2F0l5Z79wuYSMMpC6XtdMCcbbkgqfqnfcBydAHadNaldg5ikQBU914dAPLM6MEBY1jh6JRZF9zAG%2B2%2FdDxx9kcBsyosuSbzH08OMQWHYo%2BPmtDHCqRpycNYVYzF%2FeIMLoxQ%2BoCiglSZbnGDfXDXH2yMDwMxczypM4Kki9khOvs1DMAGH6Nr8NJcd1gccDDggtfCtDlbsJnh9ApgB74rQlopW%2BTBwBM02UMJQIBkfOQBDWuznjTDV7aPABjqkAbxlvKR3Z1fWAIMomfBbVVGbP9w0FlehqdZcfP0Wowx4W0ce14unT1Hkq9IXJDXGyU0nNPpHVpTbi6%2BooOZbxa09NznY1HkkNbpAQD7wZFTSpRRo%2BCAHDNaWJ5IgfEKhTl3FVH9ShdEV%2F7IKx11fyZ78j1%2BwQrhrsbnTptFMaOiC%2BIB0rkSlWGlCt7FDOr1dDuXKHIPeYDcqtmIhAwfDRTB1aFON&X-Amz-Signature=ac8f5b343839018eda4a192b272e93a2a80ba6e72786af359ffa3bf58a49602b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
