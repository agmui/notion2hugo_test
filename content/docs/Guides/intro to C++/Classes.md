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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPQYLDRS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIB5Yl1thfISsc85l8pYBzUMwkn4YNVE1G6LA9yywn2phAiA9OwV3CeBUJP64rlhAQBqre24eBYPVVtcFxAgACUulxir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIfqcHNXlt4EOmG06KtwD0qGAuBndkwuHugRKl7q0HaqNM18c912uPtLBaq9P2NriuvDQNF2rqO%2FIZsFD4F5DgugQzAapT1SpG%2B0amzhw%2FxWtscT2WHOj6Kq%2FkqJ5DW61gFGaWKISlBfragWnhtXlL8lTf0KWaHdV6hsftX8b35wj%2FkbdSV9Hmzc2VIoWC%2FOrRxkB%2B5mRkR%2F5MBGqE2P1j1ucClqd8Ba5PDwWpCYTS1xhVd1y7RH4yiSpqNMoNSnZXIkSkDYi%2BuNaBaZkFkNGT4YfjBxWeRpXcLw97bThrMnYbo5HM6gs2hJ9OTebTAjjU2bQ56ElSdDN13%2FyvcIbNoFfCPC%2F6eCOF5LfMXhoFMW%2BsAiYVXJ3sQ6bTPEg3NGghDNswNAE8OiKo7av0VaduTvuoilLkUx80fkeX5pM48BIcxWPLjpQQXwHkks4xlgM8X5fFzzGTJXnDpRaMZiHtZIwNUukAo1ajEQ%2FMpQiJ2nglWgvQSbJ66uAsNEHebpjfwBFhIe746PPoNGv3%2FQ8tbBYvugtDMwXLhtXa2eRHklkFOkkKm%2Bck8IGSMgZ4mT0Foh92MjuWRtk3DYVyYhX%2B%2BU2Ghl%2BogIuIUWo0ZvcuQC8IubZIB7jRUCUT0ibUoFhsu%2Bln1yY%2Bru5V%2Bcw6Jy%2BvQY6pgH%2F1I2wydzUhXDzLgD1WaGphWhVoDPxTeGHTB9du2t9UyrqkfcV2r9DNDkYi49pongyWI%2FzvcNWsCrHFtkEek17Bpa1SyASf3OHhIIGaWeq2gLCGf8pWBFi2XjW0sct1dcq%2FByhg6dPHe7%2F2ZKRLiu0gKBWpNrc5YdcHT7VJXpRz%2F2ZZHvhCLMoYECp3Ea%2BN3cFldQvMw4b9VWd15nWKJToX%2BYRe4uU&X-Amz-Signature=84614f68aaea0fd6c16db09667c3e98bd5c4e3b0d486e20939eb87c721d65a57&X-Amz-SignedHeaders=host&x-id=GetObject)

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
