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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466722E327V%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUrkwp%2FFHCMztRKIvCdp06t%2BXsyb59YniMF7nyHeSu%2FQIhAKiQR50Qk0C5XZVLNvQwhycNnPmTntNFca5%2BPy3HL8RZKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeOwan0Os2KoYbfbkq3AM3GwrNjD4njBLqLgorKXds9%2Bl72GRwgvMvErD7eEL8urSr7xQulDioZVNfQZDTF1Lz7gxgnqXiwtMIatzun%2BXcoygXVCpANm0NOC0MzPye4hiHGiXM99dfb7Wa5thpt6nhVCjLWxwKAx5hh2CJ3IhKrqJ29XFjurioAFtr%2BWV4u6yYdolt0sfwVGH%2FnFa%2FXxFhgwY65hpKQd4bJNGGlYp73Q3eRT0HJXOejtT9qe7hJjqQilVI93tc3Ld%2FRw4DBJlgba8PVSN9QLOQgc26YE%2BNRXl8Gj8y3Zd3kOcXexOAtiuhxMCJc1IYP6sv1leI1nnZJsJgv%2FL6ZZaGmRHmXybJAEWuarDvXHed1zbSIfWnOwkm%2BN6VfmVmLpFDAxYZrhJO6CM7pfkJANvmb43cxO0FZT4cDD6lfnLN5%2F8Pw8NEAKOS6bo%2BIebj9J7sT6XZUQkPwKEzMNqo4Wgkeyh7iwCkp4Nmg3ahFlUI63I8iUo2Bge%2BOSfgXbducYNACeNh0XN1l8Iavobwl6Vy67esJ2kHqWMCiBWTgM9n6xdrIOgnN6BUrVpA9k11ZU12F1nLhVmbJCipeuGEt0MH%2BGUFWbMqj7OU88apd4k%2BO4i6VFe4kTyzadil0VIb1J5XrTCrvKi9BjqkAUwaN63HAA%2F5zhiCeun6XVA3btNdcXqN6GDxalW8%2BvfImnUigi6kZiyXtqZuGFWFlF2uTWihtHqeHI%2BWxI3cUbizqdDEf%2BhhOfCIZvGG4fS2J42YEtW8EBZVyhU2aOUpeTlksLRKRP4SoiTBwU1%2FwVKFC%2BmhT8Xu6kRRwsoWGEmovYrvYb9z2hxJoaeGdQ4SASc3q3eDeD0%2FestuGeijCjY%2BK1AC&X-Amz-Signature=b8d9ddab7a027e74f98c5a4942f743bdc45199904c27d3c318fa57062c45ba99&X-Amz-SignedHeaders=host&x-id=GetObject)

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
