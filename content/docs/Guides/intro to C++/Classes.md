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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBCU6AUW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGgrADrdPQMC0uPufdirgAWlQVrCH3baOM5dbAfWakvAiBfNkOO8CcFnqR0CeZrO3OuZHh8epV388h0qCX4U8pPLCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM73MFNIpJN%2B8ic5iuKtwDqARF3k8M1vg9JqDLUQ3Js%2F86xRyuwFnYPi8SRiOXhGDVGgWkieI25od5mZxKekl2urnIWpffQrBdZjPwmJu%2FIM3etVYck2jtMJOmxC1LcgzxGRyd72EWgSJ4XE8o06HxwRhZEuUipXQhiKQwZ%2F0a5AkuuaqQEhUo%2FIEp5xGo5A7%2Ft19K37q1vniyMTK7OULDa991b5usoUiN3KvI%2FBDfOIf2%2FhO2lwZNnvDZXezgR706%2B6REAVK15NHzB54xDNmjTbZIEVyzc6cqmGvx9C7qwuHOVf6NRZ7OR8gGZQ%2FtTsgtAIBPtGNWKZIInMWZ1Rkg6VDFIJtoizvRjuFoYPGKdWQeCstUwAa3xTandozeUg9%2FqYR39dRwkQiuH5Zdy7bMH%2Bb1rWp%2FsdjFpdVO3ym04eDoGzYIAQm%2FQUNI1D7gqxHWRoQdMNiapt5y72WV3%2FCBjN6G0kHmGDsOW4du3y3DwJYv5STyJJMUxxBgBjGyPV5ivGqeDmJF5bjAwJUEEd8l7ePVC31lmyB8aBQ8uoJmsS2nv1CpL1ma9KQ7PPIMx3AZnLG%2FQLHGkzH31fBQA9dBFi8UDTAtXFw5WVIlcgUJVsRr7DsOsUFDPOhfq0xtKy1mWrw77qZYvH6%2FgzMw3vzIwwY6pgGDmEA6%2F3VFPtEpsv8D3669rbASLAeDVk3Lf9WzvIJe3LpbJ4lWHb%2Btgs9Gc6QJtWxCKXbRmsSSnqWOs1MBxoUumPYCGZfMIg44Rm%2BqtEdbgDLuaYn6UQmEpwyLccXMDc9UBxlJ6fKQnsyvAIzK2QOxktBKf6rBTymRhUjZKB9GPaFrlFmvJp8TEqCOUYxYCrqNAKECcQUxIjI7ZexOtst%2B%2FwjYq2%2BT&X-Amz-Signature=a7f1563587b47cb1d41a4876d5d1cbebf20828653b045833efe6383497577f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
