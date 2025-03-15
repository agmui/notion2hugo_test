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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLJEIHUM%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkdjORFpEtv9ivSiF%2Br5bz2IEx4T4Uk3vAXEnPZaQiWAiAbmeH8lMBus79bYkv%2FlckqZkGCGdO2HtXoYxEkvrsrJCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Lyqap4C9s0CPDLSKtwDyD7Dx07Mqj%2BR%2B0tKpCixd9yRVcQn4kzKC8Jmd%2B%2FdoWhzQv%2B%2FsJs0iyBpw0pYnSAFAJGCuRFPHleBjoovojpZlB%2B7v3HIzlMMvIuvYLWDY8WDy9fsqKUDOJmSEmyyq0QPWYRkOKCVH3StpH%2B4sANjGFDIXKf2GC96sWXARcNIuDkxRvkQcpabRVdC6As7kUQmM6sI3d29gjYy3SR1q1ueYSAj5%2Bjal%2BoTwzIwMbaBLZvAFwNkfm81QV3mP5%2FqYpoQOExFOzXyCgdPb2bbW%2FGDy8BnCjSEoORpFyIuNJipTutyG7imcpHZzU2sKeTjzi74M46sOTcEsAMWHkuSdyTm%2BhsK5UqEV7NadXPfOjfXgxrkPGiMoAap63TxSoa4233jNm21W61yiQw288iidyl8re6DT0q84WeggZY%2BiiAgLbQZgZyHuU%2BaEaUaWHSS83J%2FiUtl9%2FRK%2BgKP3Y58YgbBhytbnLrfOwAoLw%2BEf%2BlY2du%2BAA%2B45O3t0OnMYupWkAq%2Be7u%2FERBesYhmkT3to9ERqrx4R7RTo4SfO84Ql8YMVEiJRacv%2B%2BeiA%2Fq3T4evJOQ3T8l2gIsQjdpsZOyw12BpT%2BYxO4HriQjzKZVcxUrSk0kCQWeVdyAC4zLzSQ8wwavTvgY6pgFCX5mfyJMy1gSBbqH4RS9ZnTiQzmdxZfHa7w0boS6ioj26Yf0phxpL4uLceQ2HgNiyesvTST9c45%2BrcdFOcxaXg1lU8dU%2F2cVz35AkhVa6HbbuCcygA5qOkJk7wQvnPd4mWYHugEAkydOS4HoVVOzyIQcfFtghdhAp5tawYQGtuYBEkEsizsQ1gfxjfredA3t5aGnnpreYQPsZcE2xcSsS7VMHYYgk&X-Amz-Signature=30bd02827f0ad036a7b41e6c5d1f642cde232b928e682ab6e106f7c7d0dfcd9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
