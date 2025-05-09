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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KY4S3NJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtCa8sUySP57buqYEQIYRVS9XDydHN8QlGELIINIpbiwIga3PAeN0M%2FfbiTQ8iUQAf0QqKAPaNi8nSyN3gx%2B5T8uoqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzGnu6gIdXXkOZipSrcA3WcJKrBul%2F3gwxzS1M4ToC7y56EHAr%2F4dSJZS3iSHDIOjCEwdLXwAsr71pK5Erz%2Fpf3Bj%2BT8Fint%2BgdgUJv7VmKapJjadO7wTai1S4EugeDDvTWOcVJxggSBsyc6lb2VgwUm%2BHZU5JzgGz1nTxZm4cb1oFOnSg4T2P158%2F77Znv7At1%2F%2Fu5ASOkDkoF9535%2B4vkM2f39PQDbEV7aEZcncUYvVyWf7LvUmeUIrn3JrNb7yrsBa9Vbnc8BjRHEysMXck31gTKuBvPvKtM%2FzqNJErVNaWeClu1H1mZ0alqqBuGN9o6ys%2BXQpsOxEh%2F5Tk%2BhdHsOR1%2FNsJRj%2BqjtQUSotwn6iLBd9KeRbAcG4YFIRCOphbbZQv0HFR8yUADIDj74lOtMOAfD2CMVmGpFjT5xYieabVMWWMyde9iwkmgeJZuQFYhT2p6NuYQqRTSZguCBoiBPi7beFPDWEaEA8E8EO6wCNZfxMrDcbfGxaQ6L0A6eA5aprZwA%2BXEe%2FP6jzikO1K7%2FM5gy7VP5vQG93EXc8ZaeDOS0pzO1TUVV7W0hkuGTo4MriJF00ZpHNoEVl7SGNW309f6Sy%2FEMGGvoNF6KOY2aZYJQym7YDED6jVwcx2vZy%2FRAZaU0zH2Iz10MMuS98AGOqUBDX0%2BbUFAxfpPVFRVw0nZBlj4a%2BDusyXwDitxx46VzEFVHmgNMi3lEbyfwMZ8DpYO4fm8WyckhsACCjnphr7j5w2RXOpUDSpmuwrCVtqVSNLpYhi9QLUQ4mE6%2BioSAsqb0MfQwZbBqw1S%2FlN2bQBOli4%2BXYLMwUOc5wnMNORglI2VXCZqFEdEbsvuvUPEBEc3hit1H4uf0gA76xeUN7W5xXns%2BWjq&X-Amz-Signature=d0e67e0b5cf3b00544f1ee2c4da0f25f524d69660d58f1eb354c4ddd911771a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
