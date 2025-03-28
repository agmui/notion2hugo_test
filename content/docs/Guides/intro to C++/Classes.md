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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWROIPI%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsK%2FO%2Bbocq%2FCGaV79Dsapu5wxRvYm0lOX6cfrQAvUOMwIhALr%2FqSH0ZTf7WB98iibvrSKEs2l8P7XZS5tRDqytmY5UKv8DCFcQABoMNjM3NDIzMTgzODA1Igwg9SVOCHE1hYMT8gsq3AOHj0HZysE1GPS%2FQJcjekXc8BbtutEpe9z9lLQF7PeGEqpZ1k3oTkaXa558DACFaR%2B2kFsXWCtahqOGU7dl4FSZcTlrSHelzMTy3OHsQJem1eYvvHWEORpb9%2Ft4SLzC1PisuFyGkIYN%2BFQUtH%2BlzVXxHGM%2B3lsk4wK6V%2FcG5IiCdyxwTObXgeJSHD0AdyrZWPnQ2Q3vI9ayR2teonZa9bYUhaW8HVnzsXmHkrtInEpDYZXznte1PKrYU1U7CJG7UuN84FNdAcPQBy3%2Fu9yaavNrFjWGYbKMsP%2FwBcUavlkNzcqVqdZzUkRppEi4tyu01mNG2l%2BV0zSLnrYMm07oolQFsaTgD%2BOCzlm1L8f1ZcZUKNOkkRkCVcnnEAs3dt6ScOqsQb8kTUqDVaKC1INQKw1H55dpucYgkTWf7xVIsR36r6ZIZviI3HkRBK0uBZ39HxPlyMjqWfGsftPuP0MYA8TxKSbd%2F76I45YgEztNfCjqmas0tzFAsrR2or%2Fp02QyUiV9mGzFXeCEivDUIgN6uDweaLUZXssmAP6XWK9GZknHVBWmpm0KGwgNsj8Se6XTU9ytiryyk%2FEPhOv8NpMge3UVDuZIoG0p3iEX2qkWP4ILzjm2E9dgVxtltYtxHjDa6Zi%2FBjqkAXslNCelo8o6QaWHAD2t6zrev4eoixNjGheAMx3hE%2F7G%2BF7ZcHBLIK3DmvRVG4nN4X%2BR%2FyU5a9r5CQRSinJ74yafIWRNcC9S%2BMpWbjlsKgMt2mkieLFnwxHCPJ8SM%2B7e0KwO4TinARxz%2Fs4oilNvjME%2Fn2vHXz4%2BejY9Qpm%2FvVXtVJPSBnYJCQ%2FJzDAmX%2FWLoXB73rWxR8lGSrHRNmM9pQ4QLKKx&X-Amz-Signature=26853304579867d19f68290367006face66f49e2e90f915419644094cff18ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
