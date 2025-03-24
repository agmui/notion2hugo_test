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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYLTTD6C%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9C3fD4fKlT%2Fmryf0GO%2FTlcBJYu1QHKiMKdtE23oWr1wIgJUdcVI2Xmnz%2FFNBWvM2FNdGvQGbyvg0PMIs1OXmlwvAqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc3dAALCzZu8E36PircA7997mJGtBwdntx88Ijmig1gt0oKsWlrg06DtzE6mMOztCyNB3ooAvx%2BsTTDOq%2F890q7AyrurayXcAJFR%2BkBZF2hjo6GW2%2BipJQR%2BO%2Bx8ersMeNcrmLYFl1EAw7ja%2BGdFlZZEri1gnbrBDyv%2FzVcq9k%2Bkdn%2F8Jmre5hY656iGT7aNAt%2BQ%2BgKjhIWiw4pQHPyHGusjWagMZ0LJZb9wTmTqwTPoNovQqZTBletdVm55yLluZBzAA8v7ZBlE2KLPRjYkRuXpoRlk%2FCsOw09GFVHIoSkug%2F45GUaJ9V%2BXLDGsWUAjrTIFJnS%2BHT6avIycP4TjjspO5%2FCzGHXlQNgfHr84wKlx2P4lh3kFyViq1Yj2uQmJ0yulwCfDvoZNZlZTm7HF5L1M4D5AS40HhIuTlvopGN0cp3RAVFiqfVWrxjXqhglmFAMgmWH8ieJQMAsSIridm2tqt4sqL4tMrRu%2FgzSCmam772X53RgAoJwQpa%2B77CeDNYUJz8ECETM37IwbnCL6IDBlnNUKbOlWl5Mv68VgFDGuglREiLMHHo8n%2B8eKpgpqfW%2Bynf1Ia5y%2BU25oAw0tM0NqeGtv7%2BOO7iapXW1bzgXUkyDazhaRA1EZuNMUQlvXFlN%2FfWQsF0mj%2FIQMIywgr8GOqUBWsu5efS9wOK5JUgRUkE3AKejFfWaHA2xDh7B8MTvFsmbnvbrLBXmjWG98jPVHf1XXj2H2cHmGRCs5shllIcGXy%2FiowjTBZ1ewwNNvU%2BIShqsPHHO0qyGrAmuvU69EIHrZHmKEJSNwqO7P6s%2BriH33S63eixbzAMVMkec%2F4MWwGMQxNZ26BUKUb2vpquHnUPuNM0ytlCudMSzVz%2BV%2B6k86kVwNzA0&X-Amz-Signature=8c80b03a4d550e9f163ed24c1c1790562e47cedfb31cac11baf0732ecf919b20&X-Amz-SignedHeaders=host&x-id=GetObject)

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
