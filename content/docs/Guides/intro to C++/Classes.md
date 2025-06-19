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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG5MZLES%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN9DzvpEBoMdGD5YlhDBsQXcuFmT5rKwAIXSXvQvicCAiEA%2B4ox7dVqyuTG8T7ED712j1cgJOLKudw1G4yMFJTZh1IqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0KFP7kU0XDKNdk9ircA5iix99n%2BaULM%2BvjZzlOb%2B3lrqLZkT1A05N%2FF06Jr%2FgiOLnqkG2y%2B1M0E8Zm6j6hwO7gMDaRNGJRqQdezRMsRpjGe4jiKT6oYqvYcHA2fHibBv9FYQrnvd9eSbVJ6Ik7FC9VKMWMRt8U1YPlB8y6o9MEVsgQKdlOKh4RbePqMUjsyphAI8YH2SJhQBZs%2BKGhR1QkoT9hrWUJb3Y3BYMxY40%2FdRtks05bc1biIjiAgxjwZQwhAP7DYtf4xWNcv4BhLIZE8O7yuVNtD3pN9tYBU%2BdevNn21X%2FWZcBEFMTxv52E%2FMpD6bqb0Cz8GokOi%2BwkzOLVTzObxtmbpJ2gbuSIzeY4voAhCYMowWTufkqBSK6yFlsutYjvc8w3tS3o49cRdfRvU32WxdG1U9NIBYjuWP5zRGxk%2BUeDNl2VSq3AR516DFOebElpCX0rWgx%2BZWPC%2B2pegCuBSSGCamIsd7P53dljy07ZUvfbktKWHsvrRHxV0fGoXTCyJG4box1jtZW3UhVpstvuuUmuzBEamyZUctN4UyYkh5biDJuzhVyY4rI%2Blx%2Fbz%2FlJTpe79HqXaNZHbRhENKyAIhAkJ95ClZfu7NHXwoBhsqnaNzq60L6laJOXUDtvML6tP9fmIZfLMMXfzsIGOqUB%2FAyN0muuT2zpSzUKr8DDelS92VtFCiL2VRE6WIlFsG6H%2Fy2aMe4zmi%2BvkDrqI8g3HIv6iu348R8mxSw4H0tC1ZXtC9hmIJ3YYfDxMXXx8CUGickzFfDhQDYE9lcmKgUgVZHq9IFiI%2BWL8fWLfigxbjwTC9VENSDZKrJV2FRktq%2BmTSImryia0pv3TXtWEG3LCmAo2D%2FCpj21AF%2BuRDCAdJmkYmeq&X-Amz-Signature=9c1370e2ac0c02c44d0f593a326e3ff1140d524046418f5c3faa20403189c4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
