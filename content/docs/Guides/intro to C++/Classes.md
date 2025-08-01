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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO7EZ7K5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFJZfTV2fX%2FGAIhfjn5xSINNkEFc%2Fr1rfRaM7y%2F4%2Fv4QIhAPo9s5ZGOff3cocSnZbGcnFeBzRCpHPNX2dlgGoiEdZwKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU6DWXeC8jOY5KWugq3ANDxD7dE5%2FkzSTz43ynW3uDxLMNDMbIun%2F%2BGoEPsBRBBoF5XmgL4qA0UlZ9fbj40E0lFUMPfG2Xx77RCUOmJjR2PpP9NXKdMYjVXLxwVyO6jYVt7xmdOABlU3bXR8fA7l2FdGG0yjgnY1G%2FNBiTIeGseF9Byi9xyUMr5A0quajVB%2FcCN04MQijN2km64t5Fn97WfrZNzP9Rcc0JrU7%2BrPTTSpPYew57BGLyfZijZVDgL7%2FEMIIJ6KraYMeq1FbymDO3kmxZDi9Ht47W2ag6uCxvLHF9fm%2F4MCOyB4HZfFYuqmoLm43J75sO4ZoxO3rw4sNwtdXosq1c1SafxOtC9zyY2eeiVglxf93lMl88458HKH2wdEK5LptG8y9cvuKkdJx4LikFF8MfCdmW6WiigNB35w390OCPRgMjVrSItFqBQ2CjO9wPzvZ5GtSPbbJZXKevH6SKreuOtvPXCS8EYpqdRTaLbFMkmaQMvzkHGE2D0YOdfMn70LyVSMt8yGOfJ6gXrpiN9YWRFaz0azWHzjbLz%2Bx9LtD7l1z9JhD0HJXC%2BKGjqVGZGezXkC%2Fl6bbBBR85HrNTCes68g4S1ZYcS60rd3BN04cSpwDqeiqcM%2FlsefHbrCNL0uCjC3lObjCU47LEBjqkAYaRfUpvN7ADG6zl%2FCmmaUGxM%2F99Y8dfFbwF2hwFG%2FlG%2BGRfvI7ICgfgbb7zWzYIazEVCk42KHTL8kdsmaFpRNzzRw30h13kR4AWa1gCfQbbpFkHWFY5%2B%2F415FMqwGyC47hW7lym99qM4zvvMR6vzwk1%2FaM3FVQOA5UlG%2B3vJS8QsiPosoHI4gScc1M0O0mBDIRUgcwRSbRqr5TIQfTVwvcLfoei&X-Amz-Signature=d799be840754a0a0841f67637e60e14ce9aef217358837a8eb4ab5461f703a0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
