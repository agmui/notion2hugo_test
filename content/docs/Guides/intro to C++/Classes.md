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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEYL3CWZ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQC7QOMxtp4woJShZtaOp3%2BtMhw%2BcG1foJ2SLIMqIW%2FuXwIhAIAEjSMRCbw4EG7XdUeRqk4Iuoz4gN5OV030IG%2BsjnimKv8DCGoQABoMNjM3NDIzMTgzODA1IgxSa7%2Fc4KretQUCrsgq3AOX%2BtBG5TD5fg5D88sUfxZh%2BZLrkc5fOWk0plnvCAHLtoLOZ5HPXDNi2WCKsxeTHHPnoBtfVbLEER8cl3kazvYypWhT47a%2BkEIqM7AeSQxMz1nUSO6m4b0Qz4xTls39YQFOOWWVnjqsdVCXy6t1aaeET8IFIXQQI2joRxjWHWSIz0IH8h1RLaKYwYort1mjCDayeTO%2Bsx89mxF4J5eyxVCeT7i%2FE7oExwYPiBidgEQhmOlldIfxMJbFIVVltu8kZWOXTelj2mPCfMYyeI8pxmIvKv%2FZrybX%2FnH0S7TA6GBLcY8d4z%2FiNEKSnLrPPjf8qZfdZwyhsQd%2BdLMH8MfuYOHGF19FV5pJD05BsGiXHySleRpzdCILQ6qBO2aRUoHtFMfGbsqW15H7HL9ad9QfACpAj2OjopDkJ56zt9QhtaZYWW152c%2Bit1%2Fc9FNESVkCSX%2FnOlmTxma8dPXq19drg8u%2BStU3PL1p3K0cAY3AjLnX0p11L0qSOfCIWSduDToPcJrr4xEhF6xibq9RyebdfDX7xv%2BElS3O53YFNWTVgbYmuRMfyWtnmNl%2FWaqjAQwNbpF6fNkMHtucZA2era420RGPZZnICRqnuJC0jJ4SMUiCrr3dYW5oxNVlfXyx3TDim8q9BjqkAfs6VZ%2BrUO%2BILFWAHvokWszwvrPOki07Nq8Yr5w5U2SfU3vDRZj77txSB9ERZTBfU1dLyH6d6ypCwUtggrC9ktLZbmHpRVOWqOrCYUDEYYOHIpqieC9phOAEJ%2BETpDOEGD3uynGXMvcWuLD8YtonWBNOsbsj9n69iv3B18r7k1KpvAEm5Mm6H89dCT%2FLdtafLE76jBaNXdxy%2FxQbxP39l2%2FlF8ro&X-Amz-Signature=b68291b36d87e96ad0630044a36f552671154fdfa7b7e603305ae85e02bbe2ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
