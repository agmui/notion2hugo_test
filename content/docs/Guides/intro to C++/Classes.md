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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TWXXTPL%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpeK%2FlxQe%2B4ns37GRoMs%2BPMOMh7KDhBgyLsrIOWsR0ggIhAKcova4HRE24cHV1Rc0mT76kgxOqcxoWxCSmf14b%2BhD0KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCXx5jA6mMvITdx3Eq3ANC6qiGPTMwT1SDtrhx9BnbqVz3C49nGPnriybrjK0nnGbtGA1D4SGtZ4DL3PTu6UMxFsYN3bQaY08U0ADnfEgkml60UFLkhOvH2%2B9P5R2AEgXizoTxw4kZO8ugo4CbT%2FnF4sSuob55a6yfCb%2B%2BvdeUoozSUjNnfeFM4aBK2vpLUaSLiNfomYhpjD8l1pCOw%2FGjFlYnYAHs4G24OBRNfux2Z5Kou6kVbBIev2nYNXpYabdHHvEbAcdWxe2pDM1p4f7CQkS2pBnjq7u1IaWnGcWDyqfkkHL%2Bec7ncWOLXNzoKPyBYvllS6UZYw1lNNk1%2B8i5Ma5NX2eR5JHy5s44Mk%2Fh1o%2Fju%2BIoksnnHb5sVABwddCXDxadQsHNoKLGAtBfYFbJywQM9bLU2iduhA8yxPfC8pHkClhqvOoFMvV8dtyb9VY4DcoYZ9munOo1MiJkrf%2Fhcmxn8rCvmJxJf07d0VYd70p2dyoYBNjv1PQ4lFdjYxY2bfqa9PFYKXwaDLnD%2BLU%2BfarmxD8CysN2xsbrttmorvT%2FMTtRfWw9gyobpf1mUJDbxK1JfXWF2LU4LNOIpRB9VVSeqsGApwLZpMMpHeUvHqhIXDQD4eiGF%2Fjr%2BONsIlOJt56QA%2BJB16lWVzDqvdPCBjqkAZGttnFeb68Ze5Pc3HoKewmzlQYoyqgXCs5vwjgqAUGe5r97TZZDjvEAR%2B8%2Bm5EZrwe%2FEduc4alLWb0deEVlV7ZQZoNVmj1CWdFLmcid0pDDlm%2BNCOumZbSHME4UZys3FYIFYAE2ENBp6Lh7SOPCfjIQgTftf%2B5bOJBTq9EOI0d4iulP0O3MZLWZrDpJmIiP8IFSopbQ%2FOs7UpuVAK%2BWnwRJUlrn&X-Amz-Signature=4aa8eac00a7b515c7b9375466703d052e2ee19b45b2193a72c7828547f29bbd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
