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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KIJSQAA%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIEZ7%2BDYPQ%2FoTk0S2OJAvKoe5vBAKilrZODGDlIvHSZKxAiBi0C9JpjifsAvOHowTcfqjvrJF5rw1vS1Jbv7LiARaGyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMThugDvMQb1Rnj5SEKtwD9McXGx0jijK3JJx9x92DijqdeZY2Pgd04IfHFVUVovOK78zPLRXGMw3cnYhB0NPqglIGMxh8juA4kYAHP2DEvod3jgpsYm6snXlBoUv6m%2BTqdh8Rnzs4lVkerifzYz1VdjvySvYm3Kt68LH4xPCP5sVAia1SIJeKpYZCrLj%2Fq%2FfJ7%2B%2B%2Fb9278RFGiGLnkNkbb2XBnlSM6KwNhCiSF8KgpKly7XFW9VObkwpXYUC2dNh0YVwjfd4nN%2BxFZX%2FmD%2FWZ69Nz2GRVdOA%2F%2BWwNkBNdDpQDgPsXe%2F65Wt0rgu8x0%2FjZuWbeL7buTiUq0xZZPN5bVF%2BYlxZl%2BeJrLcvIprFqQMhZtrZazyWTNGxcErsBJnxgbNdSZCnQQcUxCChUN9%2Bq%2FTWobi4ZWy0939J8xbH%2B7C9LoKEr72jC6t%2BV4vVopZACquJGNVChpFdz7YPLtMVgGZRRERNI7CXYGbknHQW3kRhiLO5ntcbF0mu5U5zEdFaIkEDBRhQ4umzlPLWkj9MtMgLisjSeSD87vjMg2e80W3WW1mlOJoz8BczDu7xZ0EtUdVOD99f5lAaElFAC7OU17HgSAMIAYewPZEFST0gR4%2BPIgVqkTOlwpRdP8zutaTs%2F51e1tolcFvvUdgsw%2F96CwQY6pgHQls2JcNwXQ4dcI6UwM2mShVQ1X4R%2BrkszP7w2th%2FHmt1gZEdecLIzoZLu%2Bhgx5j9TtT2v2FTGmRD%2FXZdrRywcM56NCapKK0Mrt59bfYsF7Sk00d4l0NHS5WATr9sL7l%2BvFowpzIYw8VIqVsLW%2BO1JNC%2BCr4CvcVdpPHhaZq%2B1%2BmntH7vU%2FuHoELpybEuGNCA6hmujj6frpaxDN%2FUe%2BTBq20h00Nd2&X-Amz-Signature=740f041a0be3aed338b785ec510645630e4433c732ecd85adfb0771401054e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
