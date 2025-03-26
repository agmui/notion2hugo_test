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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCNI3LBS%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsj7iZKKYx9lCIgbqrhaGjAWh0vsV6071%2BZF3QX%2BHYBQIgJzYF8aQi9DoS%2BijPe57uRX2kY72Lo3UOjKWTwAMA3OMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDE6mwUu2O1pZo8Q9vSrcA0IX%2Bco8dLaasLsIw7t8IN3kt9tTuotrvMoxSR29Fhxpr4FKXWQA4kM8NqG2t8kagdUrgwzdB%2B7wBdBVIxY5XBcZ62Ic4EczNHM4PaR5yP%2FEKZCpoueB0ly3DWGj8mmdmm0hpMutBXAOuI%2BnFc972VSZgH1ut9JfvYE%2FwciFBXtaCAj0hl3GH5Gx%2F%2Fm%2BfoHLTlY%2FItHjgWFDPtJq3XFJ5xMxW4JP4tXfFSqZ6SwDo129LKm7qX3JdnETmWk92UubCKO%2FqG7obpfVUIoM%2BZLyG6AfPYnb2aN5DizXPopo8XOMUflQI53u1JRU25ECYTpxceR3x0HG76Dd0UZE3uLGVH8I7bbw6X3jP4ZTHNkBCW6mKFY4t3ExOCEEwv%2BeVpHpi5v8MJivtE0YVGWKbCfnKO7LBxV2GENwJnaTjbT02NWbgGGZYcEOaq7wUC%2FPTFyilGOKimH8PoaF8x2nTLyUzu%2BuAPl2udZjO%2F0%2BVn7yg1wXTi6B5edpsOmsibrR9cAM0LWGW8piOYZsbBPq%2FSYGsK3JSA66AUBdSsCZ6zc%2B6CS1R33S6cjPv8FQQkBZdHDw4ut6IDGqatFjMwzG3LhJgNk%2FepPB7HjtTVDMCwfb9lttIcgdAk7%2BS8uYGbsiMNitjr8GOqUBYp%2BrsopOUyy2sfXhZfu4ymLs3YKYIlYtdj07We8PHySxFlkp269WLZJcBrmsR4A2o7pwxQZcuY3sAxcbfkcPrvZaQNz1V5Oh45cGcsOlQY4DLWAv%2BHj811F%2FlEt4PRKHOPIhQ8MZlEnxlJiPJI8vwiflSldaXMmC66GybbDB36KDdvArEZVOn09KhIXnbgnPZz5oXMxZrXodQIoqa463Ez1FZSnF&X-Amz-Signature=351867f7146ac1ad5c9566f53561c6eb04b18f761053eb84ddaa5bdca5e1ee20&X-Amz-SignedHeaders=host&x-id=GetObject)

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
