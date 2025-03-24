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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPASVGRX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0nQtdFmvbQbMstrOBJdbHnvwNDWx%2BDmFi1nlwkGiP3gIgfgxDJL8iDFOveaToXtyhRBVE4mw95Ou6er0RGqVhde8qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxfvEuhMiezbs5AiCrcA3ZB6a%2BYcWGjAITBBJK2IAo7VciIO5ztO1jMjE8vXXhOljLA%2BWZY9pGUUq0APy%2BxExjj07S33WOb42s2tV6FMnnfIHLCArgEF%2BIWqaGGd2C45B3f7j5fzKZcwY2SYu1ARGrVJvI1PEwyP%2B9ADVOKjFFcbXfDTxgy4WQ4UaAVRy2S8tm5Az8HI78o54b3iEFfZbfLSVU70gnBBzFNHjR%2BY9KbjY1%2F2ZCZy4%2BCFEYineP915vvAgRLjEpfz%2Bnxi65LPhq0eEKiKLwRE2%2FqHBepb6GH908o3lWkrVdHkkVbejium8Phtqk3wag2yOCzsqqEMdO8GhDd9CzvdqjU0ZRH%2Bk1q8O8n4mBIFlPaXuT1WbcfdFrTgFqmANWJ3Zz1igjEo3DH9HyGsu%2B9g7infJh2ZqyOMr4hL12uzJLkUY5taMDF5gl8RkGAgbwXQHOuvq%2BeNBpDUn3xZi%2BcboGYotObtRL6a5ZQg4tKbBMcmEHFWNyLR3CaXnR3ozzC9Ym3cX1UNm539XMuMINC0YFfQ8ddgz0SaiJO%2Bw%2BRBX40dCiWsyG4HLzQJR60zQ4FpGS0WM6QHyFpBxSXzAIYrdah97X6lxTsRf7FwAP5CB5ZPO%2FG8gJL0c%2B4PlPy%2By9kDoK2MO2%2Bhb8GOqUB3xt0FgOMe6k%2FHesLifaFgXBIiWuCG37atsGkjjvq%2Fiv0ad%2BV%2BgMEol9kv5VZOIz0bqQOJrClK36pfmquBxKhxnVktQcgWcgSNhM1%2BP5QQ%2FvHuM3IH28HiFIG3QYHZ2lb21z943v%2FHVR0Dq%2FTSvXRM6vybvQjgYEV74pb%2FeZK92oTaSWDJUg96TXB%2F3pkPJyt5RKrrQgUYi4ITvWnGdBky98T3vaq&X-Amz-Signature=5a77397d5485bc19a1005de7ed8b8796496bc20b349bf74fc714c5346d0ca396&X-Amz-SignedHeaders=host&x-id=GetObject)

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
