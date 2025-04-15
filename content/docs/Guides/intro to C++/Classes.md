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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPXAXRPN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErp3oz0adaH8hYyIvJS54n8udLNB91DXYSIhlEggXNGAiEA0cU%2BWLfQwXgJCBnXSr%2FVMgsvWdLTWJRP9jH3kuAEpLQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHLAFJC79Gmlo2xynircA4eFM%2FIXZfqTyDTXKSwZQuY0VD2afgIBlyN9vnzwwPkx6NbyRvJ2HheBuZ25vgDVs1bU4%2F%2BbZ51d9dDo7%2BRiNcVaRa8AKgr1w8xchSA4eWkiBUndVoTO4LwmRabHBwb%2B%2F55BY0vVMGm6%2F7xSMWaHeL0bQBtzpMxFTZNHG%2FHwkKlg1YFIkUkPryrQBXOvPBFFOAoZ%2FVgL97bMv63eOtQpn3zyYrZkFGAUuGYJy%2BtmQqRUCj5V8H7tJQ5J4QcjZdc0BUeWDFiqgqjJYiHFzimFOxjKNMdC7xiW0zwZ6n0e1UGgTnBkmb7QYWcKC%2B3X24FZIRf5%2BXqp9nI25yJJk%2Fq2%2FO%2B%2BSfIQ1C84HKG69NBrOn%2BqVVCz6CM8mFKOiRavLVjgoTaWgjYs2M5QbUzAfb7UDpWUziqnyXbJG8iKGEdS0OHJovveCtXSQ8b8yiSAOG9QF1lX%2BWni8E%2B2HJvzkIKcdCOKbvMGn50QTrc1WdmfKE7EUCORcBq%2B6ljURoDTH%2Bmqmyf28L66he1Jw2FF5mN%2BDdeyOE1Z7Rlj857%2BuGFY91%2BDGdh1vu12qfAMfSMXCc3O5osUX57A0%2FMC0tQYvefsfgYMdj1qVigOgMnTkZGwegFtvAmsu%2F2O1wH8mAlTMODx%2BL8GOqUBo31p7u6xQtvaKmnUTCRvv5ZBI6ZYvzZdeQnPhJjsi9eN9qzc0lGr5898X%2B0W6oWr6dYesze2emaOoNjrKBCFXZLlOsi%2BUCxv7lyus9GeTWiJvP6s%2FL5nYNJsHqluZcRH%2FKOg9PAWHI23TC6JTdlc6co37GNotwMXUkvzY%2BWi4UEfpa%2F1OON%2BFeRlyQTtvBNzfEpYLgt%2FPbLHmv3W5NfPYHF1OLtL&X-Amz-Signature=e38a848c8cb89bf43c41dd961db1af8c27c4b2a9b790e63845eaa210a0a3fd49&X-Amz-SignedHeaders=host&x-id=GetObject)

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
