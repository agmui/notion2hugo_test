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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLRE7CZ6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T070956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC59wYwqO9XqNoOMUwxjM45SwrnROHenoiDaLSuFopqIAiEA1y3pi4FgA%2FZ%2BMAuYL2LlHnsH0ws8ibW93%2BcWOT0Kpd8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDE1ieTIHuxoqCXiRTircA85nQzXmNPkhiYGF7tQQhnNeekkWAstcPM9xWHU5UhA0Fa8CM0%2B52%2BaHM35GZ3xWyzWFa%2B8pV%2FYtbIaLDE9vjdbAuxMiBirNJvKAJ4VlzD%2F896i%2BEX2dIm3uX8jzs2cbKir1MWrvDPy%2B5ht%2FNNbDbndn%2FVeNjaKsT6xC7u%2BoJTZlUMvfVlIkAK5hdlLrp%2B7GIoO1t8YmjoWqa9oukYzP5kkDhFIx1twSvcfI2hm6RDdcJSswelkr%2BjXhUV4KFIc%2FoY9E0F%2FolzkUv1ZZxAHQDPYJZ5g3ysYPRf8a8AscOysdICnsEb8igKvE6yv3xo6kKi0zAUH191QmuxXO2XCYS%2Bu3rqnVSXKONzpluBYDDCOIJ1p%2B2%2BmxZQHie6d5k1%2BXUX3INEh5UAj79wH35Vxhzm37SPatywmL9HXpChmLdm0v9Wzyssu5xPnBdWuqXAkTwkEiKu07ZU1UqDmI5020zhHFWOGOq4JMFMyhUnw%2BsLXudeX3lW%2Bys1y38L9F65fMnn6kzOfG5pHJpbV3%2FoseA9W0S3RjwNY03n28AOmW6s4AWiinv2o70QMIeu23i07TJx98XTjRBl7bdAuujV5UHPds3AFVO2hjc2f0wbjjeVHyXf%2BDpKzTYMQCsQ2kMLua4cAGOqUBKAxIZfLFX4CeScE04ht0Tw3AX4ll7XeaQ81UxYi6HTFhlbROfMTSerlta1uHrIwbyRYbyNlYWlowWI7pymVX1pxKXnfqcSbZAFRO8VDkT0N%2BauSDqiXPKwHpheRdE6KgOpYHkP3UPaVwhZOWIPu5NjwAYjHnNEWEezTKYIuS4yd9pP1VyxJUWZPngRkg9GM74DzreHRPVHXsK2iQQTi9TLbfRZ7m&X-Amz-Signature=74a5ea7255949fdb08dcfd640c7aacb4ebdb5dc3ade7df399175cc9073ce49ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
