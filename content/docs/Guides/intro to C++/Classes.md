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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q3JSEYU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDiDwYUnTPl0WgpaskChxDxi59UFW7m6A%2FdMj0SH5VS6wIgMtkJwqJadhYtLVzae1rPRNPGP3OCOkQ1P1NrfPL5QOQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPTwrpUzfMNatm1llircA%2B%2Bowc%2B7t5vTQDaN3tzvr98GpTutHVM9wWI4sWO51Xfrt3ST17qFqt%2B1ZLp65zKYO49bIUo%2Fj%2BuWQ4msI%2F6LU1%2BV2antSUfk7sJOcvA8EkIER5pbkjfYNcCsYPOPTNikcA7c2SpcVSZd4ul9VLEbS6qbM%2FxJDxYEfraZeW8%2Fm53xN%2BnSU%2BKGpAhvsmxLVxgcYaTmakLRijAUbpG5FTZex5bMxxGLjQG0HKt8tph2Ijuh7cwf%2Fy28oHArg0KGY2OA3qDp%2FH0doyr%2F0G%2FZFvPiAEBsQKoHwMyHz0XuzSqe5Nvz09jQSapNPJG2YzJqFCrxy%2FvwfRxnai%2BKHpgvVdf7laj2Rkmmky7EGgu6Rm9qpG9WnSO1jTsRGfjH1ijrGU%2Fe5ambLHbiAQZ4H%2FSssypXVQrxhr6j0NhahqWHgdIfwDxTx9LEw9rW98fVB5jJh4iScc%2BPf%2BUahYkfqiWNl7L3Ejd74fyzL2ieHF0iIpBx88pePC8n05WuE5GaJRDSAAFHJVx4AcR5%2FEx4DzFON1HVVytFhdThBYE5VA90pqu5aP%2Fyua08usO0z6NIcsmfmyUs%2BPXiHIqplfVqwSzUekdAy9CfbgTkwNzc%2B7E9ISz4ZgbenZoHTeGh4PcdBbE5MITv1b8GOqUBscqxeRmLkw1%2BtoXbYOcS5fxSso%2FIzYB4Fln2P3KcxqCDXUeTe8OTb9N3CYMneS9UbeMcl8VAr0Pqt11T7P7b%2BDMn0rdXfSCU1ZXfBgZGPW1mhFkXq4DD1Z5Qwe1Tdqg%2F33hgRVrw9jSxe7wELlstGZWfI4%2BuxO1ZSuVs2h2i0GTDHJ76e6PRAeFVX7HEN1CX1qwWIXtJG%2BPy3q8c395H5PlUBCx1&X-Amz-Signature=2b1c39b4421693450d8eac3291257ae962e1b099c463fd5f2fe2abc009153148&X-Amz-SignedHeaders=host&x-id=GetObject)

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
