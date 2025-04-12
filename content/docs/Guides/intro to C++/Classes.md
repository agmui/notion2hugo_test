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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDWGN4WF%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCeDWtZTSrMbiZMrTzGzxJ2rG5uctSw9qeFFJhhdBRD0AIhAIuRgEfOmE043X1SagcJsW6MG5B0rzt%2FdaewK3og%2Fq2xKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8Cj4%2Fz%2FCZ7urgP3Qq3AMMa7%2BO6ppq4h7cjZy%2FbZIM3Yuy6aOpketlupx0v4UPYup26vc5kSNdf8IzhqK3mnvGeM1y%2FsovJwKPgDeSQujyiQWxg4BWWUspWfSKjGO6URzD2ofiE6alfty7m3H9RMbQ%2BUkD%2B7mEeyY%2B2U3Nzoj8pwoZJ3GNeRqrzj9M4EVs0QA%2F56rQiIVRmBA5RXalNQRhizl0BfZMzo3q38L1%2FUbL204bvvEAhAh5aLrqh12jCL2SMAdnHoSDYCGYDmhQGWsMH7U0wlwrxlOuSyH2F%2FSifWeeIlCYt%2FUFjgrvkkKouxOZGTueOAEs1XcbM0zQAxxvycdkcKDcl5SftHsIAmqzXArHpwrzgllscskYu2RiOF4wkUtPHsGYyrk2PjP71mvLQ%2BJXP4CTiwToPmQ%2FQse2Dwivebt37WyspK2vVaFvJnwh8T%2FCAfIvy55yFvj9vKdH3wVUoLWly8rMCrIjQuysBBY0dpHXREjbbNiTeveAsSxbSPI9e8IqHlETgMXP8N%2FaCk33IlRqVLU6tAlZiNby7XsYeHMG198oTUc7UJNx2%2BqDMt847TGRQZx67XuP1Jgx57CZvA6vl9UWjrb3p%2BS%2FwPScbVvT7v%2BIWRnvcR%2FrZfLdhVemLWDstM%2Fe%2FjCkp%2Bi%2FBjqkAbL%2BLnlz9Oqx6bfy77WfARtYgf%2FenKPKFhRajp96WPRqBeTHCblSDsGXe0IxrpFEOOECrWu%2FXMZxRnEJTtcWKUpIfOgBqlcu8De3uLhYo4qxs356cvByu5kn0f93NpGQjDldQ9VKQoFzoin8mdstnMXJa5cedPpGqRIxXvurabO9hVdlKw5ekTX%2BzepP3xXA%2Fpyyb2zui8jwVomBNyQBVXPTWspZ&X-Amz-Signature=3656d0145a90b12be214ecb36c11def02266f9b05b33796df710df1d1921db06&X-Amz-SignedHeaders=host&x-id=GetObject)

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
