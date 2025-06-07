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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEH2DBO4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu3EPRTugb5qCa4LnPZZaiUK6kgZLIyXirTr1UTkVN%2BwIgeOSlYffxvzIpcABsoOR3%2FBva40CdUoXm4L7Jb4Mk2vcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLAVRKN0P%2FxlKBAAFSrcAy9J4jcHkuB2vYo6mmoT8Yf0bdzJhbpoJ3fZHRwqv%2BNXIzGSGSM5Q9f4jOJX8BTL4rc6GmWZbtz77ocpkS5%2FjF2JZNoiUiQQtisoDdQjR%2BBIDhE8pTlzzf%2FzpL9E5E5wiuLRNtADo5%2BbCy6pnBEk4geog4Hs%2BCOqETu3A4yrLR5r4ohln2RPkv8wJC1UISDZ1K5bQ%2F6b8CH17BSttM4qfUdCC9OtKgW%2FvvMgF36ZqoBHByTjUn1Lm4RObqN32B1M%2FdfecPAImNQglTcf3gcEvZsT1om2pRCoMXpPJK2fY4ONMtABNqVAIEQfqDPsyUP0fd9iw3V5hferUrK%2FC1ALalRIvj6wSxUapegzwGD69rwuVshdn03fN3n8uQ4ZkXZjm646bBJv5KLR7bfHiw00tsXAENd1OFub%2BJthFqLlHyxXxGYo2zI%2FaJGYwxI216i6V2KFnXjAhAkPFtvsmiG5KMXoX8Oz2gDke5K%2FVSaaT2RXBwPf6M1spoxm9UKXcClG99p94TmZaN3EFpKJoJ%2FybmU4lOi%2BE6Ie5b%2BRWGTUgEeC4gP0jcHhVYeXofCk%2B%2Fg7EEpnJFSpCIC46t6MKSVTHLtYut6cwPSkIzN%2BEPlt82rC%2B4R%2BZ3JTOvLHJQkdMKyBkcIGOqUBmg9ZrjyfUvy0UMka6UgfHiEoFwaX7Qqv3yvJaOig%2BVkSNWxwaLbYp%2BowlpwIr3ZdnZFsVcn36cFQenwLHN%2F0sJtMX%2BX7fSlxwSj4h7b6RclZOE6ZMIqE3njfjUejfGxJVpZGQcUudIvjFFT2%2FiDWwkKjhkdji0%2B3qIj58fKTL%2BQYKMCdFxAlbO6rqvmCWwZyCFY5KROiRT54COG%2Bc7G6sr%2F04yCR&X-Amz-Signature=4889ccffdb08fe90f36ce9b5162cd518f7ccfc6b8cded1f0e2680a433a84a9ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
