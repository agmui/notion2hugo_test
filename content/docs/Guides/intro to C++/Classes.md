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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM2LRHV2%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBwTtr94RnmmcHIBLgALqoks5Mz2jEZx%2F11Az5FlN%2BBEAiAA2Zk%2B7GMXs05alsvomSnmDOMJ9gVu4wzG%2BwgzqYwLkSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT0mrAdBY2FWinWoXKtwD4FtX7sUrAkPYo2wF01PpY63NYZndS9bWweahKbYcgTpU%2FZj%2F5DLAPxDTDAnygZnWtHcJGNlsc2LfChOr%2BUvkZJl2jLE8Jp97WVMx9hl3rUBUTYtD7%2FU5YVa5HPF6XcBZkXE2n83Yd7DehfL7I6ZvT2LFcU55%2FZo9HaxEe1CqenelpkdP2N134lrblDvQvoMD8HSTC0lLciZpCG2kXuBamJ252vSfylcTFNpeh7HUh4zM8AfDRX%2F8Yg%2FBWFi1vbF3Fcoaa6JGuB8i%2FEhNPTQ2TO7Ex6LGXM0feG3evCTMAFOzA0IvVUOpOADd3ZcFIEuT7Iq7f9YrukKzmZP0QplsPVeBWjHccnW1IM4DWvUKpoqj%2BgdODSXyfeqQ67kfq9%2BcYMq044RisH%2BI3OctNoKPNF5ZcitQtJVCcv4tLghUyQSn%2BuzIzKfSDI2OtTmh4t%2B3eDYhJMuCF2aLEDwIdxA9cXDVECeC3uICYb3m1tJ82nkpNV%2Fu96UNxw3qWVh5m1VnqMhj3pa%2F2jI0PkvXrBhmYvPrNw6c%2FvIW%2FHDFbfJCqG2dljhbEW22XwkL8pfGO3vY6oEQlBxsMBkl%2FjYNTgCXhZarRJA3tYw7VQpm7Q5l0EfMPYHCKkYjJD%2F92Qcw37GmwAY6pgFPCoMuzpr27FNJc7d221HDogsvguQaK4mkqFSz1HocjZQbO4%2FHWXaTSFLRMnXmgGhSJmjdqvRGczWFBVoyiQZapvJ8AoxVO1%2BtLnZVyA81b8VkxoeTEG%2FqKKP14efy8XuQhTxqZXkWrKu2j79n23vq7JvGz586UX7Y5DyKoJZlghfIzwEhmHfjp2IJC9dhq1wJ8%2FB6uwppDsuvGOUSJGiD0Wcz12I3&X-Amz-Signature=ec394be87f8518ac7f18e24912797900a49f9c71d124432561641a5e936cdc74&X-Amz-SignedHeaders=host&x-id=GetObject)

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
