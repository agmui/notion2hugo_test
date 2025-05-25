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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL4D3UF2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDEMZ40GGyje1uvwXBtSBN0AH21Kzuzi6QoAUocmfeagwIhAOmU4AlhKDAbl3XDA0UyBT4ICAmMc5GRBSzIavIpYQJVKv8DCCYQABoMNjM3NDIzMTgzODA1Igzq7x4AIyZ5IRP2JaYq3AOHm6%2FO17OeLMZaxrxKY7FoED%2FN7gyKf2ANr%2B3rtRh84qljCRPrgfC9r%2BnL1mZ8GxsdGOV65Cdxc5x1BYRj75Z1EzV2jiwgt1b6bVKqlv52Uaw1n9XdeyxUzN0EypKtRNMlG7guFGllJqfQHSoVN0YcMC3%2FObdhMmy%2FLkWLhQfglhGjyFEBUubn7lVXp5%2BPAiawrad7PL5Ubnf0qGjzCvIDRtaYCZY4LiP4ZGfEw6nKaqTMUBOM52vPYbjUtJQ40otWo%2FssfkRZGKYN1y9tCXoSYuYH24Mf6j6C7VvODO608ORnQl2RNhR5XVjnMLeVsb3XINOCNWIjx68YU9a0TFbAR1%2BLRnyCiOpsVjQp1DK8%2Fa0C4OEOxOBzeH0rpZsoM6CzJXuIJLRStnueoGR0haqC1vj3%2F0pNEVqpjvQIiNt7MrU1MUUcoCtsACh0SBDXctUoJWU9kE1IAAL7kv6YoZIgbB%2BRB8Ojsiugeqvt5r%2BdWMj%2FIl3Pv4AjV6GY0ysEszp%2B127mDDep4Zto91sb%2BqOAORnNDmoD9n9HtFMrzOjl1jCRpZbuVaG9W29AYj4vbf5h%2Bi3MrTC8V6KBoYFp7%2BZgI9LsNHMHQ7vJWcPUPSPvP7vOb0ZeCDBqSGJw%2BTCEucrBBjqkAbe%2FA13KElMZI2T8LqC1HAAg6AJXRQGmbcVnfvp6ugT5B0J7n2B5o5J%2Fuzs29uL8lPQjA0MHzldYrF%2Bn7qr1%2BqiRrY6jO26g%2BkSzNMXWVMhjKMaqcWyGd609Zbm5uIzaUTitYs%2B3SxdYUTRG6Rs2xr7a6qLe4Mns1mIs7awZVa%2FsyUpAKxyIwytnOn0VQV13%2Ff0GVqppyg%2FooRGpo9Fx%2Bm5uPbSC&X-Amz-Signature=a9325398c6f456f4db1b824ca0b7e62272144b9ffc51dadd1f546b795d3abb9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
