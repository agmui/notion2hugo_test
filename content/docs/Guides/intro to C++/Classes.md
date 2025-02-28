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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQ365F2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCA7EdiCD2y4EZs5haHlF0UOe0AXDEUsSwHWZdskTKxqwIgUR%2FznPQRErYTVvesikI2SMmBDSen%2B02aaHDK1IG880sqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCI5TFVrO7OSTlIDySrcA%2BWHqEiZjR%2FG6gervCrPJYPiwk%2FaaDJmHvPk9Jl1kJBJkMXgc%2FnQyggZ9VNWT16ulKWU0zBZ78qlMKsIgbS1l0iZjbJFbO%2B9UIFzDkLHbujW3WkXd9j%2Bk2uGWSAvC%2BZebdV%2FU4BnMrX5Sux%2FCL1Rhu6JQoCEN7m1RjBHQtap0%2B5lPLpQLBp%2Far5cG%2B%2Fw1UN1a590YKYlP%2B03as41PdKi0eOH135HTxJ8bzDDnZWDNixfEhFuLo%2FellI3pGrcbJr0INAlyhGs1vUqOVZcarIPksa%2B0lfT2FgPOMBELbfMGM%2BsEf2kyKs3CZhvZSY7qvFjaAhis2CKJc2o2zV%2BRMfaPjuGpSXRgX6HlMbn%2FBNr1uo%2FPmJNhaIy6geMBM1%2BCahuZaNPKXBtDwkwuL0TtSG0deC25Bv0%2BpWW1sXs9ubVzfLQ7Z2CDEfTR1TUshztCvS%2BXOEexgsPqfcbPVh8tvOEkh2Mp7p2C17C3hGgjg1YktrUuHYRiR3lJcnR7hAEd9lCsjZcdPWMJiRD1KZQJc%2B8u12FHeOHRoYdOx8phS4IRGm7hbWuOq61SiYCs7MGB0CJzlbsBc4JuOAYQft1b322yMRY1ajN4OppUbRcrqFq3Dg0gHlFbIOi1%2Brom0UuMOzsh74GOqUBX2LCIpXpu7vS2yd1%2FWHO6%2FNIK4OX7qVDjD%2BTFljVmsggxNHM0tbQRLJGDSVYL6t0omYf2JO8Eer1CFpHyl%2Fq2qmp9TYYJ4NaahRdqslhCJD%2BBVP%2BV43fgvMogYX5iFBsOgYx1rieGhuvAy4snfIPEBfv0Jc6aU1JwVXBFB4thTbVJWy%2BYXIjEpAMKVWU%2BDSByg0DiEi1vWUHTqzWNwvHuAgabrAD&X-Amz-Signature=d147cce96d198630c9974d4906788b1efa709fb82bb8e94a62d31124bfc82921&X-Amz-SignedHeaders=host&x-id=GetObject)

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
