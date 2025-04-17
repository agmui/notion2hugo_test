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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4U4ZCOC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQWC4zcYct3U8aAF0gD5NEy0AxSktH6bQW6YtIDxU%2FogIgVPTjVGRZreyZEu5HWSvV0F9fNuUerrwipDZHIPY6ywQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDE0jy7ZPD4BfqtfmdircA8OJDUeo%2FOUi70gMLkEN5WlEnlTC9RY9nbtXvMJ7TRF544KqTy0T%2BkTRC9M6nkBQZaNSAREZZ9wwJ6CpT3tAdBu2FlzewZCHLYyz%2Fx0OOPntw2pmlHrRMXx8PPZ0TfPQWh3XNCaoB06YF5PCBhqXyrWvyJQv4NbPDFtS1scCb%2B5HVjsCr%2FuIQbY5%2Byf9ji5Tk3%2BeXG4CEEDZpaHar%2BaORXByqffrGg7fp%2FKbofS2ctk5VxzxNbE99NvpP9Dq5v3vIofxRebEpnPe0dUU77FFyYD4f0Sk6wWRo2IMNGghusj%2Be5HuiWmYqZGwLvLowAvXtyxfiLqRUHdo8PcjzBbUFDffzuYOXQXNC7sHwgnAqIsmQNU5szhdxWpFVpdg8dQjwX4eozQaDoeZNoMWxtlK4RGwds3ie6xkFiCDj4z6wwu19USPr0FpHLXPILxqeLyqFFwnmi42VsyeuRRDJ0KGcOYkGrez0SMhDGe76wZ0mqCwVYSStb%2FZ4XhHjQhnMON%2FH%2F%2Ffg273kPalNYMA%2Fj0IXsYu5XqFb42TCnInE4s%2FTgZwLXZ34i%2BW7HsJ33tZF%2FbWdxlewQAkcpFfws6BBayoJWx6vfYgP5PBkZwVbND7cPp9Elre19lkvVdbA4qIMO36gcAGOqUBi7OZbeZu6wem6jPQYGilG7ghReljnCDjrbl6AVsDtklPAywHtUo6O%2BhJ8IEq3TayX5W9nTPy%2Bx3AVulQcIvfEnsk4HGeCI75gFIke4mhzvwQft73MzjlyHIE6DUEXK5S6lUpVX60Wb75ib77cEJRTCGJ4Fqagky0RqKa7vhbd4KrHBHtrc4QmCITC09S7sbi5nUp1imFQyhPU402v%2BaO1A7WcajX&X-Amz-Signature=0eeda8e743d3fa3e5fde8efc0d86cd45bb2b2feb34113fb630dc640482621e66&X-Amz-SignedHeaders=host&x-id=GetObject)

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
