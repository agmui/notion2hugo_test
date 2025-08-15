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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XV4ICBB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDbrUbvLiubvce%2BgHtNB%2BfxK7zOvW6ynXreaald4K83RQIgHubNGLDQRzu9lx8i7njACT%2BY%2BKdV506VZ3Eejny%2BJVYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOjeSvqZTHbawjOK4ircAznlqTF7h6S7PCBo997FZYBvQvjAJeWeR0kiNHNJfYPn01iFRuzLvCa6GhfQ9zOD6bVMGggVBVWrC7Yl7peQy8m9s6Wud9dWJ6cEnfLC4yxnVN%2BO0oL%2FCtkNbT6Fj5Rg%2FNvgoWg%2FXeySGE8ZRvLbf1Vwx6Um%2FYlJ%2B1wNglHicpPa6wu8QfgXxUf%2Bz4ZsQMs2N%2Be4o6fXCYBjf8qtN05KHKniULYT3nesh40kGr6%2FPnV%2FL0DqG8N7gf0VLvR3FmjAWArtVLtoq%2BgSJ2srR3MnlkWaev4Vol7bzRANw%2Bhtx5du%2FvQAycARQKqQjR06yqLeUQzmVwCA5o4pgWX2VsaDn%2Fr5pBdKE%2BlL0SZzCBcUc%2B%2FkM8AGzFln1c1mOtFOiGzVGyzrXyBKf%2FF8wsCAX7%2BtzNH2%2Ftse24lGCiw%2BF%2BuGkDplm99HW8voMk6sHlREDMaPudZqQ1a6cT0HAecaNYhh%2BCt%2BqrGeumrmz8%2BJu0VofKzFE9Of7l%2FT4G%2BPirD0f%2F5f%2B0GBtGJ1RdWArq2J6PfvaZ3fBijdWaRP75vKeye78QFFm%2BSZltHUUiJk403cge6aD3fib3gOxGbk1OXHiB3OsjdBEPRveqR9RnHmupH578NRWDxRAyE2sh9hLZUDMICj%2BsQGOqUBl2aHCHwNq1PA%2BM0Gtlw%2FliwlID8qyoBbmyKw2UhfJz4G1UwIp5ilwEGZ3hF0op1LKNf51uzzK%2Fs6KuCMFdCmX%2B%2FCnRnzic2N%2B2%2FGlIB9WuljBnUBT8Yg75eDxMG%2Byx%2BA80cBumKxksIix5P%2BVF4B9wNlHzhdhIZJFVuI5pkZqPHF7TTxsH1lzVtw7kvJ1QGqqbX56zIeSCAEwrf2mHIUurTBoaX2&X-Amz-Signature=45e520ec0b4d6ba8cdcfb7c41bb9af832891b31558ecc63046add25b54653163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
