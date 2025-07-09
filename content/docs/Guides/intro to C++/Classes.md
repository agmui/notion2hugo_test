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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMH5LSQA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYD7HFRQ8%2BtcUFukKj6aRt7MW14%2F%2Fan1MMvHQGDlFibAiEArJ90PMMMLHui8SFXMV%2F6nraN8UduyiGMvVqC1D621NAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKAFu5BTqj8r7SJ6CrcAx25IR1jlMoO%2B%2B4o5B8UYOTOws9bwQt5xGcXGj74fEayLZlHBp56uuNGWd%2FGEyuhBOMs9lTK3WPHY2Pp9yV4fsvh2i0WvkEmL8t4%2BswjRBQSh7z3u7g3neoW%2F1r516brt6PQtnnOlLIs7yOBr%2FD6nUUTbpL8zrU%2Bqa3bsTyWyFWRANH4NWhmjl%2F4tKhVGAalAzGDvm8OFU2Sr1DN2mIGAoK8cT89zQH7ugr5OSgbt82fRtN%2B7XM%2F4mVWeSzbmdBp6W21vwCdutjwHdOPoFcTmyAF99fKY2ivmKwxz4HPMMjaS1cSp11EBb9aURaFkDLOgM0mxVYSFjRSW1LAOZPtmrh2YYkCbxunEd5T0RTABc32P4ivCLr2DgABmSQyzx3FDWnStAffiZp%2FTXWo7%2BB8rIVZ5XYlhw9LCJRREbwLpKRgx%2FOVBfV0cSA8T0YWEqHrEnDtBIgk3WkHwIb%2FzIsS2yprIKL%2F8LNaUiw6DN3OXjNaeXpYg%2B2qTZ8zTL1CY3YlmCM3jS90SJ41nHHrP%2BU6MrLmqgfPs2N0pimV1GqbxYFxiucWiwfGGujAbV6GuPNoplCxKmlfIEWNtiGI3DlrYnB7pLUBeaDlEB5WgEaeWcqEaATfPaylVGKG91fOMNXKt8MGOqUBKp%2FFAj1stO4JQoQmDI0utj5rxX66PgFUnstlDjyKbO2sCI982kkOeHT77e9G1LsawHtZY4XlRKFAECymQxWI9OGLY8VEFkzNHY0Dfj%2Bp7So9V8aWgBpAfumtTr5tz1wWwxmiCyW0aPMPJdDLX7rVX4%2BSyptoi%2Fg1s%2Bnze%2FYlTzAMMxe4Xqx0FQHlOwkz7doAQB%2FjRk8g3O8USPmazhUNnr6PDI8m&X-Amz-Signature=4f0a86b7cee2f79183349b2821c237a03077aa6f1b566f7b71bcbba6a08424e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
