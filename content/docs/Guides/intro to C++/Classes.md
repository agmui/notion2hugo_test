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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GKNOI6X%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQk33s0Y1yLEaBN8qMdwfUKBpYQ3ApGPF04hwViNLAKAiBkKvctvguMP8IasbYry8ZuY7ZZeBQndpf%2F5g7Kkd2dmyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMYnxJ1gSqeY7SWc%2FlKtwDYJ5TpPtvqM3%2BQ3RIUzBUdF9717ALlkM2G0WYI%2FX4H0OJuFOi3FKlBErdFdomzwffDhgW%2Brw8n63rJTgTaTg2Mtorm%2FMUbhs7INfeTk9JWfuPBh2F%2FFv1dPRZ61KoZb%2F7YpBcPxT0LA%2BsXXAc7LEKvKttkY46eOEyJh%2Fv%2Bf5AsKAglSXEw7tqeAIy2j7Dm56WWjcFoOEpZkBP0t%2FUQd8CTFPn9JATKR1p4XLBbYXSwI26GjPkJiW5pUQy20%2BKOll9jpQA8ftmzwvTODXLBlcu50wuJAcUZlwFa%2BqhrCo%2BraEu9netANWzPjhMezfKoW5x45e2G5y%2F1%2Bv%2F2yecpV0Z%2BdRQ72hWAe5WdgN4b1iKN2NBJRH37GJqE19Hn3N2ygqGBBJ3snVofcvFnygk%2BoKy2NXvkYNNFW%2FEFp%2BScudONnQWo1ItAKlX1ashIKvk9vHUcdQFDh4mjwnOXaPzynwiqdmvfB4FwESD3jg%2BaVJAbFEJTe%2BpjF%2FBHLxIjBrD6R9BsltDIpz8IuS6Onojyr2L46JaRtA0SYlYrg8ZHVUoXq4LpmlTQTLkyJ2AZ%2FkBzhVjIL%2F8P31%2FKrzbR15t5Sdh%2BXoYEO9JmgtLXfvD%2BKK8sv3Mrf35fInumV5wMfgw2Yq6wAY6pgE24u%2BHQD63CBPf7EuaWszO8JGUHkE%2FXpWAvjXMScwpSZVgYB7TewwK3AaCbp3BdF8JfiCrOgrbbtcIb2DSqzKBYustHkgL9GjcMjQYln7nZKsgb%2F9bzX84iEjSVEE7Lxb4t5k%2BBCq7kF%2BWj660nNFW3o%2BAelW0nCI6RRCnLqWVNbLgcB4moaSOKUqWu623aY%2F6GGRP2OmhqMPnjYoGhgNld90XlgvX&X-Amz-Signature=9f64227bc860b99239c462366a954bc12b1801986fb1d505f868f1eb8cc2c61d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
