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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOLKLWNL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRpRgZhoC12%2FKZ9pItoqSUILcMn5lDHsYilnJB4Mkb7AiEAkzoMz1bqU%2FX5HCb8ge%2FYg4s0XTe6PTlDyqgL%2BUQIOLwq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFigOagteT3ofTtIRSrcA2aUL70wXRFeOPv818oiLJ6XJWC8nzdxzjWA82XUp8ZbzanjASrFeDi%2FiGtzowXfu%2BG0nsdrAezb0B92rtzNSBBG015FXd752V91dwcH0sZ2GpcDQtxKwSdUzuzPHT5iHp7ejCPj4mHXWmAahuWp4mneTsx78UJqfGd%2F0IILKftoCsZ95rQKXBxac8uWGD6J42zw6gy5FCE5WYS97izQ65NnelctHuUs6L0gcnxCd4kKX3Tyv8OUAD0zw2uGrkdLyiRWDg%2BNI2oqju0O8hiGaA6Q5x0Lk8sb7NPMCPwUlZ5maTdviBHI0be9y51%2FqirZodvtXTduIyFZfe%2F8YWibXxW4apwfBWGcB4qqJ4fCIEmrD06VyhaV4YTlJiDNfW3tAng1uJZC0uYKnf9VSOflYY6afh5yNsWaraWAdxcR6ohcdsL7pWg8CTb4%2FTLQXnKoPVpd4lCMBvBWPT2W2auyq5HWyZCGVHKPyg7zErIDg6dgV41VZ714DZW0KT%2BpOqGyozTO54Ns88MPvYx8mTZHYAKBHTxw84YF35H01ah5e5sUe%2FrrpoARxIzCfM906UZAFW5uRkHT1%2BmNALLGKbvsHWxiiVAp0ld0tYcCHRQN8SJJN6%2Flb09p%2BtzuDJ9%2FMIzhpcEGOqUBFlqt1N6gQhisMLLxu83gy1CKW4ZJFdiefQVau%2F2WCsFLjidCd64keFUP0I8YPC9SHSBBc8LJB1NDkwiAamd%2FWuOoMwVXcfIgSQ2s3GGG7DJXdqZQPipM6X%2BjlQ0NeStmGx%2FIQ0pWrYViECZG8%2BNNZ7UiF1FCfXuy2Hrlznp6BmbYPFm4ZtvO%2BtAc%2Bn%2FZS%2BeFB5fUsZXYc7zR3LHWkU9lB24mWdyZ&X-Amz-Signature=a210ed031c18109743db557987caf1ed19b8260553f8a50cba9f6877f0eb87b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
