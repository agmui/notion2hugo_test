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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PFZI34A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBMrRWkI1VDr4Tr38JLXfJJEBMiH0Yk5fMB54lQMLKqQIgIrfkxukgUfgtfZNTYraYy552ogXeTZgAtI5kUSLVRRcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIwipau9x5dduGTuoyrcA6OIdO6VVtiRywXDbO%2Fl%2FP48bEA%2B8Ljb9RzzKUkJnv8VckPfsqmSZvP%2Fa6B3l49QCVIMlnhHclRzCAed3BJ3eDC%2BUy8jwQmJ%2FpGFcO9LUMMV9FmFLg0JuVZRydcOiCwL13IV4WoboPH7Gk9zV%2FjzgdSus29GzLCLcFdw2yR0xUA2ES0pEoulefhDaD02Ni6wULzhJqSPMmeDTMZD1KKrWA%2Bktl2m%2BL%2BIwHaNJoBz7mS1pGjecj1f3fBqO7FChw1yQTcUU71XgJkRIGOtLqMRatcwbA5Ra2QXH9Jv0nrShq8cw3F1KQHHyKvi5gNUQeOXwx4IcyaLU5Udi1u%2BO1IPrBzM3utbli44bW3JZ7d89aUg1F5HpknXD1PpuXMtK6duUHQ8MT1Up3Nsu2ad2b4VbEuiGtND4MrXpD%2BDC3q7JEpd1z3hksnwSjRnZSgvWU%2BBSRUtdCbrgJOUEfp1qXQ0m7f8EkyzSs9%2FMGN%2Bh%2FmxWXaaMZuxxoXAaNGAJHl%2BwXSytVUICJfJt2GItxwDnHJsjeQdCkYhA5YSfJ9nzru1pZGK8q5MGa%2FC7c7JZqgP%2BgOZXJi%2BWrT481CF3%2Bu7Yj425RbVvYbKrXCKDXjRjXoJnXqMbjkkY4L5xgbneSoJMJrZvsQGOqUBwxX406TMzQ4TEwi7OVWn25FRaSAiWtU4M%2FTPONau0GLSV9b3biG3ZhM2TO29GwFXlKPDfmzM6kPvISFCD7VhN%2FFJAiAt14wVLcTGmP%2B9z2jBLBLkgQ5v0tYNXXFhFJpJkpF%2BItEYfShPHu5PBd5coQZ1TdUl6ynzr9DXMGLqy2i13lmx%2B3tMYD1ym%2B3LfcuJwfAnKZQqEu3iyzqEFE0xZ8qqdQD2&X-Amz-Signature=8c9df1d67f6a31cb25b0f8d74dfa17a664b5cbe3fd1f963fc51d3afa320d2c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
