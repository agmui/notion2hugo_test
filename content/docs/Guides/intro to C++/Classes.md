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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BWCDTHS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDe45kd3zl1bZuGUPOkFtspxko73TByzkPsMF5tFrywDwIhAPyyf%2BbZi4S0A2%2BG%2FhtXD%2FxscegzCt7H%2FV6z5SWuaHvBKv8DCEYQABoMNjM3NDIzMTgzODA1IgxZcotFIN0SeuPDSzgq3AM4b8dCJC2d6DwIHn3zf63CO5kkimcHGykRShHarb8ZJ4KkJjATxQvhS1n3jHM62gqNybBlStTqIy3reDL0HgLWYfI8PU%2BBPG9Sas0lhf4%2F6oGIEwQslE1vLs%2Fow2Gu9COq1tMV5dkQRNhw8Sxb09dpdC7rUrgKVdc%2BK9W7ZQiz%2F1Ah2UZi54V7FCagewYFPLqJrUvP5Vn8pQ1zsaMD7X%2FQ1kmeeljUHyXZ2iqdIBr0eRuR0LscURWVT%2B0KAsE1nw4popVT0sBWajDpTt%2BeVvc4IsSePj7%2BoB5U3VhDOixPhH4BGkkAJH8atfMzC3J4JIPVXH68q9hHct6zJkOVNl%2BN4Jejakm1JOlnSwo1YZr5vBaqJ7kQkYrw8dlfzrQIe7fmEClzYBhn17e718OxmGNC7Uh1cORQtwQKdOutNbXbygyPKZa%2F%2BohQdzisoLvPcKLRTGumd9hDm0chHHiircjBrq9PfLkTi0BaMbaifwkYUXgZLlrnrAEf8vgm7Z3cydy32ebS%2F7X9mWZhw7a3o2%2FeoqPmhBOLRAAmrSEz1aQ0phdauWw8E41ZKKGA36y4GEWcEmmsvZTP71U2vU4lOXc3n3GrBuCOQn80tpQEJFubOTb2pUQdEviQWBPgsTChh47EBjqkAd%2BjoVeLU9QwxSapoe00spftbPGRdLjqdchkKCnxwScbkaqd9o4l4uar6gXCGJeftSPimshJ6I0oqQiOIYZInXLsySCjnUyFistykjlA6QryhFJbuLmDuq3GnC3pZeU7onN9QBcfPwq60pAWDlEgxVs2poMtaVJX55Gg%2BgkZRTpvzNnlRX1fFusIRgm6mLqbzhUGletf7WoY6BAHPLDKWZUf%2Bgg1&X-Amz-Signature=64acf27cd3f92c469fef79c76695fb8a85845327ef0f2a98525061544a551113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
