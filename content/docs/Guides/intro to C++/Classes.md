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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA3RQ7YN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSCZduRhxod%2Bm75xQCEU%2BozqqxEC0YXKBGoICHCjQrhAIgD8Bu%2B0%2BQHbKfYbksXeU83S58mkIW%2B3h8fLUrtIlkrmEq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDE2AO55fcvZ55K1IrSrcA6e%2BRtTY2f0RIV1wPdfQRH1XS1YlS9%2FczZgo27E1tVOs6ZcxQA05tSONTWFlhGEiwdbdtSI%2BSGxaPIanXqU7jEWFHEiGl0i9yWeANVVVE3qqk6ScHiaEDAd%2BUXYAUVk4IMZzPDubRun9GvJQ6Mag4FWGBa2JkRFhWpB5CDJXd%2FPz8w9QqjSBgyy4dvh%2BywxVAycba%2BQa8LK9hMOBOx%2FPKnGxKKQf4W%2FbQbKZBFYpRRHa%2Bbcpan26nmkb2zgkm5jltdMxz8QrVESk0dlv%2BQ5EjnzyQLkWD0Ao3gIOVnjaCzi2hBpFRiC6ZkhcP1o4qoXgwIE6jKEqge6hOFFhR%2BcT64XHK4X1umhnTtazmfnAqOvVyomnWKmRuRf3hbDShro6ZNdmq3ViywddHpKjsao%2BKB3eOsi8GiBFh0Pj2qOg9JHyhO46vQqz0qeov87Qye8rlOjL2vZZsMOS5C5OB4Eet0YQjNdHv0ueVBRNu9mI56lAayX1Jpp1OCuRxZ4KpmKtMBeUCZgCpuWeEOLrwRpuJc9zVKIq8P1cTdTAQhbot2l4cKvgFZHrjoQtQlxDuLGnaPU73d6NAI7KalSXPWFBg%2Bj2a7Et7qedq9OsgW2JQDDoOECnfqFCADW6%2FDtwMMvp670GOqUBnF%2FSy7xKgptZBt9Y9PbBVgguA2ChkriWSyb1XKhWdWLdHh3jufj%2BrzkSMRQe38TRyPhz7LD%2BD5wMIhhSOkhjr1Z6xh8Oxjvu3F0Djr4ioEO96IbPfOFyNY6yLbfzdUBPEG49gbN%2Bc%2Fwd5NQDPskDX7b5wA6riMPIASLlASQcq%2F0ECBVziq4H3bxndm1RBWioRPBOF7lhwhx9m0b0ekgnjKvWdSxt&X-Amz-Signature=b06aafdb4166d462fe9b8c8f6e55f6feac1b8bc7efa06b1655468db324c6b795&X-Amz-SignedHeaders=host&x-id=GetObject)

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
