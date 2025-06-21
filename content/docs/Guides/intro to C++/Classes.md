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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUDEVCC2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoYhkAx%2BsPidjGhadLhWiV6lqg965n1X0%2F7mwkUTFRBAiEAyuCq8cnJg0NyFQUfFKTV2jWHJ%2FZjfAldvSyA8bWTYVIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSt5FRbjQQBe6ZFxircA2MSLiT%2B%2BE5k9yCw5VDJAk6I3u7wkM7HeWeP8MANUGqW6khN4g3mCt2gvVx5vV8URIPFiTPyUA1ZmWJ%2Fp3dWp8K1LWiWW63w11ZIonbGTDsaU5ZWs1i2NFUZk9lqggYI6AJZm4UXVHTM%2F1dmxkfR0B%2BPdeDcDookOqK%2BejT7zokZNviMIBdpYmnLhPNhR2VKJJeazMRwo3nLlsv97VlhR94bXB86egH133bsvI7IYyN1N1vPv%2BAUX2oF5ljS74tLDMAK%2BXev4ZtgewwARnPMcy7sLCLIGjAUdYlS2ls0kcMHfF%2F46xoYvJAvCmIPPVJscxaPBcs0HT6G2Y8YpRVcX3%2B7XwrU7kC%2FM0MxkoKXNsDZfsRcShRG9AhuNw8ftKXlcaujKCdYRbUxbBSz2FUItMg9X0Z5uqkRqHfVPkD0zkOrzqWK%2BYxOIeREVbepq6LEuDbLMuVYsYmfu3TNt3Xml0ccnmad8%2Fg69kYCSR46GzAOUzemoNLZ6ZnsTw%2BegFt6LZ5miDBp%2Fkn7IuKH7YuGYpt%2Bi9JhmB3T3aaXXLHwcj2ReSZmwtS4bWyn%2Ft5DnceRLUFBadhHQ%2FrpzJsqMHjMuAjhks0j9FyMxwi%2B0kY7Dpz87J%2FvJrYHpWG%2F9nAlMOWo2cIGOqUBD%2B6%2FoPWA1wo2Nuob2KJsii5ITbbV9cubrlAGrCk5o86MpWLwzGe6fiy7MZlhI32v3ODAsqtl2%2FTV%2Bhi0yD1JP%2F%2BBSQZCBAB6238sIcdTNZdKsYIcTlL1fc0xVMoXXWwskwhE%2FpgTg%2FJi99m2acqy7sio4lKl04VKfPFyuAWcmU1QhvkuY1bWjr%2BffIrPgMFBaAfUoyuwd6xHHDOxakWqHiUkaeKi&X-Amz-Signature=8fd99b380679bd9eb2d1a0ec00b9b22033ccb1d20f07a09b963c3d803b20ae8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
