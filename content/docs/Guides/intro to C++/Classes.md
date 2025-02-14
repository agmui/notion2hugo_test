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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGOOAVPJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIE7b4pG278H1NSS7osWITNYljiQy5qJEDEWfnxonUptRAiEAx5iXkQ%2BXzfOr4EHKT7k55sMrvy%2F9eUMCbjTwTnlXelYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN1%2Bs5fBQbVvdOh8zyrcAwCo4AOOM4%2F26XsBRI7U7sh3LZfOb%2BnHCqrvyodKHvfj5rSye44sSLYM6lZuoFnteQtlNpOTbMA18lDOguYRs526zbih76bIgDoPAT0DxU5HmCOUvNYTOUo4yXy8EgnsrVaiV7gYokF4TjaAUuboZHG4esFy2JDO4SzyTFziwn1mS9fK7hVUkPyt56psF8A407rHcCeQw0JAe17hTGXT4A268UPn9XFxw134QNQ6hbI4sVapQJtL0A0HmoBHrjt%2BMohnLfaoDwxZRomPAJaTx%2FGCV3b%2BgSTFlcZxdroslP5MIaG1Ur%2Fd0GJ3OfGwTzq63pM%2F1M4xphhjIPhRc4%2F%2BrV4kf47oQk18TOR1Rp7BXM4%2BVBtNo%2Bx6Ivbr3zzTfA57%2Bw3gt29fO6rDjlQ6RW1cKlUDNU%2BhSB4PH8gWOu3RtS4pGjLvgfXl8SQ61i0wiwaTLEpTQtH5%2BGUDWd71n9ylTwCvWsORU%2BEBbX1f0YStGT57lEBEiYmyZcNYPuMYFx9M4hbPkmEEO8TXEqll1F5gAI2Qjv54oXJ2iqnb%2FxyE0qLgYj1DStEc1YwtYXfoesTULY439R6QTtIsYyidctZsJBTETxkns8C5Frt%2FQDpAIV9KS52872UQ1z62hTP0MNSRvL0GOqUBwco7UBXfCsz2vLPpdg%2FZEYlikEOYJgntM1%2FnMZWRACTTySSWgYNiNTgvtaFTvrgO%2F10DUd9spRYJrmmNJGQsCFHbYKljqvPcOis%2FxG3JeYumtVLtxAExVto%2BbyAMvGFwH1jM3yy9k4n0DamJm0h%2FcCVU3AKH1QIv0G%2F4K9PYn3ANudbiEEz8WXvkE%2F8FaXyWKhwz9N1tnXQbkFMz3wEORA%2B%2FKTZH&X-Amz-Signature=357050338c189cdb88999a84f259375329a1105c5d862696fcb9a59aa27fbbf6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
