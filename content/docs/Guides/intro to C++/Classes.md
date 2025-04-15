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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466624XEFN5%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1e01zsfGOQWkta5UJd56mUO4rntLvIZ%2Bnu8MFtqQQyQIgV2PpNtwajD0JIJtWr5BiAAzLhC3iRRJQJv%2Bye2p%2FWjwq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDHtMBTSqVuQBKWsZ4SrcAw94VAksOlWYGgHwtnKTTy0uzMU8jz3ZzHGIFq2SeVDMaU%2BZwB5SKb35eddD6B21XDTeEkxiOe30DZG1nyNsj81eLf4T9U%2FcNUpMpOPcsZLgz7%2BDVnV6u6u1btu8O9Isy1MESMFnsM8eMEnNjVUOwnKTrnP%2BfedR4vKgiuyzX8TSW2c6QWX0Wz%2B4mXa1oq9NMlTqf%2Fk8Q0WtcAH4zuCufo9DWUPdhSMODzKVv3kJhZL4IvCBnZ6MdSRubro9wI6RkTxwyxSqz5jVzBQLF9Zs5SJT4y4qt3EiNHp8Z1y5Cex75ZNrtChD5huXG%2FUVWFc4fMzo1htzPpFEGCUJI8pLnV%2B2YruTJJYVb7tbHZThpelu5mQaWMhEseyWLcGepIkzr7NJ0g%2FXBeKY%2FdAvtnGJRupojgs4L%2FjuAzv4X8cVa5FnuK%2FU38ef4FSjpn%2BAkMtDrD%2B78F3KX0qljTMXm3xEeG0TQ3MrMhn%2FxXHOkf6l4w0X6B2fJX8Xve0iGx8iGp9y61O0X7LOkU4r7fe2cIyTzLW7ttURr%2FmRP3Foo1COXwCAC7eT66QGXlFC1D4%2BupQoDDrJCCTJbCMY9qU1igKB5HXOMwSSAUszySI%2BhryrnRJNzy4eaTBf%2BIut8cu9MNG3978GOqUByCdcRB2xvrtnguLDy%2FSjEtBhnIsdwuftapagcmr4TM4uKEdaCKx36o81NaFmIrDm5EBD1OZyiH1U0USf5xkynEkZ8gftcuas4rzSGSsXGXxv3mwzIvcZrq9wnTC%2F7PFb67qSuZ3R0MyucwcZcCmWdPIH4TEjjfI8r7vWlY622BdmoYLXU%2BG5dPQ3IkMUbGMWnrPO1NpYu9TLWiWuH9%2FlQoZa3G6B&X-Amz-Signature=7c58b5fd3f52f3211e166912196456b8ac072d9d127389e37bac1181704840d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
