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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2LEMVI%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIF5jsjNwPAGOXZSOI%2BTZWFtmwUhAjbTLx6QLWnoE4kssAiBPxztsWocOM5muAh1IbiHv1ol%2FQlHMVXOaIUiptxKwfir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMJwNtYjsqiBJperOFKtwD0WMiroIyqWqJ%2Bm0nq6Fr9peD1G8SDUeXWyog2RGnI%2FkzLMrclTtgXG2l%2FQsktPUxfXChSWZpnHcUbK3wEWF1dhJI8zW6f60gbhEeT6anX%2FijtHJpy1yq5znpnoxUQh39B2433sNBCPAqN%2FZU917hIgYszTBzEtlc0G2ZL9BFaT1tXIJc2XdtQTgMc4ez2L613iLdbdDCXQQYYb3a3Y3FY5WTtO%2Baqe7%2FjRp5rrEXP6Y9aZAJ6lKVEIwgiCRoQuUUE7i%2FjBzwNhIAdduHz35XomUx5Jnv%2F0IRVoGWUQHtNNTaxhQlvQmYHt3IENCNP0cWx5vb5VukLMOALLMc3voQ0IwJWNjwyZLDIfOSW27FoKQ802%2BPrIEzGGdLB%2F5gUzkKhQWWtb%2FiSmYylqfvmoVXpRacnvCYmB5i6AJAgmWf%2Fx1claVGDxfliY95FckqZJKp7zDyIxdqokZK%2BQL2zSiAfuq%2B8vEA76e70XMNmPvBLNvS6MFLWUlzt8HpJIyzb3AThzaCibTuVx1SAgceHDQMyG8s0%2FEJAxBvRAbvHk6GT1RYsvae%2FE7j%2Bfx2tBTNM5%2Bs%2BdTdmWsWVXKI%2FXajv14j5ffMuODCUa%2BOc1Wsgf3KXxmsOlj2egY2nPksYacwoK25wgY6pgFR%2FO6YogNUyBpHR3WjlEBAf3URH1LITSzSbPKjpO05%2FbMYS4M8H7lnCEKlSa%2FlJBgm53Kx6b7iOD%2BjFBLXMz5Qdh8EV7Xerxn5IcnMJDiY%2FHSn97oQcHHZ3lo95S1FxHNRGr48Yy74MDFjPSTzu%2FFjrCNpqvjCOp43kHHxJJbyB77S5NZEOcDOnNnqgJj4n2sH5fBH7yCXKt0LnOcPPasZiKGKw7g9&X-Amz-Signature=5f225723260981ecd340deddb166b311724c6bbfb9f414d41aab4565388e6bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
