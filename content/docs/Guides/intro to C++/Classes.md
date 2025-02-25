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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W42IN4GN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIAW2IU6mboYVJbUmG2fxd6y8IhXpMAXpUW0jPpw0sp%2FtAiEAo2YkJfFdXdP7MjPWGNF0aV5u9xJvgmMYVylk3PxqhHgq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDuLnkcz%2B%2FY40u8lzSrcA6SJw2uxgfbqRHaEE0q8yNjT0geeSCwye5CNQTyRCHOEZYI7Eai%2BZcohux7HGRNeo2DyaZNsWr4Wy1%2FFQqAz%2F9OJtyWNPKI510ti5Z2UOEORS4S6K1tCc4O8cYeAWSjLK6FQcLUvq52Bc7aWaSiV1LmjjcuZJ2zy1kMLUzJKyt%2BNQWc1X%2BrPV5wIOxD8w49KA3KoPdNf5YLUKIRSJ8HCAOhD0BE%2FNI%2ByuVynM4YGzLWxlfot8DZ4Ctvv10nATC3mH8Jovw%2FmWNv4NHE4Zgo0rt%2Ft2Nq9bTEGZImj6XiTzSD465tPk0M3%2FGXDHw5bGjrhYn%2BfHL9dMSPhFfvN0HtIkedBGY0%2BOoTYOF7ZumhHQKwU%2FT3Dzkb8ullivgpHksrRGpFVmTszME2frdTT1PLSlRC%2FG%2BRPDmfNFbICfPIsJdp1O%2B6JFsEIOaAde6y5kCovB50WZMqSEwFA6J%2F%2FbINQz1SOKsXN%2FvC0Lvm8XzzJI22y94P%2F9jW3JFZ%2BQd7085uBgPVK%2B4RqVQraGOcdlKP2t%2BiFC87zJBE%2BNuBw2qZlo2aXicqcC59rV6mu9kXsfyDo2bkbAqwEzlrENDIiuJiPVnt54UhUIq2HsEO7cnjSjvhgn2zh0MOrfqw14rwXMKmW970GOqUBylErW0pd7gRQ%2BqVTOL%2FdWy7%2F0zNjnE8UmuiliZ6egfk%2FAqn35652SMihQbZczVH7ZLipT58liHJ7VqYzbx8nldJRc3qCnAQaAvvpydLPLQdMflPZ1b28aEpBDKY1iMZjHBf478V%2FRorD28XHJhdkNyVixBKP0O4OcZTD76Ffn2ti3NTNJA36FZZop6rCuzFdEeY%2Fcjt3CatrQKavpbRmfMg3Bg2I&X-Amz-Signature=7a1ee6792e7e5afa5de5f9e38b002c77bf37b27047d2b938b23a9747b4736cfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
