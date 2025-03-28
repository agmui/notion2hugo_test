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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6XBDEH%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVjD4RAxN6wtWlr1VR7UIHW9tU4ZZF4YwC3NI5EUO2mAiEAyrSXzTLSK0xXkn%2FCCsv2bR79TZ8aKuD5RQJzTDkYwFQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGjMHMeUwE6p9uNUpircA8HZkfDRsBDBWZxnRMF9woTmFz%2B12NXaRKJcaC8fOJ7BpeWPsWLMzOHXyY5Y7%2Fy2BA3XSQhct2XfIT6c0axFeXos2RNlgJOZEdF%2BTeJgfUfe4J2XdMNQQ%2FV4z36BffwxIfN0Iw7LaJ4ly8PrY%2B4uaRIoR%2Fmy%2BKZjj1AK7zCgztCYkPUZ6KRWBNJwl81sVscH5uTIVtVoj3ppl7UDCN2RFks1RS0kVbudumthTUNTsz1hlEfAtG1eS0RYtn1BvGVOnJk%2B2B4BqpyC4eRLYQsY0i7nFZGPthAlKDFkjwwNTHiOQx7GsVHN%2BkMsJm7kQhHffrmfEBOceYMcx5LFGmm3atjml6cJEuWdJp%2Bca9sKm0w6nX9vTPCpl4nWDpw2Y0UCUJZ3vOBMM484oL3p%2BosDfAdzyya1zgC0ugYSAj5hV3OiCCk4WX%2Fjfb%2FSFcKCB6uY7A5oedS7o8EUNZIkCUyEP0IXV%2BvilO7z%2BT7m7lO5eKErhi8AJ5GZK7zqdQV9f5tUrATJ1Jv3pgcdwN5Uky7Nkr5F0lzy%2FXXpqP7%2F50WW4fLlpSAU9RaD8yHSUbcf31SgEfaciATdEKFqX0HDCkRJ44iLCQA5PC1mM8vt%2F3u3rXek%2Bu9kzctfrG30D6Q0MPWTmL8GOqUBRyGDyR%2BGZHoRY4xKEwUO1UieKrcOQiJMEI7AVCdnC%2FQOlPqBm6gOexMnkbtZom59fTbajNyj1JA0ZCF2yybS3vE9QvO8qioDln9g6uWFoJ03vIE6OBlpBTwVGaKjRBJnZ4%2FNuk4EMtd%2FkqTBbXdSXVlRqhjIyg66py5e0MwCCjGRQazgFbiiiV%2B%2BCmsE7n9Bi3ZmWEKqQBBN1liv3f92csHeVJPS&X-Amz-Signature=8d6a3af6132effba1be8af5004c562eff352d521df72c06710402ac132e41422&X-Amz-SignedHeaders=host&x-id=GetObject)

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
