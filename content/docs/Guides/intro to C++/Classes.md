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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVNGK63L%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKY2kuti1rKhKd%2B2WTnSVFD9WGS79lZlWEFwBpboIkuAiEAkIu%2Fy2fsj7tdMd74Hk28QylGEAqt4MYDBtIQEfr64pkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDB%2BxdapIXc%2BD8EdV9CrcAx4RB4S2PV%2BT3hsYGnPexwv2Y5nXusCGL5tR1qFdMHKNvDRO6oqi3allZaCgbNqkbZovgI7jk%2FBUJfJ8IPmy23NUnB2fAh%2BbCKpBTTGNArKab6icJyi9OG1UgPV0SCSQ3ySNzgyV2NSUXvdGDz1CDW%2FIiEzv0VbFqwZrAi2fdaYSTIZBaAsCNM6i31IScLDLreoeFgMKJyCz9lM8az8curOY%2F0JnDPud47WiFPDZhFMUEkOz68XKcXKaHzMCtVK%2BpBpkdDldIWTs1JJXQKSa0O7IoAU5z59UbsKd1SlIk4ht01bTHnacxqHl4kdKzkgoGXf39YkGdzL6MtfiFY53JzYLo5JxnekeA5cDsDDkqQKc7mIyvcbwU%2Fc8%2BuDgGaWVmQB65v47UjoiHVjRKkVf9HxWc6McSW9auqyT2lsg2Nbe4RP8kR6zfEhpZYDU3pCqa0O%2BeAI8FTwfmil79v3FWUpiWjLtrJhmxcs9ZNdwvzfFEXBvjAdZGynAcJ5dAZmdxwRjlAnZ039JSn%2FAp10fOtuXo7ZuQX6lYEFAtzDwtbNOSQVLeoDBJVFNXj4l2U4YNxCQcpwFwPqbEEHHeKh8KSvDE70Adcrl491kgswQuXlj%2BoYwSGHvsueXal9MMMyHq74GOqUBUGTs%2BQsZlZQMKgqPy5wnNAMS2pKbR%2F8e%2FDOXNrFzJWWxY4%2FkbCxaDNuBt7Q34CaJaKN%2FwWcelU7uPA9uvrnvbaxlMM%2FLKb6qvUwTiXfIiTAA9Mfi3J5A1kmag3CIbr8EedVykyh1j%2Bh2brKEA7eArt8%2FnnNmKRXF7KsqSENAvS1pDJQZwGvjgGl9zbc8puZex%2BnfW8uIzhMmtCR3S0qy3Cqoh5ZU&X-Amz-Signature=965d54f00bb27304af1af4e554313999843eb407f9d4a9365edcc728608d93c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
