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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466524EETCB%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClcRlPCy0V75hlWnhdTuGfa19ilDcawi4zVEMLYF7yKQIgOn2zuGYSmE8YEa4jziiIi1ALJ8ss80l49FjLhaCD94QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2atGgx1vwfjqt0tCrcA4npUyNp2X3Mciyy95rqo8XrrffawUKQsOC5VDgzBWihk7SnaF0ZI%2BEMNb62cLSyv5F3Z6gOdMjoMvPFHiaJp9k%2Bd4kAnk5M0o7vWOdLxFGxtWLB2KOXjbkVt0vpMm6nHr6sHbYWpLZVn8Rsq6leuwu%2B%2Bi8Ixe2%2BaHE0aqcnWOAyqUXI%2BXb9RWWvF%2BETnfFJXdJrE59LOozkeE5hSHvdYBumRuZR8YzMCtIfK0%2FrEVzoNkKQjWSkgX8xik%2BXdJHqqu166eM1zzdQh7KsBFiDTNrr1SAN1DevHf8oyt4RvLLZikUkfnrD0Bv9ytcn8Sxpn4MlSuyI3rg6m2qsDBcljc%2FiUPZXUi6Q6BU69ITW8r9X7Dpajm%2FBsm3T%2BLwDlr5Gmskkq07YbDv87m%2B6jap1RoCakhKgd4bOdEbyskzNu7anoIycXvSJ0bgKtOJUxQzL5dhfpiRhhOlAaL2Vb4oJmUSD1Etug1iqtqbbfvDgfbx0p7bIYR7%2FO6htuDVPUxDLsUKKuk3aSVAnAczGi487F%2F0BrEbVZCBAOFdJcgXasnGwk1T6OBWYcJud%2BsX2qHFNhHxicWSxkJjEPLDVFTET2mP2AYZNDJ4JmFAJVu2rwMqvRGp3MA5s7qtR5Q74MIjT8LwGOqUBYzm3x2MxYwPGfI1VxuQwmc15hDpAyFwrCl49YG9ebY%2BGO2fyL8RYO18KZ%2BBAaGrXu%2FP0b9LWFb2W8V5a%2BHNjyVe4h5OZMkvim5QxgGm%2FmUpIbHhktmkAr4IVYyyGfjcEmVNvVVaCc9qcwn%2ByaDUgiQmyAxcPgZ6Y%2FF11NzyC2MFkdpgQpcfNJrUfPQU0SoLaGaeel3Abe%2BW1pw0yzx0P9HBXfEw3&X-Amz-Signature=d88920e13c63ff8f87d0f5ce7409146a0983e2487acb1a3cd460189a7caf1436&X-Amz-SignedHeaders=host&x-id=GetObject)

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
