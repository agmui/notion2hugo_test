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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR6G6UM5%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPo3TNGQQGx3co%2BGIZ2o6ms%2B%2FfoFQam7elmomc6EWB1AiBOfgIrzkPvvMI5kXAAxB1cgret8rKQ%2B3xS20k7yU3b%2BiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9RxDfeu8fgYhg2MhKtwD9sXgzUVsEMxPvCwL5%2FVbjPKonmlsgTlBh8zPzYk7iOhBNeiOwX%2Bhy6zEMk3NJxx7%2BLqRhzmNnJer523I9owiixMv6iIg4hiQL97HxtpECZPB9jmK%2BU%2FDCGiXKfxKmnn9UXp9bDwGEH6sZNWYQRpgtw1wouxclIp7QxBk5Kg8yXs2sOgrm8BnX5qesBTvEoYZdFNdJ3yMsvbTFEdyi%2FPjnjHVZmdWtTTdjCd8CmESVwFeTcRi7rWextpqHnKlKq4mufXTClkMwx24dllit0MH4a2E8shJnF54qylV0hS3YCRE2N4gjGOhLau28v48MMc8t7MY6IYn9U9Yk7aQdSdckLQYKQX7Y9%2B2yqlr%2BRwze2DqaE50cA7lv%2F4CI4i%2FCa2dq7upWsb6oD2BS57SUEK9Il4Tc6r3iJIW24b1cT303SObJ4gmKWjuBbBQRmAPViNOp8z6cNY15%2BkPlo%2Bv%2F%2B3d8eAdKUNwvVN4VIWZ8rva9Yq3UsCoqa7eZKbHGhwtbepgLizJOFwFvmnWfCW%2BCTINx2%2Bv5EwDY3jb40P1119DdEz%2FySszb3BP8FR837wQKFAgRF8zLNXR9lwRlfX4HgT7OGgbpykaB11x%2FL656Zqc3zAgqzkp72pGTFhKjq0wjMWEvwY6pgGLtZOroKoVst2NmpPsMD3mRN0W39XqnaR5zVXa0c%2B233y%2FwYZGZWdR4OdIpNznXHzkH%2Fc9PZRBBSGi6b7CWwbqqb%2Fr7Qd3muiPVcQ5wuvhO3ICARYdu13I1gNyjZLY8J6ovhR%2BzckBva85E06H5jnCdX%2F3MLmUP07E0Y0b%2FwA66xopW0m6x1aMuW6GWJPZcxwrizAfdcS%2FJauAlEX5nrasG4ireFUI&X-Amz-Signature=eedf2f563dc0a47f303612ab080dc965a9302f44217aa0d2028538848b6594e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
