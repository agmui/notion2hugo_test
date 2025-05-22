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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFC7AJAH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICedk%2FRV%2Fowd%2FNKUFMpTzKs2I%2FRuytAyixBNbSCWTQWDAiAelmJiJj4Ln4UcwtmcxMdClHJDaSvrlhJ6EeVen2%2F5diqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM53pcumI2c8EIDX7KtwDm6nTAsRxj9KRiYJkMafO8nJVwan%2Fxr0clEMSG3SNkrhk2V4AAzCikwNL1sA%2BtPX6KhmlEZN8qI8mEsdo3y8wg850GFk67jkN6kqGIfMhQUAd2shKyiuOBfcbss5rZPcFVOWV8MRT%2BMwUxQOWBhuBFIz0yjx7Wq6BcmBuSbM22ld%2FGUoukNYRVTGXmA%2FviZGou6spJHoSVTaYjVcZkXV00UXJJlMQ7bgEm%2BGgV1Blb1Zny8nCRnMik7k0cSDiOJ%2BDsiSxL2qkIdkAobH6%2BrNbpOvMy91hdCkoMrgNIoxYzmxPT2GyIY9pwNrCqOTmItRPzOFJ5Gp2g64pAolperuIjAQadNkEdl%2BQH7ZH%2FTlpibdXnhUxdp2JMyDt%2BVSEzW6%2FCoMtzGEso3hmb3EowMi3vs8nwG1Cn8SZk%2B37vkM3UiVfCWpqJfhosLeWvx%2F0DvE%2FnvahTAnbhbXM3ypULGwjroNrNDx454nlH%2F%2FPjYYEmsto0ldqBcR1V8yE5zbnE7tD%2BWRYEgnMpo85qj5ToNFuJ56d5NyUBvVCHIGgqUQjzWXfZCSEWQRgMI%2B%2BPY5jEyB%2B7mXjP1tYrRZIJ3fHma%2FsWX%2BzWLJBJYrpTFxSd0noL2%2FTtYrLyWdmq%2F9XfHwwoIa%2BwQY6pgG%2BfunPpryyyQPcmzJPvIC8dv%2FCrZUulJtMKBZnHfGWIYYUROi4OzKf%2FkE%2FiQpV5z4d0yLGsXgG5wfBIP2t9a7JQuI%2FV%2F0lp62qli231wIaNZ5mvsxOsVX9v7uvHoUmh0oC77Mo%2F8veKJBXP6dyGo2pgGxz5ACdUkptGCFZbMY9anMznOneVE8AcdLDulLXaQ9E4Fr4ugITlLhnaXSORGVTFf3giQ0w&X-Amz-Signature=5f42a20b9e6b9da8b65ca89df695effd20a398a61a499b68a8732c2c72b837c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
