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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZVDRXYT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVudl9CQTVnHHSE%2BvG7Wx4FwZJM4rY5%2B1ydujmCSAEkAIhAL87EHWOR%2BP3vMAxwaFV81awM0VC%2B%2FaNmkoPtUkXX0%2B%2FKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW1BSFZ%2BRnUHONajcq3AO%2BFHC%2BbUhgABD2DIW7KY30L%2Fxwcli%2BEGRiP0E55UraEBEpFdqPuUDeS48p%2BlLTWyqqKTksu0dS1ZEegHAUVjMLFdJLTz6kWYnLuecv%2FFSFjrbNbI3wkVm0AQzUEoLNu3yCETI9K%2BS%2F2nokdkg1weL2cly0YSr4OyI5razZudZJG4qOjT5AB%2F%2Bnu7IQFi%2BvhqVcvP8rFM%2FhTgC3c5EsLojLAE%2B2h3zRFH%2FjomsNVl9f4yGz%2FrcRxa2gIcV0wgTxpdyDtA24qaG3yy1JUH9NBbOBaqW73fgj9oCq0JrwWlwpxus%2BpMrgRfc1ZS6psvOeQ6tX%2Bw8lb%2BD1XsBhK1emAYUVut5PmQGHEcyCheKTGmXtjR5eLgrAQv2DuvomEI8O5E%2F1snYdR1B8k%2F1Wr7A6NvFNz1ATJClp4HSPhDuUZz4yCbBf7Fh24iHc6rNFCZpA%2FuxaWP4WBnyCNykrxhBB1Gfgt9YR4Szfuu%2BuqTvzpQS1bPeKvg6pffeu9pOIqoSKmjG21x2ZPZk0YGS0IYBhNIxUDKIl97Z1Noo%2FrX2k15Gny3SYMUlGlzS17pwaIHAN2Lhx3ZjeE5G%2FcAy%2BXPYH6ZZvBFeF4e9VuQwqBJ%2BU2CJqERK%2FWCMrQThqd4SSajCXsNjCBjqkAVTR2MLH9WnG3Rotqk0wCJOhY19tLohLVdGa4mk%2FbQ5O%2BFHayuj5W3HNAcU1vZnaknveJ%2FL45C%2BxG89xyqiWdZ9hllG60N4XZfoxc7AFhZNXSv04XzfZQY21nca1rt1LgMwm3WwiM2aPD14HvqkWVsFK4rJliv7AR5wp383VpGGEzedsRPdH8N4a8r6m452i%2FRUOOolW0oWZIfvWF4xnDD0P089d&X-Amz-Signature=e63f938b622687a7249ad9433857e46e189e5963c570b45deda0b4bab863c827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
