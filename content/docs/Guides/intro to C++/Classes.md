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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PWMHQAX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeraYaQqGxGhZF%2F%2FcvNi8HdE0%2BsqrKLuvfvcrl7FauqAiAlHg8Ym8%2BEP9CqCTc2CkKp79oNxy36SFSGiAZOrhpoTSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWghPRYMMx5w2F7HKtwDLHXVuifkXNxFVSqIjazM%2Bs7LvMJSU57KCaqvqQZPy52PWCC2H%2Fe7J0eC5LuuenX33BS9SicTFEO%2Bw61WwxzBCOPdymepX0bJR4xP2JsnkniuOqCAzppiegPRPoeqnAi1csf66x5wuzYd9Vul82%2FzoReU8iDkVh1viBYxOAikXkTmDQ2pRILItv8EwIvcFp%2Fg5%2FdB4VcxAeJXyC8Kq1h%2FMg6cEEX%2Bc%2BrXntQuvZygcXV1PLJddIa%2FUnx9tXzzso9UgyPYG20Q3pv787hIkfnpos9n4u%2FmvT5c1KkUjRYhkhpSj5agrELtl7e6oRGiKo%2B9Fr5jvpWHFE68Odb%2FSJgagqY5orNUAPE4vCIyQbKuHZAtD8yVZ5Y%2Ffzrq%2BBBDelLiJuqCikProa%2FG2m3VYrKB4ohKci%2B9SZhiuAh97iVx6z9mHEkURyWqupQNcTHc7wLftXJ6vjaOeVGqBW57Zb1fxkqHSLh2ja%2Fdu0CbVosv7be1NbGRGhiPpC%2FccoNtcr%2FmWrIFhsQHLGUBJkRg1YaGPVbfbnMK6EcTFJC27%2FbBuV6LhFdFNw4fzEEVIvBGdYmSDeHhdshFMmf933y7PYpBkDnsRi1m4FQ9hyGuZzTr%2FnqaOiGjrFsjiJGGXqgwnfWQvgY6pgH3H90giHOEgXDWlM7jNXP9gHmTX9qq51LfO%2Fe7o0JFqMNVwWckog7T3plVGkDOxxThh6%2BOFdEOvyaN88LujFww4ITc%2Bh5%2F1ZMRqOJa7GE%2BeK24j7tYr2ln4Rsz8wlqZ8Nj4Ltu9U8zcH0dVWYEJtxnCZv2xodDvcAY7HqBCV%2FT8qDWwwTyqhuQ3Rc45E4XJ0mtCN9qs%2Fiacsmb8EasadFUnkYuusyH&X-Amz-Signature=ec5b0beb9895428a32ab1519bb546e17afefeab365c5fc555b8f4437d72476ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
