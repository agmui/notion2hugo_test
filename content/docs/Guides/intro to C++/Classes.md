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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDAOTCLH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuYG6Ci%2FSeWVHQ%2BR%2BobDNq9gihuEKqwjACEewYJgvonQIgFaBXKGRyDkyd%2F9U5LM65rW2P6EO8ZsgZeO5dlZDQ04YqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIk3ewVDDWggNMThpCrcA3d%2FTRguo1SmyfWHpNuSY92XT1gAeJc2NP0utRcdz87x%2B0IC636B9UHx3%2FT0ebdjmgqDvrscVgYDrdgdRu8WISZe1YkIzm3bRyoiiL7RU0vfX4eG3FvWacLctFlLyJPaGXNwUgKOHJDN3xhaBMpHLyZPOmbbGLXlW2vcQupfKleS%2B8cgw4GzKNV2Up9JvqqOZOG7M92OmXvDr%2FVR%2BsRqbsB%2FrVfc6pwxWsAbSbuGBK9KcmzK18el7Was%2FEHyPn83Y7WXg7sC3yA9jQ29ii%2FGO193cdl96LR840jISOxbi5OE9Bvle9cZzZlArf0CPU2ZfOA54BW8rOGzhHLZfUVLEH1HBPrkoKQpQ40sX8R9ajukoGCPcmLmDA4Xcj%2FDxSYu8iw1nwXKWMJzoeXqXcukmPcnftbvMxjREyBAeWq3z%2FSPNNTSDWQ0Jw4nmyr7eWrgasArgnftBWZWVd1TZmgi3%2FYglGY98zLcPTRTUEpBfDCwNv9rC0YwVeI62NaPdIEjy8jCLxkLH2tZ9NizcH07BvKIrnnZ%2Ft15dr3rz7nErUi5qBi3twbi8hFrQDDqqPoHVuKKzRg58GYrQyLnjkb%2BoFdqBObhYjAoU8qWa0X04iMp5XU1hJy781JklCOEML%2FQlMIGOqUBWHZkFrjJNhrgZeRXFrAis06JeF5J5Xhei8wM9IvJY76M4EAGrLrZjGyq%2FidaPJWsc8iMTiph53p%2Bsoi8QR4oWO1pU8FmhmWYCnk2k4mipV0D90aXDBHvh3Szf1SOHxtzI4K5K1tc5BstTOwzg4CIzSXyACDrvxg3v6K844hKjJNDOkRKzhyUTP3nIu5Ow3knm7vh4AswOzxJ07TTsF5G5ikbzjYL&X-Amz-Signature=cb90984ccb6c4767ed497c5984079a1a56e6dadf93cf7855e21af3b353adeef8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
