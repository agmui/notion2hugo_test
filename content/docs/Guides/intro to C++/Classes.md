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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEHVAI2T%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPHA7ZaKpqEsJRdHnmf73EBCnL%2FSVqQVGi7gNGCnX6GAiEA4uZvsv%2FcyQJu8FR22BSpXCxj3LDHG2HKpXyJXGR4YjQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEkGxGD5ZHPptje3bircA4rwKdziOc1DAUzs5P44vVLBWKk7jwdJnUs%2FgYg1Z9md12nK%2BbE2E%2BVBSVGLLFFCXI3hWbG3hgs5iE%2Bbc9nKbMQJZSYR%2BT9bSOMLCnnw6G4rZCH66sQmYE9yetDIwYAHoV3q%2Ftk4n2iQSxb25jRMhUDo%2Bm2plUl%2FDKwbYXvfrrf1USXnbLsOgUF%2FQAiKDaNn6agBopkmJKnnvjgWrP8TlgyJZiJvRHhQjbfTa1Ga0PBKJoCC5aiB2LaMrdArNtl3nsAyJCrgE%2BxpmWzOkLsfRfWcNc7W%2FbfO4gJ9vaajkKl1iCsVMsvpOWw8T53IiSNkMgGC8%2Bmo3fBdm6KXSUaiS%2Br1TM2RDk%2F3lx5hept2NaLbkE8Zo1w8xETSxzBSSW327u%2FOkjUXEfWmkc8jL8XwlFwz3LOQEe8Pp3122vx9t7pbDDNIVeDCEbGpJDdUODNLWnXPGs2goivk%2Bs517hyRZtNmp4iCjiAv1VbHd1ygPAGEJ57gnJ5o5b9EwCRKIjcNMvm%2BJqazpqUvEysJuV8gqCywa30MEzTBNgb7sd00p4p8AjSc4X4g%2BOEw2GtrlJS35NqxW%2BIuB8EoUIWOicfgQOL0sIV05qL43ItR6R0DyZ%2BtsCSjXgQ8DKyZZhHpMKPM6MAGOqUBV2lpW33%2FDl8KuCIVcJ842VMtTmiwMsMAuI2tnYSJmHesMadpxlyo7WtyrOxqDeL2xV3EycW6f5jZVa85kdq1HutfUZsTO6ussuFZMlMaaGAaWbYXPIA3HGo42HOmvUb0PbDuDT40QeMyvlFozKH7HAoQmAv6gnsWepT9RY75UCiKqbC8lej%2B4EPPU7OYWmO8d8dXyWl2EIAxGFZp0c4%2BstIYipqc&X-Amz-Signature=ac23f1e7a07987be0c8fe96ca9c0e9766a252af49998b16020e13fad505f6a6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
