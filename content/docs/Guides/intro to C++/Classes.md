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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHMRTUBU%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA0tVOlhxAJEkrnSC5xv0MIS%2BimIbe1bsbWAeMZyF1zQIge4gMU8dSyhv7tRmqO1Iv0olQNcT%2B%2BXj1lVl9FOFJD8Qq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFsOhghFBLyc05HPUyrcA01L8x3oxbKPo15kbXYsF6dfToBHg%2BTfilgziPrFU1H6ZLWyCpQp0zVxOyXQFgBDRApAWS9rEfSxKlV0TjyU8DufV7CJJMlt%2FII0Q03AJcRVfyG9Vr6xNiCJRD8mdgr3lPK5lnkA5oJUft4H21S4xQVDYB6ArpTW3uHbT%2BtYmKbQNHAorKdNzJjkvwXmPxtbuOZB4SOEKE6l9zGcuztxX%2BsSkGl%2BZo5J4m4VjE9fg58%2B4qx0Dd5Hi5S%2FjJGCT1Hj9o%2Bbvkyxjph4NuKGfDRvuI8Do3VBNZ%2Ffg5t2vj1wblkGXtfjr3nAVtQenAQEyRTwyJp0CXGa7x4Ebv1oA3Q4ZwNRdSDhe57s9Qoi63UwPo8rzneFIWb8FY6FG%2BfD3Yo%2FDlBceettVyumuDeB%2BTPkpp9TrclouuxSupkM3D4WxVECcB3SR%2Boy5zD1T25l4ORDEMOav9KV3iUqPdy2VpbjNBNy0ytZ%2BN5qDpjLnkKtdTqiWdcRSVDewejcziUCaDJ9vRA9LdTwY08Of3BMOD2iEZEHHRaMQdinjgWO9RnNpZzOlAyClLPE1qttIkE6YLyZ1izuFpu4nU5Giw6K4OsGVy7y2MYCUlU0ssCiNOexo8vQ4BFtykl8eMwNTfqKML7mvMAGOqUBTlZ%2B1XcppIcP%2FpyT%2BF%2FRQpSlwJ1sYHIYI17H7K%2BJfwscZbc5fyZMYiJa7InkeobD3pzLpD5AKAthG34KX2x6I4LwTREymd%2F0HsjMbrP9a5xjPo7wk%2FQOyRYxfLkFHy1pOVqLoah8LwRW%2Bnt6wFOnlVzMTNhnMhHqnkZ%2FnD0uwBZF0R7ppdIiG1cWu9ljl8XdtfbyYY7dK3McaRJzSWml61g48OpB&X-Amz-Signature=56f1f2c8c009eceea139a03708d72d784ac7ff3a896ed9d75613b97faa87b66d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
