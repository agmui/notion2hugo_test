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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4F7P4YQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIBQCqBWvTpXB7fMGu65y13uhnSIbNwGCFDbEM9LzEjsCAiA2BuMvVV0fzgYUmywaeujqqU7QgWDXrRAiaB%2BEIxK6byqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAJDAgJBBYsrEwFIfKtwD9lPKtGBOx2U1rvx8bKcGyDOvkbs8R7rGTN%2FaR5a8fBUXF6K4lPp7Pp%2BUYR0Ws%2FgK4%2Fsy7y7GGvI%2BjtL0gTKdHObCCsDvZ5wCX39H8HzA14MYOUQylFoxEcPeAy7BrbgdsYzEVv%2FtG9hqFAJhiNDU3ogSA9it0q%2FHL46dg2bVUB22X%2FvONgwRatLY%2FwP44npylOq6ty9cMvrmV6qREnMh99gfuJJAWS%2Bka5GZdBrFw9DznxPL1qUIK6ae1tLIhHr5XXLS6OxanZp%2BJsNj%2BOLbOfTnjy86TYs%2B1SBtC54Bfe8eVMJ4qGcSvKX%2FklcP7TfgLT7mrspTqyh%2FRUYp6pn%2Fj%2BHc0o5QpuBrsmOGdieqNQmOTfzZEss8EswtupUEaSlAh034V2D0sjNngZSpcb9qipDMD%2B2ONoyFO75HtEUvNpOpOJfjvxXuQ7QXiom1Bz9UjoTgijnZ8NCJHBX0WKxIsuh2ELnontWH8MW9FouJkIb%2BLz7no2Mw7%2FqcVkgJ81VGvE02XlD%2Fv6xsTHGnrrSXFHbNiJztIrEeUNprUw8A6mYiZqMHQrha59pX1mOchdXFx%2FJeH41CaG68JWB5SFW7YhEeFNQvYFdjehtINVbskd03XQVdBkIkwqGqAT0w9%2Bz5wQY6pgGikZa8sVjpGcgL7EO163l86rU7iI4z388kItAyaka%2FFA6Rd6MyTwPBMqn%2Bnbolnzt2LDWkyZlohKSv0%2FWMO7HA1z6KF6Bsgepk7c5KWGlqZ1J%2BBAQhW8%2Bqbbbt035FirSHGslxlSUCCPFQ3hXuK%2FHuZfVnQuUa4of0S4cIp%2FY55kB7yi%2FmjqtvMyyI3afK%2F%2F5RbWxUr8Pic11edXLEZCuZhQpBnYQJ&X-Amz-Signature=4d2ad741f8f7362825077cc07af11af97eddc902bf32cf9ec926c0507db6e3ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
