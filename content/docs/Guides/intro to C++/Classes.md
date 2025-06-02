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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EZ6NTGO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCPdxYRJH8jnS%2Bf8bwPQv75zwvG%2FYkcUKIgQhT%2F81noDQIhAMey%2B5fbrS0DD2o5d0xqXSso%2BLk74YPB3f7MhjF2UMgiKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF78FKtKlgQEOC5E0q3APKwGxNZUqMcEOsspkTBvAtXZcr498Yli1LNpeiFDadmSavJqDulzVRCpUslu451pco%2F9GKrvZV58Yhe0fDBA2EX4ptHVjF4E25i546U61hWGY8vo6viTGmrdcMO02OQGQdfB%2FprAZy3k5Shv0FFBCWcOQpofh%2BDJkQtXjBocU2tM%2FiJZFMmApnIQ9vkfTMa%2B%2Fe0n295P9MqHlPt%2BxJlPDXS9lOy%2FKdGNnumSTidcI9YxlnGJj9Kb07j333xfDHrO23JYzSX9HaY91jL6tGvfmZNhf9VHV4VkH4cKcfhzoC0DAQd1sQGdyuIA2SOmVNPqgr6YLDEAb2gTpfBGoRQXpjrUaiuK%2F874vyio4%2B51RUMT6OLSJ3liyq5iJ4Cg4Jp77qNGuDGX8Nf6E%2Fu1oxvyR5xcmiym3FBMdCHcXFiSXi%2FJGQ01ZIZ%2Bf04GjWOEQV2wLeotw2O%2FOJE0mGDSA1oM7WcgTyii%2BauRdqJCpUkl4cfmfT3Fzplobps792%2F9jrxB%2FrAe9cDCeKNIA54zVwQKU%2F2PIgsvMjpkTuGl12zbyuUYcvjQtroHQr96jQjhJE5toGVviCB4GJFX3HvAe2hi0tuTTD0YPKoxTcUjz1bwZ8FUtlx8rJHc2%2FfWBnnzCHs%2FfBBjqkAcxKVfCI%2FVrv45sxDlnHf%2FiVVetHTdTPcHH36Qh8J%2Ffx9cOyd%2BVyALJmWLYrwsL2zrFeRdQXCYHPeElUeiltJbekzl46khcBFRa3hZCPGkKOB%2Bsankr%2FeBwgmceSblMfL2CCY2RD6tWiusWUzBCFJQ1jqXcdDlo9Wa25EqStG23nVBARD0U39hPDXueSgCU8V8VaxACMZz2cYjKX69ODAzia9ajy&X-Amz-Signature=b2fd3c1b6afd8b05ec1d1c25350752803441a18798808d09125f790bf7cbb2db&X-Amz-SignedHeaders=host&x-id=GetObject)

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
