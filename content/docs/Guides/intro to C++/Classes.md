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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGONHBBQ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNwzM0SsuyNgzxVdE%2FPHSFjUfHiKRufBeRVTsAnycL%2BAiBhwvTPFi6wbMOltisgUAY5U%2FjZk7H2z%2BXdDmmKlZX%2BJiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtkbMDMumV5kWfLOuKtwDuGKR4zJ6dYfBo9opqnf80K%2B5ykxjUvFGCngRBHoSvox6UUZW4V3LlumOSuvmjPAe6jwMu4cZ%2BXfNyYUstH8I0RkNA2gvVJa6Xjspdqy2b2e1UdgucSzuGIJmt4gym84gi1wkdi4iOlQqVakhR2fVTNa6BMSt2ebfqOgAR1TG4zbYA1%2BaeZ2cbQpz%2FrSyHKrwj1UGoiwsVS0cU72IK8eTC%2Frzy7T%2FfQNfAtLosplDbxpa1ebbwD252XJcDmmM2vI8Ccx5m2BVCIa3EURwVWCke8SBXFl6lMtgojgX4oP%2BSk3XFcCrWst2%2B1NuxEPXd%2F11ce9kjO9J%2B%2BhiVlHjFEPJ3O9%2B%2FMw7%2B4bF0Hhoa5L90%2FVCANFXIaJk1vrACjXM4tQUZ%2Fn5EZ8cd%2B1j2C0G0h616CsWjgmF6GDolEP%2FWqr5O%2B7UfOWp%2BlHv%2FR8PP2WsGKOKp5tpeezrBfbuKebBUh68GPY5eYxjp9XySv4%2F2Owo2%2FJn0whvb1UmuEO5YO7E70GFmJFiC33oMX7By1Ml9j%2FgUJmGro77MQ6ODT91qHeDP35sGHDnJZhXmHeqTZmr%2FQ42hS5jIcT2Y%2BXMkbc63DHlT7iP6Ah4i5CS5A50L0fjEj8OC1Sbiq24gxJpXIgwmeXhvQY6pgE%2B00yXi3skkVGyqRL7eeTTVB1IexGIhe2cmieXc0bVMLSkSaJv10s86grNwHQE96BVJae1OR505dr3U8inqd8EZfHVvIDF64sNW2N49XmRFSPlfE%2BSMGuW4mSEa0sO%2FvNZrsZ3gG7taMQFFOD3nT5nqlL9HgnGI6eYyZOizYaixpf5aVC1iEo6u%2B1lfADlzr8hy4%2FL1pUTwccMS0Vb3nSCn%2BowWoLc&X-Amz-Signature=7cc782a4f9e566c05726838c9450ac7ee1d314eb1a529b5b008597890209aa34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
