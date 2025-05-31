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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WXAMALB%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa0KaHaZRHF1jRkURzTZ15dxR8h0URHQr3GH3xH0rslgIhAJWslyswJrdztMJiWVRAA3yvanYuuT%2FytTIMF3pl6Z4EKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FFnUSAiQQ8oPVFdgq3APjFxf%2B78bv7Mg13joDGC%2FByEE7sfzvRvv5GYZwCg2aeqEch%2FpC%2Fea3%2Buo1zpk%2FwrNUSFOwjrEpuBmUm%2Bg0zQdJ18xWS65F4yZRlVTAAQOdwqjNe7NuWrh0A2UO8vxdSPoWTRk2kXYkG9TGqyxqI0TONAHo7loK2xDuYJICHgB058YOYKPZ1Oq%2B4OflmjJFqYlw%2BePfu%2FiuLMBwnEJ%2BG%2BaqIC2%2F%2F1Frqbr%2BiWIhWXK5EInCtXMPLnXJSdebmK2L%2B3jntJGvrc2JE0V5HVUsuFvwJOuaGDGZPhUajmYnl1ubHzdoycyQJs4LBq8fVdZEBGLHn3HNVgJbGqSLPVCaHjV3Lx%2BfN4dR%2FdFkovHNOwBHj3I0T4buosD2iDS3%2FdlTJfDEQKN6EX8RbgJpICs2gOu3MVvBhH9kwyWC0QBiYCdXt0ZRJqTXXgRR68tcneZcGmA65VqFC5zCSxH8MrMO%2FG0FlIatrsYsKqR%2Fr2gAJLv0CbrAO7rrByY2XmwDvkAIN%2B73d8mRC%2FXXfhWzDcj%2BCGjf30b5melo7BRIf1SGuJ1gfWsOnIkeRxkYYQEtQfMXlrfWdkXaoLYC7Jkkg%2BHqKEc%2FcZ7vJLzTvNqB17Oi%2FDQ942uKwnBCsRsFZg99%2BDC9puzBBjqkAeLZOiA9D%2BvBkhboY68PulmSOZh9tRm157f9x1uhKLCLmjYGQPfyXTzKRWmXNiO7szknzNHuP62McnBTtma7uCFCN0w1B03l95V5kN8KOfjfcYxham5tOR6qQHE6SHLZWRkmYillRl0248VsnCqKX%2F752Fcg%2BGzHptIWDKfo9XD%2Ba6JVqTS0QWbTVnxy0Zel4Z765creF2XLC7pMdK4hvtEJvS8Q&X-Amz-Signature=e4933563c6b7b1d9a74bf92692d272604c216124e4c8a06e2c0a66cd69321d6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
