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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MEJXXL%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYlLJUew1zHKVdCL4alHSIxeeZezdK9mkagXqGoJc6jAiBDV4MFslKbR5fFU6ogeu1PGo9k5FZLyahrKj0OqTa45SqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML7rgho0H9TwY2sNrKtwDosFkRSaJWTTuYmEjhsG9LuLNWe7esg%2Fg2ZHV0UnvT%2FwrSlvVfmHxdVPWQJeLjZpr8ZIDVG6Y6hwveqgUm2G8ff3O3vH%2FEHMlER2XImxDUZvOB%2BFMwUNDWjcyqrh11%2FhTNFGrPlULgA9vebUDEUUDqSZGgU%2FeoszFiiTrJ7ClktCGodNTbsf0l8PDKsmYvYMbKT30aWTM8t8B6B4%2FOcCEgtfLQbPFfWX7TyOSekGYPHF6FuPzRzkntUmr%2F08E9%2BOWlqpGADTGgod4yFiyo%2FxdYH5BitTntwO2QFws8qKbMJ9%2Bv6ceda1oe2MN1yVjCsP3hSPv5BSl5wRi37xIqgZfx9vVQdMEylQDA5hAqbbx9mpH0BAAO6Ig2fz8Dafe%2FMtAMfSpKzOlPR4PHm2aVh8%2BttvSmbYUoMUQQpGCRbxtefiInAfze4pPQWF%2FeSnu75ZVx9O519d9hEW6nOFBLq4lUARMBZGsxOaPW55Vedb78TSZVd2sKqPUBgzY6F0sUApjzlG1wLA8QzfxgLHj2XfGqE3Re35Kk9fVRIRfNduKE5vjUvGnm4DaBZyZFGLnLHJ6knd0D9LDLHmEMrg54d136uLnBU%2Fr6cSJaEb7XKz%2B1M7lOrVa61M5RhhYSCYw9vj5vAY6pgHhXa%2BSds4osr7YFNSrUhhSkjTBgjw0jpR8sXoDN2jXB41pCdVGL3M7NY5TDvF0tU7C8wcl7VCOfZpyw0KB2EHZ0%2BWgJHvBUmtSQpxWrL3VnhS4DsFa2qocsUv69yWmRwRooPWEBiJ%2FIMcdlQAdoVZulqkj3naGT%2FaJHNX%2FEYw0LVPAaUwKwP4AnCs71NnJyJoYqogITnbagtyip%2FNZSDvDdkZp0JMg&X-Amz-Signature=45ffc5c72b0c0cd2988603c94f37d10e2baf56a4a54e9f62e9babee27b5543d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
