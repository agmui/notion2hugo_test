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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGMZZ4P%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDhx8np3ZtKd3%2BvAQVMLRmeioVglFadx%2BD1HUGdk7U69wIhANSL3Mv%2FtZCJjXpByfivp5Q8MwLrABdqJNLR4yqT7g2BKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVpY8h81WfhTATT58q3ANF7YkeHk%2BLG6iYmMbj14Rv%2FbClA2rhUss7dH40nsPIVu2Mww2UpM%2Byf9D56EPQXaGHKK%2FeuYHyBI%2BlQuX%2BoVlt3BuxXo%2B0lznjIZtzkADW0W7hwNzr2Ca5GlUEZzXqKqDgUCNWco5VvqFL9THsvRdaxSqQOaTk2Sc%2FjUYbf2zWn8CFmEbfbJXmGseZrZNE%2FwtneCmC%2FtSJs6DNlAjQRqHvyh6rvYbei5Bh%2FkQlPhA6D8qJ2bv9svlsFAZatav3aW0cXlR3AFtO2YmsCqA0vrj2QK16TNPgDVjWRdsrNo5Ex59vB8AQlVL02NmpVhjw4DHEcotUnt7mDmlSkQRFKSMAoM1NLAUT%2BJlc2xziBYcis%2BCVSscAlaQ1Ic%2FHKC4nXElvxiusg7rTpt8gsWXd2UB30HkSdaJNadBxNKx03bDgeusum%2BY1jLX2JIyXsnpk8gN%2BYH8SQmo936hLWWA6qQ9NY%2BIpE%2Fo3%2B%2B3qb%2B21Mdu%2FuM21WzueqBfKgJ2tS6fNjCa4zilUl%2BSe5bsj5WtVJRmJjT7L7Dq5GvWvSVca%2Fv%2BJize5PXqEObMkTdmuqlFExauTPmIAvFDn9NuSgHCZeYOMiy1PHZ5e4ZI2O4K4R0N9tZ%2B8zFCUKuvjMUqivjDs7rbBBjqkAcuMncP8lodYC5xxhu%2FHM7%2FjCW5XqCq1qMS3G9M1BK8LdX6HvCJzXSjImXAeAOvoWBA%2BctQgr9NhTkkfjlcdKBs1uaGzdh12WIPqvPxpL0A92sHXhhWQkxCCft9x57kzoltXnQxi5IzieF20tsehvc5VYmPLk5xLQ43W0IoizwCRiUOJOrY0VYyKZtxkP5NNjuNALzFARLPzHibBWaUJPDh%2FlfNo&X-Amz-Signature=cc78035999ea255b4133fbc42ab1dcb49305e3a8b8b392a5f874389ba350eb57&X-Amz-SignedHeaders=host&x-id=GetObject)

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
