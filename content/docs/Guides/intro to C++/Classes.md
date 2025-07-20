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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AO2AVKS%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7SRxngajewDIBTzhMJ6UC94oqUa8qTYhV8Ys1e%2FTSowIhALlh7RYiVQI2R3hFPAtPwE4n1HWCu6E1R5uHGbVUKmKbKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC5NNw%2FqWhl%2B4cheMq3ANiUMZv3wDaipOML8aZ72f7k%2FdvK8MNLb9BQ8Z6LEUAOyQvul%2BxN0M8zaSkffBsISgtYy2R3Qy0PdILJCWcm57S3uAaoTsgHqqiS%2FF%2Ba9KvGDj2YknXTJr2ARO%2B1R%2BkxEfS4R%2F6odFUxorNXOsFahZxEMooZUJyFAUWqFAckPlcItlEXcRBkNnPfImHvsjxt2di8tZZwJ%2BSv2ALMhBbpiLlzSSV2BrdL%2FBc7bu3QKjLGlSL%2BSj1bdmxUCY7Zp%2FrCCw8jp%2FPbGze9ZajHdb2AaTKeevleJR%2B0YiCbZuV2LlVAr1rUJtE6JR7ESVCNPIqmvAXGbQ%2B9TnPSOemTxyHvBx%2B%2Bq4%2BoShK%2BADNOM0Dm9nV4kFcDNzyPeLT36ZPzojIHftkA51kzzvJ8hXe9E3ShsQnxL9xnEUn1CrN8bmqiJDD%2Fto2tPQNLsa9XKP7Wxtyxc9YXVRaEAk2BHCDNtEMqpenMxtZWSlqPChdU11my8jLK9cIa1%2FVhQwr51sU6%2Fa7%2F58g7GZttbvInYJfptBS%2BkilH98xAOfEWu6cuRdHbIhfssEC1DhCCH2MvFNDD%2BbuEfthXFj5hKKD2ED3aikEF%2BTvDmLfsShIPkx5rLXMlenSl8a%2Bdudzv0iw5qfF0TC%2Br%2FLDBjqkAUWLB3uyYdCGpB%2BgkQrVOtrm2zKKmROwbXD9MAwkR6JXr6EUKzr62bQuOTePbxiFQNid82C7QFlrMhR%2FGrzt2teD1Gk6Bhn%2B2XIzV8BRbYlnPrKpREM4eCIDKJlBGOAW3DWDw034Nt3%2BomUlH%2FHiMGV6xsv%2B9YNRQffm4WNJnPiKcUKG88lGgTSNl6g7xd2eVEGedF6i8is8J6WSAa%2FoG2W%2FsnJN&X-Amz-Signature=6bb25f4d08b8c627f2dcb67f4889148acef221f6df322ee09fccb63fc5cadbbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
