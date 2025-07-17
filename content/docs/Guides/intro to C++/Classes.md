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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ7KJJZH%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCQmn4TokAwNKaQGVaFQQDTQAI%2Fzeix7mF%2FsGpKOTE7bQIhANB%2Fyi2xANjuXJc%2BEPpKLfECPRFn18rrIjhIxTeDordZKv8DCH0QABoMNjM3NDIzMTgzODA1IgyaF%2FLU%2BbnsqzJMm%2FQq3APuszsEdhY47UiCmANHCR34LwsEsre7%2BFQ4xbyNTIjE3mLySL996iuKDcKqgj0ig3%2FvE7W2qSyZcv%2FMPAXZR5FpVL2C2dw9AJhRsfIHdea2cGJXVIvSi0Ac3ViJogIIwAGMFi6tGc5KvCApxAu4Fh5qoS%2Fx9LGwf7kChMh9OIz%2B0TyO7hRMqxHVuAYsO0cIlc%2Fni6%2FICQ6eUWrQyS5tkz9k5bfJkxdhMcSFJ3vIhGLrQHtMCwVQMPNonMy7bEkmYqkTIS1OMjSParVeoiZBGpHyCtTzLrzT%2FFqMDBkp89mSCyM9lWTG67Sr9gz62G468N4zTMMnUOuQrT3LFQrV6jkvrc0B9YIdWU0y2QCoHerKkyB4IBsmG7MdE5mAScRhzKCnv9O9mM1ppZZG4Cu9In02gXhxP8LTOnkJm6Ky720MR3NWaEsozyh5NFGAynhxtYk4DRW%2F1Vk5FKCb1a0mk0IpUHcF2jmQ9If7pCvB%2BjtcwDwncog%2BtpJhkkVbTI6mdgRWkCsYJzZZhEcxkA28q77iJ5bunE10Axohc%2BtSMvPjpBeBR8mJOog5wgOe9Nst1DH58lEe%2FSAYBYKcRwmCLPFgJ9HpjC5S83LiGFBq0uwgn%2BOsyLTKkdXY8T%2BMqTDXt%2BXDBjqkAYa6algei4EnmyagxtApewPBLkSiaQltpR4FxCswBzmxzw4D4bk%2B0dEl7FMdXKKsPn42ZBNKGCmvxUXSaZNTHU80ZF7nxTxv%2FoyfNP2%2FJFFvcRHbodoiZWBYtsf%2F0U%2FR1iJCBlVD0hTe39x%2FOhGzxmFILVpOGVZ2ueeT66xoLZbqkOsf1UVogVUrm5t9GIrGA3C2UmeBEIx4PdPzK0cw89YiQLmz&X-Amz-Signature=d7fb2634fb6518eb1e1a534d8fa4ab7032692c195d60716855dd023a6488e131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
