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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5M3DPGF%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCKSV7036lL1Of3WvBnTGC5nXccd7dNuOz%2FHjaCc1icaQIhAN91VHaoAWr0ybOvQVlQ6z9JoFFtKO5IIbMfy781IrUdKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWfyRXM4qE12o890wq3ANSyjQ38tgKnqJLYfOyl0Lq095S%2BInB06xWJAvDk9T%2FQ1FQilkDWjYNtmT17qI5QkdM%2BLCMCvYZDizmWnVXCYyfSmrCzPKrP50DIJqbS1eLF6S4BHsgGp7ZH39pZkziUvjRLQZAKVriip7w%2B8TRdfGdDkrsViM4hXDQvZoNB8SbNDWl2AOixMlfJQ1EZ02x8nh%2FCoHnqlgO9SCLYczeV3q%2BeBVeoSrx6VP2aWL%2FwX9qriEvdasGj1TghT1CDpkPZI87%2FBuZy3eFOtKiVIMgxqsXddTCBGpfKV1r4Emfp4Hjd0sdeESp6KP0vI0fbhLYpUSEKcB1w8OfSH0Lq%2F9%2Fs%2FEBRJsoznkzNlPDB67hkChSvXrWHQEZ1jgSR65oSdcntDgt4Kf3QCDXOVtDN%2FIiWIIBp3XG0yFpap8m1O%2F9ZUzTHlyTtyEqF%2BoIWcSKwHke8uu1EcKeoS%2FTDMYm0mFo7ZHWj2Y7PW4QpDNJMzgDULM%2B%2BxcBNt9d0BAthDKKergiQOMgUPbVreIYZ6%2FfnFDADHu32TxwZzWkisaeefpkGyKeSfVjm2O8mILvZbr23eX2FZxet8I860rpayxDp4J0MeZYHD6Ae2CKWIc1I3S6dNxKE7fEqLdWiKniProwaDDbmuO%2FBjqkAeNyhDyJKHicRXncBSvuI2tZs7M%2B%2FmrzlfnGnuYJV7ly2%2FDqKsS95o%2F7%2BmZ62P8RwUu1mVSYME8adT0k6THaT4ZWwhKKRmEB0%2FvTlEoJBEb%2BINem%2F935d18TeYaqY7VU2FYwDIg4y6HKK%2BMcI%2FIAvSt09Dio4aoWzTiOqLEViL18vHGAESDFTbtSvRlwDqxvH%2FHQ4yD%2FuJZw54zTVPezmqApterF&X-Amz-Signature=593fbb7774e4f77bbf1c799209af8162cc7fc3b84c0f156c6e8c3a29a82f9f02&X-Amz-SignedHeaders=host&x-id=GetObject)

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
