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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDB346R4%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvCWBOsgxcZdyBUKGx1%2BMr9TXw6dghf43gnCEr8q2tSAIhAPg1aaCAoGIjkCMJVNf0N40cBL592%2FfxfVEMWsP18kHqKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaqtrJnY2mEdSwZfgq3AMc7vFF3HR730Cee%2FZ2SFRxH2ajzHqmMxiEA42QFXKSsvpS34KdNObE8vvfsK1ceIPJKWqu0%2F2oPRVVXzQEoc4zmhwsZWZ%2FfVrJKFYTN6CPYqUgi3YB3Lb3r4h1O4wA3fB2g7Q1jAiIhpW2bBQlY1mVHVGiNLdxFaPCb8qAvj179Od4u7RFS2aI3tpYGk8IkJ0O%2FgigoD8nQGchLyVO0H%2Bqucif%2F3CSkb%2BOi9CQTSVsr%2BRA3TNJ%2B2w3t3dtzmGLkrUBeYGA%2BgBkbtkJeTKEICwCMro2JNl2oaW7np6w1aubCv3ZxwTCIccbJdiPsIKrI2oBw6%2FJ3%2F9pIrZwrcJxwWwsoEuC60jPilMfq1%2BJ%2BgFcPwUG1l832eXbQwi2tkhtw8xDO7JElFWEjGWGTMj8Elr0Ul6YAsX%2BKkoxjf2nKlUQyi%2FGzkLHtkA3OZGpYxVBXd7JLtUFLubIC6GJ6wGs%2Ba1HpMWotZoIvaB4KFCm1D0FGV9WKAmdzM3KzqAW%2BTQQyuEcqCRmjwUTKPr2Od%2FmvNTyJq2lOMhdpfJucZSeoZKkMF0PFz%2FmaL6vdAnQCpB6uyDuYXp6NaDU90yA6qK10PLnbYc55mv4d%2BkNvoOLrIyCbzg79DiMpIulwVwtVjDewIC9BjqkAVbFmPo8wrcwWSa4p%2F8r8Ef%2F2U9z8u%2BVuDtW0kBfcXsI6pPqU9zGPm3ObnPUWJDbT1f1h3g7F6V9XU7zxPoJ%2B1fArvmxTPobO3VzxdbeWYgvYBmBIAeqaCrjp4vWQQ7l43ZW7btlxxP%2FAlkoUdfl7204s7FTfKDWFxFJd6vw2CfcdGkYK3RTvWBqV3%2FSeu%2Ffnkc6BxrnSyF6UaEoiuXccfzkJXHA&X-Amz-Signature=7c63cd70a0af1b5c22365199a5ac8621cc3d2704aa92c610014400b1e64d8dae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
