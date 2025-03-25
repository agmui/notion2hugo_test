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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYGXGY6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEYu2ETYd7jsHrKd%2FVa15DXYiVWDSLWW1r0X2UDLyBSAiAOFFLGqFpknd%2BYguOrCokFIQZT%2FmEWcT5yMqQif17o5Cr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIM8ZcpY27qLAstf%2BpRKtwDuZU1sWrFtT1%2BtjhmJRUhGzLWlnm17c7Fqz2HuQQD1QK7Gyk61ca6S55agSQYnBTCiQDcpTOpx6t94ae5c9QWdyI%2F97ySozzkbVONC%2BndlnFAoaAIcCUo%2BkTLpinZNj6nBxZmqcbtJ48FFOOn2roRltvIMnZSONJH4Cao97VQY7uP2yUGEomQBf8CwEA4vV6GIScHiwmP91Ha8ERjTN0TC0mKx9jDUkEe1F5uHbsUAE%2BlGJ5ahmF0v2Tq8qVYn6D%2Bp5OKAT%2BpZ9qxiNQgY7PtI%2Bsjk9nPNXdcFJgrbAJxlOpxyrYS8K4xooLfCzIQpcDO%2Fje7ASEPGu1%2F3RidKjP3IU4Nc2Kq8PYc74lBKqLrjiB9pSWdlj9yQsWB6BymmCcAB3jcicyO6iLTA1BxIIx3PdQkzg8%2BiAxVBbfl5fr4cl3hCJ88icl8CZhlzStb3qkRA2wKMCV0jtixqZPn2VGDV9WaQlH%2BAaG1qLaZrC7cjRuWVeWrjv5jFwh1t%2BebF8q7EaiBwlGpYKvDbxVaGca60foU4jpEMa45udfl%2BmjAO3gpY%2Fr3jpXtBmzzAqd6LOy6lIyeOqWDwu1W5vmeg%2FDN9728RWeDqV1dYvAot6rfDIES9ZTpnCMGF%2BRbv7Iw4aeKvwY6pgGv%2By2b1EDZFIzdnORAFCLBR4szO7yiFGUx8mS3YXS%2B03zmj8VHL7O6c5lWqIBnUo3Slda578XwJl0nM%2FiFyq1IGGLHSygkXQO2t093t7UctOh%2BBkkvkQQ%2BmrhMcNsw%2BzGbBTLXReTcc8saocpyTWWs6BHUuPsLoHovXkgfpZzbvGu5Qa2Vm73xefj5q3z08xAZoa8yalsQURegn0Y5vKdY3KW8sFkG&X-Amz-Signature=794da6965185636cdc909714bd2fe54727a942d2df222fa2c812053f95eb28d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
