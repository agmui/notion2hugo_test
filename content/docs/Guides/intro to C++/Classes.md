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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MERJPWN%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAb0vnB1M33iS59V%2BwQRIBgU5m%2FFdH0wSstkbOiQel76AiEA3Up3hm0cfs9Q3ZUckMH6KGeSZ3kKnj5F2RJBLzK9DVMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMima%2FRj4sf%2FDxZttCrcAxKIPdb1BydR6D%2FwVSH9ktlQ6ESWF4yeirg5A3LdPstbOazSCPXskxnoQ0v48hWU%2FXdS2roPTq2PJbTOpmy00iUP8%2B97qH1UpasfkOQpZ3T%2FZUCP%2BjgXPqf%2Fyig6pk0J5wR%2BViGjV0PyxLkfgc5Egj9KWGk5afqVojUlzWNw1LGcn55Fl9NDQFlfoPO5%2BBAoL8PPmr2D62XY%2FqSNGN6DP7Iw7sVuNbIlOXY8FygQHRURtRZz7CPK6oeEi2wATc60STgx3WpqbqsNgW8qBcnBXzWZc1BwLRG3pqInypEKanYw8n6%2FI7nfCYLvQeO9cLj9C8EZ8dTCECPzxTH4OV%2BFQgkZtCetqyzGmW2E3V5zXGhFgxgUE45YkCUJejThRGbexs53tegWDdiMPtgqR5wYRHags2E0IrkB9dm1A1v1zLl7eyjoyD%2FuyjUWB8hb81aXvGs4Di8h%2FWz0GQY0ZWXt93oRbiW4VrcPgXPFvcJOdwzI5vNu7pEycJDllU5zSupJ0birvTfDDrXsfS2n7cDHEUgB3rZIgJXARBs8G2e20fW%2Fz0u40bYDhi%2FaVoFroJesUxC%2FsHsuWrcb%2B3hHDnPvJT60IjaiWbjCXXiwd%2B1VkFuIp0vMqM5%2FTQrkUD0JMNOI%2FcAGOqUBwqHSCGYimvTqkOandBtHgpsJwLpPsTCHkkJYD7QdFgdmuXtCqyorHfC%2FOt7GwzjgYnT6B4NaPoAmXSwmE%2BR6r38ExI2nll%2FUL2Qgvuc8EaeSpKaznVAkSUNt43p9F25gCz7NDjBBWZxYJZiRSQp1otXGjme6me7Omqf4oZpSeAZPXL250lt3Xt9IdCVuU1aqb0rKympf5ZoVA5heIX8nod4aeKyI&X-Amz-Signature=a0184bfc3cc63985eed674e6e8d607ecc92b8cb9b2a0d3e108a8e95047001f98&X-Amz-SignedHeaders=host&x-id=GetObject)

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
