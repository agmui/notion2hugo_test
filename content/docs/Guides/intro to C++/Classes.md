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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L4GU2JV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBheFHomajJFLQobYf%2BKdStjc%2FX1%2BiddT6wQwkEmxHqPAiAt0O0LfD62mKzVXCYbaZQC%2Bb8FzXVbMp3Igqw8f04h7CqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw92ZuiQM3bThyUoQKtwDSaXnFuvZN5%2Fn6xGWS%2FpCL5aE0OJz7Rcg9LhN2wkhKinFvG9ZC8dIQQR%2FNuEFo36sr9sUZLgFTrQju86efgNVYX%2FOu5GLjlbzCiT2f%2BArvBdfAZ3rLP%2FNjYSqh5Xiwq1f8x4BrP%2BnM%2Bh6L%2BGH3vQ5QKkcfFeZp8xXiAAY1bKeHjpXkNEmnTtSsyIpVTFHndaR7FRhvos8fiLRLs%2BvFZQ9gWbk5vMtISoqPEIh0c%2FzT6GpZ116zqTjYiAKdTcejijCZCjXDtCim%2FeKP8hCv2sxxN1RKaeg5wHkzvJJGp4Da1Wvvjf%2FEc4jwsqM3E%2B0jWKfw0pTc7%2FnzchRUd4ju5pWFw7keeinlOe6XeKQ%2BL6s7Gby2UDm19HzZwHdFMBjGaoG5c7QSSdoJhRvBZVdlvsI23at2zIEO1ghbT5F8IslR76vpyOK4B5%2FIzNklzvJuQWqstfZrfrl9pek4rlto2ALKaIlzszvJMBzcT1bDcK%2B8kHd4cgCc8yK1yi3LS68bsnLxDt8fvaJHkufu9dbM7Go20aYdLX9HbpAhm633%2FNTgm6zN1ggDucxyTpV0QwWs1zapgKTZODRi7tqPNIPGMSBXzdHkJy6Z3eglYFw%2BqMrjcy6aJjFr%2BBa%2Fkc%2BYCsw%2B9juvAY6pgG0hIf6gY46uvUq%2BRRCwWHGLA%2FSvSn2QGvvGWAKGvw%2FfYcMEoygxAAKcU1LA%2FAyBt8pgmIAMPw3ktUT2hW4I15vHkNj%2B9D%2FBMZ8xT1a3BXh2gByJzGh5i2ck9GeWrypEKsOGMKxOZU1epGNVWIRA8aDIxr5SCq5dUySzP1i0%2BSl8cpHyq%2B7ZJA%2Fpv%2FptAbAD1ahBnMcAPArbIvrsuuJz77lX6cWq1kz&X-Amz-Signature=1aa50a5cbf87ceb6f7551d124d98c41ab1378b04c39485708c4d728348396afe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
