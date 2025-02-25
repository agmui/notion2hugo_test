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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665GNAR47%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHuj2IXRUBDvStbb2vZPwIG8s7Kpemd%2FwDkG526SpcucAiBwFpWaLUsP5W6LXY3BAQOc4Tte0ht5jLQDK0gzYoc5%2BSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMEVtvnUkrCop4U3MJKtwD6d8GpIXRE7ncuDAGyy%2FRxlJU1YbAgulab0ksrX2Z4TKkDaeTKcjAQfky6MaZjBK6%2BCQnTPDZ5W%2FDb1oXJ7D%2FNYLVnkhR7BbUxMo8ViZnwTlet3q68paTOJF03CBqO%2FaqK6ZTRhVrtRrTMQ5NAnHqNSRutMeEwUvcivWa0E5R3knNCmW381MRu3RU0lOi0ljXP3FxanCNeJftvVmrpfYo7rEYdqcU%2BDsTGY2og4qcK2UgRgoALZ20ajE6g6feYvWiU35MRO%2FsNZEyjCYLVN7g6xfcZSw0m3EEsvRWUl6%2B04EcpKBxuZA0Cf3RtRHjl%2BI1ktlf5tRfGQ8sID4tGV5thWBvPa4RSx49%2FVwBxlUiOMj7oygDZrehBifr7jrcJlQwhgudL37O2aZUSMU%2BsVSIliO15sgxscssODT8EVy2xZ4jtwaFCtBB1uV0lbptCL3UL%2BVfI8hu6wKY%2BYPBjP0p3QvCY%2Ft40PdqCB%2ForUDyBdR7f%2BNNhSe%2Fkvc92d93mMixN0nweAp2oFoJxU%2BH4%2Bb3DGyxSozBwcP5g1ivFH4HoNuqdJk4VP5YvTEsrm0LMOeq1xaEI4j4vfykCd5nKKPJkHbVTj7XovnsK5VgzeyUj7JolZkKgKornRUxn3swnYP0vQY6pgFrelJaZruiwIKeeD93Yz%2F2LXLMfvQBUjavW%2BRxd1Ib3u%2Bot5PFZ3zzX%2BrGqLjqD80bQgTwW743SY%2B6JxeUU43aknUBOT1Hh6cLPiPLbFqfXqWmQuwlKOJi8yXFi%2FuT5kE5CVcsGv8zGOz6wngjVmhg2DxQfed%2BJUXlrjnge9U4kXNahd88fiS3KI%2B93HDmrSYzqBHn%2BbYcH0MgBKCRidRfNSgjQ5s8&X-Amz-Signature=2ec7cd9f5a965cd971cf8ea2e30107d7d6fca6323ec3c3a45b2d40be3afb6f96&X-Amz-SignedHeaders=host&x-id=GetObject)

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
