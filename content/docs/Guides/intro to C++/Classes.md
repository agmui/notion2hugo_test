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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVHNTKYK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDHU2nioUS2o5C%2BOnvAI1CudIvoE1TFDW7ZYILSe6%2BwaAiAV%2Fybm5WthCn0zZ8JlB95CQsgHdIMtCgFeQPYUZ3CN7yr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMKs3w%2BW5trAPP3QHIKtwDPJ7z9aspJKLzA3AQ8ER8JDAhoCRpyL5FqAmpgQHTgVoNqEen%2FeNoWXvQvHb3fFOUIGquwxGnpCZcud30%2Fc7yDyz%2FY6H3CCZrOl3TMKqdug51P9cEmDdvb%2B8TOsiztlx6a48OPtriGyIFvdmB9FvrWwJOqTQOdYMMQpLbREz6iCQ%2BJqBxDJYSiHunnRCmxMpokxWPGwT1plBO2s1quvC0UMF8z7XHD6QDgCiFWuCWiTrWL1BW%2F0i4Augs1oaPVatNmliIvWGhsxUMAcvkjMc7N4O2aE826h9dIgACjWqJrRztLEMlUjyZCArOsKwYzdTQ2hHgvFFd44tWuwHPjqq%2FPp3q2g3a%2Bcn9J24m8McTm66KI83JIF0YrQ68AyWroxrMKCYSsNcvd0DUawhx8Bo3hE9JctbQIY%2FwJpJFWqMyRWYYGO2UZoA76uv8hBiMxVk%2FV1mA5TnYA2wvJe7ukvIGmsUPi09XdAPO6ISYkq43W7qc7wCtdnzClx%2FGlFTPK5uE5MaoA6Q%2F7F1OaLHvzzzt40AqqmGuSq6mbXRR47YoiThC%2BIAPMGsAWIlYDT4kaa92PYEBOo62jKr1td7a5BYPnShFC8E0TDLRVHuY92qz%2FbhzjE9Y%2BWh8nW5QFewwueKZwwY6pgFDclIPCI3ZnktA9uZ1VYPALoFF%2BZvuqfDUeK9fBieWJOLD5pTuaDtgqz8gwUtwsBl2FLu7VpQLiW28W2htkhdqCSDcy6O7AbNKwKth4zuPT3dbcKfFNG6QzTBLSD34trawTHDaGUHHTzzRQdX85fogome8M%2FFtWlmsWVsWtegrUq8muAM5dBBXp1YDUyGL%2BmlT7KMgC7VmDDOq0oQnh8fVnQujQr7L&X-Amz-Signature=bf2e2ff3cdc6afa0c153d2a891e4cb29508d035ba794b52458b37a127b771b63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
