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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SITQLMLI%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDRu2BE1bFpTWp44tAIq4SvXOZcilq%2BM9p%2BL3X58QLY1AIhAJSB4%2B2NoPT1p%2F109plFeJmURbDl5loergR6sdpcbjyxKv8DCBsQABoMNjM3NDIzMTgzODA1IgwfP3lGO64D9e2%2FfWIq3ANNFCALfp4bkjXHlKDKBFN7LMfOuv5QedkQ%2BST7SJfCyJLI7ynrOXLgfGIZNulP2M739nZDgCMAQOXdz5PgApO7gWGzPuflCUJaHq08781WPNb9HKcTk473bv8TZBNGx%2FueYNTMhBxcT24ewrLl%2BQ5iYJGFYvDlsHeNEUcbNNjQvbyCQ9Z5pq4GTAPo4hJFcUkz%2FJNaq6vt2Ckk7r37fyzjs84gpb3cgIh8iM7bOwkIRhOUIreiOjUjSA2DHPt6jZvUkjpwG0fkvujG2mnTGVQbqOhMhrOJ1CiGjaJ6d0MbPq2OwyAmA2893DrOPRGikLSAas7h1CCbfhdzjPy8wKtz5uyj9lKon7LbkijPe0gxCzYkPWyzoPFOXtN7eunnqTWWMAQHqm0lHSl6upXRimsrn3nQ83SRLBXph8b68TCYUGZBEVnW6uYFrqKB1boFarso3iwB4eEh8IHfPhvHWZRNDYS5niFDqqUw%2F9TlM%2BLKBar3XHy%2BaNDwJkyc9aQ12e0492W8iX%2FRnqzqPSqjigjJZoWa7%2FxlwhrUmrX0jArJxynKYrrFhxirsSUl2jO0rwc1mTsYHM4Qo02hCKIT4QywN66770VT4FvzebDEEOih9TMWxdaMpb7Pq%2Bjf6jCLqubCBjqkAe4EKRl0pW5Dx7NSwB5EQxdw54EsBi2vQ5b3t178zOm0RyfrEnuGlBFIdhWBgsIvVadEH7i1lUEpGgD2P1V3ytYfnvM84oaN8V5ku1lwTztfTdI%2BOwUeWqPeEi2TvJS%2BDtcXIDNIvEmTNDKIk18q93d2c9d%2FJwLcwuo0d%2F%2FWLo37%2Fjm8wXYakFwsTzTxIC6CudhKE7n3d8h9rfQLEcr%2BkDnSm2Rq&X-Amz-Signature=f2574affb0ee186935c5651e11d4c24246dbb1f54e137b490c5ee09baee726de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
