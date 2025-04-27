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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWRJYU4S%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR9KMlmUSeq0wiaACma5irNOGouk0tAnPjeuwMjz70bAiB56Wk4EncZttKNP6ctOJsxjjz5ZD85bbqBTGO6v9Ub%2Fir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMsCIdjZ57A2yl%2B9YiKtwDmXlf%2FegtQWTCX%2B1bMBOCtt21CobnSgT4D89usR%2BpnyL9%2FnlAzit5G%2F3%2Bwq%2BtovW91WG1Ph2T1S9hoN8bgnscQI1FPfGi0oK1r9zK3DwZ68tPqMFuSlC1eqYE5rULvRLkCDbaQciG25GBA0mvdnppms0CZVAwj%2B7dmhYXgOqYTvV2pAjKzq%2B7LffXPGMfqT5vFqA69vVWvaxQnICz2bBsizloFwMysVDXg9wZWcqPjZg2q2g550jmxwM46YUtVjQrZyhKGnoXRd5DeDuojReMtToXOIjIArLnvSHfsAbp5GitqjFHrQhv3mPkjh3UE8YzwWkJ9lIoDAoSDKWaiDyyP55nHKYcV17PHzjEcd%2FM027PdKYy91wVtJ94mkKLauIdP86rnJmsqtPUITY%2B%2B1pfj8M%2BgT9cAIq64l%2FPvrYSMKN17ryozpc7RO3M%2FF5840VpubCu7Yz3wta3d0hW%2FB2YayX0EQ5ZKudLZaoZ2GQ6JGYR24qURHld%2Fc2h0Z9yLyq2MK9eSvGMPfJuJkoqYNiqHattVFBizyeII2DNt2t3j%2FXoX3k2bBwdDSBL1%2BZUoSDexNwYy3tiP8vVWQerXNof8LfVapNir3n4COGqtxfgKSkOPJrSijc1KL0ovLQw4Yq6wAY6pgH8nIOf1sZBGf5xwdtSMJq3VdtX%2BgX%2Fr8qcJEGEoSp1AogIbUPUQo%2F0Om52h%2Be0d%2FdS4b84d7dEDQd4M8NKWnM6sxG3a9PbZSrhoQd3IxB%2BsySxwx8XBI2wtxQEYxKG7xNaH7gGGTt9yGpo6n%2F%2FrGpVwvh%2FgVsPRO7aVqCKQiBvI%2BuByxs6R%2FWLg0Y%2FRkPtf%2BOzliSSbtgvfLSrl4HHOyJ0eBtfGVp5&X-Amz-Signature=1a29011a8dca3186a6d45982b9aa487038ff5fdb182c58da65737391845e645d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
