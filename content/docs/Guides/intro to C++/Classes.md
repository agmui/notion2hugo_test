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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQDWSSSD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHvxDy63DdlMieOCsEwX1JppgCos8g7apIHh5wn5CkQ5AiEArjcul4sJ2NCHKcUAYd2rkbV1Vvg0%2F2GfO3aB6gtMKIoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANSMO6LP2Xknxp0DCrcAyJGvOCqpRKH8%2B9%2BSzImW18xZLctmfG5vZYjUlygLtot8Xu6byNJ%2BelYqmwhsCLyaWiCBY797LFy2jF%2FBt1sppo%2FL5PT7aUOuYf0t3gxyoPPBkSF5UgItuQ4iHkxvMb1v2xBs7bJWf%2B3F1W8v6J%2FwFtQs1btMg5SYUdeZfIOlV14GaeL8JA9pBip8AKc3xAR7x5%2FuKDzbIsRLsUtlqyWzQzG%2BZYabTbCsJbFwTonyiNvpe5mxuWRRYKKZV5gEmwJ9J1hy2UP2uZtu2phlcpBmMlRMl4Onfw8BxGuEelbJAIbmM3gOiExMoA1BtQ6q8elJ5PhWXdmGyKsZQqCPE5N7yUfdKZtlvbc%2FMsEIahSQ%2Fe6hSyrxE7UThlGvvD%2FHfviL9NO7tY5wdhfexSftvbUmnjZJuERNvp8XyAhyq%2FWHt22hn3PTfbIV%2F0Po46w0PmTHGn6E3GL6%2FMnHMmpO0WZFu6sVE2j1I0leqqYlRCATjOkKx%2FYiFmosHjxSNsiaoQSU%2BvmwdCYNPl8jnufrIbjfxvEhMCSeqVptuFpcp6FpvxBEHR6b4kE4Wh8Q6UVH8yHmlfs8Ruk4I8paZzQGioE5kgxp1BDCwPoXLNQVwCxJmYAslB0A76pxI0YWJs%2FMMGXx8AGOqUB%2B5ljCepNad568Y0VtdG1RZrZoHU38vJNoiUdzqx0TzeMMC%2BVYHLWuMSWATZBMfkC7bFZsUyiO0UNEE%2FBIXbeFzHhnJlXk1xV%2FfAkejUQM5IDdutyjMqlNaZK69PWp01X5qolHqiuQi69LRQeARSSrzFTDfpjpod22emSWMJuyIFYo%2BHUJrf6%2FcMfCaPSat74DC9zzSMFNWEo055if%2BcJHNt8KxNR&X-Amz-Signature=824a53298fa3fecbf80d3d5663dbcf947941217861d188bbc9eb4301fa7fe9a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
