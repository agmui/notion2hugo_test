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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOWFDNC%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIDSIbCZh2eCZ%2FfH38kukS2i2WKvr3wmMISg3I9OW3W3ZAiABQeXkfaDah%2BKnJsSFU5BwEAg9rc%2BobV2Pn6L61hXjGiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWohUKS6qmj5hkvYpKtwDVcNlN4SHvJRKV%2Bzu7hdJWwGFXiXFcL4m6fYvmRiclCM7LN8S0srTYppzf%2BsP89Rs6P1yR9JiSPV3DX99e%2BwPOhSoX1sAnpWdLjOSeXgFH7C0Qm850reEFwx%2BQOyIDhFtPWt6%2FQbB61MBXsdhFFGAXARv8pRn1JGlaOO9LUv387FIywjbT2mN%2B617Bf50hNWC6rpnBR8%2BUF7W4RQq5MtzI5k5z%2BIjAVY5BDWebmgIaCSqWzQTSjqWtWf40imTZni2YUNTbqwmRYPLyYDIAvTTgIZl%2BsKP4C2Bnvizn2T1vIDVvGEz3XgjA17AiBGSStWQkNn9gDTSUXRL%2BxfPZJyt2fkyCnpFby9HwzfKBtnr6f%2Fvs5IwOlehx2wwDGjR6NULkevItd2uq2Jy89IYQuXq3mrIR9vQMH0Wnlo1jYNa%2BJas1Njd62%2BMNMTFe08KSQiTYZgo%2FO6lF9ruwVoQu1zsUw9SQDGIZlon1U3sRBdceS1PRQ07uzl8XZzcWF8ZqDoCATCvemG9tMuV10ZxpKB6TL%2BEILMnNaXLQRNjpjRgdwkycIfMLUeDskq6kB8DKmlNPwz0Gu31DC6J8nsdz896Qrnr1dyViOAFa8x1e5MrnqK1a6UXRzIkpFWaK%2Fow39DQwAY6pgENUFksZfY5xbyYUxNU5Wf6KgpGIU8pFe4f1o8RuYo%2F2v3HbF0LTnqzsCjr3TaCrSY1eHJIz4hNF02tMgBPq1t%2FerlY23V5x%2FV1DlwWQ2WtmBgbdrfiCr5x5BFOeVSbkmlaOubDZwoR60B9h9QfgJ28WfupfIEZAActM%2BQgoaL7fFW9FXHM5SS%2B1lpK1tMkODAZYBSOTmpwxtoHQUXVxHPH7wpST4XL&X-Amz-Signature=b6b213d95c9dea73acebc810c8fdbc69dca2d5cd5ffaaec47f92c61bb6f1a1be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
