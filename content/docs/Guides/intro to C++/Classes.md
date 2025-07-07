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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZORCFK5I%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDyGaIN83MCZe9zs8RXsxfA39GCCEfo4DtKZgnc20uBFAiEAqrDijXxLTj1jkB0U9CMHVJAYubqTaZhXH8CjsuwKNbEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKQ7G4gxNpUE1rcLPCrcAwbOmo4cYKLC3ag7zkn8likWReTdG0KulzyO%2Fk%2BpHGNvCgV3F8FXRbLvfU%2F2ni7FpZ35r7EJyhtS0a5M7t%2Fv5DQ43P9Xr709mFFUNfD1eYWiDArIt6dCLuEddvA29rZ3CPKqPevlCTJgY1i%2Frbm075iB3ZiSLVnVeWDhwSM0ZBmNcb%2FWYwptjV1FcwryddAvMG8Mx53P9l7tu5x2jR0wf9xZogdi1EUDEc8Wz3Lw58MAB8%2BBRb9ptNo40uc%2BsJsgd0BBWQX4Urie%2FqEoF%2B6mq8ROGdO2wFbB07YTmOKXQjcGenVhRpQs0EGWajfr%2F1ZbMfmpMwlj5Mv3pGfxx26KXaosppRvGyutaJkmTsfsjPn%2BwN6nxYR3MEEHce6znxQSuZliqLHitZG4y%2BWP7Y4q1cew%2BOM9ffSv7LTO6IgL619hUVODs9s0cXVqeyQ8WIqJ447IlhRIZNPpErRDpJybegzpzSb7HOKhDULcOljwXEJbUrqJhUrroU8oTuASeDb7f52vYG8o5hnCzO7o2jJWYp9%2FI5dS%2BDUGi2z10AcspxAzmtkYCTlE4R0zXRO72IOvE%2FHkoEQElzxRuQSx0MtTpqiMKpNut7XbIF6rwWHO61%2BG797VUIU8VA71uuDuMO69sMMGOqUBHQ78dCvicHUzqngQdLw4ZZ9s0mzDaDlnxqm%2BqnOWjJ%2FNiyBCT9BGLYyFWaGm1iK9WAiEmOReFGlC7apLmPMTNtrFxIR3fyEMbQ4bqY8cwpus7IrrkL4ONWrx%2BgMB9YfMLSjggoNnWwMfDy1pC4tbtyyh5N1vwtkoFwiikI6Tsaikl%2BUCrPF7WAt%2BZ2%2FbdlzkOHu7wuFyjqXMdtxdR2aLRiOSVFAs&X-Amz-Signature=cb6e620a3dc40ce4a98d68858352396a5f63c514cc4b43aab2dc8af58f9b8cf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
