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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRX3KRSH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCghYaPav4HO67nXRTB4fxB0fy7WQu6SI0yPbkSrVsulAIhAMCl9tprivW2VCnX%2BPV0z7W4l5UBd52E2Irp3oajKFlRKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDLHkG%2B%2FHfKGttpFEq3ANt%2BV5T1AjpptBolVN%2BoFJo9nH8AK7%2FnWiyXBxp%2Fs8DCxfx0Oouq%2FopIYYW4yHy9Ojjh2r%2Bu6gKlSbFAJwSgXR3Apim%2FPpBD1KL2HQX8i3U8eLAgW%2FUO6EB9pMIlrIeE3O0M2b%2FgilIm44kLz6D%2FHMed9VFNkl7ibraMV349%2BkPwMlElEp9TRwyFQ71Pa40wakcAqGJ9uOu%2B%2BhZQWrAqcWtc9ruqVKeUnthU1Ip3PzA%2Fv8qaaiPyrCePFdMHbPeLE7TONuaCpCY3%2BwawIcVj7lpTamu%2BbhRAnjyRozW1tYxzpTbqlA1qColPeO1cTJ51N84L5csX5G1SqQ8N%2BAcjLOKmz1scZNrnlOyqCcSENiRWd%2B%2BNhDuTxhDUOAf%2FAdcf22hF9ODlFQUvvLvGdZRzDuy3z%2B38C0Q%2BDj5go7DrsNL7WGvADdtxV0%2BIWAGHjS0%2BNmxS43E%2Bocvv%2F5MoB11Gr7VZclk71BuXC2oDZtwgwFx7%2BA0akaO782cAawQhwHSIZsHqW44CDAm29pbzJWCRLYe8lMrDkPeLkeGzFbdI%2FQRIo3u%2BEGi%2BLOnYUyvRYJG5y2fiAKqI%2F0urZGv%2F4wDZhAhqxMXe1Cpe%2B5B%2F0SEuPf2djV2sMDpv4kyEaWZ8TChsc2%2BBjqkAVKH7IfRv%2BWpGizHBHt38p7u2EFTEZvtlXld9gJH21URlCF9QIPLkHX0vKty5XTJgizIAAyJaiSkMLPYwhBjxHg7ATCXkslP1tUjDfgFhAifch%2FAzuE6J1k9dF7P4t0QB6qYbvPvXVH0uWiRKFC81xsBG0xXT9M3ScsRFcX6JY6Owhy%2F%2FkfXmh%2FznoD4ZWFIJhEQR90RALMZxAu5P0thpeyWAT3V&X-Amz-Signature=9b5bb3327b07c005b557059a357d42accc85449e15eb6ccedcf4c7b2291e309d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
