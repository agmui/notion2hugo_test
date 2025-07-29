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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HKT3WYB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCDQnx7UdFqF4pTt1bcSKQWPOj9m%2BacC%2FHDxqjREZcvvgIfK4ZnfxYg7QL%2BZCRR6ZzAM5MoY9yb4L58Yf7iEk7EAyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B4DIUXYQx5P70M7UKtwD5RrjzwAiS20b%2FEX8P0Bw%2FWLtMpEr8KvGV7SfFmzU377qyM3hGYl9ZBDduiW1MHs4Iv11Dt3D1HQxMlhfeTOg5M%2BoG9LgwKgngZiQOvABGYN0RA1qAOzflFIVAaZo7qNOPiuxFcIgx7ReOdnRn%2FdD7%2BJyEmUmjsnUGeY79QCF8qRbup%2FKPbFcO0r%2Fyn4A9Q1LHDe%2FnicOn1MrnQkDy1wuyTnNcHa2xjrgY2NBzEDxxHTde2oP%2BiaKMwKgKNUrQBMTCSsCy0sajACd2B98Mal%2Fkt9jbYg42Sa5IlCGauvv5%2FIevSzf5pxNc7lPMO13w8Tho5HlV6dlehY%2BYoI30IGIsmNp0nHuSkituM6RMDo4LB2B5pj0mGby7pvzLxFQn%2FCs7VGZReBhP5zCHbbL70Am2ow8IIJ4SsCwYRdOCcNzCHHjjx4Yf%2FHIF3AX4QRxdJaWt0ROhsePuZQlG9w7Kvp%2FNzjPK7bFnwuIRak30a38MKCdTpYpDGOnffppIEKDIe7T%2BsAJ03VgHjAJCwGVACWb%2FHHMknsy8TIR0LBZdqvzyJwtrusiBBYN79XRGeCdnyyczksVBp1xcghOwXFr3iV%2FJEGyd6t6CnhtXEBqkcCDggriNjdkZcsGax%2BzAN4wqv6jxAY6pgGfnmdIQlZMttmw4EC3JKYpRC6jY2PJErAgck%2FkUZLc0seSCl1j1bJ4Lg4KjMoiue9ZW7ZXzkrEqjUkhhJLTtY0gLY8cSu%2FDmp7hifezzGqb%2F5jdCVt2fuIZGzc8TUjYKe0m2i%2Ftj5de3GVMds38izppMVflAxj7mkiKIM4wlzdNRoIoDvEixwzy73UaEtoukowJyQf6ZD96sQS1u434KTG6DqIKq5r&X-Amz-Signature=29dbb2f0107d09649c55a9e05449c0580169f81e98d12b7bc5a3ab14dcda814d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
