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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IX75RSQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCICNotdaUw54xgoIx0qaqRkRpYcQ4yk7FTAx%2B0%2FxAYYh1AiEApI%2B7pEsfnLFic012Qhcg4Z0LkFgTiak%2FZlt9T5tVh%2Fsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDOZ3c1Qb%2BpgnmHhyCrcA72hk9QCgpJJk2K%2Fur%2F%2F7w%2F2upOyoyJGCjHJTBWS22puerN8Q1YKm%2BBJH1wgho1TZnKYCGMuz2Sb%2FnbZaOLgfXxO8OWwVu1ICc6A7oLrKoF5HzMAzS2Zrl8HrFaqvYmFoIM46zwCI4YfLnMbKVcXLf4jisUmsB9ulXrPT6wGbAAwaZfJ%2BXkmE1x4486NNTkE4dyqO4ETgrLuR1Vc6eilwJfLVG00x82hq1USiwjoXcCXHcfn5DOYPNfhCYacSfFEz6TIA2kZmME87ETVgITGoKV0RYvew7xIAVvYR26PuXEiWY%2FDVjbhvX4Zyo6Fv7yuaIGlFtlPilavB8eD5jEfvBUAaE0yXv0PHq0d8r84%2BYiUWBH5knlYcD%2F18dqhS335JiM90E07V2XuD%2BXXvptivMD9qZYUp3fMNiwqK%2B195vqC4F2FLIrZSLjQqJUryjPADDMwqroOWWRZah3qRkDacQSrn%2ByLNjJFbqdx%2B4VF1Sm2QEmLmxTP1e7wdKz9Y9g1RtlDawsi1YDTwJ2RjDRdRKnnhuW7ZrCNJo3MgiFOyEGHq5wzI2gmfKtX93kbP4mBFcXidUHNkkMTjqQcMDZckr1OPmJPatW6CLNLvcYbt%2Fq5PcRnRRTzqqKoqRQJMOzMqcMGOqUBN9WozeVfusbFn58B%2BCbZ4lNdc5quT6DJifhv5jcsppo9OwfxoFJSKMzBBWi6BQ6THWydRsR83wOLYd7QI5y7DnfbAc4yltHZpHcfAeiKDvTd9o4ES1hVkVlnzbyPuplZC80%2FZr1xkJqHj5QeeJRKU56sTRPv28%2BDLTwylq8Ppd5MtrKQuvRxXrF3oLEOrY1hCToIL8%2BfrejYqpPRhwIWqSsvCWMd&X-Amz-Signature=2eed3203ea68b46ad2252ca66df6934a91e74c602fde9f2d9fab73bd31a07a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
