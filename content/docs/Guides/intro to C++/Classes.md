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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662APG3T2R%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQGZ8VKXj%2BZW8G%2BajXcs759sZqG1R3zCGZM0dwuamjKAiEA7lNY5n9NOZI5raOu8fzv80NI1Hd6yOyaOLAM0R6MsQoqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0yG6FHO3ns7rUXVyrcA6LWLFPMgBemZI9KO5dtJ1pKqWn6XCBcZLo2AbIVfqO9vFEid9AQEsfpT1B2eYX9PoXDvgmoDn8q%2FcyT68eHU1fnvM5LHDyKcE%2BgWfPJXABH9lunFVhnN9%2BbyGwJDEnku93ZicUse9lQsg%2FqMnUWVL%2Fcu51KXokdU1mtVV8AvLwWOoVtWW2m5TGu5ZTSmCNFwh02IFUM66cT0CTEA7qZLIWRiEOuYpYk3j8nQRxOS0lR9vIUiHZv36V2ao6mccTUfiC0IC9H5Uqr07bbqFgefhaLkcygXqL71c3OclxklS5TSkZTLuaU4aq8Nnq1oO2gVqwwACuTuXk%2B5nA8tv6lf9hhxwImjpam%2FJ0ttG3cW3YXg6uNOzfNe1keLowOdNBWBJ%2BNMcR1PdOciEQvicF4jts8IRAuCEkcSvkUAbVztNQTt7J2V8ZxEhz8Fw0Kce9PAEVQTas3wxsgyBI40hQXQfYcXM%2Bt0Q7HCWch%2BWYLeBuceSm%2Be2q2JPBoJUuff8233O%2FOjDyGVwrO2Jbbce9%2B3G9wb3f7A%2BlCN3JBiGjtXPL7wbVNTz5Ao3Rh62M%2BJfnTqurf%2FInXTVGzdMpqkLUb5Opb1TpHQCIh1N9lN9rfcoW4%2F1fVQzhZIPLsD0zvMJbNwMMGOqUBF%2F16u1tUMes0Q%2F5mJNq%2B3uA3jYUnvoBeYFMFoOPLiOKXmxbFxShImczDLWXZiLYEKyf0VU8J3GI0IoNFbbg1GsBDP9efQZ9W52YfDJovpw7TRF1RDE1AI6VPzJ%2Bs6JZpLoMIMt1Nf8cf0gQ0hxoEB3viUsRWfwwCQeHFGPsdW6HKl%2Fn0KU%2Bw0ZngEM6vIDPB%2BzpeSXhlFD6aAGqw%2FahFJiLYLbkm&X-Amz-Signature=8e777df4b831fde389696a41e1279ba236d10832b06358e309cd3963633e970b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
