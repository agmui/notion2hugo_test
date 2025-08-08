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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVFTNOSQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIB78HLnz6MHniF1By0g3Pn8xwPLyhVsR%2F0%2BPjkNt0tnfAiApOPUnO4akIhv5cfnp8OXrjmwLs88t7Z5%2BcNehFbNO%2ByqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5lcRfOD%2F0j%2FDtbocKtwD1DYo83Rd0knX0wKl1Ric7UeBEnFGtRkhtTwQXn8XnzHjOw%2BNMS6LhiL6wJG8RrM5ngK9Cp%2F%2FIlJCy%2BbS9BOnLS8wcKerLGPaoW%2FRm5geonv6tZ9IKWuf5yUYTOCEQKl8TTpI7siCCpuS1Y8MWKnIEjFfuVkISmHZWhSTVsdLoFDm6khS5%2FE2kIH9F6Wh9mU3O0qzXJlc2Hyb1bT%2FJF4sP9oJXylRhqUS30QqY9%2By2cgyDqiIPL5sO3Dw1AMolwsnm5fZoWBjeqywjWB81gaCzMo4G3kVjlbDsF93MOjJwtlYXTzHmhDgTvKvIDHcRnjEusNujt1FVSwkFWqlJB9aia97pPxywzgONkxxKmHipVHSKM0rAe9F1w5Db3B%2Fx7iZ0rCliLbE8Vo%2Bu5TyG3tkFVTH64vk31XJigvq4%2BK3M1WQ1xWrIfc9ZOdK1TsZ1tIsN%2FVHZxHn8aqr2ZUUW2hhSx%2B4g83ApAU4NJgWMtbzgs9CjtmJXWLehgbKiTdj%2Be48ceWuGkJJarG0pQf%2Bgnfdqgg0peMuQXvlRgkMpcbYNNpXlZV%2FGXhTkL3iFDxEfIjNOCPInIjl7Y0czAuGiXTMMDBPMwreoL%2F4uoPTEtIr3ZbLdAapO3JG%2FvAbOawwnfrVxAY6pgFQgA2gO5Ot8nwEB%2BlUJG1%2F%2B18Ftfkc4RV4NxC7OeaxYw%2B6%2F80AJ5aDoHxWT9pxpHi4TQAjqRBtoaoBV3jKi6Vq7KJp6UDM8yYtQcBFRfr0T%2BoSPvbLiHd9K7sEZL20jO3a%2FltY8abxDHM882UhNlG%2FsF13GfJM7ssZXx5MUQsh1x3BQCsDb80vsjZMAHhtIj7qM7PlFOh4cYCC3XLug58mSOPFaqsh&X-Amz-Signature=c28d3add1fb18362a8d959d394cc7bd2141eea37fb178b14d83594ad7a178815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
