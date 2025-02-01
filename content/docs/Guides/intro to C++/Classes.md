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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJGITVPR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwwdonv5yjj6Y1XTHmB9VK3dvDQggUO9iwnJGUCZs6wQIhAJZZDoCzCFm%2Bm9gdKy2kfkx07H9aUWmr%2FvJG5Urniuo4KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRkBejmudc8lMKIUMq3APu8bcc2oQi1epzNZpyHnAK9mbLDN%2F70RVFC2qaoQY2OgZ%2FlkQ%2FwbzMWQ%2FcwpWgtnGqXdMIeZfebdeu0w7GkzZ9LXrrtnKabma5CpaCu1ZPA96bj2F3UX0DsW30KcUSTGt0iykJpuDoypl8sQEMyQEz%2FgE%2BKZMbKQwIPiD6A4l%2BHGuyxpXIoRSq6QQNQpMzbJOzJEvx8aglx54H7PzvhugP0xy3PcAsonQ9fMkSIfA%2BAdgKSTljtGAUGiFg8RU8fC5M9FA%2Fy1iOG14hhJrHjj2KCai30XRpcFUCIN1hHS6tLO1QbBP6dJXc%2FcnkWzVU3il%2Ba4BJSLKGK6hoDjhuELrAD23wJCQpzBf8FXtxNukVoo749zVA7e8fDG%2FrENUbnsijvaL5ueTUDaYmect2zudUAxv1HRA%2B%2Fxw3Nsz2dKvy2sji42m5iGlVR%2F8lg3YlEpK2ImHpFQ0KI4dtQgG7Lz%2B8%2F9gaaiXTctgdLHK2r4x5NoS2Urzu2%2Bm5Lm8r5GKxVdWYlmAJNqpgTl54BCAjz38XIbgMOjUHK2LpAw0lvcXQf7dov99nWMIik5sO%2Bb%2FIqN6i5gvWmJa4VWuL9WHXxYyb09rh4Uz%2FBVhPVxcvRF7V4gQBJnpges5DjX2SQzDbpfe8BjqkAehT%2FpRzd95ajfoWnQ%2B3yJv3REJKokbm2ad77UG4yJ2yyOYC4VCOyeSog3kxCvsGE8Co1VVqHpfeeGqiBFn%2BIkwL4xfYTET%2FzUHMOYiK1GqdFs4DRtkOgwN4cjtduTPq1JYVGAT1QPej3u6kN40VW2eansBO1bnpEcDQsBxD7Zi0KGiz%2Bnn1kPYP%2BA3exu67ol8XOVZOH%2B1TrjGxFWsXOxvpOw0o&X-Amz-Signature=d0b0cec9815626af6c8be68fd21fc6ca92650199f3e901b51cb33744f6cd33cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
