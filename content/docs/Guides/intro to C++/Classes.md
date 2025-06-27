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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVU5WIJ6%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCEtmEQCNEwFkkmJQExfpudbNkWlol%2BFQEWaR3z0xlCDQIgVrk%2F19GKlcKVaBg5dsPOVbIhJI%2FTRZAE4Iz6M98Ol%2Fgq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDBIEy1l0ytCC0M9hhCrcA4KGbGHTvdYyqPoGb%2Ft0DvfqkkPXBQQFGrC%2FTLHcStXrpZThmOk50ahBLj1c57HjTAElEb8qrpgz2hXFrdHr57M5UzgQOKXs0X06EUQlk51VUKSuhmlk03G%2B5xFC1CR0HdShBY%2B4eafIxyBSBtYVobpUe3hdEx1kbr4V98fCBSE2rom5UC%2Ba2%2BZp161%2B8q9SQVVeZVehHWPdoCCkSNXhGduRVhM4sKLIIhp5xvyyW5ohxa5Oqv4dDBqXqMLVaiv4IMdK9yZTJVMgQb7RajN26W8J%2FLdPAS%2BxgCWQ95LtKLbfF5bqJZVpVJ3LQvxlFI5wuz%2FS8z2j5vyeF4cMJrYpz%2FbHYmP0PSzGRqBoBk%2FQ%2BguCAI9cMsiOujxgLOrHReXuEDa5uv%2FdxaH7npo%2B5pCdN76nWrhmZ%2F6KNBb%2F3i6SJKiGVLVit64BIlXh34D%2FUWl%2BYvPavrwgwmZLlkEQ5wMoJKlEhVNnhlNFY3wWp1PZ%2BddZA0joAYBUKEuR72ejtxIigr9UZMPi9uTNlrtlW%2BDZx9ti2bXn%2F3NUZcvMZI5cFHPlN7Qj3RWDNghpEgGxkS5JXSjjM%2FHfOgIcZxBf4StDu5R6rh1eetD7ZxY0yav37iQA5ejabYWauAsKu%2FqGMOn198IGOqUBsGbSRNRSKyA1O1vd5BC7AICy9XIOpDBL5vGLG6d7%2Fj3a9hddecfrjT8HTcG9kLC6PhKhlpBIlLVfBJRcFLj%2F5ufloRsFox6XkrgJ3wTKGe205VxbUxzu8ZRWX63eK513SLL5dLtrNnamlB9Dn%2FRfIpgYfAKd7vRZj%2BlcbhOp2P0WqEnZWeev3MvoWD4eGMszW7Ak%2BMIrcdvUPh4BBrjHz5m9e4o8&X-Amz-Signature=f35746e10bbcf0906b7afabedfae0bad8daa6aa40372911d1ae59a7a9c9e749a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
