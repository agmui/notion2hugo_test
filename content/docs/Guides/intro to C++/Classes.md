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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFF7IKDG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsNG3ZsC%2FTFP6gs8tD9vsqfUi1mPvSQaaJzguTwGOU1AiEA4ibX8oiw8F3L0eUJDcsJbhkhEocLaBpr5oIsnpI3baYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh8sc6StNJQ6E227yrcA4TR48WF7RBWbXN0HV01evI47Xz%2B0zxSpeuaWaCK3v85UHlP34%2FCjtK3Mx7zoQoJLdM%2FG8iR%2FCJlHeYpoZG3Rjsf69lESvpqE85tmhUkfHGp3NHz15rytzeVZuj%2F5HSv6nMCEPeFzDWTNl2%2B%2BuJcMfmxgIsc43D5rsaZ0cjzoRcMwCyv144qAHidni7d%2B1Ydfp3g65rh31etYAmiEO3%2BYFj0wevcjcH3LuwuxZ672JirJyDreu6bXjcSC%2FZee9ZcioDkMR%2FN%2FTtoI94jdNIGeEUMN2ZQbfD9KUVe9JdzXvVBiWIvOFRla%2BqpXPBxkReiLCT%2B05Yr6ffAF%2FqFfnRELisPNaykF46mx1qtk%2FbBLxuQCOWcR163cDUrTdOPO7a7I2Vnjq0t5DvDo9Z8K7bQkzE%2Bz%2Bse2HPzKd0zwhGsLZxXTNYuk2I1sUuorGncgw%2FbWvBRHPbr2HYChKiEh7AOP7MNmKTiNuhcQUh66pYVqIcH8HBkUrsMbG9TnAzBoZbSFzajPI5D7g8GCS4ZESIEjIDsltPF%2FYHzRI8EVuSrUgAYB71VBgjHupysSlDYt3kX45yKDUcvE%2F7gNUxgcETSBPtP1pyItNWucTuswlejZHZCZkPQIVuTZboMi4dlMMnbw8AGOqUBB1YD%2F174%2FbKSKRMzUHz5PDy3aJ52GsOwsAtsPxXlk2tTop8tmSIOE0rm0KQm5%2BFe7TdgEmah2TU84M6Co6fkxyFRCl7PTSjp5qHflHUIQZT0Qbe9lkik%2BNyge%2BlUGMIZ8k6OXhGtOmkSdBE8rgjULe6jR1tQocE%2FdmwGdjem1T0lmlNu8NAJxVRHXlgFl8SSzSFA6uD6XwZ6xpGQnMFh44NSqoTX&X-Amz-Signature=0012acba7ba13114be90812b596241e4bfebadcb3da42a7b8403099e9d7a8009&X-Amz-SignedHeaders=host&x-id=GetObject)

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
