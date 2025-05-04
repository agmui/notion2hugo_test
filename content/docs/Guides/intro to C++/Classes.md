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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF2LKJRQ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCZBslqzkDygMHKY3h9ypIQqE0XP5B5q9suKWEU63WsBwIgO3Lj1JxGYUcMSKF%2B7U2Y7xOs%2BETotPuObU%2FFyzL42vcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqi%2B0%2Bo7U43ScC7JyrcA36v7JhUyAqk8QuMxtwEun4Yo8lFfBA84m6nv4SeJ8UQnMIrW34V1SYH8zQ6ghLPMaJO9LJrezuYutvPiUMmsZ7s%2FO9nK9zPqbAthnFPLAhsg9OB2k3KXqmobZIWKdQ1yJFpRP9cXCrzuCEWhcYGDq%2BcoR1K0MlKhkuD0NT9lvq02ROkWsmS%2BLMfGyEhsIKx2Kj%2F%2BnzLHL01RUvlAsnDyEwQ8PwLYH4pwRCnDMSNg%2Fk3KN7L7sv%2F2YHPZLlJg5cDI03khqVlD4fMJLFX0fNwXFnQLbTa52XeeARFV%2BlfkfeL6CEjyp2lwynWTJF6K4pP%2FDs%2Fxuc3Ti3TM3VUptvZ3%2F26iaTCQYH1TdS02r75EVvpJfAM5lxvEJuGR2kClO0jzw2vNKq1WiBeN37Jc2pcgsF1N%2B1Wh%2Fq9QVkFEEA13ju1ROMGOs9zaPpMdvptlEhI9fbhM2LXGiNNpi6BWhmU5r2DFBFtRlUc%2FzUzr2kgHbU%2BjTyc7eWFs9PaZwQyHua8HAH9eguyLv6i1oRMm%2FxL%2F%2Fn%2BA4NvlYu4xXRrI2a3d6vho5Vv%2FiKjIlWEWMkRbmSdq7Kog6bpyjw%2BL7HFT0r83xjDuFjUuLgw1IwWNaYPFOdI5s7uE59qTbVApUaJMIjr28AGOqUBCQzpk6IMt%2FZOez0PWKoGvkFQxkQeMT1HqipgYSdWF5ZCD1z6KD8cQuwwn6QnLGIY871t%2BYXIxoHFKXpjXUOWioPVu18u5xpnP%2BQO3h8tLHXgemqW3Z3oT%2BDyY%2Fa%2FgkdnzqcXSuofscz2HQiAf053sHo3TnuqQvGIx4SF9VtVwMU01grYtTB8cQh%2FxhN094KU7eyz1iLBZ6VpalNyt4Ej7kSNzsk4&X-Amz-Signature=980d6eba1a63e3395df47e37ba538e0a078f2c76bfc2545d90eeb788527d6a71&X-Amz-SignedHeaders=host&x-id=GetObject)

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
