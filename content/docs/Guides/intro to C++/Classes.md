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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JMX6WNV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDDcZYvT8A7ubPsgTiJXa%2F5%2FfhuaCjMLqAliYSbxv1ZPgIhAN429I9Vvs8KpcpcUEC0frbbgSblT3UN38nvNJW3Nk7CKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyucNCR0y3VLGk72PQq3APVhQkyMdZZ2%2F%2FysuCMODz7ExeIDy0GVRKt8HWzDlfJnY2Dmb8gQ1a7UDrWZmTTUwvQlrquhk3Du2n9LQnBYf65zBRlTFcvF7FDHi7LYdUbqAWU8fKWWV3W9GkYIuzLImv9efN7PDICFNryeIkAvK%2FrVSrcHDyOufgB8KLWeLwjrXUHlWxa2chCLeh2wwyN2TKxboMjRzRTYoM6Qf6ZVal8wjdbKXza4mDA1BpM%2F9U2hwUQOmclSkeFG%2Bj%2B07leohqpR%2FWB2r%2Bcd3t4hUnPme7F629Wc31Avb6gcJ7xIA0DMDyNRrZMN5WEX7IJqP9esDh55RifUO9%2FIdF%2BDcXdWJyeRxodjbdjC6xCO5oFEV%2FBqYLF6F4Q%2BelKSa6bMMBIf5hcCteaFNyEygAjpmpJ13wgLV1hBzr7C0EiCoErzksDYXgiJPSay0RBL1S1Y55cWgzkgH1L4mFEr5GB4Gn3FlaAJAlnS7sejQycugEKlEQ2Uhhrda8KJRdUlrhajtW9KbEifFZPeXUjp0vW5OVHh2pq6j1rNP%2BT9XzTRctLMHuhckfN77qK3byWCCFdBmxGShUokpbPmJkqCrlLu4dCoQh8Adois7aszw%2FDLJ8DCXRxv8Qd0BFFFt3esNV42jDN14%2B%2BBjqkAenhyBnBCle9EFLFsz1zEz9AL4t7J39m%2BJc8XjwMlAEUhGjwhnB1D735jsarkDDi0bG5a3hvr5HgOOvPiA2immv8Uqyy9ga40vTNvBsdJaU65%2B0dVbZVdkSYmB1sRkINFIfa%2FcU2esTMxiPnvBRLV1yiRMMFB6AADEm6U2enQuiCYJdNZdcKyyEz73us9Rz5R60%2B%2B5Lh2UVS2qfKyHsTd%2FwXkmcU&X-Amz-Signature=cda96acece0074b0ee2e9391e0d1d3124aa48df80a4dcbfa995cf351febe9f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
