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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7M5T3N3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDayqdxYCWMMr1waLT4WvJlH%2FSYSteX%2FBxbkgQg%2B80%2BUwIhALlgnIJZpnRLkQQYkgYzv%2BRmrJqhCMnQ8TjUscaWe%2FKYKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6UBHE3BQSCm2%2FYLUq3AMofHwOlR8x4ZY5NQiZdKFuniDEe%2Bf8TpS1Zv2NriUoPr0q01d1qFXzXSxfeKdxcXjcyQaGzq%2F5E65sGjl37wTwEafOSNySm1ondaIpaPwkyCRNcTF%2BpBo0oT7Vg87dwZq6Zew%2FDFXbcKpY4369bv%2FPxo7ME8U%2BDDMrp%2B6B0dDzSiL9r4V8%2BgZLdQzHSUiFlFkB8oAmvcs5O8efXJiCecEUKQQT0UPdUtKZpSUM5Du3979qRdHiEZlsJlVdyKzLht0HumIrFdUaWXMnYN53tYYl15vnhijsQYmgibPPJF1I6KWNK5lGO60wkuScx0Exl5Nfu5%2BeUGNe9MVXxx%2Bu3kwQCVYnCCoskNCJ6FxlFO8jf5c7FxGFhN6OnYjB03mPkjYKWQeMgzBNbGQ6O%2F%2FTUVYlkjTvjPw0SU7A91jj6bsvUUGSXgTuV0nT7cwtJ3qg64vz9CNij9gCMsJg%2FzxfWBq3wut5f5WbLld9d5EpVMaupAEbsqdvqwFlf%2FI9MjGff10ULl32GLcH0hkN5URcQV4Ced1NoA8ZLUffQGkPTIMwMlLHX2gVho1PivSHw00vfOXsgb0sog%2Fi4rBFPE7bf81Bg%2BGhd9gfMuUwJYsTDf0GpX0oGynKPoyeia8k4zD%2FoezBBjqkAT5LcLTLmMzStf%2B3Idcufb3izXWmHgvyFosouVl6Hx1uIUt2HoXrZmUN2whqsbz3ybmE1uWiC7JD3139lLprdsOKWkNWa4vMTCNqOVWa3odGCfqRhI9t40lGEmDyGPY%2Brw97oaY39IXVHkuioxkOYskC9G5gJCbcti2rFEGhoK8Z4Lo1oBdJT2EBjucCkhlBflH78Nh2xT7%2FI2xE7L8n16bLvMxu&X-Amz-Signature=9db8cff80e55bd940d36d2893d1a7ea86be4f993d9c74846e4ad7224cd13111d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
