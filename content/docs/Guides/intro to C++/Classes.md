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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJQQYSLM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDeoQaCw4rSjsWstLLnBx9YjLzXixWhtrmPj8waHBXAwAIhAIw072dgeyQ24IRxzhvNCJNt0JBh7jhVEmLTKGPvv7hbKv8DCCYQABoMNjM3NDIzMTgzODA1Igwxs4DN3EBIIjUEBuYq3ANCsrUcdp8KkCj1sfIQNyKI0Rt3KFx6Vx9tMojZHg%2BWAsUsosM5sGgpZPCnfB49fFqsmfuwX3nsE%2BJVHg1l%2FJviOy7W7AfRHLOum0xrd0FjJxuhPjXvE5K33SC9ruqUhIgwiMqXlMau4pKgWbMLDXN%2BUkwC1VYyDHQAUfW8BBGYozkSdKISsrqNjgSYyXI5OX6w%2FVPccJEVIgzS1uEESvjf6lJ1kLVEY1xWauUmYuF5SoAa2p6Rr6sMUomOgoR2LiXch5VQZQHLTXY9K3T1Ct83UsakBvq4RJQjdx%2FJc7myBJNobmUYgqTzTyewUU%2F4oF9pIiYx0zCKWMB5wdZUpHaPwafNaIeRCnoqPod4bYHIJ1yCNdQb4JlZCTSevQ%2BybsC7BoNb4bHrJa8d2%2B8vhcQisqYNnvJBaTzl9YC9LriNtVje7aC%2FBOkwQlltbCDGVioQHbHBeux1R%2BRRavEOQajkE%2Bl40%2Bc75QrPaGHP4BUk4hYI2fHyx7yRwmSjaK5MOdppipm24pbsFrrrOWtpD%2FWqbXGNaPPh4EoPRBByyiLpE5zLr4yJjoz%2FUNiBwc1BtT1nppx96DLQIUYYpC7psZEl8yUybn9meTrRenMb5kdE6U21btwcbmKzKZutyTDrv4a9BjqkAdv%2B3qQhtX%2BE7aURJ080PJrETug2FY2fTq6QRKyF4LQnPSiKwzyx%2FjIY17T4lM%2BAj%2FqlGzFeObgJ3gXMCGiQgDQ%2Fb8mfX%2FDiAxqBoj5WfotyEpBLI4FOQ0hyR%2BWFW50dn%2FqiM7N92FYMuU3RgLk212cw4k10k9Jx0ZRdiHMNgNrPJsjSlWH77NVoscyq1XN%2FYSt3o5kXhgq1bJU0K1W1W%2FtqgEGS&X-Amz-Signature=891f670648387f0152b7ec2256f8edd7981a98dc94205b3faa4a31cfb43e3e22&X-Amz-SignedHeaders=host&x-id=GetObject)

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
