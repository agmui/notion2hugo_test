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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNVV5OVO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCGt6BxAdlYs63vCsz%2BhuZtIOHD6GZm7c0X9EqzHDf3rQIgS1xQHhZ1wZ7zMKqqAbYqWAuMjZFUUnurotrQDz%2FuRZkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOy1ASm0UaVG%2FcKnkCrcA%2BhbyKBvE1g8JoiA7DAIV0Nsb2qEAnIv9tSxTivyVqgsB1phNqcOoBhSDxYI8Wg9g%2FhADYqlkvNpnDDd1m5JDQUJDCBVS6a%2FRWGc9ew3WiRR3mPUpuA7bWPeMCdD%2FH7IPno%2FwMcoGqrpaMZdJyKqqD%2BTg7F1ZgtQ4cUGsC6ToflW77m1wEtHd93UscBPEqzGP3brUzQfw8JCjXKhDTQnxyaF9gXRwnqbbEeWxfTfMM9vSgIsoD6mZOr6jSVqEUX8sbDsGtmBPdnQCn3r4XQfpJku%2BSj8E6qni9uLh972fvq%2F%2BRG68fno75ONarl63FUujdQ6pshs%2B5ce2j0wimpbXPf8U6w8849mTEX7RSA8TiRS2txZ%2BvvhUFdx6O150go1Gw65piZ2h81TEEJNmtaTLvCViOgSY0eYUuMe0f7434OAeBVMwbmXD3AoI402ehjHw%2Fz8cgIh1zUOuDeOEPmV47hJKZLSGEfbuLJ%2FBusgSGrOxx6pgtknOF9nuCEcvF%2BRbU6Yh9LrKif%2BMb1V25t0lnY9%2BQi%2Fpn9U8SlrX5HrYLMWkdGzwdqE4diyVEzbzewWg7GdGAFM41ecXgEdJvfCEq5QuAAmuqOhjBDA1Jj%2Bi1%2BA2I92BFaBSglVQPnsMMaro8MGOqUBTkTq51w2pARwqzoKCyLORWkRgVLmiRh4c9n3I4ENL%2BDXz1NOoCvQEoSTQPXAli0QKLnGY%2F%2BknChdxdAuPeYNxNsLL0kNJm%2FJKlELwkDGrQPRSZ5ivnYC70k2Hor5UiS222zVNiJFNa54WDPVa17O%2Bum%2BGWIwroBwQ%2Bs9e3nKzOW%2BXk%2BtwCrQsFSBVeG%2BZqedX7sPa%2FYqkWbuaspQprtP7fpKXLre&X-Amz-Signature=b3a956132fcf583d84423cc3718125c1b6ca0e509eaafea93694a0087ecf9d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
