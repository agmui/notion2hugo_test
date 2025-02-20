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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4QNL44H%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMgOLua2QfbQJ3gHET%2Fy%2FGyY6%2B8fhpNxukV2WUM99MLAiBiUhllvfRt4aeWkL3%2BDe66ZZIcaAWd2DKJszXJmVTPgSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ0YeHbZBHgZPnf6rKtwD4INoP5VaH2aXq8uwuxRLMp4iSvKWja06wLFAmmWDRJcIGP1nT7e74fdPDvLDhyXXjNQiqxHvFYCRVU9kw7LuqiB5FG48AyVxD%2FRLgR6xZJBaHOLnjZL3fhUgQ%2Fi3osIIPs%2FZ2UHOOEzRMi80m6DWBzelKGpUGcDKbFXOqBOI3RMxujbmMUe3A7UqqFDszj6yZftcLPLZCxi8CUbN9v83VJMZ0hizyIDRQywY3CIqdGDH%2BHge7%2Bm5LvJJwWlHVESm1VL7odPW%2B7paq72CG0IPs92zz%2BhGT%2BTlpMn6vAV6NnXvc9AiliO7si4KtU9siiWJ551kumU3%2FWz%2BDoL46ch75wAfN3ixVLHessXoo65ADpqAG4WB3kJAvC0ig9DAf1eMhHSN0OZ4zdZz%2F6uT1zg46XiEjKvCihwLFiiLyXKzaZl9vBKCW4jFySR%2FZoor%2F2nUxxpSn6RKmpQPqknRtni8qUaDrYQtaE6rtLBbtrnkj1qb5zaJCEjeu4xXMMgHCXEv6q%2Bitgllw1DSNBlRubNT%2BKOzUQJGCxHceHTcjEdalj1vMyCVJT991QK6qa92czdDtsVkDn72a6QRUptGI9FLnhtlhvE77hHM%2BTDn%2Fv9vflPbBNy2c7pO0sHwWZowzo3evQY6pgGnWWNgoFxHGGSb6iLtG37uql%2B8kgjX4bRjH3Ik4Mnc1GDFuIkgevjXtkhIlRLg69Rr0uOkCC%2Fy7M7zyo4EyKhKCcV0STluPLImquyckPhKm8yMjV7bJlos9MlxJ9nglV94macMmvvCAAivDbyNwkadCeImuI%2BG1lFd711I%2FNlXA1LIOSIG4Cr04e9TCcg29eiAKyvbsac%2FoEt1e7JbU6HsfNvh1fGf&X-Amz-Signature=cc7be72e55c964ebec31f1ab6399a08a87fb8e7f76d4e695b8acfc5634d0b979&X-Amz-SignedHeaders=host&x-id=GetObject)

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
