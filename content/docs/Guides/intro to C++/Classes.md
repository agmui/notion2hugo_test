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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKOU2CMQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCeBKbaxcUKwDxWi5MbkiNEoaJytyzzbxnUQ4R%2F4N4zaAIgR7vSnuGA8yrRGIRUeX2N3apXa222bM%2BQFUyES4WMZpkqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP515%2FYJLTbyG0RNdyrcA6s%2FyvGQuh8qHUazz0t0p92d3wxoDTTk5mbn8rDDkK2b2X2myJRoySQ85BHwglu4cAstB9ub%2Fi9gpryumWf9XXHS8o0we%2Bv59olLYyIi85IFCxEfc1xfmF%2BgiU4dGCQH34QWC%2FKMm3suYVAWWcpSCu4jDHJh5u%2FF7cj43Oj8KG%2BTMkLOuU420TNEORpn8otiHrAV4wxfaY8HE5%2F3M34jaJAMgSD03Gu2OcYn4aEFtizMSoaGuW116CEUctioUJWGepWHS%2F7UeFfCdyf6HOiYxURXwXsF1owldlUH9Rr0HbEYLbnqacDoRi6auMj7FXIFf4sbYCMBH8vQsc6rCp0ZOWa3teki4oefKKEdJ7vdrNzNMKwmnAZ4WNDDtHUE3cz02vyY2uHTwsq26ZA9%2FD2Ot%2BZFLjKVC7xVkgpJfl1SwtOhM9YEWYrvsKJop%2B7Ebbisq%2BRyBNxzCBfhYmX91PFlS2pjm0ztlOznJyrCw2u5tdrbekCE4zslUhSFXAEBs4quaso6%2Fxek%2FCbuZgQS79kNPD7QfhfmrVj0iSTN1QRmCDPKt%2Bo%2B3jv%2B1UO3eh3AoI6qn5PymssvJxSC16FhMKxT2N9GZpdx4siYHUw0Pgn9829e%2BYnlCSwKfpGzVQf4MLqvmMMGOqUBREDWntm30T%2FL5%2F1D%2FysZ77l5po1CDDGgfDpkPw4Vkr6VPcKlQv9jr8u8ndpdZElclsqsX4Y5mbxrWyV7AQ9jAlqyCdoKsp6wpwgVqNOsbd7OcF0g4uZbUatbovpd%2FlW11q%2BIvYQpGEAqCh9SqJzuH4Mq1uPvReMTlXR5I8T7AFlAlF2wqKlZcrgWkotmZcG%2Bb0XqWDOSxryk7P71YzYrjcwslmmB&X-Amz-Signature=0c32c5afe041b000babd0d1aa2b630f6efef2750a93bc4dc52d29a6842eda1d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
