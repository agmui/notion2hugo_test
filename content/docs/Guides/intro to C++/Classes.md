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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFGZUKSE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGw8L2htw%2BajNEul3D9vaOOlNaF0pWkgvZURi5VHsMB%2FAiBkyr5yLO8R8XU6qPxhvNVHcDZuMOLyOQKRT%2F%2FTrPcaSSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMsJhXZQ2OAFfM%2FsfAKtwDBWUWD4lhGdOnK%2F2hGIpkd6GPHkW9wMjvfdpWwykZyLOL5h%2B774EPxyPsAGe6pKIgI0biq06jaSYbxe5ljUwQkTGrUmwmUkCrxUz%2BCM%2BfxM2IeBeC1nnuAWL57ZExL%2FJ4TfKZ%2BBdToN8huM8OLR%2BXDE%2BQNu6uhTLwvy%2B82mgI8W%2FBNSomnaAJVp24%2F47EUWqyTb8B1TJk%2B7yfEHya9DL5AoYPAAiBaJKUomELnbW7YdRW995P5av2aFHtIwbDSi3Wi9qY90Vozfxfbs9VKaapAr8o0mhiw7rkrN3pdSFQaE9MUvNj%2BSb2v64hS4VZx7iPYkvUWQpHSgZYp%2FwhaJS8mocTCH2b1eASlLkAaiPJ3sPDdY4YJwh%2FEoksnO8C%2BpZcEuwnxaNyUNeldCzjLPDA89aRyrrjkxsDoDY0sDA%2BKWSW5lENJ54UD92HBynPUW5GfjoBMtcVMUk0GXb9kZJT%2B13U3atGIc3oKbtHpWOjp0g8GTo56Kj0oeDwGGB3YX6nklzhMhOjfRu3G7FKrzP0J5ojxwxaKKcl0qnKPbVOopg7elwQQ2B93skXv%2B1G4tBP%2BpqAN6ezAnK%2B4qdzMYtBKfa6C4UtTSZsqCi7YLpZvm2hrcFmacvr2HC3fr0ws4v1xAY6pgG6CsT%2B8WjXTIqrh7h3rOAHxhvMYGvnYp00L8CYNRGHGOdER3%2FmfxkwcpEMnXTly%2FeLSHVlBr8CJCKAGmP2XlWxKFdwEkkydPxDdBcZ38Ec%2FmPTeBq%2BlKaTgb1V00%2FRfeSClWEd7T1elsZNLpYjt1JohaH9gPD180mxEcPSyMlyEw8UKMxGihiXRgn4aG6gC9KumjPfxlXNWo3ExfaMk2zKNgzyf9ze&X-Amz-Signature=854cba8f660da61d57931d2f670a4c2c7d4af919fbff1c63461a29b056b64e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
