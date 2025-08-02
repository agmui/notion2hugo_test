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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WTVVN67%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1%2BXM0e0cKZuAaNLV0NmOQXS4eBBlxSyQCojWvXDnm6AiEAu3O7pGNC9OHNo084Azs9dqwHfGcgexGI466lifEaqP4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNAGQL28nZP9tOLsZyrcA1Ux%2BtiKRsuYXP1Q7Q3uwTj15%2BY4oR7H6zyyTGGhgm405hJEVAdJIcmpvJcGmpEud%2BsRCGWw9nJsEs43QcjX%2F7VfbGVwnyc0gqDWhiOxQCrYRrsaakvpD%2FPBBrnXgeCBLsTrxOzn6cNTyAAwgdip8Hl7T4LPoYdkRrGMZypgLFQA2ZiTjt%2B7aJxsXRikFUByOk3oH1aVK0F55RnF2nJhAdYLvnzVqYEMgiZxNWv2uMy5DUHVgYnz%2Bj92Nmat%2BAT87gmtAWnfbrigR2lbEMn5Hruk8ROCR7BaIE%2BEkavTkWq8v20NZnqUpi3%2BHe2rHzjoBkzPZPs5BZ9N%2BtNPjwhFDWsPHwTqBDLIb1QtT4yimaymUPYCLhSDwNKcQ%2Ba9iomiW4vAfaFrlw6aLMsIfMH5xRz%2B1xcrxBu%2FeM1ACEQOzMedbxXPdxjyX%2F7EQ%2BCpEE51XC7a5llb27%2B3aqJ1v3T%2FD40yb530oHWnCpjAQ%2BfAm%2F9E%2FrX8v847jA2GYyMp4ZiTBTBGdbGvFXYroN8AfKEIxjczJ5NLqce4AjziNdqVt36kggs2fND%2BG%2FyHB%2B6a3mlIMtfdW4haP%2BCv2Ci0Yw1LM1ObGC%2FM9mvyUZBeavm9JPHrQ9VPKYb4dWWflJYzMK6UuMQGOqUBja0XNDOuqmnYIKpwhjwhCH0qmTjg5Qo2toCxUziByOq7xZvh%2BHEj0P6bC1fYmzFruypYqBkXgh%2F%2F8eFXCFr%2BODamcMiIUT0v0gfsgN%2B4eoT3T2fwkhqRi8yuaNDhJmU4GWFgsAHmEgPrCFznNbklXTyISxtia%2FiZO8gXaxnZshg3kLRC84AWzhYdMiQaqM3y8h2BA%2BSn5kPgViB4JAHi3xR%2BpsMk&X-Amz-Signature=6c92fd0d045dee28830e031195d2655c89d2e72995da3fd9a3a1e907cf75c255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
