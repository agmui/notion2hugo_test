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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRTJYNNT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrxDhkXvZ6KmuGJUYIA6kmt3IigwpEg%2BqLWshbkLc4jQIhANNAf8fp8TYZuv3%2FVi%2B1Si9Ifs%2F0qS6SliMUeRrcdkeWKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy67fC0yjpLVTl7TMwq3AMcg2R8OnSxgkvtnlMsX8GrNZjss1A17cAQvzIYB9o69VzPmZf61Q64WEaUcObex7Zfi%2FWufbblDyXdtHiTcCOykri23lTVYV%2FEw%2Btfqymi0SOt%2BXgyYW%2F0OjBTBWKssNityAxA%2BcHU9xF34NyAfSlCL%2BCEwDHRIncoS3%2FkRWRHbqLX0Sy%2BiDc7F6Pt3qRrpJk8NiKmC%2BE%2BUvj3CvLWWwanXLzhUm9d3ehXTRPbswbT3%2Fkxwhpt5x10XbPkdv%2B8Z6orCakeTKn4go6VHwvku9P%2FTxkR%2BueYkvpIlIVru2WAY%2Fv1ouYSRu3O1N7F5XFdjRbp9yGv%2FmCZLWqTqLEvhT5uJs91wPMaH0ZSNpzWrSEnRO%2FLPRt8bK7BL6o3TeOwzD5RJqZ%2FDFRP1ti99eJdx%2B9ef4thgeMZsRQR4a1mqxXcUkPdwV1AkNMd%2FNRl055CJ7VNiFSpnK%2FFJ7Vmvsp6uw7yGEWhlNLuQcbmli2ii8uVbDjNlPhz9C8yof9mNI%2BeV5UTVBSKohwWEb86Rg5%2BdwdgWrgBdRkCdkQD5YnqAYxN3KrS0Rrw6hvF1XJBT4fguN%2BH6trRbnwIMSJ9ux0xjiqBVverX6sWGP1xUsx6C2tIKzMLGs51s%2B0trVU%2FZDC89629BjqkAafu9qsflXmnomgoEG%2FgGMnx11VzxX%2BjvdzIWVK%2F5MBBOglDOl1E18VNL4%2FspJubsazbU9YO8ZeJpBVObbbeusSlIx0mdfWQOa0oIVLIWIqbtLp4LWzf1QNkbh4W6pXI6bq4JbvTGapw0n0OO4cOd50gWT%2B4ATgbI8C8WGiS0H8kR15%2BUbwmIastrqi0eOlsPsJHOjWGPf4bSgwynP%2BExyLTl88C&X-Amz-Signature=034521a23c623e5326ccdd8e68888bbef671662c446d981ee9ebe7818b94019d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
