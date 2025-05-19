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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPCJ66FC%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQb7K7mctULye2MiH7l4cSfk8k7N8RXKNxxRqbBHri%2FgIhANaPQpfFOgnlp4En%2Bop9nqJ2vyhztOrh0HUtiNPgTbAoKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUOyx3mDCSuko7ndoq3AMrDTgKUQtA1O5f%2FE8liLUSn03LSbvGr2B0wWA50O8nbU%2FO5n7MTIRMDMIRfjvW62tuYLtbMqSBxTCH6aOsb4nfAj%2B2Cw6XLANau2DnoHyrQWEjsp4H4oidMYGX3yVttrMCQwru1u9JJAS%2Fy4Kye%2FxT42QQWYDSXHbuv4qZR7cDm59YTuMhAJ4AIQdGkmokeiP3AaYcj%2FUb0atFnDx2J1y8%2FCQD4haMFqGHR4NTW7OLkPcfsbCw4JnlXodQKk4FePDxjoGi1QYtfwIa0TE1wLgJaMB%2FmbWxVeA1XVePTyb5q901UrwWf1U8V3BPQ76eVGf9a1A9vtQE5QpZJvrp660TQqsMReGyuKMmtusXWCtW1cVicEXgHZMwp4OmqRErcV7wtB%2Fha4NURZqgA17zlBsz3EC8ZmDT5wInQrUZqa5cQyLIirzsU1dSxag8wbzyuqpRF3PPwse%2BnV%2BH55KViWdhHswwyKM%2BC4IMmy9GWBf9jWk7snSd6wJc5YcprRFazbfUkWy9Ffc%2BSBDh9V5z87bEG4jBklIl3LWA1uWf%2F4VnJHtIQhNDzJQt2f2kiqLmV5z5SufxU5m%2FCljuiU%2BoekgoEdGkErvg0092DgYvEZefVEgwMlou%2F10Lu4wUyTD1yK3BBjqkATSgY0OG3kahTYmlOxsGgyHE9t1ynWKK2%2FQwYsoPqfQDp7BrjNPYSLOMvj2Hm54cuH4hVh7KBQY2w1a4%2FJg5Gm6A0uay%2BrdRoUwcxfg5b56RF%2B8aCVmBq9GUntZO%2BlDYujCL6FCh9EVc2nEaUFRkXFXg8EVU8nHiI6eSNUa3Xj1hnORuy4HFdxax4Wa%2B%2FvUvEsLiqWAKwU0%2B37EfQQwHJfBrk%2BWB&X-Amz-Signature=2b32e0e8523a33f23ae428bcdcad6f319c2886c9403a5bb800a450479d99db7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
