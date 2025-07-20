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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PXRRQ43%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BI66CVdZ1OPDEkSiLteFr4i6rMVQD%2Fk7x%2BZBg9g%2BS7QIgZnqg4L0ST6WMG29s4t5RouQ3vM0DweprnUpYC5q8YXIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhomU%2FS2ISvThpHhircA14zlSzIGvGDnwkBw3P6A9StGhJS6L2XOv8ogUYkOxiIDktcMcL9Qm1JI9WPfEgzoQuvnktWo6EntDbUh1SBB5E4dAcbaMzfwHfbwK6RFHr%2BWSMbxc7DbJQ9uuWkceroY4m%2FGGCszqzIam4zYbJHZc85tqkJ0m9wyCHe5PSjbsygNxQMUDURGYL2qtNvXL30g5mGRhiKsfkj%2FIc4sK%2FeimvVwL6P6aD0c0q27CPCXaX%2BHdzj4MpVXeJvbGC%2BIpcpySOGI9K%2FT3YCM91BIIHLhbnB%2BvvdAJgdTJr3yKkMnUUC%2BeRo5Z9ZcNMkY0dxDj5E3VtrSZmXmdsbaxenWjI7DQg3zYDXIBovaBnGQgV9QDEqj3v9c3qCbMgZmsio6WPl0ZEITHDg8otPjHw1iiofzoJQObJi7rZUc%2FCxBg9LjVkilldyg5s7oSBbKxQUj2FceXMFnbwwiA4FlGXjORx2UNcVWQ4LxwXRhO1eChQuL8yCPYJdsS%2BqAkLrsWNcHbsCMTKkfb24WFxiZ6xhm7eM%2FoqnVIdny1u1TAqg%2F6S9WYyyKtq1j7iYYBmxc%2FuGisOPImof5cjNulXHwISyZED5ThnpiZT83rYlsSTvemq8fh2bTNTn5AJHEHwUqQVtMKn89MMGOqUB%2BalwFQ09dvhXA7aqHv%2FybhnHjdtiQpTZ5%2BPDS69OBumKGDnYRpgJt5K48Vwj6nHrpZ9yBqYbH63DFGTpfTbgDD9w7%2BJ%2BWEDfN%2Fx6oazdtAoFrGYfYekVam63VB5kcfYPlCoLysjkmgEnKxktd8%2Fbg7ezrT425tao0uZ%2B9YnZ4kcpnhzgi1C0MVJlprqAOKd6JzjD2NcLKLImgekujixHRVp31b8B&X-Amz-Signature=9e7cccee6a25d1c4ad3d11e48046ef10f1e80f3ff94e7676e55102d259491ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
