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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWFFH2B4%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICY2Gh%2Bw3KHa8fN%2FFODvs8kPloJNeFuR05TWpk6sXmwQAiEApzk5SrPLcLsZrvuOIK6VMGTEl%2BN1n4YqrqVQc8zzFogq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJ%2FhFDkcEthFH9aaCSrcAx2rnj9uuWBuigwciq%2BDFgx1XodvB%2F1QvwU81mUkeZEpOlzCUW%2FWlt%2F24rGFQvordG0I2SENFHU1bWaOtHAF4D6j%2Fc6BFak%2BBwdhE9%2FOusUtNPuSM4x3KXJ9fQZW%2BP%2BRCj5R7g74%2Fk5be2IqUi3C7IOSo2Q%2Bhcce7uLIImfGno6uqJVfhMyNVuD8gNXNyoBBQQsRkTP6ka7bpKh6q3l3Ri3Syd7bQZDK7qEdBhmEJ6qGUj5A9q76IIoyYau7FiqY00T4K%2FKvQWxqpTRUz6zRI7M18tfEsEBnlpSGgkJkih0OSjKWjunIcjdHBqdnVBz5gCMpGjQ7%2FMcM6liD2GJF%2FslQEuxY14G9ZaeJb5X%2Bd8AXCly2u439xisfBR58TlKw1RYkLDEdwyuYCv2cut3ZoTVvO0zYNou9uy6RwXum4m8VOrbzUrxKUUyjwIs57Nir54te1pY3s7QiLBoIJmdNzhj6WIn6B3piZpsajXpcTTsGX8xLGuxNGPGqbJsrTY10Cbh9KHY38D6a%2BcVgDWxAOwoFz9%2F00a%2F4r7XUrydO6z89SE7B4UIie15h%2BwwsBwL8DOIq13mIOooT%2FdLqu8YwU0zL%2FxPkh7JZU0up6zSELh2KL6nFWx5B6bdMCQ2aMOCd978GOqUBRFU8faXkfYLU%2BuzjMrv%2FfVO5i7uYf61%2FPbKjEn1SG8vry8Nws76ubfvD01fNhZE5Kv3JG8MmaEsNn3siPByVlMJXu19CXVwPRMr9h8%2F8cyrHyEBHg4u0bSauVrx%2FzPxrUMMzf5MyybDpmVrK8nDzgaWACZpHcNh6dh42U%2B%2FyQleqTO4pCEkZo4EkH%2FZ0oY5LD837MjUpXHTglnlZsmCdQNkz8iEL&X-Amz-Signature=ef6b23b248f09a908fb85eaaa4fbcf8fe091b0aa98fa66036f5d6c193f85d523&X-Amz-SignedHeaders=host&x-id=GetObject)

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
