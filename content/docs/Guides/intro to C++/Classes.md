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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUBHBGLZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B5PxIAldV0nPLB6GNBqw7d1DZLO24n%2FS3kjhJAhkXGgIgI1G%2BNX7eFgU2PSkUe%2B1yUYCa6LwNx%2FJo203BWwT1FFYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDOLL2R3CcEEamjXxsyrcA9gNIlile%2BO9VatWHtptoGguQO32s0AJDSzfUbcPWZ93iWv6fpZ7a1hsD9YhxjDq16pdwk5wz84wc3E0fDRzK%2F6z1VbWHd6FlWE2H4xm8jdLZtH3G3AagtbMFxk94pIMali7BNprtSaLcrjXJnTyMISPaCm2CBxui05uI6SVsOjf1fE0f8qkcLZeHiUsTmrhFhboG3AR6lUTgxW92rWxlHK1sP2onjdqTd6OjBuft9Wj0Dx8yLQ5DGex9tHM6acBrtjgmDJD%2Fpmxyg7COw2qNSGokpQOWnpAr2Xhn4UWlYhfcMJz5KZVr1UBpLYAfAJ6wiRRIcMIuONRp4A9VM%2BeD13%2F9B7rS9vmL1%2FF9%2B4yOlgwbOy0k9hiTN0Wj%2FqJpOC7Zlr%2F6vUCdwOt0ip8uGUQHUQvEe4GhcjYmypj1a7ffgnm3WdxxJ5RZWPys9aAhPZo77TNDGTniYgjcgrpHw9HkHrF71UJ8Ny2JWp3ewZtjD9HTXruddptdLHGGhAsPrCg6a6viXWvFFNZiSncwD2QOfdnIcRR8TZP1XlyzmesGGH7WaBFd061vsyQC2OhE1nkkllqme0PfhikiDFtuPyGh2eiMWcEFkJO5p%2FKC2xVfcu9iFD9DUS0I9Yis637MOjfgMAGOqUBtJ%2BBNCR%2Bn%2FSac5jCx6QjIrnRScv7GRgSZMZzaOYcOMIFpk2RGgNN4FVu6oR%2FZ4vQn7h7xsKDOg7%2F83Y%2FIDAoZ3x7dY54%2Fb%2Bk1mgcwK%2BezTHAbGCFAfkmgIY%2BnbFXbSBgltR1Xxbb1rXikrICUyQLiz63BCR9Sg0LHEIS4cQd5irOqYn6OHTV%2B65ycR2xhcY6A0Xqp7hp%2BBhr55eGWb9ReUjJ3tSz&X-Amz-Signature=62f54138f5161577c86e69f81d5e0d4f77aeba388289808002255431420faa09&X-Amz-SignedHeaders=host&x-id=GetObject)

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
