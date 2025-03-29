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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI3HOEZ3%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBtrzbqYVFjIbbxefZCwUCF5LvmH%2BqUic%2BwpQOF75UbMAiBUBVpmeUC6C5BBphn%2FC2CJ9dyqFxmKBRXLbirQ9oJs%2Bir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMetLSFSYbYJF3PYR0KtwDzO423unzLm9crrIW%2FR%2FWt7e%2BWvSmHJ5MdTRtWN%2B1TxiO9T0HS2VMg5WxeO%2BC7n5dg7ysYSVuq9QijXPljWLUtR525hB%2FHZKTNOhqgtnN%2BO3T9yJUyFX%2F4%2FEkS6HmTC2BlbdR8sY0MnSE18j3e%2FoTmxlZL%2BXX0q%2FnCQLhUexs7Jv4YqarLVvyWSdffQPgieLm9ovGK%2FYtU19JS9AJQPHy5UGJqFpXw92VIVdsn5a517rOe3fqCpqmImib2s9h0a5IhXcMgxrYNk8mmtDY0InF0wssysCJ3pnB%2BXP50Dle04WO3W5EfMr4X2pYUgv1RsGfSvY1JWRwRQtGyrsrOu41OnmaILec1S3g4SIoj3BLJaMalbSBqB%2BsICMcJUm5rhfu0JBGlQHmUfY%2Bn3LD61s1y8RsMvrtB9ID0UnSH0ckhmgTH9%2B6956ghVLlEu027%2B4lRq4NAo0XAzIXKn7R4v%2FbU9%2FGmvwxMHgHILSHSKPzoqSuPCcA5p8gGx7k%2B4%2BqjjmEwAOwvskpRbjCcJdf%2BqBmjLbytDx4w8vuAV940tM8andsXXPUo0bn7CtTHiIaTIflc0G4aV8IdUQU8pAORYSkM6UpnOhxt9qL1qcm%2BTQV6ZU%2FIbqLHdoWmmrk7l0w49%2BcvwY6pgG6wtD7XIqOF%2B0IQMrbGMPsglpHne3airEG9DVbyZvneviyaOB835SV9ViguLNaKhBGYwmYAViZWg4TrlZfIQcbfYqk7HLq0P6xoG42vf19sVZFDdGkKJ0zVX1IsZ1MP8q%2BxCY2PG2RPuO4sY1b6kducFvddL7UxTpDq6TdfNI7J7Jk8NACJwL3WoXSbORvcYvj6r4mvnk7LOqFmhU0wB1tWj3043Xt&X-Amz-Signature=73d2f1ad12431200d4e0b94b18eccb2d1be56822cf3f59b634020ad1866a6ff1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
