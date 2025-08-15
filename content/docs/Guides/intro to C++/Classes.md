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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5YIOKOU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDHHJE2tlaaoN6GPHvXZjA1hXXEMnKWy0%2BTABhzETfrbgIhAO%2BZwfBl1Rc1qHo0h4It%2FoiTnkAsviqhFBpluq8nmnmuKv8DCGcQABoMNjM3NDIzMTgzODA1IgyUdgwtInAVymgtvvAq3APwKoHAXyVw9KQBFPRlaNPeBgGRYLMORjbMmKUiThxTCEPd9ZqoWeVNHj5MT4VW4dnwdHymJVdjDguMEWXbDwdE7uepyNg51I8TTL54UZvuX5Gd563ovu7C1JErWeHQaC0pYFfUPauvFYblpTE3iyON6n%2BeLF3KevKrZOF4boBxuXqLDVmh%2BanasviMAclJWzlca4Sx%2B7QPxijy1BglbTTH7IuaIryF%2BOD2vtm2IDuYDPRcl99IiWxLMQyL2NhIwAl20vMtwP%2FB8O5CYGbFZFzagZGcOMO06YQ44i89jFLGEXBtMtER61XMJV%2FjB7ok2Ch2I3YZlzdBEwFsZc1tjLrfJjs8PrW3j8vvH%2Bm9K%2BvWBfGEFEyk8NqwPXuZG%2BKvNrv6dYuWV%2BP4kl%2FJyIbO6%2BG60gx53Q4cmyOLnjFVA3cdNEX%2FsS7yWswzlBCOQ9zjVYCXFul3f8rJb6z%2F5EosO%2FUWmNeb8tFWFiHeWyPmMA8wvbu602ubh0IrWXPugAb0NJlnrpVYMmmjVU66IMXzCR4OwYFa2%2Fe4cPVuTkjmr5BY20aDJnaL9OtqW0qCM5WPOJYi50YpU2JILOyhIVfWlTDE9IUN0wDdWn9CGvB9IISUpwEwFk2%2BUcwBPav7DjCS2P7EBjqkAa5nmteM4OMGW6WkJd3LgAEIAWhz0uK%2F3s6cS0Y94M2LRTzEIHNtc80swAjCATmtECMZeeBoETql%2F7ET77cXuFWdRlJo8h6%2BehGKn819xpEWiXMJKbboK%2BKSPvPShnAVnKFlUay0WVbWkshUAdc3w0bpTHVarRhnvFXmode4wVtUb78Yi%2F%2BVdzgkgVXFa9u0DN1flybw%2BUoL67mIrhDwnldu07S4&X-Amz-Signature=f31ce2764b00e3e5bfa92253ce37c959cf6c0db283f29506191eb31b48fa29b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
