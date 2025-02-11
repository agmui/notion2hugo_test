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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTTR6EO3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgZt5f4gibyCBNwe0mDE9fGgwniEyYFisZ%2Bp0PZpjEnwIgGpckPKYBtHh3JYwSrpj58iBFejaTUmanlBhKbgG3zNEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOZzC7zTy9ABnFDuSrcA4lqy9m5R03xphpGc9dazVjeceWIZFskipd7xGfwYxQtAZaaSGWdI36hRytCftCsklchviu2M9ysizzUrYCahgqOj2Z9TQkD6PL%2FNGoYSty1PxLdSw8mP1Ryj%2F8yyU5qCH%2Bzz403Xu%2Fh%2BCRIdC3Xa%2BHzq5MoKLQDFCzjG%2BsybbDgIVFf%2FSTQF1OzXfteg0nbMIPq8GD4dZjTxeGFN6Qw10DSLMTDJ%2FydqJSIELNPEKZEMnkmLGNNo7TO2ktO4Snkb6Mx7zocUXXXiRZO8VXv5MynYyKKsX4BgLvACiut8Q3kSj%2BgSDyIk8dsrpLifAJWYnjy5DTWA9Y4HBwcF55ZKwOD0DNKzga2oPjTwFO4wRf01h0MkyS3IKugXWoXLoQ15SMqbInliaRYG30MZ6IDQ1wLD1y%2FBLGj1gu4itPN43vC%2BbIUNRYbLf0F3KNRH2E4UfMJmzTaLBWggT7pssq359tBHEnyYFhx92kNXBkd0Ih%2FZbqqfqUKPlObfnT4ifwTru2WnQbh3GcsRFFrNJK1Hm3YXRO0foQV4SO63%2FPF0cXccDzDRF%2BqXOIjzT3dV3pgz4riZBHD1whRxPQz2uCyHfRSWgt6%2Bnm%2FEulKBIIZMmWWfFw0bDizndhiPBCMMNDIrr0GOqUBqXL7Or8Su7IxjS%2BZbL0YcO0IflDJ%2FgdjyjWRWvZx1ldKWFkySxLjkCiGDIo0ox95gnrnwUCh0jbnT0RsEBnK1KQycpJecBf7ULGe2zuUNJlZQ7gODRRXFc9WBmXyJ%2FBlUOBtvLrhKuUhdbKYp8c8syxrqI0CqT6ib%2FZKBcJAdHZqBsb4X0QihqhW6AAGovEfekhr1eFKan2lC93NYu9rK6BBixC5&X-Amz-Signature=5bcfb5d276415b282a7a4542ff3d6b4901aa4db7e4b0900ea143104fdc41648c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
