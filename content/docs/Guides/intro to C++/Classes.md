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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFAEG7KZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCICm2jdpBBLisICTWGotqiDIMvT9PYNhS2FYuU2ykGQEHAiEA2xyS9WiMCfrVRBymaE05BUHbb6hKoqSlBoeqvMkNbiIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJeoLDF9hpsNJt75TCrcAwnqOdzqjcENadeNZ1CULd3EDO3%2BOpHJ9cMCagZOxwoJEbFozjs6JTzhgz6IXsHCIEhhBrz8DDJrV35%2BQwF6JHmunzUed9Fd%2FjTN6K6H8HD%2B1pDPJLSCcvXkV3v4qtvCv1FNcVJKS7cMrlqNPE%2FRe%2B%2Bdcwrod3j0LlxEidXG9rj%2BZBd3kNJE8PA0cunfmiW2l6waEOujMofIx6uO5Mu88GxEHjD%2FnGzMVSezmFdY%2FR%2BzVgDPthahjTpoB8p4XrwNRH1xiyizQwmahogDWM4dDct%2Fxur0aZvxa40NgAiBAeKqRH8kvxQ7uAIJejYwDpCwkCowLrxVdjm8DhueReuYzuHU9XXswQnhUhOwwk2ESnmOP6bSULTvdZx6dhyL8s%2FURyE9TcQFWqsAWGGDw2S2Ui4Au8JnlUzCSyiEQ06VoSBEy86nIpiXoya%2Bvs98AF7ug37%2FJQS8pB0p3kTiEBox9VT1k4f3PLNKb4VUt72AXm9PZe9gBI2c97fLKixok7fhT6cWn0CeqKAd7DV2TEfXwehRIn1mJ1M1L9d86Im0FAM5%2BwskbPaBoVFkWa0%2BA1dGE%2F0Pqsn4huhvsss0kXNRfwCQg4QbGtyoFcEJhb7xbZcbajKBMaBkidUv4dQbMOK3rsMGOqUBpj8qboIRQMORfZovBxo5Uh93gdGQ49ajtf7SFR2r85CQAOHx56grXiavoqmlf%2FJFONO2c8NxRFVXkd7USCpvMOAKXeRN45GBYs1YNHUbi2DZmMPfFOXXcFpZoSUxCC48Mcvly13Sgy2zBXBD1XfBGOxQfqFqRD73q7n2we4e5ykycpVJ4qZE8XtrF0iNVLLb3AT0U%2FCkGZLMdKYITic77HVU3skF&X-Amz-Signature=305bf0671219e3b64f2466853fcf5b0c89caf952785efabd919043ba9790fccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
