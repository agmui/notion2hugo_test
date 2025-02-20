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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VOIBXMQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FknPPnquNC0P8W9AzUlqbxDDWXOHrCiqItZge0Xz%2FaAiBzJYO3MfHsnhtH8Ib8NH%2Bl3A1DrWgfCnOB54zkbCY7GiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdQUrfXPhZMoH5fWDKtwDymJS5QeuVaYub%2FmeN0p3YEvk8j5PdA7XZkGD9eDIspPHh2jRcDDyic8rBWJ6bL2Zcpp4Knw4yy3HkTdYYmgg%2B78N%2FrgEPrDGXbFbLccxuW0H440myMJuC5z%2B7Rhc%2BsS1PmLhK1p4CU9xa6twB5Fz4lUIPJ3QudMqXL3nXGt8OMX60ioXAZ6tHwmeHtrJstF8Vdn8uUVfsLQFku0HD%2B2KYOLqD773cLWPBozenPrbM4srxAllMwkUkLH6q5ZnZXBdO9dESZXxcrfX%2FQNx2rMem2JoYJgPrbdsMYCZ247N36VJq%2Fja59PPUat%2BaT%2BPkrzb47alJl7QtzPrkqPFtvzUMmLu3h%2FjYJr6Lb6S1icCqGnjIJtEwI7Ez0l9LmSoR8t%2BujV2B4rPJtX4W7zqfGmyb8Npnx2y%2BPVZms1bDVsSDeCMAqkpnxr9MIKdMpFzQ8gL%2Bf0cy%2B6vq1e84U%2FaJ2lhrcoqn7F8owBgFERHyFXR0vq8oyZD1Mgj0hAI8CjQ6Keq3I54WRvEaC8DvrgwKLkyzMA76FTnlPoE2lShV2NkhWMPpSKSvOXeagmLBFN79AEEXiJhftJ7vhgEZntjKTEhn%2FTkT%2FVNHkS6Pdv47XPYr%2F%2BkgG4HCyyTFn1AZmMwxfjcvQY6pgGZhmf2gz0KITjRu1e7s3bubO3gr6pZUDY9ViWOcYA%2B%2FCJu4E1lJYPqywrAq%2FHEuAHGuuha6cpna9bCeT4gej0WM%2FJFyFBllPs52XyjNVt4Jm9JhfMbh2ZsrrBNR5QwUp7yhmkgeXHVmxHu2U1iiZiMQddybTofCASHlkGEGMMF3in3zxQzEPX88J6EHPcoUcKP0rasXg1M3qLm1Yo4eCXoA3TdyTiT&X-Amz-Signature=e82e78a7cfc4aa1b8cef8ee1f8751dfeec74b171e136da2954207e2f46077208&X-Amz-SignedHeaders=host&x-id=GetObject)

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
