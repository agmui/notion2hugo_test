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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BRUTMI4%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD58voM2Xc3MH5QlMF8PhqMubp7SSUD4coBWb7vUQApygIgHmWULINip5yJjGUoGexQ0oR3HdtulRioORgNT1ENvGUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFfeNy19tFRcnmXF7yrcAzPZWvABjY0thGGYjRS63NFZQBPcYij4zKWiU08VZ7TGq9bX8C0X%2FyF%2FRDwTqNRkirz2pwbZ3HeKWKvuL5exHHRWiWeHmu8QCWk8u39U7hpm3YjBTsvdMuiDE6DzvX6Y2c7iwDKE3AaskdW%2B3poGyS%2FbSHmMZ2%2BF8Vs3RLxL1t%2FdWWWRmOhv1UFj77uFqbueEi3EcDe9H7gRhjM%2FllRJG5SDMWs6Pb0YKSWF33Vh6TY3baPptSL5e06Hcik%2F4%2BNAgEE%2Bxw6Svq2VdaT7E3jW69mFqn28IGV5KzhsCw0HuM8s4qil0Wrz44PYBKPaHuw3qoxeAhqy7E9tKK77Er32R8dH%2BG%2FhY4q3oLy3%2BJFT4AVt%2BCC7N9GQwbHFQwUtQTgYt4CPg6E1WcfR7gGeckC4QbIvxJkDydvgw4esJ0%2BVqW36V2E05qaBqdNU7b%2FENL1q7bFMpNZ20sWI7AUsOH88BPCZ79EAciFg6xHUSKpZ2mQ6Xwt8fwvB69EmpIRcPEcxKzi0QfJs%2Fdb3xaI1OaKLscH85uKO89EEW9iTLJC7FM2itec1CBv5F8DO9wygVSWKBTZWCdxUSZA%2B%2FNQaiRFFmlyChXerzKW0Wz%2FCEiEZpx6ApacqRIVrHvA36A1HMNObn8MGOqUBIUZBbDxDnsrIe1vs%2BQ2MGGZy941ka54jgZYyDzzNOm56wdrfUto3nhMaASQ3f6nb%2BzhDjy0jQ3fyBKj2OZzZeW82HwpuA24sKxucvysC6FE3tpE%2BPGrjK28iboAV%2BoyqgGchj1qv%2BQHFm3piMcA7bBJGZY2yW4j2OwiRGEeoa6Ks%2Fqh%2Bc2iOum0x4j%2F%2BUg0wTPay7fwlkavy3BrMOXpNSn9OqV3G&X-Amz-Signature=16c7e5e977744bbcfebc16bfda9d98f67b56578f6263956838f744c33b2b0d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
