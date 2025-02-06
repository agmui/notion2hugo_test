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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QREOX3SA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIC1GmQLYDHmj5U3XSMNl2aaths2WNO9kyKyMYhehFP98AiEAoUEcC1DNWd%2BkNcb8odko43w0sAYZ3plXurLMw0ZXH5Iq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDGPcvPcPW3CwolidgSrcA3lxITw0nny26%2FXKMOwcVOgk2buAMJVPkivFzYTqFXR3roZnZ0iiQiv86eQPgnbDL5mvIBTbuydogvNeN%2BSeLj0FDeS6EhzGSFCaAd1vfT69rFSxy7OZAqfJD4Wt2EFHGG%2BWF4JKzvKP2QrQzIhnyi63MrQwKwkm%2FsmO%2FJ5YEYHisN6%2BquJ1oNUBKw8B4gS0QRqdIwIY7S0ZN7Sgh%2BCvfVsprOHxioIPoRqJlJrK4aw%2BkeEM2RwNm%2BoLYLI2fCb%2FY9W4qn8%2BSrYDFb5bZd%2BJtCAd58o1wRbiJIDo%2FQEA%2BJC1fBWgc6fVwtD%2FkkyOH%2FNpNOCVqzGNw%2FKsdveOvmsqzuvnUaItLnKHXLk%2B9mjO6AUaMcDA2gYiiPxF3BPkZOb%2FybnPKZ7nPcduJqDNhShpJC8ZRtdm93CLXC2xo%2FZIRdw3n588dX90AiED6LG%2FhF9sGnQd1CPgAXk8zY2BPOQKTdsLO%2F0wi9WM6ETgHJMFHjJkS6SNIKH20HEklgR0eZf6tcype8ownlEvnShzmySYNSTBlWlsySmXvUWPxjvvNJz1hgafJYPwh6uXBypF%2BDJ5bfa1bQL1WY2FdQ4MAZmHZBGyaqYhxBiWdp1Op8sAeVXi8bzczC6%2FCIUasFXAMOibkb0GOqUBf6cbIApanP1E6dAWxjKx6ETbYvUt%2FWdinaoZIDSm4PgCNXusDy5Dt9KCWtUD2tyP0n1e9fHMrMA6xtKL6WRY%2FB8G7Pb4xwjEFXxJiXKWHb5KVO9OoEVM3wttnktxClt3JvsQSzdjiaLDIXwq4foAkezVBF%2BKsVvBipGlb17X63otEj5fXPB%2FlfbKfqjVmReETjvPyMk4aMDKR77KE3dyeLCUmJMy&X-Amz-Signature=24f0b49c24560ff078ce501039673c7d62414d931b44a17a6423af56df090013&X-Amz-SignedHeaders=host&x-id=GetObject)

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
