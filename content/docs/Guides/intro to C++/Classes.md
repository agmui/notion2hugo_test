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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AO2Q25B%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFw6m2NP%2BORuS36sesqtZlpcVXQQDfKdNng2pY1zSjKjAiAhOckGDxQ5D2zTlBNJtqfvaHvmFXymTsqWHmST4HmKnir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMqMZtQ%2BngZXVxcqaeKtwDaFLUVfYPV58czwR5MXqfP3QvBg6VWz89xj3%2F%2FGZutRe9WnWeBTStH7rYZWwoo%2F01mZrAnV86Cl7K1IUL8%2FN3SYhKevw52%2FVKN6b%2BuSxYdHvaWD3lA4JqNpLZEBCiPK5HqeomU6FnMgqeiZ3q6vEUYvrPQsy%2FjvBHMOg3ECV2ASNBPu2Hk01Zm18ZIXwkYZ52hy3Tw9XU0RmI2jLMfgHvClBcbS6E117nXNxb5Tz1213rXubmSD0w9UK4eb78%2BvWn%2FYl97uTe%2FulxxIp310xm5zGRqiKsfI%2FKRM1pfwJK4rqNnYJIxLHzM5r8gmwxwOoFvTQaV1lBkaaw7D7%2FwAqxG4BFh41%2FMSdeKVOUIOzkCKBcpGSPlhf%2FgI7Je7bF%2Bm6JZKz4ykb3rzlP2mDprrGEpcbq56HhOEQh1AWAsL0UhHEVb6AQWMPAgRHEOULvGIztdc3Dhgn%2BFZheIwEU6znlJ0N977nIrenqQw6G2YdG7CmuGRasBrRLvMbVJjO5iQfQfv1v7vQM2ENx5olrlHbVTz68b2Xd%2FSLDRwbutk7Kq%2Ba9kbA0Mu%2BT0wpTPXKNYmAqTMMRGohqEOWQQ2vz2WiMIqpUBmP9zGnSshLQI9jGczGdZ2dTLStn5Nnp%2BrwwzPu%2FxAY6pgHMhJQx2nwaJrd2tKLiOljMylCGzYBugkxft5lWFxAOmGurUDe7XbmDDqjY%2BoG9caI00WLDkgxhZ5HXX54vWD8r0lN3YLsE%2F7VAmOcZRFgeiF9%2FjccsefXYysmYSkkeBoIC5x4SQGbCSwJsH8FQsJMvrWYbnqzZc0rL6IXY3lcVF%2F4OXTkZV175xKd1jJlLNDKRUwhrG%2Bv31ftg2vDFJdpBxWtzry4y&X-Amz-Signature=b7ba6a9b7d44bc203a9c2fbf7e6c22ada3dd7ebba7d02b38725d36168b6bcd01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
