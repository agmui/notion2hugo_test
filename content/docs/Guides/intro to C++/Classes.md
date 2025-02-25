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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMNMWZNP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDwaMhrvUZQZkJ%2FCBygYvV69Tuk0B8WHsSzHRCD29XXlgIhAMSz6kemhWROiPdXvaNe52rmzZhBUEZEBXgL0kyAUybzKv8DCE4QABoMNjM3NDIzMTgzODA1IgxCIAHFBiTqZG81lCYq3AP%2F1XU1CmpCb4lCHfUgMOb%2Fe3R6zPgqST0FKCPIoozCWtq008iseGJp6fz7fyKP57xPtOeCcchvt5jApAgkQyGfGrpzFxTwFPNGCV3NGJ%2BxJtcw37ZhaFxMVSV2XB1WXt17P1gfwxbmT4jYnMa1SHSe5KAfYIXTyOiXfk6OLuMvIPmIHhRD0d5Z7IezMk0BQS8osiUA%2Bdg7gABVTdve65NaWaSpjFXEwfEVTDgr0QJoNpNB8ldbtZPdUoqLw1OeEuvCzeKM%2F0gSixN7L2jO0%2FW84ROY%2BiEZgZal0NcZSr%2Bn3r7qrx0xXV2yuekH82DrYGGsVG0fxf5LQgUEFuWM%2FE%2BrYGyehMmteSaH45fwOWAjQs0GQiVv1jMn6uvNVQkRdGreB3aFVuHteO0NAujetQ653CaBMkfJ2EzyjJv39XNqjRG1ODFoNvpMQ8Vf9TMeJan11y5x4BjNP%2F5iy6JkUbrdByLfqXTL7azi4y5UtqreMfeFzq5AEWi%2F0MBXz6eUB%2FJT5sY46BtEtLneCDXUnyzL6cwP95S%2BgANEVXddYG9uwUrGWYoL22w%2B%2FXYDNWU1gMstDy%2BpfueE5ax6eha%2BXsZREvlZczBjSJ9CfPafBdoj8V5ED92JHojUHOdDNjDL5Pi9BjqkAUjqNWf70Zitm0gAuly4DNQsRusxKdW3DyAs4tKdYYngk%2BcYcMU0Y%2BlkuWGQsvfpaI5tpEXvEmlGvVPUJMqV11%2Byz5yekbAUitMeagH%2BsHsaDggQYMXe8ViCWli%2B7E5nn6v8e7zO5mMYxWx9%2FY%2B0nBZSk48Ocu1DDyW7nPryyFXO4jV5OrzWckLAecQP7pNJTfD8c5mPE%2FXIvRwdME1eRxovf11P&X-Amz-Signature=0752c1d8573c0fabbb7cfe14dad70befa103566004298242d7237f29c105f64d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
