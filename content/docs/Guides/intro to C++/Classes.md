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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMBUHCVN%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPwY4VKwrZLnVax0cQtFlzAbKQQHnrMDSYFBCUq7VYjAiEA0AeM0u%2BmvBcPemoctTXYABJUSO8qwyxBSNAUGkmIaF8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdEcEs4QM1uAeUOQCrcA8KAFiIyno2Y6n6U%2BWO9sMbqEq2Hc7Y11PJK%2BRLh4onbVa8%2BN5m2O9P82qw%2FYj2e5GzYP5SrcC7YScYEWzBIVQXS32LRdsG9BmvnJK86gvD9sJDXyTt7wcpCr%2FAlxQg2CLF59qyBUSYlyGxtA4NWNQOmz1lkO6ZaOLDD%2FVb%2Fd%2FBc82aN1XUOJiQfikXMqtsm5SFKYluTvrig2CVGsysAMLsjgDPkNvxgSe7vwlBr0wrdGjPdIGrfn1KPms8XJ3upYhxNVLh%2B31u3KLmhkW9lui3JazabnSjxDrc2hw%2B8aYWUucJn315%2Bxr%2BjYlwKq7Z2IFlpJitgeQfGopEy3wpq%2F66XSCYMmY2vCzD6pWl1X9zNch6x80KMSBCwvfu9jcQ%2FSlI9I%2FMlS9Pywv7u9eLC4FJjUObKdzxoOX2%2FXnQv5W0l3HWS1KRC1QcIvpn1SdvYe9Ehp%2BVog0FNgJQmyvbcwTx8Ja3uElQ3FaS6F1oNoVWFOcPdVRDvZaHeKE2Yqm3HToDpdweg1ZNLS82bAzXLMBOgf73L2AeiQ2DD3nD%2BJOgye0b8f43gEbTrkjaEnoXxssbn0NsVFKStNJHNKpFPPxuZ5ZKtWL1g5%2FyF5FDFDyOpcID7OA9Y5%2FGUShYrMMCVkr4GOqUBi26MGzuHree6dIdDtQUPWO9s63mAWuQZalBVL3oAcCA5QKeaIxIUX1Y0ubiBLVbfahbQg4YcoOCvTmOO3nbkaZRtxqMkcmNmb%2FPgpB3RYCk5G%2FC49ma%2BZdEVxWhpFe%2FqH2gr%2Bxhras1n9CDaRR8V2cnRzC3eYHKCF%2F%2FCo2Uk17V145WhEwnot%2BNfzbPo5jJjJ0rgobvAQHakh77STezPdqZ8JD2z&X-Amz-Signature=158fac07cff41c66d08264bec3dfffc21bec5dfa7b96ab3bd871ca52cac2b7fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
