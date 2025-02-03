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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWTLTR4M%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDOSmwNffiwjGfqhojzItaKE8kRWNtYxB%2F7wk5kIK2BjQIgI0mhPKxKJCm0F07OJg%2BH3JAoX%2BTc8RuonVYFUt4g3fEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGXQYo1N4asauYIqOyrcA7BtZCC9HWYXCSuChfMgDsWUwPQOKYcOteIzFrBB6EuAEhAZLgbfgl5IoCjs2i%2Bf8ZXWyUStvHluOIw1ShPciQylX7bdMaKfCD2H5pOq2QuU609yD7tPWJfcblpSW3CaAAA7PNEFRqx6JMQKVSYEG4Ws%2Fa0s0bs5hHF9WJBiPpSyh7neaVYciWbYSlK6Gp81MaGDLQG9uo%2F2%2Bx%2F4%2F9lF7rhyfCo0StfDJEKL6tniXxW4xBKGZbLBhXBD1xOwijumdJRd9R6VnqEM%2BDryKP%2FJdgIbcg%2B%2BJIvOFHD7FLb%2BVlUnaFjhI0%2Fz8kmwVrMZ76M7p12ZLTAXGxvNevvwAUqPcX00izNhaK2LLtgNkn%2FPGhIF8uxq7bCTv8dMF70TXx5Yo5QxBULQZTyuiZqQ5dFyE86w29rXp4BuZdjvusxFuMVMrpYl0BqGjPqUopGh72Y0zUK9y%2BZeulawBkvdgmOXIydil%2FXKZRHQRj1tpggeT1L61SKZBbrzqP3vazRfWe8GO6S9PvJOpYm10h0BH5k8hn10J4cy39s11PQwK05JTPztRa2Nb9r8snO%2BYl8Z7eatbxLbu4NDq3bBFjY1mi21ktlqt5OvRRucWYuRDAsjKmYlNPY8eUAumzQHalvJMLGihL0GOqUB4jtD4HzaVEw6q3UbFxrv2CCRU7q2DSAFL4Hhtaz8xbYEvfLIp6u9Y%2BDoE6Zc%2BQEkYDnuwlF5hYEbuMwA1UecAbuDWFaiW4FdOs%2FPDrgiI3vfW6xHdVo4L4yK1dQTD05n49aCwz8ExodQUUQlOJeYoVGa3DWtMsqOPn%2Farfq5Fwqclp0b9hLjdp1fdcT8tHjNGH%2BHcQenqgoe6qZ9XPEZWEPKvKPo&X-Amz-Signature=50363e491d68357af00db6fa30da87de3b6dda2e05b80d4f8cb5e256b8fc0f3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
