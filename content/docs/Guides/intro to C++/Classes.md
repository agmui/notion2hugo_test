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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3HA5IAC%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpsc7zQ7fuFMdFQJLhdYVraULRbKddOXrH%2BvmLIEgGpAiEAmeLY7S%2BxZmth%2BHCSQ0DaHNb%2F9TMnwb1LLKxNpTy%2BP4wqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdhbuCWS6pP4mfvVSrcA%2F4ebLUE76VEIZWavFwdr4Q11ob18lojVxgvc%2B9BfRZpT9SzqU0%2Bg23yg4%2BS%2FMDH3CNZoPknkRRS86BC8HaOailgVPqwPgUsTYh2%2FKsJosd3nK%2Fd%2ButqHv8CA6H6rO3byvQiDpi7%2Fkc1fvCb6CgHhKuhKDi4doFVX73HOUIRtQz1rDf8crVaYCldV0SmiYmhBv57FA0NkY%2Bku7LQewuaB9v7WDrKGA06NrKH9bP2DKdIDx3aX5dORKF3k%2BMy8O6Plu9cMxspYgwJ80AOTAeb4CJExuXvrz8ntHznKlQkxwoUd3XezFyvT7AEG1dyv7zUrR2CaKicSlaIxS05FZW9R2gZ%2B0BCgoaGKaV0sYcTNYmpO8SDLOgjkiSCvmsxeFdPAEuHHf5RnrWNFJ5W4%2FkLKqEZat0qr4YOEeSdYAAyntCY%2BswKxtFr704f0I8pOFrcmmDuZdIBUD9YDqxvKiwgLwsrlsb%2F4h%2FJYOg81TvHQhEepvZrYd4JU1IU%2BObman5a67jV4Pt6rCbO2lODi%2Ff073AIau7qpONydeyktCJUc3mMf9LgALvsrrH5ok6dxTatmblkHmwrHIP9wG3dlBRhnMIouOgI56zFpYmtexDE94M9zw6ZyD8sIEYl43IIMMTW%2B8AGOqUB05Nnj43u27WBF1jF536HKiA8TY4jTEGIWzb1qnQFsXcU7iJQ3zGSrXW%2B6E9XecQelf4CF0h49Zcy02zKdE50QNXpgDXeYNbw1YmYy88TsXSqGm3uVFDrF7HhkBY8Azl8NBBAwqnERdeVGjOUiyBqbqycrBpRI%2F2%2FY6t5TkvO2ZGBLR8HAQm38I3QwxxDPOQbyve6ZtzM16Jh4ZM3%2B3nld6WAjBV3&X-Amz-Signature=21d8579634715b7b661425609041d9b7b39baa757ef8dc1f0e16b38043c206c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
