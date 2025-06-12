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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKFILNG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFTxEUuPFHUj4ACwTpXzHfRFwZkNANcXKQCKY0wQabHwAiEAnFUNaRDLGIOkURFD3Om3tlD3xnnJiVUEno9jss9weEsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FEbZWcTstqomO3mCrcA07gSDRj1SN0iYXigqPoE6dvYlUVIuxOCFOo00Fn5%2F0AsQcfvL6fU3mHkw8MMKbmfd9a1RvqVtvAT%2FpJkvcvQUS4ul05fvUtGSRX11aBzx0y33Gd30YhyctOMfa6biF2dMJYyi8prWHfSldUM1MNmLkdOLrEpqG7m%2Fzahc9Z51c3KMOm4Z7O1ghYintzTpOvxQL0oj%2FEKNQoGVlsG8Pj8FZIbFPpUPZGZk7IAM6WKFMmu%2FqbqmBxrH1AW57PVa9sW4Ml5%2FEvRizc%2BE62Tb3uBPcDhWwtPnpwGx6lUYN1%2BlOTp7pRnJRAjW9epeMeSJHEThviY7WD270yxx7Wbjqi4WTJrL2iwfaOsQZEIzvnsM6vJOLxqpPDEVp8v6VEf8GkkWrR8snNsJs2q4N1tBrF1o8JwJ%2B18XXp3bwC3lAaRN3sUzPIgvhC8BaJqMfJpev8g%2FhEGV0AmIPtXK3jBEIS7Et4jEvc%2FO%2BguyMghxfTwet4KFHtOSyW4ju6mfAU7AnkqgHv99SG2q91WfLolWlVmZ1z0QDanffUUhHttB8TK0RdXKBchEtPk6aO4VHlwjuVBbqxpPNBBLnBuXMfr50JJ4IFkBCSVZNSNclO6aVQusPkVxhDMvGEndrDmm8zMMflq8IGOqUB2d6iPytsDstooAPcwmwpS0lsztNfkYTekCvjGJmVhKiTe2bxWZhzKnEiAjJYJO4q0w2fi9boebYfXlgIh9hGtxMkLuhZlpP8h3s2f0IpMnzCVuYCsZNktuua8VOHkoVSpwccfPQlJ3g1v2%2B0Ya%2B7OLKly7MkdKS5XFXn2DnbcdvUaCj3azw9qk1AFMizNnyc2BuL35GHUpLXQV1X0ykJAOAPczXz&X-Amz-Signature=0365650369ad0d87a5e93f34d63b84862bf94a5ec2bf6b30ca9251ca42a06b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
