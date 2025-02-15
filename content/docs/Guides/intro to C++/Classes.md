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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFL3JUSO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIALfkHcBg4OM5Zy2cRAXPt0LXGt4Qzy4PMh4UjM%2FX4TAAiAQwyCUr50DfBU6N152TqFl76bDmPTqlSKR8qC0CCcfKyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMIYZ4qnj4XS4FUlD7KtwDrN0KN8JiRcfkYgDpgpRjm4xtKUdbSWE4FTfK5Tn5Df9sX048SxmSg2BF4W%2BiEURlizFInTGGsqN1PvSigU8UbkUZ56LdYRuV1zFV1SQdd7yb5EMzQoyMu%2Fq0Kvbh7pV%2BpYns2jEQoNSE2SPGmecqb0%2FYcdPOMOFtqoaaUCajGEm3nGLxfc%2FqMOQrkui9EBI93bRKNyjniZGFYayzsodVZX%2F3evh76JbvPZUhCzeV3vO5e5buJlyWVB2bwQukJm7htsKvMN4Jwv50OysHqo08hM%2BdDqegrbxYKbmIY51nlqdR6zuab17NcTzR7VxPMncTr8C25jl3EKlgqjH6D8xGz7hpwePr9sSATmaQtP7%2BqejBHrJbM5z14fIU%2Fs3xdqpHIVg4d1vwSylNkzJS83afPwnRwYpOjR2sOzkLc32CcK4w5Ew4WdCQHLNplsKWUEapODk4zmUJZQnmWhibuQ8fO6jzVQ1XBfdYwaiJgndYcpiRTRDeLf6PHbSeBGsAejc9ofza%2BacCXWqwoB%2FW%2BTDDu8ieHNxBAt5Hpuj2CY29HqIRCJ1UYwzWmQdeXPFm0MVBp5kkpNyxaOFdGFFVAwaRK4RawlKq6QfFYsmDkboCWHjiqGPT9HvwW%2B%2FBu3ow3oTBvQY6pgGoeKEl9AGPtUAf8SbuylWFBiE66OXm3N6iHGOFBBEFsDrONxOKZrMfGsruO%2BZ4FxH%2FrbU6dJQdfl4Hr2UQmzEnAFhc1il1Id3fF82Yf8N%2FaC%2BFTJ6BCjLCejxt%2F6v5zqjBebattIbC5KKs51RKxpXFNXpgc2pNcw%2BFV1k2Bt5B7zyS0VRu04JVz4bqPqF3tkB72kgs2BFVZKNGtyiCzdkfS3y%2FqCDk&X-Amz-Signature=0f652fe88abd602b7e9c20d01067a2d3aefd43aa0ff3a12331de0e9e5bd300c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
