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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVE4OVRE%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIFdi8ugZ%2Faurn93BxDRGEBchiA6MQmNfvCWaHdWT68JsAiEAr9jZxN6jcJVnfjfCplNsPW1p0JnDYMbHacRAK6Q2A%2FUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGAi97FlvbiQFVlnByrcAyuJd3XvJzi%2BZnOH79aXBQN54wWGwPLuwOKVCYt2LgDg%2BGpH64cGFrncY5zwG%2FLVYoyijDBflucyartFcjKEyuJWHJ6endb6OwqI1eZjcDBgoebvwKTXpENonkviYdy12L6HdPsPOoMGeufaBODzaiYVayK0stBrAyxj%2FIHcoKRj1ISg2cHS8wB%2Fm%2FGtdsB2jLfZiD%2FfUALj1ogd8OkyOrqFW1z6tW8ij9p658BGE2fm89mEBzausL6fXWovouzw%2FexHR7QN02O5Q9fYEWSlOFLogy6KXLWi2OTq1v4KSZzyHQrR5Uqpf7NPrcbx1%2FSF27fUevktgxOOuooYxA%2FTIvwh3ZebIzJs8BwjYGYAEVXGxv9%2F7i8E4lAF%2BQTqgCnsqnLxqJhE4CUSFZF3UwwOAVEFIsksha%2FY1Hi0qSERnvXt0D%2BMkGl%2FuyFGVqzFHrJR98S1e%2F%2Bpmn3qQPr1ChC5zKAO03deBMKqRKLjGddxj3EBKbszuoyP3mYJr5miEgr2KAkCnzYlLgFlbOU6I86ui7T2ZL1XTBAAoQqMirYMOE9Lv%2FfubhJVWt9QfqNBSe3OO34EuMWS2Mg%2B5xyrP8QhZNvuzpP2kPJwu5CeAcaB%2FMIVA70TCcDxSa7p%2BnBxMIWB%2Fr0GOqUBLJx5ZGkk0e6QrSIMtiZoNnJOYu8uOhypIIzngd5zFpQGd4yBYljkj6e1OJ8EzubdkjT1%2BQ6jnMkOLldXAyIvUC4UwqbWM8n8gILVwyfgYx1JO16ehNOCs0IqirAxH7Jae%2Bywma0hGk1nQ79Yypk7M8USIOrC53Qgvh3Yha2tiquvKU8Hv1oweFlntvhpNuY6anSyl%2FyASN25GiA2sjjYYWKKA3wS&X-Amz-Signature=2641326c559b1c489df4b9e84e9c5629caeb0b4f68674d435a58dd4f18604c52&X-Amz-SignedHeaders=host&x-id=GetObject)

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
