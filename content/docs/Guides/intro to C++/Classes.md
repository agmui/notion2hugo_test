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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV63LT4X%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAnp1BDchYcz9FPrGbnf6wX3eLidyoag%2BzWw7tANv%2B9AiEA5RAe%2BovIam6wAKz4AFssyHwXRs%2BVgfPGzvLVDWDg3cQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxCXUZQLaZWrG6MvSrcA%2FqPf%2BY25mvTxgwNSW3zgMrg2kMEsh2Jxx5OpI%2BmUGZPpHDwlQo9rG5qMIYAfVAAYT8ZgE4YmDjvAAGIzSNNB2UQfZWP4gt%2BIxVEymm8JpGjh5LFPeTzX9mtP5VRmEog9SDefx5V9K6cEBHGIvQMv9iONyTrZu3aypyRS4e%2BNKpo3hpDjGJGz%2B7zBNjA%2FN1IfzcNUu%2FpEjGeGcsvPcjmFy9djRlx7LHSwOxPcPwqcdMi4DqUzRxA2vbQHsC2aqwOVC6YzqTj508Hhn4dvnf4nrCuoLOdMWqnD6EhT2jXmONBTaf94%2BVJKckx%2FTOy302D7kul8ae6KpPGNzVm%2FVPFCTkJZq%2BhIcyRWmCO3p3DDcb4n24d%2Byf1OBPVL2cG2qMIL6mvDeMd19oZ2S70pYxiFfbyE43xECyuz%2BB6bXZM6uJbpEHlI%2BCCGLVxx7zlNciS3knifQbh%2BmCarSvA5OrHk8FmFONzhKN77H3ZrTsE2o%2FxTUgVOhiLURWbkFYbpMGfkE3TpjDJ4ixrryU%2B9r53MqLkqXmToEbgCHJRlcWzCwG9uisG%2FrmF3dMA%2BvDkkC1XxrfxP73%2F3y%2Fz64zorT9HFLZ2Ggf5vwWfCbv6IF3vsHo935KTvzfSlsNY5N43MPmB7MEGOqUBTC%2FB6UxYFxAvcmKQawjEa7xpU8YhSxgxOyw235O5c%2BLWKgN5foA6reHi%2Fvr%2BgDaHwNosyxtgUssmwhNEZ0V4I98JTl83oAac8vKYk%2BkdFUjqeHf6T7G6IcRFnd5t1c5DkPuopY3cRGsEW8b7KMeIXuvuf5IcYmEhK6kPo2NoQoyCSAVzOlqgXWGCDlbJIxQBIfoYKt%2Fns3wkDIvWEoVzEFf%2BNlcZ&X-Amz-Signature=bfdacad71482d800bb754436d553b4678d3c2c467b804f2114494ed4d99a044d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
