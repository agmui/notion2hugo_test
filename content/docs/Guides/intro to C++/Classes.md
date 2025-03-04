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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JQXT7WH%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMuV6U3ugJeh%2FiMbllOihdAThH%2FrHkxE%2ByOatJOoIGBAIgdsuYyoO4kurE9Q1jf%2BTa87OBs8EogFslz2mCpg91io4qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKf%2Fsncfa7hHs2UzWSrcA8ao0vnzlbQ6zRHm1etjVYTG%2Fry8yoSh8pC%2F6wdI%2B9fiWnc2JGRDfW7JJ8CeXL%2F3z4D11lbeB%2BVXx1DKNcrkGChek6wqRodyfUhHAHPahVri1SOCn6y07CgtaMEfgRUN0kuFo3kO%2BAAlDIQ0Cuxy3CdI1BJMSavhKmhQ41oPCygtC9Nb3%2Fpcao31YPSUKo2Rx77wAd1ycU2nXSARzjJr0QV%2BGn2ptUgA9LdeFm83wZgaoOXJY%2F%2BxNaSK2LKOP1%2BzuVPlCRhhqSpD8u3MtApD2uqM4Fg2FMqA02bonypE9%2By8rksf2eMZFK2b%2FD9RNZ9%2FadpXoLF6SKTA8LZtHqQN7NH9zAJxtQQnb8TBD70uIf2M2acH%2BlpRT%2FhFsArPvwhUY3it74Vhn2wOInkE44vr%2B%2BvmbQje1l0fFrvjp4iJuw6m0Lxr99REkgFqFgQ4XEibEXbWTij9jxwjG1elJ0AMGi6s%2FMwadFdGV2IFTX1oiJEstxnuPZmeWmz9s6wtIh5p10C7qqLXUeO2BibjZNqciwcKbvlWmjJDhW6CjV8RBW9yBYb70UJ9%2BQ08Tf0ItotaHBq02urUS1JQN0WcUqBbG5x3%2Fes6wNJT%2FkEqw2CP44LQoENoqA11p5iCHoYCMLaunL4GOqUBDW3CTNjYSV3L76Ieh3J6JMQXMWnc9dOjrHyV2ClGRhhGDtxeZRxnqJvR130ZhftaMLUHErj6agP9OtNWOM67ElU%2FhmJrdYIWkwJKzJ4AObxH6JZSib2JAWfJeGC77aQlz5f3cwbPgd1G4GdiXdhARsaxdi%2F5ue%2BHMVuLm9LqPY3HDvGTPYG%2FQFAlo5%2F3N3poHQVtBm3PjyTgUiyFYGThXczckux4&X-Amz-Signature=a206bae04a4b53270f6d47b7c7d4e610ea4d34ed23ff7f2b55505c9cd2a13ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
