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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQQTZAZQ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmKObsAYkUtyoiRSclLATRY3Nvj44A4GhjN%2BDkeWAS%2FQIgJCni99AljpznQHh4CWwhXVhV%2FEdSJUAhyTwmpmaZfz8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpwSi8uX5m%2BiY7nNSrcA8TcAaBitymc%2Bv1CheS%2BoHAKogsd2ws1uvDuAHWdMPndCiJjOsuDWTinR9GUTypSd4YcSfmClgkXASMj%2FIPY0XvKuhFQ1NfOtPLE37%2FPRo8hx54UqLLKTk4ClHnM4inFNpIsFX9bc4n4XsNIoJShU%2BScBB%2B9SQHwQe%2FCp4x16qZ02DtvjVbEip243A535r7N6V9m1WQvPSUFQrmrDtafG%2B%2FbB6fAUQ5qRhDbYifDfOtVoAEde5jMxzxPxnw%2Bsbt8qLJWpZergGiPT1FD6Q%2Fi1XX6Lav76FTIX8xPWG0SLpaozT3ShTKcBXJ5UjfCg0C1U9PhON9He21tgo7mKc65meTaynhNIylkUkQUGEpuMALYyjGcOTEJRznoUKS5HVHezLS6z46ZPRdVSjrZY3HCHmb%2BcAPTPc9K%2B9clMrOWlFRcIxZ8jTSuiwWUoJ%2BhucGcTSn8uMmY7K9piLqHSojj4t2BVyL4kvRXetiocbW6KKCNDAfh9NhTHpiui0AZGQ0VDJ0v2PX1vGIU15nazFSyu2dDjIorb%2BEe8Ct7MB6e5dMab2EzIZaPJv%2FgiWrbZzm1gfOo%2F1BSEHlXLkPBzUX%2FKDnKArgjbE9cBrD1wxGgOTdA0aRK%2Fj9%2BoknMWWaHMLuH7sEGOqUBLg60Tx%2BloXNAfvtb8Cnja%2BIGDdaoUfxh8gI9cosXxLhDvUxoJU%2F8J3J%2B%2BwNvkOpFXa13yfvPN1ljltDwSbfsqVUIWb23yvgJQo0lmAWehMydKQPl9DdK%2FoNhlVDajGIQ79U3UffP7q%2F48wnu%2FUqemet42DiDewEQtvV05U89lXm2M9bayp44%2FlarwBvUpAutXW5LIS%2F36tc1uSm9jVqODxVjwQ3t&X-Amz-Signature=aa2007a175198f2bd2b84cb5032172660c65974ef22b76e6a3b16c2d4fb70d74&X-Amz-SignedHeaders=host&x-id=GetObject)

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
