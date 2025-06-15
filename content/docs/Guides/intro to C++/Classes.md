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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GQVPFOK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD6tD8ZThNTqESelvG0o9JfhZ%2F56ex9IDzq94loizutawIgfc2z8QQsB1PfBQt%2BGx8ReQYItYehFcjDExSVlNUpCAAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKXPLmuu4xq8bHU%2BzyrcAznhiGkGRk9DqQkFKuR4QrMbjV9UsDXlV7L09tqHfe2W6HjVbTj8Ypmeclw7GnPcf6qDi7OMtcFdL2jZbLIOP5x4h%2FeKc941kH3KeMFWX%2FVhuF7V7Qw1wG6pgw6dv5y6b4zJ8VRiO86KfLWCc9bAF%2FezgALHoXoSQCAiSCGbsXh2d7QgGBzv4k6UnCOBZrwzY16HvfsHIGZxu2buCafmoaoaHVpvyKay3t4bJqBr%2BHZBSMT4%2FfRlqLWmKub12pSOaj7CRbREEoD%2Bn2RZKptwpUJfgpCEes%2Bkdf%2Fb07OoEl%2FyI6Xr65%2Bca6w5TpGkr4%2FVG9VMq9AkolMZI%2BHXtLmek0x1vp2cOrCg7XLP3gylgTcTs4NNEmbOIMvTE9o5lteVg31faKbvRmTA4a9HoffuHRiU3yqkiwXcYasUzpq5uaObt0rokXksLhlg3dVrSZ40oC13d5vdoUDOVpQ3TdcFjsfgrFrQu5sjvXuRjWfnZDYqrFdnitwGIDEdKsDScjlnAEeXnZohIRek113UVEVnXhrUXRnmlsxCOWDg12RbGdzFGTr%2B%2BhSCRIcd39bsVoxvZvxQnTSbnOc5Jrdrisksz74rJ0XMlsoMAYOInC4qEW8AN7xOnUWGOA5enuHSML%2BnvMIGOqUBclNTvkPaHSptkBbcjYbybNWiFLgwlsw6WWjfBSnSXPaphpZjqHl6IfgAYUuWdC8N6F4nyyTPy3BI94ldkvR922%2FEKADY3WXWcncFbsPXe2HS7iMEMof3vQGWBEKmyuRjisGx9%2FDAbWczbOh9%2FH33mOLXuJaxvHmEDReE63aIfGdFP3hS2pjO3vU%2BiUe6AD7ro2gEt8cDcckzqe15r5oLr4x7FJbc&X-Amz-Signature=1cbd7e3d59eba3c69fa59d26e06f792c31d250e55262438dd843727563a16d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
