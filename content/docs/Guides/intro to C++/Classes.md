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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ7S5ZJD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD3x5QopMn7Tn275rw5O5fM6vSa129BgbePYGvlEIeMOgIhAP26wWw4MxOUVBfzuo24JRegFILXm86hClClnTawaRiyKv8DCHsQABoMNjM3NDIzMTgzODA1IgxF9MuCSzyGrlka3hQq3APV1SEjFqlYe5muB%2F8BrMMbi49CVZD1gPPW6bxoZjz11t9Ur0cogsQwJy4y3FehNd4OfVzqICW1KW375EZhY70ir0%2FAXhXt9u0aQGhA4gD8YEMY16QPZ9MrSOY%2FPixWY99laXuSONXyHxYc83k6e%2BavJ2HiF%2FYKy89YxPM%2BgtpsMbzZAzhk%2FQzHH578mmTBGFc%2FC9aC1ziRGJhxi50YJFjasunxvqS7%2Bg%2FNS6ctoGMMH0CFW4tjH0sOS0l%2Btm3cE6uCh4twFejC1dJwP2zOP578xxTMlNrAHs7oNgQ6f8rtIfoA2FgAoc0Lr%2BfxEJ4B39isCrsbz5C4nA0X9hvlY1MiSDrCFzBXdqZKl4MEkRQxSPW3w5%2FIpQ0fRrrOYJ3n5O8PzXOeyBBFUtDkcvEKh1WWxKeh6iC8JwX4%2BCRVWQj8cLUahOpN6smMyUUxosS36cCL0QfKO3Vw66pHE5jgLHDGvqeS4rfoFREU9O0a4Ddv3GAcPZ0TFzbbFuN8oqKr0Mh1rzRDrYv8tvxtvUheL8p9ZNe5jYjK5t%2FSQzAfESgHX9zQ9teKZ4MnM24kzQOy2qhiIJ%2B8vtGtAfwjeLBinTqXMhGflrDSEoMObPsZEwHic9ZxENQtnvbEDklp7DCa0oK%2BBjqkAQl%2F1%2BMpq4kY5afVxYqQEK2FQDrrt2lWg02oYy5mVeA3OZkXEI%2Bf%2Bug%2F57Csw1eRKRoVHdi57NG%2B1n5gwmztGu6Or801mcha3lIKwfN5AynToDzeC%2BFVme1cFVzLS%2F3ysWwhQotCUlsuoLthMY4KTxNnnwrKnLuKaJuUUfmythc9VYzCOfKbDusjz0ZeelR191F7TjXuxkUcQwt2pb%2BQej%2FeMF%2F3&X-Amz-Signature=4bd227995d2bee0f1fee7358b4abe82f09502ae790959c52e122415919cc4fe5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
