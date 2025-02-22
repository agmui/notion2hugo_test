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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTT7XJTA%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCluH0ORjtXEr5KgQtDZ4IvUuZboFhegUUo%2BYua5JNTXgIhAOq6M7Br3SMugR5MuGF5gBzJE4FdbUz7HR8VeDu2ZeTjKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0M6enw2GE60wEB1sq3APRNXKwAYQylKn9LvS50uUO8Njkka52Ch1W9%2FDc4y0r0rUiMx78RbjX92qvgqf6oyQw6m59NZYwQZZVJK5jGDufVSbRNc8TEG8k%2BiiVDabSocGE%2BO5rS0mhJ69%2FZ22jXLjMthrqZLN86%2B4w4GnV8DV6voAGlyy1Dks4EVQmzn1F8mNfU4SpboztnYzOPM94Brx3R8JlbeUuj0fGLnaguAJoVFGTTXd15fmd%2B2IweigUsMH4AkRvH1dpe0duA2YtijxL0%2F8Z%2B0834PE5xF3mZoctBuCFF6UH9AZ0kHPIXv4dqSnky%2BpSjpiwBeee4T6KCfdQqFKyInL53crk7HEtyZrOnrq6UBX2qshADFtZpY5r5OZV8HR8telVhPitSIrGlKCodeEwWUKMRulcWtBTekQhzv6JQnY1KzlyobvXmb3JAd7EJ57lL4JWyn4Fad8%2FDwGybBOTkok17mVuMhYG%2FoAOaVsvlNBGmH%2FI8trMh015VIVWq9%2BIMniKwInQW2hPCbw2mgMwETH3jqyVUBDbvYeC6fL7fudAf4slxtJdlbov48oEUv1Vhv70rYuDZ%2B%2FWjI1rAvZAomk01T0iCQkIzSkS9E%2FsjeRVQQpJhnhjL7UPitq2Qw%2BhWqvkxgowYDDm0%2Be9BjqkASsStCdOJ5brkLPPblBCgWc2VNaDrKivIXrbALFrfLENsO5ZSlBSjoEZYfmKYoaKs8SJATbWyd%2FY4DsTj68G2919aXJNeJuHydA%2FFL1vIym9Tri63mB8rwmk93cgr2cavscBnMEgVM%2BaiGWMQIYBttBOUre43ZlidAx9BR7ydVSJlRR85KXx4pEiPVgsEOnCjuXkwSa1eWml22XGj2Y5XMLHyV8m&X-Amz-Signature=6d8058f4a9d26e02418e6ea9f0df58e985d89d002b884ba8269de9dc321197d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
