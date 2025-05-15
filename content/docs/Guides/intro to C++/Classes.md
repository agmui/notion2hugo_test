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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NOS6NAM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC9ko6awy4e20LCqc1M%2Bzmhs6OJAqG2bMJjzdZbFtbChQIhAP6vjigfUXVAzs%2BTddC8cBk%2B2%2FcB%2BrqQlKw%2Fy09Lxz%2BPKv8DCCQQABoMNjM3NDIzMTgzODA1IgwF0ql%2FYy9s4faeTgYq3AOyxT%2B%2FcIHzJTdRExvh6aAlMZ1MlD8AECSM%2B3p0Lk%2FQf2wxYy%2BIzvIzvkAGTub1SucA4bKzUGkunNDzngBXY55Dt8itPKdpFkIqXTFWjCnuC%2BRZnvyeeRuRx5jBmyEiXIkCw%2Fk5YZRqdLBGhQiKy2IrbaGscmRCMaxeuaCe59yV0zYUSn0GQgRMfjKAHPvsea1cp%2FLNW3gok3aBFG5Qd7fvCs0o0fB%2BlRx%2FBBh%2FhLLiwbIw53wLCGGxR5IT6JLTVXPfjUq1bw0gW%2FmECTG0ustS%2F6Iul0TjZ2ekbBu1UaVei%2BPVEEVCN1LbBkFQlAjVLOLqT%2FHqU79r70QrkqV6knaKLBphwkyGnXPNVJIjeDE9%2FX0HkRs6dtYeaYugyi4wCx2ReY2LkvKOYoWbFbbs8pKgKLWwfVjJ9e4ju5Rqm0k%2BXRP2ICyHexMoajNfG2vDwe%2Fc019LcWpOg3MWvwgFmTt61oq9aWYAq0KiKWfPhs%2B6X6HOAvua909e2FukX6SCgEfOja11nGxLLqYCxzQJP6zXFZpMYHir8ZuXRYnuC5a845AogLFK0sW%2BmEN7A74xBAjx%2B2d4pplMKgzHzQshGrJw%2BQEWaP0i6BgoFobKtCgNWBAShptoroM4xfrP6TDYtZXBBjqkAXYlx%2BxWe0UWLwiya5xubb03HKuHjLf4JcXAuFzMTIEa75INTiuVB9oURNeLwpDtvpgejropwS7u4XudMWAOUm0OQ%2BzUYhAeJ2qu%2BEFisxcH6%2FGwO1ud7vxITxJ4PhIB%2FP2gl53VSFlduFjknKet9jmvs%2BgWASf0vkKU6SXa5637TK7OAJY8sYNUQzzBInUe5kPwg9acFeIGlrX%2BnCK750G%2Fi3AG&X-Amz-Signature=4fd03a7f26af8e7c9d3869b9b0b3f949691ed1309193fb96265db4c8495a1e45&X-Amz-SignedHeaders=host&x-id=GetObject)

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
