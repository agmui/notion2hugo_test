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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXUA2BJD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIBGlJ%2Fmd9Gfy8IBKckncD1%2FEQByie1VV4lx5n8ykuM74AiBFMjR9cuAi5VWx8d6LQwNoppk%2B6dJ1YEDphQCuc1vzJSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B0dkk%2FhUh4SUUrxvKtwDnKq7CND6n2oh2mG%2BJQ5VMF6S%2FaImgThNnzp6B%2F4DkKlZyBibC8n7Hf6rbNoYou0obNdf6OCcmsyx%2Bk6tGU89khDQKkuZyLR79jLaBSktz29xTULFDLmpLPCm0Y8a7LmudaBQJeW39LTAFsDjXBINMSY%2BvbO5P6M4w1VIQNhuwSDkvaifyNNeFgaocbu3R0S1D066jurhtoFv06C5OBGyM0w7owlpiTSkZEpoA%2FYFgUs2lhSAO0JmlQdSYIo%2FLYa3MJ5SIqxX75%2F2nJdsUwgp1yMvxTIh7AD5IXKHUItWjOvmK4Zx13n47JKswAgPYIif8PhHfSWqoqfjCYnYx6FeX%2B7mLqfIFLr2iS8CT1SzeUSZq2WlehYb0RE3HN8ut%2FkJbGe47iu2ShT90KspJChykPOZPyrovFX9khWRVrvueTZF4MQTcFjtviHNEdw2eKI30VzIN3XP9g2uV6K5QW1x7KU6QIR1mMQujWd1vhsVvhgy4YqYtuPCPq7XOHLO6NLaLHyYIzKtwXfQs1mOepZMUaQLgsFyVw3DS5ry4Kn91wiAv5DicV6lC101PRZAz%2BbyVXytmiDLm0ep1qJDxvHq2Z3WySYcAWCmWuH5%2FvkrDx9xpbgCWw9XAuDqp%2B4w9smFwQY6pgHw%2BXPXCAa1%2BshMDeh85FaR%2FnMfdjGJLSv7ZNEaKse0Hd7ZiWhLBHCjPTBUWrdStywHRO2Fg%2BSiHIV02c4ran58zex2uHPsfFYVpmPzwNq%2Fb71iE95Oaht8XvoO2EFJmFTQxPJ8SffmI2BBmaMiUjgI%2By%2FjBX8klXv685Tzo6f1NaWZxZVx7mB7%2BNNi0ve7EZbiLtK%2BNl%2Fd6LquiqvzVQB9YRf2MJpA&X-Amz-Signature=3caef64aa7769f4d49b01b293b67532e73ce17d50e2faa9ddffcd1b97ec4d13b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
