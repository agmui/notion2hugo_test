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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7EDZVP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCVNbo8tFJFqGVwLhK7rUgr261hI9Uv0h%2FRYEkk%2FqUHtgIhAPX4hsOz2jlhjVEveMrMPdA9Sh%2BNRG7ZGfm14kCYVKPTKv8DCCMQABoMNjM3NDIzMTgzODA1Igxkzhois8wpkEKzdN4q3AOlrPe14kQ6t%2Bxp987owGknq3tN6CxwtdoQiu3la6kHOE%2BoMRNyBAqrhYpNRRF1QGS1ZVImI9oNJlNND25Srbd0RYnkjXGPX6I%2FbIebe2m8%2BOuxPIKPGdd3PynrXAo4DbCWHh3Xlof6AZjBzSOu6cnSLuLcD8uIjm7qaMwhiHoN%2BAKGY0RrGitb8G%2BiK%2FGoA2NLx3Uqbo%2Fc302CxK0PbW6TtHBGz8kbJCPT0X1ZY6MaAMq7uBq0f%2FzFrCs3pyanm%2BZXZprCMeS34am3x2Jwi9OQpW8XTw3rDS4qtsuii23HmBk%2FMry9VPhv8JK05pyGwEOGGa2tyYs%2F16Q%2FZ97ZmsKJ7Jji1LK7Cihu6mChiduELATQ49PsGBgDEEvO2uu66IQDZyLw603SDuZPygIXGgg1Pb1NOcCJip7lMDsj8D1dI7odisjPAwON0S8oSTDMXENSuFaZsinQkwnKdTqMzmMAc%2BAOSQWbG4JSKeOgtPARLSR%2B6GgGdZjIXNac695ec20JJrjNJFYXtgBveC1hEtxmrjQHHsZd7E4yQUko9auaDHSHXjU3To9aBrAKlC%2F38ISpYAs6Hysr%2F%2BXp%2FKAMXz2MXwZyotrjWEKeddviExDHO%2BNvcukcJwkNZ7oUdTDCzNHDBjqkAeffahPgCKeOlcqx6uxjLJorkkFhdimm1kvUsObNE1rJLnUIn6KNMsaNvbPB3KlxV1uomhLQBs4dYpkC%2BgNjvqRulnAica3waO1UNDmz9%2BnsljRPoOIaXi5l3OG20N13tCP%2BA8ZMdtM0pqwJc671ZitRr4SuGqQwANUonkTwcRCe%2BOIypNxrw3RZYQWU8FYpknK%2BCCLiFHe7ofScXRUrvnm9Lk48&X-Amz-Signature=8860301d997bb0dcb04eae4be06b8aa7cf18eea57953a27b405ae1cd5e418620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
