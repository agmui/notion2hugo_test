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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLYU3GXJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBWfd1QwnFThZZNblsu7hxzOB6Q0Axpos9227oVec1yUAiAsNujP6FLv56rZfiBtwbaKNsRnIDLt3EqqTt2ELZ4mgir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMMPz2WOG5xNUQSphuKtwD7ICaJgaHf29UE2TKn8UwoC4QeGAKOCONLcRGEs2bqzQUCZ8LsBT5vkFd67lQix8B%2FVo6zxjtbNMeTpTyEKODnVilTdP5eoujaKpICqMJnz9o6rl%2BakLClHnSZ4yJVP0lWGgxqzkaFsVc8qqjmPR8rh80wF%2FPsZ8u0Kv%2F8nkxLx9mZwhT%2FSyJ1JLFIny%2BysyM41sCm99C%2B7SAV8MYth2L0jriGonBK1rfKtXWK%2BVxjnPWMi9C8nGXvig2HtFLoP5cG4LH1lNybIPA5kbIwlfJ9%2FhClU%2BJj3CD29ohBjnVRTdqE%2FiyT6M03Fsn2Y3u77IX0uoWH93i1rMn%2FY4jQpbHdMiPom%2FtqxOOts7l8FNLNEmhR3rdyIP1L3FwpCDW30vVooqynGccNoDP1zds4J1LEbrLTahg4l6UrC%2BsG33dNsJ1BjpHSUJL6qhPPYY0YNAzCYBY1sqDAji2olWEiUn6Ej%2Bu3hsilOxkhu%2BqpLBkFY1oIDXyyTNQnLUEVeIo6gvrBbSSqbJpl2P5G44zQbIAKeH6XLJifL%2BZ1qUrd8wcuTpElmmaJKG8zyCO5p1odIU0tmAlL2C6eF2V6qzoAouWCcHKjiy%2Bbt6ELAdmfiWw8u5Hol4s4%2F1X9loFV3Qw8uiowAY6pgFRzMVQF3dL1oQhj5BwJGmJ4e1MgbSmOlRV1ABH9TiPJnLcCoc2nMoe3vz4BpaZJVmQntaNnfibgq%2BzmrPUVbvVa%2FaMsi%2BjW49KOKDLPh4uYDqrQgxGMnr0g%2F9CQs6%2BMedoUYzV69m3KmEWCh%2BvTY%2F6WzFfKLgRXny745gs6cr3hDkh1hIzPGa0BPhjUU1O9Teop8%2FxBE%2Fid6t3If7Au2QWW6PqOn6i&X-Amz-Signature=7d99da2332385504de345ab02c7511674d7d12aa77061c63427af6953e2836a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
