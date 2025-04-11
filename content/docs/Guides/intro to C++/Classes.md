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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3G4H4S%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIG04i0kh3QzbKP5P8xo7PTMHZxgXy0LY0zePHjErSEzhAiBqvNnuG24woPsgjUy58OLP1sblFV%2BaIfKsdDRjifQjUiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFyiU3zEjgZghE%2BPzKtwDe7dpqUSXpjHA%2B8aM8NVWm7fy8u6M%2FTtlMXRZHnLbhCaTnmyq%2FkG6rcpIl79Za%2FCA7usdlSGUHD5%2FCyU90bAZ8tLhX54VSO%2BosYuizGnZlL0nwbwwOUqkuWXUeNYSOX6O3Td7prwffwCsUDrrq9SyxueW3WKQgasflDteqrxhewe%2Fz8GjQhzBtwcTOLUZ%2B1nr%2BpNh6QwchoW04D0C5Yrui%2Fsv2L20z91sWN1ugpATnlPBX463f6aVCDFLQ8uwtvHU2nKnXon%2FNWx6K9faZC5uxZ2aJMyKhN9%2FsDSZaCqaBfVod3V2az9Zb3RU58L2855TtR2O5Cf1afpnaS9KMYSFzO7bpwNKUmwujBlD0YG1LLdE%2FI6C2PilUGsvQdwJtPlOv7Lz%2Fp1edGUw5ouMLCafH48aohas6xlSls%2FcRsGlaGuPa9LWDJKPIHFx1lo2eTBI0VIIVL%2FrdDcFtQBelASw%2BR2G1Ynh3nG%2Fup%2FSdJDh%2B3%2BpXHXCDvdE5CbENLAY%2FD3gAaTexD2J7uYmYJlo627uDZaDUTIPzRmV31AbH2uKuaXf4V8GyBMPWoq6F4VKqp3qd0S9CDkkCsW3Ozk%2BnS9kFpMFIT7m5maOlY%2FD3QL%2BN1ty5oevde0mYiRC9Rcw3ffivwY6pgFibOcxTglfSpZ6rJ%2FEb%2Fdqa7g4ayDvg18%2BBC44RK2HVOgqB7uivufEfea7MquHgevsZF4p7HcxVDUSHcGIwwglP3JK5zIGF9vmGdnU8%2BafPe%2BqQktilmXFnPJxS6AT5jJXng%2BB6r1Agsa2EqArq8ZaBV5RnvB4n3iCFeJsNQGpJ9t1zqkqyShLfQMCxBA43tN%2FPf83NN%2BD%2FkxUfE4cMc2ney1U9KXg&X-Amz-Signature=fe6bb8a733407480823ec91c80579f4b00b00b2c326ac1247a0a5b029628b5ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
