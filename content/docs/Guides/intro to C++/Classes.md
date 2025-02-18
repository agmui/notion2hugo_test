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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JRY2LTG%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD%2Fyu3v2d%2FwhciN6wtvUKiX4wqelIb0wok40F7gRI8FIQIgSXy9hEwhUh%2BHw6DB1pCJIdyQXC28kJzQ6GFarXLJu8QqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBak2EnRJIx8MRS40CrcA%2F%2By5gyr3IEV23dUUbozGFAzOm9IkwvNojB98LBFtDd5myLQjzW%2F4cYEmHSAxTFdCWEt9UKzL2%2Fs8h%2Ftkjfx%2BJM2vFb%2FIGXk8jEFy20jWkh5eRw1%2F%2FrEbQQV%2FWJjnKh5Kre6%2FyS8vEGIHC3WifD3yVkSuEstFveR35ylMBI%2B87kaP2O8vqETDqFm%2BlqGvuMBy%2BgNxnG57%2Fp4lfZ92UTLgmXwbT0p%2BWRGVdM1QVPxYWaYh2lvq0DW2QIbaui%2FscjND5mJjgTmBmOIgLXtAqQR5LjyoyCh5jgfX9ytxSLuotl1Dlg%2By3nhXbzdmxkakzwER0AiKjxooy6PHpobrKzhuIuJ63VvCtNi8l1xbMWO8V7sY0AH2o0jPLle9%2FgDzEjvYojiY9vXHFQAuSl6sQc31paQt1v0tDLzNrjUtFyg5DT0BRgjIhkAiY7ZjOfBgR4Hq09BteRcvKjZCcF%2FkdX6gPyo5wNi7e1ciwSru8aiQuC2AaK61bTxdaAmKmLLMej9%2FQGdfE1dVTooSk01r68m4sG4KX3%2BUtvoI65mCJlPghj5%2FOBsuRWiIIilGYkD68%2FlyDEnGFYJUAe0R28DDVMr2qK7FfKolFa%2FNVnB5Eg%2BJA9RuT9Ipx83RuO%2FkuLeMMnb0b0GOqUBv4KQ7fPgQENjmBWaT9vpGu9RRo3mz6lI7JjeYoCYqFRTCQg2ZGDrLHXwgYSW%2FRNXeIuqC%2Fpiicq6gJJnU97W%2FmFhB0CG7OmnTJsowV0C%2BOjDJUq6LlbGNCJSPup4YNafxdSZkN2Xxc9VR0IdaPnRrZutsUy268pfU0Es%2FMzfr2e79Ww28eSB5gFiMahmHp9yR9RHzkCcWlbROYBupIDnSn2tpHHb&X-Amz-Signature=14086de63bd4a48c089bcf8f15021953241c5958183e2b7a7e59679812064f49&X-Amz-SignedHeaders=host&x-id=GetObject)

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
