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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WR3EWJI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWyV64r8fiZQhx1l6IBZnWbffu1jXCjxvmeypn8Qf9CAiEA73WU8Tx5qxovXVzNwEetWKL2zNVtdKzb4tUU4p3PGLUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoncy9iO%2FldKCLrUSrcAyaLYmONS7j4fsUlEgi6DO9oaXHCCNREVDzt%2BUXvVxbeNO9%2BIVe3rq9L8QNTeJ%2FD%2BJhktBf%2F3RLiAbEUzZngOub8jguF854Co3aTKkX2bDVqxAp54OqcIfXlBHFpXeepnzfo3OTV3vuClNF72xotXC%2FUM1P9vL8mR6Z9q%2BplVFkVecovod4A6yPzZDYFGZQigJAn19YZovkqW2qZW8VEimZuBWP12W81CJT83ZRycssWo5zotkWB6o5LFw4t7BYLaU%2Fz2hYndMHh300DfQ188qiLok0fRSQNAZ13U%2BWrF8SkUL2OUxjfwrS3KBuZg%2FhsDqlklAIARqtBkgBbDFRfBr%2B8ZzzSEq3R0et6LP%2Bhuw6zM6v9e0PABO2HD%2Btyc12BVEKol6KRoLnGZ2PvpdJ%2FNBG8HL3%2BhR5H%2B6pORonwMejJyhoMD%2BQp6K3PLLqa6QxaQ3Cxl790S%2F4uQ4HMItYmCYSPdj31R1kZJ5Y9qQlGcZuxrRZcRXU%2BHz94JgAFo8BwaF2LCxpcmYZTJRAHhSZ9fSItPksg9NsaVQvSME5%2Ft0ZF7Zmnr95H8KPX1TjgybO11hr2rjkuTcFehGO9mSbLLR%2BBAUyyc3Dl2LBaFV7Qfqg2dqDGVnsVE2jobL5%2FMI%2FR4MQGOqUBLaydkP1FN%2F5kJWm%2BXrVzh%2BzUc0OQ808kfKn8dPW4%2Fk2YzBAKU02%2F69GDm8Y4MHBSiF6hg5DVLxYBsSEcxu5HLb201IuD8fbwYr4iXNKHtP2x%2FFUjrrjGtkzzfsm8csKdBXOmWUBmh8nuTpPV3Shz2ISPcLiVTaI96eYbgIJy1kW7bt1zjHZJnXE4vovBeErbNiTdhBWFgT%2BgBVJUmMPY5rMszelU&X-Amz-Signature=86cec429961407a8699842857b2a90bc2de9e5b618122fb3dbde42e72fd02b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
