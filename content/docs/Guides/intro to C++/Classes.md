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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSXJVQWT%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSAHCuQvfiwPGzet0LomHtmXSdRBtZQhQxGu7F0Py0nAIhAI0WEL1y3nbJ2wM4iXSTYvmK5IVopCT5pys3iD1gHyO%2BKv8DCFMQABoMNjM3NDIzMTgzODA1IgxIci9OFfJEnRreoyIq3AOeTu9uJE2%2FfeCyn2L%2FK893lc5Se34HNCvwpIklI02VPn5YtBTc9xlnmlzRZ%2FAA%2BZ4LLMLbqTVmqBB9yNYRkNuBpMQ0QcZTbVfUi9ZNamcj7%2B6STPA%2FC81wNNV0yuHte%2BcL690TLG%2BWXWfmFT3UJ2tU%2FGxzrIAZT1OkF%2BuvY8h9AdKnGCM3Wu7H3LzUgwi9TMlsAZqo1qrWAHzmyIbBJC0dx3JgICokMNPH%2FjprM6FGUGaIJdYtjBfQfpzx3DdVmH7SmazMXmlc8prAY51NBYI2dHpIo3fV1rgZG%2FQedbwAcWBnqV07UPQEmFQViy6ZwEs2K4INXKmTcSdvgyELewcj9RvXkiST8LnQoCaJpS3XQeNVV%2F5TNpStW%2FQT3cVMt8j6uKwA%2FpJwgncJESbkoUdRuH7t%2BIbJTWYAsQJye7JYwZjkEv0QwfsWcCAS3nGRX0RqMo5P8SzWNqGkpf%2FTh1I6Q4JOERaqpzOzkdp5Wn%2F3rsxvT1vDrZg55y1mG3fZ2%2Bz4VwgW1iKIYG0EG%2FWEGWpzluWE1YXLRmMp0Di3f8ytCn4ieS96OcPYAEAUT61GRuvlD7hVIjlpXWrVUb9WoK9WTylU2C8x4w8mLhdDPtv7htLLvx%2FmbntHCN95aDDb3J%2FBBjqkAduA4cuFBDT10mNeLqiL5ILJ9VOSqXkBa4R8F5L6g9N%2FZgBEmp9SNemrUefnPQaNRjhk8xSRTC3ox3OxltaSik74UyIFjw1%2FJ9GYAgyGJWWkrnm2wNF9nu8C98Xf1dlk9J%2BsDQb9XLKnznWqhJFnIP6WE%2FacwF4oLRy8jcQAsmrbJtDLyfV6itAsf7wamUGMtv8Rgh23DSN%2BaWCxuXIFjKGZ7nzw&X-Amz-Signature=2f25f343fc09a86055b19ec0c91b1e845283adcae773f60b98c6950e624ae245&X-Amz-SignedHeaders=host&x-id=GetObject)

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
