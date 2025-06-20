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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HCKFTT4%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAzRkBmh17cVshFywg0rV7vO8CFLZCqMd%2F3UP%2F%2B1r0wQIhALWpnxor%2BAlK0FFDcdJCq84XBpE4PAJaRVw41N%2FcD3Q3KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdVA7pqpdVndQzPLcq3APx0TRkBL5ZywBGMEvMB%2FnTiobQrmNj3XYZa3Sy2Ng%2BytPLIVwSDcS6NvMcyjuVKga83d9kCMPfgJXyWK5nlXrsMQreB%2F6rmhCS3fefKnM4hGhY3%2FYRvjXN9BDInBxb4nJ%2B2v8wQ%2BN5tYo%2BB7AV1KkvqIzFzhHWA3fGd3HlWtnVG4WCYIFi7IDdmu3E8PWJYmBcYeYr6omkj9KqzSW3I6qGwHiPgIFjE9VAgGiZ%2BHcaCRVh4JTQLh37WExWPA20frZS6qQmeCiA36dmPhUEqc1kALKlyEJKFf84HKqDALYnJ3DWA7BJEJJPwkg5K2hy1Gb0d%2BUllv0dPJOjCX%2BAdD7buTKBMVy9wr9pFuwh%2BfX1W%2BlrYPu6p%2BKMTW3WPkfbSHSw%2FdOLTEHjeeSk4ZcwzDdst5CML3R5L%2F5OXoX2ewnYyHY5ssLUS4dKZkkzB5LOuRN2bk5nB9UWHHEEyVdq%2FrcLW32MahWFWwQnrGjdrTSPwa0Vl3dd%2FTvF%2FNaiGgrHqx96%2BPsxaGtECVN9X6C2G8Jkh%2Bk6PQnosQ8DhGGLOeTCM6iVwNAR9K2faiFo%2BxTuwyb%2B7%2ByXgdTo07aVLvAWYDoL2RJDlDThTBvZsBb6QXN2%2B2rVqk2I5aWwMDpvgjDpo9XCBjqkAcXYPqPmpoRjsD5u4lp0HyCaKiGV%2FR6ryr%2FWmyr1Ba58Hp8qBeuIjojraVuneZJNQcKKmenT8gD8cRWJzqzm0abtXUmfU4wI14S%2FdUleLimmRXGLhETbkZo8YmZqg16A3EkejcuSpKDe8xDMlVb86aApswpZG5FaaJtF6UYw057ZTKccuY2tayrJd6yFl9SuVEWJzseGgcHAYV4%2F44Wqi6OrH4hr&X-Amz-Signature=263a0143554d8b6cd2a663aa6ccc5d16a998e1b083e2dde0f64db8884fcf6c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
