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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GA3JES%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0O4gTiA%2BONC7xBAH5wsX0WkQcbE0eg14%2BjJJgIv00lAIhAJjnsBH96kMcz0aLZcW2OKxJY2BwSCVExTdysLID7G69KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw60W07imt0UijXD1Mq3AN%2F7aG9BGgExgNzrGSf9FMLPwqI5v4navbabgkE4xZiNOaq7jV8XctzriiBTOtE7MfuAv9QeA8DiiOIGsy0OCuSjQQFRA71RtxMDT0P7H0KI1WefqESkw4RtZfBcIEstD1NpX%2BLOtxmEGQa%2FmHu9jr3rgZWNI8lw7TLSMEIWTvRbdGU%2B6FIFXLNoTfcb%2FdcZp9MAMJRTG03DbCX5EkJNZ6we5KxYQ2QRSlx0pkRdtYOA%2F%2F0PEdH2z6pXIBoEd4%2FmKsqwhl66awqmLVcxrKLFuXnlEnfAhhZVvLfSdNay%2FFanN%2Fxv9MXR%2Folv%2BjYxiuZ3Z1Rftyp34VBMOCrS726izi9cpTGyTlPDZ77T%2FCe7hvIM%2F7rl7fceoiJumavG3JWKPWiQH6Q%2FZ2X7Qqh0bLp7nahkFUGhI8VmtHq2gUz7dCmdzUsLac%2Bt25aNHOpwTbmxv%2BD8sQmjY1VMuWOrWwRjnLM1kUgResOLriq7hzokbcdtNZUG0UnHobim8MZ5t57dYVHQuDDgJ5lvG%2BzyjylDqGdNrXAXVeLUMD44cwg3aaIwaQW43NeWXhd89OLD5fn6ldxWbzERmDLf5wrFW29hmUvbF9QJ3y%2B2CyQabYvPuKOw8FfJxa7sAZsaaWltjCY%2BuC9BjqkAbUnqHPMma0K3XmNMWMyEbZNl6L%2Fm%2BWE6mZKwaTqn7VEuA7%2BbvXKvd%2BVZTMkgZa6MfXmrP8Dgtdc6Kr%2FxTdDPcUeRViP0Au8nXd9sUquB6v1wu7bMG%2FOzNAjfzmYKFkPSfTtrz%2BlNRhk9TiiIxw7xeJYdRvBYLUFyjg3frABr0BbiRyWLienN1%2FirCMucbpN5xckHupMvyyB4TSj66vL3LA2gGVF&X-Amz-Signature=4deb60c5ef93594a852db5bd83ac808e4b23a89089ee48a296a88002dd887832&X-Amz-SignedHeaders=host&x-id=GetObject)

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
