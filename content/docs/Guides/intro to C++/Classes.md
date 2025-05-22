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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WX3WRCP%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDniote419XoZ4AQnv3Jt%2FsUhRfph2gYTtpDjKKtz9ffgIgB8XGCZ1DlrMXtre4%2BVSWDXrz8TY1b9Jko49eCJfOVFYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHxJHz7Yy8uKmIoFSrcA6wRrPH9hbYu0ku5nhiOFouLk3sqn0rjDboIhebgiGCJStrLLsnI2lChV%2Ftm0sE3SZMCtj8U%2BjJxMize4%2FMX8aEcp2LSIiNqWq3tChHclh7ZuxHhCrGYvonRi%2BjVMJaNwx5w9euoRWIN0Gzuo%2B0f1NpXLJrVVt953aOAJCEcE9%2BjBSdFAnKzpimzx3EAV23ghFs9iMgQc3HtCKlyX%2Bxr4LTP%2BoECNd0ivHQ4E%2FbzRE4a3q6ljEZUAEZ2jJIhLCRBvRERl%2Bc6uhtdw7iXRNXgMPUYrjYKpx1JQKrecg7IeTUVwYrlfDXqIZbScLe7D9JuCGbGlThSWZzHd%2FwXdg5SUYqQPm8XnImkunh%2F0qVkZDAh%2F0%2B7bAFjNlzjuq2ChdC4icKTot97j1LnzqWMkNBamiuwwEgcuKUsslvtSUYsFvaKe084zXqSGL62RQ3sRwQX4gJK2d1tAJrAjDLWGT1RYA5pyFLXNcNiWSOHmGQCsUyRAzkwt%2B3mhO%2FX%2FdORRX5Q2sWVI3XdnjwtRTs3XAEnNd563wAdMJI6lLgznqxiNjSpaoeBqonSs2FVNb2BaAjWXtnQjC8ImibOyCpPn4gfJgRv21IcyCyErNib1XWD22PgHDidry6jPTMxyhDwMPndu8EGOqUBdAemFc1HUrTd0sWLKLG%2FLUwnCzv%2BxuNIWWDLMp3iFVQROjBvnwG1vy2XQkBLYzs9gamSoLX5Tvgzx%2B32YOW434xFA%2BvS%2F%2FYPESP2sfT%2FxLARlyvfaXSr7zAin%2BD3pwMsRFpkQ2eH5FzlUmjn%2FbkZpRn99wq4X9EJLbAUFTRzqxDlajzcAy6btHIjS442NfO0voUgLPmfvxyqtD2DxGmRIShLL%2BKI&X-Amz-Signature=29a59df76c54d3ee779a50fa7bdc736e75cd1304e69850ef636a0177662d10ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
