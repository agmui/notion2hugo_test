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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRJTS7VP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4UWtyvKLrN1F3FhwF5wC05rsUNsqR%2BOKRkwthhWcROAiBdcnzqNuSilSGovLf8TojO%2BstfR0kcliZtD8S%2FOoMCxSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM266%2FNLRF%2B0zC6zSoKtwD7y5LuvA1sN2YY24TKm8zxblwlZjRmHN6R4NsEv%2Bu49vOfiXCBcCsxu57%2FLBQFtH76kQ5rdQGzA%2BItP03rlmOOENHqOBPYVaulL%2FQ9ROXGry3bmOpsdtk6EU07gpJjBQKwm9C3Dzny3Ldmg0%2FBQ20cO%2Bh18OFAd5WeM0RyIGfTsKXI1cV3jYz14EwwIV5p8kjLjZumRGF17ufJPcYFcH%2Flvj8lTIqr5UttXE1ItquTjk1mWI%2BRruvXfEpvAmXDpXIzcFxKA1zVkSu7RzvYJ0V%2Byl3x%2FkGJ%2FumNheTJqn%2BmbO5kYNuTDqHt3N2keq5DmIuF%2BxKZMgE7xYKvWc5HXuxZEE06MvApuqT2KlqjOqQZgTKwtkkZ9PQt%2Bx%2BJKKGN1SbgnWdt8ww03VqAF1EaKjldzc5X6HnMrA2rgsJQkEpJulDX%2Fyvo0oVXEdbUtg6tH2H1bZCvC1QkykvdKErcUCB6awTl00LGD2aCkmtV1QVU%2Buyz5Gxj2tLv0yihYKIpI29qR1up0MXzCSCLFsKmnY12Ugr2ZynR87BXt3V1Am%2FtsRD0QvfZeVn4DVG63uEd2YPWKBNTiFICKnZokfiacnobVLYOHmr39XfRNzTlg3ha1NOKiUEqfprvbFFwrEwxbDovAY6pgEFLknx%2F03yM0SwrBoPUozFTPJ%2BUMCNYu52TEx4Pwa2E7iiyZvouHlP%2FvHCg0I%2BA%2BmLeB8Z%2BBPLtZ31n4Z5ev2Gx5tmOBMarO4fRHALUaiUf1UAoOdOMEO05ArFsgOuP57bOI%2FeGyUwOVysmJCcDbd0E5FL2xiAYZVi%2F%2FjQjf%2BuOfejse6XcfE%2BqO11pZIhKT0itK%2BngdjfuS4YRz8wp0rSHrWT6AQb&X-Amz-Signature=1939755f5f16fc8992ed61c6693a787c34e4ab2da2910994408083c77a19048e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
