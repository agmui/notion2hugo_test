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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCNMG3W%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1vX5urgZ02trzc1TmRU16XWdVcBy9U3LbilAx1CpHvAIhAINrNhoXip8vSjQ3Vlbo8wDiAF7hV7t7kqplPB1gPhrlKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2tdDVYJuvG7IMaYkq3AOrjmlk%2FRFBONxgi%2BRCe5VbhX3vXn5BlCj%2BloUg%2FeZ%2FffAt4ln2LhEcuAr1ioUDzFvDx3k5Osp57URZchiCJvglMO%2BbcXdimDt%2FHashj%2FTS6hC1pKEYQkisqhjHr2perbLAIVaIBDCWMfo7IDfYYfjjk%2BxViz3ZyGId47VXcSMwB%2FLKUMhESQ4T7yiQuerGw8lxqiEUhZbaJLBzmmAscEDirpvOeS1sg%2FfTvLoDwywc7QjRiSLSp00vEDZHfknMmQ6mrT%2FdY%2Fh3AF25rY%2F9YAiehdxs7ucuDH44YnGqamRbQ0zHssB5KH3U4GLzU4uu9Zwzl88HQVubAz6cL1grpzBNEDBuZ82HPzRftico18eUx94aou%2FrlfoOFEtF8QXxe2p0ppLcjui6YwWcDGCqrNvdGJ6MUMwavvNdebS2a1KgEaJ1L8zoo176YzCQr4QGqSudCV3cK5bDYFEPRe8kHiu7w31SUMJHHCft2fWsttc1VjY9h3GzybCeaJLjewsSSvT1B46wFwVcHwRWy4gFx63ZEOLNdN2exQ2YNjEZ8lHiAgH8Q7VldDzahSQ0hEDi5RTMleWzlVpRgX6HyuXi3KGu3UMLKWj81GJhl0i2eHxwWDqmNGXFpCW%2BIAG7jDC9%2BPbABjqkATPGws8nW4LAplj83NmF8o9AVuRhLcJlQgSrbVYxWzhkCQDcpnsm7ub8MpRcPgDLN%2F%2Fh5eQ4KndU9PtbJTjYL1Z7qxnAOFIM2qrw5ZNMQtmSu3%2BBBgKilveEDp5fA2jJSzZ7OGUvSaioosboR9NFRngZWRVuphfnw%2BQcApNY5L0rJwfK0E6gUzS0G0t7HDlkm5kIR216lJI9n1RboFlRfQRwpqiE&X-Amz-Signature=113f3beb9a3afbbe1d4c12bb579876ffa9e0db1acdcfee8dd874bfb6f0e0cdca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
