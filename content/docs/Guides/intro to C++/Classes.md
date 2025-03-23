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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GTJDCQG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgadCJXFz2XwgQqgk2y8ylEJH9N2IO1byZsUeXKSKgFQIhAIJ1a00u1hBWGejf53SgcTkx3cLCk6S1JHAG8bvxl6njKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqys9%2B%2BABsaOP9l%2BEq3APnwemzC7XQS8xQH4GZpefKg%2FHZSi90YbZun%2F%2B%2FWVaLjwJ%2Bd2%2FFU1b9xI4lD2k%2BhF7se4RKbjRxMlLN3G8rUjPvEfkzWJi7L%2Be32Ix2%2BoigisMt%2FaKWaeO8q0GZm%2BeU6qOSpTVnYSjB7jZM0rl5LPabQlYt3KjpqB5Npc%2FaxS2XRqudNt0cgLUbwKimaj96ce0v7fEEwCJcOC4iT5sbxJ%2B0CMBcRSEmLm7KZTmN95Lho%2F9pjHYyWXtt05MuVADshql4xG3iCR734R5iELrVJOHUprRBWeabMLTVeUrp5i6tKmQHaYjIpaf6Th3fSJijDkbpS%2BwkND1HM3QLgqxmP8rwb8ELTlVOAPAiSqowOsVp%2BrhK5k93PbMZ8X81ErhBfmRMHR1qRdZLBpSYTHIGKd7Ck8YkdYgc6HOyIC9HyygDTrgXoNQrP2WXFsVeg%2FgyToQAFb4FsKhJqfR2ihXnTq4zmz3srq6e%2FyyKx3PJG6Cmci8ls5NbDHhf3bqfHkMQOs6uegbzgk%2F29Cv0Y%2F95RzCX77ARfELXBAef8WIq%2BaOUVtEAluZs3tfQ4jESCVPmsEH0To44BJHjMLYeyxbDfK%2FWS0RUP8%2BtVH4Z02bXsBp41c6Z4wgYOGOQt36xdTCiy4G%2FBjqkASyObpkYzUqYYBrK%2Bv3bR7B1bz%2Bqs82wSPnL7gNaIKzUuShZEXW8gxyueTSnkjrztEbipCJzRk5O2Ro7nkSW%2BOBEFrHOv4NrZ%2FVZw1CDInuYpNci75XYuu480CVUnbTV4gvXjMytKNcqfDdKa8%2FqmDQNkyRi0ybEDwCMK2HbsgaJyJWb8JR%2BMbvZSR2nXaOPquea%2FS%2Fm0iNFzdeBsJPXL4GiWeIK&X-Amz-Signature=eaaa550fd8595795dbc41b215d32a63b59dfb0a65e40d32beccbe59db0419f38&X-Amz-SignedHeaders=host&x-id=GetObject)

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
