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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5772HT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICIUE3SGBKgO6l6gXdKOAUAeYI9NUv6oHGdyBeBw4w3yAiAtYtsNxetpsWXxyAq73hCyhDEgpkA08C75qbEUeqY7eSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMhslRLbhK4sj9bvEVKtwDHnycLG%2B0%2FLAawaBH%2FVXz8esoJGuPpCi%2BFoOnxYqWBXCxa4lQgTLWq3qY%2FswWJHEJpze%2Bp3iymlhe7vV%2FqkBqiqg4XJh%2FLORuJMbhSsoTfrqs%2FqlSmQfzuvfFfOHoUgIdjV59EbUI9x2%2FrHviFd6rmqAJK91Z%2FkNkJA9Cv4idwp7LkQ45lkphedB4Fra%2FA0vJUxO%2B7UJtrFPk0E3nNS19m1dZ4Nbn1Ff1nWhrG%2Bdpjy54pY9YWYKUtD5MoYjILMf6LYA8z7LBbPwL9XAEfrqY1XyHfhiW5pmVi541YSnw4dEy%2BE%2FiUs0ldwTF3couYcoPvi3j1P1Rw7GWvp8WKuN1OjBZ%2FxjhFTopO6fnGXbrIS9sKxU757o7vKivGIMKtVdU%2Fqff5zm1Nhvqz6%2BLvG5Oo9eDKRRA%2BYMm9VAxzLA%2BrzOhv0f3ORjLQ%2FNsA8jW1sJtwzmR487j0jaUBTKL8ZboJiZFq9I6djhBOCwlB5zE9%2B4ZaLwYweF01UgsmGbPdm5Gjo1IpzcLH3t8SzoLHkYxLoE6R0D4JwyB9wpKvjFrPiYCXtM5aRrw1P66grKxg%2FTbVnUiyKBa%2FoJCHq9CbfvDX2%2FrZa3oE%2FBtGbe8j3c7%2B7UccmwSFqXJD13DjvMw5KCpwAY6pgHHNXfuMmViPFufFcYo4Ajiqfjvn%2BPlZz3cj6WdduQpjPdbmecJXJBmyVYdD6rOt%2BzrI4fxM7ZVgMX3%2BB%2Bq0AxB09doVe9pQNuG2Q11%2BORFARnW%2FqmjRgtg74Lfw4BHHIcpT4RTlfLzbn6bkrdi306EXvlb3RBLyD53uL0aOA1ZJ7f2GV98UhcsPCkwPRCvr%2B6Ll5%2Fd8hgOOh5xgXfcSoD7q7%2F%2BlovK&X-Amz-Signature=d7ebb5d20614d078eba7c7439008394d947c59bc074b02c3e36c9a68b576d7aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
