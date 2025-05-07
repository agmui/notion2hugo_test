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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP3RE2M5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BNKtEaObZEOhGdsja28grcQltN17dsXqvcJzrTUPldAiEAx5jGieUoMxoFRowJp%2BEjGnpqfg7j65hnR5QU6Qtdlwgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPVAjIOBFvqU3YQZeircA8DJHaNehtON3ckZ1bR5XeYI81aA61pOLLm8hdYOqK58iHcuWFEQUdETdM2%2FMINfetIO0EGtzsW2s6WviaGSr%2Bom76SKMNVSg3u7fKsYQPf5N6s0Mq9SU0hT8XCp2RTZAOX0lNV5E3VRVdutZiFRvSJL6cdfFuILhN2Zt7ZDZegHO5aUnFUo9KL6ANxYdal7RouiNpPoF%2B40kKbvrmt2gZ251D%2BtXVKwEDKh53jvMuTNdaRQiNzxdIT8XqvRHuaxcdnjNecO0kzJH31F71gkk5GGdx2QR1MCx2pMOXtaK2%2FhG1Vqn6GcMgSaCA3jyRDj1l%2BN1ba83Xq1sXX6YBFDOLBRrSHhEbs9Q4yGz7CnRyJvPaTWVsNrb23BHGGOyaQfHoG5b%2BsTS%2F1E%2BQ5cKmkyZ7%2BPw%2BrbSHahHWvKMJXahlvlb1%2FiIwXosd7mvZ0AjLgzaZV46n%2FI7R6dQENj7QLqN2Q9oYICAvOao%2Fa8BlEOEpgXaD9vMySyT6pnboAfFuE%2B7ApOQWl9zOHN44ycvSZjd3Ax8I5%2FPdemF8em%2BM9p2%2BCPys%2BUD84PKK%2ByY85nXlXs2ybfVSVM5aocnO%2F%2FdbEwrUPgV2WP1BM2ef4hPYs4KKlhLgyAPpknWVFAMEKaMO7p7sAGOqUBzTG1X2YOZN3dNIkO9zH2iCl%2FBcoaVv3oRLJiH9Jxq%2FmTVTZSoGMCKJtmY4cuztPGP6nTAJkUj5LYd3T3YfAFLA6HaKG3p8ifX704YOQoIwe1vHRxES5limTjbRYrTkytG9vid1JbepsSSadWL5dHokLUY3PxJz5XEGMJoPlFpYgHXKfUb4HUaykAdcUO8k9o3RHMmaSf7bTQAnP4zf4q4m9GaFkl&X-Amz-Signature=f9a5493861270f127e73fc869626b81a311526d2bea0a8c9e37a4ce017c5c03c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
