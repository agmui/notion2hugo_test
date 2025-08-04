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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT4ALGJ5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC3HlZcYBJaE37QGK61y9eY6sxZtioXzt%2BH1kridgXSRAIgcarQhQ6%2BEZFAO7olv4GBTVlRW9l98Im7YuuHMtFgWcYq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDL95i1pPOih%2BbIVn0ircA1RUcJS%2BUivei778eCm%2FFQiXmc%2FYBFjBqBG5TOVv8NCzyg4aUaDQSdqrb0W1ajKv%2FXhfnR%2FZvM9mHG%2B5EpeVG%2B5f5BxZOcxrPL35pnKSKq1CJPlAgIzf3LFbkGxIOP9mlPs17D3fw6QI9x5p%2BxUUxbXQWBjXTxF6pBd%2BhkT5Pa1YDVNcg26ubQSBWFw1TH%2BYPQLwzciD7G1WO9sMsoF7nwS8RQS7Bs8QGFR33uOjMf%2FJPL0NG6wpatJjKrJn%2BukJWUVJ3lVaE0iezcY%2Bsfl%2FvleDo2Mj5aME8UeEkEFcPyzLiCYm0pV%2FC9rLLBscRqfWGYcZ%2F0CV1XHEvZ%2Fyominrt1O58cW%2FFTGjY77P%2F2kovYlaCXWDITLBTZcnFicnCTw%2B56DjDfIPb2i3A%2Bepr3XsXl%2Bi7VwSKQhdRU6xaPywSOeFfg5wEH4Vw0e56bnwXbx1HepooP4naLwZ5R7q%2BB7rwffHURn7pR9pv3yk4rh4Oyqv2fBILEefcRabsWjVo2PyKUeR3IM1Ly9t8sQkXzXwjVzxlzuP%2Fqi3bIMYiIJ%2B%2BzpSXzt9Q%2FejpVP4L7RkMuNH9AHd6sJyqd%2BI6r%2FqTS9vJJw2gQjTbUgMeMRWkfSrYpil0y%2BdBkPIJ1joMZBMJSNwcQGOqUB7USnVf3TxkRRBJCc6viTGMu6HSN2siprWAZYnBVf7q8ZUcqAKnM4i%2F7bdW4ZFnHzXZ5D6rWRr3mMGI6xcqMgbxUaz5rY1iWHUF11%2BL%2F6ON3oHYDwNKCDrvCAqH61btUG0nogviR1m%2BdF1Kj0M2lUGGi5HjsnJNuUvYyAPFDHUQJb681IegRhGkV8siXAMNsfHbM09rX13VickVPkMXhROzsu3uNN&X-Amz-Signature=dbc21ac570c175bc3b4f0f766ec553b2631352b4c4106ff28cd294c40fe90282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
