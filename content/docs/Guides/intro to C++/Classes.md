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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZYAI6RH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIF4pLDdigINxjqVOuQpr3dx%2BXDr2jc2TpLALQ7hXj8MrAiEAm80e%2FXC67a7OvKqar%2BFVTz9BcUzdLg4Od5x59e66II0qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUiOpKR%2FvfubliSSCrcA152s8xzIuOA0i7Ps0xj6OGObXxT9gCvVCh%2FRI4WU%2BReg29anhBEdVRNYVhMR1DwNkMBt%2BWNtbio8ZXxmGHdSlq8ilfLYTSXzYWH5sGqkUcW7rbzI0MWjqGY6FDMXv44TLWXZXUka%2Br%2F8SYFbEqXbIHsAT2OA4Q23CGWJbtdNlNWjGCFn8P8Y%2BoSVzEj0iYYMKNsD%2F4lKwjqwICAmwZ%2F2BdwCmG1QFZw57C0igGGtFUM3DrZUnzqztNWyKlgY%2FxkvXm80UMvDgivkuKb0VHNGjgwQ1bndOhVjOgxZ0kNZ89EhIfQaYlWkL2OBy4lkMoLiEsw2GwZV%2FnfYlWkCa8Oc3%2FFJ0v4fL7r45%2BxVVkAYckEpORZsofhmcWu0JdVNvkMnDhl32%2FSHekuOHEt4i96s0C8YGTgjO%2B7HNcQa%2BfVhBogoeIB6ylpW6mGe1CnfBQ0ppcPzEG2xJhQ92912jvpDfKQwi2X71UnEYyBDczjUeI67%2B63iWRVa0mCNuKPvRWbS8nYCc%2FAyZmi8EA%2FgVw6sh5lPbgm%2Bp3Jvm%2Fkk0pK1jCMHevSeipMXU9D8CXGgotVGbY3%2FKLcIgWH5POrCvs0tjGk1PZJzepNmdnUVZyKE7gCK1JWzEUDzLLkiChsMNH7ncQGOqUBQe9KjS%2FGmLuzUkzV%2FN6O4OqizuCIwnC2LNav083DtvSMIjr0qRbMBY8UOOCBbHyV7hingbTyxp%2BUGz7oamMCSHc75BShQxugIwMd73Sdw8gdS7xc2M0RRoND5TWszW8GR7oT6SfaUpN51MH3tu49aU3PpVFwDQQdWbj3Izu0aJ7PqtjQ9TBP%2BxLq%2F0qJEN0sJkEq4hgG7mX08erFF6Ll%2BwlQgc4t&X-Amz-Signature=c321b94c1221fee86746bb702e79c6325aae0fd253cdd25cb9f330e875836030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
