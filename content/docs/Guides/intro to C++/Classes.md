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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZLW47JW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGAylMU05rzfesaKDPH28n5g8PiLl5wxIYaGmP4yK%2B3yAiA3aNMb0ITa0RXpHst1GGLHuAKeIUv3zTlemNNhuOuJASqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvHNQZoxsTm%2BB5sf%2FKtwDV%2B5h%2BJcrEgRKd1mlxiSyr7aHFVCviicZM%2B27CdBrtqJFXv%2FUg%2BRXyjCeNk%2FRmCemPYF%2FvDfcAjsxA%2BmSM%2F8fZN%2FW3ZZn1d%2FRFpdTlVH0hRyZmxjXPNVj9AADSKxp7oHBTnA7o9vTx%2FyJ18SJ%2FMsmOmIZvXHYPxdmvP2GcLW9IDp7xZYQfQ7YKBpT2tHSPSeesL%2FnlOcYO1bzDbnY1ENugfmmcPo18HSOypj34bCtXFU04n5uG5%2Bpyw2qiAmsBdLbkbRuE3KWIUmvu%2BX3emUFNosIfm95ALsYzpvtL36iIXeSCwD1S6aJUb%2F3cOji%2FHgDYV5HFmo1A55eqnP4eDrXXZEeMm5JhaLNK%2BZdPK3SR6kejnfo9poc0FlmKSnWmAGHBTBIt8ZM8G16H5qkNS%2BSa%2FAGhqUFVmEdQ6TIbAePqip8gaJG4ubYwfoJ6%2BVffgfvVlcOmCMvZfEEMqWUbmgA5XJG4OYSuVx%2BMNwO%2BqfMWbzGOi5ST4LsPqLcW9SR85jrAlQXE8yYzXxisMo6yb1uINi6qiKmdETN0ILHJ%2FjylFjXcyH5uUSiuaECaIYt4tk6YrWiHvj8qhsHcgvR7RH1%2BJSt75XNZdNgO5236Wc737Yr8alQDWqbud10l3ow6bOdxAY6pgHcorqIDQxsWnnrwIHFUKUZxcA5gz9KB3kkhxXdWxvEQd3UggfVd0t%2Fw3%2BCfdivaJCpnYsKUyJYhQwFlFEg%2FgEVOX0I918eg3ATSpYoshvJ%2Be30adB6jp5GA%2BL8ZSHPC8JuDW2TWJTk6JLcPjbjFgrnqpR5B5sogSTENGtgSBwK50iK0mK%2BoPUQ1McohkfiBAm3cxWr90%2BOUGOOkgLzzuINMglGp6EZ&X-Amz-Signature=ad68bcb7a8737ad94a5d79f2511c815c13c9335d194276ceb9fa17f761b2cfee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
