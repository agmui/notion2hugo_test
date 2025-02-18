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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGRT3EZK%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCz%2FUBnLvNavXQV66B3vgr7OKXKX5Jo%2FXyfy4KIFXpxfgIhAKE%2ByjgWAU%2Bmwf7LMPtYT55Cpep9ATGquxcQc5NjhRdwKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzycZHb25pSgbKAN1wq3AMRgVIbJ41pfXjfcoNiu3WkSRxfyqTaCxPRRyXc7Rwf821MizdOL5Ix8K26alFuHSrz%2Ff%2BgpN9AbPAkvC82w9egJu7Akrjdb0I28ym3TymuUw9CXbZPkxXiGKIaCJbR4HkGcP%2BSjh%2BBCdkWYn5KusXcNITQu80TvW9RRBlrNe%2FljGCzjzrhkjD25QEt%2BHtYrTC0v950%2FkVOvbTlQnaX8a48LIk2%2BAIycW7a2VcSqeYiFAcAEbOOslEviEb3RTB8NLNbD4nurEUBgWhpE1Xl977sr6ykyOExidGFhLlr1A1PvPbB%2FyZ2k1aOHEhzrwdMsus94jy%2BCCJ1cUR7IBNOiw%2BXwj9PfaN9uH0FeOsr9SHoDBshhjI31EvmMJmnggHCnac3ZiwmToLW64NTsYYYg0setNPhjjyYBl6CB0YHs28Qx9qhbiNoZzJ6PLvlpDxJAGQn8C%2FBuowvh1DlYuWyMDm0KIjJFUh2kd%2FxW0NqvYv3S38AtqvIvI2nwlbLXfHLyfNXxkieBbQKJ5VbQTs2kQTL2dBRS0N7%2Fl69z8IiBn8jjSvNwHEbvBakEOIrBs7u4%2BelQhdKBa88fHBH1bLGTCxVelIXbPN5UsDhJSdokGd4Vr2slpUv02wOOfmLIDC299G9BjqkAaZTIl07BhPHyWiiELP4ody0KSvYSZN5JG4mtXDJPDsUAoDP1%2FSsNTIqL5tLceKo4Dbm4ptq2SvrupXA1i9QE35PR9gH%2FolhMwWAQwlY9gDnd8xa0y8Vm28wlLd3gORSYkUNdFIlk1Tpq18tVl6Ndr6czBBxpEaJFICcf%2BPuk7OAKxnQGjMqgl3Sy%2FirqPN%2Bbmqvnu1rt%2BrXSJEYwglVsxbQFjOu&X-Amz-Signature=43b3e80fed329abd40e90146f9d05016f6685aae3618c4929a9d739d2ceaa659&X-Amz-SignedHeaders=host&x-id=GetObject)

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
