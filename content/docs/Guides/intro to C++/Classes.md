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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUKHIBIH%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCRP%2FxZ4xXZ7k89YRarbvhdJ3NaumzQLpnYCq9mRk9xgQIhAMA8c9s0TsNYMk6zLvycE7paq4BWT%2FOO2pDY7K1V3NzOKv8DCDsQABoMNjM3NDIzMTgzODA1IgwGBffUN3CxsNkPGYsq3AO6ubuPhFKQwak3AX71MEjb7iZI%2Fagua7NwTELz8WQsaFDsYfBQuJaT4ZDmNQYg0SeQyOhwVK0rzNLsz5K4U5%2FlKtMysiBzI5FjnyS60LPuvWCivQQ5dkowZm8RlCGF%2FFe49PrReLcEjJvwS%2BXivPKQS3vVz26ncd06qBVhUkwXBsSeD38NTN9DwHHsJ2T0glXK0ffWN2M65i3e3vZwkzVann3mn90EzDcjWonA51kIre9F4nrGCdajZ7Uzk92Mw6f4PZvQlLzdpsCoYoRZQw5iL3h%2FkrEEjPLYCx78U1HxcY%2BdAu4rTWjNSpPstNymafchy%2BykZURDo5rBvpmeX9B3URNBOnZDYRkndERIV3ewMhCukn0tWVeHwKcf1NGC1zwbt72rYXfYFZDugm9thesqLsMZsL0TpH62iK61UU8Ex4HGj7nbqQAUNUgGWLXDrN9kQddgxRFOgybYfYSEZwDO2lUHXpJeygZHqV%2BDol7HmZO6SXPJtzaaesT%2Bku5TlhnYpo8FwF09N17GLLcp%2BMGqDOaFEEnaG%2B2JDNUGlOqeMjTKBsuRpY6NKzpORudzHZDfhAdcb2Vhh5OlQqriwXRLMcc2bqPCGcrP49Xj8V2tk1XV1UxQKk%2B6lBRZhzDBns%2FBBjqkAdFN5zbHpuUMad3e%2FUFql81CFXcwyV91WdVsp%2BryRJk6PxcgchzFcuphb7m93fZV0apSaWUbcJaBE7%2FZh7s4ojybPmkiZJjiWYXUHIVkx2m0tJEfvc4wWxmmV05Ry5Xc8aj8GQNb6w8eWYxAXU4LjYk%2BbGYSvutB3114jsodj8MK4pF9FB7Gl6IU4f176TIZpMAGMzYL03Mh8krz3hw1KOCeCm3U&X-Amz-Signature=635402b3bc50641a6e55b6e9db30ec1a44e03697ce30e6064a2beec266e74794&X-Amz-SignedHeaders=host&x-id=GetObject)

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
