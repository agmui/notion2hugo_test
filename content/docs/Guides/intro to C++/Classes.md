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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BPYF6W3%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDewv7QPAaVgiJuGSAGZypAFNLHJI7zHhUAIFh9YKUQwwIhAOfS7tgqg8UfLoQxvT3kTmg%2BYnEpO7xZq8%2Bk26f%2BZTeiKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaDQCZlRdw9H3308Qq3ANCXyg6V8PnJVH6%2FoaN3uO7l3rZ7klUcpGRYub4vuBR1OrGvLJcRZ4iJvk680GXS%2Bx6GaD57ipGlgEWRPli0%2Fkm98%2Feu7sSWaZnkf8xFFwt9jzQq2dPe7AUoMWTyQPKu9B4U8CCsIVVRdtHeHOAs8HGsCrp8J2LSSZqtpYvAsSCpvBTXdqd5xfmQhquMPazemGnayHkcJB0h%2BMNbVPoOFRifa6mLSMuinFuYAqwMh%2FUm7a81rM4HXu5Qnz3WK9LXDCJEO15xgyrRVHWIOS7Aqp1UN3iyX4JQ%2FDROEAXa8oA%2B%2FZsZUSx2lEJRD1Zp%2Bc4IMVC%2BR14rgtnnk4JPZyrFIDlaThqPoNoIYj9h4GqclueSuqWVkLwSr%2Fa6HOI2%2FKOqnBKWBZ5CGUwBcyj1RFRnP7wgj1DT21X6xIq%2BKv7KEjeYhlG3D%2Bf4bJRi0THJuZa3p%2F8qDSVfdXEBUtDwBHuFJQAlmqE30b59bEUVIlLdv%2BlFkxFXfBNcrWv8TdlM4Q1tIbakRiEUurt6KM3axaf9A4FEP0e0SFuZCtEWKYQT6rDj1l3wK0coq9wVYzRBPTLzNp8nV061fvutyEa6XS7Gdw5rdHEXQeaz5doNu7qGUcASkQi0cwQLUi%2F5maTTjCk4pPDBjqkAY20t6Sc3vPOuou7gujOrF1sX2KcxvFlyyADHGzUvy1bma7nJnPU7ccybzklo3xgQlVHGr%2FLuR1hnTR9cVrM6gy156xpivhhyTNi8ttTR%2Fl8OLQtAx40OE1VFg31BwkipV4QZ%2FBIF7%2FyXgOJJSGeAPI9G%2FtEM0%2FN1d3SRbV4lvpJgn2cRJpn92sdKus8Ku9hqWJVwThT0vQWHHadzvFmsrfrsqq6&X-Amz-Signature=b09e0df91e8c500e55fc49d858b30fcc2e62f1267250a894415796861ebbdf0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
