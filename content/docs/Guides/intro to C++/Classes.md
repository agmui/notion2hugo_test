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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TED4JZWF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzR1g0XgL2F8hqJZmQ8rM6ji89a2Shbt8dWYkfHhUBYAIgFk8ymCLHChalS%2BBIg1Do4nY2hIUHs%2BP%2F87m8W5RU0WsqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeuQTXqatFkQiKBEircA8YQhsjkWdGDkNDn636k2VfO09vvntDD%2FiZvUcQmoWnjbJi3FCpv%2B0wyZ3y4HfgBkYhtQzATM%2BwuuM8QY6dm%2BBuwAjf%2Fql7pvv0pSSK728TIvKXgP2NskMxue0YoNdg2PC1XcxfPX3TjhEkX96q4BTcWn8nNnneSyk1kVMEs3T0JPmwDdvr7cOlVk8YKRstjxCKeZYBOTwh9zpp3fYiDVZ2QdZwHQsDZozpLZXkj41J5soUkwn7C04zzltheQ0nYKS%2Bw2TDZrg0Gjn2hb72E%2FD8D1fJB1rR7hYnUJg29H2ftprK0vNLWSLrXMRaBa7Pw9QdrH5v%2Fr7Q3lwpkMy08%2FGwqj3Np193LDkN4Wx1LZYnPXWOau61rpfa5FiVv85ubOjRJGJ3KT1rnqOfChpB06Xt9YKUZ8jg2K0ugOOgXqLjEH31xwciebuk3atZDHn4NAE2SWnZM8q0JXQQCNtX9KlYRtUdjvjpVZ%2BlwQLiLzm6zu%2BJSsiFnJCbUEmw4vmHdJd9FsVtQQ%2FD%2BEj5EUxbrjEUMp0saFHlJC2UcmuDidhNR4aWKcaFjaAtcsUmg%2FlMjT%2F597leS9zT6aGZRVK%2Bksvc1leppyOJ475ZXgKRy6R6AHHJfGjPr2NFSXY%2FtMOfig78GOqUBJVJrS1Qtj0O5udXLn12EccJLbnfJlkHU5kvOn7cC%2BZmDaM2PsWpssWYD3Gel4TDooR3usOS9eW1%2FiBTJfEL%2BVZ69Nf019KDoUfJzr40BkRBGEHk48xJJ0qtyER6wCy0bFnZpkJmsekfZFlAR%2BVCAJCgDLT%2FmLbFuJchhRH7kTEwc9aea8tJOiyTSUCimE8M6xjmZJHiHoLvlvZTcy8ybvY%2F1HQMF&X-Amz-Signature=984e3f166f53da77eba67c285d02ffeb139264fd78a715f1f2e4e8d7a1ed58be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
