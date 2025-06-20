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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264AM7RV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjgrDjZhekfp97B7pIP9Drpav7HlkRSW5znkBJCnpc4AiEA7cBcteEO24OUKFZRpppV0vYRsNnxhNVIHd8PYTSps8sqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWH4jvkhn%2FUhB4FBCrcA5DY7eZNybHxLJov6q9awIohuFMBvMayzvncEEPr5OS%2F07eJCq2%2BmAIPeNdkhYuqsbTWRTM1ZH%2FCfmQdtv9d4xG6jxsBp4O4gjftIuiYROLScjknO8UBNZtkgeK7xHg%2FeV2%2Fj2TLxJp3iQI3cNaV1lcn1d5yl0FVcPZ5KB39zv5CMqcvRfQCm9pPgxXYkIW8DkzwTe%2FhCheZQuP4RPGLH27M1bZHdbVPKmOHZDQi1mLDD6%2BbVwlEWwD6qbG5HStZVhsDtP47ihRfvy1%2FudxH%2BDlGZesMkXxKqbn7hlVBP95mh5FPJ7Nu%2BmwzmKR%2Bx5bsMqsZ3w9NU6sY2lou%2FT3UjIO6bjLtnTd5b%2F4z2J5xelGn5IhhP9K9jr%2FQw1p6q8ptN3JI7%2Fw2T7awhIyZYHf%2FUSqHSSDrYWGfDYtPvUW2FNGjZEOGI9wOZEwahcfjLeSQOL7PbKD7Iz9JKTz2Dca9zWLeARZmZ50JsuBiuo%2F%2BIGzALRisXTPz%2B8qtEaB4VpBMI8KaQ5F7bSAfzqX4oJhSYRcy5C6qEILeJOWUogcstaBvikUzy%2BQBsbBXui%2F9vKywfiIi2g1BZJl%2FSiap4B9RVWu7dTYUKyvaUFJDDDfJj55rlu6EbGRM31jSzTIVMKfB1MIGOqUByEg%2FpJafN%2B%2Bcreyr1g%2BHw%2BKINGeFENpj%2B1vKwaUmiZfMjVomzcv%2FdR60w%2FvhZPiTMrz9snVCRdgEJZopgSisZggSeF9ICP58HHkl%2FIzl%2BYLS8BlW%2F3Z3afFBCHVEFmM9mQRn1JlvZraGVOF%2FWLqzX2G6tWvJLEzIsUfwKufP4gaE%2BS44dcliF3ixPGfN9rrKruKxFRf2PG7itrEvNRBuq0NWUGmM&X-Amz-Signature=c4670ba9a4a174a3e022ad008ec235dc07180f8aa7a615c4442c00599bf06a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
