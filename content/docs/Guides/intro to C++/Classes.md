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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623X5JMQ4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCENVGiLwudBhMo1qw3PAYeNDSbVW7TtsnlS7DezP0EQwIhAPFJUnccbM8YUI3LptM4D7vyxcGu1udHQRamtZD%2FKRo4Kv8DCCQQABoMNjM3NDIzMTgzODA1Igxzfjo1429dUm9aitMq3ANuk6AMPXCK%2BfIKim8BpLH%2F2Mz14bNBnRtWiDuepMaX7GHng9rgQlTt7W%2BW7Jh%2BIyXTuFWLr5N0yObsyDJfCknS3BufpcXINmC1FG%2F5i%2BP2OWRpX01fGBlWEYFJQH9WshvYYCgzVXhrQ338mq4MnxQdZYSDlcJuYhyLfrLSRt%2FSnsPrM3R%2B9bPdIsq3oO2CpkFloM6ADsxn2wEOjUEy3zE2MNfnkndskGUHidQQj2lcCQq0e%2BKla4v%2BYgL%2BuG%2F2hrtTna68MDVPo4CbP5vBWllmTS11wd6rwyOidcV8ipdwAq78ezsyyRj4mt20BouHJtf4Qseoq5KK0G%2B1L%2BSwfoJQwc4XxDXfie8WLo0yUEWzn8Kla1FOWvDYOfa0E6GQyg26yZX9g8wz3DOa64eaJ9AhaqLBghr7dJWvBSQEaFOYbMSu6v6vutGd%2F4OENir37b8IoJj2dilwzL%2BfbFKLsKlEpvSHFcq9YRB6dofflzqMzyfbel1h9UVbVqXZwqElEMcyqngoKJYf7hFkL8KUCqLoHPXvBr1UdCtegsQoDhaCR5DsUJna5QIiXpfFl40e4EUchAdhK9lXvr3tET5sb2pCLNMspFWa6KbDGvH9ajstZQXasEOyYxcZuzOqlzCUh%2FDEBjqkAeCjXSp7iF3BobWRuvqvQ4faIVmSous76mJWDlkNV02canlrNG6CU0SUj2yG80Po%2B7qbphTcmkcuUx0gSHpHFTl3pw%2FL9bZF3rsfhsWPRZiGCc7aPXy3%2BqjTVDF6T9fjwn7DHZR%2FxsDObZkqzultOryQ3p%2BK3OflJWJTAa2djerlpsgvLOO71z0LuM%2B6dErF8qKVNise3hzAD341pfk7hTXsPSfg&X-Amz-Signature=3875dcde75f3068b2e992991fc22b3ed84659af4fcf2fbdb54f5026a4775d207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
