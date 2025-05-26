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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJDCETP2%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCa4eVSoIt9auXYGLGpTxoH67%2FiOrn17W1f3dQ2vIt3VAIgBJNG88nxLHQqJ%2BZ0BeG3U1zoFwzn4OBDdR23yvuDEYwq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDB0MOg6sWzlZGCn0eCrcAy%2BO1xOsrNGtoA%2BfpuZjif4Emk7q7GKF%2F7ZoPFQo62c9qZcfk1kV2SIF407eZJiizhtkgWE5N4cPO8TD7RazARnbH%2FShz2sxFCuqvyrSl55jr%2BgDBZ5oEy48%2F%2F0RHfd6gZbe56KcC6ePSmTBF9FpsRZmE4aObXzRsyEKY9FBQW17dZDe4ipPVy3o1d63RdU6mKWqI%2FbvsgbniZqWRA6o6Bl%2FUzIrfN0ykjkyTnzUR69GigzFX3bXjitpZiM3UMI%2FO5V7D%2FxLZv2fUTx3rw3IzxONAn1T5YT%2Bf8gybRmC2yZqTn1pnhN%2B4WQMu%2BI89Yi%2BjX0w5Cw71CfhTz%2FQlDhgydahkIU85i0SGhK%2FMosv6uA1NQPWIK6kf5EalExlBYVseZOeyrldnIIx2Q8xHlR90M1dbe0FVehGTlLbc%2Be5W6AQ6C9yNDa0qNqX%2B3sZJxUrp9almhmAsFbmgkISc8on40DHmTPWbKYTdAzV7f99LlTIsPKQpa2zcslQTO%2Bjghc4waTIrf3z31hAHpfNWDkbkQlmvSVWRvD1jM3nraOO%2BS9AH5rdYaZ2ZUMh%2B0vjAvoDJpvQpOLuLPnWn%2B0QTodKQBvm%2BclCOqr6KGRlGPA61Pzn6ODtdYwxPpgQMuSuMI7n0cEGOqUBu6CE1QuUlQ%2BLFqVrgF3coKPQTM3QNvGJc72n3Dfn5XHrukV3CJh5q9h3O5ferYcqSWEeyR3GVrJ2JP9E7uS0UPOOP9Zf90McJUh%2Bn%2Fxq6NSJGwGr2cFzqL0x5eqUn0IKRL3RGlIsVZqp0haeXD4XIBl%2BhQxIbXm5Sjcs9lniRTWHZcip1T4Yj1rae7SQGEgS8vHyHoKhmVW3%2Fs7N09aJVvIcPl3R&X-Amz-Signature=ddb225c416fb65d208d1459054d6ac558197d3c2af782386876d444c2d4b72e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
