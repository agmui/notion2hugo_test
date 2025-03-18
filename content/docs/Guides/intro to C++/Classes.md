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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ULIZJ2P%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnEryz1UQJGi3FuMNnkTF7ZlnRYL3teUi4O1g706zBmgIhAO3UTt1hgppeRyxcDAfYbj2WZE4xfIyDIlRT%2BXyz5uX4Kv8DCFMQABoMNjM3NDIzMTgzODA1Igz3PAp9LHNZ9I4DuBoq3AO5V9bxVBe7C5v%2FBJfGBPNHn%2BNd6m2rQh%2BjxT%2Bo30KjRBcfsby6VdBJO%2Fje764pqgdytKmdh3%2BB3PRtj1iazzpV0tYl0CPQ3pYPnRoCEyKY4%2Bh43oGWJLqbnalQG%2Br44m4B%2BoYG8u4SD3E0f5PUh9TzTOFXbyvlZFeLF4vlEbzYrjH5IWt6DCDC4jjnHycZmWNebl6648gRWDxCrciLEYFBeusUnO9tYbGCroGnbpK2hI7sYxQBpFO5%2B6SdiuuwI24aSuMf%2FusXwAOAFLV3mkOTbFNxNVOVBVmQBNe3Ij%2FJ%2BdWctOMnTih23zF%2B7%2FrDMkXIlTK99ZrKvTE35l%2FDTSFVzfdIoRmr1%2BgRVKtOtK8iz4BBk8Ao6ftcTJ839qI%2BXdgJmivP91fRzJF%2F%2Bn3t3uQ7Bzl9BLZYrvkplkBBtEMP7bnFBaeb7Zu2ZgBsRECt7JUbqwdm2Hw0cvFqJc8MVU1CJjbQJgyWmDTsUZbO85CuMStU63oWV2zHhvib1NspN30YoVfkr7%2Bwwqfrr9xo9SIvt0GyMjfblWOdB1K%2FrmzsQ%2FpiY%2BBOHYuyPXnI%2FQf5kjYVZRk81aQ5GScrjZa5Q%2F9td5H6idx2%2BJso%2BJRs66y9yRovlJ8051KoH6gUKTC%2BquO%2BBjqkAdbZfNKJJ03WziPWbgpp8PBu%2BNaKK%2Bd8nqSEcjiX3zgzhH5Pkxnl6vfyxbrEGJj%2BhYuOHUuKleFPXI%2Fdi82dtA4oBIHogTpnogx8eZeWhhbZl29tQn1LiHTeYpU8%2FQnEhAgt10z1EKc9tLvKpVU53YE57V1BFNpkuJm1KtgFqwQOqTDyaArHOz2pK3TdjHWzZWoXXUeiAKcmtHfyoiYgLqPhlMPJ&X-Amz-Signature=2d1c536cff8e4a8536288ff6812edf9966a49cdf5d4b7fdf3376b3836ddbd6ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
