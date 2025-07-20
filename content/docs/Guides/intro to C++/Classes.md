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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGUUW4K%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoK%2BySQPSwQEiX2oSZA3sPdnvqL%2BVNW6gFNVkUmcPL%2BAiEA7Wx584Sg%2Bw5o%2Bj1jDQ4MJgc9CePTHDXns69qolpl3WAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxLnvA8WGeQnxxRUCrcAwANUTZxqnmVnr0b25wWAbwVQ6kmjJQoAv246adD7vfpxcZXKQ%2B%2BLxou4ds0s5yjJG7Sd6KNtgs344J%2F2xNuW0rkNKActVZmDR2evqrbsj7SwAOJ1yv%2BQgeWkR85Je6ANnGCwXTk%2FH5Qm3fbY6Py3NCkVOLfg%2FILT%2BaAWJ1%2FZDYOeX4ZStzqLhK%2Bea6i1OUz3Omw7NOOaK1pNqTwmphwEEw3RfeqPul2hW%2F%2BnSiGlSVC9Ivc4G0%2F4Ag%2Fljy5nRN7dZYOWKWj6fffkYDM%2FDzX4xKFsAQXNEDK35uv93Py45sPZIu663ZUUnDqfFoBxAQrEbnrTYU%2FvR%2Bq0JCeAB6rKMeeQhp8O9MsBJu%2FalIiONlcTx%2BrgipQNgdsClCRx6O5%2FNwMLP3tcwB0JVuGhVL6LArIfHx9YgQ3MAvEHhGWXJeKCmNwAOt4DhjAWtHIyYmdq%2Fi9AMUu4%2B%2B75h5YOCsIbZ23RCJjx5EJxaYTJIVn8SJAcfobch%2Bry2yMF3Dpv6JUNPJ7t0k%2FBECDs7jYDOLwojze2XdI9c4%2FMGT9Aaw3E%2FKhTaPD%2F9AfOw%2BCY%2Fm7Fxl%2BytJOCjug2Nzb6tO7146ahCqLnZjTFmZznl5YeTIQqTNIqygLZziBM%2BPA1lc6MJjW88MGOqUB34%2B%2Bi%2BjvGXzWoKwx5vNRBmppNLnKkIkhvSALJXSE4dMwdHSPJs07KwWJS4OR23%2FxTn7NiFX3SzQYv16Jbts%2BU%2BvScIPE7f7jcRlu6cmI5B6zgWTaxPGZwXvI0aXVYoW0BJds3hSF7ujhLzwNhlXao5AUj%2BRLIJDR3sih0Mn9ow9%2FZpzkDtx6Za1x8uy7syDqfd67iRfxUR4%2BeLtQqE87xit90TLk&X-Amz-Signature=01b83ce17d6e104c6a7c8547a84df56c610159c973e4498f113ffacf09aa2786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
