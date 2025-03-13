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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R4VWSM6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAKsaeQwpertCWLPFPThpzNm%2BjkouEHmlITyiQaOGxcQIgFltJVvLoVlaFWESAnGxnnTnuVl1sytziUoVVp0Dbk6kqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBniHWRUq0k3JaMArCrcAyObZr3ssSG0%2BrUsq%2FCVGCy4voCyIalg0mOlKzrMqD8NZzZ%2BwCHTXT1RV2xtDXvZ4zC3BXhIt3bGl02Bm8YjlagXv0BwiiqAUcntDetovgccns3B%2FNV2JnZRxs5yPbji8lkPe2y2qffzx0cbgamPqSsvnwuTEEnVQxeTurgESDS3X5ldi8VfD8%2F405JjCr4IamVU5xENWljj3%2BX4fKHUk8%2FHASs6hH76L3lM6y7NQ2%2FFM1VTv56t%2BABkr4HBXwSse3YoSnzx0eTFJF3Z5DTMJCyAJccfFnzmg5WDdE51NjytOy4WiaG9f3%2Bi1jwbrmlvzZ9xQPeAG7YxQZWlhGd3LZ4OE6e5Yzveb9E9zf77om2CL4BdQIn5WMAeAtPhqcoi%2FpHtWjgYqFyMf9iobrS3IKlI0gKNZJty80oPat5kMPqu5TneBtCgJVlN7U6H1UoQY%2BPKSYsF7pBKv6CpuVFy2z1C6ytsOVUUPoXbmmzptT5VTUxd6UTgu%2FEl8TbqG60%2FaI1kdleo0%2BljkKsGk%2F6LbhYUUL8Rnll2qxlSXzUALs2q3iPRb5KekiJVV%2FXwvgwXcxuGRt%2FWilia3yuzyZ%2BmNRPCe9Pqgnlng6fK4o5TN%2BKqlhB0%2B7Ze%2FdoOilboMKfhyL4GOqUB3imS%2FHJqkSIPoen%2FEDPfO5V9HKYVhT79HXNpFpx%2FrxnnfebSyN8U7kUa9N9fwHT8p2pY%2BdyjUf%2BVhygokmV90%2BAhVv%2Bf%2F4GMvB2HdlwqVJamD8WG375hityFm6WiQ6uItvf9jpKmAnUqsadUyxnXeJGMmhN%2BIH%2FaboogsDSFQkx8zHaFGau5XhjX343ITzOOPGDlVEInUbg0KOWpBIjsQS%2Fe%2FTSl&X-Amz-Signature=3ca6eb76a1d04c310d318c246894491dc71f4e6277353d535306466ff52f39d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
