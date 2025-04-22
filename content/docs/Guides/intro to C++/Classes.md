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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QORNCKI%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T003958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCxarzkj%2FBme%2B4xJ7gz5plUH4asbYwzng%2FqoYTwXP3FbgIhAKgcaDxixQyAvHrnSTETHrdigMfAmCeGwfR0ToC%2F1B8qKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfrQ0GfbfarG02tmMq3ANGy78SMdqNB3GL5Y3Li75D76vOXQFvjAHrAhztC%2FFlh2kgU2KHIAxUP1X%2FF6psGj%2Bhxgk%2B1b4p4JtcOZwVa39zda8fKeiUdj5xh9xbTaFHqBz%2Fx8nnoeKdCRGoKomibXins1kfEtBzGiWvIr%2BCMFOieua363v6vuAHq0IZzo6pPliRi%2FhEkJeZDvlwDyFuRwhkXF%2BTa3RyW8wxYN4ytOt0cAuM%2F2obeVCzlUJCx3xRajLzmQ%2FEMRBTN4rwU6YOLu%2FzfYhZCxjGnn1gdiMrSIS9Xa4HQwE7P9%2F%2F3Uwho2tybMxq%2FASdMd%2F0tKKfG%2FuMptepSLJcHHNftUACKFIO4PvQItaEp0tm1N%2FTEveT6Pe%2BNktG%2BR8xr%2BRbR%2FG7u3BOOW3NrApxENTZkCPT%2BzU6XZwUb41MtLIbxc2jhuCWes8G4%2FnwcVTa9hBITrxR3TqCT7pLXhX7SCMiqSI%2BBS%2BxNMldNcRTv2DUse%2FDjprxu7txwfn2B8dgKOWMGQmdI%2BciempG11htKA5CH9syr806hH%2F8CcOidAYrLo0g%2FXxGmes9xh6hpj4uLhGC2qOKrJyP8mZ2ckEhRU7akNCk2sT%2Fis5jCQ2sx6KP%2BO8J7L6Z7dvkrhlXi%2Burw6DbjIweJTDJupvABjqkAVvkAf1ssGUNsh3EH9BWwrDOXy2ChyZ5YLBVwvQqkxGq9cOFqjxCY6oVXVZBq4NtuNLYnHW7zBDIcihDXlOHZOi8j01DfHlRPStv1jc5ZLQse%2FL7GdZ5790eGtivsJDojpbUz%2F7XTW9gbukhZifmAAkr8J54%2Foq%2BwXYEXxFaa3w9duYUha1DVVQJdEhhVI%2Fy9Va56i6CH8P%2BpJgAbPXPmSjYYvcf&X-Amz-Signature=116d78cc1aa0ccd37f5204cc6bc148a078e62339a9efff32fa574c8fb8bacfcb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
