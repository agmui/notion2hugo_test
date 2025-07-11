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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGQUM523%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLM8jedoAo1V2rtiYdYHcXISwHGiOghOFa6bFj3I9YIAiAKsciHtA7ZfnvEDCw9U9hZ8ar21me29Xv9MbhfvdiN5yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA0M593LQLAyryKKqKtwDuv0x8JwV3QKgG2KFiJvAUmCHy3eCy%2BiVzvVgjZF0K4HXEdrXjKSix61IYAqFQVEVhZ1IKJmDVBy9vuXlMrUGYE2M6gkSe9HOHNtS2s5%2BnmY%2B2JnREitrq66F9nkTew5wZtwcpnUrYChXEUvJXyx7CdqEdckXpeK7vwyIYhft%2BiM3ROhDGw%2B9neY8tztl8IYb%2FAJwNsv1yIW%2FHEbr1O2asZ3ILGxIGht5Kskb%2B5%2Bf4wwyWDfE3WvKrW2ZtuHb5Sxvsw7uM4XFLmTLl5iWg9FjC02%2FRQbMK%2FLtrEvUywpTflvvc8RX3Wrwve5PmHWa7khn6ltcK30lJ1LiiWCpy6XkBwUlYhImPGxBu1ZQuyC4LXlhLGwbHfGTaKI1KhesH%2Bo5RGUe8RlTGztlehE%2FQA6z3ChJ3Gn0DVBkn9tGeI%2FM6g8T%2B4cCAfFoyiz39My6f%2FhjM3LxpwON72iARaxCPBc9gWSZBalsoUkccyi5JLSSSO5uaG8Vu0IgR77y7V%2Bh3BxYv60wwyaL6UJ38ccyY0BPtbGppgX1wARNMDMO4rKjuf9pla9sGFpwXbKX6uYh3QYizPKAkjqlNlD95mo8tZGkTfppi15Bs9VY3LcJFjN%2Bv44plduzoyQ19xLHphIwsNLCwwY6pgFOPKBYp6zONn6zq72AylFBLXOhEOq3F32v9DD8XcHasRoYEPNFej2yBGso%2BkuQhVE9zKz19zkcGKcYCyPWHWaufZqNe%2FmtUEvQUHcdWfpEtFDq0ZpH1YvjIkXj2gNNknuS9KcmkkAFb6zcQiAQ2KVncwiFrOke9eIuihvngj6AbB1xP6swGRLYsLqvpgEDQDTg7KBF7FnR%2BilR%2FGGo0x8N3cXFBXDg&X-Amz-Signature=e797f187f0a41c868b0215c5e63c35553c374126673d05aadbe9be46d179e8d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
