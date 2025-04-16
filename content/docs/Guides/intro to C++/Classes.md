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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2R3W7QH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDTJC7My6Co1ALv%2BVBGvAZ9K%2BjtO1zxYjjz9nciKR%2BBAiAgr3YcpoL%2FVD2DpkCOM1LOeYjCFVovBdTUx0Fw8rBZ3Cr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM%2Bg6sATXOKaW4VyXCKtwDGYQ1E8vR1CBaxt8Oz23jp27TX0yQLg2jm%2Fi7OuxUXsBgOT0ZB7K3SKlrMpcycg%2BBlZrYosJcqkbY3e0d4Ycj6aqxB1Kky%2F4OdA9GmCQXw0YRanW%2FUPTQ570aXx33FOQY4tOoW6niCFwWATMg4D0ZnvLsIhXt42e9p04pewB%2FQEaG4jyELqAwQYg0CwvcQ9ZTNM3wE5nSaBxLeZJhMaqDoy2I6dEg7fwz4Wu%2BKN1ucfdCF6jvrZxOauctdIe8ChOMY2VtF3SphuvUF9%2FAbZNgpJCbMjITF6gwv0mddSlXnIS9PbK9VuknQSQho2HhYgqYLTgj%2FfqLSolx7C2UO0bC%2F51Vi1C3%2BwPU1F3Vyqd3tPtQzvQBUocjhQEJ0kk18Th4uagymk4ens8Wqdsf1azN%2FtqpWC38eMI8HLSW61pjMfnY%2FZyW7MrWCdYfTP9Z94zuUYB%2Fa9qRDJO1VX4EEhADJqGml8g%2BT6xI7IyUJPQH%2FOt8H5Vzvg9H0YXuSetjccjERmH8hHuTYavKIAiL5sHbY5lwyLOasHezNPCXxuDKb%2F9ZZ4gWF63Lnc6z5b9TGBihC6gzTtPbcsRYAze6eT6Af3d9QGE1HqfxkMyawfAIXIi4sVizSLS%2F94%2BH5mUwsvH8vwY6pgG57Hpg3er%2FX8ohgQuIKD8tusJ0Csnid5UEewQnddjajGdyLz1RNUfITWFEc6fam402KiskZX9h1BAnPsQFHVjacS4qVIBWgAHnubZHHjrLvjfJ82F0NKTBQux5PoXPIgqEdKZDtZchJ02J8lY7wp07GPXyFWBrQd5%2BwGoEDRL4A5qDuzdBeKuSnl9z9mnge41c7JW4JYdZ%2Fx82D1PFK1okfd7VE5%2BM&X-Amz-Signature=9f1130d55ca2dd24befe38d34d832ba3f2697bf0620149233826dde08b08024f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
