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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2M3BXKE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B63OCJKU4nGPk%2BAsxYbWrwvOLGrm%2FFa0cuoWomI6mIgIgJchCGGg85Aq3XMvkFgsEhC4lXHs56bnoRWEbj%2FnzkrIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3sWpO%2F1wprm2J66yrcA8F354fJj8Gkxnw%2BcGE%2Fvq81YGcGD%2F9AI4j8lGeUOKQd7RhmX0UxrmNgilgo5fSkZ3Yyc3LLoaVeeNBl%2BXW5fXRqPSYUaH4qVnhXEgjjieGIvAHx%2FTnTcj8nth3770yZmlzvOvL3LxQ31BaB%2FlC5xof788q3HnHGJZmhqP%2BE8tr71AnnkwtQkFJczXOOR4JEf3bocJAGHv%2FXg%2FWp%2FIK%2BKkIXHSux%2BU0PXO4Xi8R7XTUcW653tH9XZHw3AEcyoXGfjzmioNexuoIFNr1QPDiSTAfaj4FwyLakivTd9CnakOvfZgdVQlB9iE16nmWgXisCvk1TYjsOisL3rf6dcTlmF1pG433grU%2FU%2FHMdpw%2Fh0EQPodoPZTjso9WsQCoNn3qLG5X32AchgJXxctDggOC6c3DHY8CfDHypDvJCzEPkpn6s96QhE%2BKn5gFoyZBb7Druuyorn7x7V5wbbWdylqOUbHUc3O9PWYZo7aoMp3AnYBwvNBsUycuBGHKcwgNgv6xkhqYWXbjUlHdxuOlLHAqbo9HvF0mqPzKHcx5jAO8QIYWX4HEf5azyyQXIlKZ5I11n0o8PTrF8W6n1o0%2BdEzp76S5Nc9HkKG10Xj%2BqL%2BRDf6YFOgJUANVRQm38fUNtMOXX270GOqUBTXMWPquno4fjO3lYNljA29QfJGx%2Bld%2FitRO%2F90ZQvbuNbxKcauoQ067kzjR%2Fsm7wR2VWopfkXsA9AGeTRLvvS%2B51nHlow6wOW2IMzMbXyMCyn6GXx9I%2BjeVb92sQyOUZZ3VTrsnWpIAQe5nVxhVxWVlg%2BCjJSOiANQx7h15CLRjVYjF2IImeOAFgfllqWlR6GAEJOmA8JvmtfJuhxkelXD%2F39tGo&X-Amz-Signature=2a6b4eca1f20e11050efa709d856c2d4044e55f63030ac26cf479be6694573d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
