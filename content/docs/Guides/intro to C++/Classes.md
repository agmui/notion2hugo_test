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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQL3BS2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb3pQKq7mMw0amhNZpkWA0hcPKXjGc5BP4f0KdHWHN6wIgYkaXKYpAUVcHrYnwVB9qp1U2aL6t1n3m1C9LVrd3Cb0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVyYKqsdqLCLnHthyrcA2HwtO53Frm7yIXM1Hb47qPsHyxte2sgSqGzlKDvPseHKV8XJSTaQay1cmLUjQXC36glRjfhJRwuu5IYUxWcwzw7ZyvV7rUVVL6zMGhn31kxOyezgt7qt0KnUo15MWHDOg%2FcMc3OlRwbfvklTKo6JRPFzzhj3jTCw1iaKeMRr%2F4344J1IzIAa8DfP1bPcA3RIUKyrbJKwZ072e9wXADFT%2BYOQy238BG1ZzS62q%2FDwdoJ63GH5ZftBENywsI%2Bi8iSLgdHvN%2BTK8CaaNtbm9dHpfD5eaXXPAa4vbOk6ROPo4LgWI%2FdNpt1Ge%2FEI8dE5o1KzKFnqnHM5jYZdNEixVvI93%2F5QgujXy%2B4K%2FERcT%2FGIoulPSOQqQxeOig0fogAp3PtJAI7voWmcosZf%2FrcNG14khtmP55Jx%2BwQLO7Zm4bCXETbNcJrWfHP8H8iaGSfTitVhux8KLbbYqjPahBkNoDwZbp0OBaMyWr5MEpAcMZbXjk5r60bMvqokVRNT%2BoIq85niWD5g2anAuQtYxX%2BfaBOUsYboyyQFHeJ%2F%2Fd4fUwFsm3nmCyNuMOCkfdoRHxiqf3est731RFMzV9hNwm7ZTfrrx6wTY4TwgVNYAC8OXbEyUxmANmiAZDOD0bc65yFMIiVisMGOqUB8znEmCOYUssnEMogaEB2x8hNbXGLlEASSWgNJ4wQqK6Hb0r24%2FXZszRvlhpB5ogb0sel893TWEkbVZzIbC4LyY%2FUTBUd%2FztrlTsWVRRqpxtYvNSJPvwa9U3Kukw61SMfpZit00YGiaaKsiSuvsTTMwPdsgv8HzNKaDdHZ%2B2p9g9H4DGwI1FnZY%2FBrEKqUjexNz6TyEa6slV74ZRjzFVJyVy5QTrQ&X-Amz-Signature=9557a5276a3bf6bb88f760bfd9b544662b9812b844329a93b30e07b31c6d8925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
