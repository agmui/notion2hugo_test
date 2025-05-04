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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE5PAAGX%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCICl2aXmclwlJ1K%2F0p6NuekTjYk5vrYBCodI7I7OlyzI5AiEA2BEPxOMg%2Brakp0tkg1hdU3XGOnL79QE9xID%2FLLMxYAIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD32gLQahurSkIw3QSrcAzEP4C5IzymalCyMO5E5fsHKKRMB2u1Lx%2BTCbYFClG0qsT5h9YbR%2BHVBBMHNt9%2BXmTr4AQ6adOkeit9KTmpJwVTekfM3tsYSiZ3vjHl6mnG6ybHdtPZGYu5BHT%2BDSjar4wD8SYaBupgjuc3BJeBxw4gXGbn6kOdCXBqlZFcIhIMaCZs2kEXfDfJNv7cHaDTd5Vqvg95z19hWDNltKap%2FKMCMeI7FhCcX%2FnhQP%2BVFJrmMArdYunJVcOMHcYpIeOE3aS3jEznGUDTxG%2FDk2T0VUQRnhmekt%2BwAfoAx8SwKFlLyTWcU6%2Bil0V41uHnTFfKqg1XHkMUmypxad%2BseQtoIwxf7AmATDN39BDxIsh4mJh9sa%2Bum5fWR4q60aVeeZIMpYbdwmTqnZS%2BXtrYJDKFzMsRAdSBlLW68P%2F4YsexQ4fscCSTmiFys9ngOMz89W8PgoZ6E6krvAPuM%2FJSBs6MRJ2Qe16HVdLVB6gEQ7dStOIr2bIzZObVRRRY6qabL0%2FtH%2BQ8bQ%2BbHTkj1Cp9Iha9BWU%2F56nQY2uJ13b1224fY1Rf9%2Fun9TU93cHIabLxrGDlbNuc2GDdWbZJXe5DWeTN0ujnFZ0iDUaemMBWsulkqruis8BuojqTI6L0teyHjMKXr28AGOqUBWd6aGHvQ1YXTiNvjy8O1kO2rn6nSfSMRYGXOs%2FcN3ptMbBiS5RfE3QUibnAHaAaJmXog5g1RNK8yHU9nnjNko2JdKDeWvs%2BiPqUDGtxP18azEXK09%2BEcQlDf2G3%2FbTCN%2FEdO7Kr5ZeZPFS6NjSZjdylkfg%2Br7zxnVJJVDbQtGNUaenrph95PpuiOBAPZdyDYPDOQIK9HpHyrf0zxZmG9v%2B4E1Bay&X-Amz-Signature=9affded98e572583dbcad0495cafb778deec1147ff1e0872a25847184e29be04&X-Amz-SignedHeaders=host&x-id=GetObject)

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
