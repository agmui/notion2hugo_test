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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LNBYDIM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdCR1usl5BA8yvqnLfdbzZcHkFW6BNFlGzUT%2BwHvRyGwIgYTlZpuxUQF6B41orWb60bgKAzMDEJ5MZ7LlxNi8C9BMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHmV1PMyLD5PckgTMircA378d6Y0GmCc49fZnaJISt5Pqv%2B9Ua5azDZGnu040iCWjgR7vg1NxhqqJ9d7Pu3vQrAPy2WnZNxvD6P6MdQHMLYcoRKhhaQxv03iqmlX9Iw60rnAMLsVWOS2Gx%2Fi0W0rYRg9a7H6Tca4hrDENdRNxrJn1j8x02LgmV635%2F2nMaFi8euTC9gA3ToRqwf2xkQL2E2htAKemmlWd0FdnL0RSKe5jC9BKSsYgyHpzVQclJQOTnBt4JJhuskmaaFc95MzepWRHm6G4Da%2BL2YqLOTJ5UHiXiPbURTilF8lt2bbVOWE567cauCfBf5B2i%2BE5uQ8C%2BGLFqMNnwm3JFTO%2Bur892rjNw0w5Ya8d9ubfnA5C5m0EkAe4nKSCzwX3BPiLz5vHbWinn1kkxPl3MrPm3NcVP1h4wmWzKYZG23ydv9w7f0txWSDUKELKsEWNquP6M4W31RpRpOe1Vff4sxdovaAXK9tbj%2F7AQ0Y%2Bb4aa%2F0RITQtuUgJU4%2F8SC%2FDfErxMrK8R%2B4Q%2F7iJjsQ59n%2Fc0rPseX%2BGzS8LflyGZedgs3Uty5usOS86x6FK1wNsfNF1bejVlUBAvX0Cjz414z41crc9ul8%2BoQGIpwm%2BcAOYFvoAdde65D01BIV3heVsv3xiMKeE98QGOqUBPhkx%2FTXZzJsTyhLhEgxgVR8Xl%2B54Dm8HJVJdZarkY1guYLjIDSKVgIk8SXPdhq4YnlY8GC7oQ4j1vgtN%2B38hG8q%2B7NRnvlO%2BeY0jCT3xkeQe%2FllAPnEmze17qtXc%2F7G6cWyLJs6Qv2sYspCaIMxS%2BrbpR6eoXurV0GmeVvE8EH51RSfvdjbtrov1RQXMTD55QmLBRldWmhR9hYe3vE337YBR3mBs&X-Amz-Signature=432a4784d71b53fc2fb8c84678381f1c79e42e4580489acf2bdc0ff702546893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
