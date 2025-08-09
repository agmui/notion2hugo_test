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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632YDJLJC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCk4NT7TbfuD6N0eHVVN9CkncNXoX70kVXzKqv0pAwVTQIhAIfvIIRfQ4m46hyA3qTWFhT0xV1vQ8ISoC3bmG8OQiDHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWE5uUWGIwyJayZE4q3ANK%2BKZiaOlumh2IPOjB6DL%2BomVpwYyB0HEfTVAomh%2BCtQzwA24GyCWZvuXPJDpSlvBEo3YAo7%2F%2FuY%2FlHNgXoxTaVtGaknSc60h9tujgdMJ2bzhh34xusilJEAzPIlA9QRDdH9gt4zn3GDrwQbhghIvSKfqSWSzdeVHVKvaEiHYlf4GieHRFyfK6qZxmGbwuYsxMWjDkamFbsDvLrO7YAJD6lu09VY56KzWDx5GE0bwdf8SwW4LN87cOm8gMudHL3LCrbfGlZ5lPDrojsgXBn5ih6eETw%2B9SnNmdk25Pz%2BbkPBXLC3potyQinv4eQ4gwHF60N%2BiG9Yl20oA15ovK8KCZzP7kLPMVTngMvHR0J%2BO1tQzCpALugcYtbvkO1QG%2Fy60HMRzkvWrr2FZiJrPGy7SIFH80%2F2qk%2B%2F6o3FNVjuJfbZ04Ht2bL%2BvHgimJzZ5BSZFziwPpq8fGRtauXX%2F86quS1KhOkcsIqCVAOheMaRu1elwVgT4zhqSBExBJJzpTDUyAcLCbiPsPROQ3FP7Mz3n5ktXl%2FN6AYGAXro1zuZEuKqQGgAo99GgGOlBq5niUuEA%2B0y%2BArkhOsN28L%2BiBOzxrNeIWj8kyLmJJN5hbddZmk4wY%2FTvtKuZzrGRSrjDdxNvEBjqkAXrVrtTHwtRB7%2BvAfI5WtMMEJzyE%2Bj8mN3ZgGet57WAFyNhQ2StGI2tCFrq%2BvWLGqfLwevvcBFSsTk2vuUlDbPtZwfDa%2Bnbl58dRq8%2FbUjmGPVXKPSFc6wt%2BOrY%2BvR5dm2LsmDW%2BUTvagf5sWE%2FOqJOTsrZiJMx4vuWUIyda%2FgSA909coOtz%2BbMvmXtjdmkPApGZ9E8Oo8cJUfyB6aH8W0tPFyl4&X-Amz-Signature=a9225927843dd5ff78a1a3c6864492d863619cf3c77260dbdc946d4fbdfaddfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
