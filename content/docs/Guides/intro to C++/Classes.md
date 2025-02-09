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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626KEHFRJ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3kVnFtBUGMLtutphodmD0rIeSFUuUtR5%2FSXcIBCUpVAIhAPkreGk%2FaZy8Mhfw1OmKx7hir6QBclBqWVB2XFCPn511KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaykiLn7Wrkp9eI%2Fsq3AO9Kzvh1c2FuF0CItrFrI4qxfIJP5kFdR%2BZHbriZDNPuMjc5RSmMW0o28uinj4XqEIoC9Q8CmW%2FgKMJW506%2FOlsisRU%2F6jgCGu8h8sGVTj9SJmG9nFJectpVnZxpZrWycOHLzgJ6x%2BTlrafhlUFgZhcW0qtjVWj70uHITX0m%2BmP5wS9C79qzI4FX1pJgg72Lz5Nl%2Bnsz%2BThOahVUmf%2B2AGQUZ130sTV3JU2NCv3nldgbZRkxycFxKgcB3mUiv1JhLjweqoqt8wwj4HYMaY7oVJKA28EUnFBAiqQHHvP%2FHh4CAzPkwphscZ%2Bmb%2Bv4ks9pjQ9jJSH50TDtCMNsZJuWiTQb2PlCRSpM5s8N1ghNU5ZL4GT472HaQm0sP2Mk4IULHW07U1WKOKqCT8pUlyt%2F4pA6P7ysWLRV9bTp2Cd6wtMtzfKqMAdOeVKluUu1Wn5m96Dz4nRmgntaOxGJ6li%2FzHG7dKU%2B5L%2F35MCQDJYE7obKqMPeSUP9B%2F9cGoT7Cg%2Bv4bvFQfZKHwToafqtcy%2BPVcnII4e0jrnuV3HjPc1XClS%2BKUs9qqIflswRAom%2Fkwgchk2A5jmUDA8D0C7lIuwdHRrEgJSR%2BOKMJ6EboOBFNudJ0K4nX%2BMAObv5WCtVjCGhKO9BjqkAYvNaFkxKaBvNcmr08mbSqidwzObuOtbfC6%2FctXLR0lxDg71YZsqdfqmJ061fWEX4juO0wMZDLSlt7szMjQqNVRy3NPsYQL2ZCeBPuQb4VlTC6%2FZMiI%2Fhpz8GVyL73VYW6F44GKjIRbkCNwOAdivSE0qaXP1vtWhhSJYffEoxmNIuoG%2Bx0CJg0C7vlsQv9g%2FpyPKO%2FsokH%2BfNyj7FCas%2BeInzmQ4&X-Amz-Signature=c16680cb1a44eff9b23b59b18307639793eee2e9181b07acb35fcb13a4577ab6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
