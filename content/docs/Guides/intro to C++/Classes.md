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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XFYPCGN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhDLqogcSD0COPCqiPse0ckDhdXEiUJyN6YLxVWbeXDAiBlnv%2Bfzh3vu8flSlaKRK4vqlu3kXLHdlL8ECD4VPdsUCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCzDtpN2OXL2%2F0pWEKtwD3AXjqkUbSLn%2F3iYfPHNLJmi3a%2FXxRhhO8izHjH%2B5uHZjSyo%2F8K92dnH6j%2F53wP10fvUTqfmGGV2oN0c1CSlVRXL%2FkvsqHhu8MTueHr4IWN16R7C2ZrQ6wa7JaNcEFMGlyBZYfc9%2BhfqyC4YlO5UXPqDbXODxT%2BSdkn9lnhgmJ5tH6ZsahfXed0zaQ7%2BqIOD1s%2BzcxDepIgnM7YiP96s5lzbXdi3gi0YUtbbfwaitoDGPWjEedFj6hVJpB%2FC%2BnvT%2FN7Ige2uv4n9iHBllP0TQXRRNvgdsHQakFDOwvs2DoN7LLRLU0oi81Itpv6VXtvE80RJKbeNh3S%2F0WDC8s1Ix1mVZ6KcpK9nGxPNLvduDmSNn%2BlBPQiao8ePnsYLlmuwAM21OoWnAWqOGIZUXkSY1QDrXft3TK5Fp3Iz97hUuN9nTbmlsGYFrMCx4PavLBAjMuaJ%2B%2FkQX%2Fgz671LN%2BWMJ0D9K2CVK4GhBKfaUhM5kFfOXBKcHqWlPqw6otrhGYwP5BXbQDhHU0a9qR9hio%2BQY5AGRR9hi3ReRJXoy6asO7DrGiM0xAWFTUD3QGB%2Bc1D4aO7M2MTPb8Yk57hOwYh%2BRY%2BPSn7zdu6Kvibnjcz41fI0IvywsHokGbiwNBFYwovqlvQY6pgG%2BVZge9sDpCKn0ngOsGhLnyJfS0oDg%2B5oULlQyLrwHErx3Fd%2FLJhTCWl80htAqJeWaF3o4y5J%2FyfqwlmQPI7Sq2zEKsDpK20GSLLlpK9Dw6V51%2FBkkJK9Gu97kTi2SO%2FAovVv%2FXRMZReyZlsnZHf4ewgUe7t%2FWN4rmoLkXP9phVMdUhpCrNhGyS%2Fln30kA6shNcqTwKnV8Va%2FCnx2GAOo2EcbWjmCE&X-Amz-Signature=7ebddeb950e6fde6f1130cd7b546af556a5e85626d0efa2ac41646c53093d067&X-Amz-SignedHeaders=host&x-id=GetObject)

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
