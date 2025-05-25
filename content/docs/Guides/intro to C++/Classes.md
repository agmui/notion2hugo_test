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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667574CYIG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGtQebsotyH%2B2ks%2FGYtKL7YbqR%2BznkWR192TQ9bzd3QUAiEAtJZmygcQ1%2B9VmbSlUl672CYjNx7CsT3fL4ypIFls6C0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDL62NoyDLlvyjkTOrCrcAzzSgA47nXSocmtcxCWrr65dKgUc5luECzdEapMQdq5eIJvL8OwirBCnQSh4sEyqC013vegRpFDkwEZU%2FBB2oZqZy8sXRsjfYPQn6lpC0eHi3Jd1Ov9tg%2BhdVKYEQhM6g8Jqrq6tkmpu%2FrLShd%2B5gzAGGWiv%2B%2FHhsKOQP9ku3%2FqJShTJFTAkkTDFl840tk7Hqr1pbkORFIQJDZWYY%2FSA2%2FVszvFKDzmhRAVokLft6gRMbTzdF2ZWeL5HJYv%2FsmyVK5XFX6WFW7hdRsdOsP734rPWpm2cTxaBIkoZLWEZuY1Dgm1M1z31N7PZJ5FtblOhfYdo3xaSHMO6cWb%2F5rRMtipkOo3d34ZujSuPTvZfPLa0IvGoA%2B0cDszk7G%2FlvpXY0cdJ3RXrR5mK278sR%2FsdOrPbhO30myQ4FO40r9201mV12ZX7LpAsLeAdKJH1fQ2Rovda%2BGN6F%2B7t%2BLAGbkTXNBzIrmv%2BohFgGKcx9hSYy8VsLbggKH%2FwHPtH50J%2FD2EpwqE4dI0P5W0ObGtEpJdhKRDYG6gLSJ0Uw7tFggXcXxix4oRy8ykviBcnzGMu7aA3lr5TP7eD7RaM3juLhA2dmMY5m3Z7PQPVQw2KdQOEGkwme839JLbPa5i5QpqEMOL0zcEGOqUBDxLmb7JXAOTK3DDJdVb123N6nql2TR16NSfhG%2BUbQKtkXH60BhX0%2FUrnHLIQ8orDs5etJhbRbwqA5rGJA8VQAN5qPwUW6fqw5cc1U0f8GUh1XSbbWsjbe%2F4YDlfUt92KemLqkPsXl4uiJaWKcegFLJo1mGiogg%2FhGCHozrdxGMzb%2BDMd5THRZeJMC99GtClki0oxLFxcC%2F6yOkTMmErp2Ldpjjnd&X-Amz-Signature=bb1aecc74fed2835113113165ab6a8db6b2229284fbd875692d84852d5dc3003&X-Amz-SignedHeaders=host&x-id=GetObject)

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
