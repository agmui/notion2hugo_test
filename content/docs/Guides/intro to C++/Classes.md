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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DM76HAW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKKk7BPk%2Fa8HV3ENqdUZRrBeZTfjr40kn2dU%2FN1SSvrwIgB7FzChYA4XctMze2H3CpO9aPayrnFvECiRgqYcKYr04q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGyGL%2F7fhFCHFTFRsircA%2FGV4qaZ1QVclUrCP3vPSgWzUomTuXxFfAd4pGbuh2i645WYkHn%2FPrbri96I63wiPRTE17ykGfy%2F8NnulhjR9rPqK726G%2BzmSYtW0aK0e7epAAaGAnsMHNRx4EDtMsmypZqrCvAZDnHzQgkXCK0tF4RdqbdboIgGD%2FlKIm0qPrj8HJaPAPxRJGi4mLMolHNUYGNovioWiIc0bqmg%2BpeIjmJOF%2FkrRyDA5uGK37wLAiGHH5cZ1dtXU219cFzBlkQ7vPN4DaT3wTScy0zFhFhrcUxweSbYewqv4SPz0nt%2B%2FBfUF64o5TM045i1iSmn0bXgjLLcWRZXZrl2UX7oS%2FQcBx7mcdB42FGjqbvxBdGsYUphG5dkUoQNX46JxxnEyY3ecwWRrls6pvOk%2Bt7RZXubscrAAwHNNCXMSK%2BG%2BDr2Ad1evLSy4BEh0h76oA8B0u9eyFLeCBQaT1PIm74LtOQK%2BEQpTMUFMtE%2FZokfe4AqzsQO5CWuPjRSb9BXR0weAJVcl5vF4WAIP0u102pjNWClNdnfljXAxM%2FTseItaICGU97J6dzZrAESwAvhZl%2FsvyoNjbWnEMfbM9CDbUFZ0Dl9UWT2iUhiIYzv5GJVVDKrCwiRWPY%2FzOKEfZoxak28MNb0vsAGOqUBxeR68r4RkAkeVXw8aP0krxSiwyNybumqQqgn46vtDNHvXX9Voe9xKYqbC%2Bx1%2B6C7eLLc8LCL9WI4gm2rADOuDN0g%2BGGhwqNFq1QswuujyD8zqT71C%2BFtiwo%2FYTXmE33Hm9NV5YgmScIOUGvxi8THjIEYd4UVwLWAjtlcQOBcqGZrvt%2BJv0XPXBnxuv27XP2Xgzz6GSiZL90YUfZUpCvBSCsgslNY&X-Amz-Signature=0250a0be3014edfffd35c34f0502928724a8b3afb8bd7ef3dcb616263de2f71b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
