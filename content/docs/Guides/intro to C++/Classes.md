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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI4ASRO5%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFROpLdFmzpqSxoy3IJpNJe4AvwCFBPx%2Fzyww0hJhlGZAiBDI5mYD8BpNzntLHT%2FwWRQPBoDeNvId4szHxeUdXk7QiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoTBXPLMHDT7PWicPKtwDoXujRnEDvyULkhEfZDa4jGr3xoIRu4JCEXQnRVpSvllWEkr%2FB7%2BCDuXMtGDq6Mydl6aixIIhPMDPEX%2FPnOt4ccBzHyt10mkIdYJLoW1U%2FSVG1sJyjP%2F3bU%2B9PJM0jAkSw%2BGJxtjffIqoZBSr7Xz4dlp4hCETi0r7DLtbmnIvd0CwXjClPHsc%2BCy4wHaTJWvkoguRHTbV8HwDGTwtD%2BSDrfzfmcvBYQmiWsp1NTF7U5ziqOYBACVQlqGxGUVSVEZdVbbp6FM2qCdvCznBEKbCgUwBsKNjGy4TFvpK9GaNsYo11CgyTglZ4rgaMEuMl33qnAWXNkWq9VWFnCoICgZLqkFBvRVC4nojYO9YHvDt1VPlyyAInuHJC%2BJCkImeaAYw68BMUfjIqh1e%2B2X2VbVYDx0NbC1%2Fn26vVfv6B2wAOIUoURJs3K6k9SCZQ5uxHAHyS7Gngx8Ds%2FRLRXou6iUa4KISBkX3h8zjjiN9RrrE9OwqCg5VDxXBpfMdnSe9vcgV6nk%2BMTUhdi0EmL6AL1zKmNln7QEFLX3u3tjJCDDJoXAflUxiorFFO6EX%2BZfCDo08%2B9zVqViRFSXMWUmiSJviLFPWy8IujQYMlH3ZkD3qvu5%2FWtoWlUfHGYvblOMw7L%2BgvQY6pgF0%2F4DRq%2BUTh0b6o2XFuLBnXI3ICoj%2BVI41nm3MeRw%2FVW%2FOf4%2FEXNSllf1UJrijhD5uVdEYWpXbZu%2Fmpz8%2Bdqm24DRAjubHMTeltEN3o3tuN7q3ArehYTg8hn7GwQuT%2FoRjgQT2zYWd%2F%2Bd0VgBwWmtDDAKsk8%2FMLcr5tOek0h1979rOZR1qGNMK65CFIN5qyRdayRMCHm59brvnBiGj12FJZcKWekVr&X-Amz-Signature=9a0dd064054fa7f0e6bf2dc39b4059eee42e589f5dd7f8c5f7b50a64b32c7a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
