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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ2Z3FYC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWg17W%2F47%2FSoI8Sjx07fcEFG7u2e8faERixrXdUyLXSAiEA6Adwp1rxGqqRI1Xfgl9iSZ14vzuWctqI%2FYmGz0QQwNMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJWcdconS5o44YMNZCrcA%2BCh0ijRPRa9ZEO3akr%2FTupgUFaCmPvlDPt3jUhHbwasMBqN9gRej%2FDJ8Klr0OFiwJg6MdCKNSwonb2wjnF4NKB0g%2FpAnqgfBp80ovFJQL1nOk%2Fu4q%2Fx4Ac5U9iczpZzxFc9gXQZfdoHnSURInPM0veOKTiP3%2FzcNSXTSBx4m7DkAqqrOBrzbeSUVhw3Wme54Ee8xk841UxpFmW5aS%2FrB84aBfTL4UTpyCmroQt1IrST97fkivq1YPB2I5DzJs0HaNJSpe7lSgFdtRLS7gAStcyUDSWzDNEUNrj%2FrTHlbYkFY7tcNKulAbT%2BRrwLqFl3hpA5UDxW%2FrhZrzh1NpfZiZJGh6Tf8tbApNGyB%2F%2BpFIkN6Cz%2F%2BdqNHS5WOX2Qr%2FMboROkKQ7ofXHnS2OXynnloP%2B16dg3AY%2B80lPEnu9s0caXcYaXpMwl%2FQVXrwz%2Bn%2FQ5gtSc0IKdErwNXnbvxZczlikHLq3jZVhqzMJcpdhsbzrS%2Fbt9Tvg7gcymcArJww61SsYqtM2QuWnCBY7mdS%2FwwqtRcctPAd4yo053F0%2FBmjQ1YC4jzMuWvu0C7OrDjAaFYLeaebfmbUMxB0LNbHn9EfnLVifOS3KrXyFPs18IY75cJNpXgse7iVT1ugWaMLGcu8QGOqUB4MunssSuRXQiTMqsihRNmjViYpX3e%2B57Xb7gZFidcMAv%2BarbwUTZee7puhCWTkbO3CyroKW6TTK%2FqtD0SnpbYETXPZihiIdfG6msLwLP%2B7Fq0pWWFDHg0uB2FjTTHY7%2F51c%2BRV20zQaL9QW4jxK646Ya8uHjOEyhFe0sHWZBaFVwvu4ETwMaMNDVlLc1gYyScPfew8p%2B18NVcdoC4R%2BDzy3FVNBV&X-Amz-Signature=ac507af1b6ac0d33371a5861b72fa251c0531740fce8c0e91b7b2d10ab0cbf6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
