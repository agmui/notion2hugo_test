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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOQJYDOH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGgwLEfIhqaEMEoWm2dSaPqI0QK%2FIFeO6OxKnNte3Q5wIgNMsm%2BUaWz2h3ClyCy5%2FlLRa3X6JtmZsuOtcdEWdlX8oqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOf44iGUjZKQaf8fzircA%2FtciTBCu3qkkJfPuFZ51XCNblfWW1k4wkjoJt82cHLMp9MSJysdoQKBL3I5XSanjaLI4Y%2B%2BLYJti5mO8i0EaQMnCo0LqO%2F8B39gJGIdAA1GHb%2BTxQyG7%2FxahBin4Pvp4bdpg9iNnG6Db7jRui0pBCP7Bd2vdCc7TO9FuE7RxSaQkyh%2FjMVBKY%2Bb5iMWO2Ac94h3r3XXRpT2MaH53SojqGuikFx8UOdDYujQZ2%2F2zGi975Gro8GdRFNFuaH0xazmHcfoLPbrPMflZXrdp183qVx3yIeffROCvUGp5SvHl4gsWF1WALz85zgv86DZd%2BAnU1kCl6jMwX%2BABeQRBU6SZ9EREG9hc04ReXassUgpPCd2JsbJxlqIUGD0wsiPpppH0TFROzAS8RaXw7n6uOzoEMpWkV66NFOwkqo1t6S3xCYQdWdGouLwz6WoZBfAfMTBeaiw%2FLTilcR%2BO3N%2BYVuAZe8GTDyfWsNlS4VbHFTNlXeEYxPplrUaLjBzq8SE94MHgbLu7zRynmpyUihnv1231E6ekpGr1cTwFx4QN3XJOWr%2FZgjHoiSOZ5CFKih1r6hFJbqWn2bi%2F5jtRgAW6H08bPMKQvFULqOrROyOrij24Rb4ZLK9vic3Q9VJAtaTMP%2BY7rwGOqUBz%2BoBGGAyNfdNO2NYnvtSp8SviIr1aYqrjiAacpsk0xEbW1IbW%2B2KrIw%2FYemM23A1FqgB6iGggIYMFoi9MdquKmHcEHNNihEQqvKWvbBK0mKS8wfIlMobS21Jtcbnr8MWqyh0tswiP4Lg%2BOVUWBy7ATwj16tsmF%2B6tH12bMEV1sXIwT0AoZ4E1Ydpydby%2Bzc3cP7Je4yfjsamy0pe%2BCVGv6oSPdel&X-Amz-Signature=708daebbad0f4b3de1fa3782b56b98953d198da6e96ce8aa5cdd6c74572b8eff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
