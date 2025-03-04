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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPIC7VDH%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkGgabv1MNH5y2EbaFdakk2XCVgiSAxVsijJSt8OeKOgIhAOxce9Zk%2F1LZ5m5dbtNZrnJbGxV4MGbUBoWynw7xNX5MKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytV9PuGnKEYwLcPbQq3APWelTvkV1uWvujI3BXqVaJgiBGgJtkcbaWdks%2FkAS4nfGj4hU1k3ZCHFeo7DSZLg1Cid%2Fw0OWAxxbCoDVdgFQxCv7TW7fRxAs3ltjce%2BWbK7IL0a8JetQAMrKB1LZI%2F6VtZlvnQ6SA3OM7RcNYzXJMHs4D4M%2BM1CTjuf9viz99m24XLcY%2FQyjMzzWu%2BaMIFMj2xWwocvIk7%2FumljgXEDQGxGqFWn0%2FsHoTJo6KUSDP%2FBnaYkpgHBI%2B%2FOGHJRuj9GA9bXSHqS0C7kMzRtzew%2BJs4K26xYzqpa2jPJuRGa6mtjxBT4HFkobd%2BnxkBYTcvDQau%2FIbrtcRmOq2LvWTp8B440nHa9obbJiCtV6RFqBqFBvtCXObPVRK%2Fka%2FbVJ5ng7P48S%2FowxW98RZqOz4h4B0CcY5z8Kqbt5RdUf7cFiqwG%2FPF2L%2Bp7pmOLSVoE%2BdnyxH390eGqG2HPhpu9k71AXBbLGibUFcNGTTl%2BeIqXoxxe26fB9zRrUTAsM94poh9zlc7KPRrTW0boMIcYrR%2Bnv7XDkD5DzZO6aTnzv9daM3RBJ9dh6592Kl1lHTxXjWwp7joVZOvdBwtGUc1XdlMGD2dmy50cXupTQUb8K%2BfsXN%2FcbWCNdtiaNLfL8XpzCv4pq%2BBjqkAeIwHB3BVyU6bInfecIV7zn9wrGWN4ZmP%2Bzxdn1v0t9DNkylk8mZPNlcq4dlqG5FyUlFYJHmPHHRy4hhc30axd77O354rhcPgnCZvAVXokfSCGEfUMd6qucPxXETgt8xNqdlEAmojdqXJejjLNklnr%2B8UieBNi8b3mc3w3a%2FctOiRqYDU2FBaZNsRCxAJo50NE9cUgoORjQMWyXfcZtXSFBd9iw4&X-Amz-Signature=f51ef02f39b3a2335f2bd4ca77556c5c456a8e77f7aa94ceda80e59a30d85623&X-Amz-SignedHeaders=host&x-id=GetObject)

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
