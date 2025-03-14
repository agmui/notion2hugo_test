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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNZTTG3C%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY5cqUDGlZAL%2B6xsoqMoCuPEK2spkHsVWheSUyOAtKTwIhANfLqL%2F%2FjSheCndzvnpBQHNS0qA%2BTr49tbIyZhwOY4XcKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdK4T2ljLxj0642KIq3APMVOyGe5%2B44Ux423O%2BGAlx1pnStJ3aH02HPNen7TZln3V7RSfTqugB54Zc9lVGlepvbtyJ3xQW3AVqnm3G8Od256KaclmaPa8Tywus7Lj9ED7qeGgWzxIiNXIWWeXSAlKMubD6TCBibHjPGbYqvA7J5aXfW5YnNqSvDOie6cGycvqFewjUU1lATIl8vmf9vcTHTDO3jPKNLULEvdO7%2FlBTblYW0iaFJbESpTg6pIR2xQqOlmCVlpvVY9c2qUwWiBAGnfDaC7eSfndbaM4880OBt3DAawpbAfzT9IHdff9pGHMIKvD6tdiws8g4Y4cTCoGYS6WF1d3gHhBDkS4CjzzK54n5deNvbePmSSqTEY8YORDHhx5%2BZuMnz%2F8GEjX7wqKt%2FegQ4MS7URSvAEKmXg91Pd1IinRpPRE9A%2FXpYBHGUS02XHG94FYMGIj7Y8oHK1ZbqfMoE6DghCg0s%2BlgzS9CwOMuoogoY8zl5H69IEnrFg3%2BK%2BdXKtuwK8KgxBSFLcmdhkqQtzT9PWOXtAVgImEgUnI%2F68r8DyJHjJmdM2G3hLMLZxTdQTpQ0ZT67S3Uxd78W3TmJcwRPS68HqyFFKkkJwhJFSdGQHh1HKxPxq0wWYCL9rGqkxQoNdZxXzDo686%2BBjqkAYo6%2B2zb3XrR1HaYG1MHDOCDda%2BAoivUw0ZhoijJr4ngGW%2FHB4FS02LNhyYKwm%2FKWYTyBp3%2BKBr0TXm1XeUimjAb5dlir1G8xGzDPekiIzODSKL%2FaymLA08WaqyAvKPnOvDh4JxiivOMGiD%2ByJwT9X3h6mB7GEUtf8xXSQS8ullElb8YD%2FdjO71e%2Fauw80V%2FVIo8bsJR3%2F2XxhKgVwj9pF9ARGa3&X-Amz-Signature=c7014839daf479e701877248fdee015ec3d737ee11dd8c9064313f696b77a2d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
