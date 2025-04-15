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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JBL4WM2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2DBhONiRyllph1jIC1p8wCrz2fhja6Aw75aojV7bLUAIgffJTdV6qVl9BCRtIwoCT7G0ZuKGyYAqJDwFg6eg0Hz0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDImTraWfuiC41j4XkSrcA2O5QVLejW5iabihDeIgZInbHpzN7yvBxtdY89woR3%2FNjQDoClzw3sVX9dEprSiH8bN7K4p7UIDGKI%2BjOCywZUboPQiVwOPzfjmQPeFrekoxk0YQCryvAHHyzLSTBxME33OvyUtOIBb%2FnVTEJmbu8WtFUisJbFVdi7KEy3kGKYjrFUP5rYniyPes8ONLUQzXv9Z4MQKaRF0ZrRIZxcrmv1TFfXPyMfIDa3hJ0g%2BQuubxfNKkj3EPf8UB14J1PiKIG2M7XdWydYcbibTVL2cAiSmqchkqSsJ%2FhFjZlGsu4ghBz4sW60oHMhxlCbqyVNH1E4J8oKuARFI4MyiBbA1hy3trGs4Dy9QBLKbRAJbGjy5ReKrwGR3A3gOzu%2BzbpYbpz7U8FkOzlu%2BXt%2BBVn8ojNTCJvqUiu4HJ6sKxGtdlBHZIzvWhxByxYnA7IFGcbvg03rRhwA4oqRS1xfNef5FkYqZv4rR1BNkZzn%2B44KShblV0hT0ibrgf8sQFcfXg7oOw%2FQId7SC8toEns9LLPZQvY%2FAA9NwLu3r1QGWrX2bnmTW5vTzU8gVjiAraa56DBWSbkIlrFBsBZ2oNuWa%2BbVTtP9tPvnockhIuK0bP8pgTLN%2BywNCmbSXkirYcY7nSMKXp978GOqUBmerFUJ9KjyXk%2FJawk1KFMjVAWat49Kbxm1ArZ0Pts8OJe2fjnBd9ezV8dYH5wuIe6Oo183t1BECNsvNVZqr9iNsPrAmEDBhcUjcrH1DI2%2Fn%2BqOs5bq0AKE8csy1Lc7qA9yNaVL%2FFXoIDM8VQ6astIi2fF2JRWwHvVwO2CHf5nCgDhOwZeVuk2mvLF9sHXY1WQNu6Iin%2FQ5nE%2B0M1S8P9bX4F%2FziQ&X-Amz-Signature=4c8ac98c8b5513c5237a5511091cff2468c0e8a0d14f66e746f9db7b0d6e6e28&X-Amz-SignedHeaders=host&x-id=GetObject)

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
