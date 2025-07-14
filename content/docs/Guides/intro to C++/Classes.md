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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624YL3XLH%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIClH%2Fc4p1UtydNuoJ%2BiJ%2BUTbj4TWBRWSpTGLOaID5%2BAeAiBDTlUSOotVYp6S0%2BiLxLfkMsZBEHSeSIkVijc%2BTTd5lir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMxP9FyhEBV9eOZ9lZKtwDvbhCJj9HOYPyAQRouyY3m4EJiCCY9KIlTnbJasNdZe7m224SAcf2YtxsZdOCcB5LdEHJD%2FCwQ15Fg7k2ey1K3OrzFJkTPAq7TlFLj1q4g0OiMYxjUjasS3ky%2BMHEU2Y6kQYHyxdUqY5NcL%2Bxt%2FHUFIeZl0qYbS80C%2FDNaVV9aDUAfpehK9a%2Fqj7eroVPSwOokUIqV29dwhq4ummCMAzdxSyaKbimuw3j3JXBeUKqOZd%2FjEuNRlmrf3%2FXNmVP9qrRj%2FGkEStJ4cyebsHrpb4YLTUL3ZYSCpcvOVrrKDklOwnbLR7WeC3zwrm2PIojxcbKCmqnJ7bv2DQL7asEFDQaYzsrKslKGdC5w%2FhFBIec6%2BEPWgfE3nxyqev1n%2BO9uM1hfs92v9DKvDY2TjRHWqKOBFhs5PLqayWLSrHS3bfMwJssH6su4%2F98I3tFs%2FWwFknhGmvKIloOr6Mi2Y4cxQmDTeiYUnEMyqDzcXTNTQf%2BfMSJtu%2BlXFuykP2vMD37Zuj5QpHuyoPspz2iJfZkpgs%2FAS8kxmNv5JEJcmjJYntaisOjRi%2BWs07eGM2dCQO3XBOQiJwxY1A5y2RQKprYtEaEBnyY6JOtnIQ3fQZwiJy3ND4CLEiTV8Engr9TrUcwg%2FjVwwY6pgH61vW285%2FPXQTeqgu2EnQyckqMTmxfAZ3aWvvjCXFqHn18wKjRz3GHOKPqtP9k%2FcQs%2FfiQRCr94ewzhdHg2TO9AzAqUPWmo%2Fa88S7VdIiDeDlSB6ddx53csoVXuN4X1IMPp10oC0FbKY3dcNrGuQPF75unhjtF4qQ%2FCTxpNEDEUaRfi8za4P18HP2ESmUleSZ7PZ36GGDf5%2BN6Gmo%2BN1H9RaK1q2tE&X-Amz-Signature=3eece600405aae702dab0e2000b081f880b5b0c3823d1b713f9beb68eb33fb4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
