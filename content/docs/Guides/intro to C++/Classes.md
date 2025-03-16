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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466437VFREU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOyqmON9819BL1iBM2t0UXeLm%2BzZf4zm%2FI7vxxXWM4BwIhAIHmfBKiMJaLZ8d6ELhHqB6Ovhv8TuhxIqBuGacEWy5XKv8DCC0QABoMNjM3NDIzMTgzODA1IgzVBhSzqEQav7%2BfjVoq3ANVFmO1FFdwEPmH1fwIEB2LTGQyynpNA51peuljRDgRpK42c0ZRrC8dkrrWvlbxAvk4P4p5036SC%2BdlnNHPWrKgGjTFIMMODewc19E%2BFJPFHA9MZLo%2BR5g80Cx9VncGZlqhz5%2Bjy2FVCdirYMMrnaFLY5v0d9tPeH006Y5KfUjhQm3ctyhwlzNY3DG8W4Vj7JRHP2wCvxxNW2DJPrfGcZa0SGLlNg6HR1kDQRIZEc5K7OGE57tjuVPi5oYTl9dY8LcPRkcxuIxolvsbhB2G38ks3OaHQqfw1Abvw6xsVJMXnjfbg4wdHm0YKLY9zcCNhfbpLoKdggGsji0UK9PwhER%2BrFBuzMn2qDyt53vvoSXePKO%2BRcEk2oRHh7GNTKFlU1AhLnVytYI7DSE9Q5WffVYTxMCrGilEMsqQw8GQO5xa7DLmVwIfbm77ChqEco4xePuFAIHSDCD1%2BlclLHcws9GgzsQc0CrfsWJXJGnBXtmqtjcC2isC0GnAfD8TTe9og5txrRV8CIN4z0qOH6u7P2JQ5CVZoU%2B%2FRu4USR7BHCB2xXwegWClBVrKfau02cWUgtvWjR%2BYhd4pZuFEq4tZeqxlYMfetjFi139EwBjj0mVN8MkMxqddo9StBANfMDDAhNu%2BBjqkAW0PFe%2BpygV%2BsbvX4sSe778azI6pkQ7m23Q2GaLhRBswhEATkSGhoUcInU2oNw39B3wNmwZpySFqDeyPGV63VwdgiVyJo89h%2BTxNLfXFZ1yuvbKtgiHyYWTpdnYarQLC2H0Rx2mqfaZ6c1eg1YEVaPcJKpA4ECcL4GSyiY2AvJmgdJ8IJXa8TmQ%2F6XTLSizEybKtd6NEzKTiMzB%2B0u7SkMQlPTke&X-Amz-Signature=7e0adc86acb173c70657010f835857769928aafbf1c2514a95b55b69db66183f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
