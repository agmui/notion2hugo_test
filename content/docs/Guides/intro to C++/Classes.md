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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBSKHJSI%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCAFEXbhYtpSGvjOn5kveb0FHspK7hBu8Ya4DLgrak3bAIhALMG63sI6ILsxZMl8eJh%2BeT4CWsbzofhK%2FdRAfA4XtD%2FKv8DCCUQABoMNjM3NDIzMTgzODA1Igw1PoGDDM%2BqqEqDLGwq3ANrWHbVEfnf23vk5MsaD%2BwtcTCvJ9H0%2F%2FhfmPYcK%2Fbma8jzZ3bRHKFDfztrzp59SIrMh6l8kHm0zmkJpQrYMs0B9pwEKSPQOauayew8%2FIOudVNPUyNrc0jLp274gKpQ9QQPALlZequghRVWkiHrtYLE8l95bo73hnHbnzfnm08YBNEFL6uNib69KK1LM9XmQa2TSZFqBcGlVJYztFFekMPZuxKFNRsHng%2FplFzPJQ%2B4CI2vZkK3t3Dg1NF8qLUQKYzmnD9DnOdmOtPEaMEkt1zSNAdpSzCvyYvcyXKDBkJCgPDLtKUv%2BzvmAvEaIUMqwG5nO%2BPhu2oP4%2Bq20z7C44552w3u%2FEbq6UFx9D6meVh1isEBPeY6No6w1XPy9DK%2F2RRZLxNS3DiBwz4IKB8axThlFYW8PXqKPZ3%2BXbT5WZ%2FcIq5uXMSJeu9eEn1CUnF6AvuKfES%2BTeGYl7lMA%2BZEidoVbBp9jRpvuHHwxycD8zE8FSxsncN5UugxnJYWumD2V3kx0bc9%2F4cOaIzx4gjirlA9LurfuLOxXufz4YKe3uwywDDDlGs2Y%2BUcH8hwRQgxv%2BhHZgqKFxJ0RmPlVVaYG5Z3Ne0rJ4QO6Fmvv2mpjkEO5MSLSQvsGOwStqBVEDCQif%2FBBjqkATln4Di3NfFOuME6N3%2BH4EK7EosKCHPrYMHgaDtfOtMsGJ8COcywWf62gT4VrUjQYLrtJRuxPt1e8HdwcM%2B1N8f9OoQUwgsQfd7gc5nrlSu3eKAtFGo3Isl0YabjettKr0ORpo15%2FnphNDG5THryx8Q2ciZilwQ%2FP5BXRGQlMzylqbmv9LS9aF1ONZHMydlIhMIKwPsfOtlS2T00K946%2BPECaVAH&X-Amz-Signature=f4aab626a29d54bbca64cd7c3ae73aa8961ebc77550a0590585693ef4828a842&X-Amz-SignedHeaders=host&x-id=GetObject)

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
