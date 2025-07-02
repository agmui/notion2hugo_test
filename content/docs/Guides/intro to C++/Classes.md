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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE33K4GG%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbrIgc0zqdWtvqUuUDR2EUuItQqXAonTl%2BsMZWW428EgIhAPM3FgqXnKMF0siN5fV1xXXR%2BYBV4crHgiV0o660hbpwKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuQVCcv1WHMgog9mgq3AOJsaIHDReQx2tJkuWFmcb02amcPEeGcSIp8MqWfNe%2BFKLbvvOQ60fYhIxgv358L4IzMaQ7Qqo%2FGyCChrs9eAZHstMQfg3HHrVM8MqUEtcrBudMK34hybS7PCA6RYekgVOJx%2BPNBV4i4OD82EHncNcJYj7begV%2BSJT1g19lInvcPzgkBWZP5xdgdrWn3KjgvDaJi3%2BnOMYzrnCq067vsTFg2psm51nyrX94HaltzMRdDMKw%2FUw1R9TtVg2qod6oODV9wAUF0lSBWv4droN2NRResAT3nwSULurYQqsRbQPWJ23Xs9z0BSg2Wyo5fza%2FjgZ3y%2Bb68gAN%2BCyXyOEYk2TGPqE0HairBw437rr5X245P78iuSf8toucBZBMN%2Fy6unmc8AjaJ3NPS2ALfoVPOffVQ2Qv6Dt0H0mPFFl4n0JYJ7TEUgd3w4qk748FF3Rk5cMKLL0UZOFbFcbz1IDqsX8hC1T7NoQgTRx4GEagUQHC%2FnOEhjytAdU%2F0TbuHWWMZxPgjsMaeF9VuU5L7psWQotsuXGzYMrwFNSKiMvwTJQa0j1eQfxrT8Zm5kkhr4WBki1tc2t1DkprSRlhEvs98PXuAobGvOWvNKjPQ5b7AHIoh8RqYDIhStn10qBVnjD0vZbDBjqkAUFjOtbE7SEx1%2Fu0aIBUD8m1Lta6biIWslO6oqIJQUR%2Fy742kWNmMRBv8rh%2FVhOjxul30ESq9QklRGgVlU43%2B56cOofcewBP%2FCxZxKk33UMIkwV6zDhUMSEog9LxHqQIBj5BvrAJdIWfqP8QRyPzd3qNuDxNXzhMrcQvJ2LTdI%2BLxF%2BLZaRmQa6Lr632omwbaqEx4om8B5Bt8otvOK7F7YyAVNWH&X-Amz-Signature=9e2a51c3871602042316723a88b05f95cf3ece99079064a46de08e71d22f8d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
