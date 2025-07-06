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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H4TFEG7%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF1vxVbK1l3oBthLf7yWkT8UosgpQMEuugjxrcPNgWa%2BAiEAtECJ85ND8RR2EfotgN2U4usvE8eGHnFpy0qwsEE9JPsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDG0VNd1us6FNGSAglircA6mA4weA81tAdK6C4ca3OdM0li95N4iLY5yAlYLC%2FTUt9ZP7R9S1UwTFP7mgeW2KhHN8Zo8%2FQIetDRlOE7vepMM%2Brq93I4l3vcgjtdGmY%2B4yVvIPBj0%2BPFvRCLyd2S27S3YJXvSer2%2BLL%2Fj61SHC%2BKFNGDq2nXUNsM6mQcbW0EotyOYNW96zPzueqxSiHIrWSjBvGQELC6JBBfketG%2FjRbWCY8cmeuRCIf7oIzSPhTktyDaNp0qKwb4qyERsKKIQNEgnFz69nE2IQ0IvYM7Eb3FlQOfiqmJq%2BudwSjw%2Fb23AnwrIVYpbZoyEo5rekstCv5%2B4DttSyCe%2FJcTeSObxcQLUNtNOn9NWqetdhLfFruX8hyylPNJ0p%2Bmba8vw9qrHKSMXunxQlNRhXIrnsjMKIxWNJQ5Y0u%2FMUIkyuikQcBkLseLIbmjijKnAZibmvb6cJ6dzSKYQJZedJMoFcFwgRaQ6bk4cKPWI6JauB4TCUXL5O0TDa8%2BeN4rnwOCy9rrlwenKRHuksqPdUUouuybD95evie%2BZ1BRsMI64ajB8MTZWRvPqayF%2FvjZdw76jksCHeSjzGJiPWd4J4HsoWAFR3KgVK44FOzB8S2aND1C9cXPJLPt6BLkaB6igPGvaMIO1qMMGOqUBpRCLjt8A6pG3zsIUJ%2FF9tW1O9d584c3IBGxhssesSbrdUjWXGMviy8IrxHdjdcdFxEbT2gTqiMJgj%2BfBP04mNcruTEyhS9WkW2jhIsixQm24NiZhoIDTztkZDmlWio3Joif7PBoU44l13vbwQkMkPBFoLLf8H8TKeW%2FUBaWgaE6k1HGOf1dnOOuOzdopIPC6qNEQPG4ua0EIorZbl44aH2vFlT7a&X-Amz-Signature=622b773bdd840888f9f186bde5646f5a5cfbc21cb51293b9312a456ae0729a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
