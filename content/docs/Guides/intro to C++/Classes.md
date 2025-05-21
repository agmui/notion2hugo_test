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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIZGN7K%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIF1rC4NGSjCHNFgJ9cjz4TvNeNiRXzQ5Wmik2HkweIYhAiBJnJ6tgR6RoFRXJpQmgYCMaWgNdhP8G4ul8meePipF5CqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXHZ6at2nRp%2Ba15DnKtwDdCzCGN4axxkSy1yR4jmgBI%2B0eGFfEROOKgrH5ib7bTAfwpYt9g47g0v%2BxshPDpP8xyRZ4p0QfasoMldAoubBC6AW04irdfKvBSVJc3IiKmOIXF%2Frn1cBSF3jSLTwLc%2F%2BsX0HhgsOdB1svDOYNf1Uno%2Fy2LPM0GWoAOjY7EtRiSMwdX2UMo%2FDzoSEeo1ZF%2FV%2B6fTJFnZK9go%2FkXytrycrh7MJh47VTbPFU8C3u3aGLsIwukqaQ76cBW0iZKgF9wF17qf96g2JggjYK5DA0U1va%2FyhQQav9uDb65LIk3p3%2FAZrXbrxRcXhKQJsj6qHjaTklernbR%2FyXJUIfMT%2Fmb7NPGITfHZqicg7ri4Z08yKH3eUvv4Y3fG1v2nhzFOIQsRZbtrHyUf%2BYvvCnx4u5dNGRGIkX6x%2BN9f0wYiUdxN4KxpaZCctoeqUIKZEqRsmf72l8NF25T0bdFSsZOjubOTlSrFGvYK0tkEutMOtwg69FGm1E3iSe8Br6IVSyfV2jRmlml7oy%2FvBP4l1ZF32IOUzo81cZdx7gThg6zIVPTlslbkpuml8c6WrsZp%2Bz3hLa7TjnBoSVToObdraVruKElMv3Mq7d93SR%2Fi2CpfxrWx7xQwp%2Fppscn28pzynVf0wnqe5wQY6pgHX3Ru4IePcOKiDqJY5qNVIXEXvmynik1zJ6UCzp9EHFlDDzOnq%2FAbE%2Bspc%2FB7cG%2FQyv2UiKcjrFpNTTk9acn1GVvGJMbmt74GLExbkAe55Ea%2BP8RirW2FH37NEDia4KYeS21OoDeMt3217LNBeBDAZH0HHIeP2qzYxSicYC%2BrIpeJP6f0OUvvVK6IxXjgWsMOobRUeLH8WAbmAU5g57dTmPlCq%2FYZk&X-Amz-Signature=ebf09a917b1628275a241cba8cd110f59c41fac39a5f3309a33cd4c72e2a841c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
