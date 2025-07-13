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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LN5GFY4%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw5iVBm9IyxMGzBM6APXn%2B3sbCAsLFnL6bxe%2BoQfZiQAiANTN2ppbN7UZLCtLq1H9Sntve121pY6g7faCSm5HDYdSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBcp3XXByCNMYebs5KtwDTIpiUw%2BYL8nODe2mTK%2FK%2BWGXEqTgOygbAdJcwUhIws1Nz3Qts73N9J6YK9PI0%2Bq%2Fv8stspVy3qNTx4Tj8lndBSoJlmJ3hL2GhshA26aiIMNsJlBVSiKdaWRMSTmT5ZC2SOzMc5%2F%2F07P4evL%2BqiEdtECBpodu0NcZcugV%2Bc70pL7thvarxgQK%2BGJ6ys3qSkOq%2FiqBr4OpBt968qDxtMt2blT9keJWnupJmPYfxyxlGcNYVYLxjKpDIchx9OLW7fXM93zeBkg9HcKx5ataE33ort9Qonx6OYKM0BwtrKKtevbVNVF4o6iD7SINtRHCAtTj9oMVuPeMYwnJbNu2XpR46sAzyYZthTfXNKGQOvAo4QH40Zc%2Fk6AW1Fo5GU9PEfc57uu%2BoA96NXEYRwxxVDmhioUqONQwtI6QGG7TTZkxX7GQFbvi%2FD3M2KqV0PjhuW5Dpo3AUTFEMGzLRTzl6Dv3NcZqu2aYyOGWiNQ5GpxEQA6nGX4nuGA7wHo0OHp11jW4ijLZDqZ8N%2FFlH%2Bk4LuAxvZ1%2FhiIE9Vr7JjqvugzZ2E770eRL5FEVqZmpcJPIZOJdaNrSn7qhtoOpFG1rMtMkC7nWqrk2tv7OCtTvTCsoCmt0acfiKYyLHoFaj2ow663MwwY6pgECwa0Fs3rX%2FZMNcAnz%2BbTC4Cj4HxcE8R1XTHT1ifvrHgoHkP6JCv9fbUdlIWqVT1ucJcnafG53kgEfrl6zjvhhZsD1pz5XY7GItMizvayPuPbSdyXbdAzq8rKOA4XjSGcunAAVatL1%2B09JhJW8HQ7ss%2FzdFVQOPS6GakAXKGRZNl%2BYiBaur6N%2F%2FFSo1RcHaPp2QmzYbtk4FKhk09EVsl1b682wkIHL&X-Amz-Signature=7b9b908e78871de95339473e8269dc97c996e86700e3fddb0367e003ff723745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
