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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656US7CZV%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCjdAuSzOquP%2FU1HuvYfOUmlfbmnIWFA76IjkVmZl0TnwIhAN9uCCsqoxfGOphavTxQfIb7bfAIhkubD8aocr3lbfS%2FKv8DCBcQABoMNjM3NDIzMTgzODA1Igwa4ja2mnfyjeMaoxEq3AP5f0Iw%2FmeFijypNY%2Fw89BZEyWrAD%2BuY8KP9315SLLUeF62DEFRLK9H9MFHkRbb%2Fser0r3mH%2F3yp348K1jyMAwSOYFWv6Uy8XaFkXobiq4vg0E87GKAzhR1tgvCuRFH%2BEypqy93gwC66fdeB3ijfRAEQijBVGYCBAelvhcDaMESZFcqCglT%2Fi4A7cFravxTiYnVHFlqxiVhmHY8jgN3HN8aTsN4KvD4Lr6LFEIR2Eg%2B8eD5DyXuwifJPqZnCm07f95%2FEpQKwtDSU3O3Qo5zx8nWTSd25n%2B29eCPPBZU8Kmwp2DGbPNWt0iSqZsgwG3TcMGsWPqHFyFZh1RMrexVoWzAmnZAaCMs2LNaHPWCDjcp4J4ckgQw8VL6D4puKsHahivcLG%2FqJFJRRuvMMJGjkKedl6EgK4SXYiFUrOETpVl4aOVg0dzBJ8j9gwSTbT2NFO1HJxuHaDd37xhRgUBAPyACVkPfjoiKyqKuCWtyfkPxACSNMckx%2BeWp8%2FUfkioDYBCEHP32G1tMKxdIqpS6zsVR8tKFZbFknKBjL2GG1DahjHJlWaqnP6XQrQr3Uti3OM0NXAeABqTXC0K50YTZoG9p%2BpmPBqfd5bXQo%2BU5nLrUve2iuX%2F3LXRtC4WtEjC3jprDBjqkAYVMoT6IS%2FoHtG6krOknrVs6jgdzyfxypY%2Bmn5xNYwv8vVYgr2xunAjZnqysjuCOf1RIEn8Jm3QxaQ7xVhRdvXa9%2FemTmkrC52%2FtU4nJaxFiHPvgFedu1UUkgmJzoEOl5efo%2Be0IuXz3cplpa0IzX5BFA2iWNAdwzJVyFYLeDwupYjB4SSLvThdlbjnoi6ngvQuWINdp%2FBXBw6QkXcqZDr7EIZ0a&X-Amz-Signature=323379a10822c660bc85b6ccd1c1eead41a978bb53bbf939e75af77650da0277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
