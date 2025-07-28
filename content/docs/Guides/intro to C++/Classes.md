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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNWWZI7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDM0CsysPZujr3%2F94s6OGg0EmcRNy9c4JkQjGrbrAoxxAIgNGd1AFqnS1dfIDwxEupCRzhqxVD9f3Jb%2FOmbsTQse4QqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdN%2BUlQ80%2BOFvLttyrcA2qievSp11ihQbBzxiODRRxdVHyaoS2W0DOPweV4SsrtSyCeQpWM3jrnPvlclG3nacONPkqAYdpNhKYq957i7bpURwy5EmeKaW4JHybDU8EGyW2io4jKSdG7%2BCSpvENTKgkLAeODrBY5ivFV2yUpSrjVxtG804uuu1B8seo1b%2B7lNdseXQhEsBYJzcBlVvcMmMMHvbAhOttmqq34wb3%2FUkcXbQ58Un8zUDCGNrhI6clCmYv0ZvutuFyAVc48Q03QAhGY%2BRpR13P7gL3APEbnBBqYWtyIqV81M3W485Zbfm8TaWrYO0p93oQ6v%2F%2FgeA5%2FpileLxSQ2PiRNjEWlxWBhHOZ61BWcLO35SFVbkn3xHOwqDKprSifDqrsX%2BPHEG4dTdyUw%2BRgG%2FhEAqiGqdptahZqmHwKVfxLjqf3sPgx2gN%2BSaP5RwLse3T2rYfSYMO0kyBHziFi19dyTPkqY29QamoBJdJPvNohQzLFSQjL85pLc%2B6WvzNcvRpZ9qPistCN%2FhV%2FBbDXBCDmSIGTZQPF%2F%2BrGbd15Q6e0r%2FBJiugWlpKBrgzPJYqIUPqo8xyKLKXvdYmRG3et4O7Vlzw5b9CFydDgrBjdoykMWxXK8n4ZFqD1TC76DY4uZ3kBQ0SQMKj8ncQGOqUBLdW2TqX6%2BBbPgn1wH8qS7HJ%2BrwXNOtLH9o9rVAbjaCGYeKq%2FFwvBuSf1Kqiy54yWXnFr%2B7fukL27O0jFGs12nxeyMfPJ1NS269Up8ukzqks8tcfJjRemym1Tzc01U5NHSPXPn8DVaD6vO5p1f1jvnvLxUGMhd%2B1UB13inVzPpJocYL0GLqZLgbAkm9OAj3vRGvUu%2Fwpc%2BDH03kXGPvCGejHA3GLj&X-Amz-Signature=4d2b93837263db180e188f2e831cbb1f8188ceaf2d107fba9caefdf9766c9144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
