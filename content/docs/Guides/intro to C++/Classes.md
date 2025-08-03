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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAEHDZJ7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHBawbv6zUzEZuoxTsrE0WQTsOxec2BIvrA91iup2hiAiEAuTsc5Dmm08boW%2BP5kiMESPI8p71OO5mk4MTI6Lgbn4wq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHDWtFL5jhxXf2qY4ircA2EyJKtbYgwyWvhKWQ%2BfM5vitmJNjAP2roDZAi7dOTDySZHOXRC7bzoH9I78t6EfQlUYnoUhmktS0R4JhXOqMWzjUDmjLzbJruw51MIlcnAT3ydglTzKDZkAXif4kvxYtoYZezZkTfoOj7UjC5WzbEzBxW2ddq%2B16uA%2Be%2FF3WcwqLaprJOQUHJDpmGk1rpegrl78NbI7yhh6R9g4t9hK7tRPQd4Xapbn%2BM69oNo54PC%2BKghcBp7A9bNeVKjddsEQuvwv5boH6n686vMFYxKpcezPejAsZwpwTi%2Bugm9a090eCIZiLYZg01zdOr7iFeNkS0ticb5YZ5pv5%2F1qiea09GsvrNXBABsmIB3qOpZBqeGRBz2RMmy6daM20ZA%2F%2BWO5KANWpYEy4NI9KGP903GJE202zTNS7CULwvYCusmOT1SNbKRtSkyny6YGbEvqv3%2B%2BXbNcrq3deJoknFbiRnjesT460gQUGagGW%2BBX8kWeQ1XKqyWWE1CyECoZTFUYxVPc8y78nYbQQBSdqC3qn4aUc6YsG51qbZPhPEig5UY8A%2BYkdnx3Ycamx9nU562h1IyLy%2BiYj%2FIBGv%2BWrS1Ud2K9xP36LyzetnxeF9afeF4BAYxTQbKNBR%2B4DCeTGv8FMPbZvsQGOqUBeZNMrX9uXlaojPGrNKr7g1c%2BrOr%2BENrBko1PDtmKPgN29HFLJrPihkXTUFyqvKQ5QbbiCEMiHvkVcP%2FFLJ%2FO5rZiGvtz52YXu2wGj22zKWoQ04rO3IXuieofXSy2Xr%2Fh4CafYht5qnQXoh8t8Vdo6kqdUqF0kvWqpXgfqsqmxmoRuGxs4h0zIW27p%2FN6yKMK53b0FvdLjdK86FZYnq4436uvPxCO&X-Amz-Signature=e27d0dc6076be93c117e2472f68a4d57c4267d6dc201b8235d6dcc199383ec08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
