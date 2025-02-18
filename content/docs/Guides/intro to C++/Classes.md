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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FNNNOBR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB7SAHObTP1JVBcxijxQEdUQGFAU81B4b4%2FFj8E4QqB%2FAiEAkWyRm2jQubUIz5CIbRw3LWH2BEQE8OTYtGPEN%2FNyGo8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDu653q37McRGWaoDyrcA3zXHEYNaZ8cZXyKiYBsyb2kcCbJpnSnEXv2qjDtE%2BSbMhQC972xq2X8xTm%2BmXVop8PITEgo6Gp%2Bs02Eog%2B1AZ%2BCLsIAz2z8VWR2I9nPQAwX6FVIIc2GIfbUVboifGzaKpQCo5qw9yEIfmAuUTCp4z97rdCf8uBaKAjY%2Flgo3DrGgGwy2SgcgK6mfmnUMagUvntKN0BoJ8qub1dbvVKfMgYlcNXAPeul9I9gT3iJxKULNTo3gRkCyKZDNNh239l0LlsTaiCCsmSZzvY%2FVhCIDRMxYJfEijkakkTCidDW5te85TyMV6EIREZiU488GMGJHdYmrupzQgMyFsUmnIl67NfBVIWLyW6FperSOvrlKc7665qdSPKLhCh8eO7zN9iAlF3Ag8ZOgyPhjTfCI5xzhBGyMRCVzW1pEOZXlbOHsRD1%2BIJwTLohiQvMAV9gHm%2BAHXuOVOBNJop0JmLBItQi%2FfLYYeRBJkx%2BUmN7ACYimsvJ8DFXPfueVibTTGLadmAnKVEQp7oSoi3pgWp1dNZiNqPN7jvr0tSI1p%2B9fkaGaY%2FuhTRqYhEtfpar6qI9tAlYzKxROzrvi6kii%2B2xNKB3tWRpO11mFNAgTh3zZj0Fjpcc22P%2F8QoObn7CuSwCMIGS1L0GOqUBfJ7RH4lcL0UXv%2FtAKuurob9LeUYmcImkQJStPoKQ%2B4zGhs7Qqbs6k5l93r40hmKGmg4RUrXUpk6dycYXOGbvKILoPQA%2F09IwvTsvu%2BOiMBz9eX8ETHCxoTrCOTkk0NjXk2YeS0QZ4R79dnJBV05WmsjF%2BVXnSe2xivW4DnZQMBKEwCXKBUMren8hmYd6Y7OokhZrIbnqnfXH3o%2BzHtzlRm6GntGf&X-Amz-Signature=5b1f2bb562ce94149bd21ff96a28e842377eb004d5bec2aa2dbf1a6a367e8859&X-Amz-SignedHeaders=host&x-id=GetObject)

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
