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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBBHKSTO%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKqdi2eZ1xICH9DVSBUKoYXUGZmv%2Fs4JggwKyR37y0NAIgQMcvLfk1mTJy2oqDeeE2maeyyy2LuFYvp5LUJwkDkWAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFANJFYX4dYq%2FuINircAxEr6dzxztxf4omQiraE62%2BfgmxonlHg9ypcRJ21zXnzgEIFSp0OwjQ3df1VL2oQucU%2B7qXXiDMCgMVMIs2cKYvxY60zC6ekE%2FwadZnIbf4XrUbiMZNLo3PCDXDo5xBT7a33Kt%2Bck29bR%2FmqbTXav6%2BxPXFNRg7ZtTUbD1ep2qtNg9PK5C%2BRlEAcEW5%2BQDunr7qGeCMF2TsBgGRWHnLJ1QbctvFRZMm2wkueYLNvN8dMUPMfwFOAjlyvVmxdIFka2lqbF2peMAJQkoSs7Mb4maqSKlkyBOQvL3kcpyr%2Bbhe%2FC7VfaULoC0mZeU9bT4P%2B7yA6P0CCE%2FbuDzvc91sGSEAMyl%2FVEacXWFxKTN%2BRU7Z%2FrCaR6eFdxNGZrnD0PiukZlOfUERHo%2BFxdHzWqdCLDTg0PbYLIwZ%2FVlwiOEf1W74Lod0oDVKl0jHN%2B9H8keEPIto1tFt2Tnx4jrWhxLpGKO%2F%2FP2dlpIZjmo1RdU1lYyU41SDD%2Fw1q6XhqvbZFd3P4YMS8ir%2Bg9x3s3mBH03MxyozcaYm4v9cOtnbNIPdvZSPmo%2FGx%2BXKaCcovl6vlfXpamRoahaFIZYsXnNMEisvGJjXNMvRxNkKJ52vGLB9h04ObTTYxjQyC6JYDELhEMIHo%2BcMGOqUBkKGzWc2ze%2FWVLtwHF01iKDD3npwAC2o%2FlAoWXmUibW7gf7WjI1AXyOswKsB82iu2A3PePq581kBq%2BiofKROgK2ZmMg95e9pSHXKxMPh4DQP46jpjA%2FIBe35tzKpEzwiFLCViJebIgVB3K7uB0YPFctIKw3ZKtVXnw0lZyvxOT8WitKDqqRIXrSJQPdpjZ3tCfl6rJNylEV2F9o5QoqpmtC8EQ2cF&X-Amz-Signature=8388beb19547d0a73cf09d5f78d61e070f7d7b75d35a47ef82776f87378bdd5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
