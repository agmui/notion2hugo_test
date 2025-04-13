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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOT7PZ4Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDvT9%2Fk3M1qH2Vt5oKKqlls1yVvjtYiFrQJIDG7y5QuYAIgEVRJpzrVPPDLQJFVTmdXceDX47QOfid%2FtmO%2Bv%2FWXMcEqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6Hi7o%2BnRfkByhBSCrcA8sGZ%2BryChhnS3Jkw0vlC6%2BRHp0BIhvNzEgyEqUtpgzLjPDpAEGzyfVfvLR%2FlVpQyqiHzpqv9lLgF94bg5%2FHpwfifdTOMUbf2UIzeNY4pJzSHPOLaclq63OCo%2FtQf5MsLUh%2BW81QY5Sh9eoMiAnPxRtJf790vULXCKdIqdWAfCEJVGg1zxVVHbuemZpoph751YcBalwYCh1NolxsVSbFG7UHIg2ySGRadUhPsDu8MHIqVsEciN05EkF3f1MsVFMlclLpUjPChd5Q%2FrBfDbAposcKitsOQFj3lNyaygfrQOt%2FhENba0bYIzcueKc7CyklBXo5c%2FZloGbwtc1o67rSgWKsKsv7Ypmb7TPc6NXzgmotJV%2FAZyRu3gyuUfgYv9pzb4MX5TulfOpVjEAVa2ftJrCuc35Bt9MHQtwWix9U3qblqWeQ6pNO3vvgHpGCNV4mJqHdLT1VrEh0M9vQBx0UcUlqzqHB3u2OzVaAdSp0y9XZRXNgxMBBF%2BPNtdbe8EdrTZIV1NWMMVMQVvvagA1T2vnDdAL44UhqGJecUuvMhXFHLqnPkTOJP9cQeSUw3ENmnI1oTYFedHqNcD39Rfg5gANB9MVaYqzXt9wfliFcz6lx%2BuISM%2FvWs3HO6I8lMN%2Bv8L8GOqUB015bSCVjpXUXGPnx4svG615MGSiAjsgUl0%2FKm8iQbI4qigprRTTLvU%2Bf2wTLfYByW7wYbGdDDVeKOVBU6nbq99XVHltsSLWcHJKTEZn%2FjxnlUm2%2FDxAahLcF7spJUf2SEUygMmQaanG2UKHxQK3OIg78xiP4O80DgfqzJs1ySWRpcqwUy1eQio6eCt6AYT6%2FzBmDN%2FCEtgrSuSEsvvdJZgkPU%2FCu&X-Amz-Signature=f1ec10464b53877061346669ad82ee7b53a6b6d761db961eba91d0fd0edd912b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
