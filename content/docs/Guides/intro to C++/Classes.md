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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSXAB5BB%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZqSfCjrikvpyN%2Bzj4EP%2BU8aMwR02gTuFCtD6VAMQ2AAiBOx%2Be8Zn%2BebMLgXBaZbKyiMcB2%2B8Xc57X91xNWliQXFir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIM6bQBubBiTkshWhnpKtwDInf%2FEJzKPd%2FhRo%2FNAghIU4piyXgUHPURKH8BFJg6VOq%2B8RBqTP%2F7lKiRit6mt8G5ZD68Oit%2BwQCVwMBsD42Bq4TpuJONsiatXKqH0R8VWXe3HrkM1JM16gTzIG20tpxa1JuetgndEUraeGGmSGTwY3F%2FHavT9BKpbzpP4C218LVC2PzdQ%2BMTNRpiUuTuml2czImHbGAWBfgrGSM3jIMCV6tKMPW12y8Rb7iQZlrqDTIlGz2WcJQYrnEGBeTLj%2BVPI4tjVqF1%2F%2F1JgdSqSwRvzARs3%2ByrixwkPhsJQ4xwdj4hu0yzCzP9P9WpqekUbkEITSqTRWwYkTdXuRZuYhfzjgub85KJylgmeMgN6BQ97uv9V5Q%2FOZRhEyg5fM8o3qchaCvEIrldKEqQ9HbSSI4hXFlK0qSiIRImxOzE39e9mZ8q%2FGM7W49rKNZgFAKWqfEDotcW1NWkQc3nJbmMSY9PWbdkJP%2FZzFt1ZFP7KjVAtQd2TqMgleRVIrQUxjUmGzrgGnPTcNF8jCTDQfLnSmeizPTMZWenZTafUgwQBFrupiDE3054Ms6U5EgxHkTywp5gETF93JClDQsZGQ0sWliFAr1MA%2FFCX2FTmm8LXuMPBS7STijg54B4YgFhTBMwk%2Bv2vwY6pgEBbLFGScHPvX1Y5Uf2THC9otZrAQX1CETt%2FbCwyaS4dIjiFQoONtn2pa7Y8LUI%2FFRS9Rh4PcWVd292BRY9bxUl9%2FRFbPhHdCCT%2FsCJCn6p3WTRDbP03IowPG%2FYjHWIZV96blX%2FnwwLrWLhUe6CpqWMTaXaZ4vWo2AdtqY76JGZ1FLmZCn4aMSw6b6EJgQlqnghNNoM0sBBhWA1sKBExOQmg7Tf%2FsiH&X-Amz-Signature=8ae4fde4c5ac73190e05ddb6c6418ed22cf50f8883a04f2788167a1f1ed8d402&X-Amz-SignedHeaders=host&x-id=GetObject)

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
