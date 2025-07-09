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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWQL7Y5%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFef6fMxA6Qa1T0W5JVFcdqkDjxj3r9rVsmUDY5BoBuqAiAfkAuzntilNUwSaB4T%2FiB%2F6ekAVTWmpEKoVV8L7oRW6iqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkuv4oAWmi0Fr%2Bz%2BqKtwD7OjJuJ1Z16h7Ha7Zyqmy1cQh8UmxNtJEGYYPOuQ2PSCHpf5cX1gOST5bcnIFtM20fVzfc14xX2Ud5mpAMmzDPxH9IO%2FWsFAuRODhp5u7UWSRJEZNxb5C1EhJmPXMD6xcI%2BtnN%2BW2Di0dwZHqPJxgGFEQKLjVJ9OCBRuKtuVr9xfYTWQOOlIBZDfaDxRW8OfllgBAwIe4sqA5oovND1gK8DiGHwEuiZ9Jr0esQVMEMw27EdiwRzj2Vve7kdQHU5frqNjDhjPEhaSSHsfCM1mjB0fANg96Q%2BfsD7Tbu3aM1lRhPuLASu%2F1g6oEHbTdb1MT50GKwJic3EC9nIDkgQVoG9P4AWC9LY3jANi3Bg%2FdkkzbJ8lkzMCy61WPwM3dswQrJHKHD3U4DunnX1T3UfwQWkz%2FDtDG161TKnN5an6W0qZZp5QW2Mk%2Bx2Fl3ldaH25%2F%2BdbFUq%2Bk8uUBW6EhpsbASGz%2BqaxCZQErxDLMc6KLgyYyj3BQrZqc9Hcv%2F84GU3nFG4Wi0V6NPOb4k9Tq%2BqcR0qNi0dujWRk%2BfA7NasaDqUzjCERyuFMQVfyWfVRGg9bwBRQegNW2ht8RharN12FH9anVg5aJcPjDATTAKkZbaSM%2FXajAoQE5qLcfwhEwvJi6wwY6pgHUrA6zQR9afemQcbFvnb9AclyVtlk9ULVw%2FLYIsM8C5snu8HUJENIwbl1PwOSDdtYP3zSdlpuae3ibpJrlNpQ8qssvBFJTy9cZa7MU8RI2z7gDru5PRnz1CaEmGC9dnIa1mBExDpQO7p8eRyi%2BnyunCVQ%2Bfz8VYH7011368wUXCfXZOTxMpea5UdzYfoaZacBWh7FW6GCGIHjcl2ei8sQ17rafon9V&X-Amz-Signature=674d4f8b458078249691738b9ea6b961247e3ddac1cce3debb69aaba4d8385ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
