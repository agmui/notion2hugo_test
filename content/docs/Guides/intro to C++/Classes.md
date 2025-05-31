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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ND44BSD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxXXKahWwhB32KGMoJMkRmXY4pzgCSCvU%2BjIipyvvalwIgRlXHZ%2B%2B6rs9ZUjh1Kj8JgJB61Xs0Kwx%2FEKjalHcelqQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHu171dSKjivbf%2FR2CrcA14ILVKjNLe1Dz2mfQRNPq8cCL5t49Q%2BJZ41bIU4Ob7PvwUC4Av%2Fq11ru4oW4%2F6HnKv%2BXMFaoYnKQvqbPvGmxGC29cM2VzDcjgYS3p7%2BP1bLjvVtu7w1NjppYtiFI2YmLVw40l74k0aVThY3a5R4mkXr9cwv%2FrUmy3Gq7mjWr5FEuFOCkD5OeGmDpcvw6TQZIFJP76zGYP72Zet%2BGle85OUf2qlTOhbhS7Fb%2FXe77BAGxqw9DYgpOrs5yAAg191R9TZwq4Y%2BaCGZA5ITjEHOQYvhuy5RsDJOClZlFU2PErFRKsKL5tATys6r70hf8mWLN%2FhGb1vBjzvYqrBwfOaVtap4Jdwlock5CJ2co7LmnWrdUph5hjjvLmGpUW9RMhTIpAD8uqzHr2tklxkGofRalHWWdDe3kSQXCJE5yVHwawdM0e6BZ4JjWDbTRjLejgog%2BvI3EU3KFD7Jj4JfdGuc7TaN2ggJ8nxvvbPhL1gP1vpGvIXMFFdcgVVvA2fFza2O8NhjKMxkP8x0DG4SE2CjpPvvTcOQ3o0qR6r47YMHo%2Babel%2Feh8e9TDVcit3Wvp9oRQMMlriawCFXMRzKvn%2FVBq2H6pTQBogcVsNlAq8ahEu1UbX1pfEL%2FbF3CgGEML6g7MEGOqUBGQo7bcsbtRU6P1IcXNDyCtqJL%2FTYfLkzEL5vSasCQ45nbYNzM%2FB0Ht32tVho0KWon9%2Ba1UBJNqphQQQm2vIM6NdHJp6E7V%2BRf3YK8VHEtClSfn9QCLZ7AYSKeWIIYA1LLQomRrBFahpYpXNdqOzDTVyJ3GbDAFnU4nH53Wd7l9VOhI0l3S4vzUHJPlALTX0RG2QrVPWy%2FRCq1BD79uXxsQfaGWi9&X-Amz-Signature=a3f28c2266352299d4eb731261ffe79adb37891306839b1eedda49a78c3e4e33&X-Amz-SignedHeaders=host&x-id=GetObject)

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
