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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVKICKW7%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbjB6qreso8GGiMLklPnflgDlyANRzQ0iuqJ6rducrlAiAfLYw69Tfu3%2BIN%2FwfIKnqq9UwDxGDRXGLF0106tOtyqSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMi%2BJhEGrUd%2Fg45xTFKtwDQUvcksxpNRx3TxnvaHA%2BoI5wterpY3GlGhTr1SoDCY%2F1wp6ypoitnNi3RqTJ3V3%2BKQeT5JB7HCm7NND0sl1tEC1jQFyHwH%2FwVRO%2FPMeW1pEPbyLc5vCHIEz%2FXfD7T3j%2B8kDObEf0y9c4kOzBR8e2Q5SUJM9wFKimCPh%2FD8vp2hztUIYIdwslR28E5%2BbAuz4NbwGOSj6rM%2BDc5X0wxFhIClPyaozByYsqjb7HnPDR1Bp23LMtXTaABIbOvWBo%2B0YgsmWIVQ93GHcqhmnUP%2BOTITcmSEG39Jnl2q2WVCFfFMMZbG9w95Z9306ceQmBfTtkQrNFVTBDC6omMzdkdy3ZWuh2qpQeaTX2SL2k0UsDONDKwxAZoGY%2FEWPlb2JaVIw6EKothbMt7RNu%2FadyMI6gaj%2FkLiN%2Fy2%2FP07fC9GXeffkMo9qpKgEW50gRfQus%2FPaXzP3LHjHxhvratjWPUKPjKOCS%2BpQjbSHLOkAjKCy9YjWnoAfeX7uhihq%2Bk2UaFdhGZbm62h2JBw14nMdUlR34Dvo%2FZOk7zHoLeBsUWJ3cw6T7CpUVIhiXJEmd7NbZ%2FXtKriRtSW%2FusBI4%2FzBGguIU7j6rYntfsgigxp8%2BVF%2BvVa18SI%2B5xU6AlDKFqMIw75n0wAY6pgEYPhkZ8I37WyzJG3mmETeyIzBMMen%2Fnr4UtZ06Gxr60ot%2B%2FSwLui%2FkBGI0x%2BCv%2Bq3FT6N0MMq2JMHtztWqkT%2B4rAez%2BC1DsWykd6OuFjlevg7FRMI%2FQw%2BfnWjNbS3nnpLQur6Qk19a18I%2FY5JGHkiIHPqE5dlvELzxB8rcjP2OZQxD5ZcTQI30BtMg9RUNx9O3OwdhlJ2H%2F1FvCYVwK3llV3vs7Vgt&X-Amz-Signature=a4eb3ff79ca165f6673d43bb7f9db89096d9d900fa6a4c2912af92180e800c41&X-Amz-SignedHeaders=host&x-id=GetObject)

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
