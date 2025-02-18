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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ORXWCL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDG9Ex4J5HE2fpFK6XiaDvFDjmvI0jiro541P3h2NFTuAIhAOBmrZnOy2wC%2F1q2suqjPQaCImJOwJ5MeFsnTJZX0UM%2BKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzx26d7Brvtgkq%2BKbMq3APYW77CYBKgHsLq5zLYX7UPcb4I2S%2BvLIFK4ryutHKh7kNU4KtL4df7Fpy5hL1tEEZCzcIh5y3BJmPYBPFJNCMNPEhnCAQjk3%2FsPDZGfLJka%2BSU0%2FLL2Z4Iq83fvXYlPCz6Amj6m5qQ8KVeV7S1nJh2Jht%2BKFlHYLSJVObawsZkzJ7JVMAs%2BnmPpPE%2BblX5KxNE1oOjpIMX2DOVvNXLHLL9Cl4HWpOQ0b0Kj8SARl14oIU%2BQkmo09QP7DFk3sEPULkEB15RPtvgj1AuFsoYa9xBPsg%2BTd8MmXvP0%2BpKtTNJ%2FQcuYq%2B2drRBaqy3GdKunJyY0SjO%2BQRF%2BrFyLW3diMUsKm%2FFdKHUteqwCBRI%2FBVkBPyFS1IxXgIOZg7Vb3CwNJqdLjpqd0EZvZvU1Ms8aV9WF1FZ3QBLAX%2F1BlABmrGM2sYiqIkZTwYbX6%2FHxitwHic9s%2FUa%2Bu3TUZWKiVIhwBdxZE%2FpCfN%2FF2U6SYE24eX1DOe6uoCxcSO3zZ1WBv5btqBHaNmEh20%2FXF%2BJ7kyZktELMSaJpKxuV5oBuEC2d2KGqdUFdqO3V%2BsvS3%2B9NF9Vkmtkjv7rswNlNsA5Gc6dmaKjj831bsfTXr0s5LLyJ9aiFYsKoZMVqZ0SxbQofTDk2dO9BjqkAR5z8MvaSBW55iYuTrCTbPIzUqyI1La7Qa%2F2TKV5YMSNH6TTtyKFYXvdpiB6oJKmHHCVfojc%2FVqEtDT047wFbExrgQF1zqAWLAMRV%2FciEZWAa32OQhUfJrndSNMsWzXvjCYEK39PuisGE9wgo1t1IG%2FyxYvTlp%2FDmnGBTpPpN1CagpDyb1khzag%2F9PJJ8XA3x8EWbBm3gmxL6CSg%2Bd33F35Oa2%2Fo&X-Amz-Signature=110f603011984f92d8ab6cf87b2e8d71a56abe6e66ab181725d75a9d312c804a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
