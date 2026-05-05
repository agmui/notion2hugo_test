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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUETYEL3%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVkYZnC5KmWtGYo6eB3ZBZ3WChe1%2BFIkR02k%2B0uPUtegIgCi43K1%2BqTcS5R1YwBeHQA4C%2F5Xh1RcCcFspsofKb%2FA8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDPebTIHjtCpEakmG1CrcA2hO0lqYHKPgnUtrvL4XM9AaPWbJI5zXK27CdrtsQZZqQuXLNp3DT899sI88Xn4hzwHwjK4vq3bmhUP0iRQs27I1qoQt07T1gSgpUmLBvFmrjVuCnN0RD0yCqD6EAZWAXYOzbeTTXF3BzWQFnP2J2gxUw7qBRUdG5gPgPUrMVUGApK6hTR%2BUpez0FFsxXf0aYJ5EnECy7C4W9rNr9%2BXQBdVz2sq5bwXgNpxW2OROP%2B5MJG%2FDmhv9HW04fwplm2hTSYb3Iet3A1U5rR7iScNs%2F%2FqBIM42XAFuzWNMK7XE3UoU88pRJPHfO3%2B8OzX%2BpvzlQqFWxHOpIb%2BVNkAijjDkDtIvxmcOqt7QgLMEEjHHgCk5spzelI8PeSltytTzeEPde%2FpUsQWFSKqVLOkk7se4AxgtoEmwwqUb6kRK2eVDYG5XQA5vOkQ0O6zl2jSHwMoBosML%2FgUqINFImIdg%2FHvrLyP0IeF3jYK384mw8np0UQNgcEMtu%2FnTVASkUMNsqvEr9tIbhezjf4eWrUnFz1QlwWx%2BEnQupB%2F%2B85dEYyQ6G8W4rowAF%2BsXlXGx5OFVl8vTaEfdhOL1hyjOdnn61BEElFghCcMh3CZb%2F02s2lgYtupHoczcqTUrg2k4fWgLMIWn5c8GOqUBUEyBIawWG3aHJTbRAGWsq4Q05FZdZ5lo9kdUTOvSCseKSHvEF0ePnORAtncOE7hX9017gU3HSZhREAESX3rbneqT9xMWJE5DPKLCwG8H2%2Br8QwjybTmD11CuzqaTz5zJL7Eg97hJchFRpdsThjNk86Avgb1fPhC5mziVByXKPMuw8BIZUAhcBkf69GxWWMBnxpxvBsjBscaszkE%2FpehO4%2Fdd0X5S&X-Amz-Signature=e40e2fc94a9aab754cf1b5faa867e00f005b315766a6b46162ff277ee31a4e48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
