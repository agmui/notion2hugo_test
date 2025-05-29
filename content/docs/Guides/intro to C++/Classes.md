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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTVEUCE%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICotcHTPsgdqSVTbmOzHUpz2rPbJq9bp9tIX8m4GHG5tAiBzg6jgXOsYWfT4H35iwkFLwQpnwzbVZYMBcOYPFRqvWSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAH%2FdQWkIxo8HvPz6KtwDlHCTCVd2V3fm9%2Bsm91BNM5decbZ3DZWGxsJpZszoe2stHWhvOx%2Fix94SLRvIyOZEknZ4dleb86eE7EbgFBM4kOamGzWVjQgxr82voeMd1IL8MoKDNRnTRD0Fu3y7nee%2BJUzLb%2BJB4Dso0lNOU6fsBrz9YqfeLQXAhcfwE1OBAnenrMJKRuFGzXE8mauNXNLMACkbcRTO12ETFQlB01uxlKLN%2FpyYypM%2F2UkGJB8CK3JYz2pySLhvLF2fE9xcgHCxxNUYeFYcYEXrW4R2wSb4Qw9Eb%2BlJrllUfmqxJhGNSdiiMteMLz0HiG%2BSdZ7QLgGfBALjeGzmQXF0hZJblRiBsJ2%2FL739p1BAk0ODKvP5DXX9%2FKgGbKQoM5Z8NKPjZs5GeYjLF0Mt0XIol7tdKlxIZVBnR4CssXG7xkFe9pI5t0RSk0xfyVbDoXQnzgqcTM2Z6oC1ukTLg1LKTPpDPx88d%2F7J1lo6VmmWqTS9bYmkQzr7PBHWH2HxSPpSeKb3WjMujeCQAM8axT%2F%2BuR5ZYpKOLT9uoZ4AcMCiu7XlMehTpD07Dju35ZkWE3Sh5gfmA%2Bbtdfvt9sP497E7TdFqUp%2FAia8EToQE0pxDGX%2BJZSlp1%2BTE%2F12Tali6ZRTwtyswmYrgwQY6pgGXKyIWHbd3HdxscoNkhGmH4zICUECbcdUQX9jerLN1wXm2sY0JEZJDGSx0BCzssp59xZCB6k692S6osb31P08D7zSwJJ3cNp1alo5iysKij54yO%2BNUb9IHGBoh5bl1fniyoCp3c1oWWe3pTvKf%2Bq7wJr2T7ljOoRuN1IK4jh02TXVZqh4Zl8vnimjpBeVlirftjuCyTqDYTYQIGvoyGEkdgsAbbtFe&X-Amz-Signature=5df6b69bb5db2897080d65fa64234ac5a8df75d4034b739359fe414a7fdaa1e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
