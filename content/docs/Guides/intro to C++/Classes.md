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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646LYG3JV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFSwh0oUgVJo%2FLJOZ3BbibdAxav33y27X%2BwNe24d54KAAiAuvf829xLTzx%2Fu5%2FH9LDU3JRUM2lFYvjeZQPcD4Phf6iqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqjQczKxKreMQ9LyhKtwDUnHbBkw4dlhoQFS0hi6NET9n4yBcTWQXEVzr7aJOWUdANTk%2FlceR5TEKYeY46nHoXsfo2kdJHNpdxsNGSIcRI81DNccm88uJRvfo7RXjR7f0HKR7ZzBUPIOJTCnHT6fzzsn6NP7Siv5LxL%2F7%2BqoLkdayfmmg1ziSNRLtC5Wgyyr3Mt9YkrcrSkueLWhGC1QR%2FRAoDHjdn3PDpz19%2F42t8bTZKSzXojI4fsLgf2MwEQiLBhiMkNLrtu12MVmCjtu5WpHmrS9PJ6gu4tJ5YQSIdZixZWgPrB55pIDr3VU62W5ZnDROsSBTpHJlnoQvKo2%2B7L%2BRuY4wUdXoR%2BQ6KuIp7p1GhRrnzWS0NkYm1SjYjEqGhuAFUq73YV7JMUldLizeLDm6R2XQ%2FQKyGrLGxCxTL3rowjl2L78w1WZLCs85tEXF2nEqlZwhJfmkcosqF%2BmFDr4m%2FfBpSP4LKf%2Bn01oYu%2B%2BlIi0DN7c312L%2BufQi%2BGOZDUTQxw%2F%2FjMn0I3eSM0hTZubYlF9jRWjM24JqtpmQHhsK9KjOurlAGyjzCVVe2WSydhuX%2F4lpA3CA4DBFXEmJZx9l3HNl0ikE%2BYx77on0%2FNhLSBwoJXG1aZZlymGaTtPtkQ4nfCMx0HQ40sUw3eaUwAY6pgHDWh8sdfFzvlsbRLD1vxALHggP1uCWtnp0nyZdkQjLNq3nWta4c9jduEIox7HZzvkB3kVfNCgH2IDKsKi7VnnzNlyi3cne4%2FU7wNS1Pz2v%2BuuiuqO71HXG5uY0aA%2BLvaMWdyPS7LqZfxKspoPz1tZwyHsiQ5Lnx9i2jQuHWalSeg1XtR0RQJVUido4EgfiOgGGElqS6sAPVwHwcKTIXM2QmOi8fjI4&X-Amz-Signature=cfcd0d8e7bd9c93f58f408199d3536d9d37e8964bf64dbb9f6409e333506d668&X-Amz-SignedHeaders=host&x-id=GetObject)

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
