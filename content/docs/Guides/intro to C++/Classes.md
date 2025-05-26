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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GVGXFP4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCwaMSeb2Hf%2BbzhUzeUwjPYeg8yIra4oeIsYIXDEIbnCgIhAPoHWB1XDOJtZOrroTPHwk7%2BWo4ZQiv7jA8wKjcJsvvUKv8DCEUQABoMNjM3NDIzMTgzODA1IgxSR3peqOp3r0YGOD4q3AMzbcZj8OHecRYnGFmV4O7mbmNs3H5q%2BPCrwKHK03jlbLA%2F3JxnGXcMR4JZVOLPw0jPvGByjID2L9ovrZVfUYo99GaRj5WMsjDRbi57wjLOcBmuiPtNoMFQIahUlJuIwQnVrGlGKplTy58Ur8ARsZ%2F3rHjRrtctXNAoH7zAYc5hmyOSCCg%2BPjn34BiXFWJhMwkSv5pr1Eyx4ppk3et%2Bmajnyuh8A4ha2eHdw7NKINg4CAzOpaOeun8W302RL8lYN1c9oyXWC9Sq%2BX2TQGjKo3oU%2BurxzB8TTCaMit30jsbMh3NHkqhMgEfFjJv%2FTCk4uBbWXvSoJEcHxXAJdCYiSCWBybZ%2BITB%2BQ7sUB%2FjxpO46nXiisgJ3TQCJ83HFSKJCb54vqzrvgVJRaS%2FNB1RAk4LAMlXMexxFfn%2FSoHfNHCJNt7JxpLZ7oxqwB1VBJDUsEeItaXJKEenLQUes7ApRdYcA%2FJIKCptxUHIrNko2MWAzonU%2Fxl%2Fq2NqAAQZ9WmGJUizaDidJiUc0TBToH1UepJVZOLwCHJRtw80pMSiAwD8QPk%2BZ7KZsu1NeL2H%2Bfncxd64Qnajgq%2FZnro2LHZyjPCpHS98AMfh0VFCOEIYs2xgMQFPO%2FRnqgy%2F%2BGYERLTDzqtHBBjqkAe9ZVKnKCssfRhFGbHGfEaVDHUqhQ%2BdlS3mZoSwHiSiLUSza%2FaQeUxxwyPGW%2FzDrJvrfGZu7FRg8ob9vmZ1rnsbxEReW2D7tDhfo3JpJl4fApOFka5TJ%2BWwrArRgV9ZCKKKyJauF3MFGlgV2RS5hJcdKvs1cgrxBcVz0bvSF7rZsEfbkPwy%2Fvm%2FyIfSmCooaOcT3Gyjn92QJTiVi7P4OEd6mUkne&X-Amz-Signature=7e931fe717d9e5e30587d684be59434531ac2aa867e1e0bca99d5eab5876db1f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
