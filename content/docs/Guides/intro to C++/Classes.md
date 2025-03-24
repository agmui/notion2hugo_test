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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSKHBT6O%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICueZtrrxnp1jtR9XQ%2F5lE%2B5BL4QNCthcDne1X1E%2FHhdAiEA5EEvgyPpuhlU2i%2FKk087I9wv7uw9gYMxM7gEeOjzdBoqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIUJMNHEhDCi37zFCrcA7P0%2BVRx6LbXNC6vNoc%2BNoZFeg8z8daeanF6yYrN33UjlpyGDb6NOG3qqL7S3txcEt20wVmwwPLOtj45CnSVhRjMkuj4Oms5QUOJ00lWmS9O%2FxOxsB59602a5XseFvj5XTqB5SStHt%2BHF9v%2FIYoK7KZLC%2BlKjR3oG8FxykHMrTZGZSq7U2rNRntqapQa6K2p11DOSjVUjBbK8pT5dbPaD6LV%2BTCdWgC5AAzEYtHvzpIvm71AFF7VYPI2KJYu8Hwke41VOjX9qjB2Q1yhh8PvqtZ52WKcf278Xh4O6dwtzB746EnMyycI6PqrkZn%2B54jarhMaftuyp69YYxRsbUqHhAgPP49E7V%2BurGd8Qq3BeeCGWM99zgF0MTFq5gjmHSE3dFktyBtaPyj6hG7uD3RrfXtGMa9v%2B0viRh4FDMs%2BAe4fzVjB%2FY8JoI00sqLvVc2oNoFGPmqetirzPq60G49wwon5yKldfbyUH8XfTg5tGdxc0SVn8XGWvYTVKm1DAPd068Zw57m4%2BLQZ50rlhaFnXwc%2Bo0ntywAv%2FDrWq%2FsNR57vLRSQUSeVtAjSJTmJ0iWtf7egyKTi6BzAFKEp%2FBUqSOormQEmzPjRzCgRMerO4q3oE8KxYuiLTDmaMp5YMLCSh78GOqUB30WvcI3jHSaBCThMelPKY3M7wBAMcQO5yeHJA7eSUEk%2FoMBhrGci5Yq4JxvGjt%2FHIXQHCOYN%2FUGZ2aCXj%2FLhj6DxoZcxAZ%2FZWv2UHFQYptOcK7g9C8YFlIu1tOysdZ4I1miZepCu7D2RzVwgNzi%2FeunX9JaAKusaxgAw%2FVFjyAHH4PLNzmE1Xt5wwBg8eheHGlVQ1%2B%2FgMG6acK%2FzcXaJ44Iv1gmm&X-Amz-Signature=b216ef41cd91196f921a704d3fc86a20417157ac7602bd6316a5ccad2178600f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
