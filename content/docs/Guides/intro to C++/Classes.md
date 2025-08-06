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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR5UMZO3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCID82P%2F4OJi%2FQkZEu%2FlXXnBAkCEXyzhirOpOtCivMzvzIAiAlhHgsPcPuxeJTzo5uDtmahgTI04J9ikymhqNZ6XB14Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMlJOOmKDskDdQAtOgKtwDZBtCxyDGWr4768ksmYzgCf5Stbwp5Tivv5x%2B2kz3j81ZkUs8hgGjh%2FJCjvBUbeAXMbbnpcwCmL8fJC%2BvIgbhdj3340m%2FMyb7D%2BGAHK3y5kW0IVbWC07HqYNxhOTs%2BZigHxoMvb99UfEU97iaWKoDCg2OvmjHaEfW3EH6oQDB1O5oHhhFsdCVYpWwyuiPojcTaY27iLa83GJ%2Fuk63Z8uzaOFuR%2Bh8pq%2BEUEKSaXPEByYNCKvtDBkiwMgbxaWxWsi6v%2BAgcllWKN355t%2B74hky9TGBRQo%2FgbQIFa%2BxIfHf8ZsjaWADTG%2BmaOXzXpVfOzPRdn5zI8pUYVtHgx4NOh5Tfimo5z18s7mY7yR2dOkfU7HjMPPYfoWQ6SOJViIgI%2BAcQpfEsmaAh%2FMFeB2IBk9mE0ZqRy0CWHnTc3UKK9Y1Lfla1Jp8l%2Bx43uH%2BaKIb67uYFHgoiVg6hOgKoj%2FRBVGoQShYLuo5R35O6F5iEdFOlYNZGZBVqkdh92z%2FJkRMgpQXcjylpwyLnG8rzsKqnbhuaEWiMjD1hcLcrzyNqhsMyK7U%2FGPfA1KN55813eTlP%2Bx7XK2JpoXy0UF8U3xvIYfSRD%2BNYfeWY%2B%2FqNZzLGTyM%2FZyoOZwABb%2FBMWDLv6YwpMvLxAY6pgGrlPtbuwuvT%2B%2BdgG25%2B%2FGUzBb9SU368%2FvHteAWo%2B4KGtWo3Kap4M0YpZV0rX%2BhfreXRK%2BuY%2BoMrU0HRnyJHrXTPZzZAoRCSVFiHelbX0SSOmCKtinEDJFoTOnnoaCwsOo71N5hscm%2BRN4kGYpAX10SlELPk3oPSaoCrTrchBE39o1C32hvHCzRe6Eu8idV65nfJ%2FK4VMiODrbUbbWlM6Ol%2Bd%2BCWYUq&X-Amz-Signature=2c4fbc17f3727c68fb88ff0d55fcdf1d89cb7e6435c56e76b26d1fb305fa2df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
