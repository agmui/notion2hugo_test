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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAO7QDPZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKD1six9aLJ4%2Fhx4U7N%2F6%2BwclM98tLKMh2gayGLqiRYAiBzqKHeOgxpdhCt7DWgBL0QP7mUdDHaEqsbQwbvPpa%2BiCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMCfweeu0Fa461sckCKtwDL%2BIKplh8YfiNK4jzzxV3qEtHMAt4yUDz76oIK5f%2BAGJR2mreFXdS%2BgGViDDYcnq0U4AuhfplRk8TWWgHj4%2FtO1G1SDI8Y98Z2ZmVEYXAnmuSDl1Tl3f%2FALig2iC6da4LsBVotBWAsTxWvaKX4ql1yJUiVjqvkAS%2FK9y3gkHrY2Znb%2FcZUgh51%2F8IQCPmNlz5v%2BOZ%2FdOFcDfnTHI9u67RxoXH85pt7imlvYt5O6KqCJ6OBYh60q5pqyDrhxFdhEGHSbDhc6%2FT08Oo8a51Cd%2F2weq%2FUXfVWVfp9pdNEDmsiuT%2B3bpSFVyN%2FGEyfSRmn3YrSVrOayegCmuQagjncK7X7Y%2BN3PWhgUVWGeARdPJyleJxpxC0K0szlHq%2BalKjps%2FQaDJpixvJCfj4XTqtB9n5PxRd4IbLrMGob1hznwUVNsmXfg7ol31ZLfaoKIEp7q%2FK%2B7BMCfEAE50TFkFQrhaV9MPMy0tCw8kMlEgNsogDPsVQjp%2BA37LdFZytiSX5wRAf1qDVQ1YUUtLfVRChDWqJOEYUoXZpsXeauYoKc3VaLX%2BRK4IjranrDaX7T1pqLqo%2FfeqWLS8MDkCiQ%2B4Wj%2BmrCvKwKSsOl0OJ%2B0BlVgxDVtSBE810Cl3l5WfxxWAw1KPQvwY6pgFE02f2e6sTT2ieIEvPKuDD4EonsdbUeCznVMM%2B1124RiSHgh7iHNrmGzG5n69M82D9tsrioGKzDa%2FFg9N099qk4C8VubuB3f3kCZ0izd3hYqspwFpD6fclLb9Cu5m2v9aRVN1xHk346OXvca2lULSjFiWxw2nveAKOuRHA1zBpoOQLpWSu3NiAXbQupqULrqhxW5er5TuaIPalFYNDcNQsEeK0GKEx&X-Amz-Signature=efcf6082363c7ebaca9e29371549f5863ca4317816fdb7849ec9f1f6f2f499dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
