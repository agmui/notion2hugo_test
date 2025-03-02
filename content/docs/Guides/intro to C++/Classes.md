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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4HAGDCV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDpx4MotpzuOV1yqOZj1o8Vi%2BVMWBkvgdETO6F5gTpPKQIgXFSUd9fU1FuEi%2Fy3hM5uRB44HuP%2BzUsXmfDWqEU%2B6%2FoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpFx3PGRn8z7r%2BY5ircA6vwrU9BeaAWPlDEt9oj1Zoz9u%2FV06P5pV3IarwUSjNZyurJZ%2FkkKGWoyN2tRbQhKnm8lrG9ywzBi5NjWm3fbG39i0GuWrFEalB3sONiTIS1PrCE4vuSyTlGqPyGKviZvshjI42T79DEAufTmSt6HqxXWHSoZOGv%2BX1OiwI8aXFmM8lxCZpU%2BAXLGNICCB4RMDpShYW0KsxP7UW%2BtDNAg7GDzftLwUh4%2BH3DLNDt%2B7QHfbFCm5T75eK%2BajQNyCaMScZ%2BUcQNxDTMh9FksXfwhudqwyCVgUTTB9LPus07CghfL2aEplFbQblbNJ8%2FC32KzQGUJ9YoNEofbmTAAdeGNa4mQoj%2FhHMPLmfrxiaGLUQIsPlPFzdt4lkEhcPkgjx1USjA%2FLt36iaTIUqsygfn6kK%2FXmWmND3lbg7yUhi%2FDNU5FEiRDfrQMxWx0t7q2kSjGjUMVs0U9BFwH0VX1tY6HXIzGcxP9DDU7cv8xP2Co3PpIJuGJrdwPuLN8peO%2FRV8wepQYj49wKpGuNhkL7Xf2i98FrT1Rggltvb%2FNUe%2Fqpfd8VeDl3ltS370ZeDePehzBDdeIsuUq427FBfpb%2FWlLpyJrL%2FQF%2BmXdqpbIttoaA%2FiwqIVz0XCZhu1t%2FAbMIb2jr4GOqUBtp9BcU9Oashs8F1uD00DH9GFYAYJmAwrY1eaWd42CZvDOXkJBYxE6J%2Bk5VFogLxn32E5R3d1t4wDbqMrg2yokn2qt1gKDeJ1PDGCs4fTlWUvragK8ItdDuUUjLbzTJyACfIT9cDnMm7I70w1amkA2pDZdaGOxFd8Dr%2BwJDGfxK3agT9iYklzo86%2BEGkHWyGMZYmO8O1e%2F5vnLP4HhyLq2yl0zH%2Ba&X-Amz-Signature=9b8d09019b8b31bd910ff4db7401f87fc198ff16224943a3adbe34645c78c365&X-Amz-SignedHeaders=host&x-id=GetObject)

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
