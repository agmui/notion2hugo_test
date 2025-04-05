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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H4HQUNZ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKQJO7X3W0n%2BDbYrGGCJroJU3lc8zC6Ng%2F4r5acyvU8QIgeulcJmQYc%2FpzFo5pHGK0K8cQ%2FNZYA7rtdBnJgFHxScwq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPWbbVwAIlEmB0LqhSrcA%2Fj9nl0%2BD2xhifFBnfG7pgFGeZG8G8OvZD4ZRN%2B2iTpgpFiMedU3D45rx3nffuWzYwoMGdAkMT1ZJqlLuup2wWFq%2BqjmSoO%2F6SuBz7vVwOWgwkKT3E3of4Vs%2FiZOZKFJT7EMwMeXtiHl12c%2BTz%2BDstSCp5KbB65KdPFqrbBW156Ev5%2BHymAaX0DX0infLAezLG6%2BKASZWLCDjq11JjKyatXP5LdvwUA5TYiKatisPSxWnwFqi0hJPjpotiqzX3K8wO4kHvDGWG5kShD9QrSkUP8xwlMu%2BFAoYL1VNwWNYRL2KyMkIBg9V9ui0ZNuUgdsQhsA%2Bm11I4EM%2BM4gu1Ar4rxWlj5FVy7p%2FQIfDDhVqoV6q6OMBcGKrkVn6c%2F8r5Q4bw0Ix4l6ijgkKexKEzqcyYR9nGRY0Y%2B2cowlFCISfsGKROxoUn6ETtjzFpGxWi%2BV1w34V5S8eloK%2BrHvTrJImCdwCr2DqaH2mh5toJLa9qc5aek6%2FGEtR3YRuk8%2B9cRSGKkIKpw%2BCidbbp%2FJ%2BHgqcqUS5CNRPmcDEU8nDdOhCdwtn7wTMji%2Bq1XeT0gyOAOWuvkn%2BtnUhR7A5BqkIrluypwm2J%2FAs2m6i3DVasXjsVUMHQB1P9YcvPD9biskMJDwwr8GOqUBhh1ExNEu%2FLhzz3%2BfxeKA7D08D5ca6go8EXlc%2FYHFtmSR7xcKer6J2jwnOtP5y0PYmDGgvDb6VRBPuoJIFW4AAc4bPX%2Bfw718UhBrfzpes2kcV5HsjA4i%2BK0O6ai7w7Bp%2FP8t0TnbA6JaWjBUr%2F%2BtR%2BJct4BPpfb2aTOeXAkrNS8WyWRgEOFYCxcCZgJtfMN4BQGur4B3CMWgnfHq0TCvXlETs6h5&X-Amz-Signature=51c0b466e9109548905de7935b90b0bbef3445bea6d2e39539a1393d9e937ecb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
