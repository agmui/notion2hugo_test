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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5KPNGK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrBySXBDBeNyCU7Jt%2FQh0lUCYuPBow4LzdeRfTbF%2FqgAiBxEuM49dy81BZp6RAkggE1gZOrWjQRgPG%2FChF70AiafCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2x4M5X6xCMuByEZjKtwDlV9XIjMH1NRzxDWregESLjCXOlS%2BXyEWcB3Ep4ZxTA9gC6R34ox%2B5XtFpSbdFjgp24IOFhh3o5XI9I2JJNrobo0mw1%2BcQTOBwrPsuoVyOb6hvxobvcDWuZ4l04rTFVNBXM6qBj2m6POpOkvchZ%2B7kNbY%2FYnN4f%2BAViJXXPAambcYR3cyE3r%2BszAwlwqXEurgXTeywwg7G%2F034PMQ5XE3qY6nVl2jH1B0kw%2F1TkecjSf6cDZOAKAJidG7FJtDgfEEI108U4i2WAFbI1PBTqAvDGC%2FoMmIfqiC5rVo2iZJFbcxDSHrDV3hG3ZZcpzOL41S66MQVnuB9p6SOXf7rlIC%2BxoRNu5fu8Be3j84MtRS5zozov3Xzo%2FdbL7xLFEVIXf%2FK%2B%2BmUYBfQe0c%2FAH4WOl7bTHwE1aaKjckAZ9sJ4LKQ0vuRHmzsOKIWw%2FeQlHsd8w46fKEQQLlag6qMMBzWt5zTuXe%2BgekEUYfX0%2BP6%2FMlNEXvBj7xFfMuFIoznGQDVeTCoSXjB%2BWsavc5JNvgrcURHuxqbzSvosXDWlns83VtNEHVlBIl9MP3Dapfa1Tq9Sv42d40ITdWVdp2bEtDJjH8bO1yHOseHshSfmSbCFcu25w2P7xcaLf8yTZzA8Qwgb79vAY6pgESSeqGIofDts0qmtcw4z204zchzOuLsP%2FIepzjIn5gfgLaLjyYrHOA4CwUjsKucCwENxNlEFzxjf8G7Qu%2BrYn1Kjyi9ojrleMQCT38ahSTyGmkQHz9qmg0pqdUp%2FbwLnKK%2BJeMX06jfXqkWDKbu2qkq5VZ7fBDTaQHa81lGTaFajo69ye0RXUKeLxUZsok27xGAyPbjF1I%2B4xegrv8qPDSIN7UVTyM&X-Amz-Signature=14197d58fe06fcc9c95244d58d722b589ad933358a603bdf3aced06bc7c79fbf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
