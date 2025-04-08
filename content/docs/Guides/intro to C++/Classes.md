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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHBC4SAY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BeDYUjV3cM9XG8LiJKbpHy1kTS%2BVsJIPetLK82pTJSwIhAJ7lPlBsRYUIMN7E0aezi2fVesmF0po2rSd%2BtAFVnLDrKv8DCHcQABoMNjM3NDIzMTgzODA1Igzh8bZ0CII7BIfAFKIq3AMMHS5PYSov%2BVBJ7uTV3R2QRvx%2FHL5QT9U3tzL8u%2Fe9I%2BJVc5IrN4OI5rvpgZG0RSN7QzsWxfX0OMzTfalub5UFTXunWrGRL%2F5Lbyd%2BBMtXRZ8b3hkPEINtoSAEhh7wo0CROBqq9INNKKV5rHRh%2B%2FGE2tRgbKnRVjHMK7HoumWi3fD2fNWTOCI4BQmV2uYx7A5bR3i5sEloY1UfsxTTp9rRwf8qZoz%2Foniryf0VhU5eC%2F8WgE2Sp9mwRXjrYyDnyS58cahnp846OFrL6T4YE6X2I0%2B77lhoKKyzxnlxDHaCQX1YjLoaUj%2BO0radeTX4LlROBzbmeTxCy9XRi3BTJrr6TmUHDJetuT4D%2F5XY03IgPqa7xQMXlbvJVWzq2iqat3I0QI5x7fnXDADy%2F1NrX2ajlqz7RCMjmv%2BaXqutvQezCW3s25TGF1GFIo%2FxpPboRn5MwDddVnPkCKBjxfWX%2BeukpUWZ1ZwuaqnZQJJFukvfC4xgg%2BXsjAdtS305UJzxtNCELS6DLM0KDM6Sr8XQN4UfcLmUNrR%2B4qzSCi7KsBXI%2FGrN2Ynk6bpVEKN%2FuxU2iRyj593FHLZpCXV%2BjClGjJDrjvCU0Nfe2clCvuIVw4n6Jk1fZYLCaxTnCRu7sTC92NS%2FBjqkASYPWQWRcEUhnikrtqAGahjJcD15jgxfOn6zxzZ%2F5bJUnX1nzivYqdGgJVPTZbTnWASZCEbNeZel31c3pz2PX4FzxXG%2F7tE72Jq3JHSTtkgA6BeS8J4xQxQJEzcSw1dTJ%2B8NuOK7d5bfaXXPnSIW1P6jplY26Bps5YHLaLHoATf239HugLI9OT%2FLqMcor%2BqllLkrYpwxUTfe8M927zKr46N0KZ1d&X-Amz-Signature=3526a9fb3c451fba0eb8159f715e35e2ec60726db7b7f543760b3404e5301243&X-Amz-SignedHeaders=host&x-id=GetObject)

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
