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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMOCEWA2%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC5%2BVgvk1qSOsCYJ8%2F48TxQ8ACX2LrneaufPOcWLLcDCwIhAJSxJ3FtWMcqjulDZL7877iGo1XjEk%2Fn4%2Bfr%2F3Vvh50uKv8DCCsQABoMNjM3NDIzMTgzODA1Igy%2BXvqIT5T7%2B%2B%2BNbtoq3AOfIt35P4dJsexMU0DbPLtB9plOtysYNUUZF4qOhOCwSUFyYEjKk8PrejrlFx5H%2BifMKERKS5biIGI1kFsr%2Fwg2jCeKmpLbqUow%2BDnFfjKoS9%2FGvZ%2Fh3SYAUcE6dAQXAOP46x%2Fui1aSIHrNwG2ta6ldctd70o%2BXSsjTkAAmo8GxP%2Fh%2FQSpU07UOnD8nu9KfN9aH6oIWsaDCBWm41b5WwXnxmL6%2BH7FfB4xSN6TJ6su2S4KCm39M8UESajT0gebvAgEaXewWPhz1tqNEa44c9aWUtK7VDgWW4I0euzYRGUwt4v%2FFAod%2BQ5y%2B3QbXPdiPqYYqcyNDRzlTJzmJXH3NppV5TM7a0%2BDravsY3D%2BuayJ%2FTgRZIr%2FKMr429rzeTfoCvQ3m6E2Dsz2z%2BwJdumPeSGvc%2FC7HY%2FAv2gw9zSai%2B0vwT2im3Jal%2FZHHaPVlYq0gZFlMEDER%2BIEJX9%2BK71QnJjnymyxYIMbvSr%2FuhrX3rWp09k9PCKfko1woXVRkjXRfzgjvLkX3yqFXf5N%2BKBcSuQMAOW7bdj0WKOetXbMxzwKfenEIy62U1cheOaxFlB5ld2IyN2799GsGR1%2FK9Q0UxKpY%2BbDuXOIJvsQW7FNUu8wcR01N36ERI7dQTdwqzDCYvZ7DBjqkAX5OKJog%2F%2BEekRBUoYM1qc8WhW3Eo1WdJ7f5GThh9IqlmQJi69RL41yBIph1jMH5yxIbRQFd3wpzQBWeLli31zBKZ%2BMOsv3QpHAzqhpQlg5%2BnC9lk7N6tD1Qw%2FbQyF8qY9Dae4CTs9Aiw3iyGBDAXxJfO6qivguMDw8rTiYAQiOIa9bYygtlMAQ0eoMQsPvwY7WX3HrEn2NB7zN2qCauHBwtTjxw&X-Amz-Signature=996e25a784804c91168908d339ba0762b7be9cfda275c65abf336e6a0ad42792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
