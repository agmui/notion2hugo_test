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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZLYFZBM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC4gTw1CUC3RuPGoVaBOn1DVfN1zyhJ83j5hbHazfTthAIhAMIqVHY4AfCyoiYAsyQdpyuw1LLap2S%2BPMIyolRqibLEKv8DCGwQABoMNjM3NDIzMTgzODA1IgyOY%2BNs%2FQxIfASctAQq3ANc5REZNRoJ3nv6FbJqye14kjwWG9MWFxHSBsKOdlpdhHdWgv4SR8VAoJ2%2FbOO6lwF2EB1mK7xPsuQga%2FeHe945OGUM%2BxIOXZp9mJrzednaFkKV3p1dP%2FG9GqXE7WaHXHf9g0nADoWShTIzxhaq%2FdME7NjCgRdP63ak4rIufYu%2FwGOViBhWrMHJ06MUdfeFKRz%2B7z63YjAXCZRUw8YY%2FkjmwYjH3NtV2L8uOFEmKHhdwDQZes%2BPyGmZHmx1tT9sBmmwVTqTgVMOH04npXKLq48R2czT0%2BH8eTgWd3LIHefCZuxdHjMjRrDdD%2Fq4K%2FSZa0TgWLZ%2Fv8s%2FfVVKV6E9OYcGWdhLwxhARWlrhKVbzK0zYOlTgLhBRCatBNfVTJDWprD5lBm18P5YTbuRYMforL4E%2FXkQGjCbwJV%2BKvHtafCBnfZ%2BaciYwg%2B0CsmMVTXbgRU0S5SrzMVqh1HUbmX9lM6ZZk2OjksbLuIzmUJa8tXp3qJju4XjX0FRkHQ5wah4dt8kyKLTh39tedhVOJLpXAyIRzrmN0rZ09271yE2va1K9gFjv1boDQJEBQk01Xkka09095IAsydVR1f%2FSju3TEmaDYHlxgdLwossTNXFGkzo9p14eN%2B9EObKyyWoEDCZysq9BjqkAXzAJ7yza%2BdV3KHF4pJ7kJzYrnRy5oqaX9Lye9mHQijibgn7vg9JUsA8R4mDZhg0%2F2bZzFwyeGCpZwTWPkBrEH1rMSQGvCanNSP7OZefV4VzHQlH3BDAh1XwuYgGycBjAnXddNqyjT2blrhkXIj8UaCSLTfYXTiDyNt0H7ut1KD93owrNRY9IpFDtt2K8YdnVccrlWMZ7OiY%2B2BvIPIqOllhQWpX&X-Amz-Signature=d7deb794778f11c16340f757760596234e85e0c7776685e2048e727919c6cc8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
