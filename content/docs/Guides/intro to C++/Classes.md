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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653DGRF2O%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCygRprzSZrZR7N7BiO7S5a%2FRvIt0qPzRaIcOvkTomCnwIgQmF%2BNI5Z3SeAkYOpOPcLXndzPUb%2FFMrExMZaTyw%2Fnt4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIQDtF%2B8UHsxw28v9yrcAw6ATqZ0hlA5%2FidYWcV701YvjsuhEG5el5zsMannB5kcBtl%2BkAKcll07jD1QSZdqabfdV7qVPuMVX1yACnZAkOJUBpB1H2t4dqdUAThzkxbl4Vs27RytNPUBjUl%2B1ODUyJgixWfC8ZkvOQmSbjO3AhSg%2BCNTAbkPsdKC9kdWjFe9Mnx1DLGBMOPUicm%2BvIWnqyneMe6g3m%2FDHGfpYmV8CgFfbfFfVebgpD1847x%2FGe5Ss%2FX%2Bs4fyYuI932Jj8C8griqTXTzvNIxItc5HlQ1x0YbZKfzDCPKpVMYj6PzIuGwbgype8DUnSliA8wFroGSJEAA57vy%2FkmQQTn0%2B9WKhF3eDcF4c5FUgHLxAEHGWJ%2FqwvzIEa2hrYyiyMs3VwL333sxPrOohpVST%2B2dXTS9SY6GiBmjh5GXt%2F50UIGfPO999SmEaqh7LgOU%2FScf9iBLCRIXgB6waqbUcpoiNlLnKth6LHELgADtAdPKtWpE67EK4FTU7SFMB9I4y0%2FysBBWQrQecVFvslm6VwXC%2BaApPKe%2BfCCrbjqbgzT7VdRBrr8RdYc7U15urD1VbAp7VWmcb9SiufD118gb5UEpZdTF9aa%2FCrtUjRz%2BrQrynIdvA8pIH2EgoYzHhWMAWim15MPyiyr8GOqUBK4zbxzOa%2Bnrsw3k2Sm0WSMzQPb254kfP57yIn3ToGFXf0mCpVsPcmbvQH4p3HRh302XNpc6rr7EQovOMBmnHyxvcyKzqBZXKPopKfm7H6AxW7JQFj0LWB5q8TWi%2BTAnn8CLfmns7hQMlkmk1%2FPjyov9Dfk%2Fz1gmwR8yv3GZrg%2FVjnz6yR%2FXtsISVEp%2FJwhNnU8AXjtG951ZVDok81mBjUGqgIuDQ&X-Amz-Signature=35d08a1feab9dde14e8f890c3c0bfdfa4be5f5fcef77cb80a1da9a50e68b1057&X-Amz-SignedHeaders=host&x-id=GetObject)

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
