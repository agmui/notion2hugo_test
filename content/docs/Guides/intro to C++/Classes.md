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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IEYCPEF%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLrne%2FhdRW0DB6LT5vqXqmyXQwfv3ChYt%2B6BslOuuZMAiEAyZEN0P3%2BU%2BcX62ml8%2F6KgJTKyHglVt88eh%2FqrfaNj28qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyHgJYDlPsmH1%2BM8CrcA9sbVdJyPNlZs8e%2F6lN35SP4lFWDDqZf%2F%2FrbzangbZjnor51bafqWU6dhG5eqbyVH%2BsQ3dqkxGKfPhQAS4IO2TC%2BLuZV%2Bvfznr5SnYE2NXFtMKwLs3c1QUB%2FU7%2BDS28Lkk7i%2BaptU4MPL%2F%2BOUhUX1ug0Zh%2FRYOKBmIhDUfN4%2FY87D9dtIkTgIqrE9Z2JMaKBgT9Z5fi%2F4HfJYw6ASdWZ6pu6mwXOZv0wdey%2Bh%2B99RDZRlpyF4eqQcCFddYJG2q1qkki9yw5wHLMqmBU6ALOqeCVQXRkFwvBxwy01ZUSAoJarwGBA6APb1ISxC4ZDpxTll1NGmZp331aqg1OYcPn%2BiTHq3AgEPNHfnuz22RNSm97KtSFSX1tdBsFf5k1I%2Bc8%2FWgeqpk%2BrzjVc1V4lMgkumDBoeBBxYLL%2FHD53bn%2FdJvgNHsoHuOKYsVjsWgT6Mv34J4HhHTNAMzAqGk4sI5vSQXgMQ20gBRJ4XABL%2BumZFDSQzm0jfTb%2Bz6patHn7NDI1aQtrhu6Rk2M05G8Ttn6YomToXN1FIRfV2hWADb0Y20P8U33xteOJwTZmHdpfwk7XEVl9AjHfBk39qu6nLWStjLL667bdAC61vW5PPn3MAmnXm0irTAt2nxka6Na4MNKM7bwGOqUBgqeCt5tNG0vmNWIZ0kylGd9RC9FpoY8QkX1RNbDIDqmUIX6rFmNO6kfD%2FLcTD2MlssiwIT3bKUavfyVCSPJZb4Bhc3FqLd9O5vh7dYBQWKYXhn%2FXCd7fnVvLZA0pWMh%2BuvJNUzuoUuJmlWCQgzHi3BXf%2BHtMPInhBqRIi7%2BNVzx9MPT6SmBkMQvLvutXpW4LpP1serZ1Ebn6YDR19XESr9qo%2Fjtm&X-Amz-Signature=d910bc8ebb81a36cd601b10ce61d2f2138e10b1b8295e7193fb551b16517388d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
