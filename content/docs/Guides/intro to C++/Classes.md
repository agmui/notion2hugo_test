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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNMKPPPR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAPJyk3fefDCsqdRJ%2Fe5DwbV6GIp%2F8eb8nUmnoN%2FCCwsAiEA1l7eR79L3sjKxqtBGWqrZH7hogLgXZPogQojMC9v4EkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBsr%2FKZWOpzDezrHircA4pPWuIw5yS%2FkKTaA6%2BVCwS6NNnOllEpVtIRIPG9OmQKCahQDVeHGksa5rHyOJs92VIFRhsMRduqIbveUdMoglQK32RaB2yqQOO3kEhGcH2c37sBs%2B4bzuP1tUTVS6DWQxUN44YYlX5HQ7VvzaoPC5hTWkNLmkAvL174Zf5T68q%2FdBiHIVz4BNWYPOVgxIG0%2BMuZtTQO8uVbTCuK6cKK4kdoZstxefTuBuT970CzwXmAj1b3kNRsxJDoTWrZi9oZxoh7LVWaQJ2bx3edd1hlQAFL7W73rBtDqFS8ruyX2O0pI80nIHg6g6tNZtWespREo%2BoTkwzHp28RvhbfXEIPP8pGn%2FiA085KrnaXXZnStkt5fvACIpRJ7Fs5TSmIsABDaa7O1bADFtlYCngkPjBwpLKDiBV2tI%2BL3V8pKMZ7Md6G8cQj7yq4w4VqsZJQiyfkAHYtRXFG0vtuYIWzlgx44Juyx%2B%2FPawO2GOx1sTWwgnKjujOzRt2zP%2BIqx%2Ff6fhFd6ycQ5RxoTOonIqSCTPF2%2BQlMSRZiLdWPg8GFSa7BWnSx7kWWOF%2BMwytxKnVnOzfSvuOsZ8g7%2BcN%2Ft5iXE3GRBumOutDqAaVPALpbh1XdQxxVTxW6U10tkBEkD4XPMJaq0L0GOqUBmTZ3VSBOxQ5WpeNQFVQqL8HkkoU9GcNsvOYnKkQu%2BRWOdLXRVw4T8OmHkI0aqwaZzkD7Bedoe4%2FC47Ago%2Ffb1f0Ggc3agJC%2BpOpEWh3THD%2BATmcZ4hYikMVJVMfg3ZB9wreL9nTm46%2Biw3r%2Fq084KoUYwqjRRO9DFVWjCYzUKyosmDhb1ikxSqDZU%2BnduozQyC8qKhLT%2BOCeNIijZvlzM9PtBmG8&X-Amz-Signature=2f0a34e8118133aa00cd5edf72d81f3a22c3cd79df4c573534287e8da531d14f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
