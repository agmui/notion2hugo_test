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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R6VPKPL%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICqmKRXFfxqkErYzjFqdLXLcvwdzpUYLJ9Fas%2FgRGwciAiEAuC1aVKH8HhQqCHYZxalNR%2FjwX%2FWLA1KynmB20Ad93pMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDzulmYBiN%2FKqEcGOyrcA3dJ%2FbzW0wy%2Bw9IkKjtftjemL7lAvp%2FUfDVNWyKmEeGUrNGTOjsHqIu2nT3hzIauwgxZz%2F%2BR2i4KGJgSslIy1FzuR7uiC9bH3pbLkOgS7zuVrWfb%2BhbzxUBoE8OOox6l7aMIddavu9eI%2Ft6UqeOs9UFwajIn4gDJjujXZtbjgeEBLWwHTS85taHSfBrn55ZV1d9%2BGKOVCI6uS24DHib%2FId4F9TgUsbiMk5OZOjQ0Drx%2Bgd9r4pXPRiNCQk5kgbGWv2d3SF9478j5vwECDmGl56sZvOeoUcWeylMKDR6THlGkrdzOdpeGutrwiasPl%2BF4guvZVfGV4KQX7Toyv%2BTCU1gmNKOIJLPFRkSvfx3DYQxGZ3vRx%2BOWf%2BXZJ3MhD0pXOrjm9m786XowPNES%2BpOMuKribF6WaaQUzkCzVu4hTwTByfJ69BgiuAgCg7pBLWGDAD6Vxqb8dQaw%2Fq6j5uMMBMjSe2ucrmwaNCkRx4xbooC47EOeuxmHP3g%2FztoR0BFmWVl6r5ItLcD4mwHfzuZy2%2B%2FcmVqMiVAMkxrRgigAj%2FKDrMFRkNT5B6U4Ka%2BaGGTszdIe58hyG7VmVBiMuwIeknEgZ0ymVAPbIQ3oal4m35%2FXy9nDG14DqYUbCU47ML%2FBtcIGOqUBjyKFmlb6K9KJw3Y811PdfFVTeXi1im1mrwzdlGWK0oKpmk96YUL1oot8T%2BomZ9x7o7h8GzcQdpaYOn6yNnBfEtsrh3SkXvdaLkphg8IENnqFyPxixJ3JQPu1MpXoAjqx5mzvveZqLS%2BycXy%2FNYl9VQOeI0k1xvsOtVyMuQ%2BMWbcc5Q8DKc5Vshi1eXzmEUwG9o2RCbV5CmuH6owbDwKgt2FPmeV%2B&X-Amz-Signature=d7c5a6a16c4eb8547792beba8a28c36b9ecb1eb8cc79e3c325c7f3abb7c6a22e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
