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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645LMAH37%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNTRlM7QWbgj2Rn1zR2b5L%2FOgoxBGzFCQqlAfKPBqorAIgJ6p1XqMHjSCijLSJIB%2B8gsCRZso6uUYk9cOAE0rXmPYqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHknTtehh80iU17%2BeCrcA0%2BFTuh%2FGSvokMx3IHd6wRj7P%2BXQ32WIpVK8iROLLP7VGZQf%2BUgOifqaIJPMeVViqQqQcR%2BY%2FbcNLJ8DiblmQ5ygUTMmFEehyvK7hm%2BLdJgCVIGNY1ZwE1oKapDLURrw9mvccFmTjLjz4tPfGzBUBLumORzHWDd7GYVm5tsICR1%2BnTXLQHWr3Lhyejo%2BjMdDLzlQUDINsXGMd6ciCDCdO9wSwRelw7taiOo%2BiAn8TrwpNW6h%2FrBdktoxViNEMlfcGdE2xNv61ccxkDzptyyz2GYxNSbXGXJryHZoQQWSqsbZUG3lH3FvsLuoKK1ioBsuEaqZZ0jxTxrOYC9I%2Fm0Ycp0R1t0lISxl9K8dJayV3sA1Uz%2BVrqSXljSECBAXn8tw0QFb4xDTf454mObNm5JqS%2B2HCH5YJ1w26exw63bRpr00GcjeX8GFWFxSCTWQ4Di3Vb3f24kYY8leEIe6JJhk%2B6ElgAMBmc1uhmcLDJScPCYaBsviEIr5dyfV%2F3wRc8v9R2ZeEWClrVxRkkb3tJZJYe1Emtp2JYiaCLB0T8B50DI3r%2FZSr6xd0DwQAGGBiruXTRt8q32S1nZGbuGejzXJf%2B9NWaP74eBlLqh7Gxgn5ltY7FmcfiUnqgGRy5zgMLzaksMGOqUBdo%2FGe1k3T6AMDxu7evOO3Nk4oBKPt83X1xJY0m5hHF4qMWtoKfOUIFxnkS5t4e0GAPLWxtFefLApwwsWpPDYOwV0LUoep1AyHG25f0fjF0tInwOyMvOHaE%2FX3GfKpo%2FODY3%2BnrpXn9Lu1qREuF6BeSslP%2F3A1nUGyvHVUGwxaYSixLwnqEqoT2rz1F9vli9c3yDtXMdarfLQUC638N6q0kHUUYx%2F&X-Amz-Signature=40add30eb4e0a3cb5c500acb204975679a89b9c7f5c8ee4b995f4effb36b19c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
