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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKKNECEF%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSDVQ%2FXSUAzjXLKIMH0seVk7vMOAwHZVhk3osUNwKOmAiAbNaVWx6bysf%2BAZs4hVq5EF5pbStzR4MSJemD78Ft0TSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQmXWfp0dXMnQLMCKtwD2oIP8rG2PHU8dE65Lj98W7yWG1NVfjau%2F4AMT6RI44EJsPGGectwkR4KlvLmMyms%2FKwxe96S2Nf45UYU4t1VphH9R7p74AJOsPJd2HGK06ReBxSgFALcUyEYBVukqyEVi%2BWLhQXawdSSGHorFccrxoBjF46caR2dVYyiNMQpeMz6g2OKlBhMczo%2FRaUsmL8Q05TEJf%2FM38LLer0lv4AUVia7gHLkEQ7iF8HIbJO1elR%2Bwy42sTYO6qGcmYlwFjUBXgjt0EszhK5jUc%2BtND4qaxl0o7gBsEpw6lAALZQtnpEKgHzX85YVVOOH%2FLG1wOnW6cgnwxvnG6sdJksLReHHlyVJPDn8%2BM8PjRbWxU8TD9oCfukjlnr2kVY7A0C68z1r30e8Da6RiI8GNnvTWQXnF93IQoZn3S%2BeQju51gO7Sn4N7O%2BZnoR%2FmkMkqravmo%2B6CK0Dg8nc1W4VCrGIThDI0Q4HTc1d9YhzP7gSYtL6kbIxdQp0wJWVw%2FTOkl2wc3LaSb3rofTh0OefLk6A7EsluBgLkNnd%2BPutHSvaBe3C2iTs%2BPqlBmvHXurOSJPtGKzKuGiofRiGN%2FVHNo89vzMX0o2Rhjwih6rVkZ2Omb02D4TaMzPXxGmErXdyVX0wtMXqvAY6pgGTr6hxQ2Kshp%2B12iLWYt%2F9ljiaxWVBsBxY2sgRq1orF6gkaFFe7cHuHKLmSIADoF6olsuBmVXo65hzq0grOHKqvre4o23Mj6BhF1h39rTQCmhNmtiHMkg1zpWXuBrYAcIe9fw5JZN3bn51flSNV%2FVjoaUvfOo6%2B%2BogQ7h9R%2BdRmgkMnQl1bH0cdVDSjS1EM%2B6Xj8PJNckY%2FLMoUR1winBkJipFiG2n&X-Amz-Signature=ffd1af47d82e8dad43dc0ca6cc7bc1da4da5ae4db7b9eafed776f0c4e7431ce4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
