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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4VCQFI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIFXZDtI8uCKdYbypIPML%2FwGKbPztIggUMJ2%2Bd9%2Bm30H5AiB3kTGTSiePPYhh8sLlhuuVugD7z%2B4LmcemrjlyftMd%2BCr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMEFnQuCABRKv4ntSPKtwDwHzGaWBxtwMg0UqjUkqLrQsRmceGmaPbbFu%2BmExXYDxrBjQRYiptwoMWPkDh7Kt4R9kXBsWS6Zb1z7aQSzV1CTGxPiwU%2FgS7gJfnEsV%2BcNAkXipersyyabhcYEdAXv0b9%2BmBEsOWvrzV4LyTjNL5r4A2knFOlqCFcoixcGLtJQ86J1QJgbsBehHH593czexlNbxtfq52yat2j9fEjjqM4mhy4Fn%2FZqhrjdKuH2HtYf5DRRpmuLPFvlWU45eWYN36tQ7GBGTWuKBsLlLOt7NLoJx%2F4fs1zPG3RIIkcFENBimJk3lxs23%2F0sjcsjoK3Kt2r5SQlsVbdTNLCrsiD%2FPBLpcjLi2jIvQ7v18alTHDsLpomeZesJYFK%2B9CmK7Ke4rWe9nBMIXCMY50h0f%2BxgpIykYVg62xygDg49YQGRND84j9MDigxpQ6hF%2FbHXRYIY3eInWXUt5v7mDn%2F06Ac29t8kKCTNFwbEmu4coqQoosQxLaqN0km9uCa5ahlBLiPUQGAedl0xwP9qC%2BzPZ%2BBuYkGGvZkSF298SLRLGPKVsnB%2BdF%2Fvhai%2Fr%2BIOD%2BL3%2B4QPuwOVIeRTpsT1M00HvTBsGktp3tjpUx1mXUHRkmsGeJx9DSS32m9RzhPSsTOcAw0by0wgY6pgFYqjUoxzIrwBJ8RAhk2JZbChZs7Heey%2FPNO5gOSdMMvhnYyWHL77v%2FRxyadSheOpFvDdLEaMtoCSjyKLzYwmNr%2FoMokze9qREAclIGn0C%2FDtuNZPzyD1hESieyULf2YuzRYuI3%2BRjnwCrM1vzWfH%2FrDwNcd9YgAiTrK9F6TAmF6qgqmyE5G3vKdJ4k%2FnJZ6ZQzPVotQQYf9TcilnhThq%2B%2FQT7O6Duk&X-Amz-Signature=1cae804072c9ab240a7d83bc92f260ef50ddef78cf98dd079c7edc27bc36b907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
