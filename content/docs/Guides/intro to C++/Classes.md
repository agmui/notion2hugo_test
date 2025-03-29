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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXBL4RU3%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICJtBZzi%2BwGWMmde7j0Oj9kID%2BSjjmXHKHJKepAmgHqdAiEAlSPqLrBSy%2BBOU1QQAf%2FerqnAsjgG6JdcmXx2FRofsbIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDP0TY5CSBNCKUOIZBCrcA7OfaPyfvQ%2BvyBWl7bSyvOunG8l5OOb1RvW3NtogbLIqDh%2B73xrv%2F2mz01gVSERuyUrgjPGI%2FB75rJqzh9OedhAg8l7gWHgLWwivuBED0kuJJRWizuXftuxTehYhfsade%2B2NVe9l2ygwh2JKk6FX3sJDk8TEaHobFPeuCBBZvJb%2BUJDRjC195kcNhipV7b%2FElJef37DlVCAUNqwvVivtkDg%2FiiURh%2FmvE3M60agdQze07%2BNf6nOoXIRUaf3y9SQObcGHv4VmSPu7xUPrfuxu3pqKjz4o7DIfOWcG1znc7aU5ETmX8GINOyhFnPIVGqnCjcCrVWXX22oBpUtLxqR2zZ6uDlUXKP2bX4dNzKpQpPhkCRtEbj%2FmndLq%2BZjBFlhug049IPC2n9plT%2BwEjAcz13binXPGlB939z1EfEF3AwrcZkt3N0Oox1331gwT9EVpyN9ZhWhJIn0lmtjTWCA40%2BtvjUf3gGPEl5uxi7r4G6q93AC5D6SKpN9N7agwnWDzyEjz6daubqXjY276MQspYk2aHlzmJiUyvjdfpeKzyiH2%2BmxALnEDzTJfFrOUSwXmgbKWeBb0Azj6fc5hne96ljc%2BfEYCx00dK%2BqJLEFYTiLcoB64ypHP9mZVMF%2F9MPLenL8GOqUBTJcvrY9As5Po407iTYmgAQnjr6PBPvMh2c7ksl%2Fppr1cw56ndhK%2B5Vsg2vuFAOOItQ4w%2FND6pQUKlNBnrOGhVgQIvJ9f%2FLcMVOsvw1ExJXl97mO2vQ7OWTF61gy9x3en827AETt5rXMzoh9GOWzCqrPVTJP7q3B0H8ZBLxFtZrFG3AMBMRxYX1wLyZr6lDqHzx3nvptpoPU0pcbsmH0KAuw0g5%2B5&X-Amz-Signature=3204ba67cdd2661f5a7256652eab66040b447c3effec7f454f537dfd0985bc70&X-Amz-SignedHeaders=host&x-id=GetObject)

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
