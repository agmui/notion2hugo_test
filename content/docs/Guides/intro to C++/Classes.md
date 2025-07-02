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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MOACKQF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmayG9YujDH%2BzdoEz%2Bik8nKDtbKl4GVYEFt%2Fv5keFsoAiEAj49MVY44E57vOkAF04gRJVMDpGynpfVo46qFTY7h4i0qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFO%2BGdeJv28fu4cclSrcAxDyZCF0tjUzAKQDObsefJZs%2B9tA5P2B9AbjTzD4ThHDy9MPhNQ%2FXRvm5iQFeX%2BTtQ5JHX5MKCqBGzZCyhsdgf2pPrg2bPzhF4ntsaVsbEYRJGhj5vOCNwGSqk1ku7WD%2BSml7WS7zkXZvHi4up3YJBuqXWeiEBL%2FkLT2KBH9SEbiujRdFtv6C7LjWdGYnMoiJhBUkyQky%2BQLqZYxokLuBQsnR%2Bi%2BUHDuQxSPXx3k95zx8DwBQAzSuvvLhSUiDVSvOUW3XU1QkuC6YQZjCgT%2B%2FnZYRlVbo8Fj%2Fyyx10IH4hdiAwJUFiUGsTnkxYtCYawR4IBggG0EXdNGin7QbqbFPsNGrsnuYsj3euRAF8enLobJncd%2BX56r6lfP%2Bs1HtG%2FPQrRowvwYJgeIxn0SY6Lu4kqUIMEVCFbbAVN6NEY%2FjXKZS2CkPVNNBIN7ZgzEb91AKph8jzbAdrkc9cWNiBIrIlmFnjtm6mljo%2BTaYh2kPZ3vbLp6fgzThgXcz0ed3Is41BmB09D%2BLhphoCqo8GjV7vjfpcM4S6qtiE%2FSlhQXrhR0uj6IvloLVDCMIARm1fywrUxw0GRxZg955aK0FK03rJzV1BApRe4SDyqBbljFGMDNH%2FwaFJCPv4aXjLZ2MJTaksMGOqUBySUDebGhk0xi8Ft4caJvlOuBvB0fKMAsH%2FAh2VsBGcXQiy5Hwzr%2B7njEbgeLrtnMbyDfrfzJneJLLF7yTtQxBd1NFx5sUUTk5bG75IybnQmj1dRNH7t31taoCMLxHNL0r7khvYPZpdlu8RcEWVELqQOsZ2dHs69PuPBmxcKtLiP2sK5m6UFizApB770WsT1rmjthpCmZ5Gg76TtBYL4%2FD647K7iK&X-Amz-Signature=9ecc7b4240f540b1c789180b2d2aebeef35b45e91939026f010cb059685001e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
