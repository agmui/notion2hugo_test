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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FBLA5X%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDnQaFra6d8Ird8W%2FARX%2FyqD2QnKH2sowD6C10fL1lyhwIgf%2FNz4gpkXjdXZiUYkSzkdPRebCG7FJYH1b4M%2BNr5HEcqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZ54nGWUrp2Cp7GjCrcA3dLA0I3jyYAzMnwaB%2FEIDjFgYfPrf7hjo%2BgpZxk2IqbJtHc1mHtnWDjadWdtVQPDSAsuzpyoK5NI7Uz2eufMSkDcBYGAmD0%2Fm603a206PioLXbMGqwqCAfIk31ly2L5wqyKQbdN28LkVAqUSqrWR07Wc519igkqN3Lgso8bZ9qgjG5d%2BR0T2GYBcT6VEHCz7tbKhtRmBsBioNZfDzotKjE9W9DOrbvHrEH7Uw3JZvMTBcwW7QboqEn82akeaqYWCEWqaik5cS1QgUaPXtQDu%2FmwevuU0V5M8nJq0nn6akvmi%2FZ8fl3fK7pM%2BG9ozbuwB9I%2Fol9dcMDAgCO7r8beULsjWSIDuNVle9fcMEyzn8ZE4Oe4jK0iwR1CLr7LfGjosAlkPnfpd%2BEDL7wXs3UoG2%2BiDilOsJeETSJ71MdE%2B6fezhkBz1UwrmlC%2FWsvCbvwJ3E6SDLVWd4WodzCm%2Br7aUu25HPmEm2CxvbmSCv8H6UHw2zyzFrLYfHojFkzG3EGazHjY2ZUXlHvGDzIe0FwB8wY4Qy7hBnWF%2FOJaxr197wvoQN1ZeBPGBzj7dz9LZdkIYFxcc2ah%2BQwOlcJLJap9Ghp9q%2FAjOD6GE1xqfp4pSsYejPmP90TwV0Gh%2BMPMJa618AGOqUB%2B2K%2FpuIdqfSEDw%2BbgDEbEhVvcDEj0ejZ2gmdQBv464%2BWGSm2l6EhyQ0oUl8C2xhwqtWx7w7ae5a%2Bb3syYKBzZwPUKqk47gCjx2oaDLYu2iZRumWuRzXDfrB4x3l10rG0XI1OQbKtAtcpEWwFVWvFQON5fFDRpN75gxuDJegZ4C3KcGtzKZ%2FqohsqDnEDewDtjsqmbUZYUkl7gFwKxsoZtiNKxNeM&X-Amz-Signature=612ea00df5a4c0e7ec748eb68863b368f947aeebe65a6784ef855e967217bf4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
