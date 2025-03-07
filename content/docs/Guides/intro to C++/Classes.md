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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STMMXPBA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FyJI8k9OmorrAmNZU6RY%2FCLGeJrWacZ2%2BgI%2BJXp3ItAIhAPib3DXKJuEBAO6XIyJAOUa2sFXFo%2B5sZI0JPewXelKhKv8DCEQQABoMNjM3NDIzMTgzODA1IgxTvtnRpAUFriwu8cYq3APTkVPv%2FI18HBumpGzFJLFIkdGWCNYLh9iD9NwUXU7Ct3hyzTS8I8h63w9ZfaVRFNAlI%2BWKB69tzjZpqxNKSfL2xZVwNjCs%2FfYxorITh2rGO5zuD2Xo3C1Y50cZf47bYyFGmpayz9gz9b9yLCATLwKESD5px1CteHCKxOWVNhiLdWO8TICP0ygBMZu0ua7cfmnhMMURlARclXdF6IdFyZnW6I74E%2BgEMjT8HHjdEBTv6IA0lv2tAtO7Yr%2BXCslPydbJUNDbwn0JIxceWE1lfDgFdmFQRDy6Xa55w83sIoIxgdwgyvQWCB2VOEqEYtdZS7%2BFVvsoC7G5fMUGGzWNsR3Jn3WRuR7MwY%2FLkxS27PBm7sCkHlkz%2BlKC0Sdmvzwafd246QQgm%2FmM3feNUmAwgliYRcHgyAg3b4dCzRKXiKKR5X6oQnR4%2BZlVqRI6lRh9qu11uZpsBSxuKAxxMsE0Zcu%2Bpi84pLXNtvxsoKAaEznVfSmxmXNnA26zlMFNmThoL6L2b7T%2FrGrijqzIHWDYxG%2FQaY8wY63GaHxommw8dVVpuChUx1bDXocSWPnhfxwQPAEYFjlrjBmjs4vdtsep70bsdV%2F1UjN%2Bi1WKwMbsbIK3Szkg0%2Fq76xybaDdZ1zCnqau%2BBjqkARDHQjvHnRbFSVH%2FpwwB%2FKcV3t2ORNUXBCFWjARM3DRTVUgSoHKEobT39Y2%2FZPwwbg4xiLoIQjN1mOJ9%2BDsWBrS9FC%2BeTYqB6OSX2rGBTT0XS60qcFGb7UtP8ktK3XIH7jyFUTnUTHRnxHoMtCvtJ6lJGlm7nBcW%2BshwGcq511dbTpYsYSJUElcAYjF0ZUHCOmE8Upk55ImZT4a%2FJCiw%2FxwZ1eqI&X-Amz-Signature=852e7eb8c213ad79472b06e43389bd143c5ee67c3593a57eaf7e0ca26eb08ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
