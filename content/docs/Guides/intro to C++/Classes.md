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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQCNHKDP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFTaBCQuDiS2%2FCJj8PqR4LKbTnY2TarBRQk5kihR1zvxAiEA9GOfdE5Sk%2Bqm%2B9skdYG0BIswiMkKRpPrxEV3fVfBiicqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBQ%2BTAlKKsO2Xj3hSrcA3XUqG2KGdUTGC%2BpyR2saNXWQT8HIXc%2FUrQkI2Z0Z8dC%2B4zxkPDjkDqedw5JHZaA1DymDNQ5Z6BDQ5IbqLBXNFOSs40Eh73Os8dPrHMsg4qkEDs6O7jSj%2FqBrKZPSGEKoHA4wN7AXABk4ym6JLjwUwKhGdJLxY3i5xYBkcdPn6TJdX2aDRoHzGK%2BMU0YBrEc2GddoyHUx6Gq3%2BrNYGoZHR0LxLARaAePBY9EdAjEylr0DZniQkZ60PgNG4fKNsdqDmkqRf%2FDU%2FQRz59Dl%2F%2BWS3Pf6sQtuKuh2qJvwe4rXprrLKF1qJjXAW7YpORxVN2Lamak%2BGV442eNqTG%2Bv4%2F9onQOZUl6ElocHSyc5Vewom%2BHGN1MLVEezt0GhUT6KcYaxwtuQpBrW23mAhRQ4IiHtoMbm4c0D%2FQR4CdCP5J9nc0fZlXP2Hb1vK%2BbMffQEBE1B4EHLuPhATeqYMe2peEc1Fial3j%2BpeZqQtEaNPcgmMBID0pxDJWfA9iYnPiYLhxJMJ%2B7Nzgr1QLNYD49yhiaOGHLS4WyFevNc5naM%2FIBsQL8HnPZfnGxmlpJ9xxYCM95pXI%2FGW4clXA53Dx2udV0tnz6FrzqMkMqN%2BmhQQVeTsQCZJ29o4gKdxbC6qeaMIaH1sAGOqUBpm%2Bl7vwgPJKHixz31AYkpIb1kLgvmJns0YLPf3V0ZSXSEjrQet3RRj4Zexik6SgeH1flOtBCe%2B3FG%2FCF%2Fehqabp5bTQYcTHKD8vA5aKGZUmog%2BLcPd5K3VEWeb%2BlWrByDzeldPF9Y0tbZP69o3OZR5x9f0gqHtXcPE2bw2Mrs9fcCcc3kDoevVX86R2v%2BiLS8rV57PDd9NsCUG7wyozB%2FVnfRKF9&X-Amz-Signature=561dcb62ea4bfc8d9ee6cfa4b6c3dfdcec1c033ad0277ad5af3685374552ee24&X-Amz-SignedHeaders=host&x-id=GetObject)

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
