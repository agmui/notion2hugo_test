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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBDITKT%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY0xvrcYlWpGVf6XU3N%2FWYNVjw1DVWrXg3OwNFAx5d%2BQIgA34R8gDD8mscm4dhDEFpIQrr7KMiFJWym%2BfETNoQGAkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0jv9ho5HrldEGDLircA%2BnRpZVQ7Uyg9%2F12WZ4fqPB1Hy%2FEn%2Bj4pM4Pnn10QKh%2F9QTvHTm7uI%2FPACj9gnmuZ7uiWyWxr%2F%2Feczj0WWKojszXI1e224V0lCH7PaGsLdt0wift5pnSVpc6hYCYkpIH6WroC%2F0PkeVpCw0g4iL91w%2BI8xiZYRsthRWL9j37xWCpBZDltps3XZEE%2FvMNJH%2B7VQ0ueG%2F%2Fsgzwv2OdJRHKNdTpDTnmc1VYgNmJd9TOil1MjMuXkY1rXR7FibuV9V0EaHiLYOEmOBw12bEokAk4gSIdU4CfQlDZNU%2FF2eo1l6NECH4r%2FLNfohR0YIBVUDIGyI1fURSoSfr7lHltezCLJVBQCrnINngZjzVFTo4BEB0a%2FrCi7Aic9FVoGc6%2BZ2VNwbH%2BeIhArYjVj5WGYmxPW9dW%2FDPxauC0DPqiKaINeBoJFRpE1QC%2B%2FHYH1dzOlB3C1%2B76ay1IHpbeDyv1uysYnOhKYr8Xaxd9Kd7HkNRrYxTSrWPob6%2BmGsZHLnn4zf6Pt8w6g2MRs1alxyiAp%2BHGPXOeL4gIWTggSOGxY8y2EjFD5flYoGo8jUIjQjevc69hZo0z11I9DM8kgeO%2F32RUsmSGA%2B8Ps92RZrpKFx6UCGPIh5fFI%2FYkgYcAAfpLMJvFiMMGOqUBBOGOE0yyWHjpbiZ7Li8jgCNbJNM1MNWJD%2Fm7vwrSgyRk0cPNmfQ%2B%2BA9Gsq6aOxN1MPT9kTJ4gnSFUr6ldxkwoK4ZKW1yiRI4jbcwDXmWM2K0sh%2FD7DJI2FHbj3Y64oNusor5sPWkHrKA88DyUxD%2F9wryyjYxvz9AJaWWos%2FMYiGwZlJB293R9ubgisAITnSIpzuMOrzkyRN06jBOS5c54uQAFQ%2BU&X-Amz-Signature=c38e110c23a0a2b71e726c445cc4d54579c9034bf5f2f9fa955952bff786a406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
