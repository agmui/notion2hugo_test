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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQD2NDBD%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGSBvbooITtBspiZKN8f3rHRmEqPHUIzHYonkSrIbDcwIgBD2YkHJiHz4FzQH2VTenFvj9gmWfvZExsfRBhNsMnwsqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKtCgUo%2FWVMy03pcyrcA6tucXZPKHQIcjQ%2FwtjFLpC3rXyJ7QnzRt7CoAZO4YUoJIjP8XoISqriZ66XF8TXFeSBkcXDFieFifycbpC7x68kiYhOWayYFXIuK%2FR2Ur6IAxBHz0PzVgaKEf7RnXU9SEbVzPtcspsZVwQ2rQvR7BewGVSxLHggcON50hIZpuP%2FbDF01fA1ozTLaAggJlJDnnabb8ORp45d7Iu0NhLKPVZHij7VksLKXkc%2Fd4nAduExNwxLeZl%2BpKRDbWS3bOWY4lpyqcho8fUgkD25R%2FQVRNmOksGXMaDIUCDEz7r8NHRMxsr2%2Bbhy4gbzZRU%2F81dKkt%2FtoQrxm2Z6lFTX%2BvC410Tr%2FNLbvF%2BqUshyP4FaG%2BWtyU5mgjL3cJpm7K7GPsgbnejn46SlyK7tqLaTy3R9csWQdfzF08Oso9ZFa%2ByNA%2B34ADuGQt5X0%2FoHIACc3DG2UDYK3010Pxfm5wnRf7tLr663oQQlBvWko22BFXH50R%2BmA4MYAWNCc5s6OZZae%2FlTmcOC1%2Btfklqa7jwj16eFUKgg0R%2B01OSqhbzSXcLAEvrqH%2B3vdTmtVFwbsaUqnRF4NhA6fjW3jpTxzcxlSYyVJALNHGQO39e6VMysuaXpYLN8VHUocmAgLOLVMkanMMKV3b0GOqUBqTEpq5tPZT24OkEMO4L7lAe5CF8f5EURp%2Fcz3jQaIAyQXZ3Q1oOQQQ9nJ%2F%2FBFVf%2Bs75QgvsMxO1saKApclojmzR4TxCRH2o%2B57uQcQKwsKyZ9%2B9XmvfBSCspQ5QsAGXyUMhIex7EtrXNqt0lXf3Ip1zr0SuBjgYhHgfJQFLq2gqHa2mp1qQAWEAFRT8gZ8zEmNUOZMitfFF55H1sXv%2FytEVVEa9l&X-Amz-Signature=45236d3f5ba23c8e455e5f8973d5b4c0adc4e3178d96465599f878095fa49d6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
