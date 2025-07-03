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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ESYVHQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIELwCwyuEK8CFqU3V7qhyQi9%2BvFf5%2BwY0pUrS%2Flq%2Bq05AiB3jMh28efrAdhYXoWbtHpHsw3dBBV8BQGu5K5OmK2vkSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM062PlCqWB1nzIgs5KtwDt9Vs%2Bvf%2Fx8tRH6lC3QoTJ0Z4l3g3mX85L0EfG1DdnvrnnGnXUZz8ftTxa9rbkbiAzwZoTKPOLOrRHt5SjGi0sCUo%2FQR2L5Y3N%2FusSpj2HySy6x%2BACZyHQUVXm05ITNj6ItRFcSKURmzreHtyT%2BpN2Ij7MHbXiJVj9la4r%2BQEBsCeoRy2%2BEjV%2BjamgSqDGNXW2PDDMq1ZQd4mJB7Y3LHkUNwXRdrRu9srucQVC57J5Q2lQLuvym8SEC%2FKn3fUm1lb2dR0B8%2BWNrOyH4nxIn%2FfoQz08tTWVV9%2FElrr0T%2BdnxyMURQb5jdKH3N2UeY6ggn6BYf8bom33E1XB0HPplO9EWJ5MGKB9l%2FZWknHg3OPlCCCzLiRaboiS65F09W4hnFvuTpLykIL2hDDyOVNcg1py%2FGLZdByZlvYDL6XRnnfhqxA%2BYsamxtAcfJCXOSHOSR7OHZI9bLwNcY1xYa%2FiumKofa%2B%2F2kEIQhXy52QLfPuwv%2BKuTjAGTmCvOQlgp%2Bd7QlZBODFRBkuyhPNWRtA9AiU8bXByeJmyVsZDG9ABKj2VHXeew6zHRhHkixJgA6%2F60h7hZz0Sq2%2Fig19HDPuZwuWpLjMkJGQOuM41l2%2BJv%2BLcEzdbY9ID7OZ7FhwLLEw7%2BWawwY6pgHeySyWbN%2BBNA1XSURNtw5X83%2BbasdTBLKuBS2tCc4gQTnKLLUbkU7tekA2TCdo5Xt%2FHHf%2BOrBo92QH%2F6FebJLIPUnyY5k74TASJrcl4I6cFtlcNF0qGivi66D%2FXInRswxm6xg6lROGKabaHciG8%2BgeEr4arjboig%2FmE%2BFgK9q5ygrwDIYswNNhNfbE6JSNyJNCc32MIAziy6Vq6f%2Bka%2F1l%2FwnCmYHt&X-Amz-Signature=37881f083cc611a25b5a35a9afe811cc8b0cefe7df3dc2dea95190ea97fbcf92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
