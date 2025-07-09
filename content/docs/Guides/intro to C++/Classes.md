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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDB2X5D7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPoN36pHqWInjkLz8x6fVkRexI8EU6Dxur2AM41rSHXAiEAuJGw%2F951ixtX0dkLgbOXyj9BIUhqyDcH%2FrCYvbis0CIqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3NnmVTIJgscHtZMCrcAz1yB6%2FBf8N%2BxyeaZ8MWLys9Zf8qezRP7yu2KCNGDW0R9vwn1n%2BSa13ReYIB%2BglEYHOXh0x1jHcF8jBIx%2BYiulz4tNlwiyVEnx6G4JM1S2B96LyFX6ZIf0Q08s%2FasaSRQAgsuj7GGveZkQ1SoiTnLXUwDJ6P%2BK0g3lfc5h2d8ZkgevBzlEXbRf5sT7W4J2l5ckNHck90%2FUrJM2hWEC%2B8%2FJQtVjFLR5mqid02w46JeddCIzG4SN4mSShGh5DvJ6r6obUH9lQmpg8FSpFUpdk2pqZzUQjyjtBGuuNvLq%2FWS8kQyH%2FQmm%2BNbuS%2FOLuGQJcOna8wEka4vFeYza3d%2FbLcqjB8GrNaQspmKJu9aYQ2PfJAgMRnLy46tTx7D1hKYMf4Eqvor0Pov%2BEpBSUn324UoUI15ekdAJ70%2Bl0fSlfAr1%2Fg777pzo%2FwHUNDyIsPVL8D%2FnBy04J9N32q1yCXeuhdwNU9%2Fn7CzAXHn6TF14%2FlYN%2FSLZisTsbcwVo2w66choiH4WzSfJIV1SRRlzWTdXBp39zZnNF%2FqGWvbEi8MlWVGrHyCNw8AUz2tPvwZHsfb6uyicdwDVHZod4yGwRxD%2BHNk2kI6cHkjqbM2VuVCvNdjnIw07HebsJVEZauNhTZMIa%2BucMGOqUBn3wFNE%2Ba21yhx9DzVOhHo7ZS4tV48RSKmkdBs4sMdz%2FH9pjU8S8mNyWMMNDw4VRHMFrFheqCPpyACpT0FO1nYj1K4WfyM7%2FyY45dEZrqyPIk6TjN%2FKG6VPS1%2B%2B4s1E0pFR8QImPcPDaHQZtL2mHYiO%2FYl46vUerYq5He76iR6G2PDpQtjyCjwLhfSnfGZK7o4Hg9y3ofeXjX46dll7lBZg5a1ebe&X-Amz-Signature=be7f0753c1072af4e6860fb1ea1209f390b700d34958705ce442f1e67fe5501c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
