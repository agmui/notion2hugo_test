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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP7WACHS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDVy%2BbxUZKeDujgYjs55K%2FB6T8xXlgwIqhYTrkzgVo9ZQIga41OUB51KZQBNOYVipGtfQTimcj4qhegL5bArlm6qiYq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDLrYtVHI8ge16z65FircA3TRqQXb1ZaNys%2FvHGwrOcZcaTNQeeOD7TgwAcp96YBSg6bgNlqNAr%2FWcVIWaWtINL8cyF0flbJ8RrLtlw5VM9k7LsgfNi3cNLdsyzXgKza7QeHwa20jvK6%2BW3oJ%2Fqx7o4O3R30OZSVmHx0faPziG8poBZ5nm%2FuyINW1i64OYIOYwYrutZ9OPbs%2FHTQx6zGDZY7swIoZk%2F9TK9agYsGKMMEEhdfPXP1inHBLzYt4SY28NeGTKsEP7PlqVFdWRtLXRHpqGhReRjgYZPxNquGoC5NEL70532UNGP2JmRTPGKc3R%2FX%2Fia9NO8HNdP2I%2FNF2rYOZfwu4iACH%2Fb6%2FrNOEipa4dLDlOaOs0Q7lL%2Fo1vQml8BWbRZSBnYgetnnlRt8d7K67bysLiBFEuSeJdyleey%2F%2B83oJQ3hjw2uErmnv%2FZdRjsCPmEMFFElO7d6oIuW26oZ9bywZPVsR1692b0JAbpQgem20NxOUE1u2FpqEPRwHET59oTz%2B3RHSlappqwCI8rqfFHIljyqDL3IkQyqDNe%2B2G0QYoQ5bK2VKFxMR1dJimuvR4Yuex3WKLzsl5G6BzPsvSsspJsW%2F8WZk%2B2ySbZP4BVBenasssy4QYTQ7hI9963fgN%2BCrLfFY3dLYMJrnhsIGOqUBM5FaFvpQnR9DXr1Sxhd%2B8tmUQ8U8PrrWaObzBXzRinopkJLZ8N9%2BCPJYdznbdc%2BjleO0OqK3%2BEhUz%2Bg%2BWlDhki8rWbO%2BUbZ%2BXNdEiKyWmO9AwJI%2FhD4KhoO%2FBgBamVEe6GFaYzYwQDPBO6sUUzr2woZhpuyahVMMN5n9%2FU87a1Pgn2rNiuUmutYdNR116WULykkTJeAyD8hxec3wi3zZS16%2FMDrP&X-Amz-Signature=1a9027d7ec3f720d79f5216ad21955fa3490ae436a42f1efe69789e15f89e24c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
