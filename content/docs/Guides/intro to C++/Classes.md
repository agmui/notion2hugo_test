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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN72V4J6%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoYlzuDteG2LPqbSTd%2F35XskwYe1wVmYRFvcdysUvvEAIgU9W34jwMF7K8WZN3LFjyGoNlCmonix2hiLIDTlfz6qkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDXZ0FzqPZf092k%2BZCrcA4vZxp3xeAe3Ur8URMbCgeK6GtBbXi9SoU7ApHkTFMdu8portCBsesy6%2Bh9qvEx2Yihz1LR1n14oITyN8F77vJRsgLSml7c7Z%2B4tbvQJ6D1l%2B3wqzgWBBrXwjh9WA5cjSUzuifvdpW0l2kAkgUkzX0t03grdeLSusexuroRukKo%2B4AbvQm3c8HFbcdfquynsm334%2Br6SUrZpv898eOyCA8RscXd%2Fm1WDygRYBIj3CB3tGcq%2F4JD%2F%2FyP09PkkGXj6Fm4pZ9riZQHo%2F1POjtrlRORH7GHkAHtJMsQ6Pc8F4GtigQlukIW9Jfz%2BmkyabNrTz0taPDtDwDEEqFX9JXeHNQRycXSXkvabIsqJ2idCPC5ekYHFU8dNa%2FVmyTm6OW%2BUK09afDI2xKS7DancCpFS8YB9ThrBHZXPlOjISNtcFX0V%2BrBm%2BdRu4t9DRwpgom3Tbfm04yIK0E%2BY6zS4NmtgyKZc4qsTByL7T2Oc%2BtRlkg1Sq5%2BUDCzHZvsmJdGhn5bXY2UwLHdnfxCrOR0QI2qI9K1pUJ4%2FgeEF7bBYqOapG71nnFvaRRVZ4bollct7lwnab7mI%2FMiqFnf18fLMqMctYAOnNS2lbQ6ay0NAS%2FVtDjpZ4oreQC7orpN8FM4yMNDe274GOqUBwTT7nWg3YtxcZ3LX7vuRqR9LvdKXX%2BE7ui1qPAiYpTJy26KbddpkfPp3Nr97gWoYKAl6l6l1CrkN5TK8yKLy16DSzyh5dZBQfspgUPvqtKOoRZiMqlJqbeemlwFn%2BghzBW1WWgmmz0hqsKtj42wbezsUzxy%2F4z45H%2FRhaJmZATKR22%2BodBo6m02t4hyZ8PgzFRhb9J7scViSiM2u5bg8B9VlP12B&X-Amz-Signature=28655455dd71270e747a1460a2eec8c53d6861100b0eafbdbaa82ab008cb5881&X-Amz-SignedHeaders=host&x-id=GetObject)

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
