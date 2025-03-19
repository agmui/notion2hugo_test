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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AU6EPEW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC5pLFYi8b6QZy2PkKidgjRqOkley1OB6dC9ag13%2B%2FqqgIgc28FDJvReHbOZlKaBRG7rg5mowIqVsc0136yYASJ%2BC0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOoJYRtaS0ZIrJhIFircA%2F882rdbc3rn7%2FUyU1IqlVp7%2BazwHhewwaYK4ofEy6zVGRh96bmTRb8cOPMTwVD42ay2QPZQUU1ILODrTg1yXE9equkP7wuQseWM86p6IiKktL705DFgzhh02Hs4GydMIIDSdERguJZqTY%2BBQqAez9jnsqYGDQjXRMuVAQDoaiV8OsX39GRqFKCv2dCHSNdCvocZUV2kBqIA5v45ERxWFrWafU4uH7Wk%2BZ8ZSpAYVLMkSNfIWIPO%2F61ztnNbbwjMAnbv7zThkCS4sVuGFy%2BdEo7ejkFeQt2k9r%2FSIMIgUDOHUxasZXt6XE6qSuvvC47reLtnxZoT835SGL7CX4uWGt%2BJULKFh1RoUa82YwGJcQdllM6dnA4kCpyu027hZtCwxE3m2EBoWnbqnkMVxFMYSkP6TgEW2%2BK%2BAJNkVAt7rN8NZO%2BSCsOGbkep%2Bmfe3245Tru%2BoDl0ZIqgzwuC4VZ0TbLFHEGzVbCurMhC1lh9PMVLWATgZA5un8H7eqNmtNB1%2BDRhWSl%2FrW1d%2BXR5IpYJdaKgJRL%2Fs3ALzuI81%2B7cXQTJIouRyKXGO4rKZkxtPtuPLVBIHymUjUTde17jj05xDnsaPMAFJVzgoT0RYrPVWp4STHI7r%2BOK7uxbnjmEMPv96L4GOqUBYDbYvnGftGHRgjW2dHFu7%2FuNIPiz%2FfqcCZUDAJYDtmvp3MEGVpJxcZ7dwFM9VnDLFnmc4%2Bwn8CtAaIQTYK5rLJkEirysg2Quw0J0lF0dnz5Zt2CEP5NVNLdnqfuukMSChyZ%2BdvIf0sxN2wgFhBVJanVm072dl7AK6RbB6TIZ%2BX7SmjRudhIb6LbLipTHUtp94XKxWo3KLXHjVdTM6ajO0rQoHtfu&X-Amz-Signature=4141298b7a418147efc9c44678cff01987b2cf4bdca5b887baf769e2d47dfbbd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
