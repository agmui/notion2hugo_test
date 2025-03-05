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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFPETCK%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqEqRRHf%2BAvoNI%2FX5I47Gu30pFdzFXGllIARzoqleOzAiEAu5WKLtFuKTfL8XMAigfkNMHQWjs%2FKQ%2FGgEjgo1SDowIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDMrmvld%2FReyavFV3aCrcAyHiveVZv%2B6z3Z%2BqxO4%2FeXZ%2Bs%2BZQfKOUfV5v%2F8UP0kjESTqkUqr3O3WGRY78o08XH1WpxaMRLDqus5i4YtWJMfmzvnbi9G%2FOOr9HJ6SidFiVV4pd22jv%2FRVcCmeNkvE0g4ETETsxyIEsHiRuANFk4Wf0DsinlU2jzoQUcWP%2FnNbETTPLwjJ%2F6I%2Fsep590T4JG1EedF54hAW3hEg5JvykRf8JsMq7e0Dx6usVd6PSJ8IA0g%2F%2Bk0UhyYdZHfvuKjRh5LvV8I2wjYPfQq6y5yhmNuxmOWhl5Cab3FprsgqjY4MyuHrMfRPTWXZyUhIi8z2WkdUO2Qp0uGZlkqNiYzcZ7OxPrEqlvy%2Bg%2Fe%2FUvuCXDvIsYMabdJ%2FYu%2BimM8LU0or6tMfya8pzjrMz7XhqeEldALaCTp2zio9OCpacQzIAovaQh7dPGDQJuDigV0WtP%2B%2FE%2Fl72%2F1WPqr0MhoextKjtKLVCRH3%2FH4IlS8k0xjHm9TGfAzh6RqJwuSZCSjnpC3sdiUx%2BXl3VDByuHHFk92yPMCHwyUmZpWUp9eu1iUK7yRrDg%2FeQKKCG%2B4nkZDRKKeqwE4sv6vvewP2vJSRJbBsCYPsqTtSpt9tml0utbG8ZgUFM4yefhdjD9EE8qWG3MIe5ob4GOqUBDz2MaYv5GIc38M6Pq%2FoWg6F5gYseogJkcZxVuqVfj7cXsnCMX7Gze0mR1hCvOLAJZLXq6Mya6DBb2cwsoHyM2K3vDc6AkMgF9QSCeuZTwQ6QhnspeA3r9GBI4ZZ7a74MF10vW3STf1b8hMrjvsvpMNZCzw19J0TqLSP3KdH8aY0%2BWh4PEIatUmoYLXKXkTCRxMBoV87IVlLQ3bzN3rHHI8%2FQ7sdm&X-Amz-Signature=64c6b5e5f4af296c91ac5e730f3fd69fd86df703a71bd1ee0e643ccbb2e099be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
