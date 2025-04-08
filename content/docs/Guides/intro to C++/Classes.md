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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPK4XVZ3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlG%2FklmJRM5G9PiftoPNSlxJG2DCxUx0X4Wknt0pTZQAiEAoQ%2FaIHI%2F5ZE7d5KNdOEaaLa5OQwKAo9ld2gsYbxoXaoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDE43WuCkAkD1f4QL9ircA4w1Y5dhLkuNmDDbImaliMBg9AkeIvKVT7c3IC5tq57BS2%2BS%2FdU5u1WZNjT3K2h5v0RnTDULCUEWw0mhWktpDMaMIgjp3pfVScAxWjAGXeIPDmanqidb0fAUxWv4KGoU5iAg27VxmmKk4CkBJ44o3nvNgZqtBPExwlrPpFADNrVVrn%2BzKScM9AYFyu9sj7t8u%2FF9PsFluKa1Wog2%2Bm2I11k7NgueCoY11jgc%2F8MthU6if3igR3UqjuJy3VzMCSnny6XHGJI429HVhr43hFu5Zyt4QtHaKgtoh6kVBFG4fzCK93CKwVvtFZgxDBrFpweUGq7f7KHzl9iyLFExo5nEJkA3pptTqeDY7sj%2FuGYhHXfSZdXQv2zuurI8qC2T1tfnLa2HXJp8WxuHHAylFSrBMRtPqCR7NaxD0xmg%2BI5JaigH7nbiw0IzzprObeKlHsAytr9lyFuFFXteKO6WrFlRPdo0fyxGHwir8WM2gRJnbObj0W%2FOXOTtpVfra0jdqd%2FSVc2Vspm6NEN37DmA7JEmtAoii3rjQ%2FyA7UY8xRyjxVzpQNmmacPTUUmZQcwlgxyhHNqeKjWMQ281K%2FiIelmDVq2nb%2FUcA9JBKIELWRK%2B%2BZqXdMTa3WFyCL8TuttwMP250b8GOqUBti3h%2BaFBMrlie3n0dy%2FeCPzW1cemX0qLDa0tcmrJp1eHXGgZZ5S4yXMT7425zAgxBELH1ayi7xHAT%2Fqa%2BgXTC2JzW8lYWNolUCy9gUz5UXFyr7HiIljWp%2Fkug%2BE7PBHfJwHct8nnYA7u2qJDxoNumAMB4z2wmIHwCWeLmV%2BSjzMWpGMtoEeG2tLg15rTl8vl10UesS1qqcYDf4BbQ0EN6Dq1coGR&X-Amz-Signature=07e8dfb3a91ac396892222033e8458259b63a0faa25dc93416e5e92dd90acb5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
