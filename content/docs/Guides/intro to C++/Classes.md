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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NZDV2V%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD7BX1IZcTkeszu8rr3MmJL%2FM4CiuLwRKHVZGL8EUVUJAIgDf8jBDXiGTHzQt21batGUvzgF0DhU%2FyMGsVQY9Ytpf4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHG6l4wfURNcc%2BdJdCrcAy2ENBovNQwiaPv4EBtc8mdS5Cxc7Ag4pzHJuCIHtIcEXoQgp4GK%2Brdj20T5Ura7hqkVzdt9nD6PcWVyIJIRuFQK%2BpjzGoHpSculYIVmB%2FAKxAYkFYKjhRYcp6%2BPyFGJG%2BpUqfxyseyq6bPqm8O4U1%2FFuviwCkjlo%2BO6eoOxYE8%2FN9R%2Fhg3FwF3a0d%2F%2B1g%2FFzY3dIiM6yPatqmDLqYXHXGkAgIiAR4kkXBEIS6wj0N06ZSxKe6oRNCMDUg4y1YkWBuK1Bqx4BcukoeSHKBFpf%2F6dDjxJC2%2FIprHjbc01Jrz4vrFFttKQ1m8YOvr0AnJEwlT3TnNSNcip5GQpbQIY8alpnb6IjF%2ByBPdqCMadpp8mPuNjME8d82PzPyZ7TPukzWf1GCihiWFFd4CND30%2Bv0Q0J%2BKLmg6uyZr2JIw1HmeAFVxo%2F1uQtl09UO8B45oU%2BmW6mtAYg1S0SKvMksvp9I%2Fb4dXEZ7K7jVIYucNzX9g4IqdL0We3jq6an7tOD33KRKlkcTOIwsYYqPlM8JLqDJbXnYZgXKAjgA3b51q4DDRcLjdB8T%2Ba2uKbs8FJVyQKvW0da0yzcteGT5ky7GP5UNFNhC8VTouUHkuDk6aMQfZpOFTRadJCsYqJSr17MPaiib0GOqUBJUodNme0UsIcvwyEdf6yr41TMfdiQD%2FD6weXJgz%2FrNNv0WLQ8ZnJ%2BpaCzR3r73ocyosE3HObeFYN6iB%2FLrBH9rJN0s%2FF%2BElDMAXx53DoRkBaQ0IW2yXxeR%2BnTXG9gkF2engw5WhLeB5L7RgkukfrNzaa%2BYfkJaT%2BXGB6M9n8AFdfZf2YUQWuIdwW5Ww3y57fBu%2F9hFyK24iHAUv1P1BAHomLambm&X-Amz-Signature=7ae2e21d03ae944a3715d1d0b042ca648a71b86a4da93389c402e1a241efadc2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
