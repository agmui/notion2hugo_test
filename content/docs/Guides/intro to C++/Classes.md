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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAZPS667%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD2Sba%2B%2FzVTTqM%2BApBgZDgJdvXj0iwpG%2Fgb2mFexPVYbwIgbs6jvimacjXIT%2Bv4EQGom9VL81LaWCR4CDFOgrmdIGMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCLWUKhMmbJg2qCPOSrcAwAIG2l9saUKf4IME8noD8J5EVnHXvGOJyLVLsfn%2BcC1xvA0tizqz%2F0ldQrc2eZYhh%2FMWBDQEIWFb5FtU%2FpgLu3zeQI4kzhukv4bSSpOpKk03gshvMUNsPsxg1zlQOCcUCWrLnCy4RdrG5HmvBXvrdOPsPv6xGpsEthS8nht9PbSfYBrJkYh8bAk0aDmOSeGI79ZjJAruf1jIBZ%2Bz9flt99LZQfpPss7gkeebnIBfNZx0goLH9MD4rxEcP%2FoENn8bfHpC67RPHEOwkvSz%2B33HQ1aUGpE6KxfLS1CxjgPAv4bplORkcHBDNNXMZ3gH7bsVdc2eDv0OD%2FA5hlRFOyTTfNhqkkGtTdOk8HazcilXj9HTC8DdfmUUxa8vgJArcZGX1Mw778nrHTbwCjP1MRZyZFyRR1Szgi62gN0Tbl2twSLCZXuFCd0ONFnfeVC3x1yHvdeFqr0REKH0W%2FJ8UX8qPA06B9bXnh3Awm9j4EOClVEG8B30i90BxpTya%2B4h6bHj6NhcSfqezmhf1ush%2FQaM%2BqhsTMKf4B7zgQdjgKeOKHnGO9iUYAgrTi8tVPTNCsSuRp1%2BmW8Go%2Fem2MiXjU3614c%2F8%2F3tACUdwkcfdSuQW6kGBMik0OvM6Yqy5CrMOKvusIGOqUBlKed2mGn10YAfMTARQX0ZKuDGYr5ocGK1bboRoLtg9zJHjXzUTE8Cgn761BVg40VrkYXW%2Fu%2BYmd9jT7say5oGE79J%2FffFlPfXb9sNe95MjxGCIJHdVymvz3gct5Dgmo6GaEgN7G5mvS5jWIzZWKsl9Dkf8HnndJHdr5dc00ydPj5rqLPdquDCoj%2BtaCi1wwHToJwgy6A8mEHtJ%2Bi6AWaj%2FiGdJwj&X-Amz-Signature=b8130ff7a58cc6d4799ded69aff89ea7ef1157cc909ab6257b1ca3771fdb1e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
