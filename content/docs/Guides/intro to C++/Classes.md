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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GTO35WX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3PpBZY6Mri7nOQaU4q%2BwSPNmBhXje3JNqoXnB2oBUQAiBKny7CT403QxmgOV3BJHDhn6wcWWpVjgER%2BdnaTqSB0yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMyr6IwwsPxjoIYmO7KtwDVp19KDODHrFnYUMgvD7qS1JIMH29NoKwYpeWOldMlp0KdQjlqPztD2YuKPHF%2BxCGUAFMCzkAoqidNVNbnYc1%2Be5RmW6o4SxpuQxgBIpRzhOnOjuYJvAYG%2Bi8QK%2B01DbHie9xzLPVrfBkhFJFqDsYslJD9bpHqDnHTxrri4JLhu%2BIK%2FBHh1kobTnffHuQYTCeKDqprvEo9SJeQqT0%2BihsF3C908ZiIIwOCKxeyTwBXh0KH55JuznnsTgvsusWBnbOagua%2F%2BbSDBhM2ehOvYm5Bpz8a3XoxB3NwinN0%2FDvteZ7Lz5202I2yyYwCW7t%2F8I9UiO2eppbVTibzE5drPCxl83APokWkLeiuZ8xYvMPWw95C6Kex1TNxOxp7uRrIPSUsJw7lEg0NQgF65TDph8qrFavyMZyy1aKQ2oJyufUNhINdgWcukFiyzh6VbF1xzZg8BXBSyWq6Ngn5QGAhLe96oUcOWSqd4eZD0dw9dp012zvHfEmAu%2Blo9U1U4AAtEbnkLCtznvpOSrP74vtNJP%2BZw5pNQWCmmo5RASPnsmScFambdceYYuyI1yn6kkaC1UMLt1l9hWr7Wb5XEUeqeIjkBiNTQeLkJtmDF%2BI7wvJNOo%2FKUYLa62p0IzEOEEw8M%2BmwQY6pgEqoXOMzp1nRiNEzKy6Ta1cP%2F88FYff5hA%2FqfMJBUlMbm7AmSqlJPTBEnSzJUOZAzjt0CkCICbiZQyEqersHu1L1kAP3trULrq61F9jnRq0P6%2BFaZoXptzPJ0%2BhpegXqm8VVjrh5j799Z%2BcotnbBd332VZ3So1B8kGpMtEOBgO5Smsi2F1gVEVPp3pXCmxXr5DzTvQtOm51zR9g0ilbwqvGx5djtgMX&X-Amz-Signature=0c266ef90bf61d16ae5f71d11f55a05cc81a0ffb6f06c65f52bb689dfbf44727&X-Amz-SignedHeaders=host&x-id=GetObject)

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
