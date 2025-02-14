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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKRZBOB%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIGd6clUuK6y9JZ%2FYKyWXGID7a40LwlZ7HgVAx64Aucq5AiEA%2BV2C%2BSbSLS%2FfeDVaOH0cUq3yh0Nh74IsQQzAqRHrgfYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDDhuiP6rjcr%2Bf6hP8yrcA3DUbPCEDEph4AwabEt4JDbQhtqHtspIxChJXqcwLbfXzEKOBasyEziGkAWe5IvGFVIcJdGKX%2FbaMGOP1%2BVa8cipcMZ2GU8bijDcrxD0bsuO9FEG1%2BovfaygtArca3Un7%2B6JF7WdBJoTF2%2FUIEPZ7eZmsXk8eSuDK4ECm%2FTksSLZ31FcjVfHn7e8UOs%2BC32swLg6H8aJlUuqdKv7GyxUDWP3JY6yomWdVBdYJm7vsmOLScauF%2FaecPpA4aQ%2FZmT3zTPD6TTbadhN6aV5hFXtfw5K25kEQFSvQ3NGpQaRLtTP2TTevW4Ck22ZdNEAlMUX2Y1b5auwZ4aydUzgIOVTECFF5h0tmKTwr54Kfdvb1FNiTx1t9SYvy%2BnWw%2FbpyGJ3Uq4Ol2i5T%2FlBc2LRdfS4B59BFiWo8D8OuvoghgcHdZ%2BX9p9qLDY%2Bjp4ufVj%2F7dprSpr0hR9HrD9HCRR1fdLUsCXlGX4xtn3nLwFZIEyhsCOzjZOORjhFSxJnx5X5DHn3b%2BF%2BWWol4ynWCtvNks%2F7F4XWsxehstypcRKmzmMx8KbA5mRtWkFhhpiX8H6GPRffimtMFEhiYB4xFHbsEqztg9epak5bY3fxBRfpJ87JeSI1wNHE3CfI3zZbAXH7MPOUv70GOqUBhcgAzWoKsWOQoL5WePhU5ZgeQuI8L4tEpSgV%2B8pj%2FAvVKo3DrRSc6OKkJ8BaQucAFwOlLt188ckZxwrpvt0ZOW2mZqs2ln2FVd15tNmJcgOMm5r%2Fnjf7YnVsbJXXWkPJIp4%2BntfstpmlP8TxGDFL27otfKmo4DhbckPVHpC5pHWPGWODj994MM7IqLn1%2Fmyc12qAaoyiTnWfxXyfF%2Bs8BH8AkS3K&X-Amz-Signature=529e69ffa62cc74b63011adb9e857a1601f5feb699dce27e718c101b0b3c3a71&X-Amz-SignedHeaders=host&x-id=GetObject)

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
