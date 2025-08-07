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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGTRNM6P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDx9cJEHja6brl%2BSlu82pK8kwyW14YrIeoMr3yyUrCI5gIhAJ5mFFQTlohr3Jk%2Bf8Ao4jD0xmkw3jBwAATNj0zUshktKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUKsZDPy74ufbXl9oq3AOxw5mfJzfRJY1O1B1W65zudXc7zPtDAiPeFE0V0GmduV0%2BlxsJVcMOlAJE2pJwHz%2BS7O0FKMeZD3RiAJsQmfaCxBUWujWsPPQAu2RZzvT1E9v3Biyb589iNyV%2BayDB6B9YE5tyLDyRGygwZpL6dm0BCthro4yBCUpLp3iLsribZ36X7Z5SOfH3ItNHGOE15ejZEYCuwFzppdX%2BIn5VXsLAtSPJNcwrK570v5RORY5wbb4Ez3okz7D1F4ypml1bjDCPU7bbrfQ3bSMkeLNgtf%2FpGizFs90f8mv4IKXrxiOTzKZDm50WhoK3Eh5tzwFkFh2suDit23BK3orEyw%2FKV35vASOQ0%2Flx6ZZR7muydd2ClyeBnfYmwvTW4bNyXigPXEBp0af703S%2FUIKuGVWoNnYYS%2FxZeis7jXyoKS%2FORnTevtayY%2Fk2bBNKUeGaYoC0UC0hqkYtclmME5GtEN8e7Mv5XpOLWIuNl2AnQuPtQ%2FX1durgmdh80cShkreUIo3ec6%2BuOvC4OXihXYDf5q0ByKEXKrZzbF4AZCIXMMUsjCkqeGJadcAoNMPGXIoYm21i1L%2BITul1eh0bB7gaCtqv4U%2FByQ8vEt6%2BdVlD%2BuY%2FddY9uP%2BO5JsM%2FLFi0n6taDD91NLEBjqkAVu8WNC2bpAOvdKQhIUi8FCD6EWcFWa%2BXkfv82SaRDcBptvntP2Csa0RC4Cr%2FIPtn%2Bd19u2uqABt49PuANJ8fj4EAIUZom1EgGT4VA9eCJQ4RuiNo9YjhSgS7lM9EPHiMtZIsZ6wY%2FpFdE2mteeJR04eMTgnJEoygxkJ6ZVHVeIHIlhqGRjjlP5tapgfj%2FYxU7Mc8GztrIKzLB9HoPu841wFkfmX&X-Amz-Signature=b7b11e53da5e81a052fde30705ae66138bc69bc509c6c3e0279f16374acd6b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
