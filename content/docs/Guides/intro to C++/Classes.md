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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCMLVRHQ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI71Uco7yA%2B1fwq8psJr4%2BELt53cFhvo5EcbdCbJ%2F5hAIhAMgfa9WCC%2BkwhyexJqVWnKwO0NYffS1GvWUkOxUDuVYCKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BbVScB%2BLuygOcx3wq3AP26%2FsvEgNpKjVRdtWMeKpvj68EA8cL7MYadg07TbbHwAFPVuzqeLTdyUWT5yQ%2BjvgpIclaPtuSYCAKECj%2BE87sQXJCYtFyJXDD%2F9itpRwmtTSmB0mqGxk5w%2BBuuhqHfonl9%2Fb18%2FrH4x4uTSuXDyX1Q6t%2BkXwvpF88M4EsMRMjTpDqHOpBZCtCoxq06MhikR9HO6b13FWGyCUYjNkaDSrjlhss3An%2BbhWGqyw388ZXZwJfssMlzrVOSgJgSCWrbxVzJlR27pMAePCAo2iiNDeDqE%2B%2FdunZRLWbx6u1BnlsEoLjOhque%2F2qrCvYyhb9lNtd28q6urHUZxUJvmaHv%2B9obc2cUO4tBHi%2BPs4fjp%2FqnYfpNiGEwQikkEY3oAT1HQOexegF0rzXW3vUuWB1X7S3R%2FQH9pFvSyONnoXOMvbRugFUonU0TwAUIX1627VP%2F3PK4mW3fGrRJxV0xFUQX9HXE8yAf4d7cffUb%2FkIYk5MfVbRv2t6LNCfSfG7lfvHKH%2FhKmMC3%2FXE1%2FQ5KD%2FFHOzCtErW%2Bp3fHG7gYJGCdlOptoxxXyO3rb%2FaNAIBZlR5BKdDWqPeThoHXBLtKttLniSv0HR2E2xPKZuTj3m1MWqONmPtVoA8lCJ%2BidGIyTDBgLXDBjqkAap0MgZyYlyKGDvmZl%2B2017nftr4FG7xOR7%2BArVa3YI5w3SgAEmWZlmbgOtu5fgR3jMP0rZFmUBrZjrpFHM9w3AmK%2Flq1NXX0el1gcl4%2BY4UPIAyYW1vdTRpCExsJ7ZDNOePFTdFHaXeU22yZM2ZHIB3p5JcvIybp2AI9mV4IuDiD404PiTZK%2B9QII7Q2cqV3UzxNGTeglaIhiVX6GALotITtRmh&X-Amz-Signature=3175c0ada902b15bbb1b098d8eb80470d441d2c81902d7af266901b7ad23025a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
