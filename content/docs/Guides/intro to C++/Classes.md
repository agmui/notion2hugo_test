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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637OHVYR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmH02HtN%2BAjRzBl8zYb9izI5TqDebRYVKvtQl0kJH6EQIgD9eGJWd4be%2BFKFSAC1TLJd%2FFRD6zy0Bvtug%2F3dbbIjQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEyV10jZI9g3nam9CircAwvVUsAUcsgLsxGKRxYxLa1w99eUGgUyD1FH7T2BVNpqkQhqThehQ1k0LaTkVrewfso4zqShDERtp0SmQE%2BB9CXjhgHsFROScEvVCjl6nhLQLUgaNiYAsPF%2Fpqh1bKrGWI49KK7Cm0M9gPRYwQHS8V1jc3QAW7BAJto7lBAbQ1AD%2BjynECWAXJPn%2Fma0wlBhf5ao5%2B%2BBKaBs2ocS0Qe%2Bsn4mjMfYv8BnTisRGZxvEh4f8AkwTaH7plaB91oCg69o03e5cItCQD0h8iKHRpC0YhOf7%2FF8iiq7VRAgxkMDG7GLFpGNn10zDQOvASIlqa4YcPkdHbpzPslyb%2FKVdOrZK55Ia2c8ZnQLSbOoz0wnHkTfSExLUddQ2ryv2A%2Bi8cc1%2Fe7d8wTLmmzYK1%2BlTShYXsjkCrxgWhvBZJnp6h%2BjYhCxfR5efOGiEfw2eQ0fCiIJDRl7zTcuxvtOwCWshUriSjt8yKulIN7nXeqVs4ngj3xcST%2FZ5VENuZrnmDtORzc02I%2Btt8BC33lTicknbI7KK0SguhH6anF6Vg9Sxy0iZepbl2hAcURqG4kl2uP%2FUb6dJef6S2NBvPbFb89%2FOV0c5YbP0a57979%2FGnTJWgiAFMT5teOKqKgOvl5CWugaMILG8cQGOqUBaz5WnJptTeyX%2BUD3Zv3%2FWhcY9DkMcyTE3taQpUmaFuKil1FpsQipb7flR5w9r2LZw0aSHpQHSMMlf4C4zXPKGNYpApdorfa7ESVdivDZUzBMZbABHJmQB5YXuk5Z5vu%2F5aW1RiRFQFJ5NRoFu3M%2F1bfvDvoQYC3j512mFx6fBTCu4GM0laLFJRBZfg0BNcmNl5Zm%2BnusjellZnmPmGf%2FWlBKngmo&X-Amz-Signature=5754ca7b79349bdd220ef3735ddf65a1d486c0bdd1c6c8e519c05a05861f2c8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
