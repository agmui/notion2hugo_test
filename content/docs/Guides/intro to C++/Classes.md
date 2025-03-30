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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYY25ABN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIBU631j%2BIHfd15XGEYsuU8jMwtMJ9nqyroMcNJgjWVK3AiEAkfqMp5hLXlQSds6MpSHaKpvXnF2Nbt%2FXqH5mxrBtw5wqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmxeyG%2BjJJ4aobwxircA%2BF%2FUOIFACSMm%2BKB0dfDPcjgjVxV241%2B0CHfJ%2FbSl%2FuiNi39LSGr7NLxBt7fGlrHaHIHq8rc8opa622f4SKSS%2F%2BCGCbzCU%2FDpI0%2Bj1amAE97RznRglwjEzOmlNJ77E9VjH1H4DslXN%2BlW6PEsUzwe%2BsJDiPtAY8s4zn54nEu%2B2idscJSMUZXFdTuQoW9yAglFJOwmd7h0dOFADMZl44VjTaaktMI3rvWnbFrBPaNZxboMlk9JB3fFOpsJtdjgPyi8ZMJHx6BLWdR2TG8Dsr3vOA9pCFUfV7ArKg5Xrvl6p6fdqmWCyNNyklgB%2BzbShnEIPMsxDxQd2a706CW3QAn6lBDmhK1%2FsXH5eIdXUYwYYNCuxrxXEC29cTfN%2B%2B%2B1YmK71QT2OewFoec8czOG8BeBVQbW%2FDt1Ptp1oFlb0paPb7lVOnV2f1nCD%2BZVzDEn3S%2BU2N3IlbvZI5o5VcgFHRLAvyQCsTpbI%2FvrjYjNcyZAiW4%2Fvfl1MPWqwqGz%2FUBrWcPlCIQt0drNZS6oacSU2d%2BcgkhoenQm5eDZC4UvsKha5H92huYfkAEmVbnHNBhGFeGoTYMCF4%2BwDl2jTxBF0vJ4%2FyF%2BjI3XKIfqEx3a7aKeee8Z3L23n1laU4CrBspMJCGp78GOqUB1iWvY%2FtTnWHL35d1BGZeAfX%2FJND5XSIiuUOmr7%2Bf%2FTqFDNFj1Vg9PoJuG5SqVo9Irup9pH%2B%2BLSuyMWRESvtGQQCRN6xKPm5s7mnlH%2F%2FMAFz32Qd7BOA8hBhrQTEpGI2%2B8v7G6kkjyvkbPHewERc%2FalFn%2FCFTspYHCMe5%2BPdQ8%2BXqq6CKip6jbf9DrrZVU0aXMjPmG2NfxGr7dzJQJSsKl9csXP09&X-Amz-Signature=5f5005a95d16c7fa6d8fbec5b40a0095da6b22dd478fa5dcb2e1bfa2c6f43a29&X-Amz-SignedHeaders=host&x-id=GetObject)

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
