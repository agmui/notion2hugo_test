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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EEAAGY7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIG200KO8z9XLBGpV64FEEBQrV%2FQk4fqES17RTedRpk4eAiB7dXcWMILccMUbNTYFYBzDIvuDynxCsnkJyUh2ZkAHwSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMpU3ZR3ldyHTp%2BkRHKtwDFKb8KJGd1fGP9yI1BfNAt7Pt6vnCv0hubPFWmY1tpxqB1cT9yWaKLJx3VBBumFoaMLzdH0%2B3ErAWaPoHZcwQnYx9HF06iCA0tqpCy3FwRhEdBBNVCFBdWp3f%2BDhdrD1h0jRLtbEChmpH7Y4DWmb0DE8lCYWDoEry32Cuw7rNXpX6q1CROLhgC5NWMtLadVGw8FgcwoJa%2FhAOSOuXEqZzTu3gwB%2BtcVas7P%2FryWz20uBNLzplXokmrPYavojseftuFDX7ZeHgZfxt%2BgyxzFKvrNEftbjRNdaUWhJXdRHbue8IFEI%2BeKzIka3RQCn6W2gE9S%2BZZnU23ZSpQtLHyo8TrDKPmUzpjHGetXSq4HledswIlZKn2cqUh%2FdwfD40x98qNL6UJih2mOb7zSjtf74zUWr%2FSzSFEiL9zqQ68Kvw%2FSFG7U8S%2BrolmqrbvfGaNvkHuwJoKzfB9cmmnsnMOmhjVwo4MIPjgwlOivj27y3JJumBVGeV%2BDXagfCdQWHbvvO1X9STifG4RgWO%2F13iRTozQbPERzAXY5NJaAOzZhOvzSDfW%2B9eYXIqV1wHax1Kxtw2pbf%2FQb1bNOoa211LP%2FNHHC7eG9K8FsPA4mMtmFPiSUhnWRQQ%2BYwGpb7TN78wz6C6wgY6pgE8vzEN0Xf9l6Kmrt3FWUH5mlaXWBFzNYy7en3Jp6bQgQzrM1%2Bp6vvZYM7ScdBPvdylN9SeA64Uv4xcHOHKVeUk5kdauvWxhqGialpu7nITYlUszd0YxqmwwoCZVk5KXmrOb4mRgDth8I7CW%2FMHSB8oIydFcinG1Df40ukeZffl166B2BzUvEX3%2F9%2FNsrNqHI5zrnS7oKc3QCfo%2BVZhS1Smt%2B5uH7rw&X-Amz-Signature=3b460e9d5423f87d84c1fa67315337db8b18773bbdf1591e65772aa22d017c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
