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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZXI4KS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFlcZOB70E0mvtoedihGvRiym%2BegGS8c%2F1T%2FeTMX8mtgAiBvwurdCjiAHLYtRmU5euu2px2Mo5NSEUrdqBl0Jg%2BFYiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpftJhq3ZGTGL86huKtwD3OTrdA7u88kNRiSCrwXEfYFscuQaqVoWODcF7v8FdQYt5fu%2FeHo7BorQugsu6vmIe5iFkDq9FMHB23FYT82VlVaCf%2FAayMPpazRi9Inxc9bQMfWSleqGs4%2FstYwCD0OqNH%2FZsJBXeUN18x1w6rGJph1Nz%2FkCZuIs6KIzULWpHlQ1eKIObFP43RB34iRQ%2Fxn1u%2FozzZlHTcu%2FQkiYDJCFsLXPG5Mg7s32cgbE0dT5T2nZ%2BJMytuej01s1Q4t0K%2F1eiPZnSFGc6QMNkjVPAcN%2FCuXJT6kmzYqUqhOuVw55Sg2dkGvjniGdynelQlzCVIVBFl6NKXXLYSu18kJrfmfTy7EbEIKOYOofbxanvjw6X5Jqy30SJKYxpSRKuXnk9eS9x8cHznsU%2BO9nkZVpw254oJks3yTP4gqlACls8H0tqRjeKy11kJpT7B2AqOINIHoWBtgXtG%2FhqO6TSkKVQT4t4FMALKPjxFjwQW38Z4FAEQqMjWPhaADXhxencor8YNMsKHydKVTzNcUrPQaMQ6Riq2veuTBx8thi19hOaxuz2omXhrD8iLYToZwbGzL%2Fw1pU98nImsq7fQruGUEDblMde3kY4D5rJIeUJms3mOg6iwSpzdk5gmShtNpnVOUw45CKvgY6pgGzDwYdgmc6vW8wX1CHPCwq1OlUlz2W606AMD9dstj33oEWmyS3OGU7U0N8tCxrHvSPYP9bgb3ZjOzIupQNvSAXHu%2Fr43qmEttWWb5sLRb94hENSNI5L7NfFfX9F4djEmF4tMnABxgSQv1rhxi9ayykbOFznrtXHi4pY%2FmTL2sKZkaHb7pQ1XZCYB6iUmS8IhvAMX7tFOtqr8pbmsgXrh%2BuHrzor%2FAS&X-Amz-Signature=23ffb5a3cf1e07a0d8f1840ce1e4e333620eeebd02c9f0155808d9eed8f736b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
