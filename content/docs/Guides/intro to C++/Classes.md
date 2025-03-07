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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRWXBAWR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEl5m5wTmH%2B4JLdI7ed7s7B899QnAQtg%2FYE5sETwAxraAiBxWrfgEJuH5O9dWO9WhcB5%2Bbw7L%2FMKBZGaKtz022wARCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM%2FuOcBbEPzbi5Y2arKtwDcHomwHWzBq%2B8vKNdBSHwuX4ergPn77gc3HXmB50NOhiZ%2B9btBvmJ%2B7QgwZq8IWkc54PQ%2BiPvsjlwkeYsJwy128tDzUV2PHnF%2FwKa5IUP0M1oOL%2B0c4T%2FOIyrhH3oAF79DAW1lWZkC%2Ba%2F5H1Av%2FrwKqjzQVwIhxhphTy%2BcMqUT5R8AUSdS50RdSd%2FP9VnPlOidNL6mYIUEEvNh%2FWtOjgc28pmgkbGRLTpSvbVdaUrR0K2EFTUHQg9%2BAn2L%2FOmV9Ynrro%2B%2BrII%2BRXFKFJteAwiFUuxiPZkmow0OOo033t7g1K%2BmSzGZ2fZs3rUlVvYbDA05cYP6afWU%2Fu4HvVyNefRTKsf2hgAQ2FcBImQsZUYvk4fVZayxkMY66x4v1%2BQf2ASIXgWr6M1QJvjLws%2BYaXBK63Z5V7UZhehErZIpqOmKiLs5bhseAW%2BKCkOjiJO8g7ezipSriIPciE6v6r4O6CYRixx%2BKe5xY4KSDG%2FQWM6D0aWLzRwgLE3lN3fP0Zm%2BIvmVtzNg7sXx2kJEUx8V8GFYQI6sJ%2FiwMd6NMoSDbBNg0EV8SxdGuPFaR%2FbNkjZFqAAbosGlaA3aDMP05PNRxbbtYlBbBnlFNjbtHTQ9eaetMLV3QNrWDl9aMONrPMw5%2F2rvgY6pgEwaNnkVWOc1c8dzzcY4G1q%2BR3WTBM%2F5jc%2FA5jbOk25jrf4uK%2FEftgNyZSZveHDcdCfcEJjHpfr4Xj3YWP9j9YVtfRdbaaCIZUh2CpLFIAk3LmWHAZPRmnFQzPEtiW4rZwURw1eNK5zT3PS7CJeyFI9lyHGDGkuC%2FTyV4TUsHdqQttHaj%2Fo2BE20XRy7z8EENi8cPlcQVMDW8NiVII3AeyARWNz5E2v&X-Amz-Signature=9c5db9b11930272ef0b1f03f458c1209b5bb4c6402da59e494c0a947a418f088&X-Amz-SignedHeaders=host&x-id=GetObject)

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
