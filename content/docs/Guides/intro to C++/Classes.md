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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GROEFCI%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIHuICNouYnYwdUCITBLo7QMRbLex8qsMZYJEw2ERyTc8AiBGke%2BR06c2dMfUagQXEYiQiSlDIpwMirf%2FIhn61CsZWiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcgCCp0BLisUynxVtKtwDlTsZ1MdWb5o%2BZpZcFpktuUP3%2FPNTTyO7ZBLwLYRuSukZGuwcqZdFkRqXC4i5q9q3oa1vng9hBjAoUekuxejQ60eFc0nOAP5ED5wTi%2BKmJJ%2FaqXrMcneJmDZJzufchxVNp%2FmE4y6zUCndrTBX%2BcJHye6n1Y3kSwNH4Rbn%2BF7q4R9l6aUEogV2ff8zRIt%2BRaBkAlwg4UGgab2s172RdUZcthmGHYyimTR%2F2z2NKpWRkP%2BuH6WvxMp%2BO%2FmSp9%2BtxsM0i3bz3%2BBy2e%2FdIn92P2CZmLGvfnFQOUz9bU%2FozhcVNxpWnIE3SRUYFU6Tet2AIsvqeoOiwXf2FwENpNGNN%2FUTZ9YsAV2ESKEpcxaFJI8NFDtmMrqKu%2FEAIU%2FHh54zIN6jrBJuBPhg6hNPNxsryS%2FQpKdNJmjnfg1%2BvyozVe22s0UJC2PQiVWeCR8S59pTFqAzZZFHgXOZqzSq7gUFWPWsk7hZnQwobShT266trb08Ao8ZQXOud9MbLTsLuMyOh7INIf%2FN1iTK8sfGk0QrkabSywICu9goqNn77zw8sATpoGyy0kgJ7dOeQ2yO7GLOS2fka%2Fpw8Syju2v%2BexAWhrERqzM%2Bn7y9yeGZnQVeFIINgds%2FAQCAn7oOgQD%2FtBwwwrfnvwY6pgERapKcd%2FJTmC6ZDEHu37%2BWwrK4bqCTfq%2B5uEJvuWI8k2DMz91yPrZ2R3XpmzujFnLILsl%2Fo0ADNkTAuBadaiaCSuzqlvxL4PEIqmB2H6FT3KCC4KJZz70vcgf2LrYPQIvWvyGOnGgzs%2FJDSvmbJidZ8ne7cUvwu8UKBRSREEjgI%2FkHhfE4ZtBUdeZ3UYtZ4%2BtGMqF4PPL87AsPRkEMHyLHyiMEx%2F0s&X-Amz-Signature=fd1d23522bae9fad67501ac30882a4c03746032559db0e830dfa749486974cf1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
