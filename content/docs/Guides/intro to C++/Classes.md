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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J4DX3EB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCkrkOx09yotmAwlGrnS84N1%2BF9qNX32O0binVgpuDdAiEAmLucXa2gURv0zDDnZWgmw80bUmZFe6m5ecmbmsixaO4qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0uFtSMLtmEEEBUhyrcAxGNlbMroXvoR7ftfsPFMknvm8Iii1BT076a4rDTi6fMJYbILOShF5WbgkV3W4HHtpka4jOLu00PUU3L0v1Zm2UGJmDgCKfXMZQ%2FVN0x%2BBb0QY0lTeQ7ARyF%2FFyRndSZU9w1NlGMm0%2FNfrENhyIKEJ9P5Iz47p4P3KGoys09%2B7bpTxAaG%2BvlB4YFizfoeq1980Kjtk3dqRhiavuzsP00EYkoy%2FylcPagPYrfWPSS8aMFnX%2BI%2FN%2Fn3n%2Fy%2BSb%2BAVUxo2dWnTZXCHn760zIw2T7OI9KHj5yeHTZkE%2BJzmS%2Ba29ZXPM1HaL3E%2B10TfzTUfVAenMmmRzGwEZ9GVAHsJTnpkVVXXmGVOXypW5WZKJvMRMcO28923H0EKnF7sZhusoQjfUj5IajhuPdm7cLXSdder0dmuIXiC1tqZT30kZnYy5o4iJWmzYwhVw6YuSKAi%2FJz3fbb6V5sXpikrxtCLzA0SVYFj9kK%2BIYPXArv1TKnpLzyp%2BE00oC7%2F8vvtiVbhopPA58ObM1zXup4TV5zePEyyDv6IzLVrLkFH5shz%2Fnsood%2Fe%2BLBJIdQ1ssxThXYSalETuI3%2Fy8V%2FZ2E8EDBmri1ePB7TI67%2BmiNt2bKUBiP54r8zF8tX1AbDPM6xmSMODqgL8GOqUB7AOSTiHVg6cJskHuBuInqSA7xIRUAeX9UizHHH4xBO%2BejyIBCyrmEpLF%2FIZSHYkZWpfbI6BQ0MbZMrPtMKgo4%2FDvDbSRwi5AC2AVHBLGxrkgXscaYkHzoMAzbwJ%2FWbgAgO%2FOGGXca8qBwcf1u5eiKjXn7kpGo%2BSNxbDz%2F7p8xQfMKypH9yM9LEyBPoqDksN0H9Ewd%2B4q0GHUBatm5o1ztGKrA2%2FP&X-Amz-Signature=d8519430f227d68f16065d8fea750cc00253d3c1b622ff000d1be91a3aca75bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
