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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WMIK64%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEmWA2w93ol8Bc7HUUNpy0lj95xMvxzGDaI7vVb4FviFAiB5USg2kwKz99k9tAG7hSKu2FYYOwDPEdsEmncyF7g%2FFCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM8e81DseFn%2BYr6seGKtwDlZmuZ5qJZJN%2Bl0WGzOJITPX1Q%2FWBq9YNpArwlEAXIXHoCJIbxKeb9yYNxJxvF8lroHPQIOxaraB%2BorDQZewrnbtTlCV1Cy5a4O7n1vQjpl650zHS%2F5oa%2FJYwNkbusWCZsmhyt%2F7L2N0vVGpW7UsT5xT8T5%2BlJFt%2B5lH5ag2sbhmODGpgIcwpyFnbpMILuXOp8BRbt7Y2OZYmikpVf737ST9L616Upr9XvWrzT5fVSkjkZAAWaSVKXGg40vsdUy5D0DdI9d49hDXt63ldAAsLVGXfe7Jiz8W5U%2Bou8sPxGJDIqpaRhjk8jiLem1ziE5q83zOLSuPqpxJ%2B5Km3fntyBMklJcTsOU3GZnTPY8fOSBXJ6sN6dLLwa6sIwp0GSoBm7syXKg3JwrDpGf4N5MUEJ4Rn07pR%2B2kWKt6c26GDEHwvb0JxR%2B1Fwrmd44KMTST9gngclMc%2BSBaNmdQWOmm8F1sVdqrwjt2mZiAzzLimQNMkQyjHUZNmhUl9DIQZg2xfnd3x6xtKdFe%2FQ8IX5%2FQ%2FRZfrQ90N8F2kBT9JKvXGbJf5kBWae9VQ1jrAAApckVYbzDQtGfg7lGQGCLH8F7tyM186IATBXrxd45AG05sfRq9d7Yh0pHMtMKD2l88wmfqSxAY6pgEmS64uD6Dqb4K4H0a44xAZmd0fcJ%2BwfykWMdlIfE20w02VtPv0vz3ooRmrPYE0rpM09Geb9lkK9s%2Bn8kN%2BCy%2Bu7Csaj0i9Y8j5Y2NN7j9whM%2BRlJWvZNk6Hh96Gvs7onia%2Bgny%2FFVJMzokVXOHyfQYn79Uguk3CjG6y3OgX1wv9iYP2qYYcq3MmA2Fe2G1WQ8V1t21cY2yteSai0WLVsWrHu7Avfro&X-Amz-Signature=f44f9215806a478e766e0068fc0349536c6560298e572be805075c57256a0ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
