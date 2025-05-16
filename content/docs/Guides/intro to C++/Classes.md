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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673G42T7V%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxKbUBbEA22llvwLmVIdboBZIuFyNdauoms738LKoL3AIhALXkON7RbcKAtxKGBuNlLMoCWoIf33T3dcJ4nCXHpfENKv8DCEIQABoMNjM3NDIzMTgzODA1IgzPkoQ8G%2FitpFehk%2BEq3AP1TOoy55g6Z%2FJcqlJ1xzoLToMvC2QM2geJze1MVcKbtKlMjKa492D9q6YL5cgOTyXEOGChp5mpHXTuTdNJKlG8pFDVr3GVpCyAK%2F7jb5NBp1jxdPKbwJ9DH6rl%2BzYguXZGtDqiuOVeAM8Uv72eoZqOwp%2FD0oBrS4fXR%2BfVHGyO1D2cww0zXk7s4o5Q2eLVLllZQKxCDN3I5tzsPF9XDHCjH5vLI2iqWOxzyJx%2Fvc0wrUZQ0AKbys4GIPNh%2FvekPP6EgmxHws4PcRDtnfKcsmTEE0JxVZwRuHx%2FDgVTLD1OrBKFxAssbcqLIsvA1fvjBcIUxG9QkHfoOEn%2BGk6s6X35DQ303fH%2F%2F1eH16BD75esa35WjFmLh0d%2FnJubRhLgX72D5hHKpFaCQcCYXfWShPQjhMARmpfNPwv22sFt1yaj3WoLJom92RVXfXUeFx7ZPcZqwqDrn4Z7pXdCgVKDlh95LD1RljNrBc0LDN4A7aHiQY5bYIPDX9XrF2AggCeY45%2Bv5ku5WRwJmTzVDU2RDBMWnJM0nRhRn4WnFPs%2FbL5Nbe0%2BOpmNmA%2FJCoIjEEw7St8tnHFS0%2BQ9q%2FOfWBJpHYVc6%2BfpgFOMKO4yVRsiZoiwJ96gIx0gnhXhriFK1zC37ZvBBjqkAdRdk6h3Rc4d7w%2BmBJGE79j011Owd7PFMhCxth69pMCVH319RE8U3JweBYFh4jTjQ3lrFdwkse3Mw84T%2BbrJg%2BYstaLWxViLbpu%2FSK73whpZlXfCB2OE%2BdUfKWGIpyQAytFveUZIwRg40SSJurpPN%2FfSG8zeoxp3uYXmTKARmjHi8Ny4GKigHSH6fHNqeIhgEME6Igjy4%2FycqhhzwIsBPjNdsymM&X-Amz-Signature=ad7a5acc43775377e1a02c567226d29c78559d02709347c5159d280c86f12631&X-Amz-SignedHeaders=host&x-id=GetObject)

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
