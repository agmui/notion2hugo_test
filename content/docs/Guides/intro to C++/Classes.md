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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672JODFRY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCID5eJHmXcUuEo71UEDgmmQcAE%2FMrKmMBZ10Z8Jszvy4EAiBLpFQpv965yE31EPdXfc8i%2BFg67bF2fmGK5hwKGo6ZwyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrWnbIub4X1wMChCqKtwDzNcAzhm0yip6%2BfR4Q2l63f35qtk%2BpWq4JIVjPGxjmhKK5wreGEjFy8HLJAIB2sm3Xo1rrN7EH2Ih5Bpoa7UVs6RGJK94WhG74pFPDnOt58wBH6K1GXZ%2BRyl1LAYASx3Wsg%2FklWNwSvbpIB3dD5CiloodBOMUNbUhSciJYBtnPuM4PdGNL06tcgmSMejFU9%2BLPPbklDUiGm78PYbhF9Ua6%2F2%2Fv%2Bq8IMyJqI78MSKHoAN2UaOvU3c3K2sZmMi9g7826bKh1IrVHyxx0%2FZCG8E0HQg%2Bx6JmxdTlFHsNZJAoSnW6a2wlHQlnYmSfR%2BRKuirKNpJOIAtE%2BF86FJNLouruY3oXLhf6C%2B14eDC68KEi%2FwLqDJxFN6HI3S6KsZRK7%2F%2FFIJuk43DakZVTKMMdIv2KG1B4tL2uq4aphXhE7XK6QejfSwHg6o7RiWOODKioRCsT9hXG%2FT2IJwVFYvMgctlLHs3EKQR9G%2FLQGkfnIMeduUxUspL8JWyypgr%2FU042bi%2BIwf2g6b%2F%2F4bQLsDRcfxqVP3f7OkwMdzbgw%2F%2Bpy1O4943c0jkVeLw%2BbOgIf9N8MuSVnpPmsEQA7ALVQnDSeuCDEGJQVeO5qquIJk7pOr7Zdf%2BxngXS2INOzEBAQbMw17itwgY6pgFPVNZTedKSJWHg2qQJ9Hm8KM2B2wnfuv8QYb5RF5ImdS9Mwe6BafVAhKHvhXDtzKMp9PzUbVr%2BXprFV2pwAVoZpoKSKLjnwYABaNEfZmq6KVvs7TS6DXIP%2FEq3TGA5iJtnRKrapLRB6J%2FomaPFpWQxRdeJegt21Yehf79BrDSNti6D48AQKMlwP%2BM%2FDdgekaA77VuJkuf%2BgXoP2axVE0%2Fkp5d4XtER&X-Amz-Signature=40a264d23d9ff539c49e01017a1f2a08efc4130a219fa7c494dd33bc86e8a3f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
