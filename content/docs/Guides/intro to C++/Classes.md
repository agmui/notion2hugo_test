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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WR7BMN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCbJlNqc2Dq4nvgCxvneP4YIqD7hIVATV0P6VzwYCNfWAIgDQjtfowLwcxusst%2BW8l1UH7bWSOzERdmtz3O3OLXk8Uq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFNoi%2B7DYlFjMxQ3qSrcA5JQLQlCjg4OubV8LhePyFCFRKUi3PAfRJiy1rwDROXJT4TM%2F3I18%2FQBDPd9e1lLkpT5NTvzdbgLQPNMtUHnQxSbXb2GAudUNXy8E67JGgbKYHZFo2C%2FNo1TUWFPLcYhRpox03Q8C8pg1WCVAm6LgA2vpWmANVgeYIzjc6wj3KNOt%2BRUzeaa3mRkLw1gXfThs7%2ByEgspCczn8bXVJQ91uz70WaG%2F995E7sAlGvDjKkyNyL8hPQEBpyR7CaqNXO2wszBOv7b6URWAWFOCcYRj0yYr8MuKxS0kgPfAHI6vhK7FSiQBSKodlFXa7cbhSrlz1r7nmbbBmmdKq6jTvsonFuFfGjqyqkMoVZQt7R5jmjres%2FaNXrrORpSBGMmjXmgkF9WGZVTYkP6u%2FV2CsEKVPMuFfCniU3fKUcsyWpJRBVifF7h6WyeeuST44hurxksCJFmw3Qn8mwbGgSrkBNp%2BJkY1cctYysYy9LIiMlhadFf7quua22ENLJAODal1a26pdN8HLRZLTm6BBht%2B4eP%2BW2hzKb28yYsqfvtiYKUGtBQkc37K1gM92zXAcx2vfpgN5mPzWDY9407OIsyx0MmgvM1Y34k6S6GL6sD%2BQ4wAEeTRrML3p1KH2s1nzuzFMMibw70GOqUBMZydlHM%2BUC%2FbAA9YZWcpV7ffw12f%2BeU2MoaHkTJ5T%2B%2BKaZkTxRhfYloyuzmj07XY4aEtcnJz83XBOZHuZy0U099e9e4GQADq698OFOAqHFqisME97YQjsqkSZS0o6zOcX%2BOydHqqufDCnmxH8baYJbR88Hz4cbbJGuDaxTir0DP6ao9m6Y7Qn68ncMD1Gh0mWiQuEgDyS1%2Fj9%2B6U4V9YDNznGHKG&X-Amz-Signature=bdfadac0b39ead116c6ff87cc45e54c92716b7f31702707895178f2144df1725&X-Amz-SignedHeaders=host&x-id=GetObject)

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
