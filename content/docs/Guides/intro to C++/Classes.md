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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FJLORI%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTqZJSfif9lJuD%2BVLkgGMqXBzCTIRyYMIQffpPnb%2B5agIgMsRZrPIAqlgAeY8W4%2F3F5ICfsDArEluwYgwpSIW8AZwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGDtQauYXlNYZD0jircA544kIuUWujWIgaAS0JZJnNvXuG0RR8vE%2Bd%2BMIbC%2FS8%2FTQItxcklVXAqTKAXacpbJJp5OQwilriZ1xEjh3f7FV%2BXdYGdTLU%2Bzg0AN8oW92MkbJcqrpf0kMIIWKhTfBYEuuCDBt%2BsvNLkk2VfP9%2B7eni3ZESbGjmggyDPr%2FXsCZRzlKwYQAhqBEh6QI%2FvxA7FRLNbg1yrHB%2FItPNZhdKBlcOXU1ZSVGuXdvBSAc4NHWILLwG6clCHok4MyjgeLG6ZlQrudKldNdDwUwyjS3GDbgtDtOJ8u6OuQk3irc1FRs84j9WMnxOb69M6C0c1sV9%2BW%2FO%2BB4iMKReUO18hjeKpVbBATsbqkSU%2FvUV9Di%2Fu%2BOGQu5hXxSn17z4dzW8AxlxfNbqloDBO9S9BVhSwqlnudgciLnTJ%2Fk4VgpIDyUK8nI1t4F4N02PC13j09DsSoR7P06odrPCc1NMzTXh5gom%2BdSeN%2BKToQT0oc2c4XDzM1cKL%2FCbwUyygYMORofJ8FL7EaUtNWwQnZBmMg1TZTs0VToycTxqaCT%2BXiDyh1MkgDOXaPOBlwZuo9fhLskzhMou3wxo1I3WQXK82OkmURhClaMtnLIxuhPZIcXhbgnupH0RB%2BqEassofSBPW%2BHrdMPX6rcEGOqUBFPVFHl3dfs8YKETIlrrWTPY%2B3BVfwEgxKBQPxalXblCRjxjMYiHiu38%2BoqamTkIoaBqNX1Sp8b2Gc9vE1Taa3s2V8bKCnHgBbHmkTEUrFc2d1zYW%2Bp%2FP9oEpTLXNbsnGM4QjVtAtaC9JP9WeDk6FWbSWUJQ5P0205NObvg2CabYeKTNUz7C1pwz5KXIDvHrCQlu3FxCoZe8WUBQg1avsoC7H7nUf&X-Amz-Signature=034ad53b2668ea2d5c70f97482f1fe0dd41ffe446c5ea55e3859ed672da645ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
