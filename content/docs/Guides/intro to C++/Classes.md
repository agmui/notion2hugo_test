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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPRCZQYM%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCS8hUbiumfvohx6mj6VayuV4KbyuUd%2F8kR0iVQmrk5XwIgU%2FIjQDNWr018rBUzmnBZU8CASqSwwwU15xWKSs2Vm%2FYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUNw90fG1hXKqH9%2FircA1rNTJs%2FMf5zOTXg0aA6snzfhNkRQuQwdHpEhx1nIvGmgE6a8B%2FyxH8WvcneCtsCrYZEnmKi6niFLKPumfSoz8Q1KQ5Ntyq4te%2FDKYA2bgFz0rL0%2Fug1YAcMCkqXHZrbfZTkKwZ%2FTB6%2FwwHKzJLd2XDRquVCBB6B%2BrFcFsWgJW67zV21NegNqYad%2B4OTWVNBNmvFP5CS4DjT1Lw6l53MFWkdNa8dejCnml%2FoNe2cYcKmxMEyzdjzgWWKwDaqaUmPjEArlKxDlbxOjVjLvcXWRm9B4Y0RQQxxVdCe7bpw223LIAWNze4PDLMYLcBte7FcNg0dly8jVqEQbloM5FUNjgxjbANVXMrqtRV8Rb8jyzWn%2FEywESIm%2BP8KYcCiyN9tUPn5K4FCisy29iIjht2%2F9Bq%2FErLpq%2B1tg%2FenZlgpHltDslTr6JXMy5w%2BnsnjFl7v6Pg90xwDSO0utqSLLeAutRaisX%2FA25JoR20ApWy8%2BRQUEtc91YBJADMWOaTO6%2FdKouGA4%2F%2BQ1j0iao56fdbGDMENAo5g9lnNEW1yS7lp%2BkKItul%2FOd7FShLb28aZrmGCgWMdciELAIDcUMcjLA3bGyND4Kx8HOvpZ%2F5VlzyUsRdaWvkNFW7i4seYPDUmMLjW178GOqUBImzBoFkpqqBzUAyblg7rTtZS4n49WqejTgpKPG5Hk%2BhJgBnuNAAVjRfrNpgPMW4DGtozqRtcubnRiafagocGoPa6jTIuABVu84g4JRmsU3FHDy0zODR7rYARTBpoMHnVCAWV%2FLypOwEoUDE2zKb%2Fb4XAWbMdmnHuGjdXUN5eN2dURBdcc88JMuRgxGLUXYqeejJDT6rZKtrhQiu0c%2FtXaMoCUorq&X-Amz-Signature=85c6510101455de79089f78a58267e5891785bb4e516cd3238a490d0aed7ab38&X-Amz-SignedHeaders=host&x-id=GetObject)

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
