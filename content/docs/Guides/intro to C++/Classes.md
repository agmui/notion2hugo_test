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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLL7JARH%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDM5WSgUS87mQk9FNpY3731%2BLUfAnLetNmft9rfBhDiCwIgWj6GWlubQdhcy0yUMmJK%2BkjmEtyIyU1mktYvQ0dY7o0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKUU6Hdl35mmHLvm4ircA%2FUcT1HC4G6jKWrglDy89fM4TYe9kMqCBkWiS4elU5kPcovIqvNZ%2BrjZsZNWJbExI3Nt6bxlOeZh0wffK8%2FmteNXlbduGweod2rVFII3lKIYKnlB%2FHU2xfNvOn6QEu9mR%2FWzLSkfIglH707NociNmRx8n6lPo5msH7rOvI6mBhKooCRMnol3%2FWRGictMsIvyMYIFQo5vCuIo336NQzFYnlV6cgGXFr0CuHmO1D8bMhmrnSVYSBL3sETvEk1nr%2BhtNSn6DPEDVRegU3mYXn83s0IQhYY8xzO6wN3yRCKzJsdBqyDUvk4c%2FA2L50034urTpvphDG0vppnd3W%2FRK7ccQ4TIw3kL82WqCuN3v6JzXYEBia%2BCeLBUgrQMLHe4d3klgCfHNv7UOJiwjn%2BERpk4lLy%2F6%2BGpD2Q08PwXtOCc%2FQgfR1tu8MRplckvEiBeaofs51AGSdqr7kmtgy3MDoC8FdA4ps6Kc57rgbkHMkkXl%2BqiYao4RxWGOj873%2FI0qENbe0jTTqeX6eoryRP6wIsjBB0PSbWEdmbh5yztmM7TAuSk7JzQOIwKA33wfywJCm322ALd58zZKrnKl337%2BGUiOgEOv0ruvWOLyVlodfrgzfrw91RvDRc20MYANV2gMPDDqcMGOqUBCxx8RIeZJUNwfDqO6judJmKtXSfjRdyJekCh4cBpBvbP4LV75TLT5hAkliG0io%2Fr7rSLVtmC047SV786%2F5h82CNBZBtKV2jUauD9K0vp7hjBFY0ykiE2%2BFoYnZfN%2BInfdfU2uTzp0TTeWhcC301DUyADFd8m7JdI3cpZtDiHakcP1qLBPAcVPvP84l%2ByqrnXKGz0VGnDwWhG4T3FjPVAb7h%2F1H84&X-Amz-Signature=bfcd842b0a13f79b5a08591a5190b79913bd1478599e0a620972333edf2c8de1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
