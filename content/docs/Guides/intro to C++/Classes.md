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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFFZZHZT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHb6SrzR4tYayEsL4Bk2nLpCbDSQW%2FxD27j22Z7Q%2Bh7OAiBxzVg1XvvbkgpN7KDN8zLmubsFkLGUEgkt8NmdslAckyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw9bXE8mNH0Va1ObLKtwD%2BMwzMwqr0td4WgNH%2B72zNYW1GM0T%2Bd%2BBRGSVJayIMIHCWYarlrUvXwEjq7F5C1VL5swL5ydwcKnuOvtyzw1db%2BVXL5nCntBvelD0PwxB4NnL64oWn5qtdLHROXLxQZntdA0Kb%2Bxp5PeKUVVqKmkozOzaeuTNiwYI1OYG61QSA02jD625XMjb86JBXSdDvTJNjiQdSXH8UJgYiTNMadF1oKdbPk%2B5jXipgoSNgP%2B6Qe8IMDuY%2FG8vOskxZ%2Bz3EpSG%2BBbwoj377MiojDJPyhaw17OD6d%2FeS31WVdjRQi%2FWN78lW8hLl25KonisUnpSgHnnk4%2F4ZvaUQbQqKNGTea%2FzIuCsSbjZOn%2F29ZKEGcDa%2BdyifzOSaMVXuwh11oQWGVCI1FiVOhTXEK5RJtwe88Fs7HnJV%2Bgs4%2F0yCyVwet1MwISFp8uUPc7zWk95Cl%2BIaQIWjaCc%2FYseTXTOSCN8IFQ9NHzzNdjtrbyHAUKl9o9aRmWZ9kib1txlKjP%2FXRu8ikRSNhptmMWNF4iLZ%2FcHeSgSQ7xv3q1ayCsbjuoNQgjAzNT9frKwp0eQOdr5ioAMk5gH2UV3xabgszvM%2BpGJ4rVY%2FP3cGKjQoZGqz6Q2LPTkZktHsep5TIooXVpgNFIwyNb6wwY6pgF7c0Vhfe3w7uOgn4vkdmGtuKGqXKouYkuvteHu2tBPXRkYkz%2FcbBIfzjp%2FUJRbAf7f%2F2HEFUIcvMt0oQH8uPE0LGjKR5jJT41N%2FOSHtRSN9x%2FC0JSvVzyDk4wclTG7GBPON1QEZ3fy7UtKHGhAB0UZ0L2YxicyQ8HIFr8vuehkASX8CBnxxcVgvHMn8mxNVdfxYeCcsgXDhahlTamsW3OQdcDb2XNI&X-Amz-Signature=d18d2ee9470817a9e3f9a823a756db10cb19481293c07a3f8736b1aee0e40acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
