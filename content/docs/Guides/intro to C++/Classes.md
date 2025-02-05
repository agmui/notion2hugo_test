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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRPLXIC2%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCUfYMTlI%2FOw1P1lrjiPoKPsJbzFqw2Z%2F3iSwFKiD4DrwIgW1QKZT%2BQvWyOupaGbH25%2Bm0NMmvUPo503N%2Fzb1RGec8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDP88kvfxDO7OGPxThyrcA%2B7wx31P7UTpKzNmOwXHz5gS4hAJ7PI433PnZm8bz1hOF261rTynf%2FoX55obxktEFFA%2BiFppTV8k5B5YvHOPK8EJEyq7%2BoJuBfe%2FaLpUt0XcfJoG1VCN7ru8xN4cT%2FrJeOsWiLgJwTI%2FKsClOW6wy28gCeg6ZrKl9N4KqPgFYJ0aObYmcOfd2immq1G9qmZwzuyAqXDhcYbrT9wBVyyUlZSDtuudEnzcv8ljekXbDtJ2N6LWuvRdmgIc%2BHO4nQwgURw4udL0GBj9gyOkHknvtlpfD184nZAi6SpuIVls7bxVxGrJlzawMM0a7w2QIoeMiW2d9Do8Yme%2Bqr1xroJaHDghqHGVKkpttjz2emdsMzUmD%2FLFe5%2F0RbnR3jKK%2BNFM%2BI1K9XHQB9YXwcO2b%2FHVN%2FnjS1FSFEaTYLVf2PywoPxbQm%2F4ZobUCBCbtvh1qsbo7mEb%2FpHKMpgu9joOhISFzMdQzOvcYEsKaEybyZQKKKYmGIjtcwKq9lp8B6VQbqdeW1kGDoCljMln7tlsgtPKFcoHtafEmo9QyvDVX24loUOYjgWH7RjKw9Ts9HXoMnCDP%2Fj2567gFEbS0hcA8ey7YVwfeKd2WXOsJODcPxWaododc24kW8eD1s0XacMEMNe7jr0GOqUBEqFXGrniYrDYxDhm3Y3ZTf3n2NOhLQ4iRZzRZWjWlHkfMcey8AwsNl7oCzfwuvYifxeAXbM8Ft9%2B%2BZZIacy9ROUR862AnP%2Bpu7TPeP9YO2wze9DSswXid9hVRAqwT9NHSMys45O1l4VhMN%2BLyBzLFLOMNhYQl6pTLuFzVtQaJD3OrVVve70vusnvY%2FuxiC2EgFtf0nlDK%2FvTNRrD5iym22ZoGRzj&X-Amz-Signature=1c087a6119e547271bb1421f033b5167de18ade19c653b515bc72ec60e2b3e83&X-Amz-SignedHeaders=host&x-id=GetObject)

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
