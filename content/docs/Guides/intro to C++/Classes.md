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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD5LDFDL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDk7LkJs%2F%2FH1AgD%2Fzs6wlt0PWFdmYM7SHJBTk0ntzItxwIhAJ0bIZ9%2FZjia3FGxrW8vEvKMcN9s6%2Blwcp5qGcCyKfGNKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuVIXZO1zHtvtudwwq3AOUCMlfQi3kWFs8brJ54cmrbYHtdtgeW4y4YcdgYiHUYkQVgJ3%2Fgv5SNxF3oh7SdJZqNeqn0gMxDv2jCzgLTttl4%2BP2w%2BXOLeLyyqO5mMDfponQqA7IMBIFVf9vFhCF%2FgQbm6740LrL4wYShrB4%2FAdb1tB34wvbDca6j5fdRgz1u59EjrnYRdaXZlpdl0XiaeXOYQjYG3DLHXL1zzWRFW8hj1lABJOQGda65fKnWzR4505wOC9QCF4ny%2BfmpwMEAz5s4RtRTZfh0CIZDD0daKP3P%2F18h0eGNaRIXWHf8yVrHVLxh%2BEGVEWkFVPL0JDWf%2Fa6cgjFXb80wBzQ5%2FiMTdQH4XgtENEvWAn98NtkANnJviPOJx7SuGPUex5E6wo%2FaDQ0wEhhR82JvZgtL9M9ZCy2ffY1hR2k5%2FgjqmhpiEGIJP9B31kg73Frqf4Lq%2BEMaqg9fkNkLQMPFg1DnH5Rd5FtLsDhV9yCik2vbU61yB9vG7Rr4Ed9PCong9%2B7ZBglGuYw6V1VEOqCAl5%2FqGJdWov8L6uKDDkeU35Xv8sG6%2BlK%2BcjgyNoWl3nguCG08JuniwSLGfHbngI7whdstjQ6Kj0vcybl2f6VMJ8dX1x4Pne51SHJPpncIKS%2BrHgLYDDZyKfCBjqkAeyjcHc6mG5ImxPP24mRXHrAnS1mPF7CdaC8N7Pzui1pQ4tsOdxYmHFZuN3Iq%2BRCBzSaF%2FnjII1zZfnE1VLNvWeuh%2BohvdhimN2dU%2FNms8hNlwHsI15EBoF1CgUlmRxD8ijkzdtgmb6HepXgOZHyxTzuMhdQG3GZbNLre8AllC5IO7xntKb4gfT0ZhBdWll5IZrKDSZ2KhblA4XmObQvEMP0qOrd&X-Amz-Signature=5a3b49aa83b3c54f73911afe37229655e6e1eed07977909aeb59b53f01b54c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
