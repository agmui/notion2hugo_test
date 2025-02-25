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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U67KJ4E%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFCpJ%2F1s0QTnrosfFAG6eFL7q1%2FAJ%2FKOJpYWWWw9uULXAiEAlDp4IJnUULHM8%2Fusd9Z50dunSV8r3R2NtRsk7j0EVwUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKKNM5uqIgIDaPS2gircAxo6FvuEystkEGFB9yh%2F4GnQM5NGWOYNjAZp2X3NbyoFOV2g3oyJqkSF1vaQ4etZZIHF%2BvfXFMwS8me2cZg6mL1YNl%2Fronp234ecagRKaq8y9SFIs7MYdw9yG4DIdbR7B7MkGWpl1pW856SjtaoUS%2BZaagJhO4gTxlg02qVFiWfZVMkG7cC7qg2WYTJbbJxJsr%2B9H%2Bwkv7YSjXFhJEEA4PWA2955W9e1ypUkWOrXuXTF71JT9Mk3cWnJYbRG%2Bkh4NXaTD7uE5hL11tu9tAO9C%2FIFGX4QMfigIyVk2HfTgsKgqfeD6DXm3248Kb0t4lJYHNyeHpfJ3kQ8ZfP%2FhP5BTef6hA0yPXUe3r3T7siifsLAkwMS%2BUCbsnMQ37vJQ3pwxy%2B77vSWv1duaFAR5TR9ei25PxTJNWEq%2F4ZCH5UAfTBCM3Xxvnv5vL4givVh2DbC%2FayjgKTl0guKNF7SSmGNac2zd2JwfE2UxX%2F5e1oRv58PQPfcIVEYCJvu1pcNPdVI6dL%2Fz2o7Lziy6jNIvEmmSCLXsm8T%2FTKKhjHlpUtAxKjZk3kxNCHKk23dE6OwhenuMhurqh2tUrweIwU%2BtnbaHd9H%2BL%2B4UemcVgbXxz4BcJQpjLFLdI%2B39tOD8bR0MOqC9L0GOqUB8nrurhT4RvQIWOu2Votdafks41O7Dx9h5A8FlRVPN25569PAytwA49B2miUIfr%2F0OUbZoxOdk4JYm6FFzVTCVRfT7SoFeOjGOMEyoe1uLflxgbx9OmbjWSjMq9nAKCTAZ1LX4LqKewPmEt6rvcY%2FHIUfsMxs2H1ZuQuPeDba7ulpPkl99TL11uV9cBZuy7OvEjXnuYs3sABkU6Wmms82h3x326Tn&X-Amz-Signature=392122b9f349d92344e64fd1a276425afc178211670fd1409792f3d45d6aca6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
