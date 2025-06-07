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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T57EAI5X%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOmJ%2FJSqrTTXLxZTS1E%2By8jCi3QrVVUZnSaorPfHItDgIgN%2BbdLix5Ml8RLraGdnBqeHZOfNrfUjdCRXS2TWnYmwgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDM3OzxHIDQAzvto09yrcA23Z1Vbm0WP2oGX3bvOTXpoV6eB%2F9z9mBCofl8rIzoqSa%2FSlnrQc4bB9HKSSEg2a%2FCLxPn65s%2FBEzW%2F%2Fhm2uSNK5ZQKebJ9xBMbp0mu1r4cfFS1xzeHHjPBxER7Rp5iM%2BpIRobG2nnWWVb2fWNkEb7KxCuTcNHw1Nn5wLkZy80ojSmjnBdXiiWEa9%2F%2FtHUR7IoULgM%2FbM%2FSeqc%2FQ%2FWawcEAKeEuZAbiD4cNUN7FO3ZXfKxcosiaEfWeoOKm7VqKwLQrJhCbFMTy1dx2acb45Yyutxx8qcHf2SoDYy3SZrc6ae2kNVL9ftr7W%2BGTx%2FxbE7wYS%2BVkpItTJ2FH3RzJwfjhczmb49FT3tUhwdXnixMG%2Fsl3A15doxxvtsXMTRDXzWgq1S7S3BBOph0N1vKNsO2eHlW9ISV9UrOoJJvgVQb%2FlEQGdgRoqmYL9bBxkJh8mpEMAHndKE6G2tQxEs3%2FDozmW9ii041AwE0Acj3emL2dsQT2e1KlIFlpy6HUmeLuvHYIDkFJdiewpQKefQoxGa16ZNZaDbh2ZjRDOCFo44VajqHMCgPfb%2F8Nxgtov0Wkv3FDKpU9l%2Fsk7fo41o18tfAZGDLo9cqJZROKvBgC2S2S8%2FkvpRgYsbNXwgzbMMMv6j8IGOqUBCyAkrCZj6q0My%2FiY%2B%2BU1YyL6%2FnBYDWMm9NY1RkVA51fIccmk9Vhy8I%2FqFKyoh73lvkf3jBvqgJBW93QC%2F5DiqaOP6S%2BWaK1F0Fa1u1heSX0Z3PznZNygxnDYmhhkV9ODe0WlfuDjB%2FQPF44VgYMydZ8kHFhGwoFoobFJKUzoVtaKr7okrDsSRWkn01ACsQre0k87LR7MaYY5PfnFvI%2BwIbO%2FYATt&X-Amz-Signature=98d9df922871f33319ccb4613ea025e51492b577620115095dff0b6303aabc9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
