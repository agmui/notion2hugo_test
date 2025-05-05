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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDUUQ6B%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNxyi6v3aqO9sRUkQbCQIcc4yIHGMamy9Zt6T2KxtIsgIhAPKsT0kcTbeE6Da1UhDtqoZFQQnWvdEupffAYk790DLGKv8DCDMQABoMNjM3NDIzMTgzODA1IgzgVRL69ssmyLGh9QQq3AMRTytPUd8YKR5zmY82%2F82UOSsUuZWzSmFMP6o6EETJwT%2FGQTk9WgYhrTd5cw7tJxVOr6egZtFA4OFpvhQAZ7gcfePGOjY5PKk5bDkxOAEyQS0q%2B5UsMxcaIarFb%2BCEhxkPGtDEpS6Lu2vjyJ6Alwgyh9B20iGjFgRHFOD4HO4oBWuFc86TdJe9FHhi1Ma4ZiRY35HUIC4mjAXIwgAfGKFP0fJgLaDYA8eUP0QqYKtmaIQgUPlUPbbZo83puuMgmy5frRf6rAA3U0CwIaoJrgg6O5UbKEB857MH8%2BrnhvImYeVffqULHIeokqW2UN3x7%2BUB6h%2FkuLSh0gTNZ265sYM%2FXsZYgeev1AK%2B6BFNhliwedT5VKnoe38Z8HGRdooEh%2B4PQpV5SedJZuT6rjriqaxQ88CiNlFH402tWtQaJfR42Kgf0LrpAU2SnUIGTs4YM%2BjiCYwWVlk3Ns6Kv%2B1F3O0iKjiYHo5ziBal5%2Bskv%2BW%2FO%2Fl7zKaK26bCQrprm6O1MZEaavmm9DUqrhtXffzvbPaLcRYamYg6ekBiAetHzDazi4AQyEKO6BjIPofzEdEKr0sdUW2AxekLQlVhVM3XxGqh0hzZRG5ZrP%2BS2KyrSnk0urXaqvRvRoAoIoIXRzDW%2BuPABjqkAVlPI%2FeffDpRqMipImwXYM60wcgHD8zdYAi2qnnuNic60m4aBUzu%2FevfqA6DTUGamtVIGD9kAVs5PFC73tztJ0i3u9sP1F9qMLkX5w4AeaOJPvxLWEPCKE6nCrOSWeke0bnLQ0kLdZoA4T6FR5X1beFsmjqFeBD8O3hgUn36C1PyezfnCUdh8R2X2hHZh2MOWmNIGVfCFRgKLYwFrRbAIoH3p8W9&X-Amz-Signature=7f70acdd20e7f91221cab9cbb119cbd5ca19f1a78917aa1e2a6aea13257005a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
