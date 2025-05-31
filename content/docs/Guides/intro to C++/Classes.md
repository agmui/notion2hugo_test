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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677ZLOZVW%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgPu44m%2Bjjh%2FSBpF%2Burx9WVAuYesxix5Xy%2FpO8Uyg4fAIhANZGYyW3xp6NtAeJxJdU51m21gm%2BdEZuBo7HeqQEUTjsKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxjqpr8JR%2FEE%2BT6C34q3ANx%2BoLEuxUwh1lbTf4QUVZHStkLrAth63CvB5AaQI%2B1dBYtSbRdcGzE8uS42RyM1olOSrh0dpGpHAxI4AfiLXtXs06SsiUxt69kmIqxKpkEdG4KbQYIL9XIhcMojgn2paM%2BjU0zBzLAkZVJqtxyQc68OSa%2FIhpHiFQmfnvjgfXJPasIiNfGgKwzrLYLu2f9oNMyi0E3USP8kOnRW23izwl%2FhuXIE0vFva8ce53Gc%2F2wF1f5UI%2FIbGwJ5%2BQWiyUIjVz8TvrPijuY%2F%2FHeKWpjJGq7qC82RhpTkED0Hx7wDG2hDkxX9stGWB59BOjr6p9pDujyHru5YKaUP%2FB3hwD3ZgPqOl1HwJhT6OwSDOu%2B4XZcNdtV46D9EQB2Lnsidw6LP3ddNNVupzTTfR9pOtbOmAAAiWNwS%2FGp1%2FE1hlfOxJaAB93aLs7aXxN86Z2BrY9prfL7%2BJnN2HTXdtoaMPoE3pTVnk4Q%2FTwjWo6reZtVhtjH3x22WsRujhJKAU91mEkUM1Ob4NFkQlYlJZQWFhgLoGScbG0E9r00Wmbq6wBHLh3DigKsLaGeZuWQJtg7GFNSxcR1PRaSKMGnc%2B6YdzZj620pn1B5QVO3cKFVpKRo0G6Wrkta0FyC2i7HrwTVkzDd5OnBBjqkAVKmyO0xkalcd4nvgTGljAU2EBopPaglYLrWXMdm5fIZwW6DbQtHxITn8Z14wS%2Fpj%2Bg%2F8lOzSuPLica6b7zpF1SRwYLXf24rmeM%2FeC0%2FFqure4XgWZ8ovLhI5SH281b0ZG0SiEEEtqTP%2FPnLTaLTGky8G7MOdZp2kwic72yD%2FhTIR6Z9189MKC9iWJWGDJ8qFDGFgksns4EkX8y%2FXQc9mo5sWm4U&X-Amz-Signature=ff48a6b26da1755c4ffe8affbfe9d352088c2103432999736ba3b373c58336a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
