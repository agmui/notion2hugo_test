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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQLG2DEX%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCID9R6p3sKsWM0UV6sz0k9a5r0TWBK5EO4MOG6npCxhwwAiBkR9GRO%2FD6Tk0CYUVpz%2FC%2B0Vj59A9BEOEEQxPINwaVsSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVXtx2%2Fi%2BeXCyYj%2FZKtwD%2BPr0VZB4gYdmxPAk7Rg9WbRLbi5woRu5URX9y6%2BylRH0llkmAwqwO4%2FE476I5EsgVv4lFdpWYyR7HJxhTPgPUrqtm9ZEHscE6hhenaxK%2FBNcPRYApR8jKAyVuUqpokw%2BvZw2nVjzd%2BHL3n%2FATEA3EJEFqej%2FZ0DD1%2B2H8lKOHzsMtOy%2Fu4h92ZoFFWE30Bs7kk3vHrIlp6G3Zef24qVQ7kpBs298NLd0AnCEdyxKXb5fwAKVe9nhcqGNdYVLpg2G8W1Tl8oWQSpX8XVddOcxjDE5EaaPfvWrFxP8xmgFemcyAfEVuOLEWYUyYHb5tzn8FpNVQj2ukCIY7ztdhSzIHrzt%2BnU1IqQK%2B51pcJTmWWODKOPc16QwLqAOlLG5la6O20Fitg%2FIpZGCt8%2FSNPhEM3pCVHA3uZqBpbyDhMj37eyQD97gsvJw5lBkHPQtR9MZNKi%2B%2BlCOLMNiFOtmbP1yDpHRyo9eZIIPOKBWAQ0HP4qspbF20Zznzsv%2BhCC4HtXyfbLJbLo3tupBVvvnWd61PE%2BfvaBDeOJNQYLcr2KhMEKjZXFM%2B8awMR3iYTi1JYVJ8L98mc7p1ZZDBFkvRWJ%2FYKfxirIxf2HxBykCljjIcsqboVHQCi4bX7%2FBR4gw6LLYvwY6pgFAsed9%2FWpNQphWtHjojyln314MZjSuC4albG%2Bm6P8y5TTubBQpGTXVHHMECYPhZdpR6cnVsCIDaUTZsb0JsXnbcJj13%2BMwXliVAqxu1lMfxf7ieIaAhsj6B%2BhUMTJMRo%2FVt8xVuOJTJ71fVpoYFwRV2nU570Y8%2F80rSyW6m9exFPtJxTKJDID2pfjCrQZ0DnRkHJOYEDloioqL4Vz0m3fYhpGUFmuv&X-Amz-Signature=f5a19037949afa6325626661b81c0b99a78483ddffc9047219b3b3d18d11ff74&X-Amz-SignedHeaders=host&x-id=GetObject)

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
