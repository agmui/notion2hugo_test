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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIFMVOZY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEEpFB0vI1PxZ6N%2BxnhaMpPCeSCm1ZRJvaiv%2FK0QPgZHAiB7TZQwC9M4VggCXYR4EKFwDFqOanI6clWUBh5PF6m%2FRir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMmUW%2BpM6L3yoSbmw9KtwDUUQv1PqpJeS9V0qyyAlII3K%2FjIWhtx77OCcALsOOWnuc0SKXRuUkiwb0MW%2Fc1l%2F5obU1dXSsbXfb36QqoLLZRXk4%2B3KFBpqbYJMhsLOqW6X%2FmRDfqyllCIzYCK5aUhwVM91eDMyaKAvGUIGSloVM8%2FWaxOqM%2BKIBA0x31e7vR6LCcemlQrXVlqU%2BuHoMmqiZ2bAYqoXBALqww9hfyLseBeuH5qzrN4jDqtXnlkqlt%2F%2FbpEplDbdrZDfvB80Xnf6sd189CP43DS2DSIjDvFhe%2Fu165%2BdPmE3t3T3iS3dHCaaSMGkfR4fBj%2F%2FLbj3eNT35cNZjoxZbnP5vS7caQP7PXBleNpsGKwbOGCnZDpcMcMqj3x4hRp3rJGVAwf%2F2CSI70gW5qOdNdaboF78Kh03VvNCrcebQzJbtaOKd%2BfF50wOfENt4JFmtkx%2FoO4OJxHRK9P2WmP10DenggkrvNUGgTmtSqCk%2BOSDh9bWp3M6fALVvuXapgmYqSi29P%2Bve1nPqlBePhpvOgjSkYzqadoVIRUT%2FJcWmXUmvsurLm%2BZ4%2FU5wkZFd8dLjFK7u0%2FpXGOtYJQDkaIy4fDNXeOS%2FgcSFaOAG05xFHrWTLJ6Kw8LNfzUGhUOsLVjtrTgeVYQw5%2FiAxQY6pgFwm8r0E8fwQCSpbBy0j6cfTGQ6n%2Banio2%2F%2BrFYxFgWBm89A4mqib8275g2kFvQNXQcOBDepLFygYNlnMff8SUhDCoN89qYrke3tV%2BuMBHUmXhe4p5dJAscOUZaRoLOh8aSIlrue1b0VO5ndTWypEZ4gstEAE%2F1gBS6a4WKALrUYlpjPntNinYjwXKo27X3d24CTN16p1wHLKQXYr%2F9mjG7ikL5SQnT&X-Amz-Signature=c6a9f4b86661f880f1238e156f6bb79531fe890a7c328af4bc60c6675464d993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
