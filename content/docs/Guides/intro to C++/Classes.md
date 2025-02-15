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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVJBZS36%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICGxRfBcZlyCsBo7FJBk1r3ZDW6%2BHc5hhQy5zGoOb%2BAxAiEA0xryEaapAF7JqlGvtv082V7We0OR23A9HsRUmmEAitAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDF0%2Br8sN2zw3UnLGFCrcA2rBTbO9A80NAofDJFpuzMr9%2BqjDqE0xkyuQByywCvaga0vwQxkcsZ7%2B4RcOCmLvYwRT7fWcvA9hPRrZ79hH%2BWlBPhGb%2Bb8CzncO242gqSYASdnqRrLZad1oUO8xA73iIfK1CNDtGG7Aq8Q7ZP9H1wHwq0ZHIh8djmkVBhMoSgsemXapJlxBOnzwRB3pDmVHgF8zNDcoil40bqIq7mlw8dh6M5%2F5dHYNocTLEyMER5aDpb4n8f5PMZNyMR2uke9QuddSS6N3CjjxzWY%2F6MeT2PBHwlfEaxv0QPMR61jBL%2FxpzaoBHFiUIpxHM8hf9ichfGxEdd%2BE%2Famaxa8X5yn7kbGwuZByABC8SxEhvvBnkXONDzTIU5L09BnQSSHbNbGmIS0HjOPtgsnaXLO%2BZRVKVZ37KDgAU5zp0OwFJVfewyR7x6%2BiKBFTqi08UmSbBret3cUeNV4jh5bwkm0L3SJtNcX1%2BQ94Y%2FZ5877dMkhyMc6oFgjMuKO3rP%2BHaN5Iaq4QF7F4emJPuHLeT91tyZGoGix1Jfxt3wEfq7V0JJNMUKQUIwgf1%2Bg2WIpz6wNNgcKmo3ZPwnvSisDrpK9E2hzTi7tYUHvuOBGanxcWABgXaLrmhUjAD7wKW8wufE7cMOTGwr0GOqUBOZ69%2BQgPfEDCt4%2B9ZZc3Jf8hDydy%2F8ysJR1zBCascoE0qcNeeYuYsHrburKgCGqrxXeaxJv%2BsXzMFpCXiOPi65pfDWzic2N7H8zqQo6dYr%2BuSxpuzZYjBNIc6a3scv%2FICl5eTPByOPDrPofORzhd967Y9WlnFrLUjUw9lhTQkvvwEJXzL7YIi2BxHgpfxQ8sWohD5%2F99tEBOvzqVN70ZLRR7ELY5&X-Amz-Signature=8d9b740a370e97d57f16703c50ebf2f27c17df68a0f24fe299b414b1ba8fea6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
