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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642QOLM6D%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICw5vk%2BAwgKeJiV8CaTJKI%2FejFLrZO9ZZlVfrXDNHHt6AiB6S8z0es409ws2JIe5CWPeX9OxuggghUwuMPJa%2B4skJCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMfNt5Gpo4ZrwHfAqHKtwDXAXLauIOyQZZYBNnUlfc55reLv5RxzbU%2FWIMVAlrnf4qjChqJrjhfw1zZ4U02j6K7DEfYrN%2FKBAaqXTdzoHpS1%2BFTVTycUMYzlxH%2FGi%2Fcikc%2BXnN0mI73rQAfqAYjUZNXd2bA6bB4Sxra2uechduRSBzFOCYyTjL9xbwcUjZcGYLJXyG0B2IG4VDYmVHWR00CgGGvl%2FMoJKSDLq9U2wc%2FNcXgW51bCg2zLKkzuJEU3v%2BjhxPXOm3eFwXGj549EDAzqIaCTwuadPJeoCfgTwU77wDY03wAQ8p6ZCdDnINp8v%2FuoL32Oi3PYk5vri2W831HWX%2B7UEHXpbZYs8gPQkuWxxrNPoJvyNmrmZq8clp8qXyY01DSnPPm4ZckMjS9UZuGVPq5mVbSwPF2SXELyB0RXmm8fcXPChdb2wBNTt7NHM4%2FLgWOnyR48vZlIa8AuWhVNhkc249moVEWZtiXdcL07Plxrk3tiW4eKWdCQbQt6Tb%2FT%2Bw6lGgMvrjexWXvsi%2FCfZle7qW3L%2FHn%2FJZ6eCc%2F7I%2F2qLPN6blgVW5T3ciBx%2F189Bqm5%2Fdwq48S220s3KXqdI%2BCA2TxVF6XgsenP1Wg4VgjIsE68Lg5UZ1Q0Mzwf8xnm7YDZAQNFxoj8wws4TZwwY6pgG9pXIjskYu%2F96BWQepQwl%2BStY9NXEj7o8RiXrEfht2UcKc6QGKET2YRMjeBXtX4Z7y8crntUOrYRcRBLvElBz2Y17ebuZXP8nk2jU4Lfe5nPvdBTwHxMAxECp05u2A6DZMwxFG7jEXkNh4nr2bxtH%2FONzFPIEgjoU9lLjkuVMzMs7NpEIlGnzhPzg5ldDHlcITy3MiN6LbYXL545kOrzdafSKXooXt&X-Amz-Signature=7246d5795720ff09ad3cd489af989b38d905530307dfe8827500e51e39f67c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
