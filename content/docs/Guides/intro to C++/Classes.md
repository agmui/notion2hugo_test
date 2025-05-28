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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466736UL6TY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1MXgotLDwwrr%2Bq%2FwJk0B4aD1%2F0cARHkC7pup7equORAiEA%2FnfgufqtXNRWfTaaymm4F1z0ha670UvKIs073WmEPLUq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDB4t1BXuB5ErZtfzayrcA9L0Wu73xsfDtx9imeIL1iQiF8T6jh4O4TJJufOkOFRK2cYET%2FQUhASZLM6Cfr%2B1OMX4v2CUmUCVmGfz2s1pPfLgwAxe%2Fy8ZwFrpdaiknvQnJYEeJYUUQ6SGb4EyQhJ9YtmZM0Z5sEkcKe4nX9Hfic22fHsclQ6NJsTcOGo7qECg7JKpmzy7FMzPQptCXDCaYX5UpCH1niTEiMjZrjfJyVkN5bDcDCFDl0hfm6m9LmeSxXinAeQVZjiOGZpi8YtnpqMxamXrdoCzvG6pVdXXuzKvasGowAD78VSDP%2FIkd5uPn27KCXUmj7WNTEUi9pCYP2CjyjKL1%2B9d1pCHdNksH%2FZeUdZFrNCEqvoBKRSPycrGvmgXk%2FGDPUFCBOFmq1AQTNb24uggblAtrKxkqpuPViq5pyeYj2YRYb7qUi5PZ%2BJA3KVGBiwUdRLym0M7ct2Uatpb%2F3k%2BWTRS%2BV%2Bs7AW4BH9VM7yx2SEiwI%2FpJTl46uR44jCh1gCzU76%2FbbAhbdJ41WiEUb6m5YqG4rDsCwNSrP9kkGhnsD4i%2FWbvbfeLEt7BZdNpOYHWMy7kNOrv%2F2kOLqCyZkctCSSBMRK5yCsHk1hNWPmRIs5MGykuKhPKTxDTOcQ0%2F3bpX07Bpb4PMMKk2cEGOqUBwBnHZVA%2FjaMHPrK4%2BjKRjPI2Cx%2BvK8TSSkC%2BkrKKnJpTAM0096siVm%2B4fs4JkXOY2FkLuulK8YwKdu%2FwKVblH5TqT5uTVSBzc9s6M139rXEi1IFxQUppliX8QQECZ5yOV5%2Bqy8vHxfJu8%2BfmTP4IihJMmNvDDkh%2BS%2BayxFoVMwHah1GiEmedPgPoQXdYLKyrUUUpK0GqcYMW2KqnX1734AdFBiqt&X-Amz-Signature=5db64b20b735f149f71f58fe450b28d67f9df7bdba0402536210fa64dec69252&X-Amz-SignedHeaders=host&x-id=GetObject)

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
