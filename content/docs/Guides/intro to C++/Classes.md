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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN7EQEQQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQClPv%2F4Scc6AquhAKUo6YO%2FUoVeVpvwJ5h%2F2Ayo%2FCiVawIgK1jzPX4n5N%2FyEXK2U31koyZ0%2FZaAOKFM8uPQ3esXl6Qq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOsarJvWSC33T%2F7T%2FSrcA1SBqbSO6eCKQMfK6GZYw1LBs%2BKubZLmKCw7Wr6SsfsyHeDc7bqfU8OIN6lllB8MaXwn2qnsh1FkzAR5c1SY2EL5Ak2AGlmXM4jZfrI0Gj1CD026npf93Ax18zvX51sJ9HhkAXzO1ffbhMJDEQYmBOg%2BsP4vmXf51VBlvZtYiAgac5EEWJYHif%2BVqJZ8PBtiYTaFRKkCenYamdnGPttT6msrkWnjuSG72mQY6X44Db10WL2ncBI8NU%2FGhCrvUdm8tTv74XbflWwpmerUDYcUYzm7zeOls2geXWRKx28HEZuIebmve%2Bma%2BJ9FzJ6%2F9MYhaY%2FLpZlvFDNge2U8uSW1liWRQRL%2BVo%2F9Qt9%2BM7bjrVFeddna6FHBoMUyFL%2BPypGcd%2FHaU1B0vFzhNJTQWlHWNYlGBuF8mZKuHkt%2Btax5x%2FXR84WczuqQ7JvC3GgohzWsBmI5EupAzsrpnVAwYUZCsWUU4HDb%2B3DNHqKp8ua2PNuE3Dj6LZ6nfpBCk6aJadAjLwPGjHKnZ694qRGsncH80bsSsaQWx4F2CFEB5sC3Zwiqkw1pfZYtxZ2KUHEN9Zn6O6xhQBSem%2FBdT4tH3iISVAYrbgT7CyJb%2B8cfvGjAb7Cd%2BIFNeyRexgxvuPptMO20v70GOqUBIE3TzqPmP6pqoK7nzzyHwlfqdQVGCCXeVFwRXZ6tdWdgvSQNKOm0b1Kew%2BCqT2Pvn5K9bstx23Q%2BVe5nPj9YhWhGq4NZwEEb%2B9cxVF6WMwpjLqPgU%2FlIXj7WLuWz1HWC1lqV75iQp8uPTEeSzATigkLmYDxZvdqjTdznxVVmJx%2B%2FqfjvhmlPsttV1X3bBCNu78LyjLpq6ltBZmhlF0i7kJm91KKN&X-Amz-Signature=270b39bfb0cd7009afa5f28351bf760998604c8340af3f472d23b900f3fb27cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
