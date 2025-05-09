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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B2ERPKL%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzrU5c%2F7rZNkp7VObw%2BYQJr0XpdH7FvmpmFiJTrVgL%2BwIhANCxHuYFISeMfjtXxy4mRl07hUFO%2BhXTIjmaW%2B%2B4XuwbKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpX2oCvNB4MY4Ypysq3AOhL56CGrAddTXSS0UHf5jUQjb4jHLpEoZG4S4kabi4zqtwysMyQ7H4nfm8B2oaYl%2FP3UIYxN36ZLLKeN%2BJBlJu5CJp3MIlscRcC0U2VvtILeBhrfQYZvAEjI1gwaEp1JuzH7Z3ozvp2U%2B2QrYjH2oTA%2Bb0jYITrLb5w%2FrYP%2FkBonGopmiOgPkm4D2lMrh5Sf5FWxlyjOkofbS4Y2zvyZDdhYkbSbIt8KzlumlIcgodNVLepjCJ7vJxN8VBE8V%2B%2FVFamqmXH3YVhK6vTCDkwe0zufBGUj1AWTtkFDXs0Q06%2FlpWKK5HC9r03tlbxpgwrVxj9DRB4JKVgNJKwl9ku3JdNRwpZay%2BV88WsAMs4ZwYVLSg6gHL1RsWWxIjfgICV4%2FAabr8smaM0yOPg32yOOqrdCWXGHr%2B%2Bfc6ANnvpdwQJEclEx3giEv7Pkzk42q4zIyPdmhfwflnMQcqDtPxrCwMtlbzfFBSfSlwZnEdYqHWqse3wv6lipxjuk5pRYETdpZc8zkkD8UqHmjS5zlNNwvIybQRTRHliyZQEm7AcZ6qJXGUMaBHBxU6CxOa%2FjlNn2KJ%2FtyRjtnJwhiiJaYU7qCaqvn6mf3uDwS5gi2jVV0jUXg1QgWnqwp6xOZ2hjC91ffABjqkAYm7saJYk2%2FccoG65Ooaf0F3BjS3B1XvNLEB33jTaqBEsNoUNfTfU8IuCzuaCSH9%2F6IpDXVF2mDZZOcECWc7zZEzZ6jMTp5zSlgYdYoZlNdmgKXauz6gHXQhnU0%2BZ2%2BK3j6vM2Bqgcbo5cMb%2FXhmEmFqixN9itlOIzeDvjkjCcsYityHxJ5KGardYDQw9KsFurLN6I7fDJbDD4e6uj93C253Ilge&X-Amz-Signature=2f9d6105d02f73d01586a083a36c1b4cf8bc27c90fa8ab6bd7d3e8b2f4679423&X-Amz-SignedHeaders=host&x-id=GetObject)

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
