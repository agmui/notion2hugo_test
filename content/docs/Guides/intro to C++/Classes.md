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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWDT3OJO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIHHavt1egmwpfB7CvDumJcZ5idbvYUQ%2B8%2FVg%2FOu1VjE9AiEAnbw6ravvinranxmFJUJK7YIf09BT6l4T72%2BoZbohhcgqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BIY2f8CCIlif344CrcA3%2BfmntXd6Gpf%2FtqxuEHu%2BltIg8XIIY8cbZhVgDfvWatxKc9X0PVHKO%2BBDtM66h24Obne9BR5s%2Fx6TBtloLNt%2FiYmAaD05EAB4eHPHEkGaaLlh%2F9w527Br604GtSiInILR9Cq9MOo7%2BILR9qhMb3X0fwN4C6ZvKTwCmRCH9ceTgZtnflI%2B6cuTBMYUT3EVHLDZlgOEY5OZbIidSKOqHUbETHrKADku%2BiCJWMA9gN0IdFtXr7qroQRKMsO2wedItczszZUm%2FvmXS5Ag4SheBGjozpVEIID9ZNIRSEnyDi1FikJB4W4NRMSb%2Fv7KdG%2B7alMNhKgI0817cQVKkQznA6ipL92Zw6WVgACHQk8FPAPyzje%2BraeLlRT5QihiLayoMTQSYBXDI%2Fi%2BzGa3nSJmHqribtxz4HjxVY0cU3oXgaob6uYgGE9XqlEw%2F0G6qrQqRP4gxGUw%2BffciK6XxY10x27BE4J8bKFvfJsYgeUUxdhmYPtkqRPFgavXV25pWxEktu%2FX6AvZ%2BEjuvJFaERvT9WLO0kXwQwNUvwkrxVNATZygOT1hBTTGMT94HF2UItT9AooN37JRLKFzUH3NZ%2FXImwFyYO2acSmp55Oc%2FngIZo10etZFPKjzwtX%2F%2FekFa1MO%2Fx5L8GOqUBIs1Vgsg3Reav37c0G4jVMCq%2Fm6xt6i9wBvrff9Ly77Fp7juyFPrjL3MIaC%2BwYrVR5XaApUVwmwkxnUdPryiDxJnHBsaVH72IfVitjnro%2BfDrpS8%2Bw9gPolzQRiFT1%2BLVTL%2BFtK%2BY6xWgLypri63%2B0JaI08NoGVCPDzsg3R8j689BtTJpk%2FktfhOe1qMGsp72jjHRC4b5qvWneDb2%2BHUORNexZ%2BD1&X-Amz-Signature=cc2a6410bcecd44a66237d3532a959fe1488a100c85204e6e50f56b71249c7a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
