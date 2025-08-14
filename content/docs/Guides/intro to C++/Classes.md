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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3RDG4W%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELtIIwKaKKP0prTkgy2wxMO6s10OyWs%2BrbAVAFOWgJsAiAUtu6s%2BCBU6uHmmDh3H7XKev6KBN60PsYUE4LKwB206yr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMk3j9krIh5RCEbLr0KtwDr7icCuYqwsFDDGGV9C7bFmFENMetJU%2BHQaha76tPiKGh%2B%2BwZjIc5EBkngfruw4chWukEmU3kD6b9slhoEZpj81dU2hAaTXrjZ%2BCm%2FM%2BcXTnHLMPkMN9RB6ZrLoLewWNN0hbvDQ1wjg439Smx9HeXCeaqHhPi2nwLnN8hVG07%2BFAcWVJbCYqXD%2BzxHP6%2FrfvOzQd6squciIS0QAt%2Bl0I6e9pKnpAw6TTy%2BbAqlqdckNYEMslYJGWhsrKD7hTFPtkzp6EOhkZlvi0fG%2B2x9OATVtp%2FD1mAAFpd9%2FUl9UtSh5zNkSrid4Al7U8X%2Be5efU36qMG4AJaEY7gYX86kjWoSQvH1Gowg6R85GAXosopWcvNaqV8nwYKSqlJz%2F3uQsffi3kj%2BfAgUgwWRvw2cVp5t8uj%2F9ekSV3n1GBuWterU56k3CasDKh%2B4DX0XtI%2FBcj34qQ%2FDYd%2F0i4YMQ8f2HQwqUxLd5Fxs9Ji1pKIygrIFoEDiXcYXOG%2BWFwXLWytEf4k9BKPKX4l1NPZT%2FN6tsTGJ2SC7krZphQJYhl%2FhB2BhDcS0HikkdaZCQ3JmX2Gf5m8D6vDUui6Fjl8LONJRFPO3U31O8xXh0JsXDOCih4sISnl5%2BNJrU%2Bj45D5iHHAw4OD2xAY6pgEGV%2Baeamg%2FRiHrRXn6ATGluRpHwvovBtobPzE1v7bcNRdhJYtkr1D2MbS%2FlXD5xUWVGn6Bu1ko6lQo7PxqI4R%2FbGoO30MbsckHMVe%2BjE63r%2FrVbUSuRDfNxevHTiJ1IM%2F1uRJTtINr5f0uUMi%2ByBboeXP31oNPzbGkCE5MBBpTJvmPJCvdqzL27Q3jANYkhe9KAuur0eaOYhVCZdFxNI0%2B5p%2FJCDim&X-Amz-Signature=431894f53089c2250c364f1e55034148a68c114214064f5ff22899667bc94ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
