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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKLTSMEZ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPbldIn%2BTTAg3pfc6Af%2BbOMk%2BIZnE1o1DnJf%2B22%2F1rRAiEA6x8D%2FabaKsrCJ1K%2F8h1sznmohTSqvyBt5Qqb%2BmdbiJUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFft%2BGZLqn55TQfxVSrcA0jnzsPBTFTxOUlwdQzpy7oznOg8WeM1P%2FyrtRYeLtlguD65PUYF2ZHwTu4JHBZoE9sUu3%2BpXOzdBTnhBKIGK3YyZsnhO762g%2F%2B08t7pKg%2Flk%2BQqwJWNvsOT1%2BLqqVn873%2FVj5OL4a4IAxBjkwDCbhjKhPsW4yJVCUv%2Fb%2F6u1cnFT6038fZjBHYt%2BsnSt8mnpv1UHN6g6hG8LM13CbpKGBQH8GnRLMzuUZPC%2BfHhx7EJda4gmWJieyWKDkIEbxYZ2ywICfsbRxumjHVsyFJ2ZkL0oCMAb7T4G15P%2FpoHwKo7Ik5HZia7ZXr6RC8fDFGYIl%2FV0uxX%2BA1i7UACu6qVEQ1BcAcs%2BXnm199z3D0GZ1NMuiRP22pc4%2Fj%2FneEi0kpQphBrqfvvy4gU1tVql2XknlQpp%2F3cBDrIxM5JjQ%2Bq13saeAsqFGCS72UAUDu0zkdemzbdUmhek1kPJ%2Ff63Nx84czEGj%2FN%2FoWIuhuG2HPhritjoHylWmpImvVQ8zTihH96PhITqYTAzHul%2F9jJZA%2BfnqD8lpFQt2zm5vdH%2FYcU8K23MofAkXsuCF%2FyDvVrca5bKNmSi91bbPhSe37wQrsHBCyjfWIZFNb94WtaAc%2BEWf4qlFbnhnMYDQXvNSm%2FMJ3NjcMGOqUBQpoK8joZp1C0urvat%2BYsgdl4jj%2F9ZCzBTE36D%2BF5cKlTsh5oFDEjKMbgm4IE58Gl73iOXABRPtde%2BjI%2BFs7qs0AP8rU1G7TfUX3Av2MUF8EtozohCEzSZZI8ipBY%2BzQyUAd5i3k7dUtAE7TjklAiRT0tBvYx7KgXBR8qasE28l9O6aJzcNB61y2sfvnhE4W1HHDSFAJOIQmhmZiVGgK1c7%2BaZBfs&X-Amz-Signature=804fda1918d229db6bbf6cc261cc21a1c3cff1b4fb0f5d000d61b59d7c2fd7e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
